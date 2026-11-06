// 講義覆蓋同步：講義缺口的題目，從同單元課文找出最能回答它的句子，補進講義的「必備知識補充」。
// 同時產生課文缺口的逐題依據清單，供人工複核。
//   node scripts/sync-handout-coverage.mjs
import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { audit, sentences, bestEvidence } from './audit-knowledge-coverage.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SUPP = path.join(ROOT, 'src/data/examNotes/examSupplements.js');

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const text = fs.readFileSync(SUPP, 'utf8');
  const data = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
  const { results } = audit();
  const T = 0.34;
  const lessonLines = {};
  const review = [];
  let added = 0;
  for (const r of results) {
    const md = fs.readFileSync(path.join(ROOT, 'src/data/lessons', `${r.unit}.md`), 'utf8');
    lessonLines[r.unit] ||= sentences(md);
    const lessonGap = r.missLesson.length || r.lessonSupport < T;
    const handGap = r.missHandout.length || r.handoutSupport < T;
    if (!lessonGap && !handGap) continue;
    const ev = bestEvidence(r, lessonLines[r.unit], 3);
    if (lessonGap) review.push({ unit: r.unit, id: r.id, from: r.from, stem: r.stem.slice(0, 80), answer: String(r.answer).slice(0, 60), evidence: ev.line.slice(0, 140), score: +ev.score.toFixed(2) });
    if (handGap) {
      data[r.unit] ||= { supplements: [], questionTypeGuide: [] };
      const picks = [];
      if (r.evidence) picks.push(r.evidence);
      if (!lessonGap) picks.push(...ev.top);
      // 講義缺少的概念詞：各補一句課文中提到它的句子
      for (const term of r.missHandout) {
        const line = lessonLines[r.unit].find((l) => l.includes(term));
        if (line) picks.push(line);
      }
      for (const line of picks) if (!data[r.unit].supplements.includes(line)) { data[r.unit].supplements.push(line); added += 1; }
    }
  }
  fs.writeFileSync(SUPP, `${text.slice(0, text.indexOf('export const'))}export const examSupplements = ${JSON.stringify(data, null, 1)};\n`);
  fs.writeFileSync(path.join(ROOT, 'scripts/knowledge-coverage-review.json'), `${JSON.stringify(review, null, 2)}\n`);
  const pending = review.filter((x) => !results.find((r) => r.unit === x.unit && r.id === x.id)?.lessonOk).length;
  console.log(`講義新增 ${added} 句課文重點；自動判斷不足的 ${review.length} 題中，尚未人工複核 ${pending} 題`);
}
