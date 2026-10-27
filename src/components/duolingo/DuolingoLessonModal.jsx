import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Heart,
  Zap,
  Volume2,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Trophy,
  RotateCcw,
  ArrowRight,
  HelpCircle,
  BookOpen,
  ShieldCheck,
  Gamepad2,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGamification } from '../../context/GamificationContext';
import { generateDuolingoExercisesForUnit } from '../../data/curriculumCatalog108';
import { quizData } from '../../data/quizData';
import { knowledgePointsData } from '../../data/knowledgePoints';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

const GAME_MODE_TABS = [
  { id: 'all', label: '🌟 綜合 6 關大冒險' },
  { id: 'word_bank', label: '🧩 字塊拼圖' },
  { id: 'matching', label: '🔗 配對消消樂' },
  { id: 'cloze', label: '✍️ 重點填空' },
  { id: 'true_false', label: '⚡ 防雷是非' },
  { id: 'listening', label: '🎧 聽力辨識' },
  { id: 'mcq', label: '🎯 參考書實戰' }
];

const DuolingoLessonModal = ({ isOpen, onClose, unit, subject }) => {
  const {
    hearts = 5,
    maxHearts = 5,
    unitCrowns = {},
    earnUnitCrown,
    loseHeart,
    refillHearts,
    activePetTemplate
  } = useGamification();

  const [gameModeFilter, setGameModeFilter] = useState('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [matchedIds, setMatchedIds] = useState([]);
  const [selectedLeftPair, setSelectedLeftPair] = useState(null);
  const [selectedRightPair, setSelectedRightPair] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedbackState, setFeedbackState] = useState(null); // null | { isCorrect: boolean, message: string, detail: string }
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showRefillMiniPractice, setShowRefillMiniPractice] = useState(false);
  const [showRescueHint, setShowRescueHint] = useState(false);

  // Generate multi-modal Learning Game exercises for this unit
  const allExercises = useMemo(() => {
    if (!unit) return [];
    const targetQuizId = unit.linkedUnitId || unit.id;
    const uQuestions = quizData[targetQuizId] || [];
    return generateDuolingoExercisesForUnit(unit, uQuestions, knowledgePointsData);
  }, [unit]);

  // Filter exercises by selected mini-game mode
  const exercises = useMemo(() => {
    if (gameModeFilter === 'all') return allExercises;
    const filtered = allExercises.filter(ex => ex.type === gameModeFilter);
    return filtered.length > 0 ? filtered : allExercises;
  }, [allExercises, gameModeFilter]);

  const resetCurrentStageInputs = () => {
    setSelectedTiles([]);
    setMatchedIds([]);
    setSelectedLeftPair(null);
    setSelectedRightPair(null);
    setSelectedOption(null);
    setFeedbackState(null);
    setShowRescueHint(false);
  };

  useEffect(() => {
    if (isOpen && unit) {
      setGameModeFilter('all');
      setCurrentIdx(0);
      resetCurrentStageInputs();
      setCombo(0);
      setMaxCombo(0);
      setCorrectCount(0);
      setIsCompleted(false);
      setShowRefillMiniPractice(false);
    }
  }, [isOpen, unit]);

  // Lock background scroll and allow Escape key to close
  useEffect(() => {
    if (!isOpen) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !unit || exercises.length === 0) return null;

  const safeIdx = Math.min(currentIdx, exercises.length - 1);
  const currentEx = exercises[safeIdx];
  const progressPercent = Math.round(((safeIdx + (feedbackState ? 1 : 0)) / exercises.length) * 100);
  const currentCrown = unitCrowns[unit.id] || 0;

  const handleSelectGameMode = (modeId) => {
    setGameModeFilter(modeId);
    setCurrentIdx(0);
    setIsCompleted(false);
    resetCurrentStageInputs();
    playSound('ios_tap');
  };

  // Handle Matching Pairs selection
  const handleSelectPairItem = (side, pairObj) => {
    if (feedbackState || matchedIds.includes(pairObj.id)) return;
    playSound('ios_tap');
    triggerHaptic('light');

    if (side === 'left') {
      setSelectedLeftPair(pairObj);
      if (selectedRightPair) {
        if (selectedRightPair.id === pairObj.id) {
          // Match!
          const nextMatched = [...matchedIds, pairObj.id];
          setMatchedIds(nextMatched);
          setSelectedLeftPair(null);
          setSelectedRightPair(null);
          playSound('correct');
          if (nextMatched.length === currentEx.pairs.length) {
            triggerSuccessFeedback(currentEx.explanation);
          }
        } else {
          // Mismatch
          playSound('wrong');
          setTimeout(() => {
            setSelectedLeftPair(null);
            setSelectedRightPair(null);
          }, 400);
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
            triggerSuccessFeedback(currentEx.explanation);
          }
        } else {
          playSound('wrong');
          setTimeout(() => {
            setSelectedLeftPair(null);
            setSelectedRightPair(null);
          }, 400);
        }
      }
    }
  };

  const triggerSuccessFeedback = (detailText) => {
    const nextCombo = combo + 1;
    setCombo(nextCombo);
    setMaxCombo(prev => Math.max(prev, nextCombo));
    setCorrectCount(prev => prev + 1);
    playSound('correct');
    triggerHaptic('medium');
    const cheers = [
      '太棒了！完全正確！🎉',
      '神準破題！學霸氣場全開！⚡',
      '無懈可擊！觀念超清晰！🌟',
      '完美連擊！離傳奇金冠更近一步！👑'
    ];
    setFeedbackState({
      isCorrect: true,
      message: cheers[nextCombo % cheers.length],
      detail: detailText
    });
  };

  const triggerErrorFeedback = (detailText) => {
    setCombo(0);
    loseHeart();
    playSound('wrong');
    triggerHaptic('heavy');
    setFeedbackState({
      isCorrect: false,
      message: '別氣餒！看看名師心法怎麼破解：💡',
      detail: detailText
    });
  };

  // Check current exercise answer
  const handleCheckAnswer = () => {
    if (feedbackState || !currentEx) return;

    if (currentEx.type === 'word_bank') {
      const userJoined = selectedTiles.map(t => t.text).join('');
      const targetJoined = currentEx.correctOrder.join('');
      if (userJoined === targetJoined) {
        triggerSuccessFeedback(currentEx.explanation);
      } else {
        triggerErrorFeedback(`正確順序為：「${currentEx.correctOrder.join(' ➔ ')}」。${currentEx.explanation}`);
      }
    } else if (currentEx.type === 'cloze' || currentEx.type === 'listening' || currentEx.type === 'mcq') {
      if (selectedOption === currentEx.correctAnswer) {
        triggerSuccessFeedback(currentEx.explanation);
      } else {
        triggerErrorFeedback(`正確答案是：【${currentEx.correctAnswer}】。${currentEx.explanation}`);
      }
    } else if (currentEx.type === 'true_false') {
      if (selectedOption === currentEx.correctBool) {
        triggerSuccessFeedback(currentEx.explanation);
      } else {
        triggerErrorFeedback(currentEx.explanation);
      }
    }
  };

  // Advance to next exercise or finish
  const handleNextStep = () => {
    if (safeIdx + 1 < exercises.length) {
      setCurrentIdx(prev => prev + 1);
      resetCurrentStageInputs();
      playSound('ios_tap');
    } else {
      // Finish Learning Game!
      const xpEarned = 40 + maxCombo * 5;
      const coinsEarned = 20;
      earnUnitCrown(unit.id, xpEarned, coinsEarned);
      setIsCompleted(true);
      playSound('levelup');
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 }
      });
      dispatchDynamicIsland({
        title: `👑 皇冠升級！(${Math.min(5, currentCrown + 1)}/5)`,
        subtitle: `${unit.title} 學習遊戲通關 +${xpEarned} XP`,
        icon: '🎮'
      });
    }
  };

  // Can Check button be clicked?
  const isCheckReady = () => {
    if (!currentEx) return false;
    if (currentEx.type === 'word_bank') return selectedTiles.length > 0;
    if (currentEx.type === 'matching') return matchedIds.length === currentEx.pairs.length;
    if (currentEx.type === 'true_false') return selectedOption !== null;
    return !!selectedOption;
  };

  const modalNode = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
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
        className="card animate-fade-in flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '760px',
          minHeight: '540px',
          maxHeight: '92vh',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '28px',
          border: '2px solid var(--border-strong)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          padding: 0,
          position: 'relative'
        }}
      >
        {/* ============================================================ */}
        {/* 🔝 Top Learning Game Progress & Hearts Header */}
        {/* ============================================================ */}
        <div
          className="flex flex-col border-b"
          style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}
        >
          <div className="flex items-center justify-between gap-3 px-5 pt-4 pb-2.5">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-secondary transition-colors cursor-pointer"
              style={{ border: 'none' }}
              title="離開學習遊戲"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-1.5 text-xs font-black text-emerald-600 dark:text-emerald-400">
              <Gamepad2 size={16} />
              <span className="hidden sm:inline">互動學習遊戲</span>
            </div>

            {/* Animated Green Progress Bar */}
            <div className="flex-1 h-4 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative p-0.5">
              <div
                style={{
                  width: `${isCompleted ? 100 : progressPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #22c55e 0%, #10b981 100%)',
                  borderRadius: '999px',
                  transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
                    backgroundColor: 'rgba(255,255,255,0.35)',
                    borderRadius: '999px'
                  }}
                />
              </div>
            </div>

            {/* Combo Streak Badge */}
            {combo >= 2 && !isCompleted && (
              <div className="badge bg-amber-500 text-white font-black text-xs px-2.5 py-1 animate-bounce">
                🔥 {combo} 連擊
              </div>
            )}

            {/* Hearts / Stamina Indicator + Free Practice Refill */}
            <button
              onClick={() => setShowRefillMiniPractice(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-black text-xs cursor-pointer transition-transform hover:scale-105"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                color: '#ef4444',
                border: '1.5px solid rgba(239, 68, 68, 0.3)'
              }}
              title="點擊免費回血（練習即刻補滿 5 顆愛心）"
            >
              <Heart size={15} className="fill-red-500 text-red-500" />
              <span>{hearts} / {maxHearts}</span>
            </button>
          </div>

          {/* Mini-Game Mode Switcher Bar */}
          {!isCompleted && (
            <div className="px-5 pb-2.5 flex items-center gap-1.5 overflow-x-auto">
              {GAME_MODE_TABS.map((tab) => {
                const active = gameModeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectGameMode(tab.id)}
                    className="px-2.5 py-1 rounded-xl text-[11px] font-black whitespace-nowrap cursor-pointer transition-all"
                    style={{
                      backgroundColor: active ? '#16a34a' : 'var(--bg-tertiary)',
                      color: active ? '#ffffff' : 'var(--text-secondary)',
                      border: active ? '1.5px solid #16a34a' : '1px solid var(--border-light)'
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* ❤️ Zero-Heart Free Refill Banner (100% Green Educational) */}
        {/* ============================================================ */}
        {(hearts === 0 || showRefillMiniPractice) && !isCompleted && (
          <div
            className="mx-5 mt-3 p-3.5 rounded-2xl flex items-center justify-between flex-wrap gap-3 animate-fade-in"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(16, 185, 129, 0.12) 100%)',
              border: '1.5px solid #10b981'
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">💖</span>
              <div>
                <div className="text-xs font-black text-primary">
                  公益免費能量站：默念一次本單元核心口訣即可補滿 5 顆愛心！
                </div>
                <div className="text-[11px] text-secondary mt-0.5">
                  口訣：{unit.catalog?.quickRescue?.replace(/\$/g, '')}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                refillHearts(5);
                setShowRefillMiniPractice(false);
              }}
              className="px-3.5 py-1.5 rounded-xl font-black text-xs text-white cursor-pointer"
              style={{ backgroundColor: '#10b981', border: 'none' }}
            >
              ⚡ 我記住了！免費補滿 5 顆愛心
            </button>
          </div>
        )}

        {/* ============================================================ */}
        {/* 🎮 Main Interactive Exercise Body or Victory Celebration */}
        {/* ============================================================ */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {isCompleted ? (
            <div className="text-center py-6 flex flex-col items-center gap-4 animate-fade-in">
              <div
                className="w-24 h-24 rounded-3xl flex items-center justify-center text-5xl shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 55%, #d97706 100%)',
                  boxShadow: '0 12px 30px rgba(245, 158, 11, 0.4)'
                }}
              >
                👑
              </div>

              <div>
                <span className="badge badge-success font-black text-xs px-3 py-1 mb-2 inline-block">
                  🎉 學習遊戲闖關特訓大成功！
                </span>
                <h2 className="h2 m-0" style={{ fontSize: '1.65rem' }}>
                  {unit.title}
                </h2>
                <p className="text-sm text-secondary mt-1">
                  皇冠熟練度晉升為 <strong className="text-amber-500">👑 Lv.{Math.min(5, currentCrown + 1)} / 5</strong>！
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 w-full max-w-md my-2">
                <div className="p-3 rounded-2xl border text-center" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-light)' }}>
                  <div className="text-[11px] font-bold text-secondary">獲得經驗值</div>
                  <div className="text-lg font-black text-emerald-500 mt-0.5">+{40 + maxCombo * 5} XP</div>
                </div>
                <div className="p-3 rounded-2xl border text-center" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-light)' }}>
                  <div className="text-[11px] font-bold text-secondary">最高連擊</div>
                  <div className="text-lg font-black text-amber-500 mt-0.5">🔥 {maxCombo} 連擊</div>
                </div>
                <div className="p-3 rounded-2xl border text-center" style={{ backgroundColor: 'var(--bg-tertiary)', borderColor: 'var(--border-light)' }}>
                  <div className="text-[11px] font-bold text-secondary">答對率</div>
                  <div className="text-lg font-black text-indigo-500 mt-0.5">
                    {Math.round((correctCount / exercises.length) * 100)}%
                  </div>
                </div>
              </div>

              {/* Textbook & Reference Summary Card */}
              <div
                className="w-full p-4 rounded-2xl text-left text-xs"
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1.5px solid var(--border-light)'
                }}
              >
                <div className="font-black text-primary mb-1.5 flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>本關卡全版本課本與參考書結業認證：</span>
                </div>
                <div className="text-secondary leading-relaxed">
                  ✅ 已掌握 <strong>康軒 / 南一 / 翰林</strong> 課本核心觀念與 <strong>自修・評量・麻辣講義</strong> 必考題型。<br />
                  💡 考前秒殺口訣：<strong>{unit.catalog?.quickRescue?.replace(/\$/g, '')}</strong>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {/* Exercise Type & Reference Book Source Badge + Stage Dots */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className="badge font-black text-xs px-3 py-1"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.14)', color: '#059669' }}
                  >
                    {currentEx.typeLabel}
                  </span>
                  <span
                    className="badge font-bold text-xs px-2.5 py-1"
                    style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                  >
                    {currentEx.sourceTag}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setShowRescueHint(prev => !prev);
                      playSound('ios_tap');
                    }}
                    className="px-2.5 py-1 rounded-xl text-xs font-black flex items-center gap-1 cursor-pointer"
                    style={{
                      backgroundColor: showRescueHint ? 'rgba(245, 158, 11, 0.2)' : 'rgba(245, 158, 11, 0.1)',
                      color: '#d97706',
                      border: '1px solid rgba(245, 158, 11, 0.4)'
                    }}
                  >
                    <Lightbulb size={13} />
                    <span>{showRescueHint ? '收起秒殺提示' : '💡 錦囊提示'}</span>
                  </button>
                  <span className="text-xs font-bold text-tertiary">
                    關卡 {safeIdx + 1} / {exercises.length}
                  </span>
                </div>
              </div>

              {/* Instant Rescue Hint Drawer */}
              {showRescueHint && (
                <div
                  className="p-3 rounded-2xl text-xs animate-fade-in"
                  style={{
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    border: '1.5px solid rgba(245, 158, 11, 0.4)'
                  }}
                >
                  <div className="font-black text-amber-600 dark:text-amber-400 mb-0.5">
                    💡 108 課綱跨版本秒殺口訣：
                  </div>
                  <div className="text-primary font-bold leading-relaxed">
                    {unit.catalog?.quickRescue?.replace(/\$/g, '') || currentEx.explanation}
                  </div>
                </div>
              )}

              {/* Mascot Speech Bubble Prompt */}
              <div className="flex items-start gap-3.5 my-1">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm border"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-strong)'
                  }}
                >
                  {activePetTemplate?.emoji || subject?.emoji || '🎮'}
                </div>
                <div
                  className="flex-1 p-3.5 rounded-2xl relative"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    border: '1.5px solid var(--border-strong)'
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-black text-primary m-0 leading-snug">
                      {currentEx.prompt}
                    </h3>
                    <button
                      onClick={() => speechEngine.speak(currentEx.audioText || currentEx.prompt)}
                      className="p-2 rounded-xl bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 flex-shrink-0 cursor-pointer"
                      style={{ border: 'none' }}
                      title="點擊語音朗讀題目"
                    >
                      <Volume2 size={18} />
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
              {/* TYPE 1: 🧩 WORD / FORMULA BANK */}
              {/* ======================================================== */}
              {currentEx.type === 'word_bank' && (
                <div className="flex flex-col gap-4 mt-2">
                  {/* Answer Drop Tray */}
                  <div
                    className="min-h-[76px] p-3.5 rounded-2xl flex flex-wrap items-center gap-2"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '2px dashed var(--border-strong)'
                    }}
                  >
                    {selectedTiles.length === 0 ? (
                      <span className="text-xs text-tertiary font-semibold">
                        👇 請依序點擊下方字塊，排列出正確公式或觀念心法...
                      </span>
                    ) : (
                      selectedTiles.map((tile) => (
                        <button
                          key={tile.id}
                          disabled={!!feedbackState}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedTiles(prev => prev.filter(t => t.id !== tile.id));
                          }}
                          className="px-3.5 py-2 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all shadow-sm"
                          style={{
                            backgroundColor: '#3b82f6',
                            color: '#ffffff',
                            border: 'none',
                            boxShadow: '0 3px 0 #1d4ed8'
                          }}
                        >
                          {tile.text}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Available Tiles Pool */}
                  <div className="flex flex-wrap gap-2.5 justify-center py-2">
                    {currentEx.allTiles.map((tile) => {
                      const isUsed = selectedTiles.some(t => t.id === tile.id);
                      return (
                        <button
                          key={tile.id}
                          disabled={isUsed || !!feedbackState}
                          onClick={() => {
                            playSound('ios_tap');
                            triggerHaptic('light');
                            setSelectedTiles(prev => [...prev, tile]);
                          }}
                          className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer"
                          style={{
                            backgroundColor: isUsed ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
                            color: isUsed ? 'transparent' : 'var(--text-primary)',
                            border: '2px solid var(--border-strong)',
                            boxShadow: isUsed ? 'none' : '0 4px 0 var(--border-strong)',
                            transform: isUsed ? 'translateY(2px)' : 'none'
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
              {/* TYPE 2: 🔗 MATCHING PAIRS */}
              {/* ======================================================== */}
              {currentEx.type === 'matching' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                  <div className="flex flex-col gap-2.5">
                    <div className="text-xs font-black text-secondary mb-0.5">📌 核心概念詞彙</div>
                    {currentEx.pairs.map((p) => {
                      const isMatched = matchedIds.includes(p.id);
                      const isSelected = selectedLeftPair?.id === p.id;
                      return (
                        <button
                          key={`left-${p.id}`}
                          disabled={isMatched}
                          onClick={() => handleSelectPairItem('left', p)}
                          className="p-3 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all cursor-pointer"
                          style={{
                            backgroundColor: isMatched
                              ? 'rgba(16, 185, 129, 0.12)'
                              : isSelected
                              ? 'rgba(59, 130, 246, 0.16)'
                              : 'var(--bg-secondary)',
                            border: isMatched
                              ? '2px solid #10b981'
                              : isSelected
                              ? '2px solid #3b82f6'
                              : '2px solid var(--border-strong)',
                            color: isMatched ? '#059669' : 'var(--text-primary)',
                            opacity: isMatched ? 0.6 : 1,
                            boxShadow: isMatched ? 'none' : '0 3px 0 var(--border-strong)'
                          }}
                        >
                          {isMatched ? '✅ ' : '🔹 '}
                          {p.left}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <div className="text-xs font-black text-secondary mb-0.5">🎯 對應定義與課本重點</div>
                    {[...currentEx.pairs].reverse().map((p) => {
                      const isMatched = matchedIds.includes(p.id);
                      const isSelected = selectedRightPair?.id === p.id;
                      return (
                        <button
                          key={`right-${p.id}`}
                          disabled={isMatched}
                          onClick={() => handleSelectPairItem('right', p)}
                          className="p-3 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all cursor-pointer"
                          style={{
                            backgroundColor: isMatched
                              ? 'rgba(16, 185, 129, 0.12)'
                              : isSelected
                              ? 'rgba(59, 130, 246, 0.16)'
                              : 'var(--bg-secondary)',
                            border: isMatched
                              ? '2px solid #10b981'
                              : isSelected
                              ? '2px solid #3b82f6'
                              : '2px solid var(--border-strong)',
                            color: isMatched ? '#059669' : 'var(--text-primary)',
                            opacity: isMatched ? 0.6 : 1,
                            boxShadow: isMatched ? 'none' : '0 3px 0 var(--border-strong)'
                          }}
                        >
                          {isMatched ? '✅ ' : '🔸 '}
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
                <div className="flex flex-col gap-4 mt-2">
                  <div
                    className="p-4 rounded-2xl text-sm sm:text-base font-bold leading-relaxed"
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '2px solid var(--border-light)'
                    }}
                  >
                    <span>{currentEx.sentenceBefore}</span>
                    <span
                      className="inline-block px-3 py-1 mx-1 rounded-lg font-black"
                      style={{
                        backgroundColor: selectedOption ? '#3b82f6' : 'rgba(59, 130, 246, 0.15)',
                        color: selectedOption ? '#ffffff' : '#2563eb',
                        border: '1.5px dashed #3b82f6'
                      }}
                    >
                      {selectedOption || '＿＿請選擇下方關鍵字＿＿'}
                    </span>
                    <span>{currentEx.sentenceAfter}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentEx.options.map((opt, idx) => {
                      const isSel = selectedOption === opt;
                      return (
                        <button
                          key={idx}
                          disabled={!!feedbackState}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedOption(opt);
                          }}
                          className="p-3.5 rounded-2xl text-left font-bold text-xs sm:text-sm transition-all cursor-pointer"
                          style={{
                            backgroundColor: isSel ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-secondary)',
                            border: isSel ? '2px solid #2563eb' : '2px solid var(--border-strong)',
                            boxShadow: '0 3px 0 var(--border-strong)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <span className="font-black mr-2 text-blue-600">{idx + 1}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TYPE 4: ⚡ TRUE / FALSE MISCONCEPTION BLITZ */}
              {/* ======================================================== */}
              {currentEx.type === 'true_false' && (
                <div className="flex flex-col gap-4 mt-2">
                  <div
                    className="p-4 rounded-2xl font-bold text-sm sm:text-base leading-relaxed"
                    style={{
                      backgroundColor: 'rgba(245, 158, 11, 0.08)',
                      border: '2px solid rgba(245, 158, 11, 0.35)'
                    }}
                  >
                    {currentEx.statement}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { val: true, label: '⭕ 觀念正確 (True)', color: '#10b981' },
                      { val: false, label: '❌ 觀念有誤 (False)', color: '#ef4444' }
                    ].map((btn) => {
                      const isSel = selectedOption === btn.val;
                      return (
                        <button
                          key={String(btn.val)}
                          disabled={!!feedbackState}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedOption(btn.val);
                          }}
                          className="p-4 rounded-2xl font-black text-sm sm:text-base transition-all cursor-pointer text-center"
                          style={{
                            backgroundColor: isSel ? `${btn.color}20` : 'var(--bg-secondary)',
                            border: isSel ? `2.5px solid ${btn.color}` : '2px solid var(--border-strong)',
                            color: isSel ? btn.color : 'var(--text-primary)',
                            boxShadow: '0 4px 0 var(--border-strong)'
                          }}
                        >
                          {btn.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ======================================================== */}
              {/* TYPE 5 & 6: 🎧 LISTENING & 🎯 REFERENCE BOOK MCQ */}
              {/* ======================================================== */}
              {(currentEx.type === 'listening' || currentEx.type === 'mcq') && (
                <div className="flex flex-col gap-3 mt-1">
                  {currentEx.type === 'listening' && (
                    <div className="flex justify-center py-2">
                      <button
                        onClick={() => speechEngine.speak(currentEx.audioText)}
                        className="px-6 py-4 rounded-3xl flex items-center gap-3 font-black text-sm text-white shadow-lg transition-transform hover:scale-105 cursor-pointer"
                        style={{
                          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                          border: 'none',
                          boxShadow: '0 6px 0 #1e40af'
                        }}
                      >
                        <Volume2 size={26} />
                        <span>🔊 點擊播放語音考點 (可重複聆聽)</span>
                      </button>
                    </div>
                  )}

                  <div className="flex flex-col gap-2.5">
                    {currentEx.options.map((opt, idx) => {
                      const isSel = selectedOption === opt;
                      return (
                        <button
                          key={idx}
                          disabled={!!feedbackState}
                          onClick={() => {
                            playSound('ios_tap');
                            setSelectedOption(opt);
                          }}
                          className="p-3.5 rounded-2xl text-left font-bold text-xs sm:text-sm flex items-center gap-3 transition-all cursor-pointer"
                          style={{
                            backgroundColor: isSel ? 'rgba(59, 130, 246, 0.14)' : 'var(--bg-secondary)',
                            border: isSel ? '2.5px solid #2563eb' : '2px solid var(--border-strong)',
                            boxShadow: '0 3px 0 var(--border-strong)',
                            color: 'var(--text-primary)'
                          }}
                        >
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center font-black text-xs flex-shrink-0"
                            style={{
                              backgroundColor: isSel ? '#2563eb' : 'var(--bg-tertiary)',
                              color: isSel ? '#ffffff' : 'var(--text-secondary)'
                            }}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ============================================================ */}
        {/* 👇 Bottom Animated Feedback Sheet & Action Button */}
        {/* ============================================================ */}
        <div
          className="px-6 py-4 border-t transition-all"
          style={{
            backgroundColor: feedbackState
              ? feedbackState.isCorrect
                ? 'rgba(16, 185, 129, 0.14)'
                : 'rgba(239, 68, 68, 0.14)'
              : 'var(--bg-secondary)',
            borderColor: feedbackState
              ? feedbackState.isCorrect
                ? '#10b981'
                : '#ef4444'
              : 'var(--border-light)'
          }}
        >
          {isCompleted ? (
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => {
                  setCurrentIdx(0);
                  resetCurrentStageInputs();
                  setIsCompleted(false);
                }}
                className="btn-outline flex items-center gap-1.5 font-black text-xs sm:text-sm py-3 px-5 rounded-2xl cursor-pointer"
              >
                <RotateCcw size={16} />
                <span>再玩一次衝金冠</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3.5 px-6 rounded-2xl font-black text-sm text-white flex items-center justify-center gap-2 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  border: 'none',
                  boxShadow: '0 4px 0 #15803d'
                }}
              >
                <span>完成領獎・返回學習遊戲地圖</span>
                <ArrowRight size={17} />
              </button>
            </div>
          ) : feedbackState ? (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: feedbackState.isCorrect ? '#10b981' : '#ef4444' }}
                >
                  {feedbackState.isCorrect ? <CheckCircle2 size={22} /> : <AlertTriangle size={22} />}
                </div>
                <div>
                  <div
                    className="font-black text-sm sm:text-base"
                    style={{ color: feedbackState.isCorrect ? '#059669' : '#dc2626' }}
                  >
                    {feedbackState.message}
                  </div>
                  <div className="text-xs text-primary mt-0.5 leading-relaxed">
                    {feedbackState.detail}
                  </div>
                </div>
              </div>

              <button
                onClick={handleNextStep}
                className="py-3 px-6 rounded-2xl font-black text-xs sm:text-sm text-white flex-shrink-0 cursor-pointer"
                style={{
                  backgroundColor: feedbackState.isCorrect ? '#16a34a' : '#ef4444',
                  border: 'none',
                  boxShadow: feedbackState.isCorrect ? '0 4px 0 #15803d' : '0 4px 0 #b91c1c'
                }}
              >
                繼續下一關 ➔
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs text-secondary font-semibold hidden sm:flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-500" />
                <span>108課綱三大版本與參考書精選微遊戲</span>
              </div>

              <button
                disabled={!isCheckReady()}
                onClick={handleCheckAnswer}
                className="w-full sm:w-auto sm:min-w-[180px] py-3 px-6 rounded-2xl font-black text-sm transition-all cursor-pointer"
                style={{
                  backgroundColor: isCheckReady() ? '#22c55e' : 'var(--bg-tertiary)',
                  color: isCheckReady() ? '#ffffff' : 'var(--text-tertiary)',
                  border: 'none',
                  boxShadow: isCheckReady() ? '0 4px 0 #15803d' : 'none',
                  cursor: isCheckReady() ? 'pointer' : 'not-allowed'
                }}
              >
                檢查答案 (CHECK)
              </button>
            </div>
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
