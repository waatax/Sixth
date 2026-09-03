import { useState, useEffect } from 'react';
import { BookOpen, Save, Trash2, Copy, Check, X, Sparkles, Download } from 'lucide-react';

const LessonNotebookDrawer = ({ isOpen, onClose, unitId, unitTitle, subjectName }) => {
  const [noteContent, setNoteContent] = useState('');
  const [copied, setCopied] = useState(false);
  const [savedToast, setSavedToast] = useState(false);

  const storageKey = `sixth_notes_${unitId}`;

  // Load saved note
  useEffect(() => {
    if (!unitId) return;
    try {
      const saved = localStorage.getItem(storageKey);
      setNoteContent(saved || '');
    } catch (e) {}
  }, [unitId, storageKey]);

  const handleSave = () => {
    try {
      localStorage.setItem(storageKey, noteContent);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    } catch (e) {}
  };

  const handleClear = () => {
    if (window.confirm('確定要清空本單元的隨堂筆記嗎？此操作無法還原。')) {
      setNoteContent('');
      try {
        localStorage.removeItem(storageKey);
      } catch (e) {}
    }
  };

  const handleCopy = () => {
    if (!noteContent) return;
    navigator.clipboard.writeText(noteContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExportText = () => {
    if (!noteContent) return;
    const blob = new Blob([`【${subjectName} - ${unitTitle} 學習筆記】\n\n${noteContent}`], {
      type: 'text/plain;charset=utf-8'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${unitId}_學習筆記.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isOpen) return null;

  return (
    <div
      className="lesson-notebook-backdrop animate-fade-in"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(3px)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div
        className="lesson-notebook-panel animate-slide-left"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '440px',
          height: '100%',
          backgroundColor: 'var(--bg-secondary)',
          borderLeft: '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px'
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-light">
          <div className="flex items-center gap-2">
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
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-extrabold text-sm" style={{ color: 'var(--text-primary)', margin: 0 }}>
                📝 隨堂個人便利貼筆記
              </h3>
              <p className="text-xs text-secondary truncate max-w-[240px]" style={{ margin: 0 }}>
                {unitTitle}
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

        {/* Note Prompt */}
        <div className="my-3 p-2.5 rounded-lg text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
          💡 <strong>隨手記錄</strong>：隨時記下老師提醒的易錯細節、常忘公式或解題靈感，系統會自動在瀏覽器中為你保存！
        </div>

        {/* Text Area */}
        <div className="flex-1 flex flex-col mb-4">
          <textarea
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="在此輸入本單元的個人重點筆記、關鍵公式、或你覺得容易搞混的迷思觀念..."
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

        {/* Actions Bar */}
        <div className="flex items-center justify-between pt-3 border-t border-light flex-wrap gap-2">
          <div className="flex items-center gap-1">
            <button
              onClick={handleCopy}
              disabled={!noteContent}
              className="btn-outline text-xs p-2 rounded-lg"
              title="複製全文"
            >
              {copied ? <Check size={15} style={{ color: 'var(--accent-success)' }} /> : <Copy size={15} />}
            </button>
            <button
              onClick={handleExportText}
              disabled={!noteContent}
              className="btn-outline text-xs p-2 rounded-lg"
              title="下載成 .txt 檔案"
            >
              <Download size={15} />
            </button>
            <button
              onClick={handleClear}
              disabled={!noteContent}
              className="btn-outline text-xs p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40"
              title="清空筆記"
            >
              <Trash2 size={15} />
            </button>
          </div>

          <button
            onClick={handleSave}
            className="btn-primary flex items-center gap-1.5 text-xs py-2 px-4 font-bold"
          >
            {savedToast ? <Check size={14} /> : <Save size={14} />}
            <span>{savedToast ? '已儲存！' : '儲存筆記'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonNotebookDrawer;
