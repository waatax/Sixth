import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle2, XCircle, Volume2, Sparkles } from 'lucide-react';
import { speechEngine } from '../../utils/speechHelper';
import { playSound } from '../../utils/soundEffects';

const InteractiveMisconceptionCard = ({ mythText, truthText, id = null, isEnglish = false }) => {
  const [revealed, setRevealed] = useState(false);

  const toggleReveal = () => {
    if (!revealed) {
      playSound('click');
    }
    setRevealed(!revealed);
  };

  const handleSpeech = (e, text) => {
    e.stopPropagation();
    speechEngine.speak(text, { lang: isEnglish ? 'en-US' : 'zh-TW' });
  };

  return (
    <div
      className="interactive-misconception-card my-4 transition-all duration-300 rounded-2xl overflow-hidden"
      style={{
        border: '1.5px solid var(--border-strong)',
        backgroundColor: 'var(--bg-secondary)',
        boxShadow: revealed ? 'var(--shadow-md)' : 'var(--shadow-sm)'
      }}
    >
      {/* Myth Header Prompt */}
      <div
        onClick={toggleReveal}
        className="cursor-pointer p-4 select-none flex items-start justify-between gap-3 transition-colors hover:bg-slate-500/5"
        style={{
          borderBottom: revealed ? '1px solid var(--border-light)' : 'none',
          backgroundColor: 'rgba(239, 68, 68, 0.04)'
        }}
      >
        <div className="flex items-start gap-3 flex-1">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ backgroundColor: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}
          >
            <XCircle size={18} />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="badge badge-warning text-[11px] font-extrabold">
                ⚠️ 常見迷思陷阱 (Common Pitfall)
              </span>
              <span className="text-xs text-secondary font-medium hidden sm:inline">
                點擊檢驗觀念
              </span>
            </div>
            <div className="font-bold text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {mythText}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0 mt-1">
          <button
            className="btn-outline flex items-center gap-1 text-xs py-1 px-3 rounded-full font-bold"
            style={{
              borderColor: revealed ? 'var(--accent-success)' : 'var(--accent-warning)',
              color: revealed ? 'var(--accent-success)' : 'var(--accent-warning-text)'
            }}
          >
            {revealed ? (
              <>
                <span>已揭曉</span>
                <ChevronUp size={14} />
              </>
            ) : (
              <>
                <Sparkles size={13} />
                <span>揭曉真相</span>
                <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Truth Revealed Content */}
      {revealed && (
        <div
          className="p-5 animate-fade-in"
          style={{
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            borderLeft: '5px solid var(--accent-success)'
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ backgroundColor: 'rgba(16, 185, 129, 0.2)', color: 'var(--accent-success)' }}
            >
              <CheckCircle2 size={18} />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                <span className="badge badge-success text-[11px] font-extrabold">
                  ✅ 名師精闢破解・正確觀念 (Concept Key)
                </span>

                <button
                  onClick={(e) => handleSpeech(e, truthText)}
                  className="btn-outline text-xs py-0.5 px-2.5 rounded-full flex items-center gap-1 text-secondary hover:text-primary"
                  title="朗讀解析"
                >
                  <Volume2 size={12} />
                  <span>聽解說</span>
                </button>
              </div>

              <div className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {truthText}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMisconceptionCard;
