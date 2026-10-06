import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const coursesPath = path.join(rootDir, 'src/data/courses.js');

let fileContent = fs.readFileSync(coursesPath, 'utf8');

// Metadata map for each unit
const unitMetadata = {
  // 🧮 數學領域 (12單元)
  'math-u1': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '數-E-A1', badge: '質因數分解與因倍數' },
  'math-u2': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '數-E-A2', badge: '顛倒相乘幾何算理' },
  'math-u3': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '數-E-A2', badge: '小數點移位與餘數' },
  'math-u4': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '數-E-B1', badge: '比與比值最簡比' },
  'math-u5': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '數-E-B1', badge: '圓周長與扇形弧長' },
  'math-u6': { semester: '6A', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '數-E-B3', badge: '圓面積切片拼貼幾何' },
  'math-u7': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '數-E-C1', badge: '速率追趕單位換算' },
  'math-u8': { semester: '6B', term: 'midterm', difficulty: 3, estimatedMinutes: 18, competencyCode: '數-E-B3', badge: '柱體體積與表面積' },
  'math-u9': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '數-E-B1', badge: '放大縮小圖與比例尺' },
  'math-u10': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '數-E-A2', badge: '基準量比較量與解題' },
  'math-u11': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '數-E-A1', badge: '等量公理與代數先修' },
  'math-u12': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '數-E-C2', badge: '圓形圖與統計判讀' },

  // 🔬 自然科學 (10單元)
  'sci-u1': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-B2', badge: '冷暖鋒面與水循環' },
  'sci-u2': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-A2', badge: '水溶液酸鹼石蕊試紙' },
  'sci-u3': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-A1', badge: '電磁鐵奧斯特實驗' },
  'sci-u4': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-C1', badge: '三大岩類流水侵蝕' },
  'sci-u5': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-B3', badge: '熱傳導對流輻射' },
  'sci-u6': { semester: '6B', term: 'midterm', difficulty: 3, estimatedMinutes: 18, competencyCode: '自-E-A3', badge: '槓桿原理簡單機械' },
  'sci-u7': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-A2', badge: '鐵生鏽防鏽微生物' },
  'sci-u8': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-C2', badge: '食物網生態系保育' },
  'sci-u9': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '自-E-B1', badge: '聲音振動傳播樂器' },
  'sci-u10': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '自-E-A1', badge: '顯微鏡操作微觀世界' },

  // 📖 國語文 (8單元)
  'man-u1': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '國-E-A1', badge: '閱讀理解策略六何法' },
  'man-u2': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '國-E-B1', badge: '記敘文起承轉合寫作' },
  'man-u3': { semester: '6A', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '國-E-A2', badge: '說明文與議論文思維' },
  'man-u4': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '國-E-B2', badge: '修辭魔法成語百寶箱' },
  'man-u5': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '國-E-B3', badge: '古典文學詩詞寓言' },
  'man-u6': { semester: '6B', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '國-E-C1', badge: '口語表達簡報台風' },
  'man-u7': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '國-E-B1', badge: '書信便條應用文格式' },
  'man-u8': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '國-E-A3', badge: '六書造字升中銜接' },

  // 🌍 社會領域 (8單元)
  'soc-u1': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '社-E-B1', badge: '臺灣民主五院制衡' },
  'soc-u2': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '社-E-C1', badge: '多元族群社會變遷' },
  'soc-u3': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '社-E-A2', badge: '經濟轉型十大建設' },
  'soc-u4': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '社-E-C2', badge: '全球化浪潮UN國際組織' },
  'soc-u5': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '社-E-A3', badge: '兒童人權CRC個資防護' },
  'soc-u6': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '社-E-C3', badge: '聯合國SDGs永續公民' },
  'soc-u7': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '社-E-B2', badge: '世界地理文化遺產' },
  'soc-u8': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '社-E-A1', badge: 'AI科技浪潮資訊倫理' },

  // 🇬🇧 英語文 (8單元)
  'eng-u1': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '英-E-A1', badge: 'Daily Routines日常會話' },
  'eng-u2': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '英-E-B1', badge: 'Past Tense過去式冒險' },
  'eng-u3': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '英-E-C1', badge: 'Directions問路方位' },
  'eng-u4': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '英-E-A2', badge: 'Health Care身體健康' },
  'eng-u5': { semester: '6B', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '英-E-C2', badge: 'Festivals中西節慶' },
  'eng-u6': { semester: '6B', term: 'midterm', difficulty: 3, estimatedMinutes: 18, competencyCode: '英-E-B2', badge: 'Reading Comprehension' },
  'eng-u7': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '英-E-A1', badge: 'Future Plans未來職業' },
  'eng-u8': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '英-E-B1', badge: 'Comparisons比較級最高級' },

  // 🎨 藝術領域 (6單元)
  'art-u1': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '藝-E-A1', badge: '色彩三要素構圖美學' },
  'art-u2': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '藝-E-B1', badge: '五線譜拍號古典本土' },
  'art-u3': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '藝-E-C1', badge: '表演藝術三幕劇肢體' },
  'art-u4': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '藝-E-A2', badge: '設計思考通用設計' },
  'art-u5': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '藝-E-B2', badge: '平板電繪定格動畫' },
  'art-u6': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '藝-E-C2', badge: '民間工藝世界偶戲' },

  // 💪 健康與體育 (6單元)
  'pe-u1': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '體-E-A1', badge: '青春期發育自我肯定' },
  'pe-u2': { semester: '6A', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '體-E-B1', badge: '我的餐盤食品標示' },
  'pe-u3': { semester: '6A', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '體-E-C1', badge: 'CPR+AED叫叫CD急救' },
  'pe-u4': { semester: '6B', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '體-E-A2', badge: '健康體適能運動品格' },
  'pe-u5': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '體-E-B2', badge: '球類戰術動態熱身' },
  'pe-u6': { semester: '6B', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '體-E-C2', badge: '壓力調適成長心態' },

  // 🌱 綜合活動 (6單元)
  'comp-u1': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '綜-E-A1', badge: '時間四象限六三一理財' },
  'comp-u2': { semester: '6A', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '綜-E-B1', badge: '情緒紅綠燈我訊息高EQ' },
  'comp-u3': { semester: '6A', term: 'final', difficulty: 2, estimatedMinutes: 15, competencyCode: '綜-E-A2', badge: '八大多元智能筆記法' },
  'comp-u4': { semester: '6B', term: 'midterm', difficulty: 1, estimatedMinutes: 15, competencyCode: '綜-E-C1', badge: '服務學習四部曲公民' },
  'comp-u5': { semester: '6B', term: 'midterm', difficulty: 2, estimatedMinutes: 15, competencyCode: '綜-E-B2', badge: '假新聞查核數位素養' },
  'comp-u6': { semester: '6B', term: 'final', difficulty: 3, estimatedMinutes: 18, competencyCode: '綜-E-C2', badge: '無痕山林LNT野外求生' }
};

// Replace each unit block in fileContent
for (const [uId, meta] of Object.entries(unitMetadata)) {
  const regex = new RegExp(`(id:\\s*['"]${uId}['"][\\s\\S]*?)(keyConcepts:\\s*\\[[\\s\\S]*?\\])(\\s*\\})`, 'g');
  fileContent = fileContent.replace(regex, (match, prefix, keyConceptsPart, suffix) => {
    // Check if semester is already added
    if (prefix.includes('semester:')) return match;
    const injection = `\n        semester: '${meta.semester}',\n        term: '${meta.term}',\n        difficulty: ${meta.difficulty},\n        estimatedMinutes: ${meta.estimatedMinutes},\n        competencyCode: '${meta.competencyCode}',\n        badge: '${meta.badge}',\n        `;
    return prefix + injection.trimStart() + keyConceptsPart + suffix;
  });
}

fs.writeFileSync(coursesPath, fileContent, 'utf8');
console.log('✅ Successfully enriched 64 units in src/data/courses.js with structured taxonomy metadata!');
