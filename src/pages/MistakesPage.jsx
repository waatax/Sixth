import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, CheckCircle2, Sparkles, Heart, HelpCircle, ShieldCheck, Trophy, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

const MistakesPage = () => {
  const [mistakes, setMistakes] = useState([]);
  const [filterSubject, setFilterSubject] = useState('all');

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
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 }
    });

    // Add XP to user stats
    try {
      const savedStats = localStorage.getItem('sixth_student_stats');
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        parsed.xp = (parsed.xp || 0) + 20;
        localStorage.setItem('sixth_student_stats', JSON.stringify(parsed));
      }
    } catch (e) {}
  };

  // Filtered list
  const filteredMistakes = mistakes.filter(m => {
    if (filterSubject === 'all') return true;
    return m.unitId && m.unitId.startsWith(filterSubject);
  });

  return (
    <div className="flex flex-col gap-6 py-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>

        {mistakes.length > 0 && (
          <button 
            className="flex items-center gap-1 text-xs text-secondary hover:text-primary p-2 border rounded"
            style={{ borderColor: 'var(--border-light)' }}
            onClick={handleClearAll}
          >
            <Trash2 size={14} /> 清空錯題本
          </button>
        )}
      </div>

      {/* Header Banner with Growth Mindset Psychology */}
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
          <span>成長型思維・專屬觀念加強庫</span>
        </div>
        <h1 className="h1 mb-2" style={{ fontSize: 'calc(1.75rem * var(--font-scale))' }}>
          錯題不是失敗，而是最棒的進步秘密！
        </h1>
        <p className="text-secondary text-sm max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
          在測驗中答錯的題目會自動保存在這裡。只要弄懂並點擊「<strong style={{ color: 'var(--accent-success-text)' }}>我已完全搞懂</strong>」，就能獲得 <strong style={{ color: 'var(--accent-primary)' }}>+20 XP</strong> 並消滅盲點！
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
                  搞懂獲 +20 XP
                </span>
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                {item.question}
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
                        <span>{opt}</span>
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
                  <span>我已完全弄懂！消滅錯題 (+20 XP)</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MistakesPage;
