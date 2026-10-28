import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  Timer,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ArrowLeft,
  FileText,
  Volume2,
  BookOpen,
  Sparkles,
  ChevronRight,
  Flame,
  Zap,
  Target,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { coursesData } from '../data/courses';
import {
  TEXTBOOK_VERSIONS_108,
  getAll108Subjects,
  getUnitsBySubject108
} from '../data/curriculumCatalog108';
import { useGamification } from '../context/GamificationContext';
import { playSound, triggerHaptic } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';
import QuestionDiagram from '../components/quiz/QuestionDiagram';
import DuolingoLessonModal from '../components/duolingo/DuolingoLessonModal';

const EXAM_MODES = [
  { id: 'all', title: '🎯 全科素養綜合大滿貫', desc: '八大學習領域隨機抽取試題，全方位檢驗實戰應考力！', icon: '🏆', color: 'var(--accent-primary)' },
  { id: 'challenge', title: '⚔️ 模擬挑戰專區・圖示壓軸素養題', desc: '全科精選幾何鋪色、電路磁效應、槓桿天平、顯微鏡與地圖等完整圖示模擬挑戰題！', icon: '🔥', color: 'var(--apple-orange)' },
  { id: 'math', title: '🧮 數學科段考模擬考', desc: '數與量、分數小數除法、比值、圓面積與柱體速率', icon: '🧮', color: 'hsl(215, 85%, 52%)' },
  { id: 'science', title: '🔬 自然科學段考模擬考', desc: '天氣系統、水溶液酸鹼、電與磁、簡單機械與生態系', icon: '🔬', color: 'hsl(152, 70%, 42%)' },
  { id: 'mandarin', title: '📖 國語文段考模擬考', desc: '閱讀理解策略、記敘說明議論文、修辭成語與古詩', icon: '📖', color: 'hsl(25, 90%, 52%)' },
  { id: 'social', title: '🌍 社會領域段考模擬考', desc: '臺灣民主五權分立、經濟高科技矽盾與SDGs永續', icon: '🌍', color: 'hsl(275, 75%, 55%)' },
  { id: 'english', title: '🇬🇧 英語文段考模擬考', desc: 'Daily Routines, Past Tense, Directions & Reading', icon: '🇬🇧', color: 'hsl(192, 88%, 45%)' },
  { id: 'arts_pe', title: '🎨 藝術・健體・綜合專業模擬考', desc: '色彩音樂戲劇、CPR急救飲食、時間管理高EQ', icon: '🎨', color: 'hsl(340, 82%, 58%)' }
];

const MockExamPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addXp, addCoins, selectedTextbookVersion = 'all', setPreferredTextbookVersion } = useGamification();

  const paramSubject = searchParams.get('subject') || 'math';
  const paramSemester = searchParams.get('semester') || 'all'; // 'all' | '6A' | '6B'
  const paramScope = searchParams.get('scope') || 'all'; // 'all' | 'midterm' | 'final'
  const paramCount = parseInt(searchParams.get('count') || '10', 10);
  const paramMode = searchParams.get('mode') || 'all'; // 'all' | 'representative' | 'challenge'
  const paramAutostart = searchParams.get('autostart') === '1';

  const [selectedSubject, setSelectedSubject] = useState(paramSubject);
  const [selectedSemester, setSelectedSemester] = useState(paramSemester);
  const [selectedScope, setSelectedScope] = useState(paramScope);
  const [selectedCount, setSelectedCount] = useState([5, 10, 15, 20].includes(paramCount) ? paramCount : 10);
  const [selectedDifficulty, setSelectedDifficulty] = useState(paramMode);

  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [duolingoTargetUnit, setDuolingoTargetUnit] = useState(null);

  const allSubjects108 = useMemo(() => getAll108Subjects(), []);

  // Build filtered units for the current selection
  const matchedUnitsPreview = useMemo(() => {
    const targetSubIds =
      selectedSubject === 'all' || selectedSubject === 'challenge'
        ? coursesData.subjects.map(s => s.id)
        : selectedSubject === 'arts_pe'
        ? ['arts', 'health_pe', 'integrative']
        : [selectedSubject];

    const list = [];
    targetSubIds.forEach(sId => {
      const uList = getUnitsBySubject108(sId);
      uList.forEach(u => {
        const matchSem = selectedSemester === 'all' || u.semester === selectedSemester;
        const matchScope = selectedScope === 'all' || u.term === selectedScope;
        if (matchSem && matchScope) {
          list.push({ ...u, subjectId: sId });
        }
      });
    });
    return list;
  }, [selectedSubject, selectedSemester, selectedScope]);

  const startExam = (
    modeId = selectedSubject,
    sem = selectedSemester,
    sc = selectedScope,
    cnt = selectedCount,
    diff = selectedDifficulty
  ) => {
    setSelectedSubject(modeId);
    setSelectedSemester(sem);
    setSelectedScope(sc);
    setSelectedCount(cnt);
    setSelectedDifficulty(diff);

    const targetSubIds =
      modeId === 'all' || modeId === 'challenge'
        ? coursesData.subjects.map(s => s.id)
        : modeId === 'arts_pe'
        ? ['arts', 'health_pe', 'integrative']
        : [modeId];

    let candidateUnits = [];
    targetSubIds.forEach(sId => {
      const uList = getUnitsBySubject108(sId);
      uList.forEach(u => {
        const matchSem = sem === 'all' || u.semester === sem;
        const matchScope = sc === 'all' || u.term === sc;
        if (matchSem && matchScope) {
          candidateUnits.push(u);
        }
      });
    });

    // Fallback if filter is too narrow
    if (candidateUnits.length === 0) {
      targetSubIds.forEach(sId => {
        candidateUnits.push(...getUnitsBySubject108(sId));
      });
    }

    let allQs = [];
    candidateUnits.forEach(u => {
      const qKey = u.linkedUnitId || u.id;
      const rawQs = quizData[qKey] || [];
      let filteredQs = rawQs;
      if (modeId === 'challenge' || diff === 'challenge') {
        const ch = rawQs.filter(q => q.isMockChallenge);
        if (ch.length > 0) filteredQs = ch;
      } else if (diff === 'representative') {
        const rep = rawQs.filter(q => q.isRepresentative);
        if (rep.length > 0) filteredQs = rep;
      }

      filteredQs.forEach((q, qIdx) => {
        const answerIdx = q.answerIndex !== undefined ? q.answerIndex : q.answer;
        allQs.push({
          ...q,
          answerIndex: answerIdx,
          unitId: qKey,
          unitTitle: u.title,
          unitSemester: u.semester,
          unitTerm: u.term,
          uniqueKey: `${qKey}-${qIdx}`
        });
      });
    });

    const shuffled = [...allQs].sort(() => 0.5 - Math.random()).slice(0, cnt);
    setExamQuestions(shuffled);
    setAnswers({});
    setCurrentIdx(0);
    setTimeLeft(cnt * 60); // 1 minute per question
    setExamStarted(true);
    setExamFinished(false);
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-start if launched from Quick Quiz Menu Modal with autostart=1
  useEffect(() => {
    if (paramAutostart && !examStarted) {
      startExam(paramSubject, paramSemester, paramScope, paramCount, paramMode);
    }
  }, [paramAutostart]);

  useEffect(() => {
    if (!examStarted || examFinished) return;

    if (timeLeft <= 0) {
      finishExam();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, examFinished, timeLeft]);

  const handleSelectAnswer = (optIndex) => {
    setAnswers(prev => ({ ...prev, [currentIdx]: optIndex }));
    playSound('click');
  };

  const finishExam = () => {
    setExamFinished(true);
    playSound('levelup');
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    addXp(100, `mock_exam_${selectedSubject}_${selectedSemester}_${selectedScope}`);
    addCoins(30);

    try {
      const existingMistakes = JSON.parse(localStorage.getItem('sixth_student_mistakes') || '[]');
      const newMistakes = [];
      examQuestions.forEach((q, idx) => {
        if (answers[idx] !== q.answerIndex) {
          const alreadyExists = existingMistakes.some(m => m.question === q.question);
          if (!alreadyExists) {
            newMistakes.push({
              ...q,
              userWrongAnswer: answers[idx] !== undefined ? q.options[answers[idx]] : '未作答',
              date: new Date().toISOString().slice(0, 10)
            });
          }
        }
      });
      if (newMistakes.length > 0) {
        localStorage.setItem('sixth_student_mistakes', JSON.stringify([...existingMistakes, ...newMistakes]));
      }
    } catch (e) {}
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  let correctCount = 0;
  if (examFinished) {
    examQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answerIndex) {
        correctCount += 1;
      }
    });
  }

  const currentSubObj = allSubjects108.find(s => s.id === selectedSubject);
  const semText = selectedSemester === '6A' ? '6上 (上學期)' : selectedSemester === '6B' ? '6下 (下學期)' : '6上+6下全學年';
  const scopeText = selectedScope === 'midterm' ? '期中考範圍' : selectedScope === 'final' ? '期末/畢業考範圍' : '全學期範圍';

  return (
    <div className="flex flex-col gap-6 py-4 max-w-5xl mx-auto pb-16">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-bold">
          <ArrowLeft size={16} /> 返回 Sixth 主頁
        </Link>

        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open_quick_quiz_menu'))}
          className="px-3.5 py-1.5 rounded-full text-xs font-black text-white flex items-center gap-1.5 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            border: 'none'
          }}
        >
          <Zap size={13} className="fill-white" />
          <span>開啟全域快速測驗選單</span>
        </button>
      </div>

      {!examStarted ? (
        <div className="flex flex-col gap-6">
          {/* ============================================================ */}
          {/* 🎯 Interactive Quick Exam Customizer Card (學期 × 科目 × 期中/期末) */}
          {/* ============================================================ */}
          <div
            className="card p-6 flex flex-col gap-5"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '26px',
              border: '2px solid var(--border-strong)',
              borderTop: '6px solid var(--accent-primary)'
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-light pb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="badge badge-accent font-black text-xs px-3 py-1">
                    ⏱️ 108 課綱段考快速組卷・計時模擬測驗中心
                  </span>
                  <span className="badge badge-success font-black text-xs">
                    支援 6上/6下 × 11大科目 × 期中/期末段考
                  </span>
                </div>
                <h1 className="h1 m-0" style={{ fontSize: '1.85rem' }}>
                  快速段考測驗與模擬考選單
                </h1>
                <p className="text-secondary text-xs sm:text-sm m-0 mt-1">
                  自由指定<strong>上下學期</strong>、<strong>測驗科目</strong>、<strong>段考範圍（期中 / 期末）</strong>與<strong>課本版本</strong>，一鍵生成專屬模擬試卷或單課闖關！
                </p>
              </div>

              <button
                onClick={() => startExam()}
                className="w-full md:w-auto py-3.5 px-6 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  border: 'none',
                  boxShadow: '0 5px 0 #15803d'
                }}
              >
                <Zap size={18} className="fill-white" />
                <span>立即開始【{semText}・{currentSubObj?.shortName || '綜合'}・{scopeText}】({selectedCount}題)</span>
              </button>
            </div>

            {/* 4-Row Selector Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Semester Selector */}
              <div className="p-3.5 rounded-2xl bg-tertiary border border-light">
                <div className="text-xs font-black text-primary mb-2">
                  ① 選擇學期 (六年級上學期 / 下學期)：
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '6A', label: '📘 6上學期', color: '#2563eb' },
                    { id: '6B', label: '📗 6下學期', color: '#059669' },
                    { id: 'all', label: '🌟 全學年', color: '#7c3aed' }
                  ].map(s => (
                    <button
                      key={s.id}
                      onClick={() => { setSelectedSemester(s.id); playSound('ios_tap'); }}
                      className="py-2 px-2 rounded-xl font-black text-xs cursor-pointer transition-all"
                      style={{
                        backgroundColor: selectedSemester === s.id ? s.color : 'var(--bg-secondary)',
                        color: selectedSemester === s.id ? '#ffffff' : 'var(--text-primary)',
                        border: selectedSemester === s.id ? `2px solid ${s.color}` : '1px solid var(--border-light)'
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Midterm / Final Scope Selector */}
              <div className="p-3.5 rounded-2xl bg-tertiary border border-light">
                <div className="text-xs font-black text-primary mb-2">
                  ② 選擇段考範圍 (期中考 / 期末考)：
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'midterm', label: '🎯 期中段考', color: '#d97706' },
                    { id: 'final', label: '🏆 期末段考', color: '#dc2626' },
                    { id: 'all', label: '🔥 全學期範圍', color: '#4f46e5' }
                  ].map(sc => (
                    <button
                      key={sc.id}
                      onClick={() => { setSelectedScope(sc.id); playSound('ios_tap'); }}
                      className="py-2 px-2 rounded-xl font-black text-xs cursor-pointer transition-all"
                      style={{
                        backgroundColor: selectedScope === sc.id ? sc.color : 'var(--bg-secondary)',
                        color: selectedScope === sc.id ? '#ffffff' : 'var(--text-primary)',
                        border: selectedScope === sc.id ? `2px solid ${sc.color}` : '1px solid var(--border-light)'
                      }}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Subject Selector */}
            <div className="p-3.5 rounded-2xl bg-tertiary border border-light">
              <div className="text-xs font-black text-primary mb-2">
                ③ 選擇測驗科目（基本科目 ＆ 專業素養科目）：
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => { setSelectedSubject('all'); playSound('ios_tap'); }}
                  className="px-3 py-2 rounded-xl font-black text-xs cursor-pointer"
                  style={{
                    backgroundColor: selectedSubject === 'all' ? '#4f46e5' : 'var(--bg-secondary)',
                    color: selectedSubject === 'all' ? '#ffffff' : 'var(--text-primary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  🏆 全科綜合大滿貫
                </button>
                {allSubjects108.map(sub => {
                  const active = selectedSubject === sub.id;
                  return (
                    <button
                      key={sub.id}
                      onClick={() => { setSelectedSubject(sub.id); playSound('ios_tap'); }}
                      className="px-3 py-2 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer transition-all"
                      style={{
                        backgroundColor: active ? sub.color : 'var(--bg-secondary)',
                        color: active ? '#ffffff' : 'var(--text-primary)',
                        border: active ? `2px solid ${sub.color}` : '1px solid var(--border-light)'
                      }}
                    >
                      <span>{sub.emoji}</span>
                      <span>{sub.shortName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Textbook Version, Question Count & Mode */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-xs font-black text-secondary">課本版本：</span>
                {TEXTBOOK_VERSIONS_108.map(v => (
                  <button
                    key={v.id}
                    onClick={() => { setPreferredTextbookVersion(v.id); playSound('ios_tap'); }}
                    className="px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer"
                    style={{
                      backgroundColor: selectedTextbookVersion === v.id ? v.color : 'var(--bg-tertiary)',
                      color: selectedTextbookVersion === v.id ? '#ffffff' : 'var(--text-secondary)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    {v.shortName}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-secondary">抽題數：</span>
                  {[5, 10, 15, 20].map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedCount(c)}
                      className="px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer"
                      style={{
                        backgroundColor: selectedCount === c ? '#2563eb' : 'var(--bg-tertiary)',
                        color: selectedCount === c ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      {c}題
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-secondary">難度：</span>
                  {[
                    { id: 'all', label: '綜合' },
                    { id: 'representative', label: '評量必考' },
                    { id: 'challenge', label: '🔥 壓軸' }
                  ].map(d => (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDifficulty(d.id)}
                      className="px-2.5 py-1 rounded-lg text-xs font-black cursor-pointer"
                      style={{
                        backgroundColor: selectedDifficulty === d.id ? '#d97706' : 'var(--bg-tertiary)',
                        color: selectedDifficulty === d.id ? '#ffffff' : 'var(--text-secondary)',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Matched Units Direct Quick Quiz Grid */}
            <div className="pt-3 border-t border-light">
              <div className="text-xs font-black text-primary mb-2.5 flex items-center justify-between">
                <span>📋 本範圍包含單元（點擊可單獨測驗該單元或啟動 Duolingo 闖關）：</span>
                <span className="text-indigo-600 dark:text-indigo-400">共 {matchedUnitsPreview.length} 個單元</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {matchedUnitsPreview.slice(0, 12).map(u => {
                  const qId = u.linkedUnitId || u.id;
                  return (
                    <div
                      key={u.id}
                      className="p-3 rounded-2xl flex flex-col justify-between gap-2"
                      style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}
                    >
                      <div>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="badge text-[10px] font-black bg-blue-500/15 text-blue-600">
                            {u.semester === '6A' ? '6上' : '6下'}
                          </span>
                          <span className="badge text-[10px] font-black bg-amber-500/15 text-amber-600">
                            {u.term === 'midterm' ? '期中' : '期末'}
                          </span>
                        </div>
                        <div className="font-black text-xs text-primary line-clamp-1">{u.title}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Link
                          to={`/quiz/${qId}?mode=${selectedDifficulty}`}
                          className="flex-1 py-1.5 px-2 rounded-lg text-[11px] font-black text-white text-center"
                          style={{ backgroundColor: '#2563eb', textDecoration: 'none' }}
                        >
                          單課測驗
                        </Link>
                        <button
                          onClick={() => setDuolingoTargetUnit(u)}
                          className="py-1.5 px-2.5 rounded-lg text-[11px] font-black text-white cursor-pointer"
                          style={{ backgroundColor: '#16a34a', border: 'none' }}
                        >
                          🎮 學習遊戲
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Preset Mode Cards */}
          <div>
            <h3 className="h3 mb-3" style={{ fontSize: '1.15rem' }}>🎯 或直接點選熱門專題模擬考卷：</h3>
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {EXAM_MODES.map(mode => (
                <div
                  key={mode.id}
                  className="card card-hoverable cursor-pointer flex flex-col justify-between gap-3 p-4"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1.5px solid var(--border-light)',
                    borderLeft: `5px solid ${mode.color}`
                  }}
                  onClick={() => startExam(mode.id, selectedSemester, selectedScope, selectedCount, selectedDifficulty)}
                >
                  <div>
                    <div className="flex items-center gap-2 font-bold text-base mb-1" style={{ color: 'var(--text-primary)' }}>
                      <span style={{ fontSize: '1.3rem' }}>{mode.icon}</span>
                      <span>{mode.title}</span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed">
                      {mode.desc}
                    </p>
                  </div>

                  <button className="btn-primary flex items-center justify-center gap-1 text-xs py-2 mt-2" style={{ backgroundColor: mode.color, borderColor: mode.color, color: 'white' }}>
                    <span>開考（套用：{semText}・{scopeText}）</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : examFinished ? (
        <div
          className="card flex flex-col items-center text-center gap-6 py-10"
          style={{ padding: '36px 24px', borderTop: '6px solid var(--accent-primary)' }}
        >
          <div
            style={{
              backgroundColor: 'var(--accent-warning-soft)',
              padding: '18px',
              borderRadius: '50%',
              color: 'var(--accent-warning)'
            }}
          >
            <Trophy size={50} />
          </div>

          <div>
            <span className="badge badge-success mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
              🎉 段考模擬完成！學習經驗值 +100 XP・星光金幣 +30 🪙
            </span>
            <h2 className="h1" style={{ margin: '8px 0', fontSize: '2.2rem' }}>
              總成績：{examQuestions.length > 0 ? Math.round((correctCount / examQuestions.length) * 100) : 100} 分
            </h2>
            <p className="text-secondary text-sm">
              範圍：【{semText}・{currentSubObj?.name || '綜合'}・{scopeText}】｜共 {examQuestions.length} 題，答對 {correctCount} 題，剩餘時間：{minutes} 分 {seconds} 秒。
            </p>
          </div>

          {/* Review Sheet */}
          <div className="w-full text-left mt-4">
            <h4 className="h4 mb-3" style={{ fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>📋 試卷逐題檢核、名師詳解與單元直達複習：</span>
            </h4>
            <div className="flex flex-col gap-3">
              {examQuestions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.answerIndex;
                return (
                  <div
                    key={i}
                    style={{
                      padding: '16px 20px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-lg)',
                      borderLeft: isCorrect ? '5px solid var(--accent-success)' : '5px solid var(--accent-error)',
                      border: '1px solid var(--border-light)',
                      borderLeftWidth: '5px'
                    }}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-2 font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                        <span>第 {i + 1} 題：{q.question}</span>
                        {isCorrect ? <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} /> : <XCircle size={16} style={{ color: 'var(--accent-error)' }} />}
                      </div>

                      {q.unitId && (
                        <button
                          onClick={() => navigate(`/lesson/${q.unitId}`)}
                          className="badge cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 text-xs py-1 px-2.5"
                          style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-primary)', border: '1px solid var(--accent-primary)' }}
                        >
                          <BookOpen size={12} />
                          <span>📖 複習本課教學：{q.unitTitle}</span>
                        </button>
                      )}
                    </div>

                    <div className="text-xs text-secondary mt-1">
                      <strong>你的答案：</strong> <span style={{ color: isCorrect ? 'var(--accent-success-text)' : '#ef4444', fontWeight: 600 }}>{userAns !== undefined ? q.options[userAns] : '未作答'}</span> | <strong style={{ color: 'var(--accent-success-text)' }}>正確答案：</strong> {q.options[q.answerIndex]}
                    </div>
                    {q.diagram && (
                      <div className="my-2 max-w-sm mx-auto">
                        <QuestionDiagram diagram={q.diagram} />
                      </div>
                    )}
                    <div className="text-xs text-secondary mt-2 p-2.5 rounded bg-bg-secondary" style={{ lineHeight: 1.7, border: '1px solid var(--border-light)' }}>
                      <strong style={{ color: 'var(--accent-primary)' }}>💡 觀念名師解析：</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <button className="btn-primary" onClick={() => startExam()}>
              <RotateCcw size={16} /> 再測驗一次同範圍新題
            </button>
            {correctCount < examQuestions.length && (
              <Link to="/mistakes" className="btn-accent flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 前往錯題本複習
              </Link>
            )}
            <button className="btn-outline" onClick={() => setExamStarted(false)}>
              更換學期 / 科目 / 期中期末範圍
            </button>
          </div>
        </div>
      ) : (
        /* Exam In Progress */
        <div className="flex flex-col gap-5">
          {/* Top Timer Bar */}
          <div className="card flex justify-between items-center flex-wrap gap-3" style={{ padding: '16px 20px' }}>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge badge-accent font-black">
                題目 {currentIdx + 1} / {examQuestions.length}
              </span>
              <span className="badge text-xs font-bold bg-blue-500/15 text-blue-600">
                {semText}
              </span>
              <span className="badge text-xs font-bold bg-amber-500/15 text-amber-600">
                {scopeText}
              </span>
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                {currentSubObj?.name || '全科綜合模擬考'}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setExamStarted(false)}
                className="text-xs text-secondary hover:text-primary font-bold cursor-pointer"
                style={{ background: 'none', border: 'none' }}
              >
                重選範圍
              </button>
              <div
                className="flex items-center gap-1.5 font-bold"
                style={{
                  color: timeLeft < 120 ? 'var(--accent-error)' : 'var(--accent-primary)',
                  fontSize: '1.15rem'
                }}
              >
                <Timer size={20} />
                <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          {/* Question Box */}
          {examQuestions[currentIdx] && (
            <div className="card flex flex-col gap-6" style={{ padding: '32px' }}>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="badge badge-secondary text-xs">
                    {examQuestions[currentIdx].unitTitle || '單元考題'}
                  </span>
                  {examQuestions[currentIdx].unitSemester && (
                    <span className="badge text-[11px] font-bold bg-indigo-500/15 text-indigo-600">
                      {examQuestions[currentIdx].unitSemester === '6A' ? '6上' : '6下'}・{examQuestions[currentIdx].unitTerm === 'midterm' ? '期中' : '期末'}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => speechEngine.speak(examQuestions[currentIdx].question)}
                  className="flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors cursor-pointer"
                  title="朗讀題目"
                >
                  <Volume2 size={15} /> 朗讀
                </button>
              </div>

              {examQuestions[currentIdx]?.isMockChallenge && (
                <div className="-mt-3 mb-1">
                  <span
                    className="badge inline-flex items-center gap-1.5 py-1 px-3"
                    style={{
                      backgroundColor: 'rgba(255, 149, 0, 0.15)',
                      color: 'var(--apple-orange)',
                      border: '1px solid rgba(255, 149, 0, 0.35)',
                      fontWeight: 700,
                      fontSize: '0.8rem'
                    }}
                  >
                    <Flame size={14} />
                    <span>{examQuestions[currentIdx].challengeBadge || '🔥 單元模擬挑戰・壓軸真題'}</span>
                  </span>
                </div>
              )}

              <h2 className="h3" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
                {currentIdx + 1}. {examQuestions[currentIdx].question}
              </h2>

              {examQuestions[currentIdx]?.diagram && (
                <QuestionDiagram diagram={examQuestions[currentIdx].diagram} />
              )}

              <div className="flex flex-col gap-3">
                {examQuestions[currentIdx].options.map((opt, optIdx) => {
                  const isSelected = answers[currentIdx] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      className="btn-outline flex items-center justify-between"
                      style={{
                        textAlign: 'left',
                        padding: '16px 20px',
                        borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-strong)',
                        backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-secondary)',
                        color: isSelected ? 'var(--accent-text)' : 'var(--text-primary)',
                        fontWeight: isSelected ? 700 : 400,
                        fontSize: '0.98rem'
                      }}
                      onClick={() => handleSelectAnswer(optIdx)}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                            color: isSelected ? 'white' : 'var(--text-secondary)',
                            fontSize: '0.8rem',
                            fontWeight: 700
                          }}
                        >
                          {['A', 'B', 'C', 'D'][optIdx]}
                        </span>
                        <span>{opt}</span>
                      </div>
                      {isSelected && <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Grid */}
              <div className="flex justify-between items-center pt-4 border-t flex-wrap gap-3" style={{ borderTop: '1px solid var(--border-light)' }}>
                <button
                  className="btn-outline text-sm"
                  disabled={currentIdx === 0}
                  style={{ opacity: currentIdx === 0 ? 0.35 : 1 }}
                  onClick={() => setCurrentIdx(c => c - 1)}
                >
                  ← 上一題
                </button>

                <div className="flex gap-1.5 flex-wrap">
                  {examQuestions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        backgroundColor: currentIdx === i ? 'var(--accent-primary)' : answers[i] !== undefined ? 'var(--accent-success-soft)' : 'var(--bg-tertiary)',
                        color: currentIdx === i ? 'var(--text-inverse)' : answers[i] !== undefined ? 'var(--accent-success-text)' : 'var(--text-secondary)',
                        border: currentIdx === i ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)'
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>

                {currentIdx < examQuestions.length - 1 ? (
                  <button className="btn-primary text-sm" onClick={() => setCurrentIdx(c => c + 1)}>
                    下一題 →
                  </button>
                ) : (
                  <button
                    className="btn-primary text-sm"
                    style={{ backgroundColor: 'var(--accent-success)', borderColor: 'var(--accent-success)' }}
                    onClick={finishExam}
                  >
                    交卷計分
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Duolingo Modal */}
      <DuolingoLessonModal
        isOpen={!!duolingoTargetUnit}
        onClose={() => setDuolingoTargetUnit(null)}
        unit={duolingoTargetUnit}
        subject={currentSubObj}
      />
    </div>
  );
};

export default MockExamPage;
