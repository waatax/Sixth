import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Save, 
  Trash2, 
  Copy, 
  Check, 
  X, 
  Sparkles, 
  Download, 
  Highlighter, 
  PenTool, 
  Clock, 
  PlusCircle, 
  Tag 
} from 'lucide-react';
import { playSound } from '../../utils/soundEffects';

const LessonNotebookDrawer = ({ isOpen, onClose, unitId, unitTitle, subjectName }) => {
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'highlights'
  const [noteContent, setNoteContent] = useState('');
  const [highlights, setHighlights] = useState([]);
  const [copied, setCopied] = useState(false);
  const [savedToast, setSavedToast] = useState(false);
  const [lastSavedTime, setLastSavedTime] = useState('');

  const storageKey = `sixth_notes_${unitId}`;
  const highlightsKey = `sixth_highlights_${unitId}`;

  // Load saved notes and highlights
  useEffect(() => {
    if (!unitId) return;
    try {
      const saved = localStorage.getItem(storageKey);
      setNoteContent(saved || '');
      const savedHl = localStorage.getItem(highlightsKey);
      setHighlights(savedHl ? JSON.parse(savedHl) : []);
    } catch (e) {}
  }, [unitId, storageKey, highlightsKey, isOpen]);

  // Auto-save debounced
  useEffect(() => {
    if (!unitId || noteContent === '') return;
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(storageKey, noteContent);
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        setLastSavedTime(timeStr);
      } catch (e) {}
    }, 1200);

    return () => clearTimeout(timer);
  }, [noteContent, unitId, storageKey]);

  const handleSave = () => {
    try {
      localStorage.setItem(storageKey, noteContent);
      setSavedToast(true);
      const now = new Date();
      setLastSavedTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
      playSound('coin');
      setTimeout(() => setSavedToast(false), 2000);
    } catch (e) {}
  };

  const handleClear = () => {
    if (window.confirm('確定要清空本單元的隨堂筆記嗎？此操作無法還原。')) {
      setNoteContent('');
      try {
        localStorage.removeItem(storageKey);
      } catch (e) {}
      playSound('click');
    }
  };

  const handleCopy = () => {
    if (!noteContent) return;
    navigator.clipboard.writeText(noteContent);
    setCopied(true);
    playSound('coin');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportText = () => {
    if (!noteContent && highlights.length === 0) return;
    let fullText = `【${subjectName} - ${unitTitle} 學習護照筆記】\n`;
    fullText += `建立時間：${new Date().toLocaleDateString('zh-TW')}\n\n`;
    
    if (highlights.length > 0) {
      fullText += `=== 本單元重要劃記精華 ===\n`;
      highlights.forEach((h, i) => {
        fullText += `${i + 1}. [${h.type || '重點'}] ${h.text}\n`;
      });
      fullText += `\n`;
    }

    if (noteContent) {
      fullText += `=== 個人隨堂手寫筆記 ===\n${noteContent}\n`;
    }

    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${unitId}_學習重點筆記.txt`;
    a.click();
    URL.revokeObjectURL(url);
    playSound('coin');
  };

  // Quick insert templates into note
  const insertTemplate = (prefix) => {
    setNoteContent(prev => {
      const newLine = prev.length > 0 && !prev.endsWith('\n') ? '\n' : '';
      return `${prev}${newLine}${prefix} `;
    });
    playSound('click');
  };

  // Merge highlights into personal note
  const importHighlightsToNote = () => {
    if (highlights.length === 0) return;
    const highlightTexts = highlights.map(h => `• ${h.text}`).join('\n');
    setNoteContent(prev => {
      const spacing = prev ? '\n\n【本課精選劃記】\n' : '【本課精選劃記】\n';
      return `${prev}${spacing}${highlightTexts}\n`;
    });
    setActiveTab('notes');
    playSound('correct');
  };

  // Clear single or all highlights
  const deleteHighlight = (idx) => {
    const updated = highlights.filter((_, i) => i !== idx);
    setHighlights(updated);
    try {
      localStorage.setItem(highlightsKey, JSON.stringify(updated));
    } catch (e) {}
    playSound('click');
  };

  if (!isOpen) return null;

  return (
    <div
      className="lesson-notebook-backdrop animate-fade-in"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        backdropFilter: 'blur(4px)',
        zIndex: 99999,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div
        className="lesson-notebook-panel animate-slide-left"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: 'var(--bg-secondary)',
          borderLeft: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 24px'
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-3 border-b border-light">
          <div className="flex items-center gap-2.5">
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <BookOpen size={18} />
            </div>
            <div>
              <h3 className="font-extrabold text-sm" style={{ color: 'var(--text-primary)', margin: 0 }}>
                隨堂筆記與劃記庫
              </h3>
              <p className="text-xs text-secondary truncate max-w-[220px]" style={{ margin: 0 }}>
                {subjectName} · {unitTitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-tertiary transition-colors"
            title="關閉筆記本"
          >
            <X size={20} />
          </button>
        </div>

        {/* Dual Tabs: Notes vs Highlights */}
        <div className="flex items-center gap-2 my-3 p-1 bg-slate-200/60 dark:bg-slate-800/60 rounded-xl">
          <button
            onClick={() => { setActiveTab('notes'); playSound('click'); }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'notes' 
                ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            <PenTool size={13} />
            <span>✍️ 隨堂筆記</span>
            <span className="text-[10px] opacity-70">({noteContent.length} 字)</span>
          </button>
          <button
            onClick={() => { setActiveTab('highlights'); playSound('click'); }}
            className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'highlights' 
                ? 'bg-white dark:bg-slate-700 text-amber-600 dark:text-amber-400 shadow-sm' 
                : 'text-secondary hover:text-primary'
            }`}
          >
            <Highlighter size={13} />
            <span>📌 劃記精華</span>
            <span className="badge badge-warning text-[10px] py-0 px-1.5 font-extrabold">
              {highlights.length}
            </span>
          </button>
        </div>

        {/* Tab 1: Notes Content */}
        {activeTab === 'notes' && (
          <div className="flex-1 flex flex-col min-h-0">
            {/* Template Quick Insert Pills */}
            <div className="flex items-center gap-1.5 flex-wrap mb-2">
              <span className="text-[11px] text-tertiary font-bold">快速標籤：</span>
              <button
                onClick={() => insertTemplate('⭐【核心考點】')}
                className="btn-outline text-[11px] py-0.5 px-2 rounded-md hover:border-amber-400"
              >
                ⭐ 核心考點
              </button>
              <button
                onClick={() => insertTemplate('⚠️【易錯陷阱】')}
                className="btn-outline text-[11px] py-0.5 px-2 rounded-md hover:border-rose-400"
              >
                ⚠️ 易錯陷阱
              </button>
              <button
                onClick={() => insertTemplate('📐【必背公式】')}
                className="btn-outline text-[11px] py-0.5 px-2 rounded-md hover:border-blue-400"
              >
                📐 必背公式
              </button>
              <button
                onClick={() => insertTemplate(`📅【${new Date().toLocaleDateString('zh-TW')} 筆記】`)}
                className="btn-outline text-[11px] py-0.5 px-2 rounded-md"
              >
                📅 今日日期
              </button>
            </div>

            {/* Text Area */}
            <div className="flex-1 flex flex-col mb-3 min-h-0">
              <textarea
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="在此輸入本單元的個人重點筆記、關鍵公式、或你覺得容易搞混的迷思觀念... (會自動即時儲存)"
                className="w-full flex-1 p-3.5 rounded-xl text-sm leading-relaxed"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  border: '1.5px solid var(--border-strong)',
                  color: 'var(--text-primary)',
                  resize: 'none',
                  outline: 'none',
                  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
                }}
              />
            </div>

            {/* Auto-save status */}
            <div className="flex items-center justify-between text-[11px] text-tertiary mb-3">
              <div className="flex items-center gap-1">
                <Clock size={11} />
                <span>{lastSavedTime ? `已於 ${lastSavedTime} 自動儲存` : '輸入時自動儲存'}</span>
              </div>
              <span>共 {noteContent.length} 字</span>
            </div>
          </div>
        )}

        {/* Tab 2: Highlights Vault */}
        {activeTab === 'highlights' && (
          <div className="flex-1 flex flex-col min-h-0 overflow-y-auto mb-3 pr-1">
            {highlights.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-6 text-tertiary">
                <Highlighter size={36} className="mb-2 opacity-40 text-amber-500" />
                <p className="text-xs font-bold text-secondary mb-1">尚未劃記任何文字</p>
                <p className="text-[11px] leading-relaxed max-w-[240px]">
                  在閱讀課文時，使用滑鼠或手指劃選任意文字，即可選擇黃、綠、粉螢光筆將金句重點收藏至此！
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-secondary mb-1">
                  <span>本單元劃記共 {highlights.length} 條</span>
                  <button
                    onClick={importHighlightsToNote}
                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <PlusCircle size={12} /> 一鍵匯入至手寫筆記
                  </button>
                </div>

                {highlights.map((hl, idx) => {
                  const colorMap = {
                    yellow: { bg: 'rgba(245, 158, 11, 0.12)', border: '#f59e0b', label: '🟡 考點黃' },
                    green: { bg: 'rgba(16, 185, 129, 0.12)', border: '#10b981', label: '🟢 理解綠' },
                    pink: { bg: 'rgba(244, 63, 94, 0.12)', border: '#f43f5e', label: '💖 陷阱粉' }
                  };
                  const style = colorMap[hl.color] || colorMap.yellow;

                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl text-xs leading-relaxed relative group"
                      style={{
                        backgroundColor: style.bg,
                        borderLeft: `4px solid ${style.border}`,
                        border: `1px solid ${style.border}30`,
                        borderLeftWidth: '4px'
                      }}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-bold opacity-80" style={{ color: style.border }}>
                          {style.label}
                        </span>
                        <button
                          onClick={() => deleteHighlight(idx)}
                          className="text-secondary hover:text-rose-500 p-0.5 rounded opacity-60 hover:opacity-100"
                          title="刪除此劃記"
                        >
                          <X size={12} />
                        </button>
                      </div>
                      <div className="text-slate-800 dark:text-slate-200 font-medium">
                        "{hl.text}"
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Actions Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-light flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              disabled={!noteContent && highlights.length === 0}
              className="btn-outline text-xs p-2 rounded-lg"
              title="複製筆記全文"
            >
              {copied ? <Check size={15} style={{ color: 'var(--accent-success)' }} /> : <Copy size={15} />}
            </button>
            <button
              onClick={handleExportText}
              disabled={!noteContent && highlights.length === 0}
              className="btn-outline text-xs p-2 rounded-lg"
              title="匯出下載 .txt 筆記檔案"
            >
              <Download size={15} />
            </button>
            <button
              onClick={handleClear}
              disabled={!noteContent}
              className="btn-outline text-xs p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
              title="清空手寫筆記"
            >
              <Trash2 size={15} />
            </button>
          </div>

          <button
            onClick={handleSave}
            className="btn-primary flex items-center gap-1.5 text-xs py-2 px-4 font-bold"
          >
            {savedToast ? <Check size={14} /> : <Save size={14} />}
            <span>{savedToast ? '已手動儲存！' : '手動儲存'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonNotebookDrawer;
