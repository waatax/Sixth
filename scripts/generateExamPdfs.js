// 🎓 108 課綱六年級各科每學期段考（期中、期末、畢業考）學習講義 PDF 批次自動生成器
// 使用 KaTeX 數學科學排版引擎 + Chrome Headless 批次編譯 48 份實體 PDF 講義

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import {
  getNotesBySubjectSemesterAndScope,
  getExamHandoutInfo
} from '../src/data/examNotes/index.js';
import { getUnitDiagram } from '../src/data/examNotes/unitDiagrams.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const HTML_OUTPUT_DIR = path.join(projectRoot, 'public', 'downloads', 'html');
const PDF_OUTPUT_DIR = path.join(projectRoot, 'public', 'downloads', 'pdf');

// 確保輸出目錄存在
fs.mkdirSync(HTML_OUTPUT_DIR, { recursive: true });
fs.mkdirSync(PDF_OUTPUT_DIR, { recursive: true });

// 讀取 KaTeX 原生 CSS 進行內嵌，確保離線與 PDF 完美向量渲染
const katexCssPath = path.join(projectRoot, 'node_modules', 'katex', 'dist', 'katex.min.css');
const katexCssContent = fs.existsSync(katexCssPath) ? fs.readFileSync(katexCssPath, 'utf8') : '';

// 針對 OneDrive 同步暫時鎖檔設計的安全寫入函式（具備指數退避重試）
function safeWriteFileSync(filePath, content, encoding = 'utf8') {
  let retries = 6;
  while (retries > 0) {
    try {
      fs.writeFileSync(filePath, content, encoding);
      return;
    } catch (err) {
      retries--;
      if (retries === 0) throw err;
      const buffer = new SharedArrayBuffer(4);
      const view = new Int32Array(buffer);
      Atomics.wait(view, 0, 0, 250);
    }
  }
}

// 安全複製函式
function safeCopyFileSync(src, dest) {
  let retries = 6;
  while (retries > 0) {
    try {
      fs.copyFileSync(src, dest);
      return;
    } catch (err) {
      retries--;
      if (retries === 0) throw err;
      const buffer = new SharedArrayBuffer(4);
      const view = new Int32Array(buffer);
      Atomics.wait(view, 0, 0, 250);
    }
  }
}

