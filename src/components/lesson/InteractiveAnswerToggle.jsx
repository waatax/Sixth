import { useState } from 'react';
import { Eye, EyeOff, CheckCircle2, Lightbulb, Volume2 } from 'lucide-react';
import { playSound } from '../../utils/soundEffects';
import { speechEngine } from '../../utils/speechHelper';

const InteractiveAnswerToggle = ({ children, rawText = '', isEnglish = false }) => {
  const [revealed, setRevealed] = useState(false);
  const [mastered, setMastered] = useState(false);

  const toggleReveal = (e) => {
    e.stopPropagation();
    if (!revealed) playSound('click');
    setRevealed(!revealed);
  };

  const handleMastered = (e) => {
    e.stopPropagation();
    playSound('coin');
    setMastered(!mastered);
  };

  const handleSpeech = (e) => {
    e.stopPropagation();
    if (rawText) {
      speechEngine.speak(rawText, { lang: isEnglish ? 'en-US' : 'zh-TW' });
    }
  };

  return (
    <div
      className="interactive-answer-container my-3 rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: mastered ? '1.5px solid var(--accent-success)' : '1.5px solid var(--border-strong)',
        backgroundColor: 'var(--bg-tertiary)',
        boxShadow: revealed ? 'var(--shadow-sm)' : 'none'
      }}
    >
      {/* Top Toggle Header */}
      <div
        onClick={toggleReveal}
        className="p-3 flex items-center justify-between cursor-pointer select-none gap-2 hover:bg-slate-500/5 transition-colors"
        style={{
          backgroundColor: revealed ? 'rgba(37, 99, 235, 0.06)' : 'transparent',
          borderBottom: revealed ? '1px solid var(--border-light)' : 'none'
        }}
      >
        <div className="flex items-center gap-2 text-xs font-bold" style={{ color: 'var(--accent-primary)' }}>
          <Lightbulb size={16} />
          <span>{revealed ? '📖 名師步驟解析與參考答案' : '💡 先動腦想一想！點擊揭曉解答與詳解'}</span>
          {mastered && (
            <span className="badge badge-success text-[10px] font-bold">
              ✅ 已掌握
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            className="btn-outline flex items-center gap-1 text-xs py-1 px-3 rounded-full font-bold"
            style={{
              borderColor: revealed ? 'var(--border-strong)' : 'var(--accent-primary)',
              color: revealed ? 'var(--text-secondary)' : 'var(--accent-primary)'
            }}
          >
            {revealed ? (
              <>
                <EyeOff size={13} />
                <span>收合</span>
              </>
            ) : (
              <>
                <Eye size={13} />
                <span>揭曉答案</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Revealed Body */}
      {revealed && (
        <div className="p-4 animate-fade-in text-sm leading-relaxed" style={{ backgroundColor: 'var(--bg-secondary)' }}>
          <div className="flex justify-between items-start gap-2 mb-2">
            <span className="text-xs font-bold text-secondary">詳細破題解讀：</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSpeech}
                className="btn-outline text-xs py-0.5 px-2 rounded-full inline-flex items-center gap-1"
                title="朗讀解析"
              >
                <Volume2 size={12} />
                <span>朗讀</span>
              </button>
              <button
                onClick={handleMastered}
                className={`text-xs py-0.5 px-2.5 rounded-full font-bold transition-all flex items-center gap-1 ${
                  mastered ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-secondary hover:text-primary'
                }`}
              >
                <CheckCircle2 size={12} />
                <span>{mastered ? '已標記掌握' : '標記弄懂了 (+5 🪙)'}</span>
              </button>
            </div>
          </div>

          <div style={{ color: 'var(--text-primary)' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveAnswerToggle;
