import fs from 'node:fs';
import { knowledgePointsData } from '../src/data/knowledgePoints.js';
import { quizData } from '../src/data/quizData.js';

// 每份課文末尾附加「學以致用」：每個知識點只用它自己的白話解釋、例子、規則與易錯提醒，
// 再附上單元題庫的真實四選一題目（答案與解說預設收合），內容量至少為原文的 12%。
const marker = '\n\n<!-- learning-practice-v1 -->';
const LABELS = ['A', 'B', 'C', 'D'];
const MIN_GROWTH = 0.12;
const MAX_QUESTIONS = 10;
const count = text => [...text.replace(/\s/g, '')].length;
const clean = text => String(text || '').replace(/^【[^】]*】/, '').trim();
// 解說裡的換行在 Markdown 要變成段落；開頭的 > 或數字點避免被當成引用或清單
const paragraphs = text => String(text || '').split('\n').map(line => line.trim()).filter(Boolean)
  .map(line => line.replace(/^>/, '＞').replace(/^(\d+)\.\s/, '$1．')).join('\n\n');

function pointSection(point, index) {
  return `\n### ${index + 1}. ${point.title}${point.isExpansion ? '（延伸應用）' : ''}\n\n`
    // 粗體的冒號放在 ** 外面，否則 Markdown 不會把它當成粗體
    + `- 🧠 **一句話記住**：${point.formulaOrRule}\n`
    + `- 🌱 **生活例子**：${point.example || point.definition}\n\n`
    + `**先想想看**：遮住下面的說明，用自己的話說說「${point.title}」是什麼意思，再想一個你身邊的例子。\n\n`
    + `<details>\n<summary>對照白話說明與易錯提醒</summary>\n\n`
    + `${point.definition}\n\n⚠️ **小心別犯錯**：${clean(point.trapAlert)}\n\n</details>\n`;
}

function questionSection(question, index) {
  const options = question.options.map((option, i) => `**${LABELS[i]}.** ${option}`).join('  \n');
  const answer = `${LABELS[question.answerIndex]}. ${question.options[question.answerIndex]}`;
  return `\n**第 ${index + 1} 題**　${question.question}\n\n${options}\n\n`
    // 不以「答案：」開頭，避免課文頁再把它包進第二層「揭曉答案」
    + `<details>\n<summary>看答案與解說</summary>\n\n✅ **正確答案** ${answer}\n\n${paragraphs(question.explanation)}\n\n</details>\n`;
}

// 題目挑選順序：精選代表題後段（闖關較少出現）→ 延伸應用 → 其他題目；保持原本順序，
// 「承上題」只在它承接的前一題也被選入時才使用
function pickQuestions(unitId) {
  const list = quizData[unitId] || [];
  const representative = list.filter(q => q.isRepresentative);
  const ordered = [...new Set([...representative.slice(8), ...list.filter(q => q.isExpansion), ...list])];
  const picked = [];
  for (const q of ordered) {
    if (/承上/.test(q.question) && picked.at(-1) !== list[list.indexOf(q) - 1]) continue;
    picked.push(q);
  }
  return picked;
}

const counts = [];
for (const file of fs.readdirSync('src/data/lessons').filter(file => file.endsWith('.md'))) {
  const unitId = file.slice(0, -3);
  const path = `src/data/lessons/${file}`;
  const original = fs.readFileSync(path, 'utf8').split(marker)[0];
  const points = knowledgePointsData.filter(point => point.unitId === unitId);
  if (!points.length) throw new Error(`Missing learning points: ${unitId}`);
  const candidates = pickQuestions(unitId);
  if (candidates.length < 4) throw new Error(`Not enough questions: ${unitId}`);

  const head = '\n\n## 🌱 學以致用：看懂、試試、記住\n\n'
    + '照自己的步調來：先讀「一句話記住」和「生活例子」，再遮住說明試著自己講一遍；最後做「小試身手」，答完再打開解說核對。不懂的地方回到上面的課文找答案，答錯也沒關係，看懂解說就是進步。\n';
  const pointsPart = points.map(pointSection).join('');
  const tail = '\n### 🗓️ 讓記憶留下來\n\n'
    + '今天睡前，不看課本說出每個重點的「一句話記住」。明天再做一次答錯的題目，三天後和一週後各複習一次；能自己講清楚就拉長間隔，容易忘就縮短間隔。\n';

  const baseline = count(original);
  const used = [];
  let addition = '';
  for (const question of candidates) {
    used.push(question);
    const quizPart = `\n## ✍️ 小試身手（附答案與解說）\n\n先自己作答，再打開「看答案與解說」核對。\n${used.map(questionSection).join('')}`;
    addition = head + pointsPart + quizPart + tail;
    if (used.length >= 4 && (count(addition) >= baseline * MIN_GROWTH || used.length >= MAX_QUESTIONS)) break;
  }
  const added = count(addition);
  if (added < Math.ceil(baseline * 0.1)) throw new Error(`Under 10%: ${unitId}`);
  fs.writeFileSync(path, original + marker + addition);
  counts.push({
    unitId,
    baselineCharacters: baseline,
    addedCharacters: added,
    growthPercent: +(100 * added / baseline).toFixed(2),
    knowledgePoints: points.length,
    workedQuestions: used.length,
    disclosures: points.length + used.length
  });
}
fs.writeFileSync('scripts/learning-content-audit.json', JSON.stringify({ metric: 'Non-whitespace Unicode characters; each original lesson is the baseline. Content volume is not a learning-outcome measure.', units: counts }, null, 2) + '\n');
console.log(`${counts.length} units enriched; minimum growth ${Math.min(...counts.map(row => row.growthPercent))}%; worked questions ${counts.reduce((sum, row) => sum + row.workedQuestions, 0)}`);
