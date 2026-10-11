import { useState } from 'react';
import { 
  Trophy, 
  X, 
  Sparkles, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

export const TrophyHallModal = ({ isOpen, onClose }) => {
  const { badges = [], allAchievements = [] } = useGamification();
  const [selectedFilter, setSelectedFilter] = useState('all'); // 'all' | 'unlocked' | 'locked'

  if (!isOpen) return null;

  const totalBadges = allAchievements.length;
  const unlockedCount = allAchievements.filter(a => badges.includes(a.name)).length;
  const completionPercent = Math.round((unlockedCount / totalBadges) * 100);

  const filteredList = allAchievements.filter(a => {
    const isUnlocked = badges.includes(a.name);
    if (selectedFilter === 'unlocked') return isUnlocked;
    if (selectedFilter === 'locked') return !isUnlocked;
    return true;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/65 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="card w-full max-w-2xl max-h-[90vh] flex flex-col p-5 sm:p-7 animate-scale-up relative overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '28px',
          border: '1.5px solid var(--border-light)',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.4)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-light">
          <div className="flex items-center gap-3">
            <div 
              className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)'
              }}
            >
              <Trophy size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black text-primary m-0">
                  榮譽成就徽章展覽館
                </h2>
                <span className="badge badge-accent text-xs font-bold px-2 py-0.5">
                  已解鎖 {unlockedCount} / {totalBadges}
                </span>
              </div>
              <p className="text-xs text-secondary m-0 mt-0.5">
                見證全科自主學習足跡與自律榮譽勳章
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar Showcase */}
        <div 
          className="p-3.5 my-4 rounded-2xl border border-light flex flex-col gap-2"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div className="flex justify-between items-center text-xs font-bold">
            <span className="flex items-center gap-1.5 text-primary">
              <Sparkles size={14} className="text-amber-500" />
              <span>全圖鑑收集進度</span>
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-extrabold">{completionPercent}%</span>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div 
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${completionPercent}%`,
                background: 'linear-gradient(90deg, #f59e0b 0%, #10b981 100%)'
              }}
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-3">
          {[
            { id: 'all', label: `全部徽章 (${totalBadges})` },
            { id: 'unlocked', label: `已獲得 (${unlockedCount})` },
            { id: 'locked', label: `待解鎖 (${totalBadges - unlockedCount})` }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => { setSelectedFilter(f.id); playSound('ios_tap'); }}
              className={`px-3 py-1 text-xs font-bold rounded-xl transition-all ${
                selectedFilter === f.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-tertiary text-secondary hover:text-primary border border-light'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Badges Grid Scroll Area */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 max-h-[50vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {filteredList.map(item => {
              const isUnlocked = badges.includes(item.name);

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (isUnlocked) {
                      triggerHaptic('light');
                      playSound('coin');
                    }
                  }}
                  className={`p-3 rounded-2xl border transition-all flex items-start gap-3 select-none ${
                    isUnlocked
                      ? 'bg-card border-amber-500/30 hover:border-amber-500 hover:shadow-sm cursor-pointer'
                      : 'opacity-55 bg-tertiary border-light'
                  }`}
                >
                  {/* Badge Icon Avatar */}
                  <div 
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 transition-transform ${
                      isUnlocked ? 'bg-amber-500/15 ring-2 ring-amber-500/30' : 'bg-slate-200 dark:bg-slate-800 grayscale'
                    }`}
                  >
                    {isUnlocked ? item.icon : <Lock size={18} className="text-slate-400" />}
                  </div>

                  {/* Badge Details */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className={`text-xs font-black truncate ${isUnlocked ? 'text-primary' : 'text-slate-400'}`}>
                        {item.name}
                      </span>
                      {isUnlocked && (
                        <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-[11px] text-secondary m-0 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-tertiary text-tertiary font-bold">
                        條件：{item.req}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 mt-3 border-t border-light flex justify-between items-center text-xs text-secondary">
          <span>💡 每日精讀單元、通關測驗與魔王挑戰即可解鎖新徽章！</span>
          <button onClick={onClose} className="btn-primary text-xs px-4 py-1.5 rounded-xl font-bold">
            關閉圖鑑
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrophyHallModal;
