import fs from 'fs';
import path from 'path';

const dir = 'src/data/lessons';
const imgDir = 'public/images';

const syllabusMap = {
  'art-u1.md': '**課綱指標**：$\\textcolor{#e91e63}{\\textbf{視 1-III-1}}$ 探索色彩三要素（色相、明度、彩度）、12色相環、冷暖色調與黃金分割/三分法構圖原理，體會視覺美感與情感傳達。',
  'art-u2.md': '**課綱指標**：$\\textcolor{#2196f3}{\\textbf{音 1-III-1}}$ 認識五線譜高音譜號音名、4/4與3/4拍律動節奏、中西管弦樂器四大家族編制與臺灣本土民謠鑑賞。',
  'art-u3.md': '**課綱指標**：$\\textcolor{#a855f7}{\\textbf{表 1-III-1}}$ 運用肢體雕塑動作、聲音四度空間（音高/音量/音色/語速）與三幕劇起承轉合架構，進行情境戲劇創作與舞台鑑賞。',
  'art-u4.md': '**課綱指標**：$\\textcolor{#f59e0b}{\\textbf{視 1-III-2}}$ 運用以人為本之設計思考五步驟（EDIPT：同理、定義、發想、原型、測試）與通用設計原則，解決生活環境美感與友善便利問題。',
  
  'eng-u1.md': '**課綱指標**：$\\textcolor{#06b6d4}{\\textbf{1-III-2 / 2-III-1}}$ 能聽懂、辨識並運用日常作息時間說法（整點、半點、一刻鐘）、時間介系詞 (at/in/on) 與頻率副詞進行流暢生活對話。',
  'eng-u2.md': '**課綱指標**：$\\textcolor{#2563eb}{\\textbf{2-III-3 / 3-III-1}}$ 能理解規則動詞 (+ed) 與高頻不規則動詞過去式變化，並熟練運用 did/didn\'t 描述過去冒險故事與活動經歷。',
  'eng-u3.md': '**課綱指標**：$\\textcolor{#10b981}{\\textbf{1-III-4 / 2-III-2}}$ 能看懂城鎮街道地圖、運用空間介系詞 (across from, next to, between) 與禮貌問路指路句型 (Excuse me, how do I get to...?)。',
  'eng-u4.md': '**課綱指標**：$\\textcolor{#f43f5e}{\\textbf{2-III-4 / 3-III-2}}$ 能用英語表達身體部位與不適症狀（-ache 複合字、sore throat、fever），進行看醫生醫病生活對話與健康照顧建議。',
  'eng-u5.md': '**課綱指標**：$\\textcolor{#8b5cf6}{\\textbf{3-III-3 / 5-III-1}}$ 能比較臺灣傳統節慶（農曆新年、端午節、中秋節）與西方重要節慶（萬聖節、聖誕節）之文化習俗與飲食英語。',
  'eng-u6.md': '**課綱指標**：$\\textcolor{#f59e0b}{\\textbf{3-III-4 / 4-III-1}}$ 能掌握 Skimming（略讀抓主旨）與 Scanning（掃讀找細節）閱讀策略，並透過字尾變化 (-tion, -ful, -ly) 快速擴充英文生字庫。',

  'man-u1.md': '**課綱指標**：$\\textcolor{#2e7d32}{\\textbf{5-III-1 / 5-III-6}}$ 能運用訊息定位與推論統整閱讀理解策略，正確區分客觀事實 (Fact) 與主觀觀點 (Opinion)，並活用六何法 (5W1H) 解構文章脈絡。',
  'man-u2.md': '**課綱指標**：$\\textcolor{#e91e63}{\\textbf{6-III-1 / 6-III-2}}$ 能掌握記敘文起承轉合情節高潮山峰架構，熟練運用順敘、倒敘與插敘法，並透過人物動作與五感摹寫刻劃真情實感。',
  'man-u3.md': '**課綱指標**：$\\textcolor{#2563eb}{\\textbf{5-III-8 / 6-III-3}}$ 能理解說明文「總—分—總」結構與列數據、打比方說明方法，並掌握議論文「論點、論據、論證」之嚴謹邏輯思考。',
  'man-u4.md': '**課綱指標**：$\\textcolor{#f59e0b}{\\textbf{4-III-1 / 5-III-5}}$ 能辨析並靈活運用譬喻、擬人、排比、誇飾、設問等高頻修辭手法，並在語文寫作中巧妙融入成語故事提升意境。',
  'man-u5.md': '**課綱指標**：$\\textcolor{#7c3aed}{\\textbf{5-III-4 / 5-III-9}}$ 能賞析近體詩（五絕七絕格律、韻腳與詩人情懷），並研讀經典文言寓言，體察古聖先賢的處世智慧與寓意啟發。',
  'man-u6.md': '**課綱指標**：$\\textcolor{#0891b2}{\\textbf{2-III-1 / 2-III-2}}$ 能掌握上台演說台風、燈塔原則眼神接觸與聲音投射技巧，設計 Less is More 簡報視覺，並實踐三明治回饋溝通術。',

  'pe-u1.md': '**課綱指標**：$\\textcolor{#f43f5e}{\\textbf{健 1a-III-1}}$ 正確認識青春期男女第二性徵生理變化與生長衝刺，建立正向自我認同與身體意象，學習同儕相處與堅定拒絕自主權。',
  'pe-u2.md': '**課綱指標**：$\\textcolor{#10b981}{\\textbf{健 2a-III-1}}$ 實踐「我的餐盤」六大類食物均衡黃金比例口訣，學會解讀食品成分標示與三大營養素，遠離高糖高鈉垃圾食物陷阱。',
  'pe-u3.md': '**課綱指標**：$\\textcolor{#2563eb}{\\textbf{健 3a-III-1}}$ 熟練心肺復甦術 CPR+AED「叫叫CD」急救口訣與按壓深度頻率，掌握氣道哽塞哈姆立克法與急性運動傷害 PRICE 原則。',
  'pe-u4.md': '**課綱指標**：$\\textcolor{#f59e0b}{\\textbf{體 1c-III-1}}$ 掌握健康體適能四大要素（心肺耐力、肌力肌耐力、柔軟度、身體組成），擬定個人運動處方並落實運動家精神。',

  'comp-u1.md': '**課綱指標**：$\\textcolor{#059669}{\\textbf{綜 1a-III-1}}$ 活用時間管理「四象限法則」排定高效課表，辨析需要與想要，並落實「六三一」理財儲蓄與零用錢預算分配。',
  'comp-u2.md': '**課綱指標**：$\\textcolor{#a855f7}{\\textbf{綜 2a-III-1}}$ 認識情緒紅綠燈自我覺察調適機制，掌握「我訊息 (I-Message)」溝通公式四步驟，以同理心傾聽與化解同儕衝突。',
  'comp-u3.md': '**課綱指標**：$\\textcolor{#2563eb}{\\textbf{綜 3a-III-1}}$ 探索迦納八大多元智能天賦優勢，熟練康乃爾筆記法三大板塊與費曼學習法大白話輸出策略。',
  'comp-u4.md': '**課綱指標**：$\\textcolor{#f59e0b}{\\textbf{綜 2b-III-1}}$ 理解服務學習四部曲（準備、行動、反思、慶賀），規劃並實踐校園社區志工、弱勢關懷與公共公民行動。'
};

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();

