// 產生六年級各科「期中考／期末考」重點複習影片（MP4 + 字幕 + 章節）。
// 用法：node scripts/review-videos/make.mjs [--only math-6A-midterm,eng-6B-final] [--plan] [--frames-only]
// 需求：Windows（OneCore 中文語音 Yating、SAPI 英文語音 Zira）、ffmpeg、playwright chromium。
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync, spawn } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SUBJECTS, EXAMS, buildPlan, loadNotes, ROOT } from './content.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = (name) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; };
const ONLY = (opt('--only') || '').split(',').filter(Boolean);
const BUILD = process.env.REVIEW_VIDEO_BUILD || path.join(os.tmpdir(), 'sixth-review-videos');
const OUT = process.env.REVIEW_VIDEO_OUT || path.join(ROOT, 'videos');
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const FPS = 10;
const RATE = 16000;
const TTS_DIR = path.join(BUILD, 'tts');
fs.mkdirSync(TTS_DIR, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });

const log = (...a) => console.log(new Date().toISOString().slice(11, 19), ...a);

// ---------- WAV ----------
function readWav(file) {
  const b = fs.readFileSync(file);
  let p = 12, fmt = null, data = null;
  while (p + 8 <= b.length) {
    const id = b.toString('ascii', p, p + 4);
    const size = b.readUInt32LE(p + 4);
    if (id === 'fmt ') fmt = { ch: b.readUInt16LE(p + 10), rate: b.readUInt32LE(p + 12), bits: b.readUInt16LE(p + 22) };
    if (id === 'data') { data = b.subarray(p + 8, Math.min(b.length, p + 8 + size)); break; }
    p += 8 + size + (size % 2);
  }
  if (!fmt || !data) throw new Error(`bad wav ${file}`);
  if (fmt.ch !== 1 || fmt.bits !== 16 || fmt.rate !== RATE) throw new Error(`unexpected wav format ${JSON.stringify(fmt)} ${file}`);
  const pcm = new Int16Array(data.buffer.slice(data.byteOffset, data.byteOffset + (data.length & ~1)));
  // 去掉頭尾靜音（停頓由時間軸控制）
  const th = 220;
  let s = 0, e = pcm.length;
  while (s < e && Math.abs(pcm[s]) < th) s++;
  while (e > s && Math.abs(pcm[e - 1]) < th) e--;
  s = Math.max(0, s - RATE * 0.03); e = Math.min(pcm.length, e + RATE * 0.06);
  return pcm.subarray(s, e);
}
function writeWav(file, pcm) {
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + pcm.length * 2, 4); h.write('WAVE', 8); h.write('fmt ', 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(1, 22); h.writeUInt32LE(RATE, 24);
  h.writeUInt32LE(RATE * 2, 28); h.writeUInt16LE(2, 32); h.writeUInt16LE(16, 34); h.write('data', 36); h.writeUInt32LE(pcm.length * 2, 40);
  fs.writeFileSync(file, Buffer.concat([h, Buffer.from(pcm.buffer, pcm.byteOffset, pcm.length * 2)]));
}
function tone(freqs, ms, amp = 0.22) {
  const n = Math.round(RATE * ms / 1000);
  const out = new Int16Array(n);
  for (let i = 0; i < n; i++) {
    const t = i / RATE;
    const env = Math.min(1, i / (RATE * 0.005)) * Math.exp(-4.5 * i / n);
    let v = 0;
    for (const f of freqs) v += Math.sin(2 * Math.PI * f * t);
    out[i] = Math.round((v / freqs.length) * env * amp * 32767);
  }
  return out;
}
const TICK = tone([1046.5], 90, 0.16);
const CHIME = (() => { const a = tone([880, 1318.5], 160, 0.18), b = tone([1318.5, 1760], 260, 0.18); const o = new Int16Array(a.length + b.length); o.set(a); o.set(b, a.length); return o; })();

const hash = (seg) => crypto.createHash('sha1').update(`${seg.lang}|v2|${seg.text}`).digest('hex').slice(0, 20);
const segFile = (seg) => path.join(TTS_DIR, `${hash(seg)}.wav`);

function runTts(segs) {
  const missing = [];
  const seen = new Set();
  for (const s of segs) {
    const f = segFile(s);
    if (seen.has(f) || fs.existsSync(f)) continue;
    seen.add(f);
    missing.push({ out: f, lang: s.lang, text: s.text });
  }
  if (!missing.length) return;
  // 分成 4 批平行合成
  const N = Math.min(4, Math.ceil(missing.length / 40));
  const batches = Array.from({ length: N }, (_, i) => missing.filter((_, k) => k % N === i));
  log(`TTS ${missing.length} segments in ${N} workers`);
  return Promise.all(batches.map((b, i) => new Promise((resolve, reject) => {
    const jobFile = path.join(BUILD, `tts-jobs-${process.pid}-${i}.json`);
    fs.writeFileSync(jobFile, JSON.stringify(b), 'utf8');
    const p = spawn('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(here, 'tts.ps1'), '-Jobs', jobFile], { stdio: ['ignore', 'pipe', 'pipe'] });
    let err = '';
    p.stdout.on('data', (d) => process.stdout.write(`  [tts${i}] ${d}`));
    p.stderr.on('data', (d) => { err += d; });
    p.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`tts worker ${i} failed: ${err.slice(0, 2000)}`))));
  })));
}

