import { useState, useEffect, useMemo, useRef } from 'react';
import MathText from '../common/MathText';
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
  Flame,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff
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
import {
  getKnowledgePointInfographic,
  getUnitDiagramInfographic
} from '../../data/knowledgeInfographics';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

const MAX_RETRY = 2;
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

const STAGE_META = {
  lesson: {
    id: 'lesson',
    title: '⭐ 新觀念入門 (四選一)',
    subtitle: '先看 3 個重點和圖解，再完成 5 題四選一練習',
    xpBase: 30,
    xpMultiplier: 1,
    hasIntro: true
  },
  practice: {
    id: 'practice',
    title: '🏋️ 進階實戰練習 (四選一)',
    subtitle: '6 題精選四選一題型・結合聽力辨析與評量進階考點',
    xpBase: 35,
    xpMultiplier: 1.2,
    hasIntro: false
  },
  challenge: {
    id: 'challenge',
    title: '🏆 單元王牌挑戰 (四選一)',
    subtitle: '7 題全版本課本與參考書壓軸綜合四選一挑戰（XP × 1.5）',
    xpBase: 50,
    xpMultiplier: 1.5,
    hasIntro: false
  },
  all: {
    id: 'all',
    title: '🌟 全題型特訓闖關',
    subtitle: '以四選一為核心，完整演練本課多元互動題型',
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

  // Mobile Fullscreen & Orientation Adaptation States
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);
  const [showConceptDiagram, setShowConceptDiagram] = useState(false);

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

  // Fullscreen Toggle (HTML5 Fullscreen API with vendor prefix fallback)
  const toggleFullscreen = () => {
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
      setIsFullscreen(true);
      playSound('ios_tap');
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
      setIsFullscreen(false);
      playSound('ios_tap');
    }
  };

  // Listen to fullscreen changes (e.g. user pressed ESC)
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    };
  }, []);

  // Listen to device orientation / viewport aspect ratio
  useEffect(() => {
    const checkOrientation = () => {
      const isLand = window.innerWidth > window.innerHeight && window.innerHeight < 650;
      setIsLandscape(isLand);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Select tailored exercise queue for the chosen stage (Lesson 1 / Practice 2 / Challenge 3 / All)
  // 主要以【四選一選擇題 (MCQ)】為核心題型 (>=80%~100%)
  const buildStageQueue = (mode, pool) => {
    if (!pool || pool.length === 0) return [];
    const mcqs = pool.filter((e) => e.type === 'mcq');
    const tfs = pool.filter((e) => e.type === 'true_false');
    const orders = pool.filter((e) => e.type === 'word_bank');
    const matches = pool.filter((e) => e.type === 'matching');
    const clozes = pool.filter((e) => e.type === 'cloze');
    const listens = pool.filter((e) => e.type === 'listening');

    if (mode === 'lesson') {
      // 第 1 關（新觀念入門）：4 題四選一選擇題 + 1 題四選一觀念填空（100% 四選一題型）
      return [
        ...mcqs.slice(0, 4),
        ...(clozes.length > 0 ? clozes.slice(0, 1) : mcqs.slice(4, 5))
      ].filter(Boolean);
    }
    if (mode === 'practice') {
      // 第 2 關（進階實戰練習）：5 題四選一選擇題 + 1 題四選一聽力/填空（100% 四選一題型）
      return [
        ...mcqs.slice(2, 6),
        ...(listens.length > 0 ? listens.slice(0, 1) : mcqs.slice(6, 7)),
        ...(clozes.length > 0 ? clozes.slice(0, 1) : mcqs.slice(7, 8))
      ].filter(Boolean).slice(0, 6);
    }
    if (mode === 'challenge') {
      // 第 3 關（單元王牌挑戰）：6 題四選一選擇題 + 1 題四選一壓軸題（100% 四選一題型）
      return [
        ...mcqs.slice(0, 6),
        ...(clozes.length > 0 ? clozes.slice(0, 1) : mcqs.slice(6, 7))
      ]
        .filter(Boolean)
        .slice(0, 7);
    }
    // 'all': 8 題完整特訓（以四選一為核心，搭配少數綜合互動題）
    return [
      ...mcqs.slice(0, 4),
      ...(clozes.length > 0 ? clozes.slice(0, 1) : []),
      ...(listens.length > 0 ? listens.slice(0, 1) : []),
      ...orders.slice(0, 1),
      ...matches.slice(0, 1)
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
    setShowConceptDiagram(false);
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

  // Active micro-knowledge point for current exercise
  const activeKp = useMemo(() => {
    if (!currentEx) return unitKps[0] || null;
    if (currentEx.relatedKp) return currentEx.relatedKp;
    if (currentEx.kpId) {
      const found = knowledgePointsData.find((k) => k.id === currentEx.kpId);
      if (found) return found;
    }
    return unitKps[0] || null;
  }, [currentEx, unitKps]);

  // Pure-vector SVG infographic for active knowledge point (100% vector SVG)
  const currentInfographic = useMemo(() => {
    if (!activeKp) return null;
    return getKnowledgePointInfographic(activeKp);
  }, [activeKp]);

  // Unit-level infographic for intro phase
  const unitInfographic = useMemo(() => {
    if (!unit) return null;
    return getUnitDiagramInfographic(unit.id, unit.title);
  }, [unit]);

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
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
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
      // Number keys 1..4 & Letters A..D for quick option selection
      if (phase === 'answer' && currentEx) {
        if (
          currentEx.type === 'mcq' ||
          currentEx.type === 'cloze' ||
          currentEx.type === 'listening'
        ) {
          const keyLower = e.key.toLowerCase();
          let idx = -1;
          if (['1', '2', '3', '4'].includes(e.key)) {
            idx = Number(e.key) - 1;
          } else if (['a', 'b', 'c', 'd'].includes(keyLower)) {
            idx = ['a', 'b', 'c', 'd'].indexOf(keyLower);
          }
          if (idx >= 0 && currentEx.options && currentEx.options[idx] !== undefined) {
            setSelectedOption(currentEx.options[idx]);
            playSound('ios_tap');
          }
        } else if (currentEx.type === 'true_false' && (e.key === '1' || e.key === '2' || e.key.toLowerCase() === 'a' || e.key.toLowerCase() === 'b')) {
          setSelectedOption(e.key === '1' || e.key.toLowerCase() === 'a');
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
      example: kp.example || '',
      tip: (kp.trapAlert || '').replace(/⚠️/g, '').replace(/^【[^】]*】/, '')
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

  // 1. 標準四選一及各題型選項渲染器
  const renderOptionsContent = (isCompact = false) => {
    if (!currentEx) return null;

    // A. 觀念填空 (四選一)
    if (currentEx.type === 'cloze') {
      return (
        <div className="space-y-3">
          {!isCompact && (
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
          )}

          <div className={isCompact ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-1 sm:grid-cols-2 gap-3'}>
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
                  className={`rounded-2xl text-left font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                    isCompact ? 'p-2.5 text-xs' : 'p-3.5 sm:p-4 text-xs sm:text-sm'
                  }`}
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
                    boxShadow: locked ? 'none' : '0 3px 0 var(--border-strong)',
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
                    {OPTION_LABELS[idx] || (idx + 1)}
                  </span>
                  <span className="flex-1 truncate">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // B. 聽力與實戰單元選擇題 (標準四選一)
    if (currentEx.type === 'listening' || currentEx.type === 'mcq') {
      return (
        <div className="space-y-2.5">
          {currentEx.type === 'listening' && !isCompact && (
            <div className="flex justify-center py-1">
              <button
                onClick={() => speechEngine.speak(currentEx.audioText)}
                className="px-6 py-3 rounded-2xl flex items-center gap-2.5 font-black text-sm text-white cursor-pointer transition-transform active:translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
                  border: 'none',
                  boxShadow: '0 4px 0 #1d4ed8'
                }}
              >
                <Volume2 size={20} />
                <span>🔊 點擊播放題目語音</span>
              </button>
            </div>
          )}

          <div className={isCompact ? 'grid grid-cols-2 gap-2' : 'space-y-2.5'}>
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
                  className={`w-full rounded-2xl text-left font-bold flex items-center gap-3 transition-all cursor-pointer ${
                    isCompact ? 'p-2.5 text-xs' : 'p-3.5 sm:p-4 text-sm sm:text-base'
                  }`}
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
                    boxShadow: locked ? 'none' : '0 3px 0 var(--border-strong)',
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
                    {OPTION_LABELS[idx] || (idx + 1)}
                  </span>
                  <span className="flex-1 leading-snug line-clamp-2">{opt}</span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // C. 是非題 (雙向二選一)
    if (currentEx.type === 'true_false') {
      return (
        <div className="space-y-3">
          {!isCompact && (
            <div
              className="p-4 sm:p-5 rounded-2xl font-bold text-sm sm:text-base leading-relaxed"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '2px solid var(--border-strong)'
              }}
            >
              {currentEx.statement}
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            {[
              { val: true, label: '⭕ 觀念正確', keyHint: '按 1 / A', color: '#10b981' },
              { val: false, label: '❌ 觀念有誤', keyHint: '按 2 / B', color: '#ef4444' }
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
                  className={`rounded-2xl font-black transition-all cursor-pointer flex flex-col items-center gap-1 ${
                    isCompact ? 'p-3 text-sm' : 'p-5 text-base sm:text-lg'
                  }`}
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
                  <span className="text-[10px] font-bold text-tertiary">
                    {btn.keyHint}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // D. 步驟排序題
    if (currentEx.type === 'word_bank') {
      return (
        <div className="space-y-3">
          <div
            className="min-h-[76px] p-3 rounded-2xl flex flex-col gap-2 justify-center"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '2px dashed var(--border-strong)'
            }}
          >
            {selectedTiles.length === 0 ? (
              <div className="text-center text-xs text-tertiary font-bold py-2">
                👇 請依正確順序點選下方語塊放到此處（已選 0 / {currentEx.correctOrder.length}）
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedTiles.map((tile, idx) => {
                  const locked = phase === 'feedback';
                  const isTileRight = locked && currentEx.correctOrder[idx] === tile.text;
                  return (
                    <button
                      key={tile.id}
                      disabled={locked}
                      onClick={() => {
                        playSound('ios_tap');
                        setSelectedTiles((prev) => prev.filter((t) => t.id !== tile.id));
                      }}
                      className="px-3 py-2 rounded-xl font-black text-xs flex items-center gap-1.5 cursor-pointer"
                      style={{
                        backgroundColor: locked ? (isTileRight ? 'rgba(16, 185, 129, 0.16)' : 'rgba(239, 68, 68, 0.16)') : 'rgba(59, 130, 246, 0.14)',
                        color: locked ? (isTileRight ? '#059669' : '#dc2626') : '#2563eb',
                        border: locked ? (isTileRight ? '2px solid #10b981' : '2px solid #ef4444') : '2px solid #3b82f6'
                      }}
                    >
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>{tile.text}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {currentEx.allTiles.map((tile) => {
              const isUsed = selectedTiles.some((t) => t.id === tile.id);
              const isFull = selectedTiles.length >= currentEx.correctOrder.length;
              return (
                <button
                  key={tile.id}
                  disabled={isUsed || isFull || phase === 'feedback'}
                  onClick={() => {
                    playSound('ios_tap');
                    triggerHaptic('light');
                    setSelectedTiles((prev) => [...prev, tile]);
                  }}
                  className="px-3.5 py-2.5 rounded-xl font-bold text-xs cursor-pointer transition-all"
                  style={{
                    backgroundColor: isUsed ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                    color: isUsed ? 'transparent' : 'var(--text-primary)',
                    border: '2px solid var(--border-strong)',
                    opacity: isUsed ? 0.35 : 1
                  }}
                >
                  {tile.text}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    // E. 觀念配對題
    if (currentEx.type === 'matching') {
      return (
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="space-y-1.5">
            <div className="text-[10px] font-black text-secondary uppercase">
              📌 左欄概念
            </div>
            {shuffledLeftPairs.map((p) => {
              const isMatched = matchedIds.includes(p.id);
              const isSelected = selectedLeftPair?.id === p.id;
              return (
                <button
                  key={`left-${p.id}`}
                  disabled={isMatched || phase === 'feedback'}
                  onClick={() => handleSelectPairItem('left', p)}
                  className="w-full p-2.5 rounded-xl text-left font-bold transition-all cursor-pointer truncate"
                  style={{
                    backgroundColor: isMatched ? 'rgba(16, 185, 129, 0.14)' : isSelected ? 'rgba(59, 130, 246, 0.16)' : 'var(--bg-secondary)',
                    border: isMatched ? '2px solid #10b981' : isSelected ? '2px solid #3b82f6' : '2px solid var(--border-strong)',
                    color: isMatched ? '#059669' : 'var(--text-primary)'
                  }}
                >
                  {isMatched ? '✅ ' : ''}{p.left}
                </button>
              );
            })}
          </div>

          <div className="space-y-1.5">
            <div className="text-[10px] font-black text-secondary uppercase">
              🎯 右欄定義
            </div>
            {shuffledRightPairs.map((p) => {
              const isMatched = matchedIds.includes(p.id);
              const isSelected = selectedRightPair?.id === p.id;
              return (
                <button
                  key={`right-${p.id}`}
                  disabled={isMatched || phase === 'feedback'}
                  onClick={() => handleSelectPairItem('right', p)}
                  className="w-full p-2.5 rounded-xl text-left font-bold transition-all cursor-pointer truncate"
                  style={{
                    backgroundColor: isMatched ? 'rgba(16, 185, 129, 0.14)' : isSelected ? 'rgba(59, 130, 246, 0.16)' : 'var(--bg-secondary)',
                    border: isMatched ? '2px solid #10b981' : isSelected ? '2px solid #3b82f6' : '2px solid var(--border-strong)',
                    color: isMatched ? '#059669' : 'var(--text-primary)'
                  }}
                >
                  {isMatched ? '✅ ' : ''}{p.right}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    return null;
  };

  // 2. 📱 手機橫式雙欄佈局 (Landscape Split View — 零滑動、題目圖示在左、四選一在右)
  const renderLandscapeQuestionView = () => {
    return (
      <div className="grid grid-cols-12 gap-3.5 h-[calc(100dvh-62px)] overflow-hidden max-w-7xl mx-auto p-2 sm:p-3">
        {/* 左欄 50%：題幹、聽力、吉祥物、即時純向量 SVG 知識點資訊圖解 */}
        <div className="col-span-6 flex flex-col justify-between overflow-y-auto pr-3 border-r border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  {currentEx.typeLabel || '🎯 實戰選擇題 (四選一)'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {currentEx.sourceTag || '課本基礎必考題'}
                </span>
              </div>
              <span className="text-xs font-black text-slate-400">
                第 {pos + 1} / {queue.length} 題
              </span>
            </div>

            {/* 題幹氣泡 + 聽力 */}
            <div
              className="p-3 rounded-2xl border-2 flex items-start gap-2.5"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-strong)' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 border"
                style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-light)' }}
              >
                {activePetTemplate?.emoji || subject?.emoji || '🦉'}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-xs sm:text-sm font-black text-primary m-0 leading-snug">
                  {currentEx.prompt}
                </h2>
                {currentEx.sentenceBefore && (
                  <div className="text-xs font-bold text-secondary mt-1">
                    {currentEx.sentenceBefore}
                    <span className="text-blue-600 dark:text-blue-400 font-black px-1 underline">
                      {selectedOption || '＿＿'}
                    </span>
                    {currentEx.sentenceAfter}
                  </div>
                )}
                {currentEx.statement && (
                  <div className="text-xs font-bold text-secondary mt-1">
                    {currentEx.statement}
                  </div>
                )}
              </div>
              <button
                onClick={() => speechEngine.speak(currentEx.audioText || currentEx.statement || currentEx.prompt)}
                className="p-1.5 rounded-lg bg-sky-500/15 text-sky-600 dark:text-sky-400 shrink-0 cursor-pointer"
                style={{ border: 'none' }}
                title="朗讀題目"
              >
                <Volume2 size={16} />
              </button>
            </div>

            {/* 即時嵌入式向量 SVG 知識點圖解 (手機橫屏下無滑動可直接對照) */}
            {currentInfographic?.svg && (
              <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-1.5 shadow-sm flex flex-col items-center justify-center">
                <div
                  className="w-full flex items-center justify-center"
                  style={{ maxHeight: '135px', overflow: 'hidden' }}
                  dangerouslySetInnerHTML={{ __html: currentInfographic.svg }}
                />
                <div className="w-full flex items-center justify-between text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1 px-1 border-t border-slate-100 dark:border-slate-800 pt-0.5">
                  <span className="truncate">🎨 {activeKp?.title || currentInfographic.title}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 shrink-0 font-black">
                    {activeKp?.category || '108課綱圖解'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* 底部算理/公式速記條 */}
          {(activeKp?.formulaOrRule || catalog?.quickRescue) && (
            <div className="mt-1 px-2.5 py-1.5 rounded-xl text-[11px] font-black text-blue-700 dark:text-blue-300 bg-blue-500/10 border border-blue-500/20 truncate">
              🧮 算理定則：{(activeKp?.formulaOrRule || catalog?.quickRescue)?.replace(/\$/g, '')}
            </div>
          )}
        </div>

        {/* 右欄 50%：四選一選項 (A, B, C, D) 與 內嵌式 Action Bar (檢查答案 / 繼續) */}
        <div className="col-span-6 flex flex-col justify-between overflow-y-auto pl-2 pb-1">
          <div className="space-y-2">
            <div className="text-xs font-black text-secondary flex items-center justify-between">
              <span>👇 請選出正確答案（四選一）：</span>
              <span className="text-[10px] text-tertiary">鍵盤 1-4 或 A-D</span>
            </div>

            {renderOptionsContent(true)}
          </div>

          {/* 內嵌式 Action Bar (橫式無需垂直滑動到底部) */}
          <div className="pt-2">
            {phase === 'answer' && (
              <button
                disabled={!isCheckReady()}
                onClick={handleCheckAnswer}
                className="w-full py-3 rounded-2xl font-black text-sm sm:text-base transition-all"
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
            )}

            {phase === 'feedback' && feedbackState && (
              <div
                className="p-3 rounded-2xl border-2 flex items-center justify-between gap-3 animate-fade-in"
                style={{
                  backgroundColor: feedbackState.isCorrect ? 'rgba(16, 185, 129, 0.14)' : 'rgba(244, 63, 94, 0.14)',
                  borderColor: feedbackState.isCorrect ? '#10b981' : '#f43f5e'
                }}
              >
                <div className="min-w-0 flex-1">
                  <div
                    className="font-black text-xs sm:text-sm"
                    style={{ color: feedbackState.isCorrect ? '#059669' : '#e11d48' }}
                  >
                    {feedbackState.message}
                  </div>
                  {!feedbackState.isCorrect && feedbackState.correctText && (
                    <div className="text-xs font-black text-primary mt-0.5 truncate">
                      ✅ 正解：{feedbackState.correctText}
                    </div>
                  )}
                  {feedbackState.detail && (
                    <div className="text-[10px] text-secondary truncate mt-0.5">
                      {feedbackState.detail}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleNextStep}
                  className="px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm text-white shrink-0 cursor-pointer"
                  style={{
                    backgroundColor: feedbackState.isCorrect ? '#16a34a' : '#e11d48',
                    border: 'none',
                    boxShadow: feedbackState.isCorrect ? '0 3px 0 #15803d' : '0 3px 0 #9f1239'
                  }}
                >
                  繼續 ➔
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // 3. 📱 手機直式佈局 (Portrait Single Column Flow — 具備微知識點圖解與算理展開手風琴)
  const renderPortraitQuestionView = () => {
    return (
      <div className="space-y-5 animate-fade-in">
        {/* Top Pill Row */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-xs font-black"
              style={{
                backgroundColor: 'rgba(34, 197, 94, 0.14)',
                color: '#16a34a'
              }}
            >
              {currentEx.typeLabel || '🎯 實戰選擇題 (四選一)'}
            </span>
            <span
              className="px-2.5 py-1 rounded-full text-xs font-bold"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)'
              }}
            >
              {currentEx.sourceTag || '課本基礎必考題'}
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

        {/* 🎨 可折疊【微知識點圖示與算理解釋】手風琴卡片 */}
        <div
          className="rounded-2xl border-2 overflow-hidden transition-all shadow-sm"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-strong)'
          }}
        >
          <button
            onClick={() => {
              setShowConceptDiagram((v) => !v);
              playSound('ios_tap');
            }}
            className="w-full px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-black cursor-pointer transition-colors"
            style={{
              background: showConceptDiagram
                ? 'rgba(59, 130, 246, 0.08)'
                : 'transparent',
              border: 'none',
              color: showConceptDiagram ? '#2563eb' : 'var(--text-primary)'
            }}
          >
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500 animate-pulse" />
              <span>💡 查看本題微知識點圖示與算理解釋</span>
              {activeKp?.category && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-500/15 text-blue-600 dark:text-blue-400">
                  {activeKp.category}
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-secondary">
              <span>{showConceptDiagram ? '收起圖解 ▴' : '展開圖示 ▾'}</span>
            </div>
          </button>

          {showConceptDiagram && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3 animate-fade-in bg-surface-primary/50">
              <div className="flex items-center justify-between">
                <div className="font-black text-sm text-primary flex items-center gap-1.5">
                  <span>🎨</span>
                  <span>{activeKp?.title || currentInfographic?.title}</span>
                </div>
                <span className="text-[11px] text-secondary font-bold">
                  108 課綱圖解卡
                </span>
              </div>

              {/* 高清純向量 SVG 圖表 */}
              {currentInfographic?.svg && (
                <div
                  className="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-inner flex items-center justify-center"
                  style={{ maxHeight: '200px' }}
                  dangerouslySetInnerHTML={{ __html: currentInfographic.svg }}
                />
              )}

              {/* 五維知識點微架構 (定義、算理/公式、防雷、技巧) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {activeKp?.definition && (
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-primary">
                    <div className="font-black text-slate-700 dark:text-slate-300 mb-0.5">
                      🧠 白話解釋
                    </div>
                    <div className="text-secondary leading-relaxed">
                      <MathText text={activeKp.definition} />
                    </div>
                    {activeKp.example && (
                      <div className="mt-1.5 text-emerald-700 dark:text-emerald-300 leading-relaxed">
                        <strong>🌱 例子：</strong><MathText text={activeKp.example} />
                      </div>
                    )}
                  </div>
                )}
                {activeKp?.formulaOrRule && (
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300">
                    <div className="font-black mb-0.5">📌 重點規則</div>
                    <div className="leading-relaxed"><MathText text={activeKp.formulaOrRule} /></div>
                  </div>
                )}
                {activeKp?.trapAlert && (
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-700 dark:text-rose-300 sm:col-span-2">
                    <div className="font-black mb-0.5">⚠️ 小心別犯錯</div>
                    <div className="leading-relaxed"><MathText text={activeKp.trapAlert} /></div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Standard Options (A, B, C, D) */}
        {renderOptionsContent(false)}
      </div>
    );
  };

  const modalNode = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100dvh',
        zIndex: 9999,
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* ============================================================ */}
      {/* 🔝 1. Clean Duolingo Top Bar (Close X + Thick Green Progress Bar + Combo Flame + Fullscreen) */}
      {/* ============================================================ */}
      <div
        className="shrink-0 border-b"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-light)'
        }}
      >
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center gap-2.5 sm:gap-4">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-secondary hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            style={{ border: 'none', background: 'transparent' }}
            aria-label="結束本課"
            title="結束本課 (Esc)"
          >
            <X size={22} />
          </button>

          {/* Thick Duolingo 3D Progress Bar with Inner White Shine */}
          <div
            className="flex-1 h-3.5 sm:h-4 rounded-full overflow-hidden p-0.5"
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
              className="px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer transition-all"
              style={{
                backgroundColor: phase === 'intro' ? '#3b82f6' : 'var(--bg-tertiary)',
                color: phase === 'intro' ? '#ffffff' : 'var(--text-primary)',
                border: '1.5px solid var(--border-strong)'
              }}
              title="切換重點速覽小抄"
            >
              <BookOpen size={14} />
              <span className="hidden sm:inline">{phase === 'intro' ? '開始答題' : '重點小抄'}</span>
            </button>
          )}

          {/* 📱 Fullscreen Toggle Button (支援手機一鍵全螢幕沉浸學習) */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 sm:p-2 rounded-xl text-secondary hover:bg-slate-200/70 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            style={{ border: 'none', background: 'transparent' }}
            aria-label={isFullscreen ? '結束全螢幕' : '手機全螢幕'}
            title={isFullscreen ? '結束全螢幕 (F)' : '全螢幕模式 (F)'}
          >
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
          </button>

          {/* Combo Streak Flame */}
          <div
            className={`flex items-center gap-1 font-black text-xs sm:text-sm px-2 sm:px-2.5 py-1 rounded-full ${
              combo >= 2
                ? 'bg-amber-500/15 text-amber-500 scale-105'
                : 'text-tertiary'
            } transition-transform`}
          >
            <Flame size={16} className={combo >= 2 ? 'fill-amber-500 text-amber-500' : ''} />
            <span>{combo}</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 🎯 2. Main Duolingo Stage Body (Intro / Exercise / Celebration) */}
      {/* ============================================================ */}
      <div className="flex-1 overflow-y-auto">
        <div className={isLandscape ? "h-full" : "max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-7"}>
          {/* -------------------------------------------------------- */}
          {/* PHASE 0: 📖 INTRO (單元重點速覽卡片 + 全景架構圖解) */}
          {/* -------------------------------------------------------- */}
          {phase === 'intro' && (
            <div className="space-y-4 sm:space-y-5 animate-fade-in max-w-3xl mx-auto px-4 py-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl text-white shadow-md shrink-0"
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
                  <h2 className="text-lg sm:text-2xl font-black text-primary m-0 mt-0.5">
                    {unit.title}
                  </h2>
                  <p className="text-xs text-secondary m-0 mt-0.5">
                    先花 20 秒看看重點和圖解，等一下作答更有把握！
                  </p>
                </div>
              </div>

              {/* 單元全景純向量圖卡 */}
              {unitInfographic?.svg && (
                <div className="p-3 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col items-center justify-center shadow-sm">
                  <div className="w-full text-xs font-black text-secondary flex items-center justify-between mb-1 px-1">
                    <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                      <Sparkles size={14} />
                      <span>{unit.title}・單元重點圖解</span>
                    </span>
                    <span className="text-[10px] text-tertiary">單元全貌</span>
                  </div>
                  <div 
                    className="w-full flex items-center justify-center max-h-[160px] overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: unitInfographic.svg }}
                  />
                </div>
              )}

              {/* 3 Crisp Key Takeaway Cards */}
              <div className="space-y-2.5">
                {guidePoints.map((pt, i) => (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-2xl border-2"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderColor: 'var(--border-light)'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs font-black text-white shrink-0 mt-0.5"
                        style={{ backgroundColor: '#16a34a' }}
                      >
                        {i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="font-black text-xs sm:text-base text-primary">
                          {pt.title}
                        </div>
                        <p className="text-xs sm:text-sm text-secondary mt-1 mb-0 leading-relaxed">
                          {pt.body}
                        </p>
                        {pt.example && (
                          <p className="text-xs sm:text-sm mt-1.5 mb-0 leading-relaxed text-emerald-700 dark:text-emerald-300">
                            🌱 舉個例子：{pt.example}
                          </p>
                        )}
                        {pt.tip && (
                          <div
                            className="mt-2 px-3 py-1.5 rounded-xl text-xs font-bold"
                            style={{
                              backgroundColor: 'rgba(245, 158, 11, 0.12)',
                              color: '#d97706'
                            }}
                          >
                            ⚠️ 小心別犯錯：{pt.tip}
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
                  className="p-3.5 sm:p-4 rounded-2xl border-2 flex items-start gap-3"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    borderColor: 'rgba(34, 197, 94, 0.35)'
                  }}
                >
                  <span className="text-xl sm:text-2xl">⚡</span>
                  <div>
                    <div className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                      本課 5 秒破題黃金口訣（康軒 / 南一 / 翰林通用）
                    </div>
                    <div className="text-xs sm:text-sm font-black text-primary mt-0.5 leading-relaxed">
                      {catalog.quickRescue.replace(/\$/g, '')}
                    </div>
                  </div>
                </div>
              )}

              {/* Landscape Start Button if in Landscape Mode */}
              {isLandscape && (
                <div className="pt-2 text-center">
                  <button
                    onClick={() => {
                      setPhase('answer');
                      playSound('ios_tap');
                    }}
                    className="w-full py-3.5 rounded-2xl font-black text-base text-white cursor-pointer transition-transform active:translate-y-0.5"
                    style={{
                      backgroundColor: '#58cc02',
                      border: 'none',
                      boxShadow: '0 4px 0 #3f9102'
                    }}
                  >
                    開始作答 (Enter) ➔
                  </button>
                </div>
              )}
            </div>
          )}

          {/* -------------------------------------------------------- */}
          {/* PHASE 1 & 2: 🎯 QUESTION STAGE (Auto-Adapts to Landscape or Portrait) */}
          {/* -------------------------------------------------------- */}
          {(phase === 'answer' || phase === 'feedback') && currentEx && (
            isLandscape ? renderLandscapeQuestionView() : renderPortraitQuestionView()
          )}

          {/* -------------------------------------------------------- */}
          {/* PHASE 3: 🏆 DONE (Duolingo Celebration & Daily Goal Screen) */}
          {/* -------------------------------------------------------- */}
          {phase === 'done' && (
            <div className={isLandscape ? "max-w-3xl mx-auto py-4 px-4 grid grid-cols-2 gap-4 items-center animate-fade-in" : "max-w-lg mx-auto text-center py-6 space-y-6 animate-fade-in"}>
              <div className="text-center space-y-3">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-lg"
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
                  <h2 className="text-xl sm:text-2xl font-black text-primary mt-1 mb-1">
                    太棒了！你完成了「{unit.badge || unit.title}」
                  </h2>
                  <p className="text-xs sm:text-sm text-secondary m-0">
                    單元皇冠熟練度提升至{' '}
                    <strong className="text-amber-500">
                      👑 Lv.{Math.min(5, currentCrown + 1)} / 5
                    </strong>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* 3 Duolingo Stat Tiles */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
                  <div
                    className="p-2.5 sm:p-3 rounded-2xl border-2"
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.1)',
                      borderColor: '#fbbf24'
                    }}
                  >
                    <div className="text-[10px] font-black text-amber-600 dark:text-amber-400">
                      獲得 XP
                    </div>
                    <div className="text-lg sm:text-xl font-black text-amber-500 mt-0.5">
                      +{Math.round((stageInfo.xpBase + maxCombo * 3) * stageInfo.xpMultiplier)}
                    </div>
                  </div>

                  <div
                    className="p-2.5 sm:p-3 rounded-2xl border-2"
                    style={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      borderColor: '#34d399'
                    }}
                  >
                    <div className="text-[10px] font-black text-emerald-600 dark:text-emerald-400">
                      正確率
                    </div>
                    <div className="text-lg sm:text-xl font-black text-emerald-500 mt-0.5">
                      {Math.round((firstTryCorrect / Math.max(1, baseTotal)) * 100)}%
                    </div>
                  </div>

                  <div
                    className="p-2.5 sm:p-3 rounded-2xl border-2"
                    style={{
                      backgroundColor: 'rgba(14, 165, 233, 0.1)',
                      borderColor: '#38bdf8'
                    }}
                  >
                    <div className="text-[10px] font-black text-sky-600 dark:text-sky-400">
                      用時
                    </div>
                    <div className="text-lg sm:text-xl font-black text-sky-500 mt-0.5">
                      {elapsedSec}s
                    </div>
                  </div>
                </div>

                {/* Daily XP Goal Bar */}
                <div
                  className="p-3.5 rounded-2xl border-2 text-left"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderColor: 'var(--border-light)'
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-black mb-1.5">
                    <span className="text-secondary">🎯 今日學習目標進度</span>
                    <span className="text-emerald-600 dark:text-emerald-400">
                      {todayXp} / {dailyXpGoal} XP {todayXp >= dailyXpGoal ? '✓ 已達標！' : ''}
                    </span>
                  </div>
                  <div className="h-2.5 rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800">
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

                {/* Landscape Action Buttons */}
                {isLandscape && (
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleSwitchStage(stageMode)}
                      className="btn-outline px-4 py-2.5 rounded-xl font-black text-xs flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <RotateCcw size={14} />
                      <span>再練一次</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="flex-1 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm text-white flex items-center justify-center gap-1 cursor-pointer"
                      style={{
                        backgroundColor: '#58cc02',
                        border: 'none',
                        boxShadow: '0 3px 0 #3f9102'
                      }}
                    >
                      <span>返回地圖</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 👇 3. Duolingo Bottom Feedback Sheet & 3D Action Bar (僅在直屏時展示，橫屏內嵌在右欄) */}
      {/* ============================================================ */}
      {!isLandscape && (
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
      )}
    </div>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalNode, document.body);
  }
  return modalNode;
};

export default DuolingoLessonModal;
