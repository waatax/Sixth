import { useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FlaskConical, 
  HelpCircle, 
  X, 
  RotateCcw,
  Star,
  Award,
  Zap
} from 'lucide-react';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

export const LessonCompletionModal = ({ 
  isOpen, 
  onClose, 
  unitTitle, 
  unitNumber, 
  nextUnit, 
  matchedLab, 
  unitId, 
  reward 
}) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="card w-full max-w-lg p-6 sm:p-8 animate-scale-up relative overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '28px',
          border: '2px solid rgba(99, 102, 241, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative background glow */}
        <div 
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none opacity-20"
          style={{ background: 'radial-gradient(circle, #f59e0b 0%, #ec4899 100%)' }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-secondary hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Trophy Hero Icon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div 
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl flex items-center justify-center mb-3 shadow-lg animate-bounce"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
              color: 'white',
              boxShadow: '0 10px 25px rgba(245, 158, 11, 0.4)'
            }}
          >
            <Trophy size={36} />
          </div>

          <div className="flex items-center gap-1.5 text-xs font-black text-amber-500 uppercase tracking-widest mb-1">
            <Sparkles size={14} />
            <span>單元精讀圓滿達成！</span>
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-primary m-0 tracking-tight">
            恭喜讀完第 {unitNumber} 關：{unitTitle}
          </h2>
          <p className="text-xs sm:text-sm text-secondary mt-1 mb-0 max-w-sm">
            你已成功吸收本課核心心智模型與考點架構，自主學習力 +100！
          </p>
        </div>

        {/* Reward Showcase Box */}
        <div 
          className="p-4 rounded-2xl mb-6 flex items-center justify-around border border-amber-500/20"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)'
          }}
        >
          <div className="text-center">
            <div className="text-xs text-secondary font-bold flex items-center justify-center gap-1">
              <Zap size={14} className="text-amber-500" />
              <span>經驗值獎勵</span>
            </div>
            <div className="text-xl font-black text-amber-500 mt-0.5">
              +{reward?.earnedXp || 50} XP
            </div>
          </div>

          <div className="w-px h-8 bg-slate-300 dark:bg-slate-700" />

          <div className="text-center">
            <div className="text-xs text-secondary font-bold flex items-center justify-center gap-1">
              <span>🪙</span>
              <span>金幣獎勵</span>
            </div>
            <div className="text-xl font-black text-emerald-500 mt-0.5">
              +{reward?.earnedCoins || 15} 金幣
            </div>
          </div>

          <div className="w-px h-8 bg-slate-300 dark:bg-slate-700" />

          <div className="text-center">
            <div className="text-xs text-secondary font-bold flex items-center justify-center gap-1">
              <Award size={14} className="text-purple-500" />
              <span>學習徽章</span>
            </div>
            <div className="text-sm font-black text-purple-600 dark:text-purple-400 mt-1">
              進度點亮 ✨
            </div>
          </div>
        </div>

        {/* Action Pathways */}
        <div className="space-y-2.5">
          <div className="text-xs font-bold text-tertiary mb-1">
            下一步推薦挑戰路徑：
          </div>

          {/* Pathway 1: Quiz */}
          <button
            onClick={() => {
              triggerHaptic('medium');
              playSound('ios_tap');
              onClose();
              navigate(`/quiz/${unitId}`);
            }}
            className="w-full p-3 rounded-2xl flex items-center justify-between gap-3 text-left transition-all hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)',
              color: 'white',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                <HelpCircle size={18} />
              </div>
              <div>
                <div className="text-xs font-bold opacity-90">黃金複習律第 1 步</div>
                <div className="text-sm font-black">挑戰隨堂觀念測驗 (爭取滿分 3 星)</div>
              </div>
            </div>
            <ArrowRight size={18} />
          </button>

          {/* Pathway 2: Matched Lab (if exists) */}
          {matchedLab && (
            <button
              onClick={() => {
                triggerHaptic('light');
                playSound('ios_tap');
                onClose();
                navigate(`/labs?lab=${matchedLab.id}`);
              }}
              className="w-full p-3 rounded-2xl flex items-center justify-between gap-3 text-left transition-all hover:border-emerald-500"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                border: '1.5px solid var(--border-light)',
                color: 'var(--text-primary)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <FlaskConical size={18} />
                </div>
                <div>
                  <div className="text-xs text-secondary">動手操作 PhET 模擬</div>
                  <div className="text-sm font-bold">{matchedLab.title}</div>
                </div>
              </div>
              <ArrowRight size={16} className="text-secondary" />
            </button>
          )}

          {/* Pathway 3: Next Unit */}
          {nextUnit && (
            <button
              onClick={() => {
                triggerHaptic('light');
                playSound('ios_tap');
                onClose();
                navigate(`/lesson/${nextUnit.id}`);
              }}
              className="w-full p-3 rounded-2xl flex items-center justify-between gap-3 text-left transition-all hover:border-purple-500"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                border: '1.5px solid var(--border-light)',
                color: 'var(--text-primary)'
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Star size={18} />
                </div>
                <div>
                  <div className="text-xs text-secondary">乘勝追擊・下一關</div>
                  <div className="text-sm font-bold truncate max-w-[240px]">{nextUnit.title}</div>
                </div>
              </div>
              <ArrowRight size={16} className="text-secondary" />
            </button>
          )}

          <button
            onClick={onClose}
            className="w-full py-2.5 text-xs text-secondary hover:text-primary font-bold text-center mt-1"
          >
            留在本頁繼續復習講義內容
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonCompletionModal;
