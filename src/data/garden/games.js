// Mini-game content. Rocket questions are generated so math practice never runs out.

export const matchSets = [
  { id: "m-shape", grade: 2, subject: "math", title: "圖形配對", pairs: [["三角形", "3 條邊"], ["四邊形", "4 條邊"], ["圓形", "沒有角"], ["正方體", "6 個面"], ["一星期", "7 天"], ["1 公尺", "100 公分"]] },
  { id: "m-unit", grade: 4, subject: "math", title: "單位換算", pairs: [["1 公里", "1000 公尺"], ["1 公斤", "1000 公克"], ["1 公升", "1000 毫升"], ["1 公分", "10 毫米"], ["1 時", "60 分"], ["1 平方公尺", "10000 平方公分"]] },
  { id: "m-frac", grade: 5, subject: "math", title: "分數小數百分率", pairs: [["1／2", "50%"], ["1／4", "25%"], ["3／4", "0.75"], ["1／5", "0.2"], ["1／10", "10%"], ["2／5", "40%"]] },
  { id: "m-formula", grade: 6, subject: "math", title: "公式配對", pairs: [["長方形面積", "長×寬"], ["三角形面積", "底×高÷2"], ["圓面積", "半徑×半徑×3.14"], ["圓周長", "直徑×3.14"], ["速度", "距離÷時間"], ["柱體體積", "底面積×高"]] },
  { id: "c-radical", grade: 2, subject: "mandarin", title: "部首找朋友", pairs: [["氵", "河"], ["扌", "推"], ["木", "樹"], ["火", "燒"], ["口", "吃"], ["艹", "花"]] },
  { id: "c-words", grade: 3, subject: "mandarin", title: "相反詞", pairs: [["快樂", "難過"], ["勇敢", "膽小"], ["乾淨", "骯髒"], ["熱鬧", "安靜"], ["增加", "減少"], ["開始", "結束"]] },
  { id: "c-rhetoric", grade: 4, subject: "mandarin", title: "修辭小偵探", pairs: [["譬喻", "月亮像圓盤"], ["擬人", "風在唱歌"], ["誇飾", "餓得吃下一頭牛"], ["摹寫", "雷聲轟隆隆"], ["排比", "有的笑有的跳有的唱"], ["疑問", "這是真的嗎？"]] },
  { id: "e-color", grade: 3, subject: "english", title: "顏色與數字", pairs: [["red", "紅色"], ["blue", "藍色"], ["green", "綠色"], ["one", "1"], ["seven", "7"], ["twelve", "12"]] },
  { id: "e-verb", grade: 5, subject: "english", title: "動詞過去式", pairs: [["go", "went"], ["eat", "ate"], ["see", "saw"], ["have", "had"], ["run", "ran"], ["make", "made"]] },
  { id: "e-opposite", grade: 4, subject: "english", title: "英文相反詞", pairs: [["big", "small"], ["hot", "cold"], ["tall", "short"], ["happy", "sad"], ["fast", "slow"], ["up", "down"]] },
  { id: "s-plant", grade: 3, subject: "science", title: "植物與動物", pairs: [["根", "吸收水分"], ["葉", "製造養分"], ["鰓", "水中呼吸"], ["翅膀", "幫助飛行"], ["蹼", "幫助划水"], ["種子", "長成新植物"]] },
  { id: "s-phys", grade: 6, subject: "science", title: "力與能量", pairs: [["定滑輪", "改變施力方向"], ["槓桿", "支點與力臂"], ["傳導", "金屬湯匙變燙"], ["對流", "熱水往上"], ["輻射", "太陽曬暖"], ["太陽能板", "光變成電"]] },
  { id: "o-social", grade: 3, subject: "social", title: "社區與地圖", pairs: [["119", "消防與救護"], ["110", "報警"], ["113", "保護專線"], ["圖例", "符號的意思"], ["指北針", "看方位"], ["比例尺", "縮小多少"]] },
  { id: "o-hist", grade: 5, subject: "social", title: "臺灣年代", pairs: [["1895", "日治開始"], ["1945", "戰後"], ["1949", "戒嚴開始"], ["1987", "解除戒嚴"], ["1996", "總統直選"], ["玉山", "約 3952 公尺"]] },
  { id: "m-ten", grade: 1, subject: "math", title: "湊十好朋友", pairs: [["1", "9"], ["2", "8"], ["3", "7"], ["4", "6"], ["5", "再加 5 得 10"], ["10", "1 個十"]] },
  { id: "c-measure", grade: 1, subject: "mandarin", title: "量詞配一配", pairs: [["一朵", "鮮花"], ["一條", "小魚"], ["一本", "故事書"], ["一雙", "運動鞋"], ["一把", "雨傘"], ["一顆", "紅蘋果"]] },
  { id: "s-solar", grade: 6, subject: "science", title: "太空與地球", pairs: [["地球自轉", "日夜交替"], ["地球公轉", "四季變化"], ["北極星", "指引正北方"], ["月球", "地球的衛星"], ["太陽", "發光發熱恆星"], ["板塊運動", "造成地震"]] },
  { id: "a-inst", grade: 4, subject: "arts", title: "樂器與藝術", pairs: [["小提琴", "弦樂器"], ["長笛", "管樂器"], ["大鼓", "打擊樂器"], ["紅加黃", "橙色"], ["黃加藍", "綠色"], ["紅加藍", "紫色"]] },
];

