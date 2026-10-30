import fs from 'node:fs';
import { knowledgePointsData } from '../src/data/knowledgePoints.js';

const marker = '\n\n<!-- learning-practice-v1 -->';
const counts = [];
for (const file of fs.readdirSync('src/data/lessons').filter(file => file.endsWith('.md'))) {
  const unitId = file.slice(0, -3);
  const path = `src/data/lessons/${file}`;
  const original = fs.readFileSync(path, 'utf8').split(marker)[0];
  const points = knowledgePointsData.filter(point => point.unitId === unitId);
  if (!points.length) throw new Error(`Missing learning points: ${unitId}`);
  let addition = '\n\n## 🌱 學以致用：理解、回想、遷移\n\n選一個適合自己的起點：初學先讀示範，再遮住示範說一次；已有基礎先作答，再核對；熟練者補充反例與使用限制。每次完成一個小任務即可，不必一次做完。\n';
  for (const point of points) {
    addition += `\n### ${point.title}：把知識變成自己的工具\n\n**任務一｜先預測，再核對**\n\n閱讀這個情境：「${point.practicalUtility}」先不看下方解說，寫下你會如何運用「${point.title}」。至少說出一個判斷依據，避免只猜答案。\n\n<details>\n<summary>看示範與判斷依據</summary>\n\n${point.definition}\n\n示範：${point.example || point.formulaOrRule}\n\n核對時，找出自己的答案與示範相同的一步，再指出需要修改的一步。表達方式可以不同，但判斷必須符合題目的條件。\n\n</details>\n\n**任務二｜當一次小老師**\n\n有人提醒你：「${point.trapAlert}」請用自己的話說明：這個錯誤為什麼容易發生？要檢查哪個條件才能避免？把說明錄下來，或用兩句話寫給同學。\n\n<details>\n<summary>檢查自己的解說</summary>\n\n用這條規則核對：${point.formulaOrRule}\n\n解題策略：${point.strategyTip}\n\n自評三項：是否說出關鍵條件、是否指出容易混淆的地方、是否用例子支持答案？如果只能背出名詞，回到示範找出「為什麼」，再試一次。\n\n</details>\n\n**任務三｜換情境也能用**\n\n以「${point.title}」為主題，把示範中的一個條件改掉：可以改數字、人物、材料或使用情境。寫下哪些結論仍成立、哪些需要重新判斷，並用本節規則說明；不是每個條件都能任意更換。\n\n**完成標準：**能說明原情境、指出一個錯誤原因，並解釋改動條件後的影響。如果還不確定，先標記問號，對照上方規則修正；不需要為了拿分假裝懂了。\n`;
  }
  addition += '\n### 🗓️ 讓記憶留下來\n\n今天結束前，關上解說，用一句話說出最重要的規則。明天重新回答其中一個任務，三天後改做另一個，一週後混合舊單元練習。這是可調整的複習起點：容易忘就縮短間隔，能獨立解釋就拉長。每次先回想，再核對與修正，比只重讀更能看出自己哪裡還不熟。\n';
  const count = text => [...text.replace(/\s/g, '')].length;
  const baseline = count(original);
  const added = count(addition);
  if (added < Math.ceil(baseline * 0.1)) throw new Error(`Under 10%: ${unitId}`);
  fs.writeFileSync(path, original + marker + addition);
  counts.push({ unitId, baselineCharacters: baseline, addedCharacters: added, growthPercent: +(100 * added / baseline).toFixed(2), practiceTasks: points.length * 3 });
}
fs.writeFileSync('scripts/learning-content-audit.json', JSON.stringify({ metric: 'Non-whitespace Unicode characters; each original lesson is the baseline. Content volume is not a learning-outcome measure.', units: counts }, null, 2) + '\n');
console.log(`${counts.length} units enriched; minimum growth ${Math.min(...counts.map(row => row.growthPercent))}%`);
