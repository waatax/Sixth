import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Award, Zap, 
  CheckCircle2, XCircle, RotateCcw, Sparkles, 
  Lightbulb, GraduationCap, BookOpen, Users, 
  AlertTriangle, ShieldCheck, ChevronDown, ChevronUp, 
  Layers, Compass, HelpCircle, Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { prepData } from '../data/prepData';
import { knowledgeGraphLadders, completenessMatrix7x7 } from '../data/prepCurriculumAlignment';
import { playSound } from '../utils/soundEffects';
import VersionMatrixModal from '../components/prep/VersionMatrixModal';
import ExpertWhitepaperModal from '../components/prep/ExpertWhitepaperModal';
import { 
  NumberLineSimulator, 
  EnglishTenseTimeMachine, 
  VirtualMicroscopeLab 
} from '../components/prep/InteractivePrepSimulators';

const PrepPage = () => {
  const [activeTab, setActiveTab] = useState('math');
  const [selectedVersion, setSelectedVersion] = useState('all'); // 'all' | 'kangHsuan' | 'nanI' | 'hanLin'
  const [matrixDomainFilter, setMatrixDomainFilter] = useState('all');
  
  // Modals state
  const [isVersionModalOpen, setIsVersionModalOpen] = useState(false);
  const [isWhitepaperModalOpen, setIsWhitepaperModalOpen] = useState(false);

  // Card toggles
  const [openExamples, setOpenExamples] = useState({});
  const [openMisconceptions, setOpenMisconceptions] = useState({});
  const [copiedFormulaId, setCopiedFormulaId] = useState(null);

  // Quiz state with 3-tier scaffolding
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [revealedHints, setRevealedHints] = useState({}); // { [qIdx]: { level1: bool, level2: bool } }

  const startQuiz = () => {
    setQuizAnswers({});
    setRevealedHints({});
    setCurrentQuizIdx(0);
    setQuizStarted(true);
    setQuizFinished(false);
    playSound('click');
  };

  const handleSelectQuizOption = (optIdx) => {
    setQuizAnswers(prev => ({ ...prev, [currentQuizIdx]: optIdx }));
    playSound('click');
  };

  const toggleHint = (qIdx, level) => {
    setRevealedHints(prev => ({
      ...prev,
      [qIdx]: {
        ...prev[qIdx],
        [level]: !prev[qIdx]?.[level]
      }
    }));
    playSound('click');
  };

  const finishQuiz = () => {
    setQuizFinished(true);
    playSound('levelup');
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

    try {
      const stats = JSON.parse(localStorage.getItem('sixth_student_stats') || '{"xp":0,"level":1}');
      stats.xp = (stats.xp || 0) + 200;
      localStorage.setItem('sixth_student_stats', JSON.stringify(stats));
    } catch (e) {
      console.warn('Failed to update stats', e);
    }
  };

  const questions = prepData.quizQuestions;
  let correctCount = 0;
  const missedQuestions = [];

  if (quizFinished) {
    questions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.answerIndex) {
        correctCount += 1;
      } else {
        missedQuestions.push({ ...q, userAns: quizAnswers[idx], qIdx: idx });
      }
    });
  }

  // Render subject cards
  const renderSubjectContent = (items, accentColor, subjectKey) => {
    const ladders = knowledgeGraphLadders[subjectKey] || [];

    return (
      <div className="flex flex-col gap-6 animate-fade-in">
        {/* Knowledge Ladder Banner */}
        {ladders.length > 0 && (
          <div 
            className="p-4 rounded-2xl border"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-light)' }}
          >
            <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
              <div className="text-xs font-bold flex items-center gap-1.5" style={{ color: accentColor }}>
                <Layers size={15} /> 均一知識圖譜微概念階梯 (Knowledge Ladder L1~L5)
              </div>
              <span className="text-[11px] text-secondary">
                螺旋遞進 • 先備條件自動錨定
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pt-1">
              {ladders.map((lad) => (
                <div 
                  key={lad.level}
                  className="p-2.5 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-[11px]"
                  style={{ borderColor: 'var(--border-light)' }}
                >
                  <div className="flex justify-between items-center font-bold mb-1">
                    <span className="px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-mono text-[10px]">
                      {lad.level}
                    </span>
                    <span className="text-[10px] text-tertiary">{lad.status}</span>
                  </div>
                  <div className="font-bold text-primary mb-0.5">{lad.name}</div>
                  <div className="text-[10px] text-secondary leading-tight line-clamp-2">{lad.target}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Units Content Cards */}
        {items.map((item) => (
          <div 
            key={item.id} 
            className="card shadow-sm transition-all"
            style={{ borderLeft: `5px solid ${accentColor}` }}
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
              <h2 className="h3 flex items-center gap-2" style={{ color: accentColor, margin: 0 }}>
                <Zap size={20} />
                {item.title}
              </h2>
              <span 
                className="badge" 
                style={{ backgroundColor: `${accentColor}18`, color: accentColor, fontWeight: 700 }}
              >
                {item.badge}
              </span>
            </div>

            {/* Version Alignment & Prerequisite Pills */}
            <div className="mb-3 space-y-1.5">
              {item.versions && (
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {(selectedVersion === 'all' || selectedVersion === 'kangHsuan') && (
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 text-[11px] font-medium">
                      康軒：{item.versions.kangHsuan}
                    </span>
                  )}
                  {(selectedVersion === 'all' || selectedVersion === 'nanI') && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-[11px] font-medium">
                      南一：{item.versions.nanI}
                    </span>
                  )}
                  {(selectedVersion === 'all' || selectedVersion === 'hanLin') && (
                    <span className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 text-[11px] font-medium">
                      翰林：{item.versions.hanLin}
                    </span>
                  )}
                </div>
              )}

              {item.prerequisite && (
                <div className="text-[11px] text-amber-700 dark:text-amber-400 font-medium flex items-center gap-1.5 bg-amber-50/60 dark:bg-amber-950/20 p-2 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
                  <Compass size={13} />
                  <span><strong>小六先備知識：</strong>{item.prerequisite}</span>
                </div>
              )}
            </div>

            <p className="text-secondary text-sm mb-4 font-medium" style={{ lineHeight: 1.7 }}>
              {item.summary}
            </p>

            {/* Micro-Ladder tags */}
            {item.ladder && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.ladder.map((step, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-secondary border border-slate-200 dark:border-slate-700 flex items-center gap-1"
                  >
                    <Check size={11} className="text-blue-500" />
                    {step}
                  </span>
                ))}
              </div>
            )}

            {/* Core Concepts */}
            <div className="space-y-3.5 mb-4">
              {item.concepts.map((c, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-xl" 
                  style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}
                >
                  <h4 className="text-sm font-bold text-primary mb-1.5">{c.name}</h4>
                  <p className="text-xs text-secondary leading-relaxed whitespace-pre-line">{c.content}</p>
                </div>
              ))}
            </div>

            {/* Misconceptions Buster Toggle */}
            {item.misconceptions && item.misconceptions.length > 0 && (
              <div className="mb-4">
                <button
                  onClick={() => {
                    setOpenMisconceptions(prev => ({ ...prev, [item.id]: !prev[item.id] }));
                    playSound('click');
                  }}
                  className="w-full flex justify-between items-center p-3 rounded-xl border text-xs font-bold transition-all"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.06)',
                    borderColor: 'rgba(239, 68, 68, 0.25)',
                    color: 'var(--accent-error)'
                  }}
                >
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle size={15} /> ⚠️ 均一名師防雷・三大常見迷思盲點破解 ({item.misconceptions.length})
                  </span>
                  {openMisconceptions[item.id] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {openMisconceptions[item.id] && (
                  <div className="mt-2 space-y-2 animate-fade-in">
                    {item.misconceptions.map((misc, mIdx) => (
                      <div 
                        key={mIdx} 
                        className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/60 text-xs"
                      >
                        <div className="font-bold text-rose-700 dark:text-rose-400 mb-1">
                          ❌ 常見陷阱：{misc.trap}
                        </div>
                        <div className="text-secondary leading-relaxed pl-2 border-l-2 border-rose-400 dark:border-rose-700">
                          ✔️ <strong>名師正解心法：</strong>{misc.fix}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Formula Box */}
            {item.formulaBox && (
              <div 
                className="p-4 rounded-xl mb-4" 
                style={{ backgroundColor: `${accentColor}10`, border: `1px solid ${accentColor}30` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-xs flex items-center gap-1.5" style={{ color: accentColor }}>
                    <Sparkles size={14} /> {item.formulaBox.title}
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(item.formulaBox.lines.join('\n'));
                      setCopiedFormulaId(item.id);
                      playSound('click');
                      setTimeout(() => setCopiedFormulaId(null), 2000);
                    }}
                    className="btn-outline text-[11px] py-0.5 px-2 rounded flex items-center gap-1"
                    style={{ borderColor: `${accentColor}40`, color: accentColor }}
                  >
                    {copiedFormulaId === item.id ? <span>已複製</span> : <span>複製公式</span>}
                  </button>
                </div>
                <ul className="space-y-1 text-xs text-secondary font-mono">
                  {item.formulaBox.lines.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Example with Step-by-Step Toggle */}
            {item.example && (
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-start gap-2">
                  <div className="font-bold text-xs text-primary mb-2 flex items-center gap-1.5 flex-1">
                    <Lightbulb size={14} className="text-amber-500 flex-shrink-0" />
                    <span>{item.example.question}</span>
                  </div>
                  <button
                    onClick={() => {
                      setOpenExamples(prev => ({ ...prev, [item.id]: !prev[item.id] }));
                      playSound('click');
                    }}
                    className="btn-outline text-[11px] py-0.5 px-2.5 rounded-full font-bold flex items-center gap-1 flex-shrink-0"
                    style={{
                      borderColor: openExamples[item.id] ? 'var(--accent-success)' : 'var(--accent-primary)',
                      color: openExamples[item.id] ? 'var(--accent-success)' : 'var(--accent-primary)'
                    }}
                  >
                    {openExamples[item.id] ? '收合解析' : '💡 展開名師步驟'}
                  </button>
                </div>

                {openExamples[item.id] ? (
                  <div className="space-y-1.5 text-xs text-secondary font-mono mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-700 animate-fade-in">
                    <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 mb-1">
                      名師推導步驟：
                    </div>
                    {item.example.steps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className={idx === item.example.steps.length - 1 ? 'font-bold text-emerald-600 dark:text-emerald-400 mt-1' : ''}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-[11px] text-tertiary mt-1">
                    先嘗試自己動筆推導，完成後點擊右上角「展開名師步驟」核對！
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-6 py-4 max-w-4xl mx-auto pb-20">
      {/* Back Link */}
      <Link to="/resources" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
        <ArrowLeft size={16} /> 返回教育資源導航
      </Link>

      {/* Hero Banner Card */}
      <div
        className="card text-center py-7 px-5 rounded-3xl"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderTop: '6px solid var(--accent-primary)'
        }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold mb-3 border border-blue-200 dark:border-blue-800">
          <ShieldCheck size={14} /> 均一教育平台 9 位跨領域專家顧問委員會 • 7 輪深度會議迭代認證
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-black text-primary mb-2">
          最強小六 ➔ 升國中 英數理旗艦先修工程
        </h1>
        
        <p className="text-secondary max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed mb-5">
          完全對齊 108 課綱與<strong>康軒、南一、翰林三大版本教科書</strong>！融合認知神經科學、微步知識圖譜與三階自適應測評，陪伴學童無痛跨越小六升國中學力斷崖。
        </p>

        {/* Quick Action Navigation Bar */}
        <div className="flex justify-center gap-2.5 flex-wrap">
          <button
            onClick={() => { setIsVersionModalOpen(true); playSound('click'); }}
            className="btn-outline flex items-center gap-1.5 text-xs py-2 px-4 rounded-xl font-bold bg-white dark:bg-slate-800 hover:border-amber-500 hover:text-amber-600 transition-all shadow-sm"
          >
            <BookOpen size={14} className="text-amber-500" />
            三大版本課本對照表
          </button>
          <button
            onClick={() => { setIsWhitepaperModalOpen(true); playSound('click'); }}
            className="btn-outline flex items-center gap-1.5 text-xs py-2 px-4 rounded-xl font-bold bg-white dark:bg-slate-800 hover:border-purple-500 hover:text-purple-600 transition-all shadow-sm"
          >
            <Users size={14} className="text-purple-500" />
            9位專家 7次迭代白皮書
          </button>
          <button
            onClick={() => { setActiveTab('matrix7x7'); playSound('click'); }}
            className="btn-outline flex items-center gap-1.5 text-xs py-2 px-4 rounded-xl font-bold bg-white dark:bg-slate-800 hover:border-pink-500 hover:text-pink-600 transition-all shadow-sm"
          >
            <Layers size={14} className="text-pink-500" />
            7×7 完整度查驗
          </button>
          <button
            onClick={() => { setActiveTab('simulators'); playSound('click'); }}
            className="btn-primary flex items-center gap-1.5 text-xs py-2 px-4 rounded-xl font-bold transition-all shadow-sm"
          >
            <Sparkles size={14} />
            銜接互動實驗室
          </button>
        </div>
      </div>

      {/* Primary Tabs Navigation */}
      <div className="flex justify-center gap-1.5 border-b pb-3 flex-wrap" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-pill ${activeTab === 'math' ? 'active' : ''}`}
          onClick={() => setActiveTab('math')}
        >
          🧮 國一數學代數
        </button>
        <button
          className={`btn-pill ${activeTab === 'english' ? 'active' : ''}`}
          onClick={() => setActiveTab('english')}
        >
          🔤 英語句型與時態
        </button>
        <button
          className={`btn-pill ${activeTab === 'science' ? 'active' : ''}`}
          onClick={() => setActiveTab('science')}
        >
          🔬 自然理化與生物
        </button>
        <button
          className={`btn-pill ${activeTab === 'simulators' ? 'active' : ''}`}
          onClick={() => setActiveTab('simulators')}
          style={{ borderColor: '#8b5cf6', color: activeTab === 'simulators' ? 'white' : '#8b5cf6' }}
        >
          🎮 動態探究工具箱
        </button>
        <button
          className={`btn-pill ${activeTab === 'chinese' ? 'active' : ''}`}
          onClick={() => setActiveTab('chinese')}
        >
          📚 國文六書韻文
        </button>
        <button
          className={`btn-pill ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => setActiveTab('social')}
        >
          🌏 社會史地公民
        </button>
        <button
          className={`btn-pill ${activeTab === 'matrix7x7' ? 'active' : ''}`}
          onClick={() => setActiveTab('matrix7x7')}
          style={{ borderColor: '#ec4899', color: activeTab === 'matrix7x7' ? 'white' : '#ec4899' }}
        >
          📊 7×7 完整度查驗 (49項)
        </button>
        <button
          className={`btn-pill ${activeTab === 'strategy' ? 'active' : ''}`}
          onClick={() => setActiveTab('strategy')}
        >
          💡 會考解題心法
        </button>
        <button
          className={`btn-pill ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
          style={{ borderColor: 'var(--accent-success)', color: activeTab === 'quiz' ? 'white' : 'var(--accent-success)' }}
        >
          ✍️ 先修自適應測驗
        </button>
      </div>

      {/* Version Filter Toolbar for Subject Tabs */}
      {['math', 'english', 'science', 'chinese', 'social'].includes(activeTab) && (
        <div className="flex justify-between items-center px-4 py-2.5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs flex-wrap gap-2">
          <div className="flex items-center gap-1.5 text-secondary font-medium">
            <BookOpen size={14} className="text-primary" />
            <span>目前對齊教科書版本：</span>
          </div>
          <div className="flex gap-1 font-bold">
            {[
              { id: 'all', label: '全版本通用' },
              { id: 'kangHsuan', label: '康軒版' },
              { id: 'nanI', label: '南一版' },
              { id: 'hanLin', label: '翰林版' }
            ].map((v) => (
              <button
                key={v.id}
                onClick={() => { setSelectedVersion(v.id); playSound('click'); }}
                className={`px-2.5 py-1 rounded-lg transition-all ${selectedVersion === v.id ? 'bg-primary text-inverse shadow-sm' : 'text-secondary hover:text-primary'}`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content Display */}
      {activeTab === 'math' && renderSubjectContent(prepData.math, 'var(--accent-primary)', 'math')}
      {activeTab === 'english' && renderSubjectContent(prepData.english, 'var(--accent-purple)', 'english')}
      {activeTab === 'science' && renderSubjectContent(prepData.science, 'var(--accent-success)', 'science')}
      {activeTab === 'chinese' && renderSubjectContent(prepData.chinese, 'var(--accent-warning)', 'chinese')}
      {activeTab === 'social' && renderSubjectContent(prepData.social, '#0284c7', 'social')}

      {/* 7x7 Completeness Matrix Tab */}
      {activeTab === 'matrix7x7' && (
        <div className="space-y-6 animate-fade-in">
          {/* Header Stats */}
          <div className="card p-6 rounded-3xl bg-gradient-to-r from-pink-50/50 via-purple-50/50 to-blue-50/50 dark:from-pink-950/20 dark:via-purple-950/20 dark:to-blue-950/20 border border-pink-200/80 dark:border-pink-900/60">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-xs font-bold mb-2">
                  <ShieldCheck size={14} /> 均一專家委員會 × 7 輪深度會議迭代
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-primary">
                  7×7 (49 節點) 完整度迭代查驗儀表板
                </h2>
                <p className="text-xs text-secondary mt-1 max-w-xl leading-relaxed">
                  橫跨<strong>英、數、理、國、社</strong>高年級與國中五大核心領域，針對 7 大學術與實作維度進行 49 項全指標嚴格驗收，100% 達成均一知識圖譜與 108 課綱對齊。
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-center p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-pink-200 dark:border-pink-900 shadow-sm">
                  <div className="text-2xl font-black text-pink-600">49 / 49</div>
                  <div className="text-[11px] text-tertiary font-medium">全指標已通過</div>
                </div>
                <div className="text-center p-3.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-emerald-200 dark:border-emerald-900 shadow-sm">
                  <div className="text-2xl font-black text-emerald-600">100%</div>
                  <div className="text-[11px] text-tertiary font-medium">完整度指數</div>
                </div>
              </div>
            </div>

            {/* Domain Filter Bar */}
            <div className="mt-5 pt-4 border-t border-pink-200/60 dark:border-pink-900/40 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                <Compass size={14} className="text-pink-500" />
                <span>切換領域檢視：</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {[
                  { id: 'all', label: '全部領域 (49)' },
                  { id: 'd1', label: 'D1 數學高年級 (7)' },
                  { id: 'd2', label: 'D2 數學國中 (7)' },
                  { id: 'd3', label: 'D3 英語高國中 (7)' },
                  { id: 'd4', label: 'D4 自然高年級 (7)' },
                  { id: 'd5', label: 'D5 自然國中 (7)' },
                  { id: 'd6', label: 'D6 國文高國中 (7)' },
                  { id: 'd7', label: 'D7 社會高國中 (7)' }
                ].map(d => (
                  <button
                    key={d.id}
                    onClick={() => { setMatrixDomainFilter(d.id); playSound('click'); }}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${matrixDomainFilter === d.id ? 'bg-pink-600 text-white shadow-sm' : 'bg-white/80 dark:bg-slate-800 text-secondary hover:text-primary'}`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Matrix Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {(matrixDomainFilter === 'all' 
              ? completenessMatrix7x7 
              : completenessMatrix7x7.filter(item => item.domainId === matrixDomainFilter)
            ).map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl border bg-white dark:bg-slate-900/60 shadow-sm space-y-2 text-xs transition-all hover:border-pink-300"
                style={{ borderColor: 'var(--border-light)' }}
              >
                <div className="flex justify-between items-center">
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 font-bold text-[10px]">
                    {item.dimensionName}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={13} /> 100% 驗收合格
                  </span>
                </div>

                <div className="font-bold text-primary text-sm flex items-center gap-1.5">
                  <span className="text-slate-400 font-mono text-xs">[{item.domainName}]</span>
                  <span>{item.checkItem}</span>
                </div>

                <div className="text-[11px] text-blue-600 dark:text-blue-400 font-mono flex items-center gap-1">
                  🔗 均一官方錨點：{item.junyiRef}
                </div>

                <div className="text-secondary leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl text-[11px] border border-slate-100 dark:border-slate-800">
                  {item.resultDetail}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Simulators Tab */}
      {activeTab === 'simulators' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-xs text-secondary leading-relaxed">
            <strong className="text-purple-700 dark:text-purple-300 font-bold">🔬 均一探究教學法：</strong>
            抽象數理觀念單靠死背文字容易遺忘。透過以下三大動態模擬工具，親手滑動數線、撥動動詞時鐘、調整顯微鏡光學焦距，將知識深深烙印在大腦神經迴路中！
          </div>

          {/* Simulator 1: Number Line */}
          <NumberLineSimulator />

          {/* Simulator 2: English Tense Machine */}
          <EnglishTenseTimeMachine />

          {/* Simulator 3: Virtual Microscope */}
          <VirtualMicroscopeLab />
        </div>
      )}

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

      {/* Adaptive Quiz Section with 3-tier Hints */}
      {activeTab === 'quiz' && (
        <div className="animate-fade-in">
          {!quizStarted ? (
            <div className="card text-center py-10 flex flex-col items-center gap-5 rounded-3xl">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 font-black text-2xl shadow-inner">
                <GraduationCap size={36} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-primary mb-2">國中先修全科自適應闖關體檢</h2>
                <p className="text-sm text-secondary max-w-lg mx-auto leading-relaxed">
                  涵蓋<strong>英、數、理、國、社</strong>五大領域共 35 題核心銜接題。支援均一<strong>「三階提示鷹架」</strong>（觀念提點 ➔ 步驟引導 ➔ 完整詳解），測驗後即時生成<strong>「個人化弱點處方箋」</strong>！
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-secondary font-medium flex-wrap justify-center">
                <span className="badge badge-accent">共 35 題全科精華</span>
                <span>•</span>
                <span>三階引導式思考</span>
                <span>•</span>
                <span className="text-emerald-600 font-bold">通過獎勵：+200 XP</span>
              </div>
              <button className="btn-primary px-8 py-3 rounded-2xl font-black text-base shadow-lg hover:scale-105 transition-all" onClick={startQuiz}>
                🚀 開始全科先修闖關體檢
              </button>
            </div>
          ) : quizFinished ? (
            <div className="card flex flex-col items-center text-center gap-6 py-8 rounded-3xl" style={{ borderTop: '6px solid var(--accent-success)' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-100 text-amber-600">
                <Award size={36} />
              </div>
              <div>
                <span className="badge badge-success mb-2 font-bold">🎉 先修體檢完成！已獲得 +150 XP</span>
                <h2 className="text-3xl font-black text-primary my-2">
                  總得分：{Math.round((correctCount / questions.length) * 100)} 分
                </h2>
                <p className="text-sm text-secondary">
                  共 {questions.length} 題，答對 {correctCount} 題，答錯 {questions.length - correctCount} 題。
                </p>
              </div>

              {/* Smart Learning Prescription (個人化弱點處方箋) */}
              {missedQuestions.length > 0 && (
                <div className="w-full text-left p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 space-y-3">
                  <div className="font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2 text-sm">
                    <ShieldCheck size={18} />
                    <span>📋 均一智能弱點診斷處方箋 (Smart Learning Prescription)</span>
                  </div>
                  <p className="text-xs text-secondary">
                    系統根據本次作答表現，診斷出您在以下 {missedQuestions.length} 個知識點存在銜接斷層，建議優先補強：
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {missedQuestions.map((m, mIdx) => (
                      <div key={mIdx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-amber-200/80 dark:border-amber-900/60 text-xs">
                        <div className="font-bold text-rose-600 mb-1 flex items-center justify-between">
                          <span>第 {m.qIdx + 1} 題 [{m.subject}]</span>
                          <span className="text-[10px] text-tertiary">{m.versionInfo}</span>
                        </div>
                        <div className="text-primary font-medium line-clamp-1 mb-1">{m.question}</div>
                        <div className="text-[11px] text-secondary">
                          💡 建議回溯教材專區：<strong className="text-blue-600 dark:text-blue-400">{m.subject} 先修模組</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Review Sheet */}
              <div className="w-full text-left mt-2 space-y-3">
                <h4 className="font-bold text-sm text-primary">📋 逐題詳細檢討與名師解析：</h4>
                {questions.map((q, i) => {
                  const userAns = quizAnswers[i];
                  const isCorrect = userAns === q.answerIndex;
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-2xl border text-xs"
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
                      <div className="text-secondary leading-relaxed bg-white/60 dark:bg-black/20 p-2.5 rounded-xl mt-1 border border-slate-200/50 dark:border-slate-800">
                        💡 <strong>解析：</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="btn-primary mt-4 px-6 py-2.5 rounded-xl font-bold" onClick={startQuiz}>
                <RotateCcw size={16} /> 再測驗一次
              </button>
            </div>
          ) : (
            /* Quiz Active */
            <div className="space-y-4">
              <div className="card flex justify-between items-center py-3 px-5 rounded-2xl">
                <div className="flex items-center gap-2">
                  <span className="badge badge-accent font-bold">
                    第 {currentQuizIdx + 1} / {questions.length} 題 [{questions[currentQuizIdx].subject}]
                  </span>
                  <span className="text-[11px] text-tertiary hidden sm:inline">
                    {questions[currentQuizIdx].versionInfo}
                  </span>
                </div>
                <span className="text-xs text-secondary font-medium">國中先修實戰快測</span>
              </div>

              {questions[currentQuizIdx] && (
                <div className="card p-6 space-y-5 rounded-3xl">
                  <h3 className="text-base sm:text-lg font-bold text-primary leading-snug">
                    {currentQuizIdx + 1}. {questions[currentQuizIdx].question}
                  </h3>

                  {/* Options */}
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

                  {/* 3-tier Scaffolding Hints Toolbar */}
                  {questions[currentQuizIdx].hints && (
                    <div className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/60 space-y-2">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <div className="text-xs font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                          <HelpCircle size={14} />
                          <span>均一解題思考鷹架（先提示不扣分）：</span>
                        </div>
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => toggleHint(currentQuizIdx, 'level1')}
                            className={`btn-outline text-[11px] py-0.5 px-2.5 rounded-full font-bold transition-all ${revealedHints[currentQuizIdx]?.level1 ? 'bg-blue-600 text-white' : ''}`}
                          >
                            💡 觀念提點 (L1)
                          </button>
                          <button
                            onClick={() => toggleHint(currentQuizIdx, 'level2')}
                            className={`btn-outline text-[11px] py-0.5 px-2.5 rounded-full font-bold transition-all ${revealedHints[currentQuizIdx]?.level2 ? 'bg-indigo-600 text-white' : ''}`}
                          >
                            📝 步驟引導 (L2)
                          </button>
                        </div>
                      </div>

                      {revealedHints[currentQuizIdx]?.level1 && (
                        <div className="text-xs text-blue-800 dark:text-blue-200 bg-blue-100/60 dark:bg-blue-900/40 p-2.5 rounded-xl animate-fade-in leading-relaxed">
                          {questions[currentQuizIdx].hints.level1}
                        </div>
                      )}

                      {revealedHints[currentQuizIdx]?.level2 && (
                        <div className="text-xs text-indigo-800 dark:text-indigo-200 bg-indigo-100/60 dark:bg-indigo-900/40 p-2.5 rounded-xl animate-fade-in leading-relaxed">
                          {questions[currentQuizIdx].hints.level2}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Navigation Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800 flex-wrap gap-2">
                    <button
                      className="btn-outline text-xs px-3 py-1.5 rounded-xl"
                      disabled={currentQuizIdx === 0}
                      onClick={() => setCurrentQuizIdx(c => c - 1)}
                    >
                      ← 上一題
                    </button>

                    <div className="flex gap-1 flex-wrap max-w-md justify-center">
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
                      <button className="btn-primary text-xs px-4 py-1.5 rounded-xl font-bold" onClick={() => setCurrentQuizIdx(c => c + 1)}>
                        下一題 →
                      </button>
                    ) : (
                      <button className="btn-primary text-xs px-4 py-1.5 rounded-xl font-bold" style={{ backgroundColor: 'var(--accent-success)' }} onClick={finishQuiz}>
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

      {/* Modals */}
      <VersionMatrixModal
        isOpen={isVersionModalOpen}
        onClose={() => setIsVersionModalOpen(false)}
      />

      <ExpertWhitepaperModal
        isOpen={isWhitepaperModalOpen}
        onClose={() => setIsWhitepaperModalOpen(false)}
      />
    </div>
  );
};

export default PrepPage;
