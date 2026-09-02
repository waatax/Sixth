import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Trash2, 
  CheckCircle2, 
  Sparkles, 
  Heart, 
  HelpCircle, 
  ShieldCheck, 
  Trophy, 
  Smile, 
  Volume2,
  Swords,
  Flame,
  Zap,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';
import { speechEngine } from '../utils/speechHelper';
import { useGamification } from '../context/GamificationContext';

const MONSTER_EMOJIS = ['👾', '👹', '👻', '🦇', '🦖', '🐉', '🐙', '😈'];

const MistakesPage = () => {
  const { addCoins, addXp } = useGamification();
  const [mistakes, setMistakes] = useState([]);
  const [filterSubject, setFilterSubject] = useState('all');

  // Mistake Smasher Mini-Game Mode
  const [smasherMode, setSmasherMode] = useState(false);
  const [currentSmasherIdx, setCurrentSmasherIdx] = useState(0);
  const [smashedCount, setSmashedCount] = useState(0);
  const [smashAnimation, setSmashAnimation] = useState(false);
  const [smashResult, setSmashResult] = useState(null); // 'hit' or 'miss'

  useEffect(() => {
    const saved = localStorage.getItem('sixth_student_mistakes');
    if (saved) {
      try {
        setMistakes(JSON.parse(saved));
      } catch (_e) {}
    }
  }, []);

  const handleClearAll = () => {
    if (window.confirm('確定要清空所有錯題筆記嗎？')) {
      localStorage.removeItem('sixth_student_mistakes');
      setMistakes([]);
      playSound('click');
    }
  };

  const handleRemoveSingle = (index) => {
    const updated = mistakes.filter((_, i) => i !== index);
    setMistakes(updated);
    localStorage.setItem('sixth_student_mistakes', JSON.stringify(updated));
    
    // Growth-mindset reward
    playSound('levelup');
    addCoins(20);
    addXp(30, 'mistake_fixed');
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 }
    });
  };

  // Handle Smasher Option Click
  const handleSmashAnswer = (selectedOptionIdx) => {
    if (smashAnimation) return;
    const currentQ = filteredMistakes[currentSmasherIdx];
    if (!currentQ) return;

    const isCorrect = selectedOptionIdx === currentQ.answerIndex;
    setSmashAnimation(true);

    if (isCorrect) {
      setSmashResult('hit');
      playSound('smash');
      addCoins(25);
      addXp(40, 'mistake_smashed');
      setSmashedCount(c => c + 1);

      // Remove from mistakes list
      const originalIdx = mistakes.findIndex(m => m.question === currentQ.question);
      if (originalIdx !== -1) {
        const updated = mistakes.filter((_, i) => i !== originalIdx);
        setMistakes(updated);
        localStorage.setItem('sixth_student_mistakes', JSON.stringify(updated));
      }

      setTimeout(() => {
        setSmashAnimation(false);
        setSmashResult(null);
        if (currentSmasherIdx < filteredMistakes.length - 1) {
          setCurrentSmasherIdx(prev => prev);
        } else {
          setCurrentSmasherIdx(0);
        }
      }, 800);
    } else {
      setSmashResult('miss');
      playSound('wrong');
      setTimeout(() => {
        setSmashAnimation(false);
        setSmashResult(null);
      }, 700);
    }
  };

  // Filtered list
  const filteredMistakes = mistakes.filter(m => {
    if (filterSubject === 'all') return true;
    return m.unitId && m.unitId.startsWith(filterSubject);
  });

  const currentMonster = MONSTER_EMOJIS[currentSmasherIdx % MONSTER_EMOJIS.length];

  return (
    <div className="flex flex-col gap-6 py-4 max-w-3xl mx-auto pb-16 animate-fade-in">
      {/* Top Header */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>

        <div className="flex items-center gap-2">
          {mistakes.length > 0 && !smasherMode && (
            <button
              onClick={() => {
                setSmasherMode(true);
                setCurrentSmasherIdx(0);
                playSound('levelup');
              }}
              className="btn-primary text-xs flex items-center gap-1.5 py-1.5 px-3 bg-red-600 border-red-600 text-white font-bold shadow-md"
            >
              <Swords size={14} />
              <span>💥 進入錯題粉碎擂台 ({mistakes.length})</span>
            </button>
          )}

          {mistakes.length > 0 && !smasherMode && (
            <button 
              className="flex items-center gap-1 text-xs text-secondary hover:text-primary p-1.5 border rounded-lg"
              style={{ borderColor: 'var(--border-light)' }}
              onClick={handleClearAll}
            >
              <Trash2 size={14} /> 清空
            </button>
          )}
        </div>
      </div>

      {/* Mode 1: Mistake Smasher Arena */}
      {smasherMode && filteredMistakes.length > 0 ? (
        <div className="card p-6 flex flex-col gap-5 bg-slate-900 text-white rounded-3xl border-2 border-red-500 shadow-2xl animate-fade-in">
          <div className="flex justify-between items-center border-b border-slate-700 pb-3">
            <div className="flex items-center gap-2">
              <span className="badge badge-error font-black text-xs px-3 py-1">
                ⚔️ 錯題粉碎擂台 (Mistake Smasher)
              </span>
              <span className="text-xs text-slate-300">
                剩餘錯題怪獸：{filteredMistakes.length} 隻
              </span>
            </div>

            <button
              onClick={() => setSmasherMode(false)}
              className="btn-outline text-xs text-slate-300 border-slate-700 hover:text-white"
            >
              退出擂台
            </button>
          </div>

          {/* Monster Battle Stage */}
          <div 
            className="p-6 rounded-2xl flex flex-col items-center justify-center bg-slate-950/60 border border-slate-800 text-center relative overflow-hidden"
            style={{ minHeight: '200px' }}
          >
            <div
              className={`select-none transition-transform ${smashAnimation ? (smashResult === 'hit' ? 'scale-75 opacity-30 shake' : 'shake') : 'animate-bounce'}`}
              style={{
                fontSize: '5rem',
                filter: smashResult === 'hit' ? 'drop-shadow(0 0 20px #10b981)' : 'drop-shadow(0 0 15px #ef4444)'
              }}
            >
              {currentMonster}
            </div>

            {smashResult === 'hit' && (
              <div className="absolute top-1/4 font-black text-2xl text-emerald-400 animate-fade-in">
                💥 CRUSHED! 錯題已被徹底粉碎！ (+25 🪙)
              </div>
            )}

            {smashResult === 'miss' && (
              <div className="absolute top-1/4 font-black text-xl text-red-400 animate-fade-in">
                🛡️ 怪獸閃避了！仔細看清選項！
              </div>
            )}
          </div>

          {/* Smasher Question & Choices */}
          {filteredMistakes[currentSmasherIdx] && (
            <div className="flex flex-col gap-3">
              <div className="text-xs text-amber-400 font-bold">
                🎯 怪獸弱點題目 (第 {currentSmasherIdx + 1} / {filteredMistakes.length} 題)：
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {filteredMistakes[currentSmasherIdx].question}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                {filteredMistakes[currentSmasherIdx].options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    disabled={smashAnimation}
                    onClick={() => handleSmashAnswer(oIdx)}
                    className="text-left text-xs sm:text-sm p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium flex items-center justify-between transition-all"
                  >
                    <span>{opt}</span>
                    <Zap size={14} className="text-amber-400" />
                  </button>
                ))}
              </div>

              {/* Clue helper */}
              <div className="mt-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300">
                <strong className="text-amber-300">💡 破綻線索：</strong>{' '}
                {filteredMistakes[currentSmasherIdx].explanation}
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Mode 2: Traditional Growth-Mindset Notebook */
        <>
          {/* Header Banner */}
          <div
            className="card text-center py-8 px-6"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderTop: '5px solid var(--accent-success)',
              borderRadius: 'var(--radius-xl)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div className="inline-flex items-center gap-1.5 badge badge-success mb-2" style={{ fontWeight: 700, padding: '4px 14px', borderRadius: 'var(--radius-full)' }}>
              <Sparkles size={14} />
              <span>成長型思維・錯題粉碎筆記</span>
            </div>
            <h1 className="h1 mb-2" style={{ fontSize: 'calc(1.75rem * var(--font-scale))' }}>
              錯題筆記 (Mistakes Notebook)
            </h1>
            <p className="text-secondary text-sm max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
              在測驗中答錯的題目會自動保存在這裡。只要弄懂並點擊「<strong style={{ color: 'var(--accent-success-text)' }}>我已完全搞懂</strong>」，就能獲得 <strong style={{ color: 'var(--accent-primary)' }}>+20 🪙 金幣與 +30 ⚡ XP</strong>！
            </p>
          </div>

          {/* Subject Filter Tabs */}
          {mistakes.length > 0 && (
            <div className="flex justify-center gap-2 flex-wrap pb-1">
              <button
                className={`btn-pill ${filterSubject === 'all' ? 'active' : ''}`}
                onClick={() => setFilterSubject('all')}
              >
                全部科目 ({mistakes.length})
              </button>
              <button
                className={`btn-pill ${filterSubject === 'math' ? 'active' : ''}`}
                onClick={() => setFilterSubject('math')}
              >
                🧮 數學
              </button>
              <button
                className={`btn-pill ${filterSubject === 'sci' ? 'active' : ''}`}
                onClick={() => setFilterSubject('sci')}
              >
                🔬 自然
              </button>
              <button
                className={`btn-pill ${filterSubject === 'man' ? 'active' : ''}`}
                onClick={() => setFilterSubject('man')}
              >
                📖 國語
              </button>
              <button
                className={`btn-pill ${filterSubject === 'soc' ? 'active' : ''}`}
                onClick={() => setFilterSubject('soc')}
              >
                🌍 社會
              </button>
              <button
                className={`btn-pill ${filterSubject === 'eng' ? 'active' : ''}`}
                onClick={() => setFilterSubject('eng')}
              >
                🇬🇧 英語
              </button>
            </div>
          )}

          {/* Mistakes List */}
          <div className="flex flex-col gap-5">
            {filteredMistakes.length === 0 ? (
              <div className="card text-center py-14" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎉</div>
                <h3 className="h3 mb-2" style={{ color: 'var(--text-primary)' }}>
                  太厲害了！目前沒有待複習的錯題！
                </h3>
                <p className="text-secondary text-sm max-w-md mx-auto" style={{ lineHeight: 1.6 }}>
                  你的觀念掌握非常扎實！可以前往做一回「全科計時模擬考」挑戰滿分，或到「速記翻翻卡」複習關鍵公式！
                </p>
                <div className="flex justify-center gap-3 mt-5 flex-wrap">
                  <Link to="/mock-exam" className="btn-primary text-sm" style={{ padding: '8px 20px' }}>
                    前往模擬考挑戰
                  </Link>
                  <Link to="/flashcards" className="btn-outline text-sm" style={{ padding: '8px 20px' }}>
                    翻翻卡速記複習
                  </Link>
                </div>
              </div>
            ) : (
              filteredMistakes.map((item, idx) => (
                <div
                  key={idx}
                  className="card animate-fade-in flex flex-col gap-4"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1.5px solid var(--border-light)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '24px',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="badge badge-accent font-bold">
                        📌 弱點加強 #{idx + 1}
                      </span>
                      <span className="text-xs text-tertiary">單元代碼：{item.unitId}</span>
                    </div>
                    <span className="badge" style={{ backgroundColor: 'var(--accent-warning-soft)', color: 'var(--accent-warning-text)', fontWeight: 700 }}>
                      搞懂獲 +20 🪙 / +30 ⚡
                    </span>
                  </div>

                  <div className="flex justify-between items-start gap-3">
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.6, flex: 1 }}>
                      {item.question}
                    </div>
                    {item.unitId?.startsWith('eng-') && (
                      <button
                        className="btn-outline flex items-center gap-1 text-xs"
                        style={{
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-full)',
                          flexShrink: 0,
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent-primary)',
                          fontWeight: 700
                        }}
                        onClick={() => speechEngine.speak(item.question)}
                        title="聆聽英文題目發音"
                      >
                        <Volume2 size={13} />
                        <span>🔊 聽題目</span>
                      </button>
                    )}
                  </div>

                  {/* Options */}
                  {item.options && (
                    <div className="flex flex-col gap-2">
                      {item.options.map((opt, optIdx) => {
                        const isCorrect = optIdx === item.answerIndex;
                        return (
                          <div
                            key={optIdx}
                            className="p-3 rounded-lg flex items-center justify-between text-sm"
                            style={{
                              backgroundColor: isCorrect ? 'var(--accent-success-soft)' : 'var(--bg-tertiary)',
                              border: isCorrect ? '1.5px solid var(--accent-success)' : '1px solid var(--border-light)',
                              color: isCorrect ? 'var(--accent-success-text)' : 'var(--text-secondary)',
                              fontWeight: isCorrect ? 700 : 500
                            }}
                          >
                            <div className="flex items-center gap-2">
                              <span>{opt}</span>
                            </div>
                            {isCorrect && (
                              <span className="badge badge-success text-xs font-bold">
                                ✓ 正確答案
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Detailed Explanation */}
                  {item.explanation && (
                    <div
                      style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        padding: '14px 18px',
                        borderRadius: 'var(--radius-md)',
                        borderLeft: '4px solid var(--accent-primary)',
                        fontSize: '0.9rem',
                        lineHeight: 1.65,
                        color: 'var(--text-primary)'
                      }}
                    >
                      <strong style={{ color: 'var(--accent-primary)' }}>💡 名師觀念精解：</strong>
                      <div style={{ marginTop: '4px' }}>{item.explanation}</div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-3 border-t flex-wrap gap-2" style={{ borderTop: '1px solid var(--border-light)' }}>
                    <Link
                      to={`/lesson/${item.unitId}`}
                      className="text-xs font-bold text-secondary hover:text-primary flex items-center gap-1"
                    >
                      📖 重新閱讀本課圖解教學
                    </Link>

                    <button
                      onClick={() => handleRemoveSingle(idx)}
                      className="btn-primary text-xs flex items-center gap-1.5"
                      style={{
                        backgroundColor: 'var(--accent-success)',
                        borderColor: 'var(--accent-success)',
                        padding: '8px 18px',
                        color: 'white',
                        fontWeight: 700,
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>我已完全弄懂！消滅錯題 (+20 🪙, +30 ⚡)</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default MistakesPage;
