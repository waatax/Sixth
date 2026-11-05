// 段考題型回推引擎：把 scripts/exam-practice-data/*.mjs 的內容寫進 64 份教學頁面。
// 可重複執行：每次都從「基準版」重算，不會疊加。
//   node scripts/enrich-exam-practice.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LESSONS = path.join(ROOT, 'src/data/lessons');
const DATA = path.join(ROOT, 'scripts/exam-practice-data');
const BASE_COMMIT = '391341b';
const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export const count = (text) => [...text.replace(/\s/g, '')].length;
const baseline = (unit) =>
  execSync(`git show ${BASE_COMMIT}:src/data/lessons/${unit}.md`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });

// 主題和單元不符、留在原單元會誤導學生的舊題（題號以基準版為準）
const DROP = {
  'pe-u3': [1, 2, 3, 4], // 腸病毒、登革熱、流感、漂白水：屬傳染病防治，不是急救
  'pe-u4': [1, 2, 3], // 溺水、扭傷、抽筋：屬急救與運動傷害
  'pe-u5': [1, 2, 3, 4], // CPR 與 AED：已在急救單元
  'pe-u6': [1, 2, 3, 4], // 伸展、排球、體適能、運動家：不是心理健康
};

const bigrams = (s) => {
  const t = s.replace(/[\s$\\{}]/g, '');
  const out = new Set();
  for (let i = 0; i < t.length - 1; i += 1) out.add(t.slice(i, i + 2));
  return out;
};
const similar = (a, b) => {
  const x = bigrams(a);
  const y = bigrams(b);
  let hit = 0;
  for (const g of x) if (y.has(g)) hit += 1;
  return hit / Math.max(1, Math.min(x.size, y.size));
};

