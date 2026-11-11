// 每課第 3 題「進階挑戰」、學科好奇心「生活中的奇妙發現」與「必考題型破題祕笈」生成引擎
import { mathQuestions3 } from "./enrichmentMath.js";
import { topicQuestions3 } from "./enrichmentTopics.js";

export const extraQuestionByLessonId = {
  ...mathQuestions3,
  ...topicQuestions3,
};

const customFunFacts = {
  "g1-math": "超市店員收銀或數硬幣時，也是把 10 個疊成一疊！下次數積木或糖果時，先圈出 10 個一組，你會發現自己一秒就能看出一共有幾個！",
  "m-N-1-1": "百格板就像一棟有 10 層樓、每層住 10 個人的公寓！只要數有幾整排，不用從 1 慢慢數，就能瞬間報出全體人數。",
  "m-N-2-7": "九九乘法藏著超酷的手指魔法！把雙手攤開，想算 9×4 就彎下左起第 4 根手指，左邊 3 根、右邊 6 根，答案剛好就是 36！",
  "g3-math": "切披薩或蛋糕時，為什麼大家都想要「平均分」？因為只要有一塊切得特別大，每一塊就不能都叫做四分之一囉！",
  "g4-math": "同樣用 16 公分的繩子圍長方形，圍成「長 7 寬 1」面積只有 7 平方公分，圍成「邊長 4 的正方形」面積卻有 16 平方公分！周長一樣，面積竟然會變魔術！",
  "g5-math": "通分就像把不同國家的錢換成同一種硬幣！半張披薩（1／2）跟四分之一張披薩（1／4），切成一樣大的小片（1／4）就能馬上合起來算清楚。",
  "g6-math": "打開手機地圖放大縮小，角落那條小小的比例尺線段也會跟著變！它能幫我們把幾百公里的台灣裝進小小的螢幕裡。",
  "m-S-6-3": "古時候的數學家把圓切成好多好多小扇形，排起來竟然變成近似長方形！這就是為什麼圓面積公式裡藏著「半徑×半徑×3.14」。",
  "g3-science": "科學家做實驗就像偵探辦案！如果一次改太多條件，就抓不到真正的幕後原因；每次只改一個條件，真相就會自己跳出來。",
  "g4-science": "夏天喝冰飲料時，杯子外面冒出的小水珠不是杯子漏水，而是空氣裡隱形的水蒸氣來貼著冰杯「吹冷氣」凝結成的小水滴喔！",
  "g5-science": "大自然裡的每一口食物都帶著太陽的能量！植物把陽光存進葉子裡，再一棒接一棒傳給草食動物和肉食動物。",
  "g6-science": "指甲刀、開瓶器、蹺蹺板其實都是「槓桿家族」的成員！只要找對支點和用力位置，小力氣也能完成大任務。",
};

const subjectWonderTemplates = {
  math: (l) =>
    `在生活裡買東西、看時間、分點心或做勞作時，「${l.title}」隨時都在幫我們！只要抓住「${l.panels[0]?.label || "核心重點"}：${l.panels[0]?.value || l.goal}」，再複雜的數字都會變得像解謎遊戲一樣好玩！`,
  mandarin: (l) =>
    `語言就像文字積木！學會「${l.title}」（${l.panels[0]?.label}：${l.panels[0]?.value}），你在看故事書、跟朋友聊天或寫日記時，都能更精準地讀懂別人的心意，也能把自己的想法說得既生動又清楚！`,
  life: (l) =>
    `生活處處是寶藏！今天放學或下課時，試著用「${l.title}」的方法（${l.panels[0]?.label}：${l.panels[0]?.value}）觀察身邊的一個小角落，並跟家人或同學分享你的新發現！`,
  science: (l) =>
    `大自然就是最棒的實驗室！「${l.title}」背後藏著奇妙的科學規律（${l.panels[0]?.label}：${l.panels[0]?.value}）。下次看到類似現象時，先猜一猜為什麼，你就是生活中的小小科學家！`,
  social: (l) =>
    `我們每天走過的街道、享受的便利生活，都和「${l.title}」緊密相連！從「${l.panels[0]?.label}（${l.panels[0]?.value}）」開始觀察，你會更認識自己的家鄉與這個多元精彩的世界。`,
  english: (l) =>
    `學英語就像多了一把打開世界大門的鑰匙！今天試著把「${l.panels[0]?.label}（${l.panels[0]?.value}）」大聲唸出來，在生活裡跟家人或同學玩一句英文問答吧！`,
  arts: (l) =>
    `藝術沒有死板的唯一標準答案！透過「${l.title}」（${l.panels[0]?.label}：${l.panels[0]?.value}），你的眼睛和耳朵會發現更多色彩與節奏的美，隨手畫畫或哼歌都超有成就感！`,
  health_pe: (l) =>
    `身體是陪伴我們探險最重要的好夥伴！把「${l.title}」的小秘訣（${l.panels[0]?.label}：${l.panels[0]?.value}）用在每天的生活與運動裡，能讓你玩得更開心、更有活力又安全！`,
  integrative: (l) =>
    `綜合活動就是把知識變成超能力！試著在今天的生活裡實踐「${l.title}」（${l.panels[0]?.label} → ${l.panels[1]?.label || "行動"}），你會發現自己越來越會解決問題！`,
};

export function buildFunFact(lesson) {
  if (customFunFacts[lesson.id]) return customFunFacts[lesson.id];
  const fn = subjectWonderTemplates[lesson.subject] || subjectWonderTemplates.life;
  return fn(lesson);
}

const typeMeta = {
  mcq: {
    badge: "四選一觀念辨析題",
    icon: "🎯",
    strategy: (l) =>
      `先圈出題目問的重點，對照「${l.goal.replace(/。$/, "")}」，把不符合事實或太絕對的干擾選項淘汰掉。`,
  },
  tf: {
    badge: "是非防雷迷思題",
    icon: "⚖️",
    strategy: (l) =>
      `特別小心常見陷阱：「${l.trap.replace(/。$/, "")}」。只要敘述裡有一個條件說反或以偏概全，就是「不對」！`,
  },
  num: {
    badge: "填數字計算／推理題",
    icon: "🔢",
    strategy: (l) =>
      `先確認題目要求的「單位」與「步驟」（${l.panels.map((p) => p.label).join(" → ")}），算完後代回題目驗算一次。`,
  },
  ord: {
    badge: "先後順序排列題",
    icon: "🪜",
    strategy: (l) =>
      `先找出「最先發生（最大／最小）」和「最後一步」，再把中間的項目順著邏輯排進去。`,
  },
  pair: {
    badge: "觀念與例子配對題",
    icon: "🔗",
    strategy: (l) =>
      `從你最確定的一組開始連！利用「${l.panels.map((p) => `${p.label}＝${p.value}`).join("、")}」的對應關係逐一配對。`,
  },
};

export function buildTypeGuide(lesson) {
  const presentTypes = [];
  for (const q of lesson.questions || []) {
    const t = q.tf ? "tf" : q.type;
    if (!presentTypes.includes(t)) presentTypes.push(t);
  }
  // 確保至少展示本課涵蓋的題型與一個防雷題型提醒
  if (!presentTypes.includes("tf")) presentTypes.push("tf");
  return presentTypes.map((t) => {
    const meta = typeMeta[t] || typeMeta.mcq;
    return {
      type: t,
      badge: meta.badge,
      icon: meta.icon,
      tip: meta.strategy(lesson),
    };
  });
}
