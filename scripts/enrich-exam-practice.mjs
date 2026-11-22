// 段考題型回推引擎：把 scripts/exam-practice-data/*.mjs 的內容寫進 64 份教學頁面。
// 可重複執行：每次都從「基準版」重算，不會疊加。
//   node scripts/enrich-exam-practice.mjs
import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LESSONS = path.join(ROOT, 'src/data/lessons');
const DATA = path.join(ROOT, 'scripts/exam-practice-data');
const COVERAGE = path.join(ROOT, 'scripts/coverage-data');
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
  // 程式碼框（圖表）裡粗體不會轉換，畫面會露出 **；改用寬度相同的「」標示
  if (unit === 'eng-u8') t = t.replace('│ 📍 **in** (', '│ 📍 「in」 (').replace('│ 👥 **of** (', '│ 👥 「of」 (');
  // 事實更正：三幕劇是現代編劇整理出的結構，亞里斯多德只提出「開端、中段、結局」
  t = t.replace(/古典戲劇結構大師亞里斯多德確立的「三幕劇結構/g, '編劇常用的「三幕劇結構');

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
    const body = kept.map((k, i) => fixTemplateLines(unit, k.block).replace(/^\*\*第 \d+ 題\*\*/, `**第 ${i + 1} 題**`)).join('');
    t = t.slice(0, practiceStart) + head + body + t.slice(end);
  }
  return t;
}

