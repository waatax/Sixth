import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Timer, CheckCircle2, XCircle, Trophy, RotateCcw, ArrowLeft, FileText, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { playSound } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';

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

      const stats = JSON.parse(localStorage.getItem('sixth_student_stats') || '{"xp":0,"level":1}');
      stats.xp = (stats.xp || 0) + 100;
      localStorage.setItem('sixth_student_stats', JSON.stringify(stats));
    } catch (e) {}
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
      <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
        <ArrowLeft size={16} /> 返回首頁
      </Link>

      {!examStarted ? (
        <div
          className="card text-center py-12 flex flex-col items-center gap-6"
          style={{ backgroundColor: 'var(--bg-secondary)', padding: '48px 24px' }}
        >
          <div
            style={{
              backgroundColor: 'var(--accent-soft)',
              padding: '22px',
              borderRadius: '50%',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <FileText size={52} />
          </div>

          <div>
            <span className="badge badge-accent mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
              ⏱️ 考前實戰・計時模擬測驗
            </span>
            <h1 className="h1 mb-3" style={{ fontSize: 'calc(2.2rem * var(--font-scale))' }}>
              計時模擬 (Timed Mock Exam)
            </h1>
            <p className="text-secondary max-w-lg mx-auto text-sm" style={{ lineHeight: 1.8 }}>
              系統將從八大學習領域題庫中隨機抽取 <strong>10 題核心素養模擬題</strong>，限時 <strong>10 分鐘</strong>。檢測你的全科綜合應考實力！
            </p>
          </div>

          <div className="flex gap-4 items-center flex-wrap justify-center p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Timer size={18} style={{ color: 'var(--accent-primary)' }} />
              <span>測驗時間：10 分鐘</span>
            </div>
            <span className="text-tertiary">|</span>
            <div className="text-sm font-semibold">題目數量：10 題單選</div>
            <span className="text-tertiary">|</span>
            <div className="text-sm" style={{ color: 'var(--accent-success)', fontWeight: 700 }}>獎勵：+100 XP</div>
          </div>

          <button 
            className="btn-primary"
            style={{ padding: '14px 40px', fontSize: '1.1rem', borderRadius: 'var(--radius-lg)' }}
            onClick={startExam}
          >
            🔥 立即開始計時模擬測驗
          </button>
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
              🎉 模擬考完成！學習經驗值 +100 XP
            </span>
            <h2 className="h1" style={{ margin: '8px 0', fontSize: 'calc(2.2rem * var(--font-scale))' }}>
              總成績：{Math.round((correctCount / examQuestions.length) * 100)} 分
            </h2>
            <p className="text-secondary text-sm">
              共 10 題，答對 {correctCount} 題，剩餘時間：{minutes} 分 {seconds} 秒。
            </p>
          </div>

          {/* Review Sheet */}
          <div className="w-full text-left mt-4">
            <h4 className="h4 mb-3" style={{ fontSize: '1rem' }}>📋 試卷逐題檢核與解析：</h4>
            <div className="flex flex-col gap-3">
              {examQuestions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.answerIndex;
                return (
                  <div
                    key={i}
                    style={{
                      padding: '14px 18px',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderRadius: 'var(--radius-md)',
                      borderLeft: isCorrect ? '4px solid var(--accent-success)' : '4px solid var(--accent-error)',
                      border: '1px solid var(--border-light)',
                      borderLeftWidth: '4px'
                    }}
                  >
                    <div className="flex items-center gap-2 font-bold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>
                      <span>第 {i + 1} 題：{q.question}</span>
                      {isCorrect ? <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} /> : <XCircle size={16} style={{ color: 'var(--accent-error)' }} />}
                    </div>
                    <div className="text-xs text-secondary mt-1">
                      <strong>你的答案：</strong> {userAns !== undefined ? q.options[userAns] : '未作答'} | <strong style={{ color: 'var(--accent-success-text)' }}>正確答案：</strong> {q.options[q.answerIndex]}
                    </div>
                    <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.6 }}>
                      <strong>觀念名師解析：</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <button className="btn-primary" onClick={startExam}>
              <RotateCcw size={16} /> 再測驗一次
            </button>
            {correctCount < examQuestions.length && (
              <Link to="/mistakes" className="btn-accent flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 前往錯題本複習
              </Link>
            )}
            <Link to="/" className="btn-outline">
              返回課程首頁
            </Link>
          </div>
        </div>
      ) : (
        /* Exam In Progress */
        <div className="flex flex-col gap-5">
          {/* Top Timer Bar */}
          <div className="card flex justify-between items-center" style={{ padding: '16px 20px' }}>
            <div className="flex items-center gap-2">
              <span className="badge badge-accent">
                題目 {currentIdx + 1} / {examQuestions.length}
              </span>
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>小六全科綜合模擬考</span>
            </div>

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

          {/* Question Box */}
          {examQuestions[currentIdx] && (
            <div className="card flex flex-col gap-6" style={{ padding: '32px' }}>
              <h2 className="h3" style={{ fontSize: 'calc(1.3rem * var(--font-scale))', lineHeight: 1.55 }}>
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
                        backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-secondary)',
                        color: isSelected ? 'var(--accent-text)' : 'var(--text-primary)',
                        fontWeight: isSelected ? 700 : 400,
                        fontSize: 'calc(0.98rem * var(--font-scale))'
                      }}
                      onClick={() => handleSelectAnswer(optIdx)}
                    >
                      <span>{opt}</span>
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
    </div>
  );
};

export default MockExamPage;
