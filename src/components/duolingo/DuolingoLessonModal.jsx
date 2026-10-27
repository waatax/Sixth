import { useState, useEffect, useMemo } from 'react';
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
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useGamification } from '../../context/GamificationContext';
import { generateDuolingoExercisesForUnit } from '../../data/curriculumCatalog108';
import { quizData } from '../../data/quizData';
import { knowledgePointsData } from '../../data/knowledgePoints';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';

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

  // Generate multi-modal Duolingo exercises for this unit
  const exercises = useMemo(() => {
    if (!unit) return [];
    const targetQuizId = unit.linkedUnitId || unit.id;
    const uQuestions = quizData[targetQuizId] || [];
    return generateDuolingoExercisesForUnit(unit, uQuestions, knowledgePointsData);
  }, [unit]);

  useEffect(() => {
    if (isOpen && unit) {
      setCurrentIdx(0);
      setSelectedTiles([]);
      setMatchedIds([]);
      setSelectedLeftPair(null);
      setSelectedRightPair(null);
      setSelectedOption(null);
      setFeedbackState(null);
      setCombo(0);
      setMaxCombo(0);
      setCorrectCount(0);
      setIsCompleted(false);
      setShowRefillMiniPractice(false);
    }
  }, [isOpen, unit]);

  if (!isOpen || !unit || exercises.length === 0) return null;

  const currentEx = exercises[currentIdx];
  const progressPercent = Math.round(((currentIdx + (feedbackState ? 1 : 0)) / exercises.length) * 100);
  const currentCrown = unitCrowns[unit.id] || 0;

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
    if (feedbackState) return;

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
    if (currentIdx + 1 < exercises.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedTiles([]);
      setMatchedIds([]);
      setSelectedLeftPair(null);
      setSelectedRightPair(null);
      setSelectedOption(null);
      setFeedbackState(null);
      playSound('ios_tap');
    } else {
      // Finish Lesson!
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
        subtitle: `${unit.title} 獲得 +${xpEarned} XP`,
        icon: '🦉'
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

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        backgroundColor: 'rgba(15, 23, 42, 0.78)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}
    >
      <div
        className="card animate-fade-in flex flex-col justify-between"
        style={{
          width: '100%',
          maxWidth: '720px',
          minHeight: '540px',
          maxHeight: '92vh',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '28px',
          border: '2px solid var(--border-strong)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
          overflow: 'hidden',
          padding: 0,
          position: 'relative'
        }}
      >
        {/* ============================================================ */}
        {/* 🔝 Top Duolingo Progress & Hearts Header */}
        {/* ============================================================ */}
        <div
          className="flex items-center justify-between gap-3 px-5 py-4 border-b"
          style={{ borderColor: 'var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}
        >
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-secondary transition-colors"
            title="離開闖關"
          >
            <X size={20} />
          </button>

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
                  🎉 Duolingo 闖關特訓大成功！
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
              {/* Exercise Type & Reference Book Source Badge */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
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
                <span className="text-xs font-bold text-tertiary">
                  關卡進度 {currentIdx + 1} / {exercises.length}
                </span>
              </div>

              {/* Mascot Speech Bubble Prompt */}
              <div className="flex items-start gap-3.5 my-1">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-sm border"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    borderColor: 'var(--border-strong)'
                  }}
                >
                  {activePetTemplate?.emoji || subject?.emoji || '🦉'}
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
        {/* 👇 Bottom Duolingo Animated Feedback Sheet & Action Button */}
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
                  setSelectedTiles([]);
                  setMatchedIds([]);
                  setSelectedOption(null);
                  setFeedbackState(null);
                  setIsCompleted(false);
                }}
                className="btn-outline flex items-center gap-1.5 font-black text-xs sm:text-sm py-3 px-5 rounded-2xl"
              >
                <RotateCcw size={16} />
                <span>再練一次衝金冠</span>
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
                <span>完成領獎・返回闖關地圖</span>
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
                繼續下一題 ➔
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs text-secondary font-semibold hidden sm:flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-500" />
                <span>108課綱三大版本與參考書精選微練習</span>
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
};

export default DuolingoLessonModal;
