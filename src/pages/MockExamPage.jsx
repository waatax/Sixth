import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Timer, CheckCircle2, XCircle, Trophy, RotateCcw, ArrowLeft, Zap, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { playSound } from '../utils/soundEffects';

const MockExamPage = () => {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const startExam = () => {
    // Pick 10 representative questions from various units
    const allQs = [];
    Object.entries(quizData).forEach(([unitId, qList]) => {
      qList.forEach(q => allQs.push({ ...q, unitId }));
    });

    // Shuffle and pick 10
    const shuffled = allQs.sort(() => 0.5 - Math.random()).slice(0, 10);
    setExamQuestions(shuffled);
    setAnswers({});
    setCurrentIdx(0);
    setTimeLeft(600);
    setExamStarted(true);
    setExamFinished(false);
    playSound('click');
  };

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
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Calculate score
  let correctCount = 0;
  if (examFinished) {
    examQuestions.forEach((q, idx) => {
      if (answers[idx] === q.answerIndex) {
        correctCount += 1;
      }
    });
  }

  return (
    <div className="flex flex-col gap-6 py-4 max-w-3xl mx-auto">
      <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
        <ArrowLeft size={16} /> 返回首頁
      </Link>

      {!examStarted ? (
        <div className="card text-center py-12 flex flex-col items-center gap-6" style={{ backgroundColor: 'var(--bg-secondary)', padding: '48px' }}>
          <div style={{ backgroundColor: 'hsl(215, 80%, 95%)', padding: '20px', borderRadius: '50%', color: 'var(--accent-primary)' }}>
            <FileText size={48} />
          </div>

          <div>
            <span className="badge mb-2" style={{ backgroundColor: 'hsl(215, 80%, 95%)', color: 'var(--accent-primary)', padding: '6px 14px', borderRadius: '999px', fontWeight: 700 }}>
              ⏱️ 考前實戰模擬測驗
            </span>
            <h1 className="h1 mb-3" style={{ fontSize: '2.4rem' }}>
              六年級全科目定時模擬會考
            </h1>
            <p className="text-secondary max-w-lg mx-auto text-sm" style={{ lineHeight: 1.8 }}>
              系統將從八大學習領域題庫中隨機抽取 <strong>10 題核心素養模擬題</strong>，限時 <strong>10 分鐘</strong>。檢測你的全科綜合應考實力！
            </p>
          </div>

          <div className="flex gap-4 items-center" style={{ backgroundColor: 'var(--bg-tertiary)', padding: '12px 24px', borderRadius: 'var(--radius-lg)' }}>
            <div className="flex items-center gap-2 text-sm">
              <Timer size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>測驗時間：10 分鐘</span>
            </div>
            <span>|</span>
            <div className="text-sm">題目數量：10 題單選</div>
            <span>|</span>
            <div className="text-sm" style={{ color: 'hsl(150, 60%, 35%)', fontWeight: 600 }}>獎勵：+100 XP</div>
          </div>

          <button 
            className="btn-primary"
            style={{ padding: '12px 36px', fontSize: '1.1rem', borderRadius: 'var(--radius-lg)' }}
            onClick={startExam}
          >
            🔥 立即開始計時模擬測驗
          </button>
        </div>
      ) : examFinished ? (
        <div className="card flex flex-col items-center text-center gap-6 py-10" style={{ padding: '36px', borderTop: '6px solid var(--accent-primary)' }}>
          <Trophy size={48} style={{ color: 'hsl(40, 95%, 45%)' }} />
          <div>
            <span className="badge mb-2" style={{ backgroundColor: 'hsl(150, 60%, 95%)', color: 'hsl(150, 60%, 35%)', fontWeight: 700 }}>
              🎉 模擬考完成！學習經驗值 +100 XP
            </span>
            <h2 className="h2" style={{ fontSize: '2.5rem', margin: '8px 0' }}>
              總成績：{Math.round((correctCount / examQuestions.length) * 100)} 分
            </h2>
            <p className="text-secondary text-sm">
              共 10 題，答對 {correctCount} 題，剩餘時間：{minutes} 分 {seconds} 秒。
            </p>
          </div>

          {/* Review Sheet */}
          <div className="w-full text-left mt-4">
            <h4 className="text-sm font-bold mb-3">📋 試卷逐題檢核與解析：</h4>
            <div className="flex flex-col gap-3">
              {examQuestions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.answerIndex;
                return (
                  <div key={i} style={{ padding: '14px 18px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', borderLeft: isCorrect ? '4px solid var(--accent-success)' : '4px solid var(--accent-error)' }}>
                    <div className="flex items-center gap-2 font-bold text-sm mb-1">
                      <span>第 {i + 1} 題：{q.question}</span>
                      {isCorrect ? <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} /> : <XCircle size={16} style={{ color: 'var(--accent-error)' }} />}
                    </div>
                    <div className="text-xs text-secondary mt-1">
                      <strong>你的答案：</strong> {userAns !== undefined ? q.options[userAns] : '未作答'} | <strong>正確答案：</strong> {q.options[q.answerIndex]}
                    </div>
                    <div className="text-xs text-secondary mt-1">
                      <strong>解析：</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <button className="btn-primary" onClick={startExam}>
              <RotateCcw size={16} /> 再測驗一次
            </button>
            <Link to="/" className="btn-outline">
              返回課程首頁
            </Link>
          </div>
        </div>
      ) : (
        /* Exam In Progress */
        <div className="flex flex-col gap-6">
          {/* Top Timer Bar */}
          <div className="card flex justify-between items-center" style={{ padding: '16px 24px', backgroundColor: 'var(--bg-secondary)' }}>
            <div className="flex items-center gap-2">
              <span className="badge" style={{ backgroundColor: 'var(--accent-primary)', color: 'white' }}>
                題目 {currentIdx + 1} / {examQuestions.length}
              </span>
              <span className="text-sm font-bold">小六全科綜合模擬考</span>
            </div>

            <div className="flex items-center gap-2 font-bold" style={{ color: timeLeft < 120 ? 'var(--accent-error)' : 'var(--accent-primary)', fontSize: '1.1rem' }}>
              <Timer size={20} />
              <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>
          </div>

          {/* Question Box */}
          {examQuestions[currentIdx] && (
            <div className="card flex flex-col gap-6" style={{ padding: '32px' }}>
              <h2 className="h3" style={{ fontSize: '1.35rem', lineHeight: 1.5 }}>
                {currentIdx + 1}. {examQuestions[currentIdx].question}
              </h2>

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
                        backgroundColor: isSelected ? 'hsl(215, 85%, 96%)' : 'var(--bg-secondary)',
                        color: isSelected ? 'var(--accent-primary)' : 'var(--text-primary)',
                        fontWeight: isSelected ? 600 : 400
                      }}
                      onClick={() => handleSelectAnswer(optIdx)}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 size={18} />}
                    </button>
                  );
                })}
              </div>

              {/* Navigation Grid */}
              <div className="flex justify-between items-center pt-4 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
                <button 
                  className="btn-outline text-sm" 
                  disabled={currentIdx === 0}
                  style={{ opacity: currentIdx === 0 ? 0.4 : 1 }}
                  onClick={() => setCurrentIdx(c => c - 1)}
                >
                  ← 上一題
                </button>

                <div className="flex gap-2">
                  {examQuestions.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIdx(i)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        backgroundColor: currentIdx === i ? 'var(--accent-primary)' : answers[i] !== undefined ? 'hsl(150, 60%, 90%)' : 'var(--bg-tertiary)',
                        color: currentIdx === i ? 'white' : answers[i] !== undefined ? 'hsl(150, 60%, 30%)' : 'var(--text-secondary)'
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
                    style={{ backgroundColor: 'hsl(150, 60%, 40%)', borderColor: 'hsl(150, 60%, 40%)' }}
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
    </div>
  );
};

export default MockExamPage;