// 舊例題套錯模板：解析和題目講的是不同觀念（例如小數除法配分數除法、英文字首配頻率副詞）。
// 依題幹找到該題，把「審題關鍵／易錯防雷」改成對應這一題的說明；null 表示整行刪除。
const H = '🔍 **【審題關鍵與破題思考】**：';
const T = '⚠️ **【易錯防雷與陷阱剖析】**：';
const TEMPLATE_FIXES = {
  'comp-u4': [{ stem: '服務學習」專案實踐中', hint: '題目問「轉化為智慧、自我成長」的步驟，關鍵在服務後回頭想：學到什麼、下次怎麼做得更好，也就是反思。', trap: '服務行動最忙最顯眼，但只做不想，經驗不會變成能力；服務學習的四個階段是準備、服務、反思、慶賀。', opt: ['**D.** 吃便當階段', '**D.** 拍照上傳階段'] }],
  'eng-u6': [
    { stem: 'Which pair of words shows this correct relationship', hint: '字首 un- 加在形容詞前面，意思變成「不、相反」，所以要找「原字 + un- 原字」的一組。', trap: 'easy - difficult 雖然意思相反，但不是用字首 un- 造出來的；happy - gladly 意思相近，不是相反。' },
    { stem: 'the prefix "un-" (like in "unhappy"', hint: '看例字找共同意思：unhappy 不快樂、unfair 不公平，un- 都表示「不、相反」。', trap: '不要和 re-（再一次，如 redo）、pre-（之前，如 preview）混淆。' },
  ],
  'eng-u7': [
    { stem: 'What are you going to ______ during the upcoming', hint: 'be going to 後面一定接原形動詞，兩個空格都要用原形 do、visit。', trap: null },
    { stem: 'Amy loves taking care of hurt dogs', hint: '從「照顧受傷的狗、貓、鳥」找職業線索：照顧動物、幫動物看病的是獸醫 veterinarian (vet)。', trap: null },
    { stem: 'What are you going to ______ this summer vacation?"  B', hint: 'be going to 後面接原形動詞，所以填 do；回答也用 I\'m going to + 原形動詞。', trap: null },
  ],
  'eng-u8': [{ stem: 'An elephant is much ______ than a sheep', hint: '看到 than 用比較級，看到 the ... of all 用最高級；big 是短母音結尾，要重複字尾 g 再加 -er。', trap: 'bigger 要雙寫 g；第二格選項 largest 和 biggest 都表示最大，題目只給 largest，配 the 和 of all animals 用最高級。' }],
  'eng-u2': [{ stem: 'The basketball players ______ very tired', hint: null, trap: '主詞 The basketball players 是複數，be 動詞過去式要用 were；was 只配 I、he、she、it 和單數名詞。' }],
  'man-u4': [
    { stem: '何者運用了「暗喻（隱喻', hint: '譬喻分三種：明喻用「像、好像、如」，暗喻用「是、成為、變成」，借喻只出現喻依。先找喻詞再判斷。', trap: '「好像沒睡好」是推測，不是譬喻；「春天邁著腳步」是擬人。' },
    { stem: '關於「對偶」與「排比」修辭手法的比較', hint: '對偶看「兩句、字數相等、詞性相對」；排比看「三句以上、結構相同」。', trap: '兩句對稱是對偶，三句以上才是排比，不要只憑「有節奏感」判斷。' },
    { stem: '雖然含有「好像」一詞', hint: '譬喻要有「本體」和「喻體」兩種不同的東西互相比較；「好像」表示猜測時，不是譬喻。', trap: '看到「好像」不一定是譬喻：「他好像生病了」是推測語氣。' },
    { stem: '彎彎的月亮像一艘小小的金色小船', hint: '找喻詞：句中有「像」，把月亮（本體）比成小船（喻體），是明喻。', trap: '「靜靜停泊」是配合小船的動作延伸，主體仍是譬喻，不是擬人。' },
  ],
  'math-u3': [{ stem: '一條長 10 公尺的童軍繩', hint: '小數除法求「幾段、剩多少」：商取整數是段數，餘數的小數點要對齊被除數原來的小數點。', trap: '移位後算出餘數 10，要還原成原來的單位才是 1 公尺；寫成 10 公尺會比繩子全長還多，一看就不合理。' }],
  'math-u4': [{ stem: '已知比例式 $5 : 8 = 35 : x$', hint: '比例式「外項乘積＝內項乘積」，或看前項 5 變成 35 是乘 7，後項也乘 7。', trap: '不要用加法：5 到 35 是乘 7，不是加 30，所以 $x=8\\times7=56$，不是 38。' }],
  'math-u5': [{ stem: '甲圓的半徑是 4 公分，乙圓的直徑是 16 公分', hint: '先把兩圓都換成直徑（或都換成半徑）再比較：甲直徑 8，乙直徑 16。', trap: '直接拿乙的直徑 16 和甲的半徑 4 相比，會誤算成 4 倍。圓周長和直徑成正比，直徑 2 倍，圓周長也是 2 倍。' }],
  'math-u6': [
    { stem: '在正方形中央形成一個葉子形狀', hint: null, trap: '葉子形是「兩個四分之一圓重疊的部分」：一個四分之一圓 78.5 減掉一個直角三角形 50，得 28.5，再乘 2 才是 57。只算一半會選 28.5。' },
    { stem: '一個圓環的外圓半徑是 10 公分', hint: '圓環面積＝外圓面積－內圓面積＝$3.14\\times(10\\times10-6\\times6)$。', trap: '不能用「半徑相減」$(10-6)\\times(10-6)\\times3.14$，那是半徑 4 的小圓面積，不是圓環。' },
  ],
  'math-u7': [
    { stem: '甲、乙兩地相距 90 公里。大雄騎自行車', hint: '相向而行：兩人每小時一起拉近「速率和」，相遇時間＝距離÷速率和＝$90\\div(18+42)$。', trap: '用速率差 $42-18$ 是「追趕」的算法；相向而行要用速率和。' },
    { stem: '換算為「秒速」是多少公尺', hint: '時速換秒速：公里換公尺乘 1000，小時換秒除以 3600，$72\\times1000\\div3600=20$。', trap: '只除以 60 會得到分速（1200 公尺），還要再除以 60 才是秒速。' },
    { stem: '高鐵以時速 300 公里行駛', hint: '已知速率和時間求距離：距離＝速率×時間＝$300\\times1.5$。', trap: '1.5 小時不是 1 小時 50 分，是 1 小時 30 分；直接用 1.5 相乘即可。' },
    { stem: '小明跑 100 公尺花了 20 秒', hint: null, trap: '秒速＝距離÷時間，要寫單位「公尺／秒」；把時間除以距離 $20\\div100$ 會得到錯誤的 0.2。' },
  ],
  'math-u10': [{ stem: '若以「弟弟的錢」為基準量', hint: '比值＝比較量÷基準量；「以弟弟為基準」表示弟弟的錢放在除數。', trap: '寫成 $400\\div600$ 是以哥哥為基準，答案會變成 $\\frac{2}{3}$。' }],
  'math-u11': [
    { stem: '解方程式「x + 15 = 42」', hint: null, trap: '等號兩邊同時減 15 才能讓 x 單獨留下，寫成 $42+15$ 會得到 57；算完把 27 代回原式驗算。' },
    { stem: '解方程式「x - 18 = 35」', hint: null, trap: '等號兩邊同時加 18；寫成 $35-18=17$ 是方向做反了，代回 $17-18$ 不等於 35。' },
  ],
  'pe-u3': [{ stem: '第一線救援行動口訣是', hint: '民眾版 CPR 口訣「叫叫 C D」：叫（確認意識）、叫（求救打 119、拿 AED）、C（胸外按壓）、D（使用 AED）。', trap: null }],
  'sci-u2': [{ stem: '自製紫色高麗菜汁作為酸鹼指示劑', hint: '紫色高麗菜汁遇酸變紅、中性維持紫色、遇鹼變綠（或藍綠）。白醋是酸、純水中性、肥皂水是鹼。', trap: null }],
  'sci-u8': [{ stem: '生物多樣性越高、食物網越複雜', hint: '食物網越複雜，每種動物有越多種食物可以選擇；一種生物變少時，能量可以從別的路徑流動。', trap: '穩定不代表生物體型變大，也不代表可以不需要陽光；關鍵是「替代食物」多。' }],
  'soc-u4': [{ stem: '下列何者屬於全球化帶來的「負面衝擊」', hint: '全球化讓各地緊密相連，好處是交流快，壞處是一地的問題（金融危機、傳染病）也會很快擴散到全世界。', trap: '資訊交流、旅遊方便、出口機會增加都是正面影響，題目問「負面衝擊」。' }],
  'soc-u5': [{ stem: '保障兒童能接受學校教育、參與文化活動', hint: '《兒童權利公約》常歸納四種權利：生存權、受保護權、發展權、參與權；受教育、遊戲休閒屬於發展權。', trap: '參與權是表達意見、參與決定；受教育讓孩子長大發展潛能，屬於發展權。' }],
  'soc-u6': [{ stem: '請問該議程共提出了幾大項永續發展目標', hint: '聯合國 2015 年通過的永續發展目標 SDGs 共 17 項目標、169 項細項目標，期限是 2030 年。', trap: null }],
};

