import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, CheckCircle2 } from 'lucide-react';
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
    playSound('correct');
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

      {/* Header Banner */}
      <div
        className="card text-center py-8"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderTop: '5px solid var(--accent-error)'
        }}
      >
        <span className="badge badge-error mb-2" style={{ fontWeight: 700, padding: '4px 14px', borderRadius: 'var(--radius-full)' }}>
          📖 智慧個人化錯題本
        </span>
        <h1 className="h1 mb-2">
          錯題複習與觀念盲點消滅
        </h1>
        <p className="text-secondary text-sm max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
          在單元測驗中答錯的題目會自動收錄在此。弄懂不會的觀念，就是進步最快的方法！
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
            className={`btn-pill ${filterSubject === 'science' ? 'active' : ''}`}
            onClick={() => setFilterSubject('science')}
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
            🌏 社會
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
      {mistakes.length === 0 ? (
        <div className="card text-center py-16 flex flex-col items-center gap-4">
          <div
            style={{
              backgroundColor: 'var(--accent-success-soft)',
              color: 'var(--accent-success)',
              padding: '22px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <CheckCircle2 size={52} />
          </div>
          <h3 className="h3" style={{ margin: 0 }}>太棒了！目前沒有任何待消滅的錯題！</h3>
          <p className="text-sm text-secondary max-w-md">
            當你在「單元重點測驗」或「模擬考」答錯時，題目將自動收錄於此，助你考前精準複習。
          </p>
          <Link to="/" className="btn-primary mt-2">
            前往八大學習領域探索
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center text-sm font-bold text-secondary">
            <span>待複習題目：共 {filteredMistakes.length} 題</span>
            <span>熟記後點擊「我已徹底搞懂」即可消滅錯題！</span>
          </div>

          {filteredMistakes.map((m, idx) => (
            <div
              key={idx}
              className="card flex flex-col gap-4 animate-fade-in"
              style={{ padding: '24px', borderLeft: '5px solid var(--accent-error)' }}
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <span className="badge badge-accent">
                  單元代號：{m.unitId}
                </span>
                <button 
                  className="btn-outline flex items-center gap-1.5 text-xs" 
                  style={{ color: 'var(--accent-success-text)', borderColor: 'var(--accent-success)', padding: '6px 14px' }}
                  onClick={() => handleRemoveSingle(idx)}
                >
                  <CheckCircle2 size={16} /> 我已徹底搞懂 (消滅此題)
                </button>
              </div>

              <h3 className="h3" style={{ fontSize: 'calc(1.15rem * var(--font-scale))', margin: 0 }}>
                {idx + 1}. {m.question}
              </h3>

              <div className="flex flex-col gap-2">
                {m.options.map((opt, optI) => (
                  <div
                    key={optI}
                    style={{
                      padding: '12px 18px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.92rem',
                      backgroundColor: optI === m.answerIndex ? 'var(--accent-success-soft)' : 'var(--bg-tertiary)',
                      color: optI === m.answerIndex ? 'var(--accent-success-text)' : 'var(--text-secondary)',
                      fontWeight: optI === m.answerIndex ? 700 : 400,
                      border: optI === m.answerIndex ? '1px solid var(--accent-success)' : '1px solid var(--border-light)'
                    }}
                  >
                    <span>{opt}</span> {optI === m.answerIndex && ' ✔ (正確解答)'}
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '16px 18px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>💡 觀念名師詳解：</strong>
                <p className="text-sm text-secondary" style={{ marginTop: '4px', lineHeight: 1.65 }}>
                  {m.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MistakesPage;