let modifiedCount = 0;

files.forEach(filename => {
  const filePath = path.join(dir, filename);
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  const unitBase = filename.replace('.md', '');
  const normUnit = unitBase.replace('-', '_');

  // 1. Add syllabus indicator if missing
  if (syllabusMap[filename] && !content.includes('課綱指標')) {
    // Find where to insert (right after the first H1 header line)
    const lines = content.split('\n');
    let inserted = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('# ')) {
        // Insert syllabus indicator after line i
        lines.splice(i + 1, 0, '', syllabusMap[filename]);
        inserted = true;
        break;
      }
    }
    if (inserted) {
      content = lines.join('\n');
      changed = true;
    }
  }

  // 2. Normalize existing image links to .svg if svg exists
  content = content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, imgPath) => {
    let clean = imgPath.replace(/^\.?\/images\//, '').replace(/^\/images\//, '').replace(/^images\//, '');
    let svgName = clean.replace(/\.(jpg|png)$/, '.svg');
    if (fs.existsSync(path.join(imgDir, svgName))) {
      changed = true;
      return `![${alt}](./images/${svgName})`;
    }
    return match;
  });

  // 3. For units with 0 images, insert concept1 SVG under the first H2 concept heading
  const currentImgs = (content.match(/!\[.*?\]\((.*?)\)/g) || []).length;
  if (currentImgs === 0) {
    const defaultSvg = `${normUnit}_concept1.svg`;
    if (fs.existsSync(path.join(imgDir, defaultSvg))) {
      // Find the first "## 🔑 核心觀念" or "## 🔑" or first "## " after learning guide
      const lines = content.split('\n');
      let insertIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('## 🔑 核心觀念') || lines[i].startsWith('## 🔑') || (lines[i].startsWith('## ') && !lines[i].includes('導引') && insertIdx === -1)) {
          insertIdx = i + 1;
          break;
        }
      }
      if (insertIdx !== -1) {
        lines.splice(insertIdx, 0, '', `![圖解說明](./images/${defaultSvg})`, '');
        content = lines.join('\n');
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    modifiedCount++;
    console.log(`Updated lesson: ${filename}`);
  }
});

console.log(`Successfully updated ${modifiedCount} lesson files!`);
