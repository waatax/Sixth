// 題目知識點覆蓋稽核：每一題的概念詞與正確答案，都要能在「該單元課文」和「該單元講義」找到。
// 題目來源：測驗題庫 quizData、講義練習題 pastExamWalkthroughs、課文頁例題。
//   node scripts/audit-knowledge-coverage.mjs            產生報告
//   node scripts/audit-knowledge-coverage.mjs --strict   有缺口就失敗（CI 用）
import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LESSONS = path.join(ROOT, 'src/data/lessons');
const { quizData } = await import('../src/data/quizData.js');
const { allExamNotes } = await import('../src/data/examNotes/index.js');

const CJK = /[一-鿿]/;
const strip = (s) => String(s || '')
  .replace(/\$[^$]*\$/g, ' ')
  .replace(/\\[a-zA-Z]+(\{[^}]*\})?/g, ' ')
  .replace(/[*_`#>|]/g, ' ');

// 課文：去掉題目與解答區塊，只留教學內容
export function lessonTeachingText(md) {
  return md
    .replace(/^\*\*第 \d+ 題\*\*[\s\S]*?<\/details>/gm, ' ')
    .replace(/### ✅ 答案速查[\s\S]*?<\/details>/g, ' ')
    .replace(/^\d+\.\s+\*\*\((計算題|應用題|選擇題|進階應用題)\)\*\*[\s\S]*?(?=\n\d+\.\s+\*\*\(|\n---)/gm, ' ');
}

export function handoutText(note) {
  if (!note) return '';
  const pick = (v) => (Array.isArray(v) ? v.map((x) => (typeof x === 'string' ? x : Object.values(x).join(' '))).join(' ') : typeof v === 'string' ? v : v && typeof v === 'object' ? Object.values(v).join(' ') : '');
  return ['title', 'coreConcepts', 'keyFormulas', 'examPitfalls', 'highlights', 'rawHighlights', 'keywordRadar', 'quickRescue', 'hotKeywords', 'coreMentalModel', 'lifeApplication', 'selfChecklist', 'versionFocus', 'masterySkill', 'priorConcept', 'supplements', 'questionTypeGuide']
    .map((k) => pick(note[k])).join(' ');
}

const bigrams = (s) => {
  const out = new Set();
  for (const seg of strip(s).match(/[一-鿿]+/g) || []) for (let i = 0; i < seg.length - 1; i += 1) out.add(seg.slice(i, i + 2));
  for (const w of strip(s).toLowerCase().match(/[a-z][a-z'-]{2,}/g) || []) out.add(w);
  return out;
};

// 常見功能性字詞：不算知識點
const STOP = new Set('下列 哪一 一個 何者 正確 錯誤 敘述 選項 以下 什麼 為什麼 請問 可以 應該 因為 所以 如果 我們 他們 這個 那個 一定 可能 不是 沒有 進行 主要 需要 比較 關於 屬於 以上 皆是 皆非 方式 方法 情形 情況 選擇 答案 題目 說明 原因 結果 同學 小明 小華 小美 老師 學生 時候 一樣 時間 自己 部分 生活 問題 表示 東西 其他 這些 那些 如何 怎樣 怎麼 多少 幾個 狀況 社區 平方公分 甲乙 早餐 幾分鐘 大約是多少 前往 有多少 指向 正中央 花費 最低 兩句 深藍色 黃色 下雨 手掌 建築物 社區中 長方形面積 整合 總結 測試 幾點幾分 核心要素 核心主題 公分 公尺 公里 公斤 最大 最多 最少'.split(' '));

// 概念詞庫：取各單元課文的粗體、引號詞、表格首欄與詞彙表
function buildLexicon(unitTexts, questionTexts) {
  const freq = new Map();
  const add = (term, unit) => {
    const t = term.replace(/[\s（）()「」『』：:，,。、！？?!．.]/g, '');
    if (!CJK.test(t) || t.length < 2 || t.length > 7 || STOP.has(t) || /\d/.test(t)) return;
    if (!freq.has(t)) freq.set(t, new Set());
    freq.get(t).add(unit);
  };
  for (const [unit, text] of Object.entries(unitTexts)) {
    for (const m of text.matchAll(/\*\*([^*\n]{2,10})\*\*/g)) add(m[1], unit);
    for (const m of text.matchAll(/「([^」\n]{2,7})」/g)) add(m[1], unit);
    for (const m of text.matchAll(/^\|\s*\**([^|*\n]{2,10})\**\s*\|/gm)) add(m[1], unit);
    for (const m of text.matchAll(/\\textbf\{([^}]{2,10})\}/g)) add(m[1], unit);
  }
  const n = Object.keys(unitTexts).length;
  // 通用詞判斷：在很多單元的課文或題目都會出現的詞，不算某單元的知識點
  const qSpread = (t) => Object.values(questionTexts).filter((txt) => txt.includes(t)).length;
  const tSpread = (t) => Object.values(unitTexts).filter((txt) => txt.includes(t)).length;
  return [...freq.keys()].filter((t) => tSpread(t) <= n * 0.12 && qSpread(t) <= 6).sort((a, b) => b.length - a.length);
}

function collectQuestions(unit, md, note) {
  const qs = [];
  for (const [i, q] of (quizData[unit] || []).entries()) {
    qs.push({ from: '測驗題庫', id: q.id || `${unit}-q${i + 1}`, stem: q.question, answer: q.options?.[q.answerIndex] ?? q.answer ?? '', explain: q.explanation || '' });
  }
  for (const [i, w] of (note?.pastExamWalkthroughs || []).entries()) {
    const ans = w.options?.[w.answerIndex] ?? w.answer ?? '';
    qs.push({ from: '講義練習', id: `${unit}-w${i + 1}`, stem: w.question, answer: ans, explain: w.explanation || '' });
  }
  for (const m of md.matchAll(/^\*\*第 (\d+) 題\*\*【[^】]*】\s*([^\n]+)\n([\s\S]*?)<\/details>/gm)) {
    const ans = (m[3].match(/✅ \*\*正確答案\*\* ([^\n]+)/) || [])[1] || '';
    qs.push({ from: '課文例題', id: `${unit}-L${m[1]}`, stem: m[2], answer: ans, explain: m[3] });
  }
  return qs;
}

const evGrams = (s) => {
  const out = new Set();
  for (const seg of String(s).replace(/\$[^$]*\$/g, ' ').match(/[一-鿿]+/g) || []) for (let i = 0; i < seg.length - 1; i += 1) out.add(seg.slice(i, i + 2));
  for (const w of String(s).toLowerCase().match(/[a-z][a-z'-]{2,}/g) || []) out.add(w);
  return out;
};

// 課文切成可以獨立閱讀的句子（列表項目、段落、表格列）
export function sentences(md) {
  return lessonTeachingText(md)
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length >= 12 && !/^(#|\||```|!\[|<|---|>?\s*$)/.test(l) && !/^[│├└┌┐┘─]/.test(l))
    .map((l) => l.replace(/^[-*]\s+|^\d+\.\s+|^>\s*/, '').replace(/\*\*/g, ''));
}

export function bestEvidence(question, lines, k = 1) {
  const target = evGrams(`${question.answer} ${question.terms?.join(' ') || ''}`);
  const context = evGrams(question.stem);
  const scored = lines.map((line) => {
    const g = evGrams(line);
    let hit = 0;
    for (const x of target) if (g.has(x)) hit += 2;
    for (const x of context) if (g.has(x)) hit += 1;
    return { line, score: hit / Math.max(8, target.size * 2 + context.size) };
  }).sort((a, b) => b.score - a.score);
  const best = scored[0] || { line: '', score: 0 };
  return k === 1 ? best : { ...best, top: scored.slice(0, k).filter((x) => x.score > 0.15).map((x) => x.line) };
}


const REVIEWED = path.join(ROOT, 'scripts/knowledge-coverage-reviewed.json');

export function audit() {
  const reviewed = fs.existsSync(REVIEWED) ? JSON.parse(fs.readFileSync(REVIEWED, 'utf8')) : {};
  const notes = Object.fromEntries((Array.isArray(allExamNotes) ? allExamNotes : Object.values(allExamNotes)).map((n) => [n.unitId, n]));
  const units = fs.readdirSync(LESSONS).filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', ''));
  const md = Object.fromEntries(units.map((u) => [u, fs.readFileSync(path.join(LESSONS, `${u}.md`), 'utf8')]));
  const teach = Object.fromEntries(units.map((u) => [u, lessonTeachingText(md[u])]));
  const hand = Object.fromEntries(units.map((u) => [u, handoutText(notes[u])]));
  const allQ = Object.fromEntries(units.map((u) => [u, collectQuestions(u, md[u], notes[u]).map((q) => `${q.stem}${q.answer}`).join(' ')]));
  const lexicon = buildLexicon(teach, allQ);
  const lines = Object.fromEntries(units.map((u) => [u, sentences(md[u])]));
  const results = [];
  for (const unit of units) {
    const lessonGrams = bigrams(teach[unit]);
    const handGrams = bigrams(hand[unit]);
    const plain = (s) => strip(s).replace(/\s/g, '');
    const lessonPlain = plain(teach[unit]);
    const handPlain = plain(hand[unit]);
    for (const q of collectQuestions(unit, md[unit], notes[unit])) {
      // 必備概念：答案裡的詞，或題幹用「」標出要考的詞；題幹裡的背景地名、人名不算
      const asked = (String(q.stem).match(/「[^」]{2,12}」/g) || []).join(' ');
      const qText = plain(`${asked} ${q.answer}`);
      const terms = [];
      let rest = qText;
      for (const t of lexicon) if (rest.includes(t)) { terms.push(t); rest = rest.split(t).join('　'); }
      const missLesson = terms.filter((t) => !lessonPlain.includes(t));
      const missHandout = terms.filter((t) => !handPlain.includes(t));
      const answerText = String(q.answer).replace(/^[A-E][.．]\s*/, '');
      // 數字答案與開放題（例如……）沒有標準字面答案，只檢查概念詞
      const ans = /\d|^例如|^Example/.test(answerText) ? new Set() : bigrams(answerText);
      const meaningful = [...ans].filter((g) => !STOP.has(g));
      const support = (grams) => (meaningful.length < 3 ? 1 : meaningful.filter((g) => grams.has(g)).length / meaningful.length);
      // 解析的內容也算答案依據：答案字面和解析都對不上課文，才算缺口
      const exp = [...bigrams(q.explain)].filter((g) => !STOP.has(g));
      const expSupport = (grams) => (exp.length < 6 ? 1 : exp.filter((g) => grams.has(g)).length / exp.length);
      const lessonSupport = Math.max(support(lessonGrams), expSupport(lessonGrams) >= 0.6 ? 1 : 0);
      const handoutSupport = Math.max(support(handGrams), expSupport(handGrams) >= 0.6 ? 1 : 0);
      const autoLesson = !missLesson.length && lessonSupport >= 0.34;
      const autoHand = !missHandout.length && handoutSupport >= 0.34;
      // 人工複核：記錄的依據句仍在課文中才算數
      const rev = reviewed[`${unit}#${q.id}`];
      const lessonOk = autoLesson || Boolean(rev && plain(teach[unit]).includes(plain(rev)));
      // 講義：自動通過，或收錄了課文中回答此題的同一句依據
      const ev = lessonOk ? (rev || bestEvidence({ ...q, terms }, lines[unit]).line) : '';
      const handOk = autoHand || Boolean(lessonOk && ev && plain(hand[unit]).includes(plain(ev)));
      results.push({ unit, ...q, terms, missLesson, missHandout, lessonSupport: +lessonSupport.toFixed(2), handoutSupport: +handoutSupport.toFixed(2), lessonOk, handOk, lessonBy: autoLesson ? 'auto' : lessonOk ? 'reviewed' : '', handBy: autoHand ? 'auto' : handOk ? 'evidence' : '', evidence: ev });
    }
  }
  return { lexiconSize: lexicon.length, results };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { lexiconSize, results } = audit();
  const gapL = results.filter((r) => !r.lessonOk);
  const gapH = results.filter((r) => !r.handOk);
  const by = (k, v) => results.filter((r) => r[k] === v).length;
  const byUnit = {};
  for (const r of results) {
    byUnit[r.unit] ||= { total: 0, lessonGaps: 0, handoutGaps: 0 };
    byUnit[r.unit].total += 1;
    if (gapL.includes(r)) byUnit[r.unit].lessonGaps += 1;
    if (gapH.includes(r)) byUnit[r.unit].handoutGaps += 1;
  }
  fs.writeFileSync(path.join(ROOT, 'scripts/knowledge-coverage-audit.json'), `${JSON.stringify({ lexiconSize, totals: { questions: results.length, lessonGaps: gapL.length, handoutGaps: gapH.length }, byUnit, gaps: results.filter((r) => gapL.includes(r) || gapH.includes(r)).map(({ explain, ...r }) => r) }, null, 2)}\n`);
  const bySrc = (arr) => Object.entries(arr.reduce((m, r) => ((m[r.from] = (m[r.from] || 0) + 1), m), {})).map(([k, v]) => `${k} ${v}`).join('、');
  console.log(`概念詞庫 ${lexiconSize} 個；題目 ${results.length} 題（${bySrc(results)}）`);
  console.log(`課文：自動確認 ${by('lessonBy', 'auto')}、人工複核 ${by('lessonBy', 'reviewed')}、缺口 ${gapL.length}（${bySrc(gapL)}）`);
  console.log(`講義：自動確認 ${by('handBy', 'auto')}、以課文同句佐證 ${by('handBy', 'evidence')}、缺口 ${gapH.length}（${bySrc(gapH)}）`);
  if (process.argv.includes('--strict') && (gapL.length || gapH.length)) process.exit(1);
}
