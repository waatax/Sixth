import { useState, useMemo } from 'react';
import { coursesData } from '../data/courses';
import { quizData } from '../data/quizData';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Printer, 
  Eye, 
  Zap, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  Sparkles, 
  Search, 
  Filter, 
  ChevronRight, 
  RotateCcw,
  Check,
  X
} from 'lucide-react';
import { playSound } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';
import confetti from 'canvas-confetti';

const QuestionBankPage = () => {
  const [activeTab, setActiveTab] = useState('math');
  const [termFilter, setTermFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mainMode, setMainMode] = useState('papers'); // 'papers' | 'drilling'
  const [previewPaper, setPreviewPaper] = useState(null);

  // Online Drilling State
  const [drillSubject, setDrillSubject] = useState('math');
  const [drillIdx, setDrillIdx] = useState(0);
  const [drillSelected, setDrillSelected] = useState(null);
  const [drillShowExplanation, setDrillShowExplanation] = useState(false);
  const [drillScore, setDrillScore] = useState(0);
  const [drillCombo, setDrillCombo] = useState(0);
  const [drillCompleted, setDrillCompleted] = useState(false);

  // Filtered Question Banks
  const filteredBanks = useMemo(() => {
    return coursesData.questionBanks.filter(qb => {
      const matchSubject = activeTab === 'all' || qb.subject === activeTab;
      const matchTerm = termFilter === 'all' || (qb.term && qb.term.includes(termFilter));
      const matchSearch = !searchQuery || 
        qb.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        qb.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (qb.topics && qb.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchSubject && matchTerm && matchSearch;
    });
  }, [activeTab, termFilter, searchQuery]);

  // Questions for Online Drilling
  const drillQuestions = useMemo(() => {
    const list = [];
    if (coursesData.units[drillSubject]) {
      coursesData.units[drillSubject].forEach(unit => {
        const uQuestions = quizData[unit.id] || [];
        uQuestions.forEach(q => list.push({ ...q, unitId: unit.id, unitTitle: unit.title }));
      });
    }
    return list;
  }, [drillSubject]);

  const handleStartDrilling = (subId) => {
    setDrillSubject(subId);
    setDrillIdx(0);
    setDrillSelected(null);
    setDrillShowExplanation(false);
    setDrillScore(0);
    setDrillCombo(0);
    setDrillCompleted(false);
    setMainMode('drilling');
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSelectDrillOption = (optIdx) => {
    if (drillShowExplanation) return;
    setDrillSelected(optIdx);
    const currentQ = drillQuestions[drillIdx];
    const isCorrect = optIdx === currentQ.answerIndex;
    
    if (isCorrect) {
      const nextCombo = drillCombo + 1;
      setDrillCombo(nextCombo);
      setDrillScore(s => s + 1);
      if (nextCombo >= 3) playSound('combo', nextCombo);
      else playSound('correct');
    } else {
      setDrillCombo(0);
      playSound('wrong');
      // Record mistake
      try {
        const existingMistakes = JSON.parse(localStorage.getItem('sixth_student_mistakes') || '[]');
        const exists = existingMistakes.some(m => m.question === currentQ.question);
        if (!exists) {
          existingMistakes.push({
            ...currentQ,
            userWrongAnswer: currentQ.options[optIdx],
            date: new Date().toISOString().slice(0, 10)
          });
          localStorage.setItem('sixth_student_mistakes', JSON.stringify(existingMistakes));
        }
      } catch (e) {}
    }
    setDrillShowExplanation(true);
  };

  const handleNextDrill = () => {
    if (drillIdx < drillQuestions.length - 1) {
      setDrillIdx(idx => idx + 1);
      setDrillSelected(null);
      setDrillShowExplanation(false);
    } else {
      setDrillCompleted(true);
      playSound('levelup');
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col gap-6 py-4 max-w-5xl mx-auto pb-16">
      {/* Top Title Banner */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="badge badge-accent mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          📚 108 課綱全國中小學公開段考試題與考古題庫
        </span>
        <h1 className="h1 mb-2">全國模擬試題與考古題庫中心</h1>
        <p className="text-secondary text-sm" style={{ lineHeight: 1.8 }}>
          彙整全國中小學段考精選考卷、期中期末模擬試題與出版社題庫資源。提供<strong>線上互動刷題</strong>、<strong>全套試卷預覽列印</strong>與<strong>官方權威題庫直通車</strong>！
        </p>

        {/* Main Mode Toggle Buttons */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => setMainMode('papers')}
            className={`btn-pill ${mainMode === 'papers' ? 'active' : ''}`}
            style={{ padding: '10px 22px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <FileText size={18} />
            <span>📄 歷屆段考模擬試卷庫 ({coursesData.questionBanks.length} 套)</span>
          </button>
          <button
            onClick={() => setMainMode('drilling')}
            className={`btn-pill ${mainMode === 'drilling' ? 'active' : ''}`}
            style={{ padding: '10px 22px', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Zap size={18} />
            <span>⚡ 在線題庫實戰刷題 (192+ 題)</span>
          </button>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* MODE 1: EXAM PAPERS PREVIEW & PRINTABLE PAPERS */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {mainMode === 'papers' && (
        <>
          {/* Filters Bar */}
          <div className="card flex flex-col md:flex-row justify-between items-center gap-4" style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px 20px' }}>
            {/* Subject Tabs */}
            <div className="flex gap-1.5 flex-wrap">
              <button 
                className={`btn-pill ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
                style={{ padding: '6px 14px', fontSize: '0.82rem' }}
              >
                全科試卷
              </button>
              {coursesData.subjects.map(sub => (
                <button 
                  key={sub.id} 
                  className={`btn-pill ${activeTab === sub.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(sub.id)}
                  style={{ padding: '6px 14px', fontSize: '0.82rem' }}
                >
                  {sub.emoji} {sub.shortName}
                </button>
              ))}
            </div>

            {/* Search & Term Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-48">
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary" />
                <input
                  type="text"
                  placeholder="搜尋試卷關鍵字..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-field pl-9 pr-3 py-1.5 text-xs w-full"
                  style={{ borderRadius: 'var(--radius-md)' }}
                />
              </div>

              <select
                value={termFilter}
                onChange={(e) => setTermFilter(e.target.value)}
                className="input-field py-1.5 text-xs cursor-pointer"
                style={{ borderRadius: 'var(--radius-md)' }}
              >
                <option value="all">全部學期考科</option>
                <option value="第一次段考">第一次段考</option>
                <option value="第二次段考">第二次段考</option>
                <option value="期末考">期末考 / 畢業考</option>
              </select>
            </div>
          </div>

          {/* Exam Papers Grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {filteredBanks.length === 0 ? (
              <div className="card text-center py-12" style={{ gridColumn: '1 / -1' }}>
                <p className="text-secondary mb-2">沒有找到符合搜尋條件的試卷。</p>
                <button className="btn-outline text-xs mt-2" onClick={() => { setActiveTab('all'); setTermFilter('all'); setSearchQuery(''); }}>
                  清除篩選條件
                </button>
              </div>
            ) : (
              filteredBanks.map(bank => {
                const subObj = coursesData.subjects.find(s => s.id === bank.subject);
                return (
                  <div key={bank.id} className="card card-hoverable flex flex-col justify-between gap-3" style={{ borderTop: `3px solid ${subObj?.color || 'var(--accent-primary)'}` }}>
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="badge" style={{ backgroundColor: `${subObj?.color}15`, color: subObj?.color, fontWeight: 700, fontSize: '0.75rem' }}>
                          {subObj?.name || bank.subject}
                        </span>
                        <span className="badge badge-accent" style={{ fontSize: '0.72rem' }}>
                          {bank.term || '定期評量'}
                        </span>
                      </div>

                      <h3 style={{ fontWeight: 700, fontSize: '1.02rem', lineHeight: 1.45, color: 'var(--text-primary)', marginTop: '4px' }}>
                        {bank.title}
                      </h3>

                      <div className="text-xs text-secondary mt-2 flex items-center gap-2 flex-wrap">
                        <span>🏛️ {bank.source}</span>
                        <span>•</span>
                        <span>📑 {bank.version || '通用版'}</span>
                        <span>•</span>
                        <span style={{ color: 'var(--accent-success)', fontWeight: 600 }}>⭐ {bank.difficulty || '適中'}</span>
                      </div>

                      {/* Topics Tags */}
                      {bank.topics && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {bank.topics.map((t, idx) => (
                            <span key={idx} className="badge badge-secondary" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                              #{t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-2 pt-3 border-t border-light">
                      <button 
                        className="btn-primary flex-1 flex items-center justify-center gap-1 text-xs py-2"
                        onClick={() => setPreviewPaper(bank)}
                        title="開啟試卷預覽與列印視窗"
                      >
                        <Eye size={14} /> 預覽試卷與詳解
                      </button>

                      <button 
                        className="btn-outline flex items-center justify-center gap-1 text-xs py-2"
                        onClick={() => handleStartDrilling(bank.subject)}
                        title="立即在線練習本科目題庫"
                      >
                        <Zap size={14} style={{ color: '#d97706' }} /> 線上刷題
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* MODE 2: INTERACTIVE ONLINE QUESTION DRILLING */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {mainMode === 'drilling' && (
        <div className="card flex flex-col gap-6" style={{ backgroundColor: 'var(--bg-secondary)', padding: '28px' }}>
          {/* Drilling Top Header */}
          <div className="flex justify-between items-center flex-wrap gap-4 border-b pb-4" style={{ borderColor: 'var(--border-light)' }}>
            <div>
              <div className="flex items-center gap-2">
                <span className="badge badge-accent">⚡ 即時互動題庫刷題模式</span>
                {drillCombo >= 2 && (
                  <span className="badge badge-success animate-bounce">
                    🔥 連續答對 {drillCombo} 題！
                  </span>
                )}
              </div>
              <h2 className="h2 mt-1">
                {coursesData.subjects.find(s => s.id === drillSubject)?.name} 題庫實戰
              </h2>
            </div>

            {/* Subject Selector for Drilling */}
            <div className="flex items-center gap-2 flex-wrap">
              {coursesData.subjects.map(sub => (
                <button
                  key={sub.id}
                  className={`btn-pill ${drillSubject === sub.id ? 'active' : ''}`}
                  style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                  onClick={() => handleStartDrilling(sub.id)}
                >
                  {sub.emoji} {sub.shortName}
                </button>
              ))}
            </div>
          </div>

          {!drillCompleted && drillQuestions.length > 0 ? (
            <div>
              {/* Progress & Stats */}
              <div className="flex justify-between items-center text-xs text-secondary mb-2">
                <span>題目進度：第 <strong>{drillIdx + 1}</strong> / {drillQuestions.length} 題</span>
                <span>目前得分：<strong style={{ color: 'var(--accent-success)' }}>{drillScore}</strong> / {drillIdx + (drillShowExplanation ? 1 : 0)} 題</span>
              </div>

              {/* Progress Bar */}
              <div style={{ height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ height: '100%', width: `${((drillIdx + 1) / drillQuestions.length) * 100}%`, backgroundColor: 'var(--accent-primary)', transition: 'width 0.3s' }}></div>
              </div>

              {/* Question Box */}
              <div className="p-5 rounded-xl mb-4" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1.5px solid var(--border-light)' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="badge badge-accent text-xs">
                    📖 {drillQuestions[drillIdx].unitTitle || '單元考題'}
                  </span>
                  <button
                    onClick={() => speechEngine.speak(drillQuestions[drillIdx].question)}
                    className="flex items-center gap-1 text-xs text-secondary hover:text-primary transition-colors cursor-pointer"
                    title="朗讀題目"
                  >
                    <Volume2 size={15} /> 朗讀
                  </button>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.6, color: 'var(--text-primary)' }}>
                  {drillIdx + 1}. {drillQuestions[drillIdx].question}
                </h3>
              </div>

              {/* Options List */}
              <div className="flex flex-col gap-3">
                {drillQuestions[drillIdx].options.map((opt, oIdx) => {
                  const isSelected = drillSelected === oIdx;
                  const isCorrect = oIdx === drillQuestions[drillIdx].answerIndex;
                  let optStyle = {
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1.5px solid var(--border-strong)',
                    backgroundColor: 'var(--bg-tertiary)',
                    cursor: drillShowExplanation ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s',
                    fontSize: '1rem',
                    fontWeight: 500
                  };

                  if (drillShowExplanation) {
                    if (isCorrect) {
                      optStyle.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                      optStyle.borderColor = 'var(--accent-success)';
                      optStyle.color = 'var(--accent-success-text)';
                    } else if (isSelected) {
                      optStyle.backgroundColor = 'rgba(239, 68, 68, 0.15)';
                      optStyle.borderColor = '#ef4444';
                      optStyle.color = '#ef4444';
                    }
                  } else if (isSelected) {
                    optStyle.borderColor = 'var(--accent-primary)';
                    optStyle.backgroundColor = 'var(--accent-soft)';
                  }

                  return (
                    <div
                      key={oIdx}
                      style={optStyle}
                      onClick={() => handleSelectDrillOption(oIdx)}
                    >
                      <div className="flex items-center gap-3">
                        <span style={{ 
                          width: '26px', 
                          height: '26px', 
                          borderRadius: '50%', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                          color: isSelected ? 'white' : 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          fontWeight: 700
                        }}>
                          {['A', 'B', 'C', 'D'][oIdx]}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {drillShowExplanation && (
                        <div>
                          {isCorrect && <CheckCircle2 size={20} style={{ color: 'var(--accent-success)' }} />}
                          {isSelected && !isCorrect && <XCircle size={20} style={{ color: '#ef4444' }} />}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Step-by-Step Explanation Box */}
              {drillShowExplanation && (
                <div className="mt-5 p-4 rounded-xl animate-fade-in" style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)', border: '1.5px solid rgba(59, 130, 246, 0.25)' }}>
                  <div className="flex items-center gap-2 font-bold text-sm mb-2" style={{ color: 'var(--accent-primary)' }}>
                    <Sparkles size={16} />
                    <span>💡 名師步驟級詳解與解題破題關鍵：</span>
                  </div>
                  <p className="text-sm" style={{ lineHeight: 1.75, color: 'var(--text-primary)' }}>
                    {drillQuestions[drillIdx].explanation}
                  </p>

                  <div className="flex justify-end mt-4">
                    <button
                      className="btn-primary flex items-center gap-1.5 py-2 px-6"
                      onClick={handleNextDrill}
                    >
                      <span>{drillIdx < drillQuestions.length - 1 ? '下一題 →' : '查看刷題總結 🏆'}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : drillCompleted ? (
            /* Completion Screen */
            <div className="text-center py-8 flex flex-col items-center gap-4">
              <div style={{ fontSize: '3.5rem' }}>🏆</div>
              <h2 className="h2">太厲害了！本科目題庫已刷完</h2>
              <p className="text-secondary">
                總共練習了 <strong>{drillQuestions.length}</strong> 道段考經典考題，答對 <strong>{drillScore}</strong> 題！
              </p>
              <div className="flex gap-3 mt-2">
                <button className="btn-outline flex items-center gap-2" onClick={() => handleStartDrilling(drillSubject)}>
                  <RotateCcw size={16} /> 再刷一次
                </button>
                <button className="btn-primary" onClick={() => setMainMode('papers')}>
                  返回試卷中心
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-secondary">
              此科目尚無刷題題目。
            </div>
          )}
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* EXAM PAPER PREVIEW MODAL */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {previewPaper && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            backdropFilter: 'blur(4px)'
          }}
          onClick={() => setPreviewPaper(null)}
        >
          <div 
            className="card"
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              backgroundColor: '#ffffff',
              color: '#1e293b',
              padding: '36px',
              borderRadius: 'var(--radius-xl)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls */}
            <div className="flex justify-between items-center border-b pb-3 mb-4 print:hidden" style={{ borderColor: '#e2e8f0' }}>
              <span className="badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', fontWeight: 700 }}>
                📑 全真段考模擬試卷（可直接列印）
              </span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrint}
                  className="btn-primary flex items-center gap-1.5 text-xs py-1.5 px-3"
                  style={{ backgroundColor: '#2563eb', color: 'white' }}
                >
                  <Printer size={15} /> 列印此試卷
                </button>
                <button 
                  onClick={() => setPreviewPaper(null)}
                  className="btn-outline flex items-center justify-center p-1.5 text-xs"
                  style={{ borderRadius: '50%', width: '32px', height: '32px' }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Printable Paper Layout */}
            <div className="print-area">
              {/* Paper Header */}
              <div className="text-center border-b-2 pb-4 mb-5" style={{ borderColor: '#334155' }}>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>{previewPaper.title}</h2>
                <div className="flex justify-center items-center gap-6 text-sm text-slate-600 mt-2">
                  <span>科目：{coursesData.subjects.find(s => s.id === previewPaper.subject)?.name}</span>
                  <span>版本：{previewPaper.version || '108 課綱通用版'}</span>
                  <span>考試時間：40 分鐘</span>
                  <span>滿分：100 分</span>
                </div>
                {/* Student Info Box */}
                <div className="flex justify-center items-center gap-8 text-sm mt-3 pt-2 border-t border-dashed" style={{ borderColor: '#cbd5e1' }}>
                  <span>六年 ___ 班</span>
                  <span>座號：_______</span>
                  <span>姓名：_______________</span>
                  <span>得分：_______</span>
                </div>
              </div>

              {/* Section 1: Standard Exam Questions */}
              <div>
                <h4 className="font-bold text-base mb-3" style={{ color: '#1e293b' }}>
                  一、單一選擇題（每題 25 分，共 100 分）
                </h4>
                <div className="flex flex-col gap-4">
                  {(coursesData.units[previewPaper.subject] || []).slice(0, 4).map((u, qIdx) => {
                    const qObj = (quizData[u.id] && quizData[u.id][0]) || {
                      question: `請簡述 ${u.title} 之核心概念`,
                      options: ['選項 A', '選項 B', '選項 C', '選項 D'],
                      answerIndex: 0,
                      explanation: '詳解建置中'
                    };

                    return (
                      <div key={qIdx} className="p-3 rounded-lg" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                        <div className="font-semibold text-sm mb-2" style={{ color: '#0f172a' }}>
                          ({qIdx + 1}) {qObj.question}
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-slate-700 pl-4">
                          {qObj.options.map((opt, oIdx) => (
                            <div key={oIdx}>
                              ({['A', 'B', 'C', 'D'][oIdx]}) {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Answer Key & Step-by-Step Explanations */}
              <div className="mt-8 pt-4 border-t-2 border-dashed" style={{ borderColor: '#94a3b8' }}>
                <h4 className="font-bold text-base mb-3 flex items-center gap-2" style={{ color: '#0369a1' }}>
                  <CheckCircle2 size={18} />
                  <span>★ 試卷標準答案與名師步驟級詳解</span>
                </h4>
                <div className="flex flex-col gap-3 text-xs text-slate-700">
                  {(coursesData.units[previewPaper.subject] || []).slice(0, 4).map((u, qIdx) => {
                    const qObj = (quizData[u.id] && quizData[u.id][0]) || { answerIndex: 0, explanation: '' };
                    return (
                      <div key={qIdx} className="p-2.5 rounded bg-slate-50 border border-slate-200">
                        <strong style={{ color: '#0f172a' }}>第 ({qIdx + 1}) 題 正確解答：【{['A', 'B', 'C', 'D'][qObj.answerIndex]}】</strong>
                        <p className="mt-1 text-slate-600 leading-relaxed">{qObj.explanation}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* SECTION 3: 6 OFFICIAL QUESTION BANK PORTALS */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="card mt-2" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
        <div className="flex items-center gap-2 mb-2">
          <BookOpen size={20} style={{ color: 'var(--accent-primary)' }} />
          <h3 className="h3" style={{ fontSize: '1.25rem' }}>🌐 全國 6 大權威官方題庫資源直通車</h3>
        </div>
        <p className="text-secondary text-xs mb-4">
          直接連接教育部與各大教育基金會公開題庫，提供全臺各公立國小段考考古題與影音練習資源：
        </p>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <a
            href="https://exam.naer.edu.tw/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>國家教育研究院題庫網</div>
              <div className="text-xs text-secondary mt-1">全國國小歷屆段考試卷與答案庫</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://www.junyiacademy.org/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>均一教育平台</div>
              <div className="text-xs text-secondary mt-1">小六全科教學影音與技能練習題</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://www.learnmode.net/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>學習吧 LearnMode</div>
              <div className="text-xs text-secondary mt-1">康軒、南一、翰林三大版本題庫</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://www.boyo.org.tw/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>博幼基金會免費題庫</div>
              <div className="text-xs text-secondary mt-1">小六升國一數學基礎加固練習卷</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://exambank.darrenlu.com/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>ExamBank 歷屆試題庫</div>
              <div className="text-xs text-secondary mt-1">全臺各校段考考卷 PDF 免費下載</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>

          <a
            href="https://cooc.tp.edu.tw/"
            target="_blank"
            rel="noreferrer"
            className="card card-hoverable flex items-center justify-between"
            style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>臺北酷課雲 Cooc</div>
              <div className="text-xs text-secondary mt-1">素養導向評量與線上模擬測驗</div>
            </div>
            <ExternalLink size={18} style={{ color: 'var(--accent-primary)' }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankPage;
