import { useState, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  RotateCcw,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGamification } from '../../context/GamificationContext';
import {
  generateDuolingoExercisesForUnit,
  deterministicShuffle,
  getUnitCompleteCatalog
} from '../../data/curriculumCatalog108';
import { quizData } from '../../data/quizData';
import { knowledgePointsData } from '../../data/knowledgePoints';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

const MAX_RETRY = 2;

const STAGE_META = {
  lesson: {
    id: 'lesson',
    title: '⭐ 新觀念入門',
    subtitle: '先看 3 條核心重點，再完成 5 題基礎觀念練習',
    xpBase: 30,
    xpMultiplier: 1,
    hasIntro: true
  },
  practice: {
    id: 'practice',
    title: '🏋️ 進階混合練習',
    subtitle: '步驟排序・是非快判・觀念配對與填空特訓',
    xpBase: 35,
    xpMultiplier: 1.2,
    hasIntro: false
  },
  challenge: {
    id: 'challenge',
    title: '🏆 單元王牌挑戰',
    subtitle: '全版本課本與參考書壓軸綜合挑戰（XP × 1.5）',
    xpBase: 50,
    xpMultiplier: 1.5,
    hasIntro: false
  },
  all: {
    id: 'all',
    title: '🌟 全題型闖關特訓',
    subtitle: '完整演練本課 6 大互動題型',
    xpBase: 45,
    xpMultiplier: 1.25,
    hasIntro: true
  }
};

