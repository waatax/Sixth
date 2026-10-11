import { 
  BookOpen, 
  X, 
  Sparkles, 
  Volume2 
} from 'lucide-react';
import { speechEngine } from '../../utils/speechHelper';
import { playSound } from '../../utils/soundEffects';

export const LessonGlossaryModal = ({ termData, onClose }) => {
  if (!termData) return null;

  const speakTerm = () => {
    speechEngine.speak(`${termData.term}。${termData.def}。${termData.tip || ''}`, { lang: 'zh-TW' });
    playSound('ios_tap');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="card w-full max-w-md p-5 sm:p-6 animate-scale-up relative overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '24px',
          border: '1.5px solid var(--border-light)',
          boxShadow: '0 20px 45px -10px rgba(0, 0, 0, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-light">
          <div className="flex items-center gap-2">
            <span className="text-xl">💡</span>
            <div>
              <span className="text-[11px] font-bold text-tertiary uppercase tracking-wider">
                108 課綱核心概念字典
              </span>
              <h3 className="text-base sm:text-lg font-black text-primary m-0">
                {termData.term}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={speakTerm}
              className="p-1.5 text-secondary hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="語音朗讀詞條定義"
            >
              <Volume2 size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-secondary hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Definition Content */}
        <div className="py-4 space-y-3">
          <div 
            className="p-3.5 rounded-2xl border border-light"
            style={{ backgroundColor: 'var(--bg-tertiary)' }}
          >
            <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-1 flex items-center gap-1">
              <BookOpen size={13} />
              <span>一句話直觀本質定義：</span>
            </div>
            <p className="text-xs sm:text-sm text-primary font-medium m-0 leading-relaxed">
              {termData.def}
            </p>
          </div>

          {termData.tip && (
            <div 
              className="p-3.5 rounded-2xl border"
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.08)',
                borderColor: 'rgba(245, 158, 11, 0.3)'
              }}
            >
              <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mb-1 flex items-center gap-1">
                <Sparkles size={13} />
                <span>名師秒記秘訣 / 避坑指南：</span>
              </div>
              <p className="text-xs text-secondary m-0 leading-relaxed">
                {termData.tip}
              </p>
            </div>
          )}
        </div>

        {/* Footer Close */}
        <div className="pt-2 border-t border-light flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary text-xs px-4 py-1.5 rounded-xl font-bold"
          >
            我懂了，繼續閱讀
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonGlossaryModal;
