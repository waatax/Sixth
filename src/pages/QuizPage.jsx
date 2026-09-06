import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Zap, Sparkles, BookOpen, RotateCcw, Volume2, VolumeX, ShieldCheck, Heart, Flame, HelpCircle, Keyboard } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { playSound, toggleMute, getMuteState, triggerHaptic, dispatchDynamicIsland } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';
import { useGamification } from '../context/GamificationContext';
import ComboFlameIndicator from '../components/gamification/ComboFlameIndicator';

const QuizPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const { recordQuizResult, inventory, consumeItem } = useGamification();


  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [muted, setMuted] = useState(getMuteState());
  const [combo, setCombo] = useState(0);
  const [disabledOptions, setDisabledOptions] = useState([]);
  const [quizSummary, setQuizSummary] = useState(null);

  const questions = quizData[unitId] || [];

  const handleMuteToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
  };

  const handleSelect = (index) => {
    if (showResult || disabledOptions.includes(index)) return;
    setSelectedOption(index);
    triggerHaptic('selection');
    playSound('click');
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const question = questions[currentQ];
    const isCorrect = selectedOption === question.answerIndex;
    if (isCorrect) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setScore(s => s + 1);
      if (nextCombo >= 3) {
        playSound('combo', nextCombo);
        triggerHaptic('heavy');
        dispatchDynamicIsland({
          title: `🔥 ${nextCombo} 連擊狂暴達成！`,
          subtitle: '多巴胺經驗加倍觸發',
          icon: '🔥'
        });
      } else {
        playSound('correct');
        triggerHaptic('success');
      }
    } else {
      setCombo(0);
      playSound('wrong');
      triggerHaptic('error');
    }

    setUserAnswers(prev => [...prev, { qIndex: currentQ, selected: selectedOption, correct: isCorrect }]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      const finalScore = score + (selectedOption === questions[currentQ].answerIndex ? 1 : 0);
      const result = recordQuizResult(unitId, finalScore, questions.length);
      setQuizSummary(result);

      // Save mistake record if any
      try {
        const existingMistakes = JSON.parse(localStorage.getItem('sixth_student_mistakes') || '[]');
        const newMistakes = [];
        questions.forEach((q, idx) => {
          const ans = userAnswers[idx] || (idx === currentQ ? { selected: selectedOption, correct: selectedOption === q.answerIndex } : null);
          if (ans && !ans.correct) {
            const alreadyExists = existingMistakes.some(m => m.question === q.question);
            if (!alreadyExists) {
              newMistakes.push({
                ...q,
                unitId,
                userWrongAnswer: ans.selected !== null ? q.options[ans.selected] : '未作答',
                date: new Date().toISOString().slice(0, 10)
              });
            }
          }
        });
        if (newMistakes.length > 0) {
          localStorage.setItem('sixth_student_mistakes', JSON.stringify([...existingMistakes, ...newMistakes]));
        }
      } catch (e) {}

      playSound('levelup');
      triggerHaptic('heavy');
      dispatchDynamicIsland({
        title: `🏆 單元通關結算完成！`,
        subtitle: `得分: ${finalScore} / ${questions.length} 題・評星已入庫`,
        icon: '🎖️'
      });
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6']
      });

      setCurrentQ(questions.length); 
    } else {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setShowResult(false);
      setDisabledOptions([]);
    }
  };

  const handleUse5050 = () => {
    if ((inventory.hint_5050 || 0) <= 0) {
      alert('背包中沒有 50:50 提示卡了！可至星光商城購買！');
      return;
    }
    const q = questions[currentQ];
    const wrongIndices = q.options.map((_, i) => i).filter(i => i !== q.answerIndex);
    const twoWrongs = wrongIndices.slice(0, 2);
    setDisabledOptions(twoWrongs);
    consumeItem('hint_5050');
    playSound('coin');
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setCombo(0);
    setDisabledOptions([]);
    setQuizSummary(null);
  };

  // Keyboard navigation & shortcuts (1-4 / A-D / Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if finished
      if (currentQ >= questions.length) return;

      const key = e.key.toLowerCase();
      if (!showResult) {
        if (key === '1' || key === 'a') handleSelect(0);
        else if (key === '2' || key === 'b') handleSelect(1);
        else if (key === '3' || key === 'c') handleSelect(2);
        else if (key === '4' || key === 'd') handleSelect(3);
        else if (key === 'enter' && selectedOption !== null) handleSubmit();
      } else {
        if (key === 'enter') handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQ, selectedOption, showResult, questions.length]);

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h2 className="h2">此單元尚無重點測驗</h2>
        <button className="btn-primary" onClick={() => navigate(-1)}>返回單元</button>
      </div>
    );
  }

  const question = questions[currentQ];
  const isLastQuestion = currentQ === questions.length - 1;

  // Final Celebration Screen
  if (currentQ >= questions.length) {
    const percentage = Math.round((score / questions.length) * 100);
    const stars = quizSummary?.stars || (percentage >= 90 ? 3 : percentage >= 60 ? 2 : 1);
    const coinsEarned = quizSummary?.earnedCoins || stars * 15;
    const xpEarned = quizSummary?.earnedXp || (score * 20);

    return (
      <div
        className="card flex flex-col items-center text-center gap-6 py-10 max-w-xl mx-auto mt-4 animate-fade-in"
        style={{
          borderTop: '6px solid var(--accent-primary)',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--border-light)',
          padding: '36px 28px',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--accent-warning-soft)',
            padding: '20px',
            borderRadius: '50%',
            color: 'var(--accent-warning)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Trophy size={54} />
        </div>

        <div>
          <div className="flex items-center justify-center gap-1.5 text-2xl my-1">
            {'⭐'.repeat(stars)}
            {'☆'.repeat(3 - stars)}
          </div>
          <span className="badge badge-success mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
            🎉 測驗完成！評分：{stars} 顆星！
          </span>
          <h2 className="h1" style={{ margin: '8px 0', fontSize: 'calc(2.2rem * var(--font-scale))' }}>
            觀念檢核得分：{percentage} 分
          </h2>
          <p className="text-secondary text-sm" style={{ lineHeight: 1.7 }}>
            共 {questions.length} 題，答對 {score} 題。{percentage >= 80 ? '🌟 太厲害了！你已徹底掌握本單元核心素養！' : '💪 繼續努力！搞懂錯題就是最大的進步！'}
          </p>
        </div>

        {/* Rewards Earned Pill */}
        <div className="flex gap-3 justify-center w-full">
          <div className="p-3 rounded-xl text-center flex-1" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-xs text-secondary">經驗值</div>
            <div className="font-bold text-base text-blue-500">+{xpEarned} XP</div>
          </div>
          <div className="p-3 rounded-xl text-center flex-1" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="text-xs text-secondary">星光金幣</div>
            <div className="font-bold text-base text-amber-500">+{coinsEarned} 🪙</div>
          </div>
        </div>

        {/* Mistakes Review List */}
        <div className="w-full text-left mt-2">
          <h4 className="h4 mb-3" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>
            📋 本次作答詳解回顧：
          </h4>
          <div className="flex flex-col gap-3">
            {questions.map((q, idx) => {
              const ans = userAnswers[idx];
              return (
                <div
                  key={q.id}
                  style={{
                    padding: '14px 18px',
                    backgroundColor: 'var(--bg-tertiary)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    borderLeft: ans?.correct ? '4px solid var(--accent-success)' : '4px solid var(--accent-error)',
                    fontSize: '0.9rem'
                  }}
                >
                  <div className="flex items-center justify-between gap-2 font-bold mb-1.5" style={{ color: 'var(--text-primary)' }}>
                    <div className="flex items-center gap-2">
                      <span>第 {idx + 1} 題：{q.question}</span>
                      {unitId?.startsWith('eng-') && (
                        <button
                          className="btn-outline p-1 rounded inline-flex items-center"
                          style={{ minHeight: 'auto', padding: '2px 6px', fontSize: '0.72rem' }}
                          onClick={() => speechEngine.speak(q.question)}
                          title="朗讀題目"
                        >
                          <Volume2 size={12} />
                        </button>
                      )}
                    </div>
                    {ans?.correct ? (
                      <CheckCircle2 size={18} style={{ color: 'var(--accent-success)', flexShrink: 0 }} />
                    ) : (
                      <XCircle size={18} style={{ color: 'var(--accent-error)', flexShrink: 0 }} />
                    )}
                  </div>
                  <div className="text-xs text-secondary mt-1">
                    <strong style={{ color: 'var(--text-primary)' }}>正確解答：</strong> {q.options[q.answerIndex]}
                  </div>
                  <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>觀念名師解析：</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center w-full">
          <button className="btn-outline flex items-center gap-2 text-sm" onClick={handleRestart}>
            <RotateCcw size={16} /> 重新挑戰刷滿 3 星
          </button>

          <button className="btn-primary flex items-center gap-2 text-sm" onClick={() => navigate(-1)}>
            回到單元列表 →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-4 flex flex-col gap-5 py-2">
      <div className="flex justify-between items-center">
        <button 
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> 返回單元列表
        </button>

        <div className="flex items-center gap-3">
          <ComboFlameIndicator comboCount={combo} />

          <button 
            onClick={handleMuteToggle}
            className="btn-pill"
            title={muted ? '開啟音效' : '靜音'}
          >
            {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{muted ? '靜音' : '音效開啟'}</span>
          </button>
        </div>
      </div>

      <div className="card flex flex-col gap-6" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', border: '1.5px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}>
        {/* Progress Header & 50:50 Lifeline */}
        <div className="flex justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="badge badge-accent" style={{ fontWeight: 700 }}>
            ✏️ 單元重點測驗・觀念驗收
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleUse5050}
              className="btn-outline flex items-center gap-1 text-xs py-1 px-3 font-bold"
              style={{
                backgroundColor: 'var(--accent-warning-soft)',
                borderColor: 'var(--accent-warning)',
                color: 'var(--accent-warning-text)'
              }}
              title="消耗 1 張 50:50 提示卡排除 2 個錯誤選項"
            >
              <HelpCircle size={14} />
              <span>50:50 排除卡 ({inventory.hint_5050 || 0})</span>
            </button>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>第 {currentQ + 1} / {questions.length} 題</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${((currentQ + 1) / questions.length) * 100}%`, 
              height: '100%', 
              backgroundColor: 'var(--accent-primary)', 
              transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
            }} 
          />
        </div>

        {/* Question Title */}
        <div className="flex justify-between items-start gap-3">
          <h2 className="h3" style={{ fontSize: 'calc(1.3rem * var(--font-scale))', lineHeight: 1.55, flex: 1 }}>
            {currentQ + 1}. {question.question}
          </h2>
          {unitId?.startsWith('eng-') && (
            <button
              className="btn-outline flex items-center gap-1 text-xs"
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                flexShrink: 0,
                backgroundColor: 'var(--accent-soft)',
                borderColor: 'var(--accent-primary)',
                color: 'var(--accent-primary)',
                fontWeight: 700
              }}
              onClick={() => speechEngine.speak(question.question)}
              title="點擊朗讀此英文題目"
            >
              <Volume2 size={14} />
              <span>🔊 聽題目</span>
            </button>
          )}
        </div>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => {
            const isAnswer = i === question.answerIndex;
            const isUserSelected = i === selectedOption;
            const isDisabled = disabledOptions.includes(i);

            let bgColor = 'var(--bg-secondary)';
            let borderColor = 'var(--border-strong)';
            let textColor = 'var(--text-primary)';
            let fontWeight = 400;

            if (showResult) {
              if (isAnswer) {
                bgColor = 'var(--accent-success-soft)';
                borderColor = 'var(--accent-success)';
                textColor = 'var(--accent-success-text)';
                fontWeight = 700;
              } else if (isUserSelected && !isAnswer) {
                bgColor = 'var(--accent-error-soft)';
                borderColor = 'var(--accent-error)';
                textColor = 'var(--accent-error-text)';
                fontWeight = 700;
              }
            } else if (isUserSelected) {
              bgColor = 'var(--accent-soft)';
              borderColor = 'var(--accent-primary)';
              textColor = 'var(--accent-text)';
              fontWeight = 700;
            }

            return (
              <button
                key={i}
                disabled={isDisabled}
                className="btn-outline flex justify-between items-center transition-all"
                style={{
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'calc(0.98rem * var(--font-scale))',
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  color: textColor,
                  fontWeight: fontWeight,
                  lineHeight: 1.5,
                  opacity: isDisabled ? 0.35 : 1,
                  textDecoration: isDisabled ? 'line-through' : 'none',
                  cursor: isDisabled ? 'not-allowed' : 'pointer'
                }}
                onClick={() => handleSelect(i)}
              >
                <div className="flex items-center gap-2" style={{ flex: 1 }}>
                  <span>{opt}</span>
                  {unitId?.startsWith('eng-') && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        speechEngine.speak(opt);
                      }}
                      className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer inline-flex items-center"
                      title="朗讀此選項"
                    >
                      <Volume2 size={13} style={{ opacity: 0.7, color: 'var(--accent-primary)' }} />
                    </span>
                  )}
                </div>
                {showResult && isAnswer && <CheckCircle2 size={20} style={{ color: 'var(--accent-success)', flexShrink: 0 }} />}
                {showResult && isUserSelected && !isAnswer && <XCircle size={20} style={{ color: 'var(--accent-error)', flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        {/* Growth Mindset Explanation Banner when submitted */}
        {showResult && (
          <div 
            className="animate-fade-in"
            style={{ 
              padding: '18px 20px', 
              backgroundColor: 'var(--bg-tertiary)', 
              borderRadius: 'var(--radius-md)', 
              borderLeft: selectedOption === question.answerIndex ? '4px solid var(--accent-success)' : '4px solid var(--accent-warning)',
              border: '1px solid var(--border-light)',
              borderLeftWidth: '4px'
            }}
          >
            <div className="flex items-center gap-1.5 font-bold mb-1.5" style={{ fontSize: '0.95rem', color: selectedOption === question.answerIndex ? 'var(--accent-success-text)' : 'var(--accent-warning-text)' }}>
              {selectedOption === question.answerIndex ? (
                <>
                  <Sparkles size={16} />
                  <span>太棒了！觀念精準無誤！</span>
                </>
              ) : (
                <>
                  <Heart size={16} />
                  <span>沒關係！這題很容易踩陷阱，看解析釐清觀念！</span>
                </>
              )}
            </div>
            <p className="text-sm text-secondary" style={{ lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--text-primary)' }}>名師解題觀念：</strong> {question.explanation}
            </p>
          </div>
        )}

        {/* Submit / Next Button */}
        <div className="flex justify-between items-center pt-4 border-t flex-wrap gap-2" style={{ borderTop: '1px solid var(--border-light)' }}>
          <div className="text-xs text-secondary flex items-center gap-1.5 font-medium">
            <Keyboard size={14} style={{ color: 'var(--accent-primary)' }} />
            <span className="hidden sm:inline">鍵盤快捷：按 1~4 / A~D 選取，按 Enter 送出或下一題</span>
          </div>

          {!showResult ? (
            <button 
              className="btn-primary" 
              onClick={handleSubmit} 
              disabled={selectedOption === null} 
              style={{
                opacity: selectedOption === null ? 0.4 : 1,
                padding: '12px 28px',
                fontSize: '1rem',
                borderRadius: 'var(--radius-md)'
              }}
            >
              確認送出答案 (Enter)
            </button>
          ) : (
            <button 
              className="btn-primary" 
              onClick={handleNext}
              style={{
                padding: '12px 28px',
                fontSize: '1rem',
                backgroundColor: 'var(--accent-primary)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              {isLastQuestion ? '查看測驗總成績與詳解 →' : '下一題 (Enter) →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
