import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { coursesData } from '../data/courses';
import { playSound } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';

const EXAM_MODES = [
  { id: 'all', title: '🎯 全科素養綜合大滿貫', desc: '八大學習領域隨機抽取 10 題，全方位檢驗實戰應考力！', icon: '🏆', color: 'var(--accent-primary)' },
  { id: 'math', title: '🧮 數學科專題模擬考', desc: '數與量、分數小數除法、比值、圓面積與柱體速率', icon: '🧮', color: 'hsl(215, 85%, 52%)' },
  { id: 'science', title: '🔬 自然科學專題模擬考', desc: '天氣系統、水溶液酸鹼、電與磁、簡單機械與生態系', icon: '🔬', color: 'hsl(152, 70%, 42%)' },
  { id: 'mandarin', title: '📖 國語文專題模擬考', desc: '閱讀理解策略、記敘說明議論文、修辭成語與古詩', icon: '📖', color: 'hsl(25, 90%, 52%)' },
  { id: 'social', title: '🌍 社會領域專題模擬考', desc: '臺灣民主五權分立、經濟高科技矽盾與SDGs永續', icon: '🌍', color: 'hsl(275, 75%, 55%)' },
  { id: 'english', title: '🇬🇧 英語文專題模擬考', desc: 'Daily Routines, Past Tense, Directions & Reading', icon: '🇬🇧', color: 'hsl(192, 88%, 45%)' },
  { id: 'arts_pe', title: '🎨 藝術・健體・綜合模擬考', desc: '色彩音樂戲劇、CPR急救飲食、時間管理高EQ', icon: '🎨', color: 'hsl(340, 82%, 58%)' }
];