// ---------- 時間軸 ----------
const q = (sec) => Math.ceil(sec * FPS - 1e-6) / FPS; // 對齊影格，避免影音漂移
function timeline(plan) {
  const steps = [];
  let t = 0;
  plan.scenes.forEach((sc, si) => {
    sc.steps.forEach((st, k) => {
      const pcs = (st.narration || []).map((s) => readWav(segFile(s)));
      const gap = 0.16;
      const speech = pcs.reduce((a, p) => a + p.length / RATE, 0) + Math.max(0, pcs.length - 1) * gap;
      const lead = st.chime ? 0.55 : k === 0 ? 0.35 : 0.15;
      const isLast = k === sc.steps.length - 1;
      const tail = st.silence != null && !pcs.length ? st.silence : isLast ? 0.9 : 0.45;
      const dur = q(lead + speech + tail);
      steps.push({ si, k, start: t, dur, lead, gap, pcs, st, text: (st.narration || []).map((s) => s.text).join(' ') });
      t = q(t + dur);
    });
  });
  return { steps, total: t };
}

function buildAudio(tl, file) {
  const total = Math.ceil(tl.total * RATE) + RATE;
  const out = new Int16Array(total);
  const mix = (pcm, at) => {
    const o = Math.round(at * RATE);
    for (let i = 0; i < pcm.length && o + i < out.length; i++) out[o + i] = Math.max(-32768, Math.min(32767, out[o + i] + pcm[i]));
  };
  for (const s of tl.steps) {
    if (s.st.tick) mix(TICK, s.start + 0.02);
    if (s.st.chime) mix(CHIME, s.start + 0.02);
    let at = s.start + s.lead;
    for (const p of s.pcs) { mix(p, at); at += p.length / RATE + s.gap; }
  }
  writeWav(file, out.subarray(0, Math.ceil(tl.total * RATE)));
}