// Chrome / Edge 執行檔路徑搜尋
function getBrowserExecutablePath() {
  const possiblePaths = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

// 判斷是否為實質 LaTeX 數學或科學公式
function isLaTeXMathFormula(str) {
  if (!str) return false;
  // 若包含中文字且未被 \text{} 包裹，則屬於純文字速記口訣/金句
  const chineseCount = (str.match(/[\u4e00-\u9fa5]/g) || []).length;
  if (chineseCount > 0 && !str.includes('\\text{')) {
    return false;
  }
  return /\\(frac|times|div|text|theta|circ|quad|implies|pm|approx|cdot|sqrt|neq|[a-zA-Z]+)|[\^_{}]/.test(str);
}

// 數學公式與名師速記口訣渲染器
function renderMathText(text) {
  if (!text) return '';
  return text.replace(/\$([^$]+)\$/g, (match, formula) => {
    try {
      return katex.renderToString(formula, { throwOnError: false });
    } catch {
      return match;
    }
  });
}

function renderDisplayFormula(formula) {
  if (!formula) return '';
  if (isLaTeXMathFormula(formula)) {
    try {
      return katex.renderToString(formula, { displayMode: true, throwOnError: false });
    } catch {
      return `<div class="formula-text-fallback">${formula}</div>`;
    }
  }
  return `<div class="formula-mnemonic-callout"><span class="mnemonic-quote-mark">“</span><span class="mnemonic-text">${formula}</span><span class="mnemonic-quote-mark">”</span></div>`;
}

// 生成單一講義 HTML
function buildHandoutHtml(handoutInfo, notesList) {
  return `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>${handoutInfo.fullTitle}</title>
  <style>
    ${katexCssContent}

    @page {
      size: A4 portrait;
      margin: 9mm 10mm 10mm 10mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Microsoft JhengHei", sans-serif;
      color: #0f172a;
      line-height: 1.55;
      font-size: 12px;
      background: #ffffff;
      margin: 0;
      padding: 0;
    }

    .handout-header {
      border-bottom: 2.5px solid #2563eb;
      padding-bottom: 10px;
      margin-bottom: 16px;
    }

    .handout-badge-row {
      display: flex;
      gap: 6px;
      margin-bottom: 4px;
    }

    .badge {
      display: inline-block;
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 800;
    }

    .badge-primary { background: #dbeafe; color: #1d4ed8; }
    .badge-accent { background: #fef3c7; color: #b45309; }
    .badge-scope { background: #ede9fe; color: #6d28d9; }

    .handout-title {
      font-size: 18px;
      font-weight: 900;
      color: #0f172a;
      margin: 0 0 6px 0;
      letter-spacing: -0.01em;
    }

    .handout-desc {
      font-size: 11px;
      color: #475569;
      margin: 0 0 10px 0;
      line-height: 1.5;
    }

    .student-info-bar {
      display: flex;
      justify-content: space-between;
      background: #f8fafc;
      padding: 5px 12px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
      font-size: 11px;
      font-weight: 600;
      color: #334155;
    }

    .unit-card {
      page-break-inside: avoid;
      break-inside: avoid;
      border: 1.5px solid #cbd5e1;
      border-radius: 8px;
      margin-bottom: 16px;
      padding: 12px 14px;
      background: #ffffff;
    }

    .unit-header {
      border-bottom: 1.5px solid #e2e8f0;
      padding-bottom: 6px;
      margin-bottom: 8px;
    }

    .unit-title {
      font-size: 14px;
      font-weight: 800;
      color: #0f172a;
      border-left: 3.5px solid #2563eb;
      padding-left: 7px;
      margin: 3px 0 0 0;
    }

    .unit-pedagogy-row {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      margin-top: 5px;
    }

    .pedagogy-pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      font-size: 9.5px;
      padding: 2px 7px;
      border-radius: 4px;
      line-height: 1.4;
    }

    .pedagogy-pill.prior {
      background: #eff6ff;
      color: #1e40af;
      border: 1px solid #bfdbfe;
    }

    .pedagogy-pill.skill {
      background: #fdf4ff;
      color: #86198f;
      border: 1px solid #f5d0fe;
    }

    .unit-highlights-box {
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border: 1.5px solid #fde68a;
      border-radius: 6px;
      padding: 7px 10px;
      margin-bottom: 9px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .highlights-box-title {
      font-size: 10.5px;
      font-weight: 800;
      color: #92400e;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
    }

    .highlight-card {
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid #fcd34d;
      border-radius: 4px;
      padding: 5px 7px;
    }

    .highlight-num {
      font-size: 8px;
      font-weight: 800;
      color: #d97706;
      text-transform: uppercase;
      margin-bottom: 2px;
    }

    .highlight-point {
      font-size: 10px;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 2px;
      line-height: 1.35;
    }

    .highlight-desc {
      font-size: 9px;
      color: #475569;
      line-height: 1.4;
    }

    .unit-dual-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 12px;
      margin-bottom: 8px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .col-left, .col-right {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-block {
      margin-bottom: 6px;
    }

    .section-title {
      font-size: 11px;
      font-weight: 800;
      color: #1e293b;
      margin: 0 0 4px 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .concept-item {
      margin-bottom: 3px;
      font-size: 11px;
      line-height: 1.55;
      color: #334155;
    }

    .formulas-grid {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .formula-card {
      background: #fffbeb;
      border: 1px solid #fef3c7;
      border-left: 3px solid #d97706;
      border-radius: 5px;
      padding: 5px 8px;
    }

    .formula-name {
      font-weight: 800;
      font-size: 10.5px;
      color: #b45309;
      margin-bottom: 2px;
    }

    .formula-body {
      font-size: 11.5px;
      margin: 2px 0;
    }

    .formula-mnemonic-callout {
      background: #fffbeb;
      border: 1px solid #fde68a;
      border-left: 3.5px solid #d97706;
      border-radius: 4px;
      padding: 5px 8px;
      color: #92400e;
      font-weight: 700;
      font-size: 10.5px;
      line-height: 1.45;
      display: flex;
      align-items: center;
      gap: 4px;
      margin: 3px 0;
    }

    .mnemonic-quote-mark {
      font-size: 13px;
      color: #d97706;
      font-family: Georgia, serif;
      line-height: 1;
      flex-shrink: 0;
    }

    .formula-detail {
      font-size: 10px;
      color: #78350f;
    }

    .diagram-card {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      padding: 6px 8px;
    }

    .diagram-badge {
      display: inline-block;
      background: #ede9fe;
      color: #6d28d9;
      font-size: 9px;
      font-weight: 800;
      padding: 1px 5px;
      border-radius: 3px;
      margin-bottom: 3px;
    }

    .diagram-title {
      font-weight: 800;
      font-size: 10.5px;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .diagram-svg-container {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      padding: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .diagram-svg-container svg {
      max-width: 100%;
      height: auto;
      max-height: 155px;
    }

    .diagram-subtitle {
      font-size: 9px;
      color: #475569;
      background: #f1f5f9;
      border-left: 2.5px solid #2563eb;
      padding: 3px 6px;
      margin-top: 4px;
      border-radius: 2px;
      line-height: 1.4;
    }

    .pitfalls-box {
      background: #fef2f2;
      border: 1px solid #fee2e2;
      border-left: 3px solid #ef4444;
      border-radius: 5px;
      padding: 5px 8px;
    }

    .pitfall-item {
      font-size: 10.5px;
      color: #991b1b;
      margin-bottom: 2px;
      line-height: 1.45;
    }

    .pitfall-item:last-child {
      margin-bottom: 0;
    }

    .walkthrough-box {
      background: #f8fafc;
      border: 1px solid #cbd5e1;
      border-radius: 5px;
      padding: 8px 10px;
      margin-bottom: 6px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .walkthrough-source {
      font-size: 9.5px;
      color: #64748b;
      font-weight: 700;
      margin-bottom: 2px;
    }

    .walkthrough-question {
      font-weight: 700;
      font-size: 11px;
      color: #0f172a;
      margin-bottom: 4px;
    }

    .walkthrough-options {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4px;
      margin-bottom: 5px;
      font-size: 10.5px;
    }

    .walkthrough-option-item {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      padding: 3px 6px;
      border-radius: 3px;
    }

    .walkthrough-explanation {
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      border-radius: 3px;
      padding: 5px 7px;
      font-size: 10px;
      color: #065f46;
      line-height: 1.45;
    }

    .checklist-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 5px;
      padding: 5px 8px;
    }

    .checklist-box.compact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3px 8px;
    }

    .checklist-item {
      font-size: 10.5px;
      color: #166534;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .box-square { display: inline-block; width: 9px; height: 9px; border: 1.5px solid #16a34a; border-radius: 2px; flex-shrink: 0; }

    .handout-footer {
      text-align: center;
      font-size: 9.5px;
      color: #94a3b8;
      border-top: 1px solid #e2e8f0;
      padding-top: 6px;
      margin-top: 16px;
    }
  </style>
</head>
<body>
  <!-- 講義官方標頭 -->
  <div class="handout-header">
    <div class="handout-badge-row">
      <span class="badge badge-primary">最強小六 2026 旗艦版</span>
      <span class="badge badge-accent">${handoutInfo.badgeText}</span>
      <span class="badge badge-scope">${handoutInfo.subjectName} ｜ ${handoutInfo.semesterLabel}</span>
    </div>
    <h1 class="handout-title">${handoutInfo.fullTitle}</h1>
    <p class="handout-desc">${handoutInfo.description}</p>
    <div class="student-info-bar">
      <span>學校：____________________</span>
      <span>班級：六年______班</span>
      <span>座號：______</span>
      <span>姓名：____________</span>
      <span>複習評分：______ 分</span>
    </div>
  </div>

  <!-- 單元核心筆記列表 -->
  <div class="units-container">
    ${notesList.map((note) => {
      const diag = getUnitDiagram(note.unitId);
      return `
      <div class="unit-card">
        <div class="unit-header">
          <div class="handout-badge-row">
            <span class="badge badge-primary">${note.examScopeLabel || '段考重點'}</span>
            <span class="badge badge-accent">${note.term}</span>
            ${note.examWeight ? `<span class="badge" style="background: #dcfce7; color: #15803d;">${note.examWeight}</span>` : ''}
            <span style="font-size: 10px; color: #64748b;">${note.textbookCoverage}</span>
          </div>
          <h2 class="unit-title">${note.title}</h2>
          ${note.priorConcept || note.masterySkill ? `
            <div class="unit-pedagogy-row">
              ${note.priorConcept ? `<span class="pedagogy-pill prior">🎯 <strong>溫故知新：</strong>${note.priorConcept}</span>` : ''}
              ${note.masterySkill ? `<span class="pedagogy-pill skill">🏅 <strong>能力指標：</strong>${note.masterySkill}</span>` : ''}
            </div>
          ` : ''}
        </div>

        ${note.highlights && note.highlights.length > 0 ? `
          <div class="unit-highlights-box">
            <div class="highlights-box-title">🌟【段考三大核心知識亮點・高頻必考精華】</div>
            <div class="highlights-grid">
              ${note.highlights.map((h, hIdx) => `
                <div class="highlight-card">
                  <div class="highlight-num">亮點 0${hIdx + 1}</div>
                  <div class="highlight-point">${h.point}</div>
                  <div class="highlight-desc">${h.detail}</div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 緊湊雙欄排版 (左欄觀念與公式，右欄向量圖解與防雷指南) -->
        <div class="unit-dual-grid">
          <div class="col-left">
            <!-- 1. 課綱觀念突破 -->
            <div class="section-block">
              <div class="section-title">📖【課綱核心觀念突破】</div>
              <div class="concepts-list">
                ${note.coreConcepts.map(c => `<div class="concept-item">${renderMathText(c)}</div>`).join('')}
              </div>
            </div>

            <!-- 2. 名師必背公式與解題大招 -->
            ${note.keyFormulas && note.keyFormulas.length > 0 ? `
              <div class="section-block">
                <div class="section-title">⚡【名師公式・解題大招・速記口訣】</div>
                <div class="formulas-grid">
                  ${note.keyFormulas.map(f => `
                    <div class="formula-card">
                      <div class="formula-name">🌟 ${f.name}</div>
                      <div class="formula-body">${renderDisplayFormula(f.formula)}</div>
                      ${f.detail ? `<div class="formula-detail">💡 <strong>大招解析：</strong>${f.detail}</div>` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <div class="col-right">
            <!-- 考點向量視覺圖解 -->
            ${diag ? `
              <div class="diagram-card">
                <div class="diagram-badge">🎨 考點視覺圖解</div>
                <div class="diagram-title">${diag.title}</div>
                <div class="diagram-svg-container">${diag.svg}</div>
                ${diag.subtitle ? `<div class="diagram-subtitle">💡 ${diag.subtitle}</div>` : ''}
              </div>
            ` : ''}

            <!-- 3. 歷屆常考易錯陷阱 -->
            ${note.examPitfalls && note.examPitfalls.length > 0 ? `
              <div class="section-block">
                <div class="section-title" style="color: #b91c1c;">⚠️【歷屆名校高頻常考易錯陷阱】</div>
                <div class="pitfalls-box">
                  ${note.examPitfalls.map(p => `<div class="pitfall-item">${renderMathText(p)}</div>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- 4. 各校歷年真題實戰詳解 -->
        ${note.pastExamWalkthroughs && note.pastExamWalkthroughs.length > 0 ? `
          <div class="section-block" style="border-top: 1px dashed #e2e8f0; padding-top: 8px; margin-top: 6px;">
            <div class="section-title" style="color: #047857;">📝【各校歷年段考／畢業考真題實戰】</div>
            ${note.pastExamWalkthroughs.map((w, wIdx) => `
              <div class="walkthrough-box">
                <div class="walkthrough-source">🏛️ ${w.examSource}</div>
                <div class="walkthrough-question">【真題 ${wIdx + 1}】${renderMathText(w.question)}</div>
                <div class="walkthrough-options">
                  ${w.options.map((opt, optIdx) => `
                    <div class="walkthrough-option-item" style="${optIdx === w.answerIndex ? 'border-color: #10b981; font-weight: 700;' : ''}">
                      ${opt}
                    </div>
                  `).join('')}
                </div>
                <div class="walkthrough-explanation">
                  <strong>✅ 正確解答：選項 ${['A', 'B', 'C', 'D'][w.answerIndex]}</strong><br>
                  ${renderMathText(w.explanation).replace(/\n/g, '<br>')}
                </div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- 5. 考前 10 分鐘必會檢核清單 (雙欄排列) -->
        ${note.selfChecklist && note.selfChecklist.length > 0 ? `
          <div class="section-block" style="margin-bottom: 0;">
            <div class="section-title" style="color: #15803d;">📋【考前 10 分鐘必會檢核清單】</div>
            <div class="checklist-box compact-grid">
              ${note.selfChecklist.map(chk => `
                <div class="checklist-item">
                  <span class="box-square"></span>
                  <span>${chk}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
      `;
    }).join('')}
  </div>

  <div class="handout-footer">
    108 課綱六年級專屬學科講義 ｜ 對齊康軒・南一・翰林三大版本 ｜ 祝考試順利・奪取高分！
  </div>
</body>
</html>`;
}

// 主執行函式
async function main() {
  const isForce = process.argv.includes('--force');
  console.log(`🚀 開始批次生成六年級各科段考學習講義與真實 PDF 檔案... ${isForce ? '(強制全量重新編譯模式)' : ''}`);

  const browserPath = getBrowserExecutablePath();
  if (!browserPath) {
    console.error('❌ 未找到 Chrome 或 Edge 瀏覽器，無法調用 headless PDF 編譯！');
    process.exit(1);
  }
  console.log(`🔍 偵測到可用瀏覽器: ${browserPath}`);

  const subjects = ['math', 'science', 'mandarin', 'social', 'english', 'arts', 'health_pe', 'integrative'];
  const semesters = ['6A', '6B'];
  const scopes = ['midterm', 'final', 'all'];

  const manifest = [];
  let generatedCount = 0;

  for (const sub of subjects) {
    for (const sem of semesters) {
      for (const scope of scopes) {
        const handoutInfo = getExamHandoutInfo(sub, sem, scope);
        const notesList = getNotesBySubjectSemesterAndScope(sub, sem, scope);

        if (notesList.length === 0) continue;

        const baseFileName = `${sub}_${sem}_${scope}`;
        const htmlFileName = `${baseFileName}.html`;
        const pdfFileName = `${baseFileName}.pdf`;

        const htmlFilePath = path.join(HTML_OUTPUT_DIR, htmlFileName);
        const pdfFilePath = path.join(PDF_OUTPUT_DIR, pdfFileName);

        // 1. 生成 standalone HTML
        const htmlContent = buildHandoutHtml(handoutInfo, notesList);
        safeWriteFileSync(htmlFilePath, htmlContent, 'utf8');

        // 2. 調用 Edge / Chrome Headless 編譯為真實 PDF
        let compiled = false;
        let lastErr = null;

        // 若非強制重新編譯且已存在大於 10KB，可直接復用
        if (!isForce && fs.existsSync(pdfFilePath) && fs.statSync(pdfFilePath).size > 10000) {
          compiled = true;
          const stat = fs.statSync(pdfFilePath);
          console.log(`⚡ [${++generatedCount}/48] 既有最新 PDF: ${pdfFileName} (${Math.round(stat.size / 1024)} KB, ${notesList.length} 個單元)`);

          manifest.push({
            subjectId: sub,
            semester: sem,
            scope,
            title: handoutInfo.fullTitle,
            unitCount: notesList.length,
            pdfFileName,
            pdfUrl: `/downloads/pdf/${pdfFileName}`,
            sizeBytes: stat.size
          });

          if (sem === '6B' && scope === 'final') {
            const gradPdfPath = path.join(PDF_OUTPUT_DIR, `${sub}_6B_graduation.pdf`);
            safeCopyFileSync(pdfFilePath, gradPdfPath);
          }
        }

        for (let attempt = 1; attempt <= 2 && !compiled; attempt++) {
          try {
            execFileSync(browserPath, [
              '--headless',
              '--disable-gpu',
              '--no-sandbox',
              '--disable-dev-shm-usage',
              '--no-pdf-header-footer',
              `--print-to-pdf=${pdfFilePath}`,
              htmlFilePath
            ], { stdio: 'ignore', timeout: 90000 });

            if (fs.existsSync(pdfFilePath) && fs.statSync(pdfFilePath).size > 1000) {
              compiled = true;
              const stat = fs.statSync(pdfFilePath);
              console.log(`✅ [${++generatedCount}/48] 成功生成: ${pdfFileName} (${Math.round(stat.size / 1024)} KB, ${notesList.length} 個單元)`);

              manifest.push({
                subjectId: sub,
                semester: sem,
                scope,
                title: handoutInfo.fullTitle,
                unitCount: notesList.length,
                pdfFileName,
                pdfUrl: `/downloads/pdf/${pdfFileName}`,
                sizeBytes: stat.size
              });

              // 如果是 6B final，額外複製一份為 6B_graduation.pdf 方便相容
              if (sem === '6B' && scope === 'final') {
                const gradPdfPath = path.join(PDF_OUTPUT_DIR, `${sub}_6B_graduation.pdf`);
                safeCopyFileSync(pdfFilePath, gradPdfPath);
              }
            }
          } catch (err) {
            lastErr = err;
          }
        }

        if (!compiled) {
          console.error(`❌ 生成 PDF 失敗: ${pdfFileName}`, lastErr ? lastErr.message : 'Unknown error');
        }
      }
    }
  }

  // 寫入 manifest.json
  const manifestPath = path.join(PDF_OUTPUT_DIR, 'manifest.json');
  safeWriteFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`\n🎉 全部完成！共成功編譯 ${generatedCount} 套段考 PDF 講義檔案至 public/downloads/pdf/！`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
