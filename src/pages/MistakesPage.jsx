import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Trash2, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

const MistakesPage = () => {
  const [mistakes, setMistakes] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('sixth_student_mistakes');
    if (saved) {
      try {
        setMistakes(JSON.parse(saved));
      } catch (e) {}
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

  return (
    <div className="flex flex-col gap-6 py-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>

        {mistakes.length > 0 && (
          <button 
            className="flex items-center gap-1 text-xs text-secondary hover:text-primary p-2 border rounded"
            onClick={handleClearAll}
          >
            <Trash2 size={14} /> 清空錯題本
          </button>
        )}
      </div>

      {/* Header Banner */}
      <div className="card text-center py-8" style={{ backgroundColor: 'hsl(0, 75%, 98%)', border: '1px solid hsl(0, 75%, 90%)' }}>
        <span className="badge mb-2" style={{ backgroundColor: 'var(--accent-error)', color: 'white', fontWeight: 700, padding: '4px 14px' }}>
          📖 智慧個人化錯題本
        </span>
        <h1 className="h1 mb-2" style={{ fontSize: '2.2rem' }}>
          錯題複習與觀念盲點消滅
        </h1>
        <p className="text-secondary text-sm max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
          在單元測驗中答錯的題目會自動保存在這裡。把不會的題目弄懂，就是進步最快的方法！
        </p>
      </div>

      {/* Mistakes List */}
      {mistakes.length === 0 ? (
        <div className="card text-center py-16 flex flex-col items-center gap-4">
          <div style={{ backgroundColor: 'hsl(150, 60%, 95%)', color: 'hsl(150, 60%, 35%)', padding: '20px', borderRadius: '50%' }}>
            <CheckCircle2 size={48} />
          </div>
          <h3 className="h3">太棒了！目前沒有任何未消滅的錯題！</h3>
          <p className="text-sm text-secondary">
            當你在「單元重點測驗」或「模擬考」答錯時，題目將自動收錄於此。
          </p>
          <Link to="/" className="btn-primary mt-2">
            前往學習八大學習領域
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center text-sm font-bold text-secondary">
            <span>待複習題目：共 {mistakes.length} 題</span>
            <span>熟記後點擊「我已搞懂」即可消滅錯題！</span>
          </div>

          {mistakes.map((m, idx) => (
            <div key={idx} className="card flex flex-col gap-4" style={{ padding: '24px', borderLeft: '5px solid var(--accent-error)' }}>
              <div className="flex justify-between items-start">
                <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                  單元：{m.unitId}
                </span>
                <button 
                  className="btn-outline flex items-center gap-1 text-xs" 
                  style={{ color: 'hsl(150, 60%, 35%)', borderColor: 'hsl(150, 60%, 35%)', padding: '6px 12px' }}
                  onClick={() => handleRemoveSingle(idx)}
                >
                  <CheckCircle2 size={15} /> 我已徹底搞懂 (消滅此題)
                </button>
              </div>

              <h3 className="h3" style={{ fontSize: '1.15rem' }}>
                {idx + 1}. {m.question}
              </h3>

              <div className="flex flex-col gap-2">
                {m.options.map((opt, optI) => (
                  <div
                    key={optI}
                    style={{
                      padding: '10px 16px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                      backgroundColor: optI === m.answerIndex ? 'hsl(150, 60%, 92%)' : 'var(--bg-tertiary)',
                      color: optI === m.answerIndex ? 'hsl(150, 60%, 25%)' : 'var(--text-secondary)',
                      fontWeight: optI === m.answerIndex ? 700 : 400
                    }}
                  >
                    <span>{opt}</span> {optI === m.answerIndex && ' (正確解答)'}
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '14px 18px', borderRadius: 'var(--radius-md)' }}>
                <strong style={{ color: 'var(--text-primary)', fontSize: '0.88rem' }}>💡 觀念詳解：</strong>
                <p className="text-sm text-secondary mt-1">{m.explanation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MistakesPage;