export const sortSets = [
  { id: "add-sub", grade: 1, subject: "math", title: "加法還是減法？", bins: ["加法", "減法"], items: [["又飛來 3 隻鳥", 0], ["吃掉 2 顆糖", 1], ["全部合起來", 0], ["送給弟弟 4 張", 1], ["再放進 5 顆", 0], ["拿走 6 本書", 1], ["兩堆一共幾個", 0], ["還剩幾個", 1]] },
  { id: "odd-even", grade: 2, subject: "math", title: "單數或雙數", bins: ["單數", "雙數"], items: [["7", 0], ["12", 1], ["25", 0], ["30", 1], ["48", 1], ["59", 0], ["63", 0], ["86", 1]] },
  { id: "angle", grade: 4, subject: "math", title: "銳角或鈍角", bins: ["銳角", "鈍角"], items: [["30 度", 0], ["120 度", 1], ["89 度", 0], ["91 度", 1], ["60 度", 0], ["150 度", 1], ["15 度", 0], ["175 度", 1]] },
  { id: "prime", grade: 6, subject: "math", title: "質數或合數", bins: ["質數", "合數"], items: [["2", 0], ["9", 1], ["11", 0], ["15", 1], ["13", 0], ["18", 1], ["17", 0], ["20", 1]] },
  { id: "fact-opinion", grade: 6, subject: "mandarin", title: "事實或意見", bins: ["事實", "意見"], items: [["臺灣最高峰是玉山", 0], ["玉山最漂亮", 1], ["水在 0 度結冰", 0], ["冬天最好玩", 1], ["一年有 12 個月", 0], ["這本書很好看", 1], ["地球繞著太陽轉", 0], ["數學最難", 1]] },
  { id: "noun-verb", grade: 3, subject: "mandarin", title: "名詞或動詞", bins: ["名詞", "動詞"], items: [["蘋果", 0], ["跑步", 1], ["老師", 0], ["唱歌", 1], ["公園", 0], ["閱讀", 1], ["小狗", 0], ["跳舞", 1]] },
  { id: "animal", grade: 5, subject: "science", title: "脊椎動物或無脊椎動物", bins: ["有脊椎", "無脊椎"], items: [["青蛙", 0], ["蝴蝶", 1], ["鯨魚", 0], ["蝸牛", 1], ["麻雀", 0], ["蜘蛛", 1], ["蛇", 0], ["水母", 1]] },
  { id: "conductor", grade: 4, subject: "science", title: "導電或不導電", bins: ["導電", "不易導電"], items: [["銅線", 0], ["塑膠尺", 1], ["鐵釘", 0], ["橡皮筋", 1], ["鋁箔", 0], ["紙張", 1], ["迴紋針", 0], ["木筷", 1]] },
  { id: "acid", grade: 5, subject: "science", title: "酸性或鹼性", bins: ["酸性", "鹼性"], items: [["檸檬汁", 0], ["肥皂水", 1], ["醋", 0], ["小蘇打水", 1], ["柳橙汁", 0], ["洗衣粉水", 1]] },
  { id: "need-want", grade: 4, subject: "social", title: "需要或想要", bins: ["需要", "想要"], items: [["三餐", 0], ["限量卡牌", 1], ["學校制服", 0], ["第五雙球鞋", 1], ["乾淨的水", 0], ["最新遊戲機", 1], ["看病的錢", 0], ["全新貼紙組", 1]] },
  { id: "industry", grade: 6, subject: "social", title: "產業大分類", bins: ["農林漁牧與製造", "服務業"], items: [["漁民", 0], ["護理師", 1], ["工廠作業員", 0], ["老師", 1], ["農夫", 0], ["店員", 1], ["林業工作者", 0], ["公車司機", 1]] },
  { id: "food", grade: 3, subject: "health_pe", title: "少吃或常吃", bins: ["可常吃", "要少吃"], items: [["青菜", 0], ["汽水", 1], ["白開水", 0], ["炸雞", 1], ["糙米飯", 0], ["糖果", 1], ["水果", 0], ["泡麵", 1]] },
  { id: "safety", grade: 5, subject: "health_pe", title: "安全或危險", bins: ["安全做法", "危險做法"], items: [["騎車戴安全帽", 0], ["油鍋起火潑水", 1], ["過馬路看左右", 0], ["把密碼告訴網友", 1], ["地震時保護頭部", 0], ["搭陌生人的車", 1], ["游泳前熱身", 0], ["邊走邊看手機", 1]] },
  { id: "english-part", grade: 5, subject: "english", title: "單數或複數", bins: ["單數", "複數"], items: [["a cat", 0], ["three dogs", 1], ["one box", 0], ["two boxes", 1], ["an apple", 0], ["children", 1], ["a child", 0], ["feet", 1]] },
  { id: "recycle", grade: 2, subject: "life", title: "回收或廚餘", bins: ["資源回收", "廚餘"], items: [["寶特瓶", 0], ["果皮", 1], ["鋁罐", 0], ["剩飯", 1], ["舊報紙", 0], ["菜葉", 1]] },
  { id: "color-temp", grade: 3, subject: "arts", title: "暖色或冷色", bins: ["暖色", "冷色"], items: [["紅色", 0], ["藍色", 1], ["橙色", 0], ["綠色", 1], ["黃色", 0], ["青色", 1]] },
  { id: "magnet-sort", grade: 3, subject: "science", title: "磁鐵吸得住嗎", bins: ["磁鐵能吸引", "磁鐵不能吸"], items: [["鐵釘", 0], ["塑膠杯", 1], ["鐵製迴紋針", 0], ["木頭積木", 1], ["鐵夾子", 0], ["鋁罐", 1], ["鋼珠", 0], ["橡皮擦", 1]] },
  { id: "net-safe", grade: 6, subject: "integrative", title: "數位公民判斷", bins: ["安全友善", "有風險不當"], items: [["先查證再分享", 0], ["公開家裡住址", 1], ["尊重圖片著作權", 0], ["點開不明中獎連結", 1], ["友善留言鼓勵人", 0], ["把密碼借給網友", 1]] },
];

