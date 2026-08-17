import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, Trophy, Zap, Sparkles, BookOpen, RotateCcw } from 'lucide-react';
import { quizData } from '../data/quizData';

const QuizPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = quizData[unitId] || [];

  const handleSelect = (index) => {
    if (showResult) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    const isCorrect = selectedOption === question.answerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
    }
    setUserAnswers(prev => [...prev, { qIndex: currentQ, selected: selectedOption, correct: isCorrect }]);
    setShowResult(true);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      // Award XP in localStorage
      try {
        const saved = localStorage.getItem('sixth_student_stats');
        const currentStats = saved ? JSON.parse(saved) : { xp: 100, completedUnits: 0, streak: 1, badges: [] };
        currentStats.xp += 50;
        currentStats.completedUnits += 1;
        localStorage.setItem('sixth_student_stats', JSON.stringify(currentStats));
      } catch (e) {}

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
      <div className="card flex flex-col items-center text-center gap-6 py-10 max-w-lg mx-auto mt-6" style={{ borderTop: '6px solid var(--accent-primary)', backgroundColor: 'var(--bg-secondary)', padding: '36px' }}>
        <div style={{ backgroundColor: 'hsl(45, 90%, 92%)', padding: '16px', borderRadius: '50%', color: 'hsl(40, 95%, 40%)' }}>
          <Trophy size={48} />
        </div>

        <div>
          <span className="badge mb-2" style={{ backgroundColor: 'hsl(150, 60%, 95%)', color: 'hsl(150, 60%, 35%)', fontWeight: 700 }}>
            🎉 測驗完成！學習經驗值 +50 XP
          </span>
          <h2 className="h2" style={{ margin: '8px 0', fontSize: '2.25rem' }}>
            觀念檢核得分：{percentage} 分
          </h2>
          <p className="text-secondary text-sm">
            共 {questions.length} 題，答對 {score} 題。{percentage >= 80 ? '🌟 太厲害了！你已徹底掌握本單元核心素養！' : '💪 繼續加油！錯題可以回到圖解教學單元複習喔！'}
          </p>
        </div>

        {/* Mistakes Review List */}
        <div className="w-full text-left mt-2">
          <h4 className="text-sm font-bold mb-3 text-secondary">📋 本次作答詳解回顧：</h4>
          <div className="flex flex-col gap-3">
            {questions.map((q, idx) => {
              const ans = userAnswers[idx];
              return (
                <div key={q.id} style={{ padding: '12px 16px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', borderLeft: ans?.correct ? '4px solid var(--accent-success)' : '4px solid var(--accent-error)', fontSize: '0.88rem' }}>
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <span>第 {idx + 1} 題：{q.question}</span>
                    {ans?.correct ? <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} /> : <XCircle size={16} style={{ color: 'var(--accent-error)' }} />}
                  </div>
                  <div className="text-secondary text-xs mt-1">
                    <strong>正確解答：</strong> {q.options[q.answerIndex]}
                  </div>
                  <div className="text-secondary text-xs mt-1">
                    <strong>觀念解析：</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center">
          <button className="btn-outline flex items-center gap-2 text-sm" onClick={handleRestart}>
            <RotateCcw size={16} /> 重新挑戰一次
          </button>
          <Link to={`/lesson/${unitId}`} className="btn-outline flex items-center gap-2 text-sm">
            <BookOpen size={16} /> 回教學單元複習
          </Link>
          <button className="btn-primary flex items-center gap-2 text-sm" onClick={() => navigate(-1)}>
            回到單元列表 →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-6 flex flex-col gap-6 py-2">
      <button className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => navigate(-1)}>
        <ArrowLeft size={16} /> 返回單元列表
      </button>

      <div className="card flex flex-col gap-6" style={{ padding: '32px' }}>
        {/* Progress header */}
        <div className="flex justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--accent-primary)', fontWeight: 700 }}>
            ✏️ 單元重點測驗・觀念驗收
          </span>
          <span style={{ fontWeight: 600 }}>題目：{currentQ + 1} / {questions.length}</span>
        </div>

        {/* Progress bar */}
        <div style={{ height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: `${((currentQ + 1) / questions.length) * 100}%`, height: '100%', backgroundColor: 'var(--accent-primary)', transition: 'width 0.3s' }} />
        </div>

        {/* Question Title */}
        <h2 className="h3" style={{ fontSize: '1.35rem', lineHeight: 1.5, color: 'var(--text-primary)' }}>
          {currentQ + 1}. {question.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => {
            let itemClass = "btn-outline flex justify-between items-center";
            let itemStyle = { textAlign: 'left', padding: '16px 20px', borderRadius: 'var(--radius-md)', fontSize: '0.95rem' };
            
            if (showResult) {
              if (i === question.answerIndex) {
                itemStyle.backgroundColor = 'var(--accent-success)';
                itemStyle.color = 'white';
                itemStyle.borderColor = 'var(--accent-success)';
                itemStyle.fontWeight = 600;
              } else if (i === selectedOption) {
                itemStyle.backgroundColor = 'var(--accent-error)';
                itemStyle.color = 'white';
                itemStyle.borderColor = 'var(--accent-error)';
              }
            } else if (selectedOption === i) {
              itemStyle.borderColor = 'var(--accent-primary)';
              itemStyle.backgroundColor = 'hsl(215, 80%, 96%)';
              itemStyle.color = 'var(--accent-primary)';
              itemStyle.fontWeight = 600;
            }

            return (
              <button key={i} className={itemClass} style={itemStyle} onClick={() => handleSelect(i)}>
                <span>{opt}</span>
                {showResult && i === question.answerIndex && <CheckCircle2 size={20} />}
                {showResult && i === selectedOption && i !== question.answerIndex && <XCircle size={20} />}
              </button>
            );
          })}
        </div>

        {/* Explanation Card when submitted */}
        {showResult && (
          <div style={{ padding: '16px 20px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent-primary)' }}>
            <p style={{ fontWeight: 700, marginBottom: '4px', color: 'var(--text-primary)', fontSize: '0.9rem' }}>💡 觀念名師詳解：</p>
            <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{question.explanation}</p>
          </div>
        )}

        {/* Submit / Next Button */}
        <div className="flex justify-end mt-2 pt-4 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
          {!showResult ? (
            <button 
              className="btn-primary" 
              onClick={handleSubmit} 
              disabled={selectedOption === null} 
              style={{ opacity: selectedOption === null ? 0.5 : 1, padding: '10px 24px', fontSize: '0.95rem' }}
            >
              確認送出答案
            </button>
          ) : (
            <button 
              className="btn-primary" 
              onClick={handleNext}
              style={{ padding: '10px 24px', fontSize: '0.95rem', backgroundColor: 'var(--accent-primary)' }}
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
