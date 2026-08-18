import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Zap, Sparkles, BookOpen, RotateCcw, Volume2, VolumeX, ShieldCheck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { playSound, toggleMute, getMuteState } from '../utils/soundEffects';

const QuizPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [muted, setMuted] = useState(getMuteState());

  const questions = quizData[unitId] || [];

  const handleMuteToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
  };

  const handleSelect = (index) => {
    if (showResult) return;
    setSelectedOption(index);
    playSound('click');
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const question = questions[currentQ];
    const isCorrect = selectedOption === question.answerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
      playSound('correct');
    } else {
      playSound('wrong');
    }

    // Save mistake to localStorage mistake notebook if wrong
    if (!isCorrect) {
      try {
        const savedMistakes = localStorage.getItem('sixth_student_mistakes');
        const mistakeList = savedMistakes ? JSON.parse(savedMistakes) : [];
        const existingIdx = mistakeList.findIndex(m => m.unitId === unitId && m.questionId === question.id);
        const mistakeItem = {
          unitId,
          questionId: question.id,
          question: question.question,
          options: question.options,
          answerIndex: question.answerIndex,
          explanation: question.explanation,
          timestamp: new Date().toISOString()
        };
        if (existingIdx >= 0) {
          mistakeList[existingIdx] = mistakeItem;
        } else {
          mistakeList.unshift(mistakeItem);
        }
        localStorage.setItem('sixth_student_mistakes', JSON.stringify(mistakeList));
      } catch (e) {}
    }

    setUserAnswers(prev => [...prev, { qIndex: currentQ, selected: selectedOption, correct: isCorrect }]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Award XP in localStorage
      try {
        const saved = localStorage.getItem('sixth_student_stats');
        const currentStats = saved ? JSON.parse(saved) : { xp: 100, completedUnits: 0, streak: 1, badges: ['數學小博士', '氣象小偵探'] };
        currentStats.xp += 50;
        currentStats.completedUnits += 1;
        
        // Track completed unit id
        if (!currentStats.completedUnitIds) currentStats.completedUnitIds = [];
        if (!currentStats.completedUnitIds.includes(unitId)) {
          currentStats.completedUnitIds.push(unitId);
        }

        localStorage.setItem('sixth_student_stats', JSON.stringify(currentStats));
      } catch (e) {}

      // Trigger celebratory confetti & levelup sound
      playSound('levelup');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setCurrentQ(questions.length); 
    } else {
      setCurrentQ(c => c + 1);
      setSelectedOption(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
  };

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

  // Final Celebration & Score Screen
  if (currentQ >= questions.length) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div
        className="card flex flex-col items-center text-center gap-6 py-10 max-w-xl mx-auto mt-4"
        style={{
          borderTop: '6px solid var(--accent-primary)',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--border-light)',
          borderTop: '6px solid var(--accent-primary)',
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
          <span className="badge badge-success mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
            🎉 測驗完成！學習經驗值 +50 XP
          </span>
          <h2 className="h1" style={{ margin: '8px 0', fontSize: 'calc(2.2rem * var(--font-scale))' }}>
            觀念檢核得分：{percentage} 分
          </h2>
          <p className="text-secondary text-sm" style={{ lineHeight: 1.7 }}>
            共 {questions.length} 題，答對 {score} 題。{percentage >= 80 ? '🌟 太厲害了！你已徹底掌握本單元核心素養！' : '💪 答錯的題目已自動幫你收錄至「錯題筆記本」，搞懂它就是最大的進步！'}
          </p>
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
                    <span>第 {idx + 1} 題：{q.question}</span>
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
            <RotateCcw size={16} /> 重新挑戰一次
          </button>
          <Link to="/mistakes" className="btn-outline flex items-center gap-2 text-sm" style={{ color: 'var(--accent-primary)', borderColor: 'var(--accent-primary)' }}>
            📖 查看錯題筆記本
          </Link>
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

        <button 
          onClick={handleMuteToggle}
          className="btn-pill"
          title={muted ? '開啟音效' : '靜音'}
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span>{muted ? '靜音' : '音效開啟'}</span>
        </button>
      </div>

      <div className="card flex flex-col gap-6" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', border: '1.5px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}>
        {/* Progress Header */}
        <div className="flex justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="badge badge-accent" style={{ fontWeight: 700 }}>
            ✏️ 單元重點測驗・觀念驗收
          </span>
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>第 {currentQ + 1} / {questions.length} 題</span>
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
        <h2 className="h3" style={{ fontSize: 'calc(1.3rem * var(--font-scale))', lineHeight: 1.55 }}>
          {currentQ + 1}. {question.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => {
            const isAnswer = i === question.answerIndex;
            const isUserSelected = i === selectedOption;

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
                className="btn-outline flex justify-between items-center"
                style={{
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'calc(0.98rem * var(--font-scale))',
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  color: textColor,
                  fontWeight: fontWeight,
                  lineHeight: 1.5
                }}
                onClick={() => handleSelect(i)}
              >
                <span>{opt}</span>
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
                  <span>沒關係！這題很容易踩陷阱，已幫你存入錯題本！</span>
                </>
              )}
            </div>
            <p className="text-sm text-secondary" style={{ lineHeight: 1.7, margin: 0 }}>
              <strong style={{ color: 'var(--text-primary)' }}>名師解題觀念：</strong> {question.explanation}
            </p>
          </div>
        )}

        {/* Submit / Next Button */}
        <div className="flex justify-end pt-4 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
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
              確認送出答案
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
              {isLastQuestion ? '查看測驗總成績與詳解 →' : '下一題 →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
