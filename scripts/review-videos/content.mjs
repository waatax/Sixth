// 從 64 單元段考講義（src/data/examNotes）與教學頁（src/data/lessons/*.md）組出 32 支複習影片的分鏡腳本。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { segments, plain } from './speech.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
export const ROOT = path.resolve(here, '../..');
const LESSONS = path.join(ROOT, 'src/data/lessons');

export const SUBJECTS = [
  { prefix: 'math', name: '數學', emoji: '🧮', color: '#2563EB', soft: '#E8F0FF', math: true },
  { prefix: 'man', name: '國語', emoji: '📖', color: '#C2410C', soft: '#FFF0E6' },
  { prefix: 'eng', name: '英語', emoji: '🔤', color: '#7C3AED', soft: '#F2ECFF' },
  { prefix: 'sci', name: '自然', emoji: '🔬', color: '#059669', soft: '#E4F7EF', math: true },
  { prefix: 'soc', name: '社會', emoji: '🌏', color: '#B45309', soft: '#FDF3E3' },
  { prefix: 'art', name: '藝術', emoji: '🎨', color: '#DB2777', soft: '#FDEBF4' },
  { prefix: 'pe', name: '健體', emoji: '💪', color: '#DC2626', soft: '#FDECEC' },
  { prefix: 'comp', name: '綜合', emoji: '🌱', color: '#0D9488', soft: '#E3F6F4' }
];

export const EXAMS = [
  { semester: '6A', scope: 'midterm', term: '6上', termName: '六年級上學期', examName: '期中考', examFull: '期中考（第一次段考）' },
  { semester: '6A', scope: 'final', term: '6上', termName: '六年級上學期', examName: '期末考', examFull: '期末考（第二次段考）' },
  { semester: '6B', scope: 'midterm', term: '6下', termName: '六年級下學期', examName: '期中考', examFull: '期中考（第一次段考）' },
  { semester: '6B', scope: 'final', term: '6下', termName: '六年級下學期', examName: '畢業考', examFull: '畢業考（期末考）' }
];

const CN_NUM = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];

