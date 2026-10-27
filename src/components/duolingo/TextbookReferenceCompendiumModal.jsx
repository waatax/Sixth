import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  BookOpen,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Play,
  ArrowRight,
  Layers,
  Award
} from 'lucide-react';
import {
  TEXTBOOK_VERSIONS_108,
  REFERENCE_BOOK_SERIES_108,
  getUnitCompleteCatalog
} from '../../data/curriculumCatalog108';
import { playSound } from '../../utils/soundEffects';

const TextbookReferenceCompendiumModal = ({ isOpen, onClose, unit, subject, onStartDuolingoLesson }) => {
  const [activeTab, setActiveTab] = useState('textbooks'); // 'textbooks' | 'references' | 'series'

  if (!isOpen || !unit) return null;

  const catalog = unit.catalog || getUnitCompleteCatalog(unit);
  const targetLessonUnitId = unit.linkedUnitId || unit.id;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1080,
        backgroundColor: 'rgba(15, 23, 42, 0.72)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '14px'
      }}
      onClick={onClose}
    >
      <div
        className="card animate-fade-in flex flex-col"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '26px',
          border: '2px solid var(--border-strong)',
          boxShadow: '0 25px 55px rgba(0, 0, 0, 0.4)',
          padding: 0,
          overflow: 'hidden'
        }}
      >
        {/* Modal Header */}
        <div
          className="px-6 py-4 border-b flex items-start justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(16, 185, 129, 0.08) 100%)',
            borderColor: 'var(--border-light)'
          }}
        >
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="badge badge-accent text-xs font-black">
                📚 108 課綱全版本課本・參考書完整編列總覽
              </span>
              <span
                className="badge text-xs font-bold"
                style={{
                  backgroundColor: catalog.semester === '6A' ? 'rgba(37, 99, 235, 0.14)' : 'rgba(5, 150, 105, 0.14)',
                  color: catalog.semester === '6A' ? '#2563eb' : '#059669'
                }}
              >
                {catalog.semester === '6A' ? '📘 六年級上學期 (6上)' : '📗 六年級下學期 (6下)'}・{catalog.termLabel}
              </span>
              <span className="badge text-xs font-bold bg-amber-500/15 text-amber-600">
                指標：{catalog.competencyCode}
              </span>
            </div>
            <h2 className="h2 m-0" style={{ fontSize: '1.35rem' }}>
              {subject?.emoji || '📖'} {unit.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-secondary"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div
          className="px-6 py-2.5 border-b flex items-center gap-2 overflow-x-auto"
          style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-light)' }}
        >
          {[
            { id: 'textbooks', label: '🏛️ 各版本課本對照 (康軒/南一/翰林/何嘉仁)' },
            { id: 'references', label: '📖 參考書重點彙編 (自修/評量/麻辣講義)' },
            { id: 'series', label: '🗂️ 108課綱參考書系列圖鑑' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                playSound('ios_tap');
              }}
              className={`btn-pill text-xs font-black px-3.5 py-1.5 whitespace-nowrap ${
                activeTab === t.id ? 'active' : ''
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {activeTab === 'textbooks' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {[
                  {
                    key: 'kangHsuan',
                    badge: '📗 康軒版課本 (Kang Hsuan)',
                    color: '#059669',
                    bg: 'rgba(5, 150, 105, 0.08)',
                    data: catalog.textbooks.kangHsuan
                  },
                  {
                    key: 'nanI',
                    badge: '📘 南一版課本 (Nan I)',
                    color: '#2563eb',
                    bg: 'rgba(37, 99, 235, 0.08)',
                    data: catalog.textbooks.nanI
                  },
                  {
                    key: 'hanLin',
                    badge: '📙 翰林版課本 (Han Lin)',
                    color: '#d97706',
                    bg: 'rgba(217, 119, 6, 0.08)',
                    data: catalog.textbooks.hanLin
                  },
                  {
                    key: 'hessLongman',
                    badge: '📕 何嘉仁 / 朗文 / 雙語版',
                    color: '#db2777',
                    bg: 'rgba(219, 39, 119, 0.08)',
                    data: catalog.textbooks.hessLongman
                  }
                ].map((v) => (
                  <div
                    key={v.key}
                    className="p-4 rounded-2xl flex flex-col gap-2"
                    style={{
                      backgroundColor: v.bg,
                      border: `1.5px solid ${v.color}40`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="badge font-black text-xs px-2.5 py-1"
                        style={{ backgroundColor: v.color, color: '#ffffff' }}
                      >
                        {v.badge}
                      </span>
                    </div>
                    <div className="font-black text-sm text-primary">
                      📌 {v.data.chapterTitle}
                    </div>
                    <p className="text-xs text-secondary m-0 leading-relaxed">
                      <strong>命題側重：</strong>{v.data.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Rescue Banner */}
              <div
                className="p-4 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(16, 185, 129, 0.1) 100%)',
                  border: '1.5px solid rgba(245, 158, 11, 0.45)'
                }}
              >
                <div className="text-xs font-black text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1.5">
                  <Sparkles size={15} />
                  <span>跨版本通用・考前 5 秒瞬解黃金口訣：</span>
                </div>
                <div className="text-sm font-black text-primary leading-relaxed">
                  {catalog.quickRescue.replace(/\$/g, '')}
                </div>
                <div className="text-xs text-secondary mt-1.5">
                  🔥 <strong>高頻審題關鍵字：</strong>{catalog.hotKeywords}
                </div>
              </div>
            </>
          )}

          {activeTab === 'references' && (
            <div className="flex flex-col gap-3.5">
              {[
                {
                  title: '📘 《課堂自修》核心觀念與習作詳解（康軒自修 / 南一超群 / 翰林贏家）',
                  content: catalog.referenceBooks.selfStudy,
                  color: '#2563eb'
                },
                {
                  title: '📗 《學習評量》經典必考題型（新挑戰評量 / 點線面評量 / 最高水準評量）',
                  content: catalog.referenceBooks.workbook,
                  color: '#059669'
                },
                {
                  title: '📙 《名師講義》濃縮公式與速解心法（麻辣講義 / 小無敵 / 滿分講義）',
                  content: catalog.referenceBooks.lecture.replace(/\$/g, ''),
                  color: '#d97706'
                },
                {
                  title: '📕 《段考滿分卷》易錯失分防雷警訊（全國名校段考真題陷阱）',
                  content: catalog.referenceBooks.examTrap.replace(/\$/g, ''),
                  color: '#dc2626'
                }
              ].map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderLeft: `5px solid ${ref.color}`,
                    borderTop: '1px solid var(--border-light)',
                    borderRight: '1px solid var(--border-light)',
                    borderBottom: '1px solid var(--border-light)'
                  }}
                >
                  <div className="font-black text-xs sm:text-sm mb-1" style={{ color: ref.color }}>
                    {ref.title}
                  </div>
                  <div className="text-xs sm:text-sm text-primary leading-relaxed font-medium">
                    {ref.content}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'series' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {REFERENCE_BOOK_SERIES_108.map((series) => (
                <div
                  key={series.id}
                  className="p-4 rounded-2xl flex flex-col gap-2.5"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1.5px solid var(--border-light)'
                  }}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-black text-xs sm:text-sm" style={{ color: series.color }}>
                      {series.title}
                    </span>
                    <span
                      className="badge text-[10px] font-black"
                      style={{ backgroundColor: `${series.color}20`, color: series.color }}
                    >
                      {series.tag}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {series.books.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-2.5 rounded-xl text-xs"
                        style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}
                      >
                        <div className="font-black text-primary">
                          {b.name} <span className="text-tertiary font-normal">({b.publisher})</span>
                        </div>
                        <div className="text-secondary mt-0.5 leading-relaxed">{b.features}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div
          className="px-6 py-4 border-t flex items-center justify-between flex-wrap gap-3"
          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              to={`/lesson/${targetLessonUnitId}`}
              onClick={onClose}
              className="btn-outline text-xs font-black py-2.5 px-4 rounded-xl flex items-center gap-1.5"
            >
              <BookOpen size={14} />
              <span>進入課本圖解精讀</span>
            </Link>
            <Link
              to={`/exam-notes/${subject?.id && !['tech_steam', 'bilingual_native', 'jh_prep'].includes(subject.id) ? subject.id : 'math'}/${unit.semester}`}
              onClick={onClose}
              className="btn-outline text-xs font-black py-2.5 px-4 rounded-xl flex items-center gap-1.5"
            >
              <FileText size={14} />
              <span>查看 A4 段考講義</span>
            </Link>
          </div>

          {onStartDuolingoLesson && (
            <button
              onClick={() => {
                onClose();
                onStartDuolingoLesson(unit);
              }}
              className="py-2.5 px-5 rounded-xl font-black text-xs sm:text-sm text-white flex items-center gap-2 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                border: 'none',
                boxShadow: '0 4px 0 #15803d'
              }}
            >
              <Play size={15} className="fill-white" />
              <span>立即開始 Duolingo 遊戲化闖關 (+40 XP)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextbookReferenceCompendiumModal;
