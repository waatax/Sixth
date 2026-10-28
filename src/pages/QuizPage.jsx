import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  Zap, 
  Sparkles, 
  BookOpen, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Heart, 
  Flame, 
  HelpCircle, 
  Keyboard, 
  Target,
  Lightbulb,
  Compass,
  PenTool,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizData } from '../data/quizData';
import { coursesData } from '../data/courses';
import { playSound, toggleMute, getMuteState, triggerHaptic, dispatchDynamicIsland } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';
import { useGamification } from '../context/GamificationContext';
import ComboFlameIndicator from '../components/gamification/ComboFlameIndicator';
import LessonCheatSheetModal from '../components/lesson/LessonCheatSheetModal';
import LessonScratchpadModal from '../components/lesson/LessonScratchpadModal';
import QuestionDiagram from '../components/quiz/QuestionDiagram';
import DuolingoLessonModal from '../components/duolingo/DuolingoLessonModal';
import TextbookReferenceCompendiumModal from '../components/duolingo/TextbookReferenceCompendiumModal';
import { getUnitCompleteCatalog } from '../data/curriculumCatalog108';

// 智能三階提示鷹架提取演算法（不洩漏標準答案，循序漸進啟發思考）
const extractQuestionHints = (question) => {
  if (!question) return { level1: '', level2: '' };

  let level1 = question.hintLevel1 || '';
  let level2 = question.hintLevel2 || '';

  const exp = question.explanation || '';

  if (!level1) {
    const conceptMatch = exp.match(/【(?:觀念解析|破題口訣|思考方向|概念心法)】\s*([^。！？\n]+[。！？]?)/);
    if (conceptMatch) {
      level1 = conceptMatch[1].trim();
    } else {
      const firstSentence = exp.split(/[。！？\n]/)[0];
      level1 = firstSentence ? `${firstSentence}。` : '回想本課核心觀念與定義，找出題幹中的關鍵條件與數據。';
    }
  }

  if (!level2) {
    const stepMatch = exp.match(/【(?:解題步驟|計算推導|步驟指引|解題關鍵)】\s*([\s\S]*?)(?=【|$)/);
    if (stepMatch) {
      const stepText = stepMatch[1].trim();
      const firstStep = stepText.split(/[；;\n]/)[0];
      level2 = firstStep ? `${firstStep}。` : stepText.slice(0, 90);
    } else {
      const sentences = exp.split(/[。！？\n]/).filter(s => s.trim().length > 0);
      level2 = sentences[1] ? `${sentences[1]}。` : '先列出題目已知條件，判斷要套用的解題步驟與公式。';
    }
  }

  return { level1, level2 };
};

// 剖析名師解題觀念為小六友善的結構化卡片模組（觀念、步驟、避坑、口訣）
const parseExplanationSections = (text) => {
  if (!text) return [];
  const regex = /【([^】]+)】\s*([^【]+)/g;
  const sections = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    const rawTag = match[1].trim();
    const content = match[2].trim();
    let icon = '💡';
    let label = `【${rawTag}】`;
    let theme = 'blue';

    if (rawTag.includes('步驟') || rawTag.includes('計算') || rawTag.includes('推導') || rawTag.includes('解題步驟')) {
      icon = '📝';
      label = `【解題步驟與算理】`;
      theme = 'indigo';
    } else if (rawTag.includes('公式') || rawTag.includes('定理')) {
      icon = '📐';
      label = `【核心公式心法】`;
      theme = 'purple';
    } else if (rawTag.includes('口訣')) {
      icon = '⚡';
      label = `【小六記憶黃金口訣】`;
      theme = 'emerald';
    } else if (rawTag.includes('避雷') || rawTag.includes('防錯') || rawTag.includes('陷阱') || rawTag.includes('辨析') || rawTag.includes('盲點')) {
      icon = '⚠️';
      label = `【避坑防錯指南】`;
      theme = 'rose';
    } else if (rawTag.includes('素養') || rawTag.includes('生活') || rawTag.includes('應用') || rawTag.includes('里程碑')) {
      icon = '🌟';
      label = `【生活素養應用】`;
      theme = 'amber';
    }

    sections.push({ rawTag, label, content, icon, theme });
  }

  if (sections.length === 0) {
    const sentences = text.split(/(?<=[。！？])/).filter(s => s.trim().length > 0);
    if (sentences.length <= 1) {
      sections.push({ rawTag: '名師解題觀念', label: '【名師解題觀念】', content: text, icon: '💡', theme: 'blue' });
    } else {
      sections.push({ rawTag: '核心觀念破題', label: '【核心觀念破題】', content: sentences[0], icon: '💡', theme: 'blue' });
      sections.push({ rawTag: '算理步驟詳解', label: '【算理步驟詳解】', content: sentences.slice(1).join(' '), icon: '📝', theme: 'indigo' });
    }
  }

  return sections;
};

const QuizPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { recordQuizResult, inventory, consumeItem } = useGamification();
  const [showCheatSheet, setShowCheatSheet] = useState(false);
  const [isDuolingoOpen, setIsDuolingoOpen] = useState(false);
  const [isCompendiumOpen, setIsCompendiumOpen] = useState(false);

  // Locate unit metadata for Cheat Sheet
  let currentUnit = null;
  let currentSubjectName = '';
  for (const subject of coursesData.subjects) {
    const found = coursesData.units[subject.id]?.find(u => u.id === unitId);
    if (found) {
      currentUnit = found;
      currentSubjectName = subject.name;
      break;
    }
  }
  if (!currentUnit) {
    currentUnit = { id: unitId, title: unitId };
    currentSubjectName = '重點單元';
  }

  // Quiz Mode: 'all' | 'representative' | 'foundation' | 'challenge'
  const urlMode = searchParams.get('mode');
  const [quizMode, setQuizMode] = useState(
    urlMode === 'challenge' ? 'challenge' : 
    urlMode === 'representative' ? 'representative' : 
    urlMode === 'foundation' ? 'foundation' : 'all'
  );

  const allQuestions = useMemo(() => quizData[unitId] || [], [unitId]);

  const questions = useMemo(() => {
    if (quizMode === 'challenge') {
      const list = allQuestions.filter(q => q.isMockChallenge);
      return list.length > 0 ? list : allQuestions;
    }
    if (quizMode === 'representative') {
      const list = allQuestions.filter(q => q.isRepresentative);
      return list.length > 0 ? list : allQuestions;
    }
    if (quizMode === 'foundation') {
      const list = allQuestions.filter(q => !q.isMockChallenge && !q.isRepresentative);
      return list.length > 0 ? list : allQuestions;
    }
    return allQuestions;
  }, [allQuestions, quizMode]);

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [muted, setMuted] = useState(getMuteState());
  const [combo, setCombo] = useState(0);
  const [disabledOptions, setDisabledOptions] = useState([]);
  const [quizSummary, setQuizSummary] = useState(null);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [hintLevel, setHintLevel] = useState(0); // 0: none, 1: Level 1 clue, 2: Level 2 step
  const [isSpeakingExplanation, setIsSpeakingExplanation] = useState(false);

  const toggleHint = (level) => {
    playSound('pop');
    triggerHaptic('light');
    setHintLevel(prev => (prev === level ? 0 : level));
  };

  const changeMode = (newMode) => {
    speechEngine.stop();
    setIsSpeakingExplanation(false);
    setQuizMode(newMode);
    setCurrentQ(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setCombo(0);
    setDisabledOptions([]);
    setQuizSummary(null);
    setHintLevel(0);
    playSound('click');
  };

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
    speechEngine.stop();
    setIsSpeakingExplanation(false);
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
      setHintLevel(0);
    }
  };

  const handleUse5050 = () => {
    if ((inventory.hint_5050 || 0) <= 0) {
      alert('背包中沒有 50:50 提示卡了！可在首頁每日幸運轉盤或神獸轉蛋中免費獲得！');
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
    speechEngine.stop();
    setIsSpeakingExplanation(false);
    setCurrentQ(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
    setCombo(0);
    setDisabledOptions([]);
    setQuizSummary(null);
    setHintLevel(0);
  };

  // Cleanup speech on unmount
  useEffect(() => {
    return () => {
      speechEngine.stop();
    };
  }, []);

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
        <button className="btn-primary" onClick={() => navigate('/')}>返回 Sixth 主頁 (單元列表)</button>
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
      <>
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
          <h2 className="h1" style={{ margin: '8px 0', fontSize: '2.2rem' }}>
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
                  {q.diagram && (
                    <div className="my-2 max-w-sm mx-auto">
                      <QuestionDiagram diagram={q.diagram} />
                    </div>
                  )}
                  <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>觀念名師解析：</strong> {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Smart Prescription for Unfamiliar Students */}
        {score < questions.length ? (
          <div 
            className="w-full text-left p-4 rounded-2xl border animate-fade-in"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.04)',
              borderColor: 'rgba(239, 68, 68, 0.25)',
              borderLeft: '5px solid #ef4444'
            }}
          >
            <div className="flex items-center gap-2 text-sm font-bold text-rose-600 dark:text-rose-400 mb-1">
              <span>🩺 智能弱點診斷處方箋 (Smart Prescription)</span>
            </div>
            <p className="text-xs text-secondary mb-3 leading-relaxed">
              本次測驗有 {questions.length - score} 題需要加強。名師叮嚀：搞懂錯題是融會貫通的最快途徑！建議點擊下方按鈕回到課文對應小節精準複習：
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => navigate(`/lesson/${unitId}`)}
                className="btn-primary text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 font-bold shadow-sm"
                style={{ backgroundColor: '#ef4444', borderColor: '#ef4444' }}
              >
                <BookOpen size={14} />
                <span>📖 回到【{currentUnit.title}】課文精準補強</span>
              </button>
              <button
                onClick={() => setShowCheatSheet(true)}
                className="btn-outline text-xs py-2 px-4 rounded-lg flex items-center gap-1.5 font-bold"
              >
                <Zap size={14} style={{ color: '#d97706' }} />
                <span>⚡ 查閱考前 1 分鐘極速秘笈</span>
              </button>
            </div>
          </div>
        ) : (
          <div 
            className="w-full text-left p-4 rounded-2xl border animate-fade-in"
            style={{
              backgroundColor: 'rgba(16, 185, 129, 0.05)',
              borderColor: 'rgba(16, 185, 129, 0.3)',
              borderLeft: '5px solid #10b981'
            }}
          >
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-1">
              <span>🏆 完美融會貫通認證！</span>
            </div>
            <p className="text-xs text-secondary leading-relaxed m-0">
              太強了！你已 100% 掌握本單元所有核心觀念與題型，解題思維達到國中先修與會考素養標準！可以挑戰下一個單元或前往「國中先修專區」解鎖新知！
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center w-full">
          <button 
            className="btn-outline flex items-center gap-2 text-sm font-bold text-amber-500 border-amber-400/60 hover:bg-amber-500/10" 
            onClick={() => {
              setShowCheatSheet(true);
              playSound('pop');
              triggerHaptic('selection');
            }}
          >
            <Zap size={16} /> ⚡ 查閱本單元考前極速秘笈
          </button>

          <button
            className="btn-outline flex items-center gap-1.5 text-sm font-bold text-indigo-500 border-indigo-400/60 hover:bg-indigo-500/10"
            onClick={() => navigate(`/lesson/${unitId}`)}
          >
            <BookOpen size={16} /> 📖 返回圖解課文
          </button>

          <button className="btn-outline flex items-center gap-2 text-sm" onClick={handleRestart}>
            <RotateCcw size={16} /> 重新挑戰刷滿 3 星
          </button>

          <button className="btn-primary flex items-center gap-2 text-sm" onClick={() => navigate('/')}>
            回到 Sixth 主頁 (單元列表) →
          </button>
        </div>
      </div>

      <LessonCheatSheetModal
        isOpen={showCheatSheet}
        onClose={() => setShowCheatSheet(false)}
        unit={currentUnit}
        subjectName={currentSubjectName}
      />
    </>
  );
}

  return (
    <div className="max-w-2xl mx-auto mt-4 flex flex-col gap-5 py-2">
      <div className="flex justify-between items-center">
        {/* Breadcrumb Navigation: Back to Sixth Home & Subject */}
        <div className="flex items-center gap-2 text-sm text-secondary font-bold flex-wrap">
          <button 
            className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0 font-bold" 
            onClick={() => navigate('/')}
            title="返回 Sixth Project 主頁"
          >
            <ArrowLeft size={16} /> 返回 Sixth 主頁 (單元列表)
          </button>
          {currentSubjectName && (
            <>
              <span className="text-muted opacity-40">/</span>
              <Link 
                to={`/subject/${currentUnit?.id?.split('-u')[0] || 'math'}`} 
                className="hover:text-primary transition-colors text-xs text-secondary font-semibold"
                title={`查看 ${currentSubjectName} 單元總覽`}
              >
                {currentSubjectName}
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => {
            window.dispatchEvent(new CustomEvent('open_quick_quiz_menu', {
              detail: {
                subject: currentUnit?.id?.split('-u')[0] || 'math',
                semester: currentUnit?.semester || '6A',
                scope: currentUnit?.term || 'midterm'
              }
            }));
            playSound('ios_tap');
          }}
          className="px-3 py-1.5 rounded-full text-xs font-black text-white flex items-center gap-1 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
            border: 'none'
          }}
        >
          <Zap size={13} className="fill-white" />
          <span>⚡ 快速切換學期 / 科目 / 期中期末測驗</span>
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

      {/* Mode Switcher Tabs */}
      <div className="flex justify-center gap-2 p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-800/80 mb-1 flex-wrap">
        <button
          className={`btn-pill text-xs font-bold ${quizMode === 'all' ? 'active' : ''}`}
          onClick={() => changeMode('all')}
        >
          🏆 全單元大滿貫 ({allQuestions.length}題)
        </button>
        <button
          className={`btn-pill text-xs font-bold ${quizMode === 'representative' ? 'active' : ''}`}
          onClick={() => changeMode('representative')}
          style={quizMode === 'representative' ? { backgroundColor: 'var(--apple-blue)', color: '#fff', borderColor: 'var(--apple-blue)' } : {}}
        >
          📘 課綱精選代表題 ({allQuestions.filter(q => q.isRepresentative).length || 16}題)
        </button>
        <button
          className={`btn-pill text-xs font-bold ${quizMode === 'foundation' ? 'active' : ''}`}
          onClick={() => changeMode('foundation')}
        >
          📝 基礎核心驗收 ({allQuestions.filter(q => !q.isMockChallenge && !q.isRepresentative).length || 4}題)
        </button>
        <button
          className={`btn-pill text-xs font-bold ${quizMode === 'challenge' ? 'active' : ''}`}
          onClick={() => changeMode('challenge')}
          style={quizMode === 'challenge' ? { backgroundColor: 'var(--apple-orange)', color: '#fff', borderColor: 'var(--apple-orange)' } : {}}
        >
          <Flame size={13} className="inline mr-1" />
          ⚔️ 模擬挑戰圖解 ({allQuestions.filter(q => q.isMockChallenge).length || 2}題)
        </button>
        <button
          onClick={() => {
            setIsDuolingoOpen(true);
            playSound('ios_tap');
          }}
          className="btn-pill text-xs font-black"
          style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            color: '#ffffff',
            borderColor: '#16a34a'
          }}
        >
          🎮 互動學習遊戲 (字塊/配對/聽力)
        </button>
        <button
          onClick={() => {
            setIsCompendiumOpen(true);
            playSound('ios_tap');
          }}
          className="btn-pill text-xs font-black"
          style={{
            backgroundColor: 'rgba(79, 70, 229, 0.14)',
            color: '#4f46e5',
            borderColor: 'rgba(79, 70, 229, 0.4)'
          }}
        >
          📚 課本三版本＆參考書
        </button>
      </div>

      <div className="card flex flex-col gap-6" style={{ padding: '32px', borderRadius: 'var(--radius-xl)', border: '1.5px solid var(--border-light)', backgroundColor: 'var(--bg-secondary)' }}>
        {/* Progress Header & 50:50 Lifeline */}
        <div className="flex justify-between items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span 
            className="badge badge-accent" 
            style={{ 
              fontWeight: 700, 
              backgroundColor: quizMode === 'challenge' ? 'rgba(255, 149, 0, 0.15)' : quizMode === 'representative' ? 'rgba(59, 130, 246, 0.15)' : undefined, 
              color: quizMode === 'challenge' ? 'var(--apple-orange)' : quizMode === 'representative' ? '#2563eb' : undefined,
              border: quizMode === 'challenge' ? '1px solid rgba(255, 149, 0, 0.3)' : quizMode === 'representative' ? '1px solid rgba(59, 130, 246, 0.3)' : undefined
            }}
          >
            {quizMode === 'challenge' ? '⚔️ 單元模擬挑戰・會考素養' : quizMode === 'representative' ? '📘 課綱精選代表題・實戰衝刺' : quizMode === 'foundation' ? '✏️ 單元重點測驗・基礎驗收' : '🏆 全單元大滿貫測驗'}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsScratchpadOpen(true);
                playSound('pop');
              }}
              className="btn-outline flex items-center gap-1 text-xs py-1 px-3 font-bold text-blue-500"
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.4)'
              }}
              title="開啟隨堂計算草稿紙"
            >
              <PenTool size={13} />
              <span>🧮 計算草稿</span>
            </button>
            <button
              onClick={() => {
                setShowCheatSheet(true);
                playSound('pop');
                triggerHaptic('selection');
              }}
              className="btn-outline flex items-center gap-1 text-xs py-1 px-3 font-bold text-amber-500"
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderColor: 'rgba(245, 158, 11, 0.4)'
              }}
              title="查看考前極速秘笈"
            >
              <Zap size={14} />
              <span>⚡ 極速秘笈</span>
            </button>
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
              backgroundColor: quizMode === 'challenge' ? 'var(--apple-orange)' : 'var(--accent-primary)', 
              transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
            }} 
          />
        </div>

        {/* Challenge badge if present */}
        {question?.isMockChallenge && (
          <div className="-mb-2">
            <span 
              className="badge inline-flex items-center gap-1.5 py-1 px-3"
              style={{
                backgroundColor: 'rgba(255, 149, 0, 0.15)',
                color: 'var(--apple-orange)',
                border: '1px solid rgba(255, 149, 0, 0.35)',
                fontWeight: 700,
                fontSize: '0.8rem'
              }}
            >
              <Flame size={14} />
              <span>{question.challengeBadge || '🔥 單元模擬挑戰・壓軸真題'}</span>
            </span>
          </div>
        )}

        {/* Question Title */}
        <div className="flex justify-between items-start gap-3">
          <h2 className="h3" style={{ fontSize: '1.3rem', lineHeight: 1.55, flex: 1 }}>
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

        {/* Render Visual Diagram if question has one */}
        {question?.diagram && (
          <QuestionDiagram diagram={question.diagram} />
        )}

        {/* Three-Tiered Scaffolding Hints System */}
        {(() => {
          const hints = extractQuestionHints(question);
          return (
            <div 
              className="scaffolding-hint-container rounded-2xl p-3 border transition-all"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                borderColor: hintLevel > 0 ? (hintLevel === 1 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(59, 130, 246, 0.4)') : 'var(--border-light)'
              }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                  <HelpCircle size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>卡題了？點擊漸進式思考鷹架（引導自主破題）：</span>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <button
                    onClick={() => toggleHint(1)}
                    className={`btn-outline text-xs py-1 px-3 rounded-full font-bold flex items-center gap-1 ${
                      hintLevel === 1 ? 'bg-amber-500/15 border-amber-500 text-amber-600 dark:text-amber-400' : ''
                    }`}
                    title="開啟 Level 1 核心觀念線索（不劇透答案）"
                  >
                    <Lightbulb size={13} />
                    <span>💡 Level 1 觀念提點</span>
                  </button>
                  <button
                    onClick={() => toggleHint(2)}
                    className={`btn-outline text-xs py-1 px-3 rounded-full font-bold flex items-center gap-1 ${
                      hintLevel === 2 ? 'bg-blue-500/15 border-blue-500 text-blue-600 dark:text-blue-400' : ''
                    }`}
                    title="開啟 Level 2 步驟指引（算式或關鍵字拆解）"
                  >
                    <Compass size={13} />
                    <span>📝 Level 2 步驟指引</span>
                  </button>
                </div>
              </div>

              {/* Level 1 Hint Box */}
              {hintLevel === 1 && (
                <div className="mt-2.5 p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs animate-fade-in flex items-start gap-2">
                  <Lightbulb size={15} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-amber-700 dark:text-amber-300 font-bold">💡 Level 1 觀念提點：</strong>
                    <span className="text-secondary">{hints.level1}</span>
                  </div>
                </div>
              )}

              {/* Level 2 Hint Box */}
              {hintLevel === 2 && (
                <div className="mt-2.5 p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs animate-fade-in flex items-start gap-2">
                  <Compass size={15} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <strong className="text-blue-700 dark:text-blue-300 font-bold">📝 Level 2 步驟指引：</strong>
                    <span className="text-secondary">{hints.level2}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* Options (國小六年級專屬四選一標準化與選項徽章) */}
        <div className="flex flex-col gap-3">
          {question.options.map((opt, i) => {
            const isAnswer = i === question.answerIndex;
            const isUserSelected = i === selectedOption;
            const isDisabled = disabledOptions.includes(i);
            const letterLabel = ['A', 'B', 'C', 'D'][i];
            const numLabel = ['①', '②', '③', '④'][i];

            let bgColor = 'var(--bg-secondary)';
            let borderColor = 'var(--border-strong)';
            let textColor = 'var(--text-primary)';
            let badgeBg = 'var(--bg-tertiary)';
            let badgeColor = 'var(--text-secondary)';
            let fontWeight = 500;

            if (showResult) {
              if (isAnswer) {
                bgColor = 'var(--accent-success-soft)';
                borderColor = 'var(--accent-success)';
                textColor = 'var(--accent-success-text)';
                badgeBg = 'var(--accent-success)';
                badgeColor = '#ffffff';
                fontWeight = 700;
              } else if (isUserSelected && !isAnswer) {
                bgColor = 'var(--accent-error-soft)';
                borderColor = 'var(--accent-error)';
                textColor = 'var(--accent-error-text)';
                badgeBg = 'var(--accent-error)';
                badgeColor = '#ffffff';
                fontWeight = 700;
              }
            } else if (isUserSelected) {
              bgColor = 'var(--accent-soft)';
              borderColor = 'var(--accent-primary)';
              textColor = 'var(--accent-text)';
              badgeBg = 'var(--accent-primary)';
              badgeColor = '#ffffff';
              fontWeight = 700;
            }

            return (
              <button
                key={i}
                disabled={isDisabled}
                className="btn-outline flex justify-between items-center transition-all group cursor-pointer"
                style={{
                  textAlign: 'left',
                  padding: '14px 18px',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  backgroundColor: bgColor,
                  borderColor: borderColor,
                  color: textColor,
                  fontWeight: fontWeight,
                  lineHeight: 1.5,
                  opacity: isDisabled ? 0.35 : 1,
                  textDecoration: isDisabled ? 'line-through' : 'none',
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                  borderWidth: isUserSelected || (showResult && isAnswer) ? '2px' : '1.5px',
                  boxShadow: isUserSelected ? '0 3px 12px rgba(59, 130, 246, 0.15)' : 'none'
                }}
                onClick={() => handleSelect(i)}
              >
                <div className="flex items-center gap-3" style={{ flex: 1 }}>
                  {/* Option Badge */}
                  <div
                    className="flex items-center justify-center font-black rounded-xl text-xs flex-shrink-0 transition-colors"
                    style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: badgeBg,
                      color: badgeColor,
                      border: '1.5px solid var(--border-light)',
                      boxShadow: 'var(--shadow-xs)'
                    }}
                  >
                    <span className="font-extrabold">{letterLabel}</span>
                    <span className="text-[10px] ml-0.5 opacity-80">{numLabel}</span>
                  </div>

                  {/* Option Text */}
                  <span className="leading-snug text-base" style={{ flex: 1 }}>
                    {opt}
                  </span>

                  {unitId?.startsWith('eng-') && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        speechEngine.speak(opt);
                      }}
                      className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer inline-flex items-center ml-1"
                      title="朗讀此選項"
                    >
                      <Volume2 size={14} style={{ opacity: 0.8, color: 'var(--accent-primary)' }} />
                    </span>
                  )}
                </div>

                {/* Right Status Indicator */}
                <div className="flex items-center gap-1.5 ml-2 flex-shrink-0">
                  {showResult && isAnswer && (
                    <span className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={16} /> 正確
                    </span>
                  )}
                  {showResult && isUserSelected && !isAnswer && (
                    <span className="flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400">
                      <XCircle size={16} /> 陷阱
                    </span>
                  )}
                  {!showResult && (
                    <span className="text-[11px] text-tertiary hidden sm:inline-block font-mono opacity-40 group-hover:opacity-100 transition-opacity">
                      [按 {i + 1}]
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* 🎓 小六專屬四選一完整說明與名師解題鷹架 */}
        {showResult && (
          <div 
            className="animate-fade-in card p-4 sm:p-5 flex flex-col gap-4 rounded-2xl"
            style={{ 
              backgroundColor: 'var(--bg-tertiary)', 
              borderLeft: selectedOption === question.answerIndex ? '5px solid var(--accent-success)' : '5px solid var(--accent-warning)',
              border: '1.5px solid var(--border-light)',
              borderLeftWidth: '5px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            {/* 1. 正向鼓勵回饋與語音朗讀工具列 */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                {selectedOption === question.answerIndex ? (
                  <span className="badge badge-success text-xs font-black flex items-center gap-1.5 py-1 px-3">
                    <Sparkles size={14} />
                    <span>🎉 太棒了！答對了！(+20 XP)</span>
                  </span>
                ) : (
                  <span className="badge badge-warning text-xs font-black flex items-center gap-1.5 py-1 px-3" style={{ backgroundColor: 'rgba(245, 158, 11, 0.2)', color: '#d97706' }}>
                    <Heart size={14} />
                    <span>💡 沒關係！「錯誤是學習最棒的養分」！</span>
                  </span>
                )}
                <span className="text-xs text-secondary font-medium hidden sm:inline">
                  {selectedOption === question.answerIndex 
                    ? '思維精準！你已完全掌握小六關鍵考點！' 
                    : '這題常考小六容易踩的盲點，看解析釐清觀念下次全對！'}
                </span>
              </div>

              {/* 語音朗讀名師解析按鈕 */}
              <button
                onClick={() => {
                  if (isSpeakingExplanation) {
                    speechEngine.stop();
                    setIsSpeakingExplanation(false);
                  } else {
                    setIsSpeakingExplanation(true);
                    speechEngine.speak(question.explanation, {
                      lang: unitId?.startsWith('eng-') ? 'en-US' : 'zh-TW',
                      onEnd: () => setIsSpeakingExplanation(false),
                      onError: () => setIsSpeakingExplanation(false)
                    });
                  }
                }}
                className="btn-outline flex items-center gap-1.5 text-xs py-1 px-3 rounded-full font-bold cursor-pointer"
                style={{
                  backgroundColor: isSpeakingExplanation ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  color: isSpeakingExplanation ? '#ffffff' : 'var(--accent-primary)',
                  borderColor: 'var(--accent-primary)'
                }}
                title="語音伴讀：用聽的吸收名師解題說明"
              >
                <Volume2 size={13} className={isSpeakingExplanation ? 'animate-pulse' : ''} />
                <span>{isSpeakingExplanation ? '⏹️ 停止朗讀' : '🔊 語音朗讀解析'}</span>
              </button>
            </div>

            {/* 2. 標準答案與學童選擇對照看板 */}
            <div 
              className="p-3 rounded-xl flex flex-col gap-1.5 text-xs sm:text-sm"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-light)'
              }}
            >
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={16} /> 正確解答：
                </span>
                <span className="font-black px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                  {['A', 'B', 'C', 'D'][question.answerIndex]} {['①', '②', '③', '④'][question.answerIndex]}
                </span>
                <span className="font-semibold text-primary">{question.options[question.answerIndex]}</span>
              </div>

              {selectedOption !== question.answerIndex && (
                <div className="flex items-center gap-2 pt-1 border-t border-light">
                  <span className="font-bold text-rose-500 flex items-center gap-1">
                    <XCircle size={16} /> 你的選擇：
                  </span>
                  <span className="font-black px-2 py-0.5 rounded bg-rose-500/15 text-rose-700 dark:text-rose-300">
                    {['A', 'B', 'C', 'D'][selectedOption]} {['①', '②', '③', '④'][selectedOption]}
                  </span>
                  <span className="text-secondary line-through">{question.options[selectedOption]}</span>
                </div>
              )}
            </div>

            {/* 3. 結構化多維度解析模組 (觀念 + 步驟 + 避坑口訣) */}
            <div className="flex flex-col gap-2.5">
              {parseExplanationSections(question.explanation).map((sec, idx) => {
                let borderCol = 'rgba(59, 130, 246, 0.35)';
                let tagCol = 'text-blue-600 dark:text-blue-400';
                let bgCol = 'rgba(59, 130, 246, 0.05)';
                if (sec.theme === 'indigo') {
                  borderCol = 'rgba(99, 102, 241, 0.35)';
                  tagCol = 'text-indigo-600 dark:text-indigo-400';
                  bgCol = 'rgba(99, 102, 241, 0.05)';
                } else if (sec.theme === 'purple') {
                  borderCol = 'rgba(168, 85, 247, 0.35)';
                  tagCol = 'text-purple-600 dark:text-purple-400';
                  bgCol = 'rgba(168, 85, 247, 0.05)';
                } else if (sec.theme === 'emerald') {
                  borderCol = 'rgba(16, 185, 129, 0.35)';
                  tagCol = 'text-emerald-600 dark:text-emerald-400';
                  bgCol = 'rgba(16, 185, 129, 0.05)';
                } else if (sec.theme === 'rose') {
                  borderCol = 'rgba(244, 63, 94, 0.35)';
                  tagCol = 'text-rose-600 dark:text-rose-400';
                  bgCol = 'rgba(244, 63, 94, 0.05)';
                } else if (sec.theme === 'amber') {
                  borderCol = 'rgba(245, 158, 11, 0.35)';
                  tagCol = 'text-amber-600 dark:text-amber-400';
                  bgCol = 'rgba(245, 158, 11, 0.05)';
                }

                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl flex flex-col gap-1 text-xs sm:text-sm"
                    style={{
                      backgroundColor: bgCol,
                      border: `1.5px solid ${borderCol}`
                    }}
                  >
                    <div className={`font-black flex items-center gap-1.5 ${tagCol}`}>
                      <span>{sec.icon}</span>
                      <span>{sec.label}</span>
                    </div>
                    <p className="text-secondary m-0 leading-relaxed font-normal" style={{ color: 'var(--text-primary)' }}>
                      {sec.content}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* 4. 小六生避坑防雷診斷叮嚀 */}
            <div 
              className="p-3 rounded-xl text-xs flex items-start gap-2"
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                border: '1px solid rgba(245, 158, 11, 0.25)'
              }}
            >
              <Lightbulb size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-amber-700 dark:text-amber-300 font-bold">💡 小六解題防雷備忘錄：</strong>
                <span className="text-secondary ml-1">
                  {selectedOption === question.answerIndex
                    ? '做四選一測驗時，維持「審題圈出關鍵字 ➔ 心算檢視單位 ➔ 排除干擾項」的好習慣，段考必得高分！'
                    : '小六許多錯誤都是「看漏條件」或「公式記混」。把這題的步驟記在腦海中，點擊下方「返回圖解課文」再複習一次，觀念更穩固！'}
                </span>
              </div>
            </div>
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

      {/* Quick Cheat Sheet Modal during Quiz */}
      <LessonCheatSheetModal
        isOpen={showCheatSheet}
        onClose={() => setShowCheatSheet(false)}
        unit={currentUnit}
        subjectName={currentSubjectName}
      />

      {/* Instant Scratchpad Calculation Canvas Modal */}
      <LessonScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        unitId={unitId}
        unitTitle={currentUnit?.title || ''}
      />

      {/* Duolingo Interactive Multi-Modal Lesson */}
      <DuolingoLessonModal
        isOpen={isDuolingoOpen}
        onClose={() => setIsDuolingoOpen(false)}
        unit={{ ...currentUnit, catalog: getUnitCompleteCatalog(currentUnit) }}
        subject={{ name: currentSubjectName, emoji: '🦉' }}
      />

      {/* Textbook & Reference Book Compendium Modal */}
      <TextbookReferenceCompendiumModal
        isOpen={isCompendiumOpen}
        onClose={() => setIsCompendiumOpen(false)}
        unit={{ ...currentUnit, catalog: getUnitCompleteCatalog(currentUnit) }}
        subject={{ name: currentSubjectName, emoji: '📚' }}
        onStartDuolingoLesson={() => setIsDuolingoOpen(true)}
      />
    </div>
  );
};

export default QuizPage;
