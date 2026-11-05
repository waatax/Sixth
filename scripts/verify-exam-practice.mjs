// 驗證段考題型內容：
// 1. 每題必備知識點都能在課文（不含題目本身）找到，也就是「讀完課文就能作答」
// 2. 選擇題答案對得上選項；程式驗算式（check）都成立
// 3. 題目沒有重複、沒有假標籤、公式可編譯、Markdown 正常顯示
// 4. 每個單元實用內容成長至少 30%
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import katex from 'katex';
import rehypeLessonDisclosures from '../src/utils/rehypeLessonDisclosures.js';
import { count, loadData } from './enrich-exam-practice.mjs';

const LESSONS = 'src/data/lessons';
const REQUIRE_ALL = !process.argv.includes('--partial');
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcd(a, b);
const near = (a, b, e = 1e-6) => Math.abs(a - b) < e;
const LETTER = ['A', 'B', 'C', 'D', 'E'];

const { SOURCES, units } = await loadData();
// CI 是淺層 checkout，取不到基準 commit，所以成長率讀稽核檔，再核對檔案實際字數
const report = JSON.parse(fs.readFileSync('scripts/exam-practice-audit.json', 'utf8')).units;
const errors = [];
const fail = (msg) => errors.push(msg);
let total = 0;
let checked = 0;
let needChecks = 0;

const stripBlocks = (text) => {
  const start = text.indexOf('## 🧪 段考題型實戰');
  if (start < 0) return text;
  const end = text.indexOf('### 🗓️', start);
  return text.slice(0, start) + (end >= 0 ? text.slice(end) : '');
};

const allFiles = fs.readdirSync(LESSONS).filter((f) => f.endsWith('.md'));
for (const file of allFiles) {
  const unit = file.replace('.md', '');
  const text = fs.readFileSync(path.join(LESSONS, file), 'utf8');
  const entry = units[unit];
  if (REQUIRE_ALL && !entry) fail(`${unit}: 沒有段考題型內容`);

  if (/\\n(?![a-z])/.test(text)) fail(`${unit}: 有外露的 \\n`);
  if (/歷屆段考真題・|大數據分析，本單元|歷屆段考實戰/.test(text)) fail(`${unit}: 留有未核實的真題標籤`);

  for (const m of text.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$(?!\$)([^$\n]+?)\$(?!\$)/g)) {
    const formula = (m[1] || m[2] || '').trim();
    try { katex.renderToString(formula, { throwOnError: true, strict: false }); } catch (e) { fail(`${unit}: 公式錯誤 ${formula} (${e.message.slice(0, 60)})`); }
  }

  const html = renderToStaticMarkup(React.createElement(ReactMarkdown, { remarkPlugins: [remarkGfm, remarkMath], rehypePlugins: [rehypeLessonDisclosures], children: text }));
  if (html.includes('&lt;details&gt;')) fail(`${unit}: <details> 沒有轉換（常見原因：多行公式 $$ 沒有獨立一行）`);
  const tableLeak = html.replace(/<pre>[\s\S]*?<\/pre>/g, '').replace(/<code[\s\S]*?<\/code>/g, '');
  if (/(^|>)\s*\|[^<\n]*\|\s*(<|$)/m.test(tableLeak)) fail(`${unit}: 表格沒有正常轉換`);
  if (html.replace(/<pre>[\s\S]*?<\/pre>/g, '').replace(/<[^>]+>/g, '').includes('**')) fail(`${unit}: 粗體記號沒有正常顯示`);
  if (/\nundefined|undefined\b/.test(text)) fail(`${unit}: 內容含 undefined`);
  if (/\n答案：/.test(text)) fail(`${unit}: 答案格式會觸發第二個展開鈕`);

  if (!entry) continue;
  const lesson = stripBlocks(text);
  const stems = [];
  entry.qs.forEach((q, i) => {
    const id = `${unit} 第${i + 1}題`;
    total += 1;
    for (const key of ['type', 'test', 'k', 'stem', 'a', 'steps', 'needs', 'where']) if (!q[key]) fail(`${id}: 缺 ${key}`);
    if (q.src && !SOURCES[q.src]) fail(`${id}: 未知來源 ${q.src}`);
    if (q.opts) {
      const letter = q.a[0];
      const idx = LETTER.indexOf(letter);
      if (idx < 0 || q.a.slice(1, 2) !== '.') fail(`${id}: 選擇題答案要以 A. 開頭：${q.a}`);
      else if (!q.opts[idx]) fail(`${id}: 答案超出選項`);
      else if (q.a.slice(3).trim() !== q.opts[idx].trim()) fail(`${id}: 答案和選項不符 ${q.a} / ${q.opts[idx]}`);
      if (new Set(q.opts).size !== q.opts.length) fail(`${id}: 選項重複`);
    }
    for (const need of q.needs || []) {
      needChecks += 1;
      if (!lesson.includes(need)) fail(`${id}: 課文缺少必備知識點「${need}」`);
    }
    if (q.check) {
      if (q.check !== 'true') checked += 1;
      let ok = false;
      try { ok = new Function('gcd', 'lcm', 'near', `return (${q.check});`)(gcd, lcm, near); } catch (e) { fail(`${id}: 驗算式錯誤 ${e.message}`); }
      if (ok !== true) fail(`${id}: 驗算不成立 ${q.check}`);
    } else if (unit.startsWith('math')) fail(`${id}: 數學題必須有驗算式`);
    const key = q.stem.replace(/\s/g, '').slice(0, 24);
    if (stems.includes(key)) fail(`${id}: 題目重複`);
    stems.push(key);
    if (q.a.includes('undefined') || q.steps.length < 1) fail(`${id}: 答案或步驟異常`);
  });
  if (entry.qs.length < 6) fail(`${unit}: 題目少於 6 題`);
  if (!entry.gaps?.length) fail(`${unit}: 沒有知識補強`);
  const r = report.find((x) => x.unitId === unit);
  if (r.growthPercent < 30) fail(`${unit}: 成長 ${r.growthPercent}% 未達 30%`);
  if (r.finalCharacters !== count(text)) fail(`${unit}: 檔案和稽核紀錄不一致，請重跑 enrich-exam-practice.mjs`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\nFAIL ${errors.length} 項`);
  process.exit(1);
}
assert.ok(total > 0);
console.log(`PASS: ${Object.keys(units).length} 單元、${total} 題新題、${needChecks} 項知識點回推、${checked} 道程式驗算，每單元成長皆達 30%。`);