const DuolingoLessonModal = ({
  isOpen,
  onClose,
  unit,
  subject,
  initialStage = 'lesson' // 'lesson' | 'practice' | 'challenge' | 'all' | 'guide'
}) => {
  const {
    unitCrowns = {},
    earnUnitCrown,
    todayXp = 0,
    dailyXpGoal = 50,
    activePetTemplate
  } = useGamification();

  const [stageMode, setStageMode] = useState(initialStage === 'guide' ? 'lesson' : initialStage);
  const [phase, setPhase] = useState('intro'); // 'intro' | 'answer' | 'feedback' | 'done'
  const [queue, setQueue] = useState([]);
  const [pos, setPos] = useState(0);
  const [retryMap, setRetryMap] = useState({});

  // Current exercise interaction states
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [selectedLeftPair, setSelectedLeftPair] = useState(null);
  const [selectedRightPair, setSelectedRightPair] = useState(null);
  const [wrongPairFlash, setWrongPairFlash] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null); // null | { isCorrect, message, correctText, detail, isRetryQueued }
  const [showHint, setShowHint] = useState(false);

  // Session stats
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [firstTryCorrect, setFirstTryCorrect] = useState(0);
  const startTimeRef = useRef(Date.now());
  const [elapsedSec, setElapsedSec] = useState(1);

  const catalog = useMemo(() => (unit ? unit.catalog || getUnitCompleteCatalog(unit) : null), [unit]);
  const unitKps = useMemo(
    () => (unit ? knowledgePointsData.filter((k) => k.unitId === unit.id) : []),
    [unit]
  );

  // Generate full pool of exercises for this unit
  const allExercises = useMemo(() => {
    if (!unit) return [];
    const targetQuizId = unit.linkedUnitId || unit.id;
    const uQuestions = quizData[targetQuizId] || [];
    return generateDuolingoExercisesForUnit(unit, uQuestions, knowledgePointsData);
  }, [unit]);

  // Select tailored exercise queue for the chosen stage (Lesson 1 / Practice 2 / Challenge 3 / All)
  const buildStageQueue = (mode, pool) => {
    if (!pool || pool.length === 0) return [];
    const mcqs = pool.filter((e) => e.type === 'mcq');
    const tfs = pool.filter((e) => e.type === 'true_false');
    const orders = pool.filter((e) => e.type === 'word_bank');
    const matches = pool.filter((e) => e.type === 'matching');
    const clozes = pool.filter((e) => e.type === 'cloze');
    const listens = pool.filter((e) => e.type === 'listening');

    if (mode === 'lesson') {
      // 第 1 關（新觀念）：3 題選擇題 + 1 題是非題 + 1 題配對題 = 5 題精選入門
      return [
        ...mcqs.slice(0, 2),
        ...tfs.slice(0, 1),
        ...matches.slice(0, 1),
        ...mcqs.slice(2, 3)
      ].filter(Boolean);
    }
    if (mode === 'practice') {
      // 第 2 關（進階練習）：步驟排序 + 重點填空 + 是非題 + 聽力題 + 進階選擇題 = 5~6 題
      return [
        ...orders.slice(0, 1),
        ...clozes.slice(0, 1),
        ...tfs.slice(1, 2),
        ...listens.slice(0, 1),
        ...mcqs.slice(3, 5)
      ].filter(Boolean);
    }
    if (mode === 'challenge') {
      // 第 4 關（單元挑戰王）：綜合 7 題高強度實戰
      return [
        ...mcqs.slice(0, 3),
        ...orders.slice(0, 1),
        ...matches.slice(0, 1),
        ...clozes.slice(0, 1),
        ...tfs.slice(0, 1),
        ...mcqs.slice(3, 5)
      ]
        .filter(Boolean)
        .slice(0, 7);
    }
    // 'all': 6 大題型完整巡禮
    return [
      ...mcqs.slice(0, 2),
      ...tfs.slice(0, 1),
      ...orders.slice(0, 1),
      ...matches.slice(0, 1),
      ...clozes.slice(0, 1),
      ...listens.slice(0, 1)
    ].filter(Boolean);
  };

  const resetInputs = () => {
    setSelectedTiles([]);
    setMatchedIds([]);
    setSelectedLeftPair(null);
    setSelectedRightPair(null);
    setWrongPairFlash(false);
    setSelectedOption(null);
    setFeedbackState(null);
    setShowHint(false);
  };

  // Initialize session when opened or when stage changes
  useEffect(() => {
    if (isOpen && unit && allExercises.length > 0) {
      const effectiveMode = initialStage === 'guide' ? 'lesson' : initialStage || 'lesson';
      setStageMode(effectiveMode);
      const q = buildStageQueue(effectiveMode, allExercises);
      setQueue(q.length > 0 ? q : allExercises.slice(0, 6));
      setPos(0);
      setRetryMap({});
      resetInputs();
      setCombo(0);
      setMaxCombo(0);
      setFirstTryCorrect(0);
      startTimeRef.current = Date.now();
      const meta = STAGE_META[effectiveMode] || STAGE_META.lesson;
      setPhase(initialStage === 'guide' || meta.hasIntro ? 'intro' : 'answer');
    }
  }, [isOpen, unit, initialStage, allExercises]);

  const handleSwitchStage = (newMode) => {
    setStageMode(newMode);
    const q = buildStageQueue(newMode, allExercises);
    setQueue(q.length > 0 ? q : allExercises.slice(0, 6));
    setPos(0);
    setRetryMap({});
    resetInputs();
    setCombo(0);
    setMaxCombo(0);
    setFirstTryCorrect(0);
    startTimeRef.current = Date.now();
    setPhase(STAGE_META[newMode]?.hasIntro ? 'intro' : 'answer');
    playSound('ios_tap');
  };

  const currentEx = queue[pos];
  const baseTotal = useMemo(
    () => buildStageQueue(stageMode, allExercises).length || 5,
    [stageMode, allExercises]
  );

  // Shuffled left and right columns for Matching exercise so right column is never a trivial mirror
  const shuffledLeftPairs = useMemo(() => {
    if (!currentEx || currentEx.type !== 'matching') return [];
    return deterministicShuffle(currentEx.pairs || [], `${currentEx.id}-left-${pos}`);
  }, [currentEx, pos]);

  const shuffledRightPairs = useMemo(() => {
    if (!currentEx || currentEx.type !== 'matching') return [];
    return deterministicShuffle(currentEx.pairs || [], `${currentEx.id}-right-${pos}`);
  }, [currentEx, pos]);

  // Can Check button be clicked?
  const isCheckReady = () => {
    if (!currentEx) return false;
    if (currentEx.type === 'word_bank') {
      return selectedTiles.length === (currentEx.correctOrder?.length || 1);
    }
    if (currentEx.type === 'matching') {
      return matchedIds.length === (currentEx.pairs?.length || 4);
    }
    if (currentEx.type === 'true_false') {
      return selectedOption !== null;
    }
    return !!selectedOption;
  };

  const commitResult = (isCorrect, correctText, explanationText) => {
    const isFirstTry = pos < baseTotal;
    if (isCorrect) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setMaxCombo((prev) => Math.max(prev, nextCombo));
      if (isFirstTry) {
        setFirstTryCorrect((prev) => prev + 1);
      }
      playSound('correct');
      triggerHaptic('medium');
      const praises = [
        '答對了！觀念超清晰！',
        '太神啦！一擊必殺！',
        '完全正確！繼續保持連勝！',
        '無懈可擊！離金冠更近一步！'
      ];
      setFeedbackState({
        isCorrect: true,
        message: nextCombo >= 2 ? `🔥 連續答對 ${nextCombo} 題！` : praises[pos % praises.length],
        correctText,
        detail: explanationText,
        isRetryQueued: false
      });
    } else {
      setCombo(0);
      playSound('wrong');
      triggerHaptic('heavy');
      const prevRetries = retryMap[currentEx.id] || 0;
      const willRetry = prevRetries < MAX_RETRY;
      if (willRetry) {
        setRetryMap((m) => ({ ...m, [currentEx.id]: prevRetries + 1 }));
        setQueue((q) => [...q, currentEx]);
      }
      setFeedbackState({
        isCorrect: false,
        message: '別氣餒！看清楚正確答案：',
        correctText,
        detail: explanationText,
        isRetryQueued: willRetry
      });
    }
    setPhase('feedback');
  };

  const handleCheckAnswer = () => {
    if (phase !== 'answer' || !currentEx || !isCheckReady()) return;

    if (currentEx.type === 'word_bank') {
      const sep = currentEx.joinSeparator || ' ➔ ';
      const isOk =
        selectedTiles.length === currentEx.correctOrder.length &&
        selectedTiles.every((t, i) => t.text === currentEx.correctOrder[i]);
      commitResult(isOk, currentEx.correctOrder.join(sep), currentEx.explanation);
    } else if (
      currentEx.type === 'mcq' ||
      currentEx.type === 'cloze' ||
      currentEx.type === 'listening'
    ) {
      const isOk = selectedOption === currentEx.correctAnswer;
      commitResult(isOk, currentEx.correctAnswer, currentEx.explanation);
    } else if (currentEx.type === 'true_false') {
      const isOk = selectedOption === currentEx.correctBool;
      commitResult(
        isOk,
        currentEx.correctBool ? '⭕ 觀念正確' : '❌ 觀念有誤',
        currentEx.explanation
      );
    } else if (currentEx.type === 'matching') {
      commitResult(true, '4 組核心概念全數配對完成', currentEx.explanation);
    }
  };

  const handleNextStep = () => {
    if (pos + 1 < queue.length) {
      setPos((p) => p + 1);
      resetInputs();
      setPhase('answer');
      playSound('ios_tap');
    } else {
      // Completed entire lesson!
      const sec = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
      setElapsedSec(sec);
      const meta = STAGE_META[stageMode] || STAGE_META.lesson;
      const xpEarned = Math.round((meta.xpBase + maxCombo * 3) * meta.xpMultiplier);
      const coinsEarned = 20;
      earnUnitCrown(unit.id, xpEarned, coinsEarned);
      setPhase('done');
      playSound('levelup');
      confetti({
        particleCount: 100,
        spread: 75,
        origin: { y: 0.6 }
      });
      const currentCrown = unitCrowns[unit.id] || 0;
      dispatchDynamicIsland({
        title: `👑 皇冠升等！(${Math.min(5, currentCrown + 1)}/5)`,
        subtitle: `${unit.badge || unit.title} 完成 +${xpEarned} XP`,
        icon: '🦉'
      });
    }
  };

  // Handle Matching Pairs selection
  const handleSelectPairItem = (side, pairObj) => {
    if (phase !== 'answer' || matchedIds.includes(pairObj.id)) return;
    playSound('ios_tap');
    triggerHaptic('light');

    if (side === 'left') {
      setSelectedLeftPair(pairObj);
      if (selectedRightPair) {
        if (selectedRightPair.id === pairObj.id) {
          const nextMatched = [...matchedIds, pairObj.id];
          setMatchedIds(nextMatched);
          setSelectedLeftPair(null);
          setSelectedRightPair(null);
          playSound('correct');
          if (nextMatched.length === currentEx.pairs.length) {
            commitResult(true, '全部配對正確', currentEx.explanation);
          }
        } else {
          setWrongPairFlash(true);
          playSound('wrong');
          setTimeout(() => {
            setSelectedLeftPair(null);
            setSelectedRightPair(null);
            setWrongPairFlash(false);
          }, 420);
        }
      }
    } else {
      setSelectedRightPair(pairObj);
      if (selectedLeftPair) {
        if (selectedLeftPair.id === pairObj.id) {
          const nextMatched = [...matchedIds, pairObj.id];
          setMatchedIds(nextMatched);
          setSelectedLeftPair(null);
          setSelectedRightPair(null);
          playSound('correct');
          if (nextMatched.length === currentEx.pairs.length) {
            commitResult(true, '全部配對正確', currentEx.explanation);
          }
        } else {
          setWrongPairFlash(true);
          playSound('wrong');
          setTimeout(() => {
            setSelectedLeftPair(null);
            setSelectedRightPair(null);
            setWrongPairFlash(false);
          }, 420);
        }
      }
    }
  };

  // Keyboard shortcuts (like Duolingo & Arch's LessonPlayer: 1-4 for options, Enter to check/continue, Esc to close)
  useEffect(() => {
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (phase === 'intro') {
          setPhase('answer');
          playSound('ios_tap');
        } else if (phase === 'answer' && isCheckReady()) {
          handleCheckAnswer();
        } else if (phase === 'feedback') {
          handleNextStep();
        } else if (phase === 'done') {
          onClose();
        }
        return;
      }
      // Number keys 1..4 for quick option selection
      if (phase === 'answer' && currentEx) {
        if (
          (currentEx.type === 'mcq' ||
            currentEx.type === 'cloze' ||
            currentEx.type === 'listening') &&
          ['1', '2', '3', '4'].includes(e.key)
        ) {
          const idx = Number(e.key) - 1;
          if (currentEx.options && currentEx.options[idx] !== undefined) {
            setSelectedOption(currentEx.options[idx]);
            playSound('ios_tap');
          }
        } else if (currentEx.type === 'true_false' && (e.key === '1' || e.key === '2')) {
          setSelectedOption(e.key === '1');
          playSound('ios_tap');
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  if (!isOpen || !unit || queue.length === 0) return null;

  const progressPct =
    phase === 'intro'
      ? 4
      : phase === 'done'
      ? 100
      : Math.min(100, Math.round(((pos + (phase === 'feedback' ? 1 : 0)) / queue.length) * 100));

  const currentCrown = unitCrowns[unit.id] || 0;
  const stageInfo = STAGE_META[stageMode] || STAGE_META.lesson;
  const isRetrying = pos >= baseTotal;

  // Prepare Guidebook points for Intro phase
  const guidePoints = [
    ...(unitKps.slice(0, 3).map((kp) => ({
      title: kp.title,
      body: (kp.definition || kp.formulaOrRule || '').replace(/\$/g, ''),
      tip: (kp.trapAlert || '').replace(/⚠️/g, '')
    })) || [])
  ];
  if (guidePoints.length === 0 && catalog) {
    (unit.keyConcepts || []).slice(0, 3).forEach((kc, i) => {
      guidePoints.push({
        title: `核心觀念 ${i + 1}：${kc}`,
        body:
          i === 0
            ? catalog.textbooks.kangHsuan.focus
            : i === 1
            ? catalog.textbooks.nanI.focus
            : catalog.textbooks.hanLin.focus,
        tip: i === 0 ? catalog.quickRescue?.replace(/\$/g, '') : ''
      });
    });
  }

  const modalNode = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* ============================================================ */}
      {/* 🔝 1. Clean Duolingo Top Bar (Close X + Thick Green Progress Bar + Combo Flame) */}
      {/* ============================================================ */}
      <div
        className="shrink-0 border-b"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-light)'
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-3.5 flex items-center gap-3 sm:gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-secondary hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            style={{ border: 'none', background: 'transparent' }}
            aria-label="結束本課"
            title="結束本課 (Esc)"
          >
            <X size={24} />
          </button>

          {/* Thick Duolingo 3D Progress Bar with Inner White Shine */}
          <div
            className="flex-1 h-4 rounded-full overflow-hidden p-0.5"
            style={{ backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div
              style={{
                width: `${progressPct}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #58cc02 0%, #22c55e 100%)',
                borderRadius: '999px',
                transition: 'width 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '2px',
                  left: '8px',
                  right: '8px',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.38)',
                  borderRadius: '999px'
                }}
              />
            </div>
          </div>

          {/* Stage Selector Pills (Compact) */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { id: 'lesson', label: '⭐ 新觀念' },
              { id: 'practice', label: '🏋️ 進階練習' },
              { id: 'challenge', label: '🏆 單元挑戰' }
            ].map((st) => {
              const active = stageMode === st.id;
              return (
                <button
                  key={st.id}
                  onClick={() => handleSwitchStage(st.id)}
                  className="px-2.5 py-1 rounded-xl text-xs font-black cursor-pointer transition-all"
                  style={{
                    backgroundColor: active ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
                    color: active ? '#16a34a' : 'var(--text-secondary)',
                    border: active ? '1.5px solid #22c55e' : '1px solid transparent'
                  }}
                >
                  {st.label}
                </button>
              );
            })}
          </div>

          {/* Guidebook Quick Toggle Button */}
          {phase !== 'done' && (
            <button
              onClick={() => setPhase(phase === 'intro' ? 'answer' : 'intro')}
              className="px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer transition-all"
              style={{
                backgroundColor: phase === 'intro' ? '#3b82f6' : 'var(--bg-tertiary)',
                color: phase === 'intro' ? '#ffffff' : 'var(--text-primary)',
                border: '1.5px solid var(--border-strong)'
              }}
              title="切換重點速覽小抄"
            >
              <BookOpen size={14} />
              <span>{phase === 'intro' ? '開始答題' : '重點小抄'}</span>
            </button>
          )}

          {/* Combo Streak Flame */}
          <div
            className={`flex items-center gap-1 font-black text-sm px-2.5 py-1 rounded-full ${
              combo >= 2
                ? 'bg-amber-500/15 text-amber-500 scale-105'
                : 'text-tertiary'
            } transition-transform`}
          >
            <Flame size={18} className={combo >= 2 ? 'fill-amber-500 text-amber-500' : ''} />
            <span>{combo}</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 🎯 2. Main Duolingo Stage Body (Intro / Exercise / Celebration) */}
      {/* ============================================================ */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          {/* -------------------------------------------------------- */}
          {/* PHASE 0: 📖 INTRO (單元重點速覽卡片 — 讀完再答題，不會莫名其妙！) */}
          {/* -------------------------------------------------------- */}
          {phase === 'intro' && (
            <div className="space-y-5 animate-fade-in">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white shadow-md"
                  style={{
                    background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                    boxShadow: '0 4px 0 #15803d'
                  }}
                >
                  {subject?.emoji || '🦉'}
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {catalog?.semesterLabel}・{stageInfo.title}・重點速覽
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-primary m-0 mt-0.5">
                    {unit.title}
                  </h2>
                  <p className="text-xs text-secondary m-0 mt-0.5">
                    先花 20 秒瀏覽以下核心觀念，等等作答就會超順暢！
                  </p>
                </div>
              </div>

              {/* 3 Crisp Key Takeaway Cards */}
              <div className="space-y-3">
                {guidePoints.map((pt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border-2"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-light)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0 mt-0.5"
                        style={{ backgroundColor: '#16a34a' }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="font-black text-sm sm:text-base text-primary">
                          {pt.title}
                        </div>
                        <p className="text-xs sm:text-sm text-secondary mt-1 mb-0 leading-relaxed">
                          {pt.body}
                        </p>
                        {pt.tip && (
                          <div
                            className="mt-2 px-3 py-1.5 rounded-xl text-xs font-bold"
                            style={{
                              backgroundColor: 'rgba(245, 158, 11, 0.12)',
                              color: '#d97706'
                            }}
                          >
                            💡 考前防雷：{pt.tip}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Rescue Formula Banner */}
              {catalog?.quickRescue && (
                <div
                  className="p-4 rounded-2xl border-2 flex items-start gap-3"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    borderColor: 'rgba(34, 197, 94, 0.35)'
                  }}
                >
                  <span className="text-2xl">⚡</span>
                  <div>
                    <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                      本課 5 秒破題黃金口訣（康軒 / 南一 / 翰林通用）
                    </div>
                    <div className="text-sm font-black text-primary mt-0.5 leading-relaxed">
                      {catalog.quickRescue.replace(/\$/g, '')}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* -------------------------------------------------------- */}
          {/* PHASE 1 & 2: 🎯 QUESTION STAGE (Clean Duolingo Exercise View) */}
          {/* -------------------------------------------------------- */}
          {(phase === 'answer' || phase === 'feedback') && currentEx && (
            <div className="space-y-6 animate-fade-in">
              {/* Top Pill Row: Question Type + Retry Badge + Question Counter */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-black"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.14)',
                      color: '#16a34a'
                    }}
                  >
                    {currentEx.typeLabel}
                  </span>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: 'var(--bg-tertiary)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {currentEx.sourceTag}
                  </span>
                  {isRetrying && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-600 dark:text-amber-400">
                      🔄 錯題重練（加深印象）
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setShowHint((h) => !h);
                      playSound('ios_tap');
                    }}
                    className="px-3 py-1 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer transition-all"
                    style={{
                      backgroundColor: showHint
                        ? 'rgba(245, 158, 11, 0.2)'
                        : 'var(--bg-tertiary)',
                      color: showHint ? '#d97706' : 'var(--text-secondary)',
                      border: '1px solid var(--border-strong)'
                    }}
                  >
                    <Lightbulb size={13} />
                    <span>{showHint ? '隱藏提示' : '提示'}</span>
                  </button>
                  <span className="text-xs font-black text-tertiary">
                    第 {pos + 1} / {queue.length} 題
                  </span>
                </div>
              </div>

              {/* Optional Hint Box */}
              {showHint && (
                <div
                  className="p-3.5 rounded-2xl text-xs sm:text-sm animate-fade-in"
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    border: '1.5px solid rgba(245, 158, 11, 0.4)'
                  }}
                >
                  <span className="font-black text-amber-600 dark:text-amber-400">
                    💡 解題錦囊：
                  </span>
                  <span className="text-primary font-semibold ml-1">
                    {catalog?.quickRescue?.replace(/\$/g, '') || currentEx.explanation}
                  </span>
                </div>
              )}

              {/* Mascot Character + Clear Question Prompt Bubble */}
              <div className="flex items-start gap-3.5">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0 border-2"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-strong)',
                    boxShadow: '0 4px 0 var(--border-strong)'
                  }}
                >
                  {activePetTemplate?.emoji || subject?.emoji || '🦉'}
                </div>

                <div
                  className="flex-1 p-4 rounded-2xl border-2 relative"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-strong)'
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-base sm:text-xl font-black text-primary m-0 leading-snug">
                      {currentEx.prompt}
                    </h2>
                    <button
                      onClick={() =>
                        speechEngine.speak(
                          currentEx.audioText || currentEx.statement || currentEx.prompt
                        )
                      }
                      className="p-2 rounded-xl bg-sky-500/15 text-sky-600 dark:text-sky-400 hover:bg-sky-500/25 shrink-0 cursor-pointer"
                      style={{ border: 'none' }}
                      title="朗讀題目"
                    >
                      <Volume2 size={20} />
                    </button>
                  </div>
                  {currentEx.targetHint && (
                    <div className="text-xs text-secondary mt-1.5 font-semibold">
                      {currentEx.targetHint}
                    </div>
                  )}
                </div>
              </div>

              {/* ======================================================== */}
              {/* TYPE 1: 🧩 STEP / WORD ORDER BUILDER (零斷詞・完整步驟排序) */}
              {/* ======================================================== */}
              {currentEx.type === 'word_bank' && (
                <div className="space-y-4">
                  {/* Placed Steps Box */}
                  <div
                    className="min-h-[108px] p-4 rounded-2xl flex flex-col gap-2 justify-center"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '2px dashed var(--border-strong)'
                    }}
                  >
                    {selectedTiles.length === 0 ? (
                      <div className="text-center text-xs sm:text-sm text-tertiary font-bold py-4">
                        👇 請依正確先後順序，點擊下方的步驟或單字卡放到這裡（已選 0 /{' '}
                        {currentEx.correctOrder.length}）
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {selectedTiles.map((tile, idx) => {
                          const locked = phase === 'feedback';
                          const isTileRight =
                            locked && currentEx.correctOrder[idx] === tile.text;
                          return (
                            <button
                              key={tile.id}
                              disabled={locked}
                              onClick={() => {
                                playSound('ios_tap');
                                setSelectedTiles((prev) =>
                                  prev.filter((t) => t.id !== tile.id)
                                );
                              }}
                              className="px-3.5 py-2.5 rounded-xl font-black text-xs sm:text-sm text-left flex items-center gap-2 cursor-pointer transition-all"
                              style={{
                                backgroundColor: locked
                                  ? isTileRight
                                    ? 'rgba(16, 185, 129, 0.16)'
                                    : 'rgba(239, 68, 68, 0.16)'
                                  : 'rgba(59, 130, 246, 0.14)',
                                color: locked
                                  ? isTileRight
                                    ? '#059669'
                                    : '#dc2626'
                                  : '#2563eb',
                                border: locked
                                  ? isTileRight
                                    ? '2px solid #10b981'
                                    : '2px solid #ef4444'
                                  : '2px solid #3b82f6',
                                boxShadow: locked ? 'none' : '0 3px 0 #2563eb'
                              }}
                            >
                              <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <span>{tile.text}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Shuffled Tile Bank */}
                  <div className="flex flex-wrap gap-2.5">
                    {currentEx.allTiles.map((tile) => {
                      const isUsed = selectedTiles.some((t) => t.id === tile.id);
                      const isFull =
                        selectedTiles.length >= currentEx.correctOrder.length;
                      return (
                        <button
                          key={tile.id}
                          disabled={isUsed || isFull || phase === 'feedback'}
                          onClick={() => {
                            playSound('ios_tap');
                            triggerHaptic('light');
                            setSelectedTiles((prev) => [...prev, tile]);
                          }}
                          className="px-4 py-3 rounded-2xl font-bold text-xs sm:text-sm text-left transition-all cursor-pointer"
                          style={{
                            backgroundColor: isUsed
                              ? 'var(--bg-tertiary)'
                              : 'var(--bg-secondary)',
                            color: isUsed ? 'transparent' : 'var(--text-primary)',
                            border: '2px solid var(--border-strong)',
                            boxShadow: isUsed ? 'none' : '0 4px 0 var(--border-strong)',
                            opacity: isUsed ? 0.35 : 1
                          }}
                        >
                          {tile.text}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TYPE 2: 🔗 MATCHING PAIRS (兩欄獨立洗牌配對消消樂) */}
              {/* ======================================================== */}
              {currentEx.type === 'matching' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-2.5">
                    <div className="text-xs font-black text-secondary uppercase tracking-wider">
                      📌 左欄：題目與概念（點選一項）
                    </div>
                    {shuffledLeftPairs.map((p) => {
                      const isMatched = matchedIds.includes(p.id);
                      const isSelected = selectedLeftPair?.id === p.id;
                      return (
                        <button
                          key={`left-${p.id}`}
                          disabled={isMatched || phase === 'feedback'}
                          onClick={() => handleSelectPairItem('left', p)}
                          className="w-full p-3.5 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all cursor-pointer"
                          style={{
                            backgroundColor: isMatched
                              ? 'rgba(16, 185, 129, 0.14)'
                              : isSelected
                              ? wrongPairFlash
                                ? 'rgba(239, 68, 68, 0.18)'
                                : 'rgba(59, 130, 246, 0.16)'
                              : 'var(--bg-secondary)',
                            border: isMatched
                              ? '2px solid #10b981'
                              : isSelected
                              ? wrongPairFlash
                                ? '2px solid #ef4444'
                                : '2px solid #3b82f6'
                              : '2px solid var(--border-strong)',
                            color: isMatched ? '#059669' : 'var(--text-primary)',
                            opacity: isMatched ? 0.55 : 1,
                            boxShadow: isMatched ? 'none' : '0 4px 0 var(--border-strong)'
                          }}
                        >
                          {isMatched ? '✅ ' : ''}
                          {p.left}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-2.5">
                    <div className="text-xs font-black text-secondary uppercase tracking-wider">
                      🎯 右欄：對應答案與定義（點選配對）
                    </div>
                    {shuffledRightPairs.map((p) => {
                      const isMatched = matchedIds.includes(p.id);
                      const isSelected = selectedRightPair?.id === p.id;
                      return (
                        <button
                          key={`right-${p.id}`}
                          disabled={isMatched || phase === 'feedback'}
                          onClick={() => handleSelectPairItem('right', p)}
                          className="w-full p-3.5 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all cursor-pointer"
                          style={{
                            backgroundColor: isMatched
                              ? 'rgba(16, 185, 129, 0.14)'
                              : isSelected
                              ? wrongPairFlash
                                ? 'rgba(239, 68, 68, 0.18)'
                                : 'rgba(59, 130, 246, 0.16)'
                              : 'var(--bg-secondary)',
                            border: isMatched
                              ? '2px solid #10b981'
                              : isSelected
                              ? wrongPairFlash
                                ? '2px solid #ef4444'
                                : '2px solid #3b82f6'
                              : '2px solid var(--border-strong)',
                            color: isMatched ? '#059669' : 'var(--text-primary)',
                            opacity: isMatched ? 0.55 : 1,
                            boxShadow: isMatched ? 'none' : '0 4px 0 var(--border-strong)'
                          }}
                        >
                          {isMatched ? '✅ ' : ''}
                          {p.right}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TYPE 3: ✍️ CLOZE FILL-IN-THE-BLANK */}
              {/* ======================================================== */}
              {currentEx.type === 'cloze' && (
                <div className="space-y-4">
                  <div
                    className="p-4 sm:p-5 rounded-2xl text-sm sm:text-base font-bold leading-relaxed"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '2px solid var(--border-strong)'
                    }}
                  >
                    <span>{currentEx.sentenceBefore}</span>
                    <span
                      className="inline-block px-3 py-1 mx-1 rounded-xl font-black"
                      style={{
                        backgroundColor: selectedOption
                          ? '#2563eb'
                          : 'rgba(59, 130, 246, 0.14)',
                        color: selectedOption ? '#ffffff' : '#2563eb',
                        border: '1.5px dashed #3b82f6'
                      }}
                    >
                      {selectedOption || '＿＿請點選下方選項＿＿'}
                    </span>
                    <span>{currentEx.sentenceAfter}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentEx.options.map((opt, idx) => {
                      const isSel = selectedOption === opt;
                      const locked = phase === 'feedback';
                      const isRightOpt = opt === currentEx.correctAnswer;
                      return (
                        <button
                          key={idx}
                          disabled={locked}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedOption(opt);
                          }}
                          className="p-4 rounded-2xl text-left font-bold text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer"
                          style={{
                            backgroundColor: locked
                              ? isRightOpt
                                ? 'rgba(16, 185, 129, 0.16)'
                                : isSel
                                ? 'rgba(239, 68, 68, 0.16)'
                                : 'var(--bg-secondary)'
                              : isSel
                              ? 'rgba(59, 130, 246, 0.16)'
                              : 'var(--bg-secondary)',
                            border: locked
                              ? isRightOpt
                                ? '2.5px solid #10b981'
                                : isSel
                                ? '2.5px solid #ef4444'
                                : '2px solid var(--border-strong)'
                              : isSel
                              ? '2.5px solid #2563eb'
                              : '2px solid var(--border-strong)',
                            boxShadow: locked ? 'none' : '0 4px 0 var(--border-strong)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs shrink-0"
                            style={{
                              backgroundColor: isSel ? '#2563eb' : 'var(--bg-tertiary)',
                              color: isSel ? '#ffffff' : 'var(--text-secondary)'
                            }}
                          >
                            {idx + 1}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TYPE 4: ⚡ TRUE / FALSE (真偽雙向概念是非快判) */}
              {/* ======================================================== */}
              {currentEx.type === 'true_false' && (
                <div className="space-y-4">
                  <div
                    className="p-5 rounded-2xl font-bold text-sm sm:text-base leading-relaxed"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: '2px solid var(--border-strong)'
                    }}
                  >
                    {currentEx.statement}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: true, label: '⭕ 觀念正確', keyHint: '按 1', color: '#10b981' },
                      { val: false, label: '❌ 觀念有誤', keyHint: '按 2', color: '#ef4444' }
                    ].map((btn) => {
                      const isSel = selectedOption === btn.val;
                      const locked = phase === 'feedback';
                      const isRight = currentEx.correctBool === btn.val;
                      return (
                        <button
                          key={String(btn.val)}
                          disabled={locked}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedOption(btn.val);
                          }}
                          className="p-5 rounded-2xl font-black text-base sm:text-lg transition-all cursor-pointer flex flex-col items-center gap-1"
                          style={{
                            backgroundColor: locked
                              ? isRight
                                ? 'rgba(16, 185, 129, 0.16)'
                                : isSel
                                ? 'rgba(239, 68, 68, 0.16)'
                                : 'var(--bg-secondary)'
                              : isSel
                              ? `${btn.color}20`
                              : 'var(--bg-secondary)',
                            border: locked
                              ? isRight
                                ? '2.5px solid #10b981'
                                : isSel
                                ? '2.5px solid #ef4444'
                                : '2px solid var(--border-strong)'
                              : isSel
                              ? `2.5px solid ${btn.color}`
                              : '2px solid var(--border-strong)',
                            color: isSel ? btn.color : 'var(--text-primary)',
                            boxShadow: locked ? 'none' : '0 4px 0 var(--border-strong)'
                          }}
                        >
                          <span>{btn.label}</span>
                          <span className="text-[11px] font-bold text-tertiary">
                            {btn.keyHint}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TYPE 5 & 6: 🎧 LISTENING & 🎯 REAL CURRICULUM MCQ */}
              {/* ======================================================== */}
              {(currentEx.type === 'listening' || currentEx.type === 'mcq') && (
                <div className="space-y-3.5">
                  {currentEx.type === 'listening' && (
                    <div className="flex justify-center py-1">
                      <button
                        onClick={() => speechEngine.speak(currentEx.audioText)}
                        className="px-6 py-3.5 rounded-2xl flex items-center gap-3 font-black text-sm text-white cursor-pointer transition-transform active:translate-y-0.5"
                        style={{
                          background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
                          border: 'none',
                          boxShadow: '0 4px 0 #1d4ed8'
                        }}
                      >
                        <Volume2 size={22} />
                        <span>🔊 點擊播放題目語音</span>
                      </button>
                    </div>
                  )}

                  <div className="space-y-2.5">
                    {currentEx.options.map((opt, idx) => {
                      const isSel = selectedOption === opt;
                      const locked = phase === 'feedback';
                      const isRightOpt = opt === currentEx.correctAnswer;
                      return (
                        <button
                          key={idx}
                          disabled={locked}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedOption(opt);
                          }}
                          className="w-full p-4 rounded-2xl text-left font-bold text-sm sm:text-base flex items-center gap-3.5 transition-all cursor-pointer"
                          style={{
                            backgroundColor: locked
                              ? isRightOpt
                                ? 'rgba(16, 185, 129, 0.16)'
                                : isSel
                                ? 'rgba(239, 68, 68, 0.16)'
                                : 'var(--bg-secondary)'
                              : isSel
                              ? 'rgba(59, 130, 246, 0.14)'
                              : 'var(--bg-secondary)',
                            border: locked
                              ? isRightOpt
                                ? '2.5px solid #10b981'
                                : isSel
                                ? '2.5px solid #ef4444'
                                : '2px solid var(--border-strong)'
                              : isSel
                              ? '2.5px solid #2563eb'
                              : '2px solid var(--border-strong)',
                            boxShadow: locked ? 'none' : '0 4px 0 var(--border-strong)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <span
                            className="w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 border"
                            style={{
                              backgroundColor: locked
                                ? isRightOpt
                                  ? '#10b981'
                                  : isSel
                                  ? '#ef4444'
                                  : 'var(--bg-tertiary)'
                                : isSel
                                ? '#2563eb'
                                : 'var(--bg-tertiary)',
                              color:
                                (locked && (isRightOpt || isSel)) || isSel
                                  ? '#ffffff'
                                  : 'var(--text-secondary)',
                              borderColor: 'transparent'
                            }}
                          >
                            {idx + 1}
                          </span>
                          <span className="flex-1 leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* -------------------------------------------------------- */}
          {/* PHASE 3: 🏆 DONE (Duolingo Celebration & Daily Goal Screen) */}
          {/* -------------------------------------------------------- */}
          {phase === 'done' && (
            <div className="max-w-lg mx-auto text-center py-6 space-y-6 animate-fade-in">
              <div
                className="w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 55%, #d97706 100%)',
                  boxShadow: '0 8px 0 #b45309'
                }}
              >
                🏆
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-widest text-amber-500">
                  LESSON COMPLETE・單元闖關完成！
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-primary mt-1 mb-1">
                  太棒了！你完成了「{unit.badge || unit.title}」
                </h2>
                <p className="text-sm text-secondary m-0">
                  單元皇冠熟練度提升至{' '}
                  <strong className="text-amber-500">
                    👑 Lv.{Math.min(5, currentCrown + 1)} / 5
                  </strong>
                </p>
              </div>

              {/* 3 Duolingo Stat Tiles */}
              <div className="grid grid-cols-3 gap-3">
                <div
                  className="p-3.5 rounded-2xl border-2"
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderColor: '#fbbf24'
                  }}
                >
                  <div className="text-[11px] font-black text-amber-600 dark:text-amber-400">
                    獲得 XP
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-500 mt-1">
                    +{Math.round((stageInfo.xpBase + maxCombo * 3) * stageInfo.xpMultiplier)}
                  </div>
                </div>

                <div
                  className="p-3.5 rounded-2xl border-2"
                  style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderColor: '#34d399'
                  }}
                >
                  <div className="text-[11px] font-black text-emerald-600 dark:text-emerald-400">
                    首答正確率
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-500 mt-1">
                    {Math.round((firstTryCorrect / Math.max(1, baseTotal)) * 100)}%
                  </div>
                </div>

                <div
                  className="p-3.5 rounded-2xl border-2"
                  style={{
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    borderColor: '#38bdf8'
                  }}
                >
                  <div className="text-[11px] font-black text-sky-600 dark:text-sky-400">
                    過關用時
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-sky-500 mt-1">
                    {elapsedSec}s
                  </div>
                </div>
              </div>

              {/* Daily XP Goal Bar */}
              <div
                className="p-4 rounded-2xl border-2 text-left"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-light)'
                }}
              >
                <div className="flex items-center justify-between text-xs font-black mb-2">
                  <span className="text-secondary">🎯 今日學習目標進度</span>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {todayXp} / {dailyXpGoal} XP {todayXp >= dailyXpGoal ? '✓ 已達標！' : ''}
                  </span>
                </div>
                <div className="h-3 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <div
                    style={{
                      width: `${Math.min(100, Math.round((todayXp / (dailyXpGoal || 50)) * 100))}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #58cc02 0%, #16a34a 100%)',
                      borderRadius: '999px'
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 👇 3. Duolingo Bottom Feedback Sheet & 3D Action Bar */}
      {/* ============================================================ */}
      <div
        className="shrink-0 border-t-2 transition-colors"
        style={{
          backgroundColor:
            phase === 'feedback' && feedbackState
              ? feedbackState.isCorrect
                ? 'rgba(16, 185, 129, 0.14)'
                : 'rgba(244, 63, 94, 0.14)'
              : 'var(--bg-secondary)',
          borderColor:
            phase === 'feedback' && feedbackState
              ? feedbackState.isCorrect
                ? '#10b981'
                : '#f43f5e'
              : 'var(--border-light)'
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {phase === 'intro' && (
            <>
              <div className="text-xs sm:text-sm font-bold text-secondary">
                讀完上方重點後，按 Enter 或點擊右側按鈕開始作答（共 {queue.length} 題）
              </div>
              <button
                onClick={() => {
                  setPhase('answer');
                  playSound('ios_tap');
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base text-white cursor-pointer transition-transform active:translate-y-0.5"
                style={{
                  backgroundColor: '#58cc02',
                  border: 'none',
                  boxShadow: '0 4px 0 #3f9102'
                }}
              >
                開始作答 (Enter) ➔
              </button>
            </>
          )}

          {phase === 'answer' && (
            <>
              <button
                onClick={() => {
                  setShowHint((h) => !h);
                  playSound('ios_tap');
                }}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-black text-secondary hover:text-primary cursor-pointer"
                style={{ background: 'none', border: 'none' }}
              >
                <Lightbulb size={16} className="text-amber-500" />
                <span>{showHint ? '收起解題錦囊' : '需要解題提示？'}</span>
              </button>

              <button
                disabled={!isCheckReady()}
                onClick={handleCheckAnswer}
                className="w-full sm:w-auto sm:min-w-[180px] px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base transition-all"
                style={{
                  backgroundColor: isCheckReady() ? '#58cc02' : 'var(--bg-tertiary)',
                  color: isCheckReady() ? '#ffffff' : 'var(--text-tertiary)',
                  border: 'none',
                  boxShadow: isCheckReady() ? '0 4px 0 #3f9102' : 'none',
                  cursor: isCheckReady() ? 'pointer' : 'not-allowed'
                }}
              >
                檢查答案 (Enter)
              </button>
            </>
          )}

          {phase === 'feedback' && feedbackState && (
            <>
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black shrink-0 mt-0.5"
                  style={{
                    backgroundColor: feedbackState.isCorrect ? '#10b981' : '#e11d48'
                  }}
                >
                  {feedbackState.isCorrect ? (
                    <CheckCircle2 size={22} />
                  ) : (
                    <AlertTriangle size={22} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    className="font-black text-sm sm:text-base"
                    style={{
                      color: feedbackState.isCorrect ? '#059669' : '#e11d48'
                    }}
                  >
                    {feedbackState.message}
                  </div>
                  {!feedbackState.isCorrect && feedbackState.correctText && (
                    <div className="text-xs sm:text-sm font-black text-primary mt-0.5">
                      ✅ 正確答案：{feedbackState.correctText}
                    </div>
                  )}
                  <div className="text-xs text-secondary mt-1 leading-relaxed">
                    {feedbackState.detail}
                  </div>
                  {feedbackState.isRetryQueued && (
                    <div className="text-[11px] font-bold text-rose-500 mt-1">
                      🔄 這題稍後會在關卡最後再出現一次，幫你徹底學會！
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={handleNextStep}
                className="w-full sm:w-auto sm:min-w-[160px] px-7 py-3.5 rounded-2xl font-black text-sm sm:text-base text-white shrink-0 cursor-pointer transition-transform active:translate-y-0.5"
                style={{
                  backgroundColor: feedbackState.isCorrect ? '#16a34a' : '#e11d48',
                  border: 'none',
                  boxShadow: feedbackState.isCorrect ? '0 4px 0 #15803d' : '0 4px 0 #9f1239'
                }}
              >
                繼續 (Enter) ➔
              </button>
            </>
          )}

          {phase === 'done' && (
            <>
              <button
                onClick={() => handleSwitchStage(stageMode)}
                className="btn-outline px-6 py-3 rounded-2xl font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>再練一次</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial sm:min-w-[220px] px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base text-white flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  backgroundColor: '#58cc02',
                  border: 'none',
                  boxShadow: '0 4px 0 #3f9102'
                }}
              >
                <span>繼續返回學習地圖</span>
                <ArrowRight size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalNode, document.body);
  }
  return modalNode;
};

export default DuolingoLessonModal;
