import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import katex from 'katex';
import { coursesData } from '../data/courses';
import {
  getNotesBySubjectSemesterAndScope,
  getExamHandoutInfo
} from '../data/examNotes';
import { getUnitDiagram } from '../data/examNotes/unitDiagrams';
import { 
  Printer, 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  Zap, 
  HelpCircle, 
  Download, 
  BookOpen, 
  FileText,
  Sparkles,
  ArrowLeft,
  Eye,
  EyeOff,
  Maximize2,
  Minimize2,
  FolderDown,
  Calendar,
  Target,
  Award,
  Compass
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';
import './ExamReviewNotesPage.css';

// 安全渲染包含 KaTeX 行內數學式 $...$ 的字串
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

// 渲染獨立展示數學公式或名師口訣金句
function renderDisplayFormula(formula) {
  if (!formula) return '';
  if (isLaTeXMathFormula(formula)) {
    try {
      return katex.renderToString(formula, { displayMode: true, throwOnError: false });
    } catch {
      return `<div class="formula-text-fallback">${formula}</div>`;
    }
  }
  // 純文字速記口訣或名師金句
  return `<div class="formula-mnemonic-callout"><span class="mnemonic-quote-mark">“</span><span class="mnemonic-text">${formula}</span><span class="mnemonic-quote-mark">”</span></div>`;
}

// 計算單元自測掌握度與評級徽章
function getUnitMasteryInfo(note, checkedMap) {
  const list = note.selfChecklist || [];
  if (list.length === 0) {
    return { checked: 0, total: 0, percent: 100, level: 'gold', label: '奪冠滿分', icon: '🥇' };
  }
  let checked = 0;
  list.forEach((_, idx) => {
    if (checkedMap[`${note.unitId}_${idx}`]) checked++;
  });
  const percent = Math.round((checked / list.length) * 100);
  if (percent === 100) return { checked, total: list.length, percent, level: 'gold', label: '奪冠滿分', icon: '🥇' };
  if (percent >= 50) return { checked, total: list.length, percent, level: 'silver', label: '穩固精熟', icon: '🥈' };
  return { checked, total: list.length, percent, level: 'bronze', label: '初步理解', icon: '🥉' };
}

const ExamReviewNotesPage = () => {
  const { subjectId = 'math', semester = '6A', scope = 'all' } = useParams();
  const navigate = useNavigate();

  const currentSubject = subjectId.toLowerCase();
  const currentSemester = semester.toUpperCase(); // '6A' or '6B'

  // 當前段考範圍: 'all' (全學期) | 'midterm' (期中考/第一次段考) | 'final' (期末考/畢業考)
  const [examScope, setExamScope] = useState(scope.toLowerCase());

  useEffect(() => {
    if (scope) {
      setExamScope(scope.toLowerCase());
    }
  }, [scope]);
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedSolutions, setRevealedSolutions] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [isWideMode, setIsWideMode] = useState(() => {
    try {
      return localStorage.getItem('sixth_notes_wide_mode') === 'true';
    } catch {
      return false;
    }
  });
  const [allSolutionsExpanded, setAllSolutionsExpanded] = useState(false);
  // 焦點衝刺模式: 'all' (全部) | 'highlights' (段考亮點) | 'formulas' (名師公式口訣) | 'pitfalls' (避雷陷阱) | 'walkthroughs' (真題解析) | 'checklist' (自測清單)
  const [focusSection, setFocusSection] = useState('all');

  // 當前學科資訊
  const currentSubjectMeta = useMemo(() => {
    return coursesData.subjects.find(s => s.id === currentSubject) || coursesData.subjects[0];
  }, [currentSubject]);

  // 當前選定之段考講義資訊 (標題、描述、PDF檔名等)
  const handoutInfo = useMemo(() => {
    return getExamHandoutInfo(currentSubject, currentSemester, examScope);
  }, [currentSubject, currentSemester, examScope]);

  // 載入該學科、學期與段考範圍的單元筆記清單
  const notesList = useMemo(() => {
    return getNotesBySubjectSemesterAndScope(currentSubject, currentSemester, examScope);
  }, [currentSubject, currentSemester, examScope]);

  // 讀取 Checkbox 勾選狀態 (localStorage)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`sixth_exam_notes_chk_${currentSubject}_${currentSemester}`);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      } else {
        setCheckedItems({});
      }
    } catch {
      setCheckedItems({});
    }
  }, [currentSubject, currentSemester]);

  // 切換勾選狀態
  const toggleCheckItem = (unitId, idx) => {
    const key = `${unitId}_${idx}`;
    const next = { ...checkedItems, [key]: !checkedItems[key] };
    setCheckedItems(next);
    try {
      localStorage.setItem(`sixth_exam_notes_chk_${currentSubject}_${currentSemester}`, JSON.stringify(next));
    } catch {}
    playSound('pop');
  };

  // 切換單一題目答案顯示
  const toggleRevealSolution = (walkthroughKey) => {
    setRevealedSolutions(prev => {
      const current = prev[walkthroughKey] !== undefined ? prev[walkthroughKey] : allSolutionsExpanded;
      return {
        ...prev,
        [walkthroughKey]: !current
      };
    });
    playSound('click');
  };

  // 切換全景廣角閱讀模式（最大可閱讀面積）
  const toggleWideMode = () => {
    setIsWideMode(prev => {
      const next = !prev;
      try {
        localStorage.setItem('sixth_notes_wide_mode', String(next));
      } catch {}
      playSound('pop');
      return next;
    });
  };

  // 一鍵展開／收合所有段考真題詳解
  const toggleAllSolutions = () => {
    setAllSolutionsExpanded(prev => {
      const next = !prev;
      setRevealedSolutions({});
      playSound('click');
      return next;
    });
  };

  // 切換學科
  const handleSelectSubject = (newSub) => {
    navigate(`/exam-notes/${newSub}/${currentSemester}/${examScope}`);
    playSound('click');
  };

  // 切換學期
  const handleSelectSemester = (newSem) => {
    navigate(`/exam-notes/${currentSubject}/${newSem}/${examScope}`);
    playSound('click');
  };

  // 切換段考階段
  const handleSelectScope = (newScope) => {
    setExamScope(newScope);
    navigate(`/exam-notes/${currentSubject}/${currentSemester}/${newScope}`);
    playSound('click');
  };

  // 觸發列印或另存為 PDF
  const handlePrint = () => {
    playSound('pop');
    window.print();
  };

  // 匯出單檔離線講義 HTML
  const handleExportOfflineHtml = () => {
    playSound('pop');
    const content = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="utf-8">
  <title>${handoutInfo.fullTitle}</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang TC", "Microsoft JhengHei", sans-serif; line-height: 1.55; max-width: 960px; margin: 20px auto; padding: 20px; color: #1e293b; background: #fff; }
    h1 { font-size: 20px; color: #0f172a; border-bottom: 2.5px solid #2563eb; padding-bottom: 8px; margin-bottom: 8px; }
    .meta-bar { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 12px; margin-bottom: 18px; font-size: 12px; }
    .card { border: 1.5px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 20px; page-break-inside: avoid; break-inside: avoid; }
    .badge { display: inline-block; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; background: #e0e7ff; color: #3730a3; margin-right: 6px; }
    .dual-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 14px; margin-bottom: 12px; }
    @media (max-width: 720px) { .dual-grid { grid-template-columns: 1fr; } }
    .diagram-box { background: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 6px; padding: 10px; margin-bottom: 10px; text-align: center; }
    .diagram-title { font-weight: bold; font-size: 11.5px; color: #2563eb; margin-bottom: 6px; display: flex; align-items: center; justify-content: center; gap: 4px; }
    .diagram-svg { max-height: 160px; margin: 0 auto; display: flex; justify-content: center; }
    .diagram-svg svg { max-width: 100%; height: auto; max-height: 155px; }
    .diagram-sub { font-size: 10.5px; color: #64748b; margin-top: 6px; line-height: 1.4; }
    .formula { background: #fffbeb; border-left: 3.5px solid #d97706; padding: 6px 10px; margin: 6px 0; border-radius: 4px; font-size: 11.5px; }
    .pitfall { background: #fef2f2; border-left: 3.5px solid #ef4444; padding: 6px 10px; margin: 6px 0; border-radius: 4px; color: #991b1b; font-size: 11.5px; }
    .walkthrough { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px; margin: 8px 0; border-radius: 6px; page-break-inside: avoid; break-inside: avoid; }
    .explanation { background: #ecfdf5; border: 1px solid #a7f3d0; padding: 6px 10px; margin-top: 6px; border-radius: 4px; color: #065f46; font-size: 11.5px; }
    .checklist-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 6px; background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 6px; }
    @media print {
      @page { size: A4 portrait; margin: 12mm 14mm; }
      body { max-width: 100%; margin: 0; padding: 0; }
      .card { page-break-inside: avoid; break-inside: avoid; }
    }
  </style>
</head>
<body>
  <h1>${handoutInfo.fullTitle}</h1>
  <p style="color: #475569; font-size: 12px; margin-bottom: 10px;">${handoutInfo.description}</p>
  <div class="meta-bar">
    學校：____________________ ｜ 班級：六年______班 ｜ 座號：______ ｜ 姓名：____________ ｜ 複習評分：______ 分
  </div>
  ${filteredNotes.map(n => {
    const diag = getUnitDiagram(n.unitId);
    return `
    <div class="card">
      <div style="margin-bottom: 8px;">
        <span class="badge">${n.examScopeLabel || '段考重點'}</span>
        <span class="badge" style="background: #fef3c7; color: #b45309;">${n.term}</span>
        ${n.examWeight ? `<span class="badge" style="background: #dcfce7; color: #15803d;">${n.examWeight}</span>` : ''}
        <span style="font-size: 11px; color: #64748b;">${n.textbookCoverage}</span>
      </div>
      <h2 style="font-size: 16px; margin: 0 0 10px 0; color: #0f172a; border-left: 3.5px solid #2563eb; padding-left: 6px;">${n.title}</h2>
      
      ${n.priorConcept || n.masterySkill ? `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px;">
          ${n.priorConcept ? `<span style="display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 4px; font-size: 11px; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;">🎯 <strong>溫故知新：</strong>${n.priorConcept}</span>` : ''}
          ${n.masterySkill ? `<span style="display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 4px; font-size: 11px; background: #fdf4ff; color: #86198f; border: 1px solid #f5d0fe;">🏅 <strong>能力指標：</strong>${n.masterySkill}</span>` : ''}
        </div>
      ` : ''}

      ${n.highlights && n.highlights.length > 0 ? `
        <div style="background: linear-gradient(135deg, #fffbeb, #fef3c7); border: 1.5px solid #fde68a; border-radius: 6px; padding: 10px 12px; margin-bottom: 12px;">
          <div style="font-size: 11.5px; font-weight: bold; color: #92400e; margin-bottom: 6px;">🌟 段考三大核心知識亮點・高頻必考精華</div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
            ${n.highlights.map((h, hIdx) => `
              <div style="background: rgba(255,255,255,0.85); border: 1px solid #fcd34d; border-radius: 4px; padding: 6px 8px;">
                <div style="font-size: 10px; font-weight: 800; color: #b45309;">亮點 0${hIdx + 1}</div>
                <div style="font-size: 11.5px; font-weight: bold; color: #1e293b; margin: 2px 0;">${h.point}</div>
                <div style="font-size: 10.5px; color: #475569; line-height: 1.4;">${h.detail}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div class="dual-grid">
        <div class="col-left">
          <div style="font-size: 12px; font-weight: bold; margin-bottom: 6px; color: #1e293b;">📖 課綱核心觀念突破</div>
          <ul style="margin: 0 0 10px 0; padding-left: 18px; font-size: 11.5px; line-height: 1.6;">
            ${n.coreConcepts.map(c => `<li>${c}</li>`).join('')}
          </ul>

          ${n.keyFormulas && n.keyFormulas.length > 0 ? `
            <div style="font-size: 12px; font-weight: bold; margin: 8px 0 4px 0; color: #d97706;">⚡ 名師必背公式・速解口訣</div>
            ${n.keyFormulas.map(f => `
              <div class="formula">
                <strong>🌟 ${f.name}</strong>
                <div style="margin: 3px 0; font-weight: bold;">${f.formula}</div>
                ${f.detail ? `<div style="font-size: 10.5px; color: #78350f;">💡 ${f.detail}</div>` : ''}
              </div>
            `).join('')}
          ` : ''}
        </div>

        <div class="col-right">
          ${diag ? `
            <div class="diagram-box">
              <div class="diagram-title">🎨 ${diag.title}</div>
              <div class="diagram-svg">${diag.svg}</div>
              ${diag.subtitle ? `<div class="diagram-sub">💡 ${diag.subtitle}</div>` : ''}
            </div>
          ` : ''}

          ${n.examPitfalls && n.examPitfalls.length > 0 ? `
            <div style="font-size: 12px; font-weight: bold; margin-bottom: 4px; color: #ef4444;">⚠️ 歷屆高頻常考易錯陷阱</div>
            <div class="pitfall">
              ${n.examPitfalls.map(p => `<div style="margin-bottom: 3px;">• ${p}</div>`).join('')}
            </div>
          ` : ''}
        </div>
      </div>

      ${n.pastExamWalkthroughs && n.pastExamWalkthroughs.length > 0 ? `
        <div style="font-size: 12px; font-weight: bold; margin: 10px 0 6px 0; color: #059669;">📝 各校歷年段考／畢業考經典真題實戰</div>
        ${n.pastExamWalkthroughs.map((w, idx) => `
          <div class="walkthrough">
            <div style="font-size: 10.5px; color: #64748b; font-weight: bold;">🏛️ ${w.examSource}</div>
            <div style="font-weight: bold; margin: 4px 0; font-size: 12px;">【範例 ${idx + 1}】${w.question}</div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; margin: 5px 0; font-size: 11px;">
              ${w.options.map((opt, oIdx) => `<div style="${oIdx === w.answerIndex ? 'font-weight: bold; color: #059669;' : ''}">${opt}</div>`).join('')}
            </div>
            <div class="explanation">
              <strong>✅ 正解：選項 ${['A', 'B', 'C', 'D'][w.answerIndex]}</strong><br>
              ${w.explanation.replace(/\n/g, '<br>')}
            </div>
          </div>
        `).join('')}
      ` : ''}

      ${n.selfChecklist && n.selfChecklist.length > 0 ? `
        <div style="font-size: 12px; font-weight: bold; margin: 10px 0 6px 0; color: #166534;">📋 考前 10 分鐘必會檢核清單</div>
        <div class="checklist-grid">
          ${n.selfChecklist.map(chk => `<div style="font-size: 11px;">[ ] ${chk}</div>`).join('')}
        </div>
      ` : ''}
    </div>
    `;
  }).join('')}
</body>
</html>`;

    const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${handoutInfo.pdfFileName.replace('.pdf', '')}_離線講義.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 依據搜尋關鍵字過濾單元
  const filteredNotes = useMemo(() => {
    if (!searchQuery.trim()) return notesList;
    const q = searchQuery.toLowerCase();
    return notesList.filter(note => {
      const matchTitle = note.title.toLowerCase().includes(q);
      const matchConcepts = note.coreConcepts.some(c => c.toLowerCase().includes(q));
      const matchFormulas = note.keyFormulas?.some(f => f.name.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q));
      const matchPitfalls = note.examPitfalls?.some(p => p.toLowerCase().includes(q));
      return matchTitle || matchConcepts || matchFormulas || matchPitfalls;
    });
  }, [notesList, searchQuery]);

  // 已勾選自測項數目
  const totalCheckpointsInScope = useMemo(() => {
    return filteredNotes.reduce((acc, note) => acc + (note.selfChecklist?.length || 0), 0);
  }, [filteredNotes]);

  const checkedCountInScope = useMemo(() => {
    let count = 0;
    filteredNotes.forEach(note => {
      note.selfChecklist?.forEach((_, idx) => {
        if (checkedItems[`${note.unitId}_${idx}`]) count++;
      });
    });
    return count;
  }, [filteredNotes, checkedItems]);

  const progressPercent = totalCheckpointsInScope > 0 
    ? Math.round((checkedCountInScope / totalCheckpointsInScope) * 100) 
    : 0;

  return (
    <div className={`exam-notes-page animate-fade-in ${isWideMode ? 'wide-reading-mode' : ''}`}>
      {/* 🖨️ 僅在 A4 列印或另存 PDF 時呈現之專業講義抬頭 */}
      <div className="print-only-header">
        <div className="print-header-title">
          🎓 最強小六 108 課綱 【{handoutInfo.scopeName}】考前重點筆記總複習講義
        </div>
        <div className="print-header-subtitle">
          科目：{currentSubjectMeta.name} ｜ 學期：{handoutInfo.semesterLabel} ｜ 範圍單元：共 {notesList.length} 個單元 ｜ 適用三大版本（康軒・南一・翰林）
        </div>
        <div className="print-header-fields">
          <span>學校：____________________</span>
          <span>班級：六年______班</span>
          <span>座號：______</span>
          <span>姓名：____________</span>
          <span>複習得分：______ 分</span>
        </div>
      </div>

      {/* 網頁端英雄說明橫幅 */}
      <div className="notes-hero-banner">
        <div className="flex items-center gap-2 mb-2">
          <Link to="/" className="text-xs text-secondary hover:text-primary flex items-center gap-1">
            <ArrowLeft size={13} /> 返回首頁
          </Link>
          <span className="text-xs text-tertiary">/</span>
          <span className="text-xs text-secondary font-bold">教科書考前筆記大複習</span>
          <span className="text-xs text-tertiary">/</span>
          <span className="text-xs text-primary font-bold">{handoutInfo.scopeName}</span>
        </div>

        <div className="notes-hero-badge">
          <Sparkles size={14} />
          <span>{handoutInfo.badgeText}・全 64 單元深度教研整合</span>
        </div>

        <h1 className="notes-hero-title">
          {currentSubjectMeta.emoji} {currentSubjectMeta.name}・{handoutInfo.semesterLabel}【{handoutInfo.scopeName}】
        </h1>

        <p className="notes-hero-desc">
          {handoutInfo.description} 由最強小六研發團隊與教科書編審名師聯合編撰，深度拆解核心觀念突破、名師必背公式、歷屆名校高頻陷阱與段考真題步驟級詳解。學會後可直擊歷年各校段考題目！
        </p>
      </div>

      {/* 控制工具列：學期切換、段考範圍選擇、學科切換、搜尋與 PDF 下載 */}
      <div className="notes-controls-bar">
        {/* 1. 學期切換與 PDF / 列印操作按鈕群 */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          {/* 學期 Tabs */}
          <div className="semester-tabs-group">
            <button
              className={`semester-tab-btn ${currentSemester === '6A' ? 'active' : ''}`}
              onClick={() => handleSelectSemester('6A')}
            >
              <BookOpen size={16} />
              <span>📘 六年級上學期 (6上)</span>
            </button>
            <button
              className={`semester-tab-btn ${currentSemester === '6B' ? 'active' : ''}`}
              onClick={() => handleSelectSemester('6B')}
            >
              <Zap size={16} />
              <span>📙 六年級下學期 (6下)</span>
            </button>
          </div>

          {/* 右側操作按鈕群：直接下載實體 PDF、列印轉存、離線 HTML */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* 📥 直接下載真實 PDF 檔案按鈕 */}
            <a
              href={handoutInfo.pdfUrl}
              download={handoutInfo.pdfFileName}
              className="btn-download-pdf"
              title={`下載 ${handoutInfo.fullTitle} (PDF 檔案)`}
              onClick={() => playSound('chest_open')}
            >
              <Download size={16} />
              <span>📥 下載專屬 PDF 講義 (PDF 檔案)</span>
            </a>

            {/* 🖨️ 瀏覽器 A4 向量列印 / 另存為 PDF */}
            <button
              className="btn-print-action"
              onClick={handlePrint}
              title="使用瀏覽器原生 A4 排版列印或另存為 PDF"
            >
              <Printer size={16} />
              <span>🖨️ 瀏覽器列印 / 另存 PDF</span>
            </button>

            {/* 📁 單檔離線 HTML 匯出 */}
            <button
              className="btn-offline-html"
              onClick={handleExportOfflineHtml}
              title="匯出完全獨立之離線單檔講義 (.html)"
            >
              <FolderDown size={14} />
              <span>📁 離線單檔</span>
            </button>
          </div>
        </div>

        {/* 2. 🎯 段考範圍切換按鈕組 (期中考 / 期末考 / 畢業考 / 全學期) */}
        <div className="exam-scopes-group">
          <div className="exam-scope-label">
            <Calendar size={15} style={{ color: 'var(--accent-primary)' }} />
            <span>選擇段考複習階段：</span>
          </div>
          <button
            className={`exam-scope-btn ${examScope === 'all' ? 'active' : ''}`}
            onClick={() => handleSelectScope('all')}
          >
            🌟 全學期大滿貫 (全部單元)
          </button>
          <button
            className={`exam-scope-btn ${examScope === 'midterm' ? 'active' : ''}`}
            onClick={() => handleSelectScope('midterm')}
          >
            🎯 期中考重點講義 (第1次段考)
          </button>
          <button
            className={`exam-scope-btn ${examScope === 'final' ? 'active' : ''}`}
            onClick={() => handleSelectScope('final')}
          >
            {currentSemester === '6A' ? '🏆 期末考衝刺講義 (第2次段考)' : '🎓 畢業考衝刺講義 (畢業考／先修)'}
          </button>
        </div>

        {/* 3. 8 大學科選擇 Pills */}
        <div className="subjects-pills-row">
          {coursesData.subjects.map(sub => (
            <button
              key={sub.id}
              className={`subject-pill-btn ${currentSubject === sub.id ? 'active' : ''}`}
              onClick={() => handleSelectSubject(sub.id)}
              style={currentSubject === sub.id ? { 
                borderColor: sub.color, 
                backgroundColor: `${sub.color}15`, 
                color: sub.color 
              } : {}}
            >
              <span>{sub.emoji}</span>
              <span>{sub.shortName}</span>
            </button>
          ))}
        </div>

        {/* 4. 搜尋、廣角閱讀模式、一鍵解析與自測進度 */}
        <div className="notes-actions-row">
          <div className="notes-search-wrapper">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary" />
            <input
              type="text"
              className="notes-search-input"
              placeholder={`在 ${currentSubjectMeta.shortName} ${handoutInfo.scopeName} 中搜尋觀念、公式或陷阱...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* 閱讀面積與速讀工具按鈕群 */}
          <div className="reading-tools-group">
            <button
              className={`btn-reading-tool ${isWideMode ? 'active' : ''}`}
              onClick={toggleWideMode}
              title={isWideMode ? '切換為標準雙欄導航模式' : '切換為廣角極致閱讀模式（最大可閱讀面積）'}
            >
              {isWideMode ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              <span>{isWideMode ? '標準欄寬' : '廣角極限閱讀'}</span>
            </button>

            <button
              className={`btn-reading-tool ${allSolutionsExpanded ? 'active' : ''}`}
              onClick={toggleAllSolutions}
              title={allSolutionsExpanded ? '收合所有題目之名師詳解（切換為自我檢核模式）' : '一鍵展開所有歷年段考真題步驟解析（快速考前衝刺）'}
            >
              {allSolutionsExpanded ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>{allSolutionsExpanded ? '收合全部解析' : '一鍵全開解析'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-xs text-secondary flex-wrap">
            <div className="flex items-center gap-1.5 font-bold">
              <CheckCircle2 size={15} style={{ color: 'var(--accent-success)' }} />
              <span>考前自測進度：{checkedCountInScope} / {totalCheckpointsInScope} 考點 ({progressPercent}%)</span>
            </div>
            <div style={{ width: '100px', height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--accent-success)', transition: 'width 0.3s' }}></div>
            </div>
          </div>
        </div>

        {/* 5. 🎯 考前衝刺焦點篩選器 (快速鎖定學習目標) */}
        <div className="focus-modes-row">
          <div className="focus-modes-label">
            <Compass size={15} style={{ color: 'var(--accent-primary)' }} />
            <span>焦點衝刺導覽：</span>
          </div>
          <div className="focus-pills-list">
            {[
              { id: 'all', label: '🌟 完整全覽精讀', tag: null },
              { id: 'highlights', label: '💡 三大段考知識亮點', tag: '精華' },
              { id: 'formulas', label: '⚡ 名師公式口訣', tag: '速解' },
              { id: 'pitfalls', label: '⚠️ 歷屆避雷陷阱', tag: '防錯' },
              { id: 'walkthroughs', label: '📝 各校真題步驟', tag: '實戰' },
              { id: 'checklist', label: '📋 考前自測檢核', tag: '自評' }
            ].map(f => (
              <button
                key={f.id}
                className={`focus-pill-btn ${focusSection === f.id ? 'active' : ''}`}
                onClick={() => {
                  setFocusSection(f.id);
                  playSound('click');
                }}
              >
                <span>{f.label}</span>
                {f.tag && <span className="focus-pill-tag">{f.tag}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 當前段考範圍高亮總覽卡 */}
      <div className="handout-scope-banner">
        <div className="handout-scope-info">
          <div className="handout-scope-title">
            <span>📋 當前複習範圍：{handoutInfo.fullTitle}</span>
            <span className="badge badge-accent text-xs font-bold">{handoutInfo.badgeText}</span>
          </div>
          <p className="handout-scope-desc">
            涵蓋 <strong>{notesList.length}</strong> 個核心單元 ｜ 包含 <strong>{notesList.reduce((acc, n) => acc + (n.pastExamWalkthroughs?.length || 0), 0)}</strong> 道各校歷年段考精選真題 ｜ <strong>{notesList.reduce((acc, n) => acc + (n.keyFormulas?.length || 0), 0)}</strong> 條名師秒解口訣
          </p>
        </div>
      </div>

      {/* PDF 轉存下載操作提示卡 */}
      <div className="pdf-guide-tipbox">
        <Download size={20} style={{ color: 'var(--accent-success)', flexShrink: 0 }} />
        <div>
          <strong>💡 如何獲取 PDF 講義檔案？</strong>
          點擊上方「<strong>📥 下載專屬 PDF 講義 (PDF 檔案)</strong>」即可直接將預先排版好的實體 PDF 檔案下載至您的裝置；亦可點擊「<strong>🖨️ 瀏覽器列印 / 另存 PDF</strong>」使用瀏覽器原生 A4 向量排版輸出！
        </div>
      </div>

      {/* 主體雙欄排版：左側浮動目錄 (TOC) + 右側筆記卡片清單 */}
      <div className="notes-main-layout">
        {/* 左側浮動目錄 (TOC) */}
        <aside className="notes-toc-sidebar">
          <div className="toc-header">
            <FileText size={16} />
            <span>章節考點快速導航</span>
          </div>
          <ul className="toc-list">
            {notesList.map(note => (
              <li key={note.unitId}>
                <a href={`#note-${note.unitId}`} className="toc-item-link">
                  {note.title.split('：')[1] || note.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-3 border-t border-light text-xs text-tertiary">
            範圍共 {notesList.length} 個單元重點
          </div>
        </aside>

        {/* 右側筆記內容卡片清單 */}
        <main className="notes-content-container">
          {filteredNotes.length === 0 ? (
            <div className="card text-center py-12">
              <p className="text-secondary mb-2">沒有找到符合「{searchQuery}」的筆記內容。</p>
              <button className="btn-outline text-xs mt-2" onClick={() => setSearchQuery('')}>
                清除搜尋關鍵字
              </button>
            </div>
          ) : (
            filteredNotes.map(note => {
              const unitDiagram = getUnitDiagram(note.unitId);
              const unitMastery = getUnitMasteryInfo(note, checkedItems);

              return (
                <section key={note.unitId} id={`note-${note.unitId}`} className="unit-note-card">
                  {/* 單元標頭 */}
                  <div className="unit-note-header">
                    <div className="unit-header-top">
                      <div className="unit-badges-row">
                        <span 
                          className="badge font-bold" 
                          style={{ 
                            backgroundColor: `${currentSubjectMeta.color}15`, 
                            color: currentSubjectMeta.color,
                            borderColor: `${currentSubjectMeta.color}30` 
                          }}
                        >
                          {currentSubjectMeta.name}
                        </span>
                        <span className="badge badge-accent font-bold">
                          {note.examScopeLabel || note.term}
                        </span>
                        {note.examWeight && (
                          <span className="badge badge-success font-bold text-xs">
                            {note.examWeight}
                          </span>
                        )}
                        <span className="badge badge-secondary text-xs">
                          {note.textbookCoverage}
                        </span>
                      </div>

                      {/* 單元掌握度評級徽章 */}
                      <div 
                        className={`unit-mastery-stamp level-${unitMastery.level}`} 
                        title={`單元自測進度 ${unitMastery.checked}/${unitMastery.total} (${unitMastery.percent}%)`}
                      >
                        <span className="stamp-icon">{unitMastery.icon}</span>
                        <span className="stamp-label">{unitMastery.label}</span>
                        <span className="stamp-progress">{unitMastery.percent}%</span>
                      </div>
                    </div>

                    <h2 className="unit-note-title">
                      {note.title}
                    </h2>

                    {/* 單元教學導向標籤：溫故知新與核心能力指標 */}
                    {(note.priorConcept || note.masterySkill) && (
                      <div className="unit-pedagogy-row">
                        {note.priorConcept && (
                          <span className="pedagogy-pill prior" title="先備觀念橋樑（溫故知新）">
                            <Target size={13} />
                            <span><strong>溫故知新：</strong>{note.priorConcept}</span>
                          </span>
                        )}
                        {note.masterySkill && (
                          <span className="pedagogy-pill skill" title="本單元核心能力指標">
                            <Award size={13} />
                            <span><strong>能力指標：</strong>{note.masterySkill}</span>
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* 💡 三大段考核心知識亮點 (High-Yield Highlights) */}
                  {(focusSection === 'all' || focusSection === 'highlights') && note.highlights && note.highlights.length > 0 && (
                    <div className="unit-highlights-banner">
                      <div className="highlights-banner-header">
                        <div className="highlights-badge">
                          <Sparkles size={13} />
                          <span>三大段考知識亮點</span>
                        </div>
                        <span className="highlights-banner-subtitle">名師嚴選・高頻必考精華</span>
                      </div>
                      <div className="highlights-grid">
                        {note.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="highlight-grid-card">
                            <div className="highlight-card-header">
                              <span className="highlight-num">亮點 0{hIdx + 1}</span>
                              <h4 className="highlight-card-title">{h.point}</h4>
                            </div>
                            <p className="highlight-card-desc">{h.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 核心雙欄緊湊排版 (左欄觀念與大招，右欄考點向量圖解與防雷陷阱) */}
                  {(focusSection === 'all' || (focusSection === 'highlights' && unitDiagram) || (focusSection === 'formulas' && note.keyFormulas?.length > 0) || (focusSection === 'pitfalls' && note.examPitfalls?.length > 0)) && (
                    <div className={`unit-dual-grid ${focusSection !== 'all' ? 'focus-single-col' : ''}`}>
                      {/* 左欄：課綱觀念突破 ＋ 名師必背公式 */}
                      {(focusSection === 'all' || focusSection === 'formulas') && (
                        <div className="unit-grid-left">
                          {/* 1. 📖 課綱核心觀念突破 */}
                          {focusSection === 'all' && (
                            <div className="note-section-block">
                              <h3 className="note-section-title">
                                <BookOpen size={17} style={{ color: 'var(--accent-primary)' }} />
                                <span>📖 課綱核心觀念突破</span>
                              </h3>
                              <div className="core-concepts-list">
                                {note.coreConcepts.map((concept, idx) => (
                                  <div 
                                    key={idx} 
                                    className="core-concept-item"
                                    dangerouslySetInnerHTML={{ __html: renderMathText(concept) }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}

                          {/* 2. ⚡ 名師公式・解題大招・速記口訣 */}
                          {note.keyFormulas && note.keyFormulas.length > 0 && (
                            <div className="note-section-block">
                              <h3 className="note-section-title">
                                <Zap size={17} style={{ color: '#d97706' }} />
                                <span>⚡ 名師必背公式・速解大招與口訣</span>
                              </h3>
                              <div className="formulas-grid">
                                {note.keyFormulas.map((f, idx) => (
                                  <div key={idx} className="formula-card">
                                    <div className="formula-name">
                                      <Sparkles size={13} />
                                      <span>{f.name}</span>
                                    </div>
                                    <div 
                                      className="formula-body"
                                      dangerouslySetInnerHTML={{ __html: renderDisplayFormula(f.formula) }}
                                    />
                                    {f.detail && (
                                      <div className="formula-detail">
                                        💡 <strong>解題應用：</strong>{f.detail}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* 右欄：考點向量視覺圖解 ＋ 歷屆高頻避雷指南 */}
                      {(focusSection === 'all' || focusSection === 'highlights' || focusSection === 'pitfalls') && (
                        <div className="unit-grid-right">
                          {/* 考點向量視覺圖解展示卡 */}
                          {(focusSection === 'all' || focusSection === 'highlights') && unitDiagram && (
                            <div className="note-section-block unit-diagram-block">
                              <div className="unit-diagram-card">
                                <div className="unit-diagram-header">
                                  <div className="unit-diagram-badge">
                                    <Sparkles size={12} />
                                    <span>考點視覺圖解・直擊核心</span>
                                  </div>
                                  <h4 className="unit-diagram-title">{unitDiagram.title}</h4>
                                </div>
                                <div 
                                  className="unit-diagram-svg-container"
                                  dangerouslySetInnerHTML={{ __html: unitDiagram.svg }}
                                />
                                {unitDiagram.subtitle && (
                                  <div className="unit-diagram-subtitle">
                                    💡 {unitDiagram.subtitle}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* 3. ⚠️ 歷屆名校高頻常考易錯陷阱（防雷指引） */}
                          {(focusSection === 'all' || focusSection === 'pitfalls') && note.examPitfalls && note.examPitfalls.length > 0 && (
                            <div className="note-section-block">
                              <h3 className="note-section-title" style={{ color: 'var(--accent-error)' }}>
                                <AlertTriangle size={17} />
                                <span>⚠️ 歷屆名校高頻常考易錯陷阱（避雷指南）</span>
                              </h3>
                              <div className="pitfalls-box">
                                {note.examPitfalls.map((pitfall, idx) => (
                                  <div 
                                    key={idx} 
                                    className="pitfall-item"
                                    dangerouslySetInnerHTML={{ __html: renderMathText(pitfall) }}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* 4. 📝 各校歷年段考/畢業考經典真題實戰 */}
                  {(focusSection === 'all' || focusSection === 'walkthroughs') && note.pastExamWalkthroughs && note.pastExamWalkthroughs.length > 0 && (
                    <div className="note-section-block unit-full-section">
                      <h3 className="note-section-title">
                        <HelpCircle size={18} style={{ color: 'var(--accent-success)' }} />
                        <span>📝 各校歷年段考／畢業考經典真題實戰</span>
                      </h3>

                      <div className="walkthroughs-list">
                        {note.pastExamWalkthroughs.map((walk, idx) => {
                          const walkthroughKey = `${note.unitId}_walk_${idx}`;
                          const isRevealed = revealedSolutions[walkthroughKey] !== undefined 
                            ? revealedSolutions[walkthroughKey] 
                            : allSolutionsExpanded;

                          return (
                            <div key={idx} className="walkthrough-box">
                              <div className="walkthrough-source">
                                🏛️ {walk.examSource}
                              </div>

                              <div 
                                className="walkthrough-question"
                                dangerouslySetInnerHTML={{ __html: renderMathText(`【範例 ${idx + 1}】${walk.question}`) }}
                              />

                              <div className="walkthrough-options">
                                {walk.options.map((opt, optIdx) => (
                                  <div 
                                    key={optIdx} 
                                    className="walkthrough-option-item"
                                    style={isRevealed && optIdx === walk.answerIndex ? {
                                      borderColor: 'var(--accent-success)',
                                      backgroundColor: 'rgba(16, 185, 129, 0.08)',
                                      fontWeight: 700
                                    } : {}}
                                  >
                                    {opt}
                                  </div>
                                ))}
                              </div>

                              {/* 網頁上提供展開查看按鈕，列印時預設全部展開 */}
                              <div className="flex justify-between items-center mb-3 no-print">
                                <button
                                  className="btn-outline text-xs flex items-center gap-1.5 py-1 px-3"
                                  onClick={() => toggleRevealSolution(walkthroughKey)}
                                >
                                  <Eye size={14} />
                                  <span>{isRevealed ? '隱藏名師解析與正解' : '查看名師解析與正解步驟'}</span>
                                </button>
                                <span className="text-xs text-tertiary">
                                  （列印講義時將自動包含完整詳解）
                                </span>
                              </div>

                              <div 
                                className={`walkthrough-explanation ${!isRevealed ? 'print-only' : ''}`}
                              >
                                <div className="font-bold mb-1" style={{ color: 'var(--accent-success)' }}>
                                  正確解答：選項 {['A', 'B', 'C', 'D'][walk.answerIndex]}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: renderMathText(walk.explanation) }} />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 5. 📋 考前自測檢核清單 (多欄膠囊排列，緊湊省空間) */}
                  {(focusSection === 'all' || focusSection === 'checklist') && note.selfChecklist && note.selfChecklist.length > 0 && (
                    <div className="note-section-block unit-full-section">
                      <h3 className="note-section-title">
                        <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)' }} />
                        <span>📋 考前 10 分鐘必會檢核清單 (Self-Checklist)</span>
                      </h3>
                      <div className="checklist-container compact-grid">
                        {note.selfChecklist.map((item, idx) => {
                          const isChecked = !!checkedItems[`${note.unitId}_${idx}`];
                          return (
                            <label 
                              key={idx} 
                              className="checklist-item-row"
                              onClick={() => toggleCheckItem(note.unitId, idx)}
                            >
                              <input
                                type="checkbox"
                                className="checklist-checkbox"
                                checked={isChecked}
                                onChange={() => {}}
                              />
                              <span className={`checklist-text ${isChecked ? 'checked' : ''}`}>
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* 焦點模式空狀態提示 (若該單元無此類別內容) */}
                  {focusSection !== 'all' && 
                   ((focusSection === 'highlights' && (!note.highlights || note.highlights.length === 0) && !unitDiagram) ||
                    (focusSection === 'formulas' && (!note.keyFormulas || note.keyFormulas.length === 0)) ||
                    (focusSection === 'pitfalls' && (!note.examPitfalls || note.examPitfalls.length === 0)) ||
                    (focusSection === 'walkthroughs' && (!note.pastExamWalkthroughs || note.pastExamWalkthroughs.length === 0)) ||
                    (focusSection === 'checklist' && (!note.selfChecklist || note.selfChecklist.length === 0))) && (
                    <div className="unit-focus-empty-hint">
                      <span>💡 本單元在此焦點類別無額外設定，建議切換至「完整全覽精讀」進行全面複習。</span>
                    </div>
                  )}
                </section>
              );
            })
          )}
        </main>
      </div>
    </div>
  );
};

export default ExamReviewNotesPage;