// ---------- markdown 小工具 ----------
function section(md, startRe) {
  const lines = md.split(/\r?\n/);
  const i = lines.findIndex((l) => startRe.test(l));
  if (i < 0) return [];
  const out = [];
  for (let j = i + 1; j < lines.length; j++) {
    if (/^## /.test(lines[j])) break;
    out.push(lines[j]);
  }
  return out;
}

// 把 markdown 行切成區塊：段落、清單項、表格
export function mdBlocks(lines) {
  const blocks = [];
  let para = [];
  const flush = () => {
    if (para.length) blocks.push({ type: 'p', text: para.join(' ') });
    para = [];
  };
  for (let k = 0; k < lines.length; k++) {
    const l = lines[k];
    if (!l.trim() || /^<\/?(details|summary)/.test(l.trim())) { flush(); continue; }
    if (/^\s*\|/.test(l)) {
      flush();
      const rows = [];
      while (k < lines.length && /^\s*\|/.test(lines[k])) {
        const cells = lines[k].trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
        if (!cells.every((c) => /^:?-{2,}:?$/.test(c))) rows.push(cells);
        k++;
      }
      k--;
      blocks.push({ type: 'table', rows });
      continue;
    }
    let m;
    if ((m = /^\s*(?:[-*]|\d+[.、])\s+(.*)$/.exec(l))) {
      flush();
      blocks.push({ type: 'li', ordered: /^\s*\d/.test(l), num: (/^\s*(\d+)/.exec(l) || [])[1], text: m[1] });
      continue;
    }
    if (/^#{3,6}\s/.test(l)) { flush(); blocks.push({ type: 'h', text: l.replace(/^#+\s*/, '') }); continue; }
    para.push(l.trim());
  }
  flush();
  return blocks;
}

function blockSpeech(b) {
  if (b.type === 'table') {
    const [head, ...rows] = b.rows;
    return rows.map((r) => r.map((c, i) => (i === 0 ? c : `${head?.[i] ? '' : ''}${c}`)).join('，')).join('。');
  }
  return b.text;
}

function parseQuestions(lines) {
  const text = lines.join('\n');
  const parts = text.split(/\n(?=\*\*第 \d+ 題\*\*)/);
  const qs = [];
  for (const part of parts) {
    const hm = /^\*\*第 (\d+) 題\*\*【([^】]*)】\s*([\s\S]*)$/.exec(part.trim());
    if (!hm) continue;
    const [, num, tag, restAll] = hm;
    const [kind, ...src] = tag.split('・');
    const [before, after = ''] = restAll.split(/<details>/);
    const qLines = [];
    const options = [];
    for (const l of before.split('\n')) {
      const om = /^\*\*([A-E])[.．]\*\*\s*(.*?)\s*$/.exec(l.trim());
      if (om) options.push({ key: om[1], text: om[2] });
      else if (options.length === 0) qLines.push(l);
    }
    const ans = after.replace(/<\/?details>|<summary>.*?<\/summary>/g, '');
    const get = (re) => (re.exec(ans)?.[1] || '').trim();
    const answer = get(/✅\s*\*\*正確答案\*\*\s*([\s\S]*?)(?=\n\s*\n|🔍|📐|$)/);
    const key = get(/🔍\s*\*\*審題關鍵\*\*[：:]?\s*([\s\S]*?)(?=\n\s*\n|📐|$)/);
    const stepsRaw = /📐\s*\*\*解題步驟\*\*[：:]?\s*([\s\S]*?)(?=⚠️|📖|$)/.exec(ans)?.[1] || '';
    const steps = mdBlocks(stepsRaw.split('\n'));
    const trap = get(/⚠️\s*\*\*易錯提醒\*\*[：:]?\s*([\s\S]*?)(?=\n\s*\n|📖|$)/);
    qs.push({
      num: Number(num), kind: kind.trim(), source: src.join('・').trim(),
      stem: mdBlocks(qLines), options, answer, key, steps, trap
    });
  }
  return qs;
}

export function parseLesson(unitId) {
  const file = path.join(LESSONS, `${unitId}.md`);
  const md = fs.readFileSync(file, 'utf8');
  // 段考回推補強：每個 ### 一張
  const boostLines = section(md, /^## 🧩 段考回推補強/);
  const boosts = [];
  let cur = null;
  for (const l of boostLines) {
    if (/^### /.test(l)) { cur = { heading: l.replace(/^###\s*/, ''), lines: [] }; boosts.push(cur); }
    else if (cur) cur.lines.push(l);
  }
  const extra = mdBlocks(section(md, /^## 📚 必備知識補充/)).filter((b) => b.type === 'li');
  const practice = section(md, /^## 🧪 段考題型實戰/);
  // 題型表
  const typeRows = [];
  for (const l of practice) {
    const m = /^\|\s*\*\*(.+?)\*\*\s*\|\s*(.+?)\s*\|\s*([\d、,，\s]+)\|/.exec(l);
    if (m) typeRows.push({ type: m[1], what: m[2], nums: m[3].split(/[、,，\s]+/).filter(Boolean).map(Number) });
  }
  const questions = parseQuestions(practice);
  return { boosts: boosts.map((b) => ({ heading: b.heading, blocks: mdBlocks(b.lines) })), extra, typeRows, questions };
}

// ---------- 分鏡 ----------
function unitLabel(u) {
  const n = Number((u.title.match(/^(?:單元|Unit)\s*(\d+)/i) || [])[1]);
  return n ? `單元${CN_NUM[n] || n}` : '這個單元';
}
function weightSpeech(w, count) {
  const m = /(\d+)\s*%/.exec(w || '');
  if (!m) return '';
  const pct = Number(m[1]);
  if (pct >= 100 || count === 1) return '這次考試的重點全部在這個單元。';
  return `這個單元大約佔考試的${CN_NUM[Math.round(pct / 10)] || pct / 10}成。`;
}
// step = { narration: [segments], show: n }  scene = { kind, chapter, data, steps: [...] }
function say(text, opt) {
  return segments(text, opt);
}

function splitConcept(raw) {
  const t = plain(raw).trim();
  const m = /^【([^】]+)】\s*[：:]?\s*([\s\S]*)$/.exec(t);
  const title = m ? m[1] : '';
  let body = m ? m[2] : t;
  let lines = body.split('\n').map((l) => l.trim()).filter(Boolean);
  // 一行太長就依句號切成多點
  const out = [];
  for (const l of lines) {
    if (l.length > 90 && !/^[•\-\d]/.test(l)) {
      const parts = l.split(/(?<=[。；！])/).map((x) => x.trim()).filter(Boolean);
      out.push(...parts);
    } else out.push(l);
  }
  lines = out.map((l) => l.replace(/^(?:[•-]|\d+[.、])\s*/, ''));
  return { title, lines };
}

function pickQuestions(lesson) {
  const chosen = [];
  const seen = new Set();
  for (const row of lesson.typeRows) {
    const q = row.nums.map((n) => lesson.questions.find((x) => x.num === n)).find((x) => x && !seen.has(x.num));
    if (q) { seen.add(q.num); chosen.push({ ...q, typeLabel: row.type, typeWhat: row.what }); }
  }
  // 題型表沒列到的題型（例如是非、配對）也補一題，確保所有題型都練到
  const kinds = new Set(chosen.map((q) => q.kind));
  for (const q of lesson.questions) {
    if (!kinds.has(q.kind) && !seen.has(q.num) && q.num >= 6) {
      kinds.add(q.kind); seen.add(q.num); chosen.push({ ...q, typeLabel: q.kind, typeWhat: '' });
    }
  }
  // 每單元最多 5 題：先保證每種作答題型（選擇、是非、填充、計算、應用…）都有一題，再依題型表順序補滿
  const MAX = 5;
  if (chosen.length > MAX) {
    const keep = [];
    const kindSeen = new Set();
    for (const q of chosen) if (!kindSeen.has(q.kind)) { kindSeen.add(q.kind); keep.push(q); }
    for (const q of chosen) if (keep.length < MAX && !keep.includes(q)) keep.push(q);
    return keep.slice(0, Math.max(MAX, kindSeen.size)).sort((a, b) => a.num - b.num);
  }
  return chosen.sort((a, b) => a.num - b.num);
}

function optionSpeech(o) {
  return `${o.key}，${o.text}`;
}

export async function loadNotes() {
  const mod = await import(pathToFileURL(path.join(ROOT, 'src/data/examNotes/index.js')).href);
  return mod.allExamNotes;
}

export function videoId(subject, exam) {
  return `${subject.prefix}-${exam.semester}-${exam.scope}`;
}

export function buildPlan(subject, exam, notes) {
  const opt = { math: !!subject.math };
  const units = Object.values(notes)
    .filter((n) => n.unitId.startsWith(subject.prefix + '-') && n.semester === exam.semester && n.examScope === exam.scope)
    .sort((a, b) => Number(a.unitId.split('-u')[1]) - Number(b.unitId.split('-u')[1]));
  if (!units.length) return null;
  const title = `${exam.term}${subject.name}・${exam.examName}重點複習`;
  const scenes = [];
  const unitTitles = units.map((u) => u.title.replace(/^(單元|Unit)\s*\d+\s*[：:]\s*/i, ''));

  scenes.push({
    kind: 'cover', chapter: '開場',
    data: { title, termName: exam.termName, examFull: exam.examFull, units: units.map((u, i) => ({ label: u.title.match(/^(單元|Unit)\s*\d+/i)?.[0] || `單元 ${i + 1}`, title: unitTitles[i] })) },
    steps: [
      { narration: say(`哈囉，歡迎來到小小學習島的段考重點複習。這一集是${exam.termName}，${subject.name}，${exam.examFull}。`) },
      { narration: say(units.length === 1 ? `這次的考試範圍是：${unitLabel(units[0])}，${unitTitles[0]}。` : `考試範圍有${CN_NUM[units.length] || units.length}個單元：${units.map((u, i) => `${unitLabel(u)}，${unitTitles[i]}`).join('；')}。`, opt) },
      { narration: say('每個單元，我們會依序複習核心觀念、必背公式和口訣、考卷常考的補強觀念，再用考古題型實戰演練，最後整理易錯陷阱。準備好紙筆，看到題目時，可以先按暫停自己作答喔！') }
    ]
  });

  units.forEach((u, ui) => {
    const lesson = parseLesson(u.unitId);
    const ulabel = `單元 ${ui + 1}／${units.length}`;
    const short = unitTitles[ui];
    const chap = (s) => `${ulabel}・${s}`;

    scenes.push({
      kind: 'unit', chapter: chap('單元導覽'), unit: ui,
      data: {
        index: ui + 1, total: units.length, title: u.title,
        labelWord: /^unit/i.test(u.title) ? 'Unit' : '單元', labelNum: (u.title.match(/^(?:單元|Unit)\s*(\d+)/i) || [])[1] || String(ui + 1), coverage: u.textbookCoverage, weight: u.examWeight,
        prior: u.priorConcept, mastery: u.masterySkill, hot: u.hotKeywords,
        highlights: (u.highlights || []).map((h) => ({ point: h.point, detail: h.detail, star: h.examWeight }))
      },
      steps: [
        { narration: say(`${unitLabel(u)}：${short}。${weightSpeech(u.examWeight, units.length)}`, opt) },
        { narration: say(`先想一想先備觀念：${u.priorConcept}。這個單元要練成的能力是：${u.masterySkill}。`, opt) },
        ...(u.highlights || []).slice(0, 3).map((h, i) => ({ narration: say(`${i === 0 ? '三大必考重點，第一，' : i === 1 ? '第二，' : '第三，'}${h.point}：${h.detail}`, opt) }))
      ]
    });

    (u.coreConcepts || []).forEach((c, ci, arr) => {
      const { title: ct, lines } = splitConcept(c);
      scenes.push({
        kind: 'concept', chapter: chap(`核心觀念 ${ci + 1}／${arr.length}`), unit: ui,
        data: { title: ct || `核心觀念 ${ci + 1}`, lines, n: ci + 1, total: arr.length },
        steps: [
          { narration: say(`核心觀念${CN_NUM[ci + 1]}：${ct}。`, opt), show: 0 },
          ...lines.map((l, li) => ({ narration: say(l, opt), show: li + 1 }))
        ]
      });
    });

    if (u.keyFormulas?.length) {
      scenes.push({
        kind: 'formulas', chapter: chap('必背公式口訣'), unit: ui,
        data: { items: u.keyFormulas },
        steps: [
          { narration: say('接下來是必背的公式和口訣，請跟著念一次。'), show: 0 },
          ...u.keyFormulas.map((f, fi) => ({
            narration: [...say(`${f.name}：`, opt), ...say(f.formula, { ...opt, latex: true }), ...say(f.detail, opt)], show: fi + 1
          }))
        ]
      });
    }

    lesson.boosts.forEach((b, bi, arr) => {
      const blocks = b.blocks.filter((x) => x.type !== 'h' || x.text);
      scenes.push({
        kind: 'boost', chapter: chap(`段考補強 ${bi + 1}／${arr.length}`), unit: ui,
        data: { heading: b.heading, blocks, n: bi + 1, total: arr.length },
        steps: [
          { narration: say(`考卷常考、容易漏掉的觀念：${b.heading}。`, opt), show: 0 },
          ...blocks.map((x, xi) => ({ narration: say(blockSpeech(x), opt), show: xi + 1 }))
        ]
      });
    });

    if (lesson.extra.length) {
      const chunks = [];
      for (let i = 0; i < lesson.extra.length; i += 5) chunks.push(lesson.extra.slice(i, i + 5));
      chunks.forEach((items, ki) => scenes.push({
        kind: 'extra', chapter: chap('必備知識補充'), unit: ui,
        data: { items: items.map((x) => x.text), n: ki + 1, total: chunks.length },
        steps: [
          { narration: say(ki === 0 ? '再補充幾個題庫和考卷會用到的必備知識。' : '必備知識補充，續。'), show: 0 },
          ...items.map((x, xi) => ({ narration: say(x.text, opt), show: xi + 1 }))
        ]
      }));
    }

    const qs = pickQuestions(lesson);
    if (lesson.typeRows.length) {
      scenes.push({
        kind: 'typemap', chapter: chap('考古題型地圖'), unit: ui,
        data: { rows: lesson.typeRows },
        steps: [
          { narration: say(`${short}在考卷上，常見這${CN_NUM[lesson.typeRows.length] || lesson.typeRows.length}種題型。`, opt), show: 0 },
          ...lesson.typeRows.map((r, ri) => ({ narration: say(`${r.type}：${r.what}。`, opt), show: ri + 1 }))
        ]
      });
    }

    qs.forEach((q, qi) => {
      const head = `考古題型實戰，第${CN_NUM[qi + 1] || qi + 1}題，${q.typeLabel}${q.kind && q.kind !== q.typeLabel ? `，${q.kind}題` : ''}。`;
      scenes.push({
        kind: 'question', chapter: chap(`題型實戰 ${qi + 1}／${qs.length}`), unit: ui,
        data: { q, n: qi + 1, total: qs.length },
        steps: [
          { narration: [...say(head), ...q.stem.flatMap((b) => say(blockSpeech(b), opt)), ...q.options.flatMap((o) => say(optionSpeech(o), opt)), ...say('先暫停想一想，倒數三秒。')], show: 0 },
          { narration: [], countdown: 3, silence: 1.0, tick: true },
          { narration: [], countdown: 2, silence: 1.0, tick: true },
          { narration: [], countdown: 1, silence: 1.0, tick: true }
        ]
      });
      const stepBlocks = q.steps;
      scenes.push({
        kind: 'answer', chapter: chap(`題型實戰 ${qi + 1}／${qs.length}`), unit: ui,
        data: { q, n: qi + 1, total: qs.length },
        steps: [
          { narration: say(`公布答案：${q.answer}。${q.key ? `審題關鍵：${q.key}` : ''}`, opt), show: 0, chime: true },
          ...stepBlocks.map((b, bi) => ({ narration: say(`${bi === 0 ? '解題步驟，' : ''}${blockSpeech(b)}`, opt), show: bi + 1 })),
          ...(q.trap ? [{ narration: say(`易錯提醒：${q.trap}`, opt), show: stepBlocks.length + 1 }] : [])
        ]
      });
    });

    if (u.examPitfalls?.length) {
      scenes.push({
        kind: 'pitfalls', chapter: chap('易錯陷阱'), unit: ui,
        data: { items: u.examPitfalls.map((p) => plain(p).replace(/^❌\s*/, '')) },
        steps: [
          { narration: say('最後，這個單元考卷最常見的失分陷阱，一定要避開！'), show: 0 },
          ...u.examPitfalls.map((p, pi) => ({ narration: say(p, opt), show: pi + 1 }))
        ]
      });
    }

    scenes.push({
      kind: 'summary', chapter: chap('單元小結'), unit: ui,
      data: { title: short, checklist: u.selfChecklist || [], rescue: u.quickRescue },
      steps: [
        { narration: say(`${short}單元小結。考前用這張檢核表確認自己都會了。`, opt), show: 0 },
        ...(u.selfChecklist || []).map((c, ci) => ({ narration: say(c, opt), show: ci + 1 })),
        ...(u.quickRescue ? [{ narration: say(`考前急救口訣：${u.quickRescue}`, opt), show: (u.selfChecklist || []).length + 1 }] : [])
      ]
    });
  });

  // 題型破題法（全集共用一次）
  const guideMap = new Map();
  units.forEach((u) => (u.questionTypeGuide || []).forEach((g) => { if (!guideMap.has(g.type)) guideMap.set(g.type, g); }));
  const guides = [...guideMap.values()];
  for (let i = 0; i < guides.length; i += 4) {
    const group = guides.slice(i, i + 4);
    scenes.push({
      kind: 'guide', chapter: '題型破題法',
      data: { items: group, n: i / 4 + 1, total: Math.ceil(guides.length / 4) },
      steps: [
        { narration: say(i === 0 ? '進考場前，把每種題型的作答方法再記一次。' : '題型破題法，續。'), show: 0 },
        ...group.map((g, gi) => ({ narration: say(`${g.type}題：${g.steps.join('；')}。常見失分：${g.trap}`, opt), show: gi + 1 }))
      ]
    });
  }

  scenes.push({
    kind: 'outro', chapter: '考前叮嚀',
    data: { title, units: unitTitles },
    steps: [
      { narration: say(`${title}，全部複習完了！`), show: 0 },
      { narration: say('考前建議用四步複習：第一，先看一次這支影片抓重點；第二，把題型實戰重新自己寫一次；第三，訂正錯題，寫下錯在哪裡；第四，三天後和七天後再複習一次。'), show: 1 },
      { narration: say('提醒你，實際考試範圍請以老師公告為準。影片中的題目是依公開考卷題型重新命題的練習題。祝你考試順利，我們下次見！'), show: 2 }
    ]
  });

  return { id: videoId(subject, exam), title, subject, exam, units: units.map((u) => u.unitId), scenes };
}

export function estimateSeconds(plan) {
  let s = 0;
  for (const sc of plan.scenes) for (const st of sc.steps) {
    const chars = (st.narration || []).reduce((a, x) => a + (x.lang === 'en' ? x.text.length / 3 : x.text.length), 0);
    s += chars / 4.6 + (st.silence || 0) + 0.7;
  }
  return s;
}