// ---------- 字幕與章節 ----------
const ts = (sec, sep = ',') => {
  const ms = Math.round(sec * 1000);
  const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, s = Math.floor(ms / 1000) % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}${sep}${String(ms % 1000).padStart(3, '0')}`;
};
function srt(tl) {
  const cues = [];
  for (const s of tl.steps) {
    if (!s.text) continue;
    const speechDur = s.pcs.reduce((a, p) => a + p.length / RATE, 0) + Math.max(0, s.pcs.length - 1) * s.gap;
    const chunks = [];
    for (const sent of s.text.split(/(?<=[。！？!?；])/)) {
      let x = sent.trim();
      while (x.length > 34) {
        let cut = x.lastIndexOf('，', 34);
        if (cut < 12) cut = 34;
        chunks.push(x.slice(0, cut + 1)); x = x.slice(cut + 1).trim();
      }
      if (x) chunks.push(x);
    }
    const totalChars = chunks.reduce((a, c) => a + c.length, 0) || 1;
    let t = s.start + s.lead;
    for (const c of chunks) {
      const d = speechDur * (c.length / totalChars);
      cues.push([t, t + d, c.replace(/[，、]$/, '')]);
      t += d;
    }
  }
  return cues.map(([a, b, c], i) => `${i + 1}\n${ts(a)} --> ${ts(Math.max(b, a + 0.5))}\n${c}\n`).join('\n');
}
function chapters(plan, tl) {
  const unitNames = plan.scenes[0].data.units.map((u) => u.title);
  const list = [];
  for (const s of tl.steps) {
    if (s.k !== 0) continue;
    const sc = plan.scenes[s.si];
    const sec = sc.chapter.replace(/^單元 \d+／\d+・/, '').replace(/\s*\d+／\d+$/, '');
    const label = plan.scenes[0].data.units[sc.unit ?? 0].label.replace(/\s+/g, '');
    const nm = sc.unit != null ? unitNames[sc.unit] : '';
    const title = sc.unit != null ? `${label} ${nm.length > 14 ? nm.slice(0, 13) + '…' : nm}｜${sec}` : sec;
    if (!list.length || list[list.length - 1].title !== title) list.push({ title, start: s.start });
  }
  list.forEach((c, i) => { c.end = i + 1 < list.length ? list[i + 1].start : tl.total; });
  return list;
}

// ---------- 畫面 ----------
async function renderFrames(plan, tl, dir, browser) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  const video = { math: !!plan.subject.math, color: plan.subject.color, soft: plan.subject.soft, emoji: plan.subject.emoji, term: plan.exam.term, subjectName: plan.subject.name, examName: plan.exam.examName };
  const unitNames = plan.scenes[0].data.units.map((u) => u.title);
  const jobs = [];
  const keyToFile = new Map();
  for (const s of tl.steps) {
    const sc = plan.scenes[s.si];
    const showKey = sc.kind === 'question' ? `c${s.st.countdown || 0}` : `s${s.st.show ?? s.k}`;
    const key = `${s.si}|${showKey}`;
    if (!keyToFile.has(key)) {
      const file = path.join(dir, `${String(keyToFile.size).padStart(5, '0')}.jpg`);
      keyToFile.set(key, file);
      jobs.push({ file, s, sc });
    }
    s.frame = keyToFile.get(key);
  }
  const pending = jobs.filter((j) => !fs.existsSync(j.file));
  log(`frames ${jobs.length} (${pending.length} to render)`);
  const W = 4;
  const warn = [];
  await Promise.all(Array.from({ length: W }, async (_, w) => {
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
    await page.goto(pathToFileURL(path.join(here, 'scene.html')).href);
    await page.evaluate(() => document.fonts.ready);
    for (let i = w; i < pending.length; i += W) {
      const { file, s, sc } = pending[i];
      const crumb = sc.unit != null ? `${plan.scenes[0].data.units[sc.unit].label}｜${unitNames[sc.unit]}` : plan.title;
      const scene = { ...sc, crumb, foot: sc.chapter.replace(/^單元 \d+／\d+・/, '') };
      const res = await page.evaluate(([v, scn, k, prog]) => window.renderStep(v, scn, k, prog), [video, scene, s.k, s.start / tl.total]);
      await page.evaluate(() => document.fonts.ready);
      if (res.overflow || res.zoom < 0.62) warn.push(`${path.basename(file)} ${sc.kind} ${sc.chapter} zoom=${res.zoom.toFixed(2)}${res.overflow ? ' OVERFLOW' : ''}`);
      await page.screenshot({ path: file, type: 'jpeg', quality: 93 });
    }
    await page.close();
  }));
  if (warn.length) { log(`layout warnings: ${warn.length}`); fs.writeFileSync(path.join(dir, '..', 'layout-warnings.txt'), [...new Set(warn)].join('\n')); }
}

function ffmpeg(argv) {
  const r = spawnSync(FFMPEG, ['-hide_banner', '-loglevel', 'error', '-y', ...argv], { stdio: 'inherit' });
  if (r.status !== 0) throw new Error(`ffmpeg failed (${r.status})`);
}

function outName(plan) {
  return `${plan.exam.term}-${plan.subject.name}-${plan.exam.examName}-重點複習`;
}

async function makeVideo(plan, browser) {
  const dir = path.join(BUILD, plan.id);
  fs.mkdirSync(dir, { recursive: true });
  log(`== ${plan.id} ${plan.title} (${plan.scenes.length} scenes)`);
  await runTts(plan.scenes.flatMap((sc) => sc.steps.flatMap((st) => st.narration || [])));
  const tl = timeline(plan);
  log(`duration ${(tl.total / 60).toFixed(1)} min`);
  if (args.includes('--plan')) return { id: plan.id, minutes: tl.total / 60 };
  await renderFrames(plan, tl, path.join(dir, 'frames'), browser);
  if (args.includes('--frames-only')) return { id: plan.id, minutes: tl.total / 60 };

  const wav = path.join(dir, 'audio.wav');
  buildAudio(tl, wav);
  const list = tl.steps.map((s) => `file '${s.frame.replace(/\\/g, '/')}'\nduration ${s.dur.toFixed(3)}`).join('\n') + `\nfile '${tl.steps.at(-1).frame.replace(/\\/g, '/')}'\n`;
  const listFile = path.join(dir, 'frames.txt');
  fs.writeFileSync(listFile, list);

  const chaps = chapters(plan, tl);
  const esc = (s) => s.replace(/([=;#\\\n])/g, '\\$1');
  const meta = [';FFMETADATA1', `title=${esc(plan.title)}`, `artist=${esc('小小學習島 Sixth')}`, `comment=${esc('依 108 課綱與公開考卷題型整理，題目為重新命題的練習題')}`,
    ...chaps.flatMap((c) => ['[CHAPTER]', 'TIMEBASE=1/1000', `START=${Math.round(c.start * 1000)}`, `END=${Math.round(c.end * 1000)}`, `title=${esc(c.title)}`])].join('\n');
  const metaFile = path.join(dir, 'meta.txt');
  fs.writeFileSync(metaFile, meta, 'utf8');

  const name = outName(plan);
  const mp4 = path.join(OUT, `${name}.mp4`);
  log('encoding…');
  ffmpeg(['-f', 'concat', '-safe', '0', '-i', listFile, '-i', wav, '-i', metaFile,
    '-map', '0:v', '-map', '1:a', '-map_metadata', '2', '-map_chapters', '2',
    '-vf', `fps=${FPS},format=yuv420p`, '-c:v', 'libx264', '-preset', 'medium', '-tune', 'stillimage', '-crf', '25', '-g', String(FPS * 30),
    '-c:a', 'aac', '-b:a', '64k', '-ac', '1', '-ar', '44100', '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11',
    '-movflags', '+faststart', '-t', tl.total.toFixed(3), mp4]);
  fs.writeFileSync(path.join(OUT, `${name}.srt`), srt(tl), 'utf8');
  const yt = chaps.map((c) => `${ts(c.start, '').slice(0, 8).replace(/^00:/, '')} ${c.title}`).join('\n');
  fs.writeFileSync(path.join(OUT, `${name}-章節.txt`), `${plan.title}\n\n${yt}\n`, 'utf8');
  const size = fs.statSync(mp4).size;
  log(`done ${mp4} ${(size / 1048576).toFixed(1)} MB`);
  return { id: plan.id, file: path.basename(mp4), title: plan.title, minutes: +(tl.total / 60).toFixed(1), sizeMB: +(size / 1048576).toFixed(1), units: plan.units, chapters: chaps.length, scenes: plan.scenes.length, questions: plan.scenes.filter((s) => s.kind === 'question').length };
}

const notes = await loadNotes();
const plans = [];
for (const s of SUBJECTS) for (const e of EXAMS) {
  const p = buildPlan(s, e, notes);
  if (p && (!ONLY.length || ONLY.includes(p.id))) plans.push(p);
}
let browser = null;
if (!args.includes('--plan')) {
  const { chromium } = await import('playwright');
  browser = await chromium.launch();
}
// 清單：每支影片的結果各存一份，再彙整成 manifest.json 與「影片清單.md」（可多個程序同時跑）
function writeIndex() {
  const order = [];
  for (const e of EXAMS) for (const s of SUBJECTS) order.push(`${s.prefix}-${e.semester}-${e.scope}`);
  const results = order.map((id) => path.join(BUILD, id, 'result.json')).filter((f) => fs.existsSync(f))
    .map((f) => JSON.parse(fs.readFileSync(f, 'utf8'))).filter((r) => fs.existsSync(path.join(OUT, r.file)));
  fs.writeFileSync(path.join(OUT, 'manifest.json'), JSON.stringify(results, null, 2));
  const total = results.reduce((a, r) => a + r.minutes, 0);
  const lines = ['# 六年級段考重點複習影片', '',
    `共 ${results.length} 支，總長約 ${(total / 60).toFixed(1)} 小時。每支影片都有章節（播放器可跳段）與同名 .srt 字幕；「-章節.txt」可直接貼到 YouTube 說明欄。`, '',
    '內容依本站 64 單元段考講義與教學頁整理：核心觀念 → 必背公式口訣 → 段考補強 → 必備知識 → 考古題型地圖與實戰（先倒數作答再公布詳解）→ 易錯陷阱 → 單元小結 → 題型破題法。題目為依公開考卷題型與 108 課綱重新命題的練習題，不是原卷。實際範圍以老師公告為準。', ''];
  for (const e of EXAMS) {
    const rows = results.filter((r) => r.id.endsWith(`-${e.semester}-${e.scope}`));
    if (!rows.length) continue;
    lines.push(`## ${e.termName}・${e.examFull}`, '', '| 科目 | 影片 | 長度 | 單元 | 題型實戰 |', '| :-- | :-- | --: | :-- | --: |');
    for (const r of rows) lines.push(`| ${r.subject} | [${r.file}](<${r.file}>) | ${r.minutes} 分 | ${r.units.join('、')} | ${r.questions} 題 |`);
    lines.push('');
  }
  lines.push('重新產生：`node scripts/review-videos/make.mjs`（可加 `--only math-6A-midterm`）。需要 Windows 中文語音 Yating、ffmpeg 與 Playwright Chromium。', '');
  fs.writeFileSync(path.join(OUT, '影片清單.md'), lines.join('\n'), 'utf8');
}

for (const p of plans) {
  const r = await makeVideo(p, browser);
  if (r.file) {
    fs.writeFileSync(path.join(BUILD, p.id, 'result.json'), JSON.stringify({ ...r, subject: p.subject.name, semester: p.exam.semester, scope: p.exam.scope }));
    writeIndex();
  }
}
if (args.includes('--index')) writeIndex();
if (browser) await browser.close();
log('all done');
process.exit(0);
