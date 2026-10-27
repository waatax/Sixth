import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Zap,
  Timer,
  CheckCircle2,
  BookOpen,
  FileText,
  Play,
  Sparkles,
  Award,
  Flame,
  Layers,
  ArrowRight,
  Target
} from 'lucide-react';
import {
  TEXTBOOK_VERSIONS_108,
  getAll108Subjects,
  getUnitsBySubject108
} from '../../data/curriculumCatalog108';
import { quizData } from '../../data/quizData';
import { useGamification } from '../../context/GamificationContext';
import DuolingoLessonModal from '../duolingo/DuolingoLessonModal';
import TextbookReferenceCompendiumModal from '../duolingo/TextbookReferenceCompendiumModal';
import { playSound, triggerHaptic } from '../../utils/soundEffects';

const QuickQuizMenuModal = ({ isOpen, onClose, initialSubject = 'math', initialSemester = '6A', initialScope = 'midterm' }) => {
  const navigate = useNavigate();
  const {
    unitStars = {},
    unitCrowns = {},
    selectedTextbookVersion = 'all',
    setPreferredTextbookVersion
  } = useGamification();

  const allSubjects = useMemo(() => getAll108Subjects(), []);

  const [semester, setSemester] = useState(initialSemester); // 'all' | '6A' | '6B'
  const [scope, setScope] = useState(initialScope); // 'all' | 'midterm' | 'final'
  const [categoryGroup, setCategoryGroup] = useState('all'); // 'all' | 'basic' | 'specialized'
  const [subjectId, setSubjectId] = useState(initialSubject);
  const [questionCount, setQuestionCount] = useState(10); // 5 | 10 | 15 | 20
  const [difficultyMode, setDifficultyMode] = useState('all'); // 'all' | 'representative' | 'challenge'

  // Inner interactive modals
  const [duolingoUnit, setDuolingoUnit] = useState(null);
  const [compendiumUnit, setCompendiumUnit] = useState(null);

  useEffect(() => {
    if (isOpen) {
      if (initialSubject) setSubjectId(initialSubject);
      if (initialSemester) setSemester(initialSemester);
      if (initialScope) setScope(initialScope);
    }
  }, [isOpen, initialSubject, initialSemester, initialScope]);

  const visibleSubjects = useMemo(() => {
    if (categoryGroup === 'all') return allSubjects;
    return allSubjects.filter(s => s.category === categoryGroup);
  }, [allSubjects, categoryGroup]);

  const currentSubject = allSubjects.find(s => s.id === subjectId) || allSubjects[0];
  const rawSubjectUnits = useMemo(() => getUnitsBySubject108(currentSubject.id), [currentSubject.id]);

  // Filter units by semester & exam scope (midterm / final)
  const matchedUnits = useMemo(() => {
    return rawSubjectUnits.filter(u => {
      const matchSem = semester === 'all' || u.semester === semester;
      const matchScope = scope === 'all' || u.term === scope;
      return matchSem && matchScope;
    });
  }, [rawSubjectUnits, semester, scope]);

  // Calculate total available questions across matched units
  const totalAvailableQuestions = useMemo(() => {
    return matchedUnits.reduce((acc, u) => {
      const qKey = u.linkedUnitId || u.id;
      const qList = quizData[qKey] || [];
      return acc + qList.length;
    }, 0);
  }, [matchedUnits]);

  if (!isOpen) return null;

  const semLabel = semester === '6A' ? '6上 (六年級上學期)' : semester === '6B' ? '6下 (六年級下學期)' : '6上＋6下全學年';
  const scopeLabel = scope === 'midterm' ? '期中考 (第一次段考)' : scope === 'final' ? '期末/畢業考 (第二次段考)' : '全學期綜合範圍';

  // Launch combined Mock Exam with exact parameters
  const handleStartCombinedMockExam = (autostart = true) => {
    playSound('levelup');
    triggerHaptic('medium');
    onClose();
    const targetSub = ['tech_steam', 'bilingual_native', 'jh_prep'].includes(currentSubject.id)
      ? (currentSubject.id === 'bilingual_native' ? 'english' : 'math')
      : currentSubject.id;
    const params = new URLSearchParams({
      subject: targetSub,
      semester,
      scope,
      count: String(questionCount),
      mode: difficultyMode,
      version: selectedTextbookVersion,
      autostart: autostart ? '1' : '0'
    });
    navigate(`/mock-exam?${params.toString()}`);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 1050,
          backgroundColor: 'rgba(15, 23, 42, 0.75)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12px'
        }}
        onClick={onClose}
      >
        <div
          className="card animate-fade-in flex flex-col"
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '900px',
            maxHeight: '92vh',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '28px',
            border: '2px solid var(--border-strong)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
            padding: 0,
            overflow: 'hidden'
          }}
        >
          {/* ============================================================ */}
          {/* 🔝 Header: Quick Quiz Launcher Title & Stats */}
          {/* ============================================================ */}
          <div
            className="px-6 py-4 border-b flex items-center justify-between gap-4"
            style={{
              background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(16, 185, 129, 0.1) 55%, rgba(245, 158, 11, 0.1) 100%)',
              borderColor: 'var(--border-light)'
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)' }}
              >
                <Zap size={24} className="fill-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="h2 m-0" style={{ fontSize: '1.35rem' }}>
                    ⚡ 全域快速測驗選單 (Quick Quiz Launcher)
                  </h2>
                  <span className="badge badge-accent text-xs font-black">
                    上下學期 × 11大科目 × 期中/期末段考
                  </span>
                </div>
                <p className="text-xs text-secondary m-0 mt-0.5">
                  自由組合<strong>學期 (6上/6下)</strong>、<strong>基本與專業科目</strong>及<strong>段考範圍 (期中/期末)</strong>，一鍵啟動計時段考模擬卷、單元測驗或 Duolingo 闖關！
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-secondary cursor-pointer"
              style={{ border: 'none' }}
              title="關閉快速測驗選單"
            >
              <X size={20} />
            </button>
          </div>

          {/* ============================================================ */}
          {/* 🎛️ Body: 4-Step Interactive Selector & Matched Units List */}
          {/* ============================================================ */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col gap-4">
            {/* Step 1 & Step 2 Grid: Semester (6上/6下) + Exam Scope (期中/期末) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Step 1: Semester */}
              <div
                className="p-3.5 rounded-2xl flex flex-col gap-2"
                style={{ backgroundColor: 'var(--bg-tertiary)', border: '1.5px solid var(--border-light)' }}
              >
                <div className="text-xs font-black text-primary flex items-center justify-between">
                  <span>① 選擇學期 (六年級上下學期)</span>
                  <span className="text-[11px] text-blue-600 dark:text-blue-400 font-bold">108課綱完整學程</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '6A', label: '📘 6上學期', sub: '上學期課程', color: '#2563eb' },
                    { id: '6B', label: '📗 6下學期', sub: '下學期/畢業', color: '#059669' },
                    { id: 'all', label: '🌟 全學年', sub: '6上 + 6下', color: '#7c3aed' }
                  ].map((s) => {
                    const active = semester === s.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSemester(s.id);
                          playSound('ios_tap');
                        }}
                        className="p-2.5 rounded-xl text-center cursor-pointer transition-all"
                        style={{
                          backgroundColor: active ? s.color : 'var(--bg-secondary)',
                          color: active ? '#ffffff' : 'var(--text-primary)',
                          border: active ? `2px solid ${s.color}` : '1.5px solid var(--border-light)',
                          boxShadow: active ? `0 4px 10px ${s.color}40` : 'none'
                        }}
                      >
                        <div className="font-black text-xs sm:text-sm">{s.label}</div>
                        <div className="text-[10px] opacity-85 font-semibold mt-0.5">{s.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Exam Scope (期中考 / 期末考) */}
              <div
                className="p-3.5 rounded-2xl flex flex-col gap-2"
                style={{ backgroundColor: 'var(--bg-tertiary)', border: '1.5px solid var(--border-light)' }}
              >
                <div className="text-xs font-black text-primary flex items-center justify-between">
                  <span>② 選擇段考範圍 (期中考 / 期末考)</span>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold">精準鎖定考程</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'midterm', label: '🎯 期中段考', sub: '第一次定期評量', color: '#d97706' },
                    { id: 'final', label: '🏆 期末段考', sub: '第二次/畢業考', color: '#dc2626' },
                    { id: 'all', label: '🔥 全範圍總考', sub: '期中 + 期末', color: '#4f46e5' }
                  ].map((sc) => {
                    const active = scope === sc.id;
                    return (
                      <button
                        key={sc.id}
                        onClick={() => {
                          setScope(sc.id);
                          playSound('ios_tap');
                        }}
                        className="p-2.5 rounded-xl text-center cursor-pointer transition-all"
                        style={{
                          backgroundColor: active ? sc.color : 'var(--bg-secondary)',
                          color: active ? '#ffffff' : 'var(--text-primary)',
                          border: active ? `2px solid ${sc.color}` : '1.5px solid var(--border-light)',
                          boxShadow: active ? `0 4px 10px ${sc.color}40` : 'none'
                        }}
                      >
                        <div className="font-black text-xs sm:text-sm">{sc.label}</div>
                        <div className="text-[10px] opacity-85 font-semibold mt-0.5">{sc.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 3: Subject Selector (Basic 5 Subjects + Specialized 6 Subjects) */}
            <div
              className="p-3.5 rounded-2xl flex flex-col gap-2.5"
              style={{ backgroundColor: 'var(--bg-tertiary)', border: '1.5px solid var(--border-light)' }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="text-xs font-black text-primary">
                  ③ 選擇測驗科目（部定基本科目 ＆ 專業素養科目）
                </div>
                <div className="flex items-center gap-1.5">
                  {[
                    { id: 'all', label: '全部科目 (11)' },
                    { id: 'basic', label: '🏛️ 基本科目 (國數自社英)' },
                    { id: 'specialized', label: '🎨 專業科目 (藝體綜/科技/雙語/先修)' }
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => {
                        setCategoryGroup(g.id);
                        playSound('ios_tap');
                      }}
                      className={`btn-pill text-[11px] font-black px-2.5 py-1 ${
                        categoryGroup === g.id ? 'active' : ''
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
                {visibleSubjects.map((sub) => {
                  const active = sub.id === currentSubject.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => {
                        setSubjectId(sub.id);
                        playSound('ios_tap');
                        triggerHaptic('selection');
                      }}
                      className="p-2.5 rounded-xl flex items-center gap-2 text-left cursor-pointer transition-all"
                      style={{
                        backgroundColor: active ? sub.color : 'var(--bg-secondary)',
                        color: active ? '#ffffff' : 'var(--text-primary)',
                        border: active ? `2px solid ${sub.color}` : '1.5px solid var(--border-light)',
                        boxShadow: active ? '0 4px 10px rgba(0,0,0,0.16)' : 'none'
                      }}
                    >
                      <span className="text-lg flex-shrink-0">{sub.emoji}</span>
                      <div className="truncate">
                        <div className="font-black text-xs truncate">{sub.shortName}</div>
                        <div
                          className="text-[10px] font-bold truncate"
                          style={{ color: active ? 'rgba(255,255,255,0.85)' : 'var(--text-tertiary)' }}
                        >
                          {sub.category === 'basic' ? '基本核心' : '專業素養'}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Version Alignment, Question Count & Difficulty Mode */}
            <div
              className="p-3.5 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3"
              style={{ backgroundColor: 'var(--bg-tertiary)', border: '1.5px solid var(--border-light)' }}
            >
              {/* Textbook Version Filter */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-black text-primary mr-1">④ 版本與參考書：</span>
                {TEXTBOOK_VERSIONS_108.map((ver) => {
                  const active = selectedTextbookVersion === ver.id;
                  return (
                    <button
                      key={ver.id}
                      onClick={() => {
                        setPreferredTextbookVersion(ver.id);
                        playSound('ios_tap');
                      }}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-black cursor-pointer transition-all"
                      style={{
                        backgroundColor: active ? ver.color : 'var(--bg-secondary)',
                        color: active ? '#ffffff' : 'var(--text-secondary)',
                        border: active ? `1.5px solid ${ver.color}` : '1px solid var(--border-light)'
                      }}
                    >
                      {ver.shortName}
                    </button>
                  );
                })}
              </div>

              {/* Question Count & Difficulty */}
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-primary">題數：</span>
                  {[5, 10, 15, 20].map((cnt) => (
                    <button
                      key={cnt}
                      onClick={() => {
                        setQuestionCount(cnt);
                        playSound('ios_tap');
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer"
                      style={{
                        backgroundColor: questionCount === cnt ? '#2563eb' : 'var(--bg-secondary)',
                        color: questionCount === cnt ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      {cnt}題
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-primary">題型：</span>
                  {[
                    { id: 'all', label: '綜合全題型' },
                    { id: 'representative', label: '評量代表題' },
                    { id: 'challenge', label: '🔥 段考壓軸' }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setDifficultyMode(m.id);
                        playSound('ios_tap');
                      }}
                      className="px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer"
                      style={{
                        backgroundColor: difficultyMode === m.id ? '#d97706' : 'var(--bg-secondary)',
                        color: difficultyMode === m.id ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ============================================================ */}
            {/* 📋 Matched Units & Direct Single-Unit Quiz Cards */}
            {/* ============================================================ */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2.5">
                <div className="text-xs sm:text-sm font-black text-primary flex items-center gap-2">
                  <Target size={16} className="text-indigo-500" />
                  <span>
                    符合【{semLabel}・{currentSubject.name}・{scopeLabel}】共 {matchedUnits.length} 個單元（題庫 {totalAvailableQuestions} 題）：
                  </span>
                </div>
                <span className="text-[11px] text-secondary">
                  可單獨點擊下方任一單元測驗，或點擊底部按鈕進行「段考綜合抽題模擬考」
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {matchedUnits.map((unit) => {
                  const targetQuizUnitId = unit.linkedUnitId || unit.id;
                  const stars = unitStars[targetQuizUnitId] || 0;
                  const crowns = unitCrowns[unit.id] ?? stars;
                  const cat = unit.catalog;
                  const versionTitle =
                    selectedTextbookVersion === 'kangHsuan'
                      ? cat.textbooks.kangHsuan.chapterTitle
                      : selectedTextbookVersion === 'nanI'
                      ? cat.textbooks.nanI.chapterTitle
                      : selectedTextbookVersion === 'hanLin'
                      ? cat.textbooks.hanLin.chapterTitle
                      : selectedTextbookVersion === 'hessLongman'
                      ? cat.textbooks.hessLongman.chapterTitle
                      : unit.title;

                  return (
                    <div
                      key={unit.id}
                      className="p-3.5 rounded-2xl flex flex-col justify-between gap-2.5"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        border: '1.5px solid var(--border-light)'
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span
                              className="badge text-[10px] font-black"
                              style={{
                                backgroundColor: unit.semester === '6A' ? 'rgba(37, 99, 235, 0.14)' : 'rgba(5, 150, 105, 0.14)',
                                color: unit.semester === '6A' ? '#2563eb' : '#059669'
                              }}
                            >
                              {unit.semester === '6A' ? '📘 6上' : '📗 6下'}
                            </span>
                            <span
                              className="badge text-[10px] font-black"
                              style={{
                                backgroundColor: unit.term === 'midterm' ? 'rgba(217, 119, 6, 0.14)' : 'rgba(220, 38, 38, 0.14)',
                                color: unit.term === 'midterm' ? '#d97706' : '#dc2626'
                              }}
                            >
                              {unit.term === 'midterm' ? '🎯 期中考' : '🏆 期末考'}
                            </span>
                            <span className="text-[11px] font-black text-amber-500">
                              👑 {crowns}/5 冠
                            </span>
                          </div>
                          <button
                            onClick={() => setCompendiumUnit(unit)}
                            className="text-[11px] font-black text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                            style={{ background: 'none', border: 'none', padding: 0 }}
                          >
                            📚 課本參考書
                          </button>
                        </div>

                        <div className="font-black text-xs sm:text-sm text-primary leading-snug">
                          {versionTitle}
                        </div>
                        <div className="text-[11px] text-secondary mt-0.5 line-clamp-1">
                          口訣：{cat.quickRescue.replace(/\$/g, '')}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 pt-2 border-t border-light">
                        <button
                          onClick={() => {
                            onClose();
                            navigate(`/quiz/${targetQuizUnitId}?mode=${difficultyMode}`);
                          }}
                          className="flex-1 py-1.5 px-3 rounded-xl font-black text-xs text-white flex items-center justify-center gap-1 cursor-pointer"
                          style={{
                            backgroundColor: currentSubject.color || '#2563eb',
                            border: 'none'
                          }}
                        >
                          <CheckCircle2 size={13} />
                          <span>單課隨堂測驗</span>
                        </button>

                        <button
                          onClick={() => setDuolingoUnit(unit)}
                          className="py-1.5 px-3 rounded-xl font-black text-xs text-white flex items-center justify-center gap-1 cursor-pointer"
                          style={{
                            backgroundColor: '#16a34a',
                            border: 'none'
                          }}
                        >
                          <span>🦉 Duolingo 闖關</span>
                        </button>

                        <button
                          onClick={() => {
                            onClose();
                            navigate(`/lesson/${targetQuizUnitId}`);
                          }}
                          className="btn-outline py-1.5 px-2.5 rounded-xl font-bold text-xs cursor-pointer"
                          title="查看單元課文圖解"
                        >
                          📖 課文
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 👇 Footer: One-Click Combined Midterm/Final Exam & Handout */}
          {/* ============================================================ */}
          <div
            className="px-6 py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  const noteSub = ['tech_steam', 'bilingual_native', 'jh_prep'].includes(currentSubject.id)
                    ? 'math'
                    : currentSubject.id;
                  const noteSem = semester === 'all' ? '6A' : semester;
                  navigate(`/exam-notes/${noteSub}/${noteSem}/${scope}`);
                }}
                className="btn-outline py-2.5 px-4 rounded-2xl font-black text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <FileText size={15} className="text-indigo-500" />
                <span>📄 查看此範圍段考複習講義</span>
              </button>
            </div>

            <button
              onClick={() => handleStartCombinedMockExam(true)}
              className="w-full sm:w-auto py-3 px-6 rounded-2xl font-black text-xs sm:text-sm text-white flex items-center justify-center gap-2 cursor-pointer transition-transform active:translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 55%, #db2777 100%)',
                border: 'none',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)'
              }}
            >
              <Timer size={17} />
              <span>
                🚀 立即開考：【{semester === 'all' ? '全學年' : semester === '6A' ? '6上' : '6下'}・{currentSubject.shortName}・{scope === 'midterm' ? '期中考' : scope === 'final' ? '期末考' : '全範圍'}】綜合段考卷 ({questionCount}題)
              </span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Inner Duolingo & Compendium Modals */}
      <DuolingoLessonModal
        isOpen={!!duolingoUnit}
        onClose={() => setDuolingoUnit(null)}
        unit={duolingoUnit}
        subject={currentSubject}
      />

      <TextbookReferenceCompendiumModal
        isOpen={!!compendiumUnit}
        onClose={() => setCompendiumUnit(null)}
        unit={compendiumUnit}
        subject={currentSubject}
        onStartDuolingoLesson={(u) => setDuolingoUnit(u)}
      />
    </>
  );
};

export default QuickQuizMenuModal;