// 逐行配對 ** 記號；只有開頭貼著標點且前面是文字，或結尾貼著標點且後面是文字時才補空白
function fixBoldFlanking(text) {
  const WORD = /[\p{L}\p{N}]/u;
  const PUNCT = /[\p{P}\p{S}]/u;
  let fence = false;
  return text.split('\n').map((line) => {
    if (/^\s*```/.test(line)) { fence = !fence; return line; }
    if (fence || !line.includes('**')) return line;
    const parts = line.split('**');
    if (parts.length % 2 === 0) return line; // 記號不成對，不動
    let out = parts[0];
    for (let i = 1; i < parts.length; i += 2) {
      const inner = parts[i];
      const before = out.slice(-1);
      const after = (parts[i + 1] || '').charAt(0);
      if (!inner || /^\s|\s$/.test(inner)) { out += `**${inner}**${parts[i + 1]}`; continue; }
      const openFix = PUNCT.test(inner[0]) && WORD.test(before);
      const closeFix = PUNCT.test(inner.at(-1)) && WORD.test(after);
      out += `${openFix ? ' ' : ''}**${inner}**${closeFix ? ' ' : ''}${parts[i + 1]}`;
    }
    return out;
  }).join('\n');
}

function normalize(unit, source) {
  let t = source;

  // 外露的 \n 字面文字改成真正換行；\ne、\neq、\neg 等 LaTeX 指令不受影響
  t = t.replace(/\\n(?![a-z])/g, '\n');
  t = t.replace(/\\n(?=[a-z])(?!e\b|eq|eg|ot|ewline|abla|i\b|u\b)/g, '\n');
  t = t.replace(/📐 \*\*【詳盡解題步驟與算理推導】\*\*：\n+/g, '📐 **【詳盡解題步驟與算理推導】**：\n\n');

  // 多行公式的 $$ 必須獨立一行，否則 remark-math 找不到結尾，整頁後續內容都會變成公式碼
  t = t.replace(/^([ \t]*)\$\$([^\n$]+)\n([\s\S]*?)\n[ \t]*([^\n$]*)\$\$[ \t]*$/gm, (_, ind, a, mid, z) => `${ind}$$\n${ind}${a}\n${mid}\n${z ? `${ind}${z}\n` : ''}${ind}$$`);

  // 粗體遇到中文標點會失效（CommonMark 規則），頁面上會露出 **；在外側補半形空白修正
  t = fixBoldFlanking(t);

  // 出處未核實，不得標成真題
  t = t.replace(/【歷屆段考真題・[^】]*】/g, '【基礎練習】');
  t = t.replace(/依據教育部 108 課綱指標（([^）]*)）與全國各公立國小段考期中／期末試題大數據分析，本單元命題聚焦四大方向：基礎定義辨析、日常情境建模、易錯防雷判別以及跨小節多步驟綜合推導。各審定版本（康軒、南一、翰林）依同一課綱編寫，但在命題側重與題幹呈現上各有獨特風格：/g,
    '對應 108 課綱指標：$1。段考常從四個方向出題：定義辨析、生活情境、易錯陷阱、多步驟綜合。各審定版本依同一份課綱編寫，單元順序和例子不同；下面的版本提醒是編輯整理，未逐冊核對，實際範圍請以課本目次和學校公告為準：');
  t = t.replace(/\*\*(康軒|南一|翰林)版出題特色\*\*/g, '**$1版可留意**');
  t = t.replace(/## 🎯 歷年段考真題題型歸納與三大版本命題焦點/g, '## 🎯 段考題型歸納與版本提醒');
  // 每單元一模一樣的通用段落（藝術課也出現分數除法例子），改由各單元自己的題型表取代
  t = t.replace(/### 📋 歷屆各校段考 5 大代表題型特徵分析[\s\S]*?(?=#### 📊 審題關鍵字破題雷達)/g, '');
  t = t.replace(/## ✍️ 歷屆段考實戰精選例題與練習（[^）\n]*）/g, '## ✍️ 基礎例題熱身');
  t = t.replace(/先掌握「歷年段考真題題型歸納與三大版本命題焦點」/g, '先看「段考題型歸納與版本提醒」');
  t = t.replace(/最後進入「歷屆段考實戰精選例題與練習」，動手作答後展開步驟級詳解與防雷剖析/g, '接著做「基礎例題熱身」和「段考題型實戰」，動手作答後再展開步驟詳解');
  t = t.replace(/## 🚀 \+10% 現代素養前瞻新知/g, '## 🚀 現代素養新知');

  // 只會重述規則的樣板句
  t = t.replace(/^- 🎯 \*\*段考命題常考方式\*\*：常考於段考概念是非題、選擇題或計算題，關鍵判別心法：.*\n/gm, '');
  t = t.replace(/^🔍 \*\*【審題關鍵與破題思考】\*\*：審題關鍵：先圈出題幹已知條件與所求目標.*\n\n?/gm, '');
  t = t.replace(/^⚠️ \*\*【易錯防雷與陷阱剖析】\*\*：常考誘答防雷：作答時仔細比對各選項差異.*\n\n?/gm, '');
  t = t.replace(/。。/g, '。');

  // 去除重複與放錯單元的舊題，重新編號
  const practiceStart = t.indexOf('## ✍️ 基礎例題熱身');
  if (practiceStart >= 0) {
    const reviewStart = t.indexOf('### 🗓️', practiceStart);
    const end = reviewStart >= 0 ? reviewStart : t.length;
    const blocks = t.slice(practiceStart, end).split(/(?=^\*\*第 \d+ 題\*\*)/m);
    const head = blocks.shift();
    const kept = [];
    const dropList = DROP[unit] || [];
    blocks.forEach((block, i) => {
      if (dropList.includes(i + 1)) return;
      const stem = block.split('\n')[0].replace(/^\*\*第 \d+ 題\*\*【[^】]*】\s*/, '');
      if (kept.some((k) => similar(k.stem, stem) > 0.72)) return;
      kept.push({ stem, block });
    });
    const body = kept.map((k, i) => k.block.replace(/^\*\*第 \d+ 題\*\*/, `**第 ${i + 1} 題**`)).join('');
    t = t.slice(0, practiceStart) + head + body + t.slice(end);
  }
  return t;
}

const SOURCE_NOTE = '⚖️ **題目來源說明**：以下是本站重新命題的練習題，數字與情境都改過，不是原卷題目。標「參考」的題目，題型取自公開考卷或課程計畫；標「課綱」的題目依 108 課綱重點命題。學校實際範圍請以老師公告為準。';

function renderQuestion(q, n, sources) {
  const src = q.src && sources[q.src] ? `參考${sources[q.src].short}` : '課綱';
  const out = [`**第 ${n} 題**【${q.k}・${src}】　${q.stem}`, ''];
  if (q.opts) {
    out.push(q.opts.map((o, i) => `**${LETTERS[i]}.** ${o}`).join('  \n'), '');
  }
  out.push('<details>', '<summary>看答案與解說</summary>', '');
  out.push(`✅ **正確答案** ${q.a}`, '');
  if (q.hint) out.push(`🔍 **審題關鍵**：${q.hint}`, '');
  out.push('📐 **解題步驟**：', '');
  q.steps.forEach((s, i) => out.push(`${i + 1}. ${s}`));
  out.push('');
  if (q.trap) out.push(`⚠️ **易錯提醒**：${q.trap}`, '');
  if (q.where) out.push(`📖 **回課文複習**：${q.where}`, '');
  out.push('</details>', '');
  return out.join('\n');
}

export function renderUnit(entry, sources, startAt) {
  const usedSrc = [...new Set(entry.qs.map((q) => q.src).filter(Boolean))];
  const gap = ['## 🧩 段考回推補強：考卷會考、容易漏掉的觀念', ''];
  if (entry.intro) gap.push(entry.intro, '');
  for (const g of entry.gaps) gap.push(`### ${g.title}`, '', g.body, '');

  const types = [...new Set(entry.qs.map((q) => q.type))];
  const practice = ['## 🧪 段考題型實戰（先作答，再看步驟）', '', SOURCE_NOTE, ''];
  practice.push('| 題型 | 考什麼 | 題號 |', '| :--- | :--- | :--- |');
  let n = startAt;
  const numbered = entry.qs.map((q) => ({ ...q, n: n++ }));
  for (const type of types) {
    const group = numbered.filter((q) => q.type === type);
    practice.push(`| **${type}** | ${group[0].test} | ${group.map((q) => q.n).join('、')} |`);
  }
  practice.push('');
  for (const q of numbered) practice.push(renderQuestion(q, q.n, sources));
  const traps = numbered.filter((q) => q.trap);
  practice.push('### 📋 考前一頁複習：本單元易錯清單', '');
  for (const q of traps) practice.push(`- 第 ${q.n} 題（${q.test}）：${q.trap}`);
  practice.push('', '### ✅ 答案速查（寫完訂正用）', '', '<details>', '<summary>打開答案速查表</summary>', '', '| 題號 | 答案 | 答錯先複習 |', '| :--- | :--- | :--- |');
  for (const q of numbered) practice.push(`| ${q.n} | ${q.a} | ${q.where} |`);
  practice.push('', '</details>', '');
  if (usedSrc.length) {
    practice.push(`📎 **本單元參考的公開資料**：${usedSrc.map((k) => `[${sources[k].name}](${sources[k].url})`).join('；')}。`, '');
  } else if (entry.basis) {
    practice.push(`📎 **命題依據**：${entry.basis}`, '');
  }
  return { gap: gap.join('\n'), practice: practice.join('\n') };
}

export async function loadData() {
  const { SOURCES } = await import(pathToFileURL(path.join(DATA, 'sources.mjs')).href);
  const units = {};
  for (const f of fs.readdirSync(DATA)) {
    if (f === 'sources.mjs' || f.startsWith('_') || !f.endsWith('.mjs')) continue;
    const mod = await import(pathToFileURL(path.join(DATA, f)).href);
    for (const [unit, entry] of Object.entries(mod.default)) {
      if (!units[unit]) units[unit] = { gaps: [], qs: [] };
      units[unit].gaps.push(...(entry.gaps || []));
      units[unit].qs.push(...(entry.qs || []));
      if (entry.basis) units[unit].basis = entry.basis;
    }
  }
  return { SOURCES, units };
}

// OneDrive 同步可能短暫鎖住檔案；內容沒變就不寫，避免多餘的同步
function writeWithRetry(file, text) {
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === text) return;
  for (let attempt = 1; ; attempt += 1) {
    try {
      fs.writeFileSync(file, text);
      return;
    } catch (error) {
      if (attempt >= 8) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500 * attempt);
    }
  }
}

// 舊回歸測試（verify-learning-upgrade）以 learning-practice-v1 標記前後計字，這裡同步它的基準數字
function syncLegacyAudit() {
  const file = path.join(ROOT, 'scripts/learning-content-audit.json');
  const audit = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const unit of audit.units) {
    const text = fs.readFileSync(path.join(LESSONS, `${unit.unitId}.md`), 'utf8');
    const [before, addition] = text.split('\n\n<!-- learning-practice-v1 -->');
    unit.baselineCharacters = count(before);
    unit.addedCharacters = count(addition);
    unit.growthPercent = +((unit.addedCharacters / unit.baselineCharacters) * 100).toFixed(2);
    unit.workedQuestions = addition.split('<summary>看答案與解說</summary>').length - 1;
    unit.disclosures = (addition.match(/^<details>$/gm) || []).length;
  }
  writeWithRetry(file, `${JSON.stringify(audit, null, 2)}\n`);
}

export async function build({ write = true } = {}) {
  const { SOURCES, units } = await loadData();
  const report = [];
  for (const file of fs.readdirSync(LESSONS).filter((f) => f.endsWith('.md'))) {
    const unit = file.replace('.md', '');
    const base = baseline(unit);
    const normalized = normalize(unit, base);
    let text = normalized;
    const entry = units[unit];
    let questions = (text.match(/^\*\*第 \d+ 題\*\*/gm) || []).length;
    if (entry) {
      const { gap, practice } = renderUnit(entry, SOURCES, questions + 1);
      const practiceAt = text.indexOf('## ✍️ 基礎例題熱身');
      text = `${text.slice(0, practiceAt)}${gap}\n${text.slice(practiceAt)}`;
      const reviewAt = text.indexOf('### 🗓️', practiceAt);
      text = reviewAt >= 0 ? `${text.slice(0, reviewAt)}${practice}\n${text.slice(reviewAt)}` : `${text}\n\n${practice}\n`;
      questions += entry.qs.length;
    }
    const before = count(normalized);
    const after = count(text);
    report.push({ unitId: unit, rawBaselineCharacters: count(base), baselineCharacters: before, finalCharacters: after, growthPercent: +(((after - before) / before) * 100).toFixed(1), questions, newQuestions: entry ? entry.qs.length : 0 });
    if (write) writeWithRetry(path.join(LESSONS, file), text);
  }
  report.sort((a, b) => a.unitId.localeCompare(b.unitId, 'en', { numeric: true }));
  if (write) {
    syncLegacyAudit();
    fs.writeFileSync(path.join(ROOT, 'scripts/exam-practice-audit.json'), `${JSON.stringify({
      metric: `Non-whitespace characters. baselineCharacters is commit ${BASE_COMMIT} after removing template filler, duplicate and misplaced questions; rawBaselineCharacters is the untouched commit.`,
      units: report,
    }, null, 2)}\n`);
  }
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const report = await build();
  const done = report.filter((r) => r.newQuestions);
  const short = done.filter((r) => r.growthPercent < 30);
  console.log(`units with new content: ${done.length}/${report.length}`);
  console.log(`new questions: ${done.reduce((s, r) => s + r.newQuestions, 0)}`);
  for (const r of done) console.log(`${r.unitId.padEnd(8)} ${String(r.baselineCharacters).padStart(6)} -> ${String(r.finalCharacters).padStart(6)}  +${r.growthPercent}%  Q${r.questions}`);
  if (short.length) console.log(`below 30%: ${short.map((r) => `${r.unitId}(${r.growthPercent})`).join(', ')}`);
}
