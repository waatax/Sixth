import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const lessonsDir = path.join(rootDir, 'src/data/lessons');
const imagesDir = path.join(rootDir, 'public/images');

const availableImages = new Set(fs.readdirSync(imagesDir));
const lessonFiles = fs.readdirSync(lessonsDir).filter(f => f.endsWith('.md')).sort();

console.log(`Starting comprehensive lesson enrichment for ${lessonFiles.length} files...`);

let updatedFilesCount = 0;
let totalImagesInserted = 0;

for (const file of lessonFiles) {
  const filePath = path.join(lessonsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const unitKey = file.replace('.md', '').replace('-', '_');
  
  // Normalize Windows CRLF to LF for consistent processing
  content = content.replace(/\r\n/g, '\n');
  const originalLength = content.length;

  // 1. Specific fix for man-u5.md missing Concept 3 header
  if (unitKey === 'man_u5' && !content.includes('核心觀念 3')) {
    const targetPattern = /(---\n+)(```text\s*\n\s*【文言虛詞)/;
    if (targetPattern.test(content)) {
      content = content.replace(
        targetPattern,
        `$1## 🔑 核心觀念 3：文言文入門與常見虛詞解密\n\n![圖解說明](./images/man_u5_concept3.svg)\n\n$2`
      );
    }
  }

  // 2. Upgrade legacy raster jpg in sci-u1 and sci-u2 to crisp SVGs
  if (unitKey === 'sci_u1') {
    content = content.replace('./images/water_cycle_states.jpg', './images/sci_u1_concept1.svg')
                     .replace('./images/high_low_pressure.jpg', './images/sci_u1_concept2.svg')
                     .replace('./images/fronts_weather.jpg', './images/sci_u1_concept3.svg')
                     .replace('./images/typhoon_structure.jpg', './images/sci_u1_concept4.svg');
  }
  if (unitKey === 'sci_u2') {
    content = content.replace('./images/saturation_solubility_zh.jpg', './images/sci_u2_concept2.svg')
                     .replace('./images/electrolytes_conductivity_zh.jpg', './images/sci_u2_concept3.svg')
                     .replace('./images/acid_base_indicators_zh.jpg', './images/sci_u2_concept4.svg')
                     .replace('./images/acid_base_neutralization_zh.jpg', './images/sci_u2_concept4.svg');
    if (!content.includes('sci_u2_concept1.svg')) {
      const c1Regex = /(##\s*[^\n]*?(?:觀念|重點|要素|原則)[^\n]*?1[:：][^\n]*\n)(?!\s*!\[)/;
      if (c1Regex.test(content)) {
        content = content.replace(c1Regex, `$1\n![圖解說明](./images/sci_u2_concept1.svg)\n`);
      }
    }
  }

  // 3. Ensure Concept 1 is linked
  const c1Svg = `${unitKey}_concept1.svg`;
  if (availableImages.has(c1Svg) && !content.includes(c1Svg) && !content.includes(`${unitKey}_concept1.jpg`)) {
    const c1Regex = /(##\s*[^\n]*?(?:觀念|重點|要素|原則)[^\n]*?1[:：][^\n]*\n)(?!\s*!\[)/;
    if (c1Regex.test(content)) {
      content = content.replace(c1Regex, `$1\n![圖解說明](./images/${c1Svg})\n`);
      totalImagesInserted++;
    }
  }

  // 4. Ensure Concept 2 is linked
  const c2Svg = `${unitKey}_concept2.svg`;
  if (availableImages.has(c2Svg) && !content.includes(c2Svg)) {
    const c2Regex = /(##\s*[^\n]*?(?:觀念|重點|要素|原則)[^\n]*?2[:：][^\n]*\n)(?!\s*!\[)/;
    if (c2Regex.test(content)) {
      content = content.replace(c2Regex, `$1\n![圖解說明](./images/${c2Svg})\n`);
      totalImagesInserted++;
    }
  }

  // 5. Ensure Concept 3 is linked
  const c3Svg = `${unitKey}_concept3.svg`;
  if (availableImages.has(c3Svg) && !content.includes(c3Svg)) {
    const c3Regex = /(##\s*[^\n]*?(?:觀念|重點|要素|原則)[^\n]*?3[:：][^\n]*\n)(?!\s*!\[)/;
    if (c3Regex.test(content)) {
      content = content.replace(c3Regex, `$1\n![圖解說明](./images/${c3Svg})\n`);
      totalImagesInserted++;
    }
  }

  // 6. Ensure Concept 4 is linked
  const c4Svg = `${unitKey}_concept4.svg`;
  if (availableImages.has(c4Svg) && !content.includes(c4Svg)) {
    const c4Regex = /(##\s*[^\n]*?(?:觀念|重點|要素|原則)[^\n]*?4[:：][^\n]*\n)(?!\s*!\[)/;
    if (c4Regex.test(content)) {
      content = content.replace(c4Regex, `$1\n![圖解說明](./images/${c4Svg})\n`);
      totalImagesInserted++;
    } else {
      // For 3-concept units: link under Summary / Review table or 4th major section
      const summaryRegex = /(##\s*[^\n]*?(?:核心考點|重點公式|速查表|重點速查|實戰地圖)[^\n]*\n)(?!\s*!\[)/;
      if (summaryRegex.test(content)) {
        content = content.replace(summaryRegex, `$1\n![圖解說明](./images/${c4Svg})\n`);
        totalImagesInserted++;
      }
    }
  }

  // 7. Enrich tables for key lessons that need additional structured comparison tables
  if (file === 'pe-u3.md' && !content.includes('CPR 搶救對照表')) {
    const enrichmentTable = `
### 📊 成人 vs 兒童 vs 嬰兒 CPR 搶救對照表

| 急救對象 | 適用年齡定義 | 按壓位置與手法 | 按壓深度 | 按壓速率 | 人工呼吸與電擊 (AED) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **成人** | 大於 8 歲（青春期後） | 兩乳頭連線胸骨中段，雙手掌根重疊互扣 | 至少 5 公分，不超過 6 公分 | 100 ~ 120 次/分 | 30:2 循環，成人電極貼片 |
| **兒童** | 1 歲至 8 歲 | 胸骨下半段，單手或雙手掌根視體型而定 | 約胸廓厚度的 1/3（約 5 公分） | 100 ~ 120 次/分 | 30:2 循環，優先使用兒童貼片/減能鍵 |
| **嬰兒** | 小於 1 歲 | 兩乳頭連線正下方，雙指（食指+中指）垂直按壓 | 約胸廓厚度的 1/3（約 4 公分） | 100 ~ 120 次/分 | 30:2 循環，不建議一般 AED（除非附嬰兒模式） |

### 📊 急性運動傷害最新醫學處置對比表 (PRICE vs POLICE)

| 處理維度 | 傳統 PRICE 原則 | 最新運動醫學 POLICE 原則 | 醫學升級理由與實踐指引 |
| :--- | :--- | :--- | :--- |
| **保護** | **P** - Protection (完全保護固定) | **P** - Protection (短暫保護) | 避免二次創傷，但不可長期固定導致肌肉萎縮關節僵硬 |
| **負荷** | **R** - Rest (絕對臥床靜養) | **OL** - Optimal Loading (最適負荷) | 在無痛範圍內提早微幅活動，促進韌帶纖維受力排列癒合 |
| **冰敷** | **I** - Ice (每 2 小時冰敷 20 分) | **I** - Ice (急性前 24h 謹慎冰敷) | 冰敷僅供止痛，過度冰敷反抑制組織發炎修復因子 |
| **壓迫** | **C** - Compression (彈性繃帶) | **C** - Compression (彈性繃帶) | 由遠心端往近心端均勻加壓，防止微血管出血水腫 |
| **抬高** | **E** - Elevation (高於心臟) | **E** - Elevation (高於心臟) | 利用重力促進淋巴與靜脈血液回流，加速排除組織水腫 |
`;
    content = content.replace(/(## 🔑 核心觀念 4：日常小意外正確急救指南)/, `${enrichmentTable}\n---\n\n$1`);
  }

  if (file === 'math-u12.md' && !content.includes('三大統計圖表選用決策矩陣')) {
    const statsTable = `
### 📊 三大統計圖表選用決策矩陣與誤區防範

| 圖表類型 | 最核心適用情境 | 核心特徵與幾何要素 | 優點與威力 | ⚠️ 常見視覺誤導與陷阱 | 課綱生活經典範例 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **長條圖 (Bar Chart)** | 比較不同類別的「數量多寡」 | 獨立長條、高度/長度與數值成正比 | 數值差異一目了然，易於排序高低 | 截斷縱軸起點（非從 0 開始）誇大微小差距 | 各縣市人口數、各班借書量 |
| **折線圖 (Line Graph)** | 連續時間軸上的「趨勢變化走勢」 | 座標點由線段連接，觀察斜率陡緩 | 直觀看出上升、下降、平緩與週期波動 | 橫軸時間間距不等卻均勻畫點造成斜率失真 | 氣溫逐時變化、一年體重成長記錄 |
| **圓形圖 (Pie Chart)** | 各部分佔整體的「百分比構成比例」 | 整個圓為 100%，扇形面積/圓心角對應百分率 | 比例強弱直觀，一眼看出過半或主導項目 | 分類過多（超過 7 類）或 3D 立體透視導致前方扇形虛假放大 | 家庭每月開銷佔比、投票得票率 |
`;
    content = content.replace(/(## 📊 本單元核心考點與重點公式速查表)/, `${statsTable}\n---\n\n$1`);
  }

  if (content !== originalLength) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedFilesCount++;
  }
}

console.log(`\nEnrichment complete!`);
console.log(`- Updated files: ${updatedFilesCount} / ${lessonFiles.length}`);
console.log(`- Total concept images newly inserted: ${totalImagesInserted}`);