function replaceLine(block, prefix, value) {
  if (value === undefined) return block;
  const re = new RegExp(`^${prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*\\n\\n?`, 'm');
  if (value === null) return block.replace(re, '');
  if (re.test(block)) return block.replace(re, `${prefix}${value}\n\n`);
  // 原本沒有這一行：加在正確答案後面（審題）或 </details> 前面（易錯）
  if (prefix === H) return block.replace(/(✅ \*\*正確答案\*\*[^\n]*\n\n)/, `$1${prefix}${value}\n\n`);
  return block.replace(/<\/details>/, `${prefix}${value}\n\n</details>`);
}

function fixTemplateLines(unit, block) {
  const stem = block.split('\n')[0];
  for (const f of TEMPLATE_FIXES[unit] || []) {
    if (!stem.includes(f.stem)) continue;
    let b = replaceLine(block, H, f.hint);
    b = replaceLine(b, T, f.trap);
    if (f.opt) b = b.replace(f.opt[0], f.opt[1]);
    return b;
  }
  return block;
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
  if (q.why) out.push(`🧠 **觀念說明**：${q.why}`, '');
  if (q.verify) out.push(`✔️ **檢查方法**：${q.verify}`, '');
  if (q.trap) out.push(`⚠️ **易錯提醒**：${q.trap}`, '');
  if (q.more) out.push(`🔁 **舉一反三**：${q.more}`, '');
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

// 單元會出現的題型：新題的題型，加上測驗題庫一律是選擇題
function unitTypes(entry) {
  const order = ['選擇', '是非', '填充', '計算', '應用', '題組', '配對', '分類', '排序', '填代號', '改錯', '重組', '閱讀', '寫作', '素養', '聽力字音'];
  const found = new Set(['選擇', ...entry.qs.map((q) => q.k)]);
  return order.filter((k) => found.has(k));
}

function renderCoverage(list) {
  if (!list.length) return '';
  return ['## 📚 必備知識補充（題庫、講義、例題逐題回推）', '', '測驗題庫、段考講義和課文例題會考到，但前面課文沒有說清楚的知識，都整理在這裡。', '', ...list.map((b) => `- ${b}`), '', ''].join('\n');
}

function renderTypes(guide, startAt) {
  const out = ['## 🧭 題型教學：本單元會遇到的題型', '', '每一種題型都有自己的作答方法。先看方法，再到下面的練習題實際演練。', ''];
  for (const g of guide) {
    out.push(`### ${g.type}題`, '');
    g.steps.forEach((s, i) => out.push(`${i + 1}. ${s}`));
    out.push('', `⚠️ **常見失分**：${g.trap}`);
    if (g.example >= 0) out.push('', `✏️ **馬上練習**：下方第 ${startAt + g.example} 題。`);
    out.push('');
  }
  return out.join('\n');
}

// 講義用：Markdown 轉成單行文字，公式保留給講義的 KaTeX 處理
function mdToPlain(md) {
  return String(md)
    .split('\n')
    .filter((l) => !/^\|\s*:?-{3}/.test(l))
    .map((l) => (l.startsWith('|') ? l.replace(/^\||\|$/g, '').split('|').map((c) => c.trim()).join('：') : l.replace(/^[-*]\s+|^#+\s*/, '')))
    .filter(Boolean)
    .join('；')
    .replace(/\*\*/g, '')
    .replace(/；；+/g, '；');
}

export async function loadData() {
  const { SOURCES } = await import(pathToFileURL(path.join(DATA, 'sources.mjs')).href);
  const units = {};
  // 第三輪資料（r3-*）一律排在最後，既有題號才不會位移（人工複核紀錄以題號為鍵）
  const order = (f) => (f.startsWith('r3-') ? 1 : 0);
  for (const f of fs.readdirSync(DATA).sort((a, b) => order(a) - order(b) || (a < b ? -1 : a > b ? 1 : 0))) {
    if (f === 'sources.mjs' || f.startsWith('_') || !f.endsWith('.mjs')) continue;
    const mod = await import(pathToFileURL(path.join(DATA, f)).href);
    for (const [unit, entry] of Object.entries(mod.default)) {
      if (!units[unit]) units[unit] = { gaps: [], qs: [] };
      units[unit].gaps.push(...(entry.gaps || []));
      units[unit].qs.push(...(entry.qs || []));
      if (entry.basis) units[unit].basis = entry.basis;
    }
  }
  // 逐題回推補齊的必備知識
  for (const f of fs.readdirSync(COVERAGE)) {
    if (f.startsWith('_') || !f.endsWith('.mjs')) continue;
    const mod = await import(pathToFileURL(path.join(COVERAGE, f)).href);
    for (const [unit, list] of Object.entries(mod.default)) {
      if (!units[unit]) units[unit] = { gaps: [], qs: [] };
      units[unit].coverage = [...(units[unit].coverage || []), ...list];
    }
  }
  const { typeGuide } = await import(pathToFileURL(path.join(COVERAGE, '_types.mjs')).href);
  return { SOURCES, units, typeGuide };
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

// 第三輪（2026-11）：以 c7c282b 為基準，量「例題練習區」（基礎例題熱身起到複習行動前）的題數與字數
const R3_BASE = 'c7c282b';
export const practiceRegion = (text) => {
  const i = text.indexOf('## ✍️ 基礎例題熱身');
  if (i < 0) return '';
  const j = text.indexOf('### 🗓️', i);
  return text.slice(i, j > i ? j : text.length);
};
export const questionCount = (text) => (text.match(/^\*\*第 \d+ 題\*\*/gm) || []).length;

function round3Audit(files) {
  const units = files.map(({ unit, text }) => {
    let before = '';
    try {
      before = execSync(`git show ${R3_BASE}:src/data/lessons/${unit}.md`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 26 });
    } catch { /* 新單元沒有基準 */ }
    const qb = questionCount(before);
    const qa = questionCount(text);
    const cb = count(practiceRegion(before));
    const ca = count(practiceRegion(text));
    return { unitId: unit, questionsBefore: qb, questionsAfter: qa, questionGrowthPercent: +(((qa - qb) / Math.max(1, qb)) * 100).toFixed(1), practiceCharsBefore: cb, practiceCharsAfter: ca, practiceGrowthPercent: +(((ca - cb) / Math.max(1, cb)) * 100).toFixed(1), pageCharsBefore: count(before), pageCharsAfter: count(text) };
  }).sort((a, b) => a.unitId.localeCompare(b.unitId, 'en', { numeric: true }));
  const sum = (k) => units.reduce((s, u) => s + u[k], 0);
  fs.writeFileSync(path.join(ROOT, 'scripts/exam-practice-r3-audit.json'), `${JSON.stringify({
    metric: `Round 3 (2026-11). Base commit ${R3_BASE}. practiceChars = non-whitespace characters from「基礎例題熱身」to the spaced-review section, i.e. the worked-example practice area after each lesson.`,
    totals: { questionsBefore: sum('questionsBefore'), questionsAfter: sum('questionsAfter'), practiceCharsBefore: sum('practiceCharsBefore'), practiceCharsAfter: sum('practiceCharsAfter'), pageCharsBefore: sum('pageCharsBefore'), pageCharsAfter: sum('pageCharsAfter') },
    units,
  }, null, 2)}\n`);
  return units;
}

export async function build({ write = true } = {}) {
  const written = [];
  const { SOURCES, units, typeGuide } = await loadData();
  const supplements = {};
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
      const types = unitTypes(entry);
      const guide = types.map((k) => ({ type: k, ...typeGuide(unit, k), example: entry.qs.findIndex((q) => q.k === k) }));
      const coverageMd = renderCoverage(entry.coverage || []);
      const typeMd = renderTypes(guide, questions + 1);
      supplements[unit] = { supplements: [...(entry.gaps || []).map((g) => `【${g.title}】${mdToPlain(g.body)}`), ...(entry.coverage || []).map(mdToPlain)], questionTypeGuide: guide.map(({ type, steps, trap }) => ({ type, steps, trap })) };
      const practiceAt = text.indexOf('## ✍️ 基礎例題熱身');
      text = `${text.slice(0, practiceAt)}${gap}\n${coverageMd}${text.slice(practiceAt)}`;
      const reviewAt = text.indexOf('### 🗓️', practiceAt);
      const block = `${typeMd}\n${practice}`;
      text = reviewAt >= 0 ? `${text.slice(0, reviewAt)}${block}\n${text.slice(reviewAt)}` : `${text}\n\n${block}\n`;
      questions += entry.qs.length;
    }
    text = fixBoldFlanking(text);
    const before = count(normalized);
    const after = count(text);
    report.push({ unitId: unit, rawBaselineCharacters: count(base), baselineCharacters: before, finalCharacters: after, growthPercent: +(((after - before) / before) * 100).toFixed(1), questions, newQuestions: entry ? entry.qs.length : 0 });
    if (write) writeWithRetry(path.join(LESSONS, file), text);
    written.push({ unit, text });
  }
  if (write) round3Audit(written);
  report.sort((a, b) => a.unitId.localeCompare(b.unitId, 'en', { numeric: true }));
  if (write) {
    syncLegacyAudit();
    writeWithRetry(path.join(ROOT, 'src/data/examNotes/examSupplements.js'), `// 由 scripts/enrich-exam-practice.mjs 產生，請改 scripts/exam-practice-data 與 scripts/coverage-data。\nexport const examSupplements = ${JSON.stringify(supplements, null, 1)};\n`);
    fs.writeFileSync(path.join(ROOT, 'scripts/exam-practice-audit.json'), `${JSON.stringify({
      metric: `Non-whitespace characters. baselineCharacters is commit ${BASE_COMMIT} after removing template filler, duplicate and misplaced questions; rawBaselineCharacters is the untouched commit.`,
      units: report,
    }, null, 2)}\n`);
  }
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const report = await build();
  // 講義補上回答各題所需的課文句子（需在課文寫入後執行）
  execSync("node scripts/sync-handout-coverage.mjs", { cwd: ROOT, stdio: "inherit" });
  const done = report.filter((r) => r.newQuestions);
  const short = done.filter((r) => r.growthPercent < 30);
  console.log(`units with new content: ${done.length}/${report.length}`);
  console.log(`new questions: ${done.reduce((s, r) => s + r.newQuestions, 0)}`);
  for (const r of done) console.log(`${r.unitId.padEnd(8)} ${String(r.baselineCharacters).padStart(6)} -> ${String(r.finalCharacters).padStart(6)}  +${r.growthPercent}%  Q${r.questions}`);
  if (short.length) console.log(`below 30%: ${short.map((r) => `${r.unitId}(${r.growthPercent})`).join(', ')}`);
}