export const orderSets = [
  { id: "water", grade: 5, subject: "science", title: "水循環", items: ["蒸發", "凝結", "降水", "匯流"] },
  { id: "plant", grade: 2, subject: "life", title: "植物長大", items: ["種子", "發芽", "長葉", "開花", "結果"] },
  { id: "moon", grade: 4, subject: "science", title: "月相變化", items: ["新月", "上弦月", "滿月", "下弦月"] },
  { id: "butterfly", grade: 3, subject: "science", title: "蝴蝶一生", items: ["卵", "幼蟲", "蛹", "成蟲"] },
  { id: "history", grade: 5, subject: "social", title: "臺灣歷史時期", items: ["史前時代", "荷西時期", "鄭氏時期", "清帝國時期", "日治時期"] },
  { id: "democracy", grade: 5, subject: "social", title: "民主大事", items: ["1949 戒嚴", "1987 解嚴", "1996 總統直選"] },
  { id: "units", grade: 4, subject: "math", title: "長度由小到大", items: ["1 毫米", "1 公分", "1 公尺", "1 公里"] },
  { id: "ops", grade: 4, subject: "math", title: "計算先後", items: ["括號內", "乘與除", "加與減"] },
  { id: "fractions", grade: 3, subject: "math", title: "分數由小到大", items: ["1／8", "1／4", "1／2", "3／4"] },
  { id: "letter", grade: 4, subject: "mandarin", title: "一封信", items: ["稱呼", "問候", "正文", "祝福", "署名"] },
  { id: "wash", grade: 2, subject: "health_pe", title: "洗手五步", items: ["濕", "搓", "沖", "捧", "擦"] },
  { id: "week", grade: 3, subject: "english", title: "Days of the week", items: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
  { id: "design", grade: 6, subject: "arts", title: "設計流程", items: ["了解需求", "畫草圖", "試用", "改良"] },
  { id: "planets", grade: 6, subject: "science", title: "行星離太陽由近到遠", items: ["水星", "金星", "地球", "火星", "木星"] },
  { id: "burn-aid", grade: 6, subject: "health_pe", title: "燙傷急救五步驟", items: ["沖", "脫", "泡", "蓋", "送"] },
  { id: "area-unit", grade: 5, subject: "math", title: "面積單位由小到大", items: ["1 平方公分", "1 平方公尺", "1 公畝", "1 公頃", "1 平方公里"] },
];

export const spellWords = [
  [3, "cat", "貓", "🐱"], [3, "dog", "狗", "🐶"], [3, "sun", "太陽", "☀️"], [3, "red", "紅色", "🔴"], [3, "bus", "公車", "🚌"], [3, "pen", "筆", "🖊️"], [3, "book", "書", "📖"], [3, "fish", "魚", "🐟"], [3, "tree", "樹", "🌳"], [3, "apple", "蘋果", "🍎"], [3, "milk", "牛奶", "🥛"], [3, "ball", "球", "⚽"], [3, "bird", "鳥", "🐦"], [3, "star", "星星", "⭐"],
  [4, "water", "水", "💧"], [4, "tiger", "老虎", "🐯"], [4, "green", "綠色", "🟢"], [4, "happy", "快樂的", "😄"], [4, "seven", "七", "7️⃣"], [4, "chair", "椅子", "🪑"], [4, "house", "房子", "🏠"], [4, "rainy", "下雨的", "🌧️"], [4, "sunny", "晴朗的", "☀️"], [4, "bread", "麵包", "🍞"], [4, "mouse", "老鼠", "🐭"], [4, "clock", "時鐘", "🕒"], [4, "juice", "果汁", "🧃"], [4, "music", "音樂", "🎵"],
  [5, "school", "學校", "🏫"], [5, "friend", "朋友", "🤝"], [5, "father", "爸爸", "👨"], [5, "mother", "媽媽", "👩"], [5, "summer", "夏天", "🏖️"], [5, "winter", "冬天", "❄️"], [5, "Monday", "星期一", "📅"], [5, "banana", "香蕉", "🍌"], [5, "rabbit", "兔子", "🐰"], [5, "flower", "花", "🌸"], [5, "orange", "橘子", "🍊"], [5, "window", "窗戶", "🪟"], [5, "hungry", "肚子餓", "😋"], [5, "doctor", "醫生", "🩺"],
  [6, "library", "圖書館", "📚"], [6, "teacher", "老師", "🧑‍🏫"], [6, "weather", "天氣", "⛅"], [6, "science", "自然科學", "🔬"], [6, "morning", "早上", "🌅"], [6, "kitchen", "廚房", "🍳"], [6, "bicycle", "腳踏車", "🚲"], [6, "elephant", "大象", "🐘"], [6, "computer", "電腦", "💻"], [6, "birthday", "生日", "🎂"], [6, "tomorrow", "明天", "📆"], [6, "hospital", "醫院", "🏥"], [6, "rainbow", "彩虹", "🌈"], [6, "planet", "行星", "🪐"],
];

const rand = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = (list) => list[rand(0, list.length - 1)];

function makeOptions(answer, near) {
  const seen = new Set([answer]);
  const out = [answer];
  for (const v of near) {
    if (out.length === 4) break;
    if (v >= 0 && !seen.has(v) && Number.isInteger(v)) {
      seen.add(v);
      out.push(v);
    }
  }
  let step = 1;
  while (out.length < 4) {
    const v = answer + step;
    if (!seen.has(v)) {
      seen.add(v);
      out.push(v);
    }
    step = step > 0 ? -step : -step + 1;
    if (answer + step < 0) step = Math.abs(step) + 1;
  }
  return out.sort(() => Math.random() - 0.5);
}

const generators = {
  add10() { const a = rand(1, 9), b = rand(1, 9); return [`${a} ＋ ${b}`, a + b]; },
  sub18() { const a = rand(6, 18), b = rand(1, Math.min(9, a)); return [`${a} － ${b}`, a - b]; },
  add100() { const a = rand(12, 78), b = rand(11, 99 - a); return [`${a} ＋ ${b}`, a + b]; },
  sub100() { const a = rand(30, 99), b = rand(11, a - 5); return [`${a} － ${b}`, a - b]; },
  times() { const a = rand(2, 9), b = rand(2, 9); return [`${a} × ${b}`, a * b]; },
  div() { const b = rand(2, 9), c = rand(2, 9); return [`${b * c} ÷ ${b}`, c]; },
  addK() { const a = rand(120, 760), b = rand(110, 230); return [`${a} ＋ ${b}`, a + b]; },
  mul1() { const a = rand(12, 99), b = rand(2, 9); return [`${a} × ${b}`, a * b]; },
  div1() { const b = rand(2, 9), c = rand(12, 60); return [`${b * c} ÷ ${b}`, c]; },
  mul2() { const a = rand(11, 39), b = rand(11, 25); return [`${a} × ${b}`, a * b]; },
  order() { const a = rand(2, 20), b = rand(2, 9), c = rand(2, 9); return [`${a} ＋ ${b} × ${c}`, a + b * c]; },
  paren() { const a = rand(2, 12), b = rand(2, 12), c = rand(2, 9); return [`(${a} ＋ ${b}) × ${c}`, (a + b) * c]; },
  percent() { const p = pick([10, 20, 25, 50, 75]), n = pick([40, 80, 100, 200, 400]); return [`${n} 的 ${p}%`, (n * p) / 100]; },
  gcd() { const f = pick([2, 3, 4, 5, 6]), a = f * pick([1, 3, 5]), b = f * pick([2, 4, 7]); const g = (x, y) => (y ? g(y, x % y) : x); return [`${a} 和 ${b} 的最大公因數`, g(a, b)]; },
  square() { const a = rand(2, 12); return [`邊長 ${a} 的正方形面積`, a * a]; },
};
const byGrade = {
  1: ["add10", "sub18"],
  2: ["add100", "sub100", "times"],
  3: ["times", "div", "addK", "mul1"],
  4: ["mul1", "div1", "mul2", "order"],
  5: ["mul2", "order", "paren", "square"],
  6: ["percent", "gcd", "paren", "mul2"],
};

export function makeRocketQuestion(grade) {
  const kind = pick(byGrade[grade] || byGrade[3]);
  const [text, answer] = generators[kind]();
  const near = [answer + 1, answer - 1, answer + 10, answer - 10, answer + 2, answer - 2];
  return { text, answer, options: makeOptions(answer, near), kind };
}

// Exposed so the verification script can sample every generator.
export const rocketKinds = generators;