const MockExamPage = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  const startExam = (modeId = selectedSubject) => {
    setSelectedSubject(modeId);
    const allQs = [];

    // Helper to get unit title
    const getUnitTitle = (uId) => {
      for (const s in coursesData.units) {
        const found = coursesData.units[s].find(u => u.id === uId);
        if (found) return found.title;
      }
      return '單元核心考題';
    };

    if (modeId === 'all') {
      Object.entries(quizData).forEach(([unitId, qList]) => {
        qList.forEach(q => allQs.push({ ...q, unitId, unitTitle: getUnitTitle(unitId) }));
      });
    } else if (modeId === 'arts_pe') {
      ['arts', 'health_pe', 'integrative'].forEach(subKey => {
        if (coursesData.units[subKey]) {
          coursesData.units[subKey].forEach(u => {
            (quizData[u.id] || []).forEach(q => allQs.push({ ...q, unitId: u.id, unitTitle: u.title }));
          });
        }
      });
    } else {
      if (coursesData.units[modeId]) {
        coursesData.units[modeId].forEach(u => {
          (quizData[u.id] || []).forEach(q => allQs.push({ ...q, unitId: u.id, unitTitle: u.title }));
        });
      }
    }

    // Shuffle and pick 10
    const shuffled = allQs.sort(() => 0.5 - Math.random()).slice(0, 10);
    setExamQuestions(shuffled);
    setAnswers({});
    setCurrentIdx(0);
    setTimeLeft(600);
    setExamStarted(true);
    setExamFinished(false);
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const currentModeInfo = EXAM_MODES.find(m => m.id === selectedSubject) || EXAM_MODES[0];

  return (
    <div className="flex flex-col gap-6 py-4 max-w-4xl mx-auto pb-16">
      <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
        <ArrowLeft size={16} /> 返回課程首頁
      </Link>

      {!examStarted ? (
        <div className="flex flex-col gap-6">
          {/* Main Hero Card */}
          <div
            className="card text-center py-10 flex flex-col items-center gap-5"
            style={{ backgroundColor: 'var(--bg-secondary)', padding: '36px 24px', borderTop: '4px solid var(--accent-primary)' }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-soft)',
                padding: '20px',
                borderRadius: '50%',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FileText size={48} />
            </div>

            <div>
              <span className="badge badge-accent mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                ⏱️ 108 課綱全真段考・計時模擬測驗
              </span>
              <h1 className="h1 mb-2" style={{ fontSize: 'calc(2rem * var(--font-scale))' }}>
                計時模擬測驗中心 (Mock Exam)
              </h1>
              <p className="text-secondary max-w-xl mx-auto text-sm" style={{ lineHeight: 1.8 }}>
                提供「全科綜合大滿貫」與「分科專題模擬考」。每回測驗隨機抽題 <strong>10 題單選</strong>，限時 <strong>10 分鐘</strong>。測驗完成後即時提供<strong>步驟級詳解</strong>與<strong>單元例題直達複習</strong>！
              </p>
            </div>

            <div className="flex gap-4 items-center flex-wrap justify-center p-3 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Timer size={18} style={{ color: 'var(--accent-primary)' }} />
                <span>限時：10 分鐘</span>
              </div>
              <span className="text-tertiary">|</span>
              <div className="text-sm font-semibold">題數：10 題核心素養題</div>
              <span className="text-tertiary">|</span>
              <div className="text-sm" style={{ color: 'var(--accent-success)', fontWeight: 700 }}>獎勵：+100 XP 經驗值</div>
            </div>
          </div>

          {/* Mode Selection Grid */}
          <div>
            <h3 className="h3 mb-3" style={{ fontSize: '1.15rem' }}>🎯 請選擇模擬考類別：</h3>
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
                  onClick={() => startExam(mode.id)}
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
                    <span>進入此科模擬考</span>
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

                      {/* Direct Unit Link Button */}
                      {q.unitId && (
                        <button
                          onClick={() => navigate(`/lesson/${q.unitId}`)}
                          className="badge cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-1 text-xs py-1 px-2.5"
                          style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-primary)', border: '1px solid var(--accent-primary)' }}
                          title="點擊前往該單元複習教學與經典例題"
                        >
                          <BookOpen size={12} />
                          <span>📖 複習本課教學：{q.unitTitle}</span>
                        </button>
                      )}
                    </div>

                    <div className="text-xs text-secondary mt-1">
                      <strong>你的答案：</strong> <span style={{ color: isCorrect ? 'var(--accent-success-text)' : '#ef4444', fontWeight: 600 }}>{userAns !== undefined ? q.options[userAns] : '未作答'}</span> | <strong style={{ color: 'var(--accent-success-text)' }}>正確答案：</strong> {q.options[q.answerIndex]}
                    </div>
                    <div className="text-xs text-secondary mt-2 p-2.5 rounded bg-bg-secondary" style={{ lineHeight: 1.7, border: '1px solid var(--border-light)' }}>
                      <strong style={{ color: 'var(--accent-primary)' }}>💡 觀念名師解析：</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4 mt-4 flex-wrap justify-center">
            <button className="btn-primary" onClick={() => startExam(selectedSubject)}>
              <RotateCcw size={16} /> 再測驗一次
            </button>
            {correctCount < examQuestions.length && (
              <Link to="/mistakes" className="btn-accent flex items-center gap-1.5">
                <CheckCircle2 size={16} /> 前往錯題本複習
              </Link>
            )}
            <button className="btn-outline" onClick={() => setExamStarted(false)}>
              更換模擬考科
            </button>
          </div>
        </div>
      ) : (
        /* Exam In Progress */
        <div className="flex flex-col gap-5">
          {/* Top Timer Bar */}
          <div className="card flex justify-between items-center flex-wrap gap-3" style={{ padding: '16px 20px' }}>
            <div className="flex items-center gap-2">
              <span className="badge badge-accent">
                題目 {currentIdx + 1} / {examQuestions.length}
              </span>
              <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                {currentModeInfo.title}
              </span>
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
              <div className="flex justify-between items-center">
                <span className="badge badge-secondary text-xs">
                  {examQuestions[currentIdx].unitTitle || '單元考題'}
                </span>
                <button
                  onClick={() => speechEngine.speak(examQuestions[currentIdx].question)}
                  className="flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors cursor-pointer"
                  title="朗讀題目"
                >
                  <Volume2 size={15} /> 朗讀
                </button>
              </div>

              <h2 className="h3" style={{ fontSize: 'calc(1.25rem * var(--font-scale))', lineHeight: 1.6 }}>
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
                      <div className="flex items-center gap-3">
                        <span style={{
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
                        }}>
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
    </div>
  );
};

export default MockExamPage;
