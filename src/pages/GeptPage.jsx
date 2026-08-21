import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, Volume2, Volume1, 
  Square, Play, Pause, RotateCcw, Headphones, 
  MessageSquare, Sparkles, Zap, Award, CheckCircle2, 
  XCircle, Timer, Globe, ExternalLink,
  FileText, Filter, Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { geptData } from '../data/geptData';
import { geptAudioData } from '../data/geptAudioData';
import { geptMockQuestions } from '../data/geptMockQuestions';
import { speechEngine } from '../utils/speechHelper';
import { playSound } from '../utils/soundEffects';
import '../components/english/EnglishAudioStudio.css';

const GeptPage = () => {
  // Main Navigation Tab: 'quiz' | 'audio' | 'curriculum' | 'comparison' | 'strategy' | 'links'
  const [mainTab, setMainTab] = useState('quiz');

  // Curriculum & Audio Studio State
  const [activeLevel, setActiveLevel] = useState('elementary');
  const [activeAudioSubTab, setActiveAudioSubTab] = useState('passage'); // 'passage' | 'vocab' | 'dialogue' | 'patterns'
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState(null);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [continuousPlaying, setContinuousPlaying] = useState(false);
  const continuousRef = useRef(false);

  // Mock Quiz State
  const [quizQuestionCount, setQuizQuestionCount] = useState(10); // 5, 10, 20, 30, 200
  const [quizCategoryFilter, setQuizCategoryFilter] = useState('all');
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState([]);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600); // in seconds
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mainTab, activeLevel]);

  useEffect(() => {
    continuousRef.current = continuousPlaying;
  }, [continuousPlaying]);

  useEffect(() => {
    const unsubscribe = speechEngine.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setActiveSpeechId(state.activeId);
    });
    return () => {
      unsubscribe();
      speechEngine.stop();
    };
  }, []);

  // Timer countdown for Mock Quiz
  useEffect(() => {
    if (!quizStarted || quizFinished || !timerActive) return;

    if (timeLeft <= 0) {
      handleFinishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [quizStarted, quizFinished, timerActive, timeLeft]);

  // Audio Handlers
  const handleSetRate = (rate) => {
    setSpeechRate(rate);
    speechEngine.setRate(rate);
  };

  const handleStopAll = () => {
    setContinuousPlaying(false);
    speechEngine.stop();
  };

  const handlePlayItem = (text, id, rate = speechRate) => {
    setContinuousPlaying(false);
    if (activeSpeechId === id && isPlaying) {
      speechEngine.stop();
    } else {
      speechEngine.speak(text, { id, rate });
    }
  };

  const playParagraph = (index, rate = speechRate) => {
    const paragraphs = currentAudioData?.readAloudPassages;
    if (!paragraphs || index >= paragraphs.length) {
      setContinuousPlaying(false);
      return;
    }
    const currentP = paragraphs[index];
    speechEngine.speak(currentP.text, {
      id: currentP.id,
      rate,
      onEnd: () => {
        if (continuousRef.current && index + 1 < paragraphs.length) {
          setTimeout(() => {
            if (continuousRef.current) playParagraph(index + 1, rate);
          }, 600);
        } else {
          setContinuousPlaying(false);
        }
      },
      onError: () => setContinuousPlaying(false)
    });
  };

  const handleToggleContinuousPassage = () => {
    if (continuousPlaying || (isPlaying && activeSpeechId?.startsWith('gept-'))) {
      handleStopAll();
    } else {
      setContinuousPlaying(true);
      playParagraph(0, speechRate);
    }
  };

  const playDialogueLine = (index, rate = speechRate) => {
    const lines = currentAudioData?.dialogues;
    if (!lines || index >= lines.length) {
      setContinuousPlaying(false);
      return;
    }
    const line = lines[index];
    const lineId = `dlg-${activeLevel}-${index}`;
    speechEngine.speak(line.en, {
      id: lineId,
      rate,
      onEnd: () => {
        if (continuousRef.current && index + 1 < lines.length) {
          setTimeout(() => {
            if (continuousRef.current) playDialogueLine(index + 1, rate);
          }, 800);
        } else {
          setContinuousPlaying(false);
        }
      },
      onError: () => setContinuousPlaying(false)
    });
  };

  const handleToggleContinuousDialogue = () => {
    if (continuousPlaying && activeSpeechId?.startsWith('dlg-')) {
      handleStopAll();
    } else {
      setContinuousPlaying(true);
      playDialogueLine(0, speechRate);
    }
  };

  // Mock Quiz Handlers
  const handleStartQuiz = (count = quizQuestionCount) => {
    handleStopAll();
    let pool = [...geptMockQuestions];
    if (quizCategoryFilter !== 'all') {
      pool = pool.filter(q => q.category === quizCategoryFilter);
    }

    // Shuffle
    const shuffled = pool.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(count, pool.length));

    setCurrentQuizQuestions(selected);
    setQuizAnswers({});
    setCurrentQuizIdx(0);
    // Allow approx 1 minute per question
    setTimeLeft(selected.length * 60);
    setQuizStarted(true);
    setQuizFinished(false);
    playSound('click');
  };

  const handleSelectQuizAnswer = (optIndex) => {
    setQuizAnswers(prev => ({ ...prev, [currentQuizIdx]: optIndex }));
    playSound('click');
  };

  const handleFinishQuiz = () => {
    setQuizFinished(true);
    playSound('levelup');
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    try {
      // Save mistakes to local storage
      const existingMistakes = JSON.parse(localStorage.getItem('sixth_student_mistakes') || '[]');
      const newMistakes = [];
      currentQuizQuestions.forEach((q, idx) => {
        if (quizAnswers[idx] !== q.answerIndex) {
          const alreadyExists = existingMistakes.some(m => m.question === q.question);
          if (!alreadyExists) {
            newMistakes.push({
              ...q,
              subject: '全民英檢',
              userWrongAnswer: quizAnswers[idx] !== undefined ? q.options[quizAnswers[idx]] : '未作答',
              date: new Date().toISOString().slice(0, 10)
            });
          }
        }
      });
      if (newMistakes.length > 0) {
        localStorage.setItem('sixth_student_mistakes', JSON.stringify([...existingMistakes, ...newMistakes]));
      }

      // XP reward
      const stats = JSON.parse(localStorage.getItem('sixth_student_stats') || '{"xp":0,"level":1}');
      const earnedXp = Math.min(currentQuizQuestions.length * 10, 200);
      stats.xp = (stats.xp || 0) + earnedXp;
      localStorage.setItem('sixth_student_stats', JSON.stringify(stats));
    } catch (e) {}
  };

  const levelData = geptData.levels.find(l => l.id === activeLevel) || geptData.levels[0];
  const currentAudioData = geptAudioData[activeLevel] || geptAudioData['elementary'];

  // Calculate Quiz Score
  let correctCount = 0;
  if (quizFinished) {
    currentQuizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answerIndex) correctCount += 1;
    });
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="page-container animate-fade-in pb-20 max-w-5xl mx-auto">
      {/* Top Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link to="/" className="btn-icon" title="返回首頁">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-black text-primary">全民英檢 (GEPT) 旗艦專區</h1>
            <span className="badge badge-accent font-bold text-xs">200題全真模擬題庫</span>
          </div>
          <p className="text-secondary mt-1 text-sm font-medium">
            LTTC 全民英語能力分級檢定・全真模擬測驗・五級完整課綱・國際英檢對照・語音朗讀工作台
          </p>
        </div>
      </div>

      {/* Main Feature Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-secondary/10 rounded-2xl w-fit">
        <button
          className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            mainTab === 'quiz' ? 'bg-white shadow text-primary' : 'text-secondary hover:text-primary'
          }`}
          onClick={() => { setMainTab('quiz'); handleStopAll(); }}
        >
          <FileText size={16} className="text-blue-500" />
          <span>📝 全真模擬測驗 (200題)</span>
        </button>

        <button
          className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            mainTab === 'audio' ? 'bg-white shadow text-primary' : 'text-secondary hover:text-primary'
          }`}
          onClick={() => { setMainTab('audio'); }}
        >
          <Headphones size={16} className="text-emerald-500" />
          <span>🎙️ 聽力朗讀工作台</span>
        </button>

        <button
          className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            mainTab === 'curriculum' ? 'bg-white shadow text-primary' : 'text-secondary hover:text-primary'
          }`}
          onClick={() => { setMainTab('curriculum'); handleStopAll(); }}
        >
          <BookOpen size={16} className="text-indigo-500" />
          <span>🏛️ 五級考綱與文法</span>
        </button>

        <button
          className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            mainTab === 'comparison' ? 'bg-white shadow text-primary' : 'text-secondary hover:text-primary'
          }`}
          onClick={() => { setMainTab('comparison'); handleStopAll(); }}
        >
          <Award size={16} className="text-amber-500" />
          <span>📊 國際英檢對照表</span>
        </button>

        <button
          className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            mainTab === 'strategy' ? 'bg-white shadow text-primary' : 'text-secondary hover:text-primary'
          }`}
          onClick={() => { setMainTab('strategy'); handleStopAll(); }}
        >
          <Zap size={16} className="text-purple-500" />
          <span>💡 四項應考心法</span>
        </button>

        <button
          className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all ${
            mainTab === 'links' ? 'bg-white shadow text-primary' : 'text-secondary hover:text-primary'
          }`}
          onClick={() => { setMainTab('links'); handleStopAll(); }}
        >
          <Globe size={16} className="text-cyan-500" />
          <span>🌐 權威資源導航</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: 全真模擬測驗 (200 題題庫) */}
      {/* ========================================================================= */}
      {mainTab === 'quiz' && (
        <div className="space-y-6 animate-fade-in">
          {!quizStarted ? (
            <div className="card p-8 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100 dark:from-slate-800 dark:to-slate-800/80">
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <FileText size={36} />
                </div>

                <div>
                  <span className="badge badge-accent mb-2 font-bold">🎯 全真題庫實戰模擬</span>
                  <h2 className="text-2xl sm:text-3xl font-black text-primary mb-2">
                    全民英檢 (GEPT) 200 題選擇題模擬測驗
                  </h2>
                  <p className="text-secondary text-sm leading-relaxed">
                    題庫涵蓋：字彙與片語辨析、核心文法時態、實用情境會話、克漏字段落填空與長文閱讀理解。隨選題數隨機出題，附詳盡名師中文解析與原聲音訊朗讀！
                  </p>
                </div>

                {/* Question Count Selector */}
                <div className="p-4 bg-white dark:bg-slate-900/60 rounded-2xl border border-blue-100 dark:border-slate-700 shadow-sm space-y-3">
                  <div className="text-xs font-bold text-secondary text-left flex items-center gap-1.5">
                    <Filter size={14} className="text-blue-500" /> 請選擇模擬測驗題數：
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { count: 5, label: '5 題', sub: '⚡ 快速刷題 (~5分)' },
                      { count: 10, label: '10 題', sub: '🎯 標準快測 (~10分)' },
                      { count: 20, label: '20 題', sub: '📚 半套模擬 (~20分)' },
                      { count: 30, label: '30 題', sub: '🏆 全套初試 (~30分)' }
                    ].map(item => (
                      <button
                        key={item.count}
                        className={`p-3 rounded-xl text-center border transition-all ${
                          quizQuestionCount === item.count
                            ? 'bg-blue-600 text-white font-bold shadow-md border-blue-600 scale-[1.02]'
                            : 'bg-slate-50 dark:bg-slate-800 text-primary border-slate-200 dark:border-slate-700 hover:border-blue-300'
                        }`}
                        onClick={() => setQuizQuestionCount(item.count)}
                      >
                        <div className="text-base font-black">{item.label}</div>
                        <div className={`text-[11px] ${quizQuestionCount === item.count ? 'text-blue-100' : 'text-secondary'}`}>
                          {item.sub}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Category Filter */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold text-secondary">篩選出題範圍：</span>
                    <select
                      value={quizCategoryFilter}
                      onChange={(e) => setQuizCategoryFilter(e.target.value)}
                      className="text-xs font-bold bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-3 py-1.5 text-primary"
                    >
                      <option value="all">🌟 全部 200 題題庫綜合抽題</option>
                      <option value="字彙與片語">📖 核心字彙與常用片語 (40題)</option>
                      <option value="文法與句型">⚡ 核心文法與句型結構 (40題)</option>
                      <option value="情境會話">💬 日常生活與情境會話 (40題)</option>
                      <option value="克漏字段落填空">✍️ 克漏字段落填空 (40題)</option>
                      <option value="閱讀理解與推論">🔍 閱讀理解與短文推論 (40題)</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    className="btn-primary text-base px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20"
                    onClick={() => handleStartQuiz(quizQuestionCount)}
                  >
                    🔥 開始 {quizQuestionCount} 題模擬測驗
                  </button>
                </div>
              </div>
            </div>
          ) : quizFinished ? (
            /* Quiz Scorecard & Review */
            <div className="card p-8 border-t-4 border-emerald-500 space-y-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <Trophy size={36} />
                </div>
                <span className="badge badge-success font-bold">🎉 測驗完成！學習經驗值 +{Math.min(currentQuizQuestions.length * 10, 200)} XP</span>
                <h2 className="text-3xl font-black text-primary">
                  總得分：{Math.round((correctCount / currentQuizQuestions.length) * 100)} 分
                </h2>
                <p className="text-secondary text-sm">
                  共 {currentQuizQuestions.length} 題，答對 {correctCount} 題，答錯 {currentQuizQuestions.length - correctCount} 題。
                  錯題已自動記錄至錯題本！
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button className="btn-primary" onClick={() => handleStartQuiz(quizQuestionCount)}>
                    <RotateCcw size={16} /> 換一批題目再測一次
                  </button>
                  <button className="btn-outline" onClick={() => setQuizStarted(false)}>
                    返回題數選擇
                  </button>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <h3 className="font-black text-lg text-primary flex items-center gap-2">
                  📋 試卷逐題檢核、語音發音與名師解析：
                </h3>

                <div className="space-y-3">
                  {currentQuizQuestions.map((q, i) => {
                    const userAns = quizAnswers[i];
                    const isCorrect = userAns === q.answerIndex;
                    const speechId = `quiz-review-${i}`;
                    const isSpeaking = activeSpeechId === speechId;

                    return (
                      <div
                        key={i}
                        className="p-4 rounded-xl border text-sm transition-all"
                        style={{
                          backgroundColor: 'var(--bg-tertiary)',
                          borderLeft: isCorrect ? '4px solid var(--accent-success)' : '4px solid var(--accent-error)',
                          borderColor: 'var(--border-light)'
                        }}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="font-bold text-primary flex-1 whitespace-pre-line leading-relaxed">
                            <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded mr-2 font-mono">
                              #{q.id} [{q.category}]
                            </span>
                            {i + 1}. {q.question}
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              className={`btn-speak-icon ${isSpeaking ? 'active-speaking' : ''}`}
                              onClick={() => handlePlayItem(q.question, speechId)}
                              title="聆聽英文語音朗讀"
                            >
                              <Volume2 size={13} /> <span>朗讀</span>
                            </button>
                            {isCorrect ? (
                              <CheckCircle2 size={20} className="text-emerald-500" />
                            ) : (
                              <XCircle size={20} className="text-rose-500" />
                            )}
                          </div>
                        </div>

                        {/* Options breakdown */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 my-2">
                          {q.options.map((opt, optIdx) => {
                            const isUserChoice = userAns === optIdx;
                            const isRightAnswer = q.answerIndex === optIdx;
                            let badgeStyle = 'bg-white/60 dark:bg-slate-800/60 text-secondary border border-transparent';
                            if (isRightAnswer) badgeStyle = 'bg-emerald-100/90 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold border border-emerald-300';
                            if (isUserChoice && !isRightAnswer) badgeStyle = 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 font-bold line-through border border-rose-300';

                            return (
                              <div key={optIdx} className={`p-2 rounded-lg text-xs flex items-center justify-between ${badgeStyle}`}>
                                <span>{String.fromCharCode(65 + optIdx)}. {opt}</span>
                                {isRightAnswer && <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">正解</span>}
                                {isUserChoice && !isRightAnswer && <span className="text-[10px] bg-rose-600 text-white px-1.5 py-0.2 rounded font-bold">你的答案</span>}
                              </div>
                            );
                          })}
                        </div>

                        {/* Detailed Chinese Explanation */}
                        <div className="p-3 rounded-lg bg-white/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-secondary mt-2 leading-relaxed">
                          <strong className="text-primary">💡 名師觀念解析：</strong> {q.explanation}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* Quiz Active Answering */
            <div className="space-y-4">
              {/* Top Timer Bar */}
              <div className="card p-4 flex justify-between items-center bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="badge badge-accent font-bold">
                    題目 {currentQuizIdx + 1} / {currentQuizQuestions.length}
                  </span>
                  <span className="text-xs text-secondary font-bold hidden sm:inline">
                    [{currentQuizQuestions[currentQuizIdx]?.category}]
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center gap-1 font-mono font-bold text-base"
                    style={{ color: timeLeft < 120 ? 'var(--accent-error)' : 'var(--accent-primary)' }}
                  >
                    <Timer size={18} />
                    <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                  </div>
                  <button
                    className="btn-outline text-xs px-2 py-1"
                    onClick={() => setTimerActive(!timerActive)}
                  >
                    {timerActive ? '暫停計時' : '繼續計時'}
                  </button>
                </div>
              </div>

              {/* Active Question Box */}
              {currentQuizQuestions[currentQuizIdx] && (
                <div className="card p-6 space-y-6 shadow-sm border border-slate-100 dark:border-slate-700">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg sm:text-xl font-bold text-primary leading-relaxed flex-1 whitespace-pre-line">
                      {currentQuizIdx + 1}. {currentQuizQuestions[currentQuizIdx].question}
                    </h2>
                    <button
                      className="btn-speak-icon shrink-0"
                      onClick={() => handlePlayItem(currentQuizQuestions[currentQuizIdx].question, `active-q-${currentQuizIdx}`)}
                      title="發音朗讀題目"
                    >
                      <Volume2 size={15} /> <span>朗讀題目</span>
                    </button>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuizQuestions[currentQuizIdx].options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[currentQuizIdx] === optIdx;
                      return (
                        <button
                          key={optIdx}
                          className="w-full text-left p-4 rounded-xl border flex items-center justify-between transition-all"
                          style={{
                            borderColor: isSelected ? 'var(--accent-primary)' : 'var(--border-strong)',
                            backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-secondary)',
                            fontWeight: isSelected ? 700 : 500,
                            color: isSelected ? 'var(--accent-text)' : 'var(--text-primary)',
                            fontSize: 'calc(0.96rem * var(--font-scale))'
                          }}
                          onClick={() => handleSelectQuizAnswer(optIdx)}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                              isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-secondary'
                            }`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span>{opt}</span>
                          </div>
                          {isSelected && <CheckCircle2 size={18} style={{ color: 'var(--accent-primary)' }} />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800 flex-wrap gap-2">
                    <button
                      className="btn-outline text-xs px-4 py-2"
                      disabled={currentQuizIdx === 0}
                      onClick={() => setCurrentQuizIdx(c => c - 1)}
                    >
                      ← 上一題
                    </button>

                    <div className="flex gap-1 flex-wrap max-w-md justify-center">
                      {currentQuizQuestions.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentQuizIdx(i)}
                          className="w-7 h-7 rounded-full text-xs font-bold transition-all"
                          style={{
                            backgroundColor: currentQuizIdx === i ? 'var(--accent-primary)' : quizAnswers[i] !== undefined ? 'var(--accent-success-soft)' : 'var(--bg-tertiary)',
                            color: currentQuizIdx === i ? 'var(--text-inverse)' : quizAnswers[i] !== undefined ? 'var(--accent-success-text)' : 'var(--text-secondary)',
                            border: currentQuizIdx === i ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)'
                          }}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    {currentQuizIdx < currentQuizQuestions.length - 1 ? (
                      <button className="btn-primary text-xs px-4 py-2" onClick={() => setCurrentQuizIdx(c => c + 1)}>
                        下一題 →
                      </button>
                    ) : (
                      <button
                        className="btn-primary text-xs px-5 py-2"
                        style={{ backgroundColor: 'var(--accent-success)', borderColor: 'var(--accent-success)' }}
                        onClick={handleFinishQuiz}
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
      )}

      {/* ========================================================================= */}
      {/* TAB 2: 英語發音與聽力朗讀工作台 */}
      {/* ========================================================================= */}
      {mainTab === 'audio' && (
        <div className="space-y-6 animate-fade-in">
          {/* Level Switch */}
          <div className="flex flex-wrap gap-2 p-1 bg-secondary/10 rounded-2xl w-fit">
            {geptData.levels.map(lvl => (
              <button
                key={lvl.id}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeLevel === lvl.id
                    ? 'bg-white shadow-sm text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
                onClick={() => setActiveLevel(lvl.id)}
                style={{ color: activeLevel === lvl.id ? lvl.color : undefined }}
              >
                {lvl.emoji} {lvl.name} (CEFR {lvl.cefr})
              </button>
            ))}
          </div>

          <div className="english-audio-studio">
            <div className="studio-header">
              <div className="flex items-center gap-3">
                <span className="studio-title-badge">
                  <Headphones size={16} />
                  英語發音與聽力朗讀工作台 [{levelData.name}]
                </span>
                <span className="badge badge-success text-xs font-bold">✨ 美語發音語調</span>
              </div>
              
              <div className="flex items-center gap-3 flex-wrap">
                <div className="speed-selector-group">
                  <span className="text-xs px-2 text-secondary font-bold">語速:</span>
                  <button className={`speed-btn ${speechRate === 0.75 ? 'active' : ''}`} onClick={() => handleSetRate(0.75)}>🐢 0.75x</button>
                  <button className={`speed-btn ${speechRate === 1.0 ? 'active' : ''}`} onClick={() => handleSetRate(1.0)}>🎯 1.0x</button>
                  <button className={`speed-btn ${speechRate === 1.25 ? 'active' : ''}`} onClick={() => handleSetRate(1.25)}>🚀 1.25x</button>
                </div>
                {isPlaying && (
                  <button className="btn-audio-stop" onClick={handleStopAll}>
                    <Square size={13} style={{ fill: 'currentColor' }} /> 停止播放
                  </button>
                )}
              </div>
            </div>

            <div className="studio-tabs-bar">
              <button className={`studio-tab-btn ${activeAudioSubTab === 'passage' ? 'active' : ''}`} onClick={() => setActiveAudioSubTab('passage')}>
                <BookOpen size={15} /> <span>🎙️ 朗讀短文 ({currentAudioData?.readAloudPassages?.length || 0})</span>
              </button>
              <button className={`studio-tab-btn ${activeAudioSubTab === 'vocab' ? 'active' : ''}`} onClick={() => setActiveAudioSubTab('vocab')}>
                <Sparkles size={15} /> <span>🗣️ 核心字彙 ({currentAudioData?.vocabularies?.length || 0})</span>
              </button>
              <button className={`studio-tab-btn ${activeAudioSubTab === 'dialogue' ? 'active' : ''}`} onClick={() => setActiveAudioSubTab('dialogue')}>
                <MessageSquare size={15} /> <span>💬 情境對話 ({currentAudioData?.dialogues?.length || 0})</span>
              </button>
              <button className={`studio-tab-btn ${activeAudioSubTab === 'patterns' ? 'active' : ''}`} onClick={() => setActiveAudioSubTab('patterns')}>
                <Zap size={15} /> <span>🎯 實用句型 ({currentAudioData?.sentencePatterns?.length || 0})</span>
              </button>
            </div>

            {/* Audio Studio Tabs Content */}
            <div className="mt-4">
              {activeAudioSubTab === 'passage' && (
                <div>
                  <div className="player-controls-row mb-3">
                    <div className="flex items-center gap-3">
                      <button className={`btn-audio-play ${continuousPlaying ? 'active' : ''}`} onClick={handleToggleContinuousPassage}>
                        {continuousPlaying ? <><Pause size={16} /> 暫停朗讀</> : <><Play size={16} style={{ fill: 'currentColor' }} /> 播放全文</>}
                      </button>
                      <button className="btn-outline text-xs px-3 py-1.5 rounded-full" onClick={() => { setContinuousPlaying(true); playParagraph(0, speechRate); }}>
                        <RotateCcw size={13} /> 從頭播放
                      </button>
                    </div>
                    {isPlaying && activeSpeechId?.startsWith('gept-') && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-primary">朗讀中...</span>
                        <div className="sound-wave"><div className="sound-wave-bar"/><div className="sound-wave-bar"/><div className="sound-wave-bar"/></div>
                      </div>
                    )}
                  </div>
                  <div className="reading-passage-box">
                    {currentAudioData?.readAloudPassages?.map((p) => {
                      const isCurrent = activeSpeechId === p.id;
                      return (
                        <div key={p.id} className={`passage-paragraph-item ${isCurrent ? 'active-speaking' : ''}`} onClick={() => handlePlayItem(p.text, p.id)}>
                          <div style={{ flex: 1 }}>
                            <div className="passage-en-text">{p.text}</div>
                            <div className="passage-zh-text">{p.zh}</div>
                          </div>
                          <button className={`btn-speak-icon ${isCurrent ? 'slow' : ''}`} style={{ flexShrink: 0 }}>
                            {isCurrent ? <Volume1 size={13} /> : <Volume2 size={13} />}
                            <span>{isCurrent ? '發音中' : '聆聽'}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeAudioSubTab === 'vocab' && (
                <div className="vocab-cards-grid">
                  {currentAudioData?.vocabularies?.map((v) => {
                    const isW = activeSpeechId === `w-${v.id}`;
                    const isEx = activeSpeechId === `ex-${v.id}`;
                    return (
                      <div key={v.id} className={`vocab-card ${(isW || isEx) ? 'active-speaking' : ''}`}>
                        <div>
                          <div className="vocab-header-row">
                            <span className="vocab-word-text">{v.word}</span>
                            <span className="vocab-ipa-tag">{v.ipa}</span>
                          </div>
                          <div className="vocab-meaning-text">{v.meaning}</div>
                          <div className="vocab-example-box">
                            <div className="vocab-example-en">💬 {v.example}</div>
                            <div className="vocab-example-zh">{v.exampleZh}</div>
                          </div>
                        </div>
                        <div className="vocab-card-actions mt-2">
                          <button className="btn-speak-icon" onClick={() => handlePlayItem(v.word, `w-${v.id}`, 1.0)}><Volume2 size={13} /> <span>發音</span></button>
                          <button className="btn-speak-icon slow" onClick={() => handlePlayItem(v.word, `w-${v.id}`, 0.75)}><span>🐢 慢速</span></button>
                          <button className="btn-outline text-xs px-2.5 py-1 rounded-full" onClick={() => handlePlayItem(v.example, `ex-${v.id}`, speechRate)}>💬 聽例句</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeAudioSubTab === 'dialogue' && (
                <div>
                  <div className="player-controls-row mb-4">
                    <button className={`btn-audio-play ${continuousPlaying ? 'active' : ''}`} onClick={handleToggleContinuousDialogue}>
                      {continuousPlaying ? <><Pause size={16} /> 暫停對話</> : <><Play size={16} style={{ fill: 'currentColor' }} /> ▶️ 播放整段對話</>}
                    </button>
                  </div>
                  <div className="dialogue-chat-container">
                    {currentAudioData?.dialogues?.map((item, idx) => {
                      const lineId = `dlg-${activeLevel}-${idx}`;
                      const isSpeaking = activeSpeechId === lineId;
                      return (
                        <div key={idx} className="dialogue-item-bubble">
                          <div className="dialogue-avatar">{item.avatar}</div>
                          <div className={`dialogue-content-box ${isSpeaking ? 'active-speaking' : ''}`} onClick={() => handlePlayItem(item.en, lineId)}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="dialogue-speaker-name">{item.speaker}</span>
                              <button className="btn-speak-icon py-0.5 px-2 text-[0.7rem]"><Volume2 size={12} /> <span>聆聽</span></button>
                            </div>
                            <div className="dialogue-en-text">{item.en}</div>
                            <div className="dialogue-zh-text">{item.zh}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeAudioSubTab === 'patterns' && (
                <div className="pattern-cards-list">
                  {currentAudioData?.sentencePatterns?.map((sp) => {
                    return (
                      <div key={sp.id} className="pattern-card-item">
                        <div style={{ flex: 1 }}>
                          <div className="pattern-formula-tag">{sp.pattern}</div>
                          <div className="pattern-example-line"><strong>例句: </strong>{sp.example}</div>
                          <div className="text-xs text-secondary mt-1">💡 用法說明: {sp.meaning}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="btn-speak-icon" onClick={() => handlePlayItem(sp.example, `sp-${sp.id}`, speechRate)}>
                            <Volume2 size={13} /> <span>聆聽例句</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: 五級考綱與文法大綱 */}
      {/* ========================================================================= */}
      {mainTab === 'curriculum' && (
        <div className="space-y-6 animate-fade-in">
          {/* Level Switch */}
          <div className="flex flex-wrap gap-2 p-1 bg-secondary/10 rounded-2xl w-fit">
            {geptData.levels.map(lvl => (
              <button
                key={lvl.id}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeLevel === lvl.id
                    ? 'bg-white shadow-sm text-primary'
                    : 'text-secondary hover:text-primary'
                }`}
                onClick={() => setActiveLevel(lvl.id)}
                style={{ color: activeLevel === lvl.id ? lvl.color : undefined }}
              >
                {lvl.emoji} {lvl.name} ({lvl.nameEn})
                {lvl.recommended && <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">推薦</span>}
              </button>
            ))}
          </div>

          {/* Level Overview Card */}
          <div className="card shadow-sm border-l-4" style={{ borderLeftColor: levelData.color }}>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4 flex-wrap gap-3">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: levelData.color }}>
                    {levelData.emoji} {levelData.name} ({levelData.nameEn})
                  </h2>
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className="badge font-bold" style={{ backgroundColor: `${levelData.color}20`, color: levelData.color }}>
                      CEFR {levelData.cefr}
                    </span>
                    <span className="badge badge-accent font-bold">{levelData.badge}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-secondary font-bold">目標詞彙量</div>
                  <div className="text-xl font-black text-primary">{levelData.vocabularyRange}</div>
                </div>
              </div>
              
              <p className="text-secondary font-medium mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 text-sm">
                <strong className="text-primary">適用對象：</strong>{levelData.targetAudience}
              </p>
            </div>
          </div>

          {/* Structure & Grammar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Exam Structure */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <Award size={20} className="text-blue-500" /> 測驗架構
              </h3>
              <div className="space-y-4">
                {['listening', 'reading', 'writing', 'speaking'].map(skill => {
                  const data = levelData.examStructure[skill];
                  if (!data) return null;
                  const iconMap = { listening: '🎧', reading: '📖', writing: '✍️', speaking: '🗣️' };
                  return (
                    <div key={skill} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-bold text-primary">{iconMap[skill]} {data.name}</div>
                        <div className="text-xs font-bold text-secondary bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded">
                          {data.stage} | {data.duration}
                        </div>
                      </div>
                      {data.types && (
                        <ul className="text-xs text-secondary space-y-1 mt-2">
                          {data.types.map((t, i) => (
                            <li key={i}><strong className="text-primary">{t.type}:</strong> {t.desc}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Grammar Focus & Topics */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-emerald-500" /> 文法重點
                </h3>
                <div className="space-y-4">
                  {levelData.grammarFocus.map((g, idx) => (
                    <div key={idx}>
                      <div className="text-xs font-bold text-secondary mb-2">{g.category}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {g.items.map((item, i) => (
                          <span key={i} className="text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-md">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-primary mb-3">🎯 常見主題範圍</h3>
                <div className="flex flex-wrap gap-2">
                  {levelData.topicAreas.map((topic, i) => (
                    <span key={i} className="badge bg-slate-100 dark:bg-slate-800 text-secondary border-none px-3 py-1 text-xs">
                      # {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: 國際英檢對照表 */}
      {/* ========================================================================= */}
      {mainTab === 'comparison' && (
        <div className="space-y-6 animate-fade-in">
          <div className="card p-6">
            <h2 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
              <Award size={22} className="text-amber-500" />
              各大國際英檢能力對照表 (CEFR 矩陣)
            </h2>
            <p className="text-xs text-secondary mb-4 leading-relaxed">
              參照歐洲語言共同參考架構 (CEFR)、LTTC 全民英檢、ETS 多益 (TOEIC)、托福 (TOEFL iBT)、雅思 (IELTS) 及劍橋英語官方對照標準。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800 text-primary border-b border-slate-200 dark:border-slate-700">
                    <th className="p-3 font-bold">CEFR 等級</th>
                    <th className="p-3 font-bold text-blue-600 dark:text-blue-400">全民英檢 (GEPT)</th>
                    <th className="p-3 font-bold">多益 (TOEIC)</th>
                    <th className="p-3 font-bold">托福 (TOEFL iBT)</th>
                    <th className="p-3 font-bold">雅思 (IELTS)</th>
                    <th className="p-3 font-bold">劍橋英語</th>
                    <th className="p-3 font-bold">英語能力指標敘述</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {geptData.comparisonTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="p-3 font-bold text-primary whitespace-nowrap">{row.cefr}</td>
                      <td className="p-3 font-black text-blue-600 dark:text-blue-400 whitespace-nowrap">{row.gept}</td>
                      <td className="p-3 whitespace-nowrap">{row.toeic}</td>
                      <td className="p-3 whitespace-nowrap">{row.toefl}</td>
                      <td className="p-3 whitespace-nowrap">{row.ielts}</td>
                      <td className="p-3 whitespace-nowrap">{row.cambridge}</td>
                      <td className="p-3 text-secondary min-w-[220px]">{row.ability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: 四項高分應考攻略 */}
      {/* ========================================================================= */}
      {mainTab === 'strategy' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {geptData.examStrategies.map((strat, idx) => (
              <div key={idx} className="card p-6 border-t-4 border-purple-500 space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <span className="text-2xl">{strat.icon}</span>
                  <span>{strat.skill} 核心得分心法</span>
                </h3>
                <div className="space-y-3">
                  {strat.tips.map((tip, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-700">
                      <h4 className="font-bold text-xs text-primary mb-1 flex items-center gap-1.5">
                        <Zap size={13} className="text-purple-500" /> {tip.title}
                      </h4>
                      <p className="text-xs text-secondary leading-relaxed">{tip.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: 權威英檢資源導航 */}
      {/* ========================================================================= */}
      {mainTab === 'links' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {geptData.officialResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 hover:border-blue-300 flex flex-col justify-between"
                style={{ textDecoration: 'none' }}
              >
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="badge badge-accent text-[11px] font-bold">{res.badge}</span>
                    <ExternalLink size={14} className="text-secondary" />
                  </div>
                  <h3 className="font-bold text-base text-primary mb-1">{res.name}</h3>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">{res.org}</div>
                  <p className="text-xs text-secondary leading-relaxed">{res.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-blue-500 font-bold flex items-center gap-1">
                  前往官方網站 ➔
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GeptPage;
