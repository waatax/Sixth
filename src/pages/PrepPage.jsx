import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Award, Zap, 
  CheckCircle2, XCircle, RotateCcw, Sparkles, 
  Lightbulb, GraduationCap 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { prepData } from '../data/prepData';
import { playSound } from '../utils/soundEffects';

const PrepPage = () => {
  const [activeTab, setActiveTab] = useState('math');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);

  const startQuiz = () => {
    setQuizAnswers({});
    setCurrentQuizIdx(0);
    setQuizStarted(true);
    setQuizFinished(false);
    playSound('click');
  };

  const handleSelectQuizOption = (optIdx) => {
    setQuizAnswers(prev => ({ ...prev, [currentQuizIdx]: optIdx }));
    playSound('click');
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    playSound('levelup');
    confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });

    try {
      const stats = JSON.parse(localStorage.getItem('sixth_student_stats') || '{"xp":0,"level":1}');
      stats.xp = (stats.xp || 0) + 120;
      localStorage.setItem('sixth_student_stats', JSON.stringify(stats));
    } catch (e) {}
  };

  const questions = prepData.quizQuestions;
  let correctCount = 0;
  if (quizFinished) {
    questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answerIndex) correctCount += 1;
    });
  }

  const renderSubjectContent = (items, accentColor) => (
    <div className="flex flex-col gap-6 animate-fade-in">
      {items.map((item) => (
        <div key={item.id} className="card shadow-sm" style={{ borderLeft: `4px solid ${accentColor}` }}>
          <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
            <h2 className="h3 flex items-center gap-2" style={{ color: accentColor, margin: 0 }}>
              <Zap size={20} />
              {item.title}
            </h2>
            <span className="badge" style={{ backgroundColor: `${accentColor}18`, color: accentColor, fontWeight: 700 }}>
              {item.badge}
            </span>
          </div>

          <p className="text-secondary text-sm mb-4 font-medium" style={{ lineHeight: 1.7 }}>
            {item.summary}
          </p>

          {/* Core Concepts */}
          <div className="space-y-4 mb-4">
            {item.concepts.map((c, i) => (
              <div key={i} className="p-3.5 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}>
                <h4 className="text-sm font-bold text-primary mb-1.5">{c.name}</h4>
                <p className="text-xs text-secondary leading-relaxed whitespace-pre-line">{c.content}</p>
              </div>
            ))}
          </div>

          {/* Formula Box if any */}
          {item.formulaBox && (
            <div className="p-4 rounded-xl mb-4" style={{ backgroundColor: `${accentColor}10`, border: `1px solid ${accentColor}30` }}>
              <div className="font-bold text-xs mb-2 flex items-center gap-1.5" style={{ color: accentColor }}>
                <Sparkles size={14} /> {item.formulaBox.title}
              </div>
              <ul className="space-y-1 text-xs text-secondary font-mono">
                {item.formulaBox.lines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Example if any */}
          {item.example && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
              <div className="font-bold text-xs text-primary mb-2 flex items-center gap-1.5">
                <Lightbulb size={14} className="text-amber-500" /> {item.example.question}
              </div>
              <div className="space-y-1 text-xs text-secondary font-mono">
                {item.example.steps.map((step, idx) => (
                  <div key={idx} className={idx === item.example.steps.length - 1 ? 'font-bold text-emerald-600 dark:text-emerald-400 mt-1' : ''}>
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col gap-6 py-4 max-w-4xl mx-auto pb-16">
      {/* Back Link */}
      <Link to="/resources" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
        <ArrowLeft size={16} /> 返回教育資源導航
      </Link>

      {/* Hero Card */}
      <div
        className="card text-center py-8"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderTop: '5px solid var(--accent-primary)'
        }}
      >
        <span className="badge badge-accent mb-2" style={{ padding: '4px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          🎓 國中先修・關鍵學力銜接旗艦專區
        </span>
        <h1 className="h1 mb-2">
          國中先修課程 (Junior High Prep)
        </h1>
        <p className="text-secondary max-w-xl mx-auto text-sm" style={{ lineHeight: 1.7 }}>
          彙整 108 課綱國一各科名師精華：數學代數負數、理化密度實驗、國文六書韻文、英語五大句型、社會史地與會考素養！
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 border-b pb-3 flex-wrap" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-pill ${activeTab === 'math' ? 'active' : ''}`}
          onClick={() => setActiveTab('math')}
        >
          🧮 國一數學代數
        </button>
        <button
          className={`btn-pill ${activeTab === 'science' ? 'active' : ''}`}
          onClick={() => setActiveTab('science')}
        >
          🔬 自然理化與生物
        </button>
        <button
          className={`btn-pill ${activeTab === 'chinese' ? 'active' : ''}`}
          onClick={() => setActiveTab('chinese')}
        >
          📚 國文六書與韻文
        </button>
        <button
          className={`btn-pill ${activeTab === 'english' ? 'active' : ''}`}
          onClick={() => setActiveTab('english')}
        >
          🔤 英語句型與時態
        </button>
        <button
          className={`btn-pill ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          🌏 社會史地與公民
        </button>
        <button
          className={`btn-pill ${activeTab === 'strategy' ? 'active' : ''}`}
          onClick={() => setActiveTab('strategy')}
        >
          💡 會考素養解題心法
        </button>
        <button
          className={`btn-pill ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
          style={{ borderColor: 'var(--accent-success)', color: activeTab === 'quiz' ? 'white' : 'var(--accent-success)' }}
        >
          ✍️ 先修自我闖關測驗
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === 'math' && renderSubjectContent(prepData.math, 'var(--accent-primary)')}
      {activeTab === 'science' && renderSubjectContent(prepData.science, 'var(--accent-success)')}
      {activeTab === 'chinese' && renderSubjectContent(prepData.chinese, 'var(--accent-warning)')}
      {activeTab === 'english' && renderSubjectContent(prepData.english, 'var(--accent-purple)')}
      {activeTab === 'social' && renderSubjectContent(prepData.social, '#0284c7')}

      {/* Strategy Section */}
      {activeTab === 'strategy' && (
        <div className="flex flex-col gap-5 animate-fade-in">
          <div className="card" style={{ borderLeft: '4px solid var(--accent-purple)' }}>
            <h2 className="h3 flex items-center gap-2 mb-4" style={{ color: 'var(--accent-purple)' }}>
              <Award size={22} />
              108 課綱國中會考素養解題四大核心心法
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {prepData.strategies.map((st, idx) => (
                <div key={idx} className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}>
                  <h3 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
                    <Sparkles size={16} className="text-purple-500" />
                    {st.title}
                  </h3>
                  <p className="text-xs text-secondary leading-relaxed whitespace-pre-line">
                    {st.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Quiz Section */}
      {activeTab === 'quiz' && (
        <div className="animate-fade-in">
          {!quizStarted ? (
            <div className="card text-center py-10 flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                <GraduationCap size={36} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">國中先修全科自我檢測挑戰</h2>
                <p className="text-sm text-secondary max-w-md mx-auto">
                  精選數學、理化、生物、國文、英文與社會 20 題先修核心題，檢驗你的國中銜接實力！
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-secondary font-medium">
                <span className="badge badge-accent">共 20 題選擇題</span>
                <span>•</span>
                <span>即時回饋與詳解</span>
                <span>•</span>
                <span className="text-emerald-600 font-bold">獎勵：+120 XP</span>
              </div>
              <button className="btn-primary px-8 py-3 rounded-xl font-bold text-base" onClick={startQuiz}>
                🚀 開始先修闖關檢測
              </button>
            </div>
          ) : quizFinished ? (
            <div className="card flex flex-col items-center text-center gap-6 py-8" style={{ borderTop: '6px solid var(--accent-success)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">
                <Award size={36} />
              </div>
              <div>
                <span className="badge badge-success mb-2 font-bold">🎉 先修檢測完成！+120 XP</span>
                <h2 className="text-3xl font-black text-primary my-2">
                  總得分：{Math.round((correctCount / questions.length) * 100)} 分
                </h2>
                <p className="text-sm text-secondary">
                  共 20 題，答對 {correctCount} 題，答錯 {questions.length - correctCount} 題。
                </p>
              </div>

              {/* Review Sheet */}
              <div className="w-full text-left mt-2 space-y-3">
                <h4 className="font-bold text-sm text-primary">📋 逐題檢討與名師解析：</h4>
                {questions.map((q, i) => {
                  const userAns = quizAnswers[i];
                  const isCorrect = userAns === q.answerIndex;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl border text-xs"
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        borderLeft: isCorrect ? '4px solid var(--accent-success)' : '4px solid var(--accent-error)',
                        borderColor: 'var(--border-light)'
                      }}
                    >
                      <div className="flex items-center justify-between font-bold text-sm mb-1 text-primary">
                        <span>第 {i + 1} 題 ({q.subject})：{q.question}</span>
                        {isCorrect ? <CheckCircle2 size={16} className="text-emerald-500" /> : <XCircle size={16} className="text-rose-500" />}
                      </div>
                      <div className="text-secondary my-1">
                        <strong>你的答案：</strong> {userAns !== undefined ? q.options[userAns] : '未作答'} | <strong className="text-emerald-600">正確答案：</strong> {q.options[q.answerIndex]}
                      </div>
                      <div className="text-secondary leading-relaxed bg-white/50 dark:bg-black/20 p-2 rounded mt-1">
                        💡 <strong>解析：</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="btn-primary mt-4" onClick={startQuiz}>
                <RotateCcw size={16} /> 再測驗一次
              </button>
            </div>
          ) : (
            /* Quiz Active */
            <div className="space-y-4">
              <div className="card flex justify-between items-center py-3 px-5">
                <span className="badge badge-accent font-bold">
                  題目 {currentQuizIdx + 1} / {questions.length} [{questions[currentQuizIdx].subject}]
                </span>
                <span className="text-xs text-secondary font-medium">國中先修實戰快測</span>
              </div>

              {questions[currentQuizIdx] && (
                <div className="card p-6 space-y-5">
                  <h3 className="text-lg font-bold text-primary leading-snug">
                    {currentQuizIdx + 1}. {questions[currentQuizIdx].question}
                  </h3>

                  <div className="space-y-2.5">
                    {questions[currentQuizIdx].options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[currentQuizIdx] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          className="w-full text-left p-3.5 rounded-xl border flex items-center justify-between text-sm transition-all"
                          style={{
                            borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-strong)',
                            backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-secondary)',
                            fontWeight: isSelected ? 700 : 400,
                            color: isSelected ? 'var(--accent-text)' : 'var(--text-primary)'
                          }}
                          onClick={() => handleSelectQuizOption(optIdx)}
                        >
                          <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                          {isSelected && <CheckCircle2 size={16} className="text-primary" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 flex-wrap gap-2">
                    <button
                      className="btn-outline text-xs px-3 py-1.5"
                      disabled={currentQuizIdx === 0}
                      onClick={() => setCurrentQuizIdx(c => c - 1)}
                    >
                      ← 上一題
                    </button>

                    <div className="flex gap-1 flex-wrap">
                      {questions.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentQuizIdx(i)}
                          className="w-7 h-7 rounded-full text-xs font-bold transition-all"
                          style={{
                            backgroundColor: currentQuizIdx === i ? 'var(--accent-primary)' : quizAnswers[i] !== undefined ? 'var(--accent-success-soft)' : 'var(--bg-tertiary)',
                            color: currentQuizIdx === i ? 'var(--text-inverse)' : quizAnswers[i] !== undefined ? 'var(--accent-success-text)' : 'var(--text-secondary)'
                          }}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    {currentQuizIdx < questions.length - 1 ? (
                      <button className="btn-primary text-xs px-3 py-1.5" onClick={() => setCurrentQuizIdx(c => c + 1)}>
                        下一題 →
                      </button>
                    ) : (
                      <button className="btn-primary text-xs px-4 py-1.5" style={{ backgroundColor: 'var(--accent-success)' }} onClick={finishQuiz}>
                        交卷計分
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PrepPage;
