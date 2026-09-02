import { useState } from 'react';
import { Sparkles, X, Gift, Zap, Crown, Shield, Trophy, RotateCcw } from 'lucide-react';
import { useGamification, SHOP_ITEMS } from '../../context/GamificationContext';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

const GACHA_LOOT_POOL = [
  // SSR (Legendary) - 10%
  { id: 'cape_royal', name: '👑 皇家榮譽披風', rarity: 'SSR', type: 'item', desc: '為神獸穿戴耀眼奪目的星光披風！', color: '#ec4899', weight: 10 },
  { id: 'frame_aurora', name: '🌈 極光星空頭像框', rarity: 'SSR', type: 'item', desc: '解鎖全站頂部極光動態邊框！', color: '#ec4899', weight: 10 },
  { id: 'pet_food_candy', name: '🍬 彩虹星光糖', rarity: 'SSR', type: 'item', desc: '神獸立即提升 1 級！', color: '#ec4899', weight: 10 },

  // SR (Epic) - 25%
  { id: 'hat_scholar', name: '🎓 狀元博士帽', rarity: 'SR', type: 'item', desc: '象徵最高學術榮譽的四方帽！', color: '#8b5cf6', weight: 25 },
  { id: 'streak_shield', name: '🛡️ 連勝冰凍護盾', rarity: 'SR', type: 'item', desc: '自動保全連續打卡天數！', color: '#8b5cf6', weight: 25 },
  { id: 'double_xp', name: '⚡ 雙倍經驗卡 x2', rarity: 'SR', type: 'item', amount: 2, desc: '享 6 次 200% 經驗值加成！', color: '#8b5cf6', weight: 25 },

  // R / Common - 65%
  { id: 'pet_food_fruit', name: '🍎 智慧神聖果 x2', rarity: 'R', type: 'item', amount: 2, desc: '神獸經驗值 +200！', color: '#3b82f6', weight: 65 },
  { id: 'hint_5050', name: '🎯 50:50 提示卡 x3', rarity: 'R', type: 'item', amount: 3, desc: '測驗與魔王戰排除錯誤選項！', color: '#3b82f6', weight: 65 },
  { id: 'pet_food_fish', name: '🐟 活力小魚乾 x4', rarity: 'R', type: 'item', amount: 4, desc: '快速恢復神獸飽食度！', color: '#10b981', weight: 65 },
  { id: 'bonus_coins', name: '🪙 星光金幣大暴擊 (+150)', rarity: 'R', type: 'coins', amount: 150, desc: '幸運獲得 150 點金幣！', color: '#f59e0b', weight: 65 }
];

const GachaLootModal = ({ isOpen, onClose }) => {
  const { coins, gems, addCoins, addGems, buyItem } = useGamification();
  const [isOpening, setIsOpening] = useState(false);
  const [pulledItems, setPulledItems] = useState([]);
  const [drawMode, setDrawMode] = useState(1); // 1 or 5

  if (!isOpen) return null;

  const performDraw = (count, currencyType) => {
    const cost = currencyType === 'coins' ? (count === 1 ? 80 : 360) : (count === 1 ? 2 : 8);
    const hasEnough = currencyType === 'coins' ? coins >= cost : gems >= cost;

    if (!hasEnough) {
      alert(`餘額不足！抽取需要 ${cost} ${currencyType === 'coins' ? '星光金幣' : '智慧水晶'}！`);
      return;
    }

    // Deduct currency
    if (currencyType === 'coins') addCoins(-cost);
    else addGems(-cost);

    setIsOpening(true);
    setPulledItems([]);
    playSound('gacha_open');

    setTimeout(() => {
      const results = [];
      let hasSsr = false;

      for (let i = 0; i < count; i++) {
        const rand = Math.random() * 100;
        let pool = GACHA_LOOT_POOL.filter(item => item.rarity === 'R');
        if (rand < 15) {
          pool = GACHA_LOOT_POOL.filter(item => item.rarity === 'SSR');
          hasSsr = true;
        } else if (rand < 45) {
          pool = GACHA_LOOT_POOL.filter(item => item.rarity === 'SR');
        }

        const picked = pool[Math.floor(Math.random() * pool.length)];
        results.push(picked);

        // Apply item to inventory
        if (picked.type === 'item') {
          buyItem(picked.id);
        } else if (picked.type === 'coins') {
          addCoins(picked.amount);
        }
      }

      setIsOpening(false);
      setPulledItems(results);

      if (hasSsr) {
        playSound('gacha_ssr');
        confetti({
          particleCount: 150,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#ec4899', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6']
        });
      } else {
        playSound('levelup');
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 1400);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="card animate-fade-in relative text-center"
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid var(--accent-warning)',
          boxShadow: '0 25px 50px -12px rgba(245, 158, 11, 0.35)',
          padding: '28px',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-secondary hover:text-primary transition-colors"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
        >
          <X size={18} />
        </button>

        {/* Top Header */}
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="badge badge-warning text-xs font-black">
            🎁 幸運神獸盲盒 (Mystery Gacha)
          </span>
        </div>
        <h2 className="h2" style={{ margin: '4px 0', fontSize: 'calc(1.4rem * var(--font-scale))' }}>
          星光神獸轉蛋機
        </h2>
        <p className="text-xs text-secondary mb-4">
          抽取 SSR 皇家披風、極光頭像框、神聖糖果與戰鬥輔助道具！
        </p>

        {/* Wallet Balance Bar */}
        <div className="flex items-center justify-center gap-4 mb-4 text-xs font-bold p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
          <span className="flex items-center gap-1 text-amber-500">
            🪙 星光金幣：{coins}
          </span>
          <span className="flex items-center gap-1 text-pink-500">
            💎 智慧水晶：{gems}
          </span>
        </div>

        {/* Chest Display Arena */}
        <div 
          className="p-6 my-2 rounded-2xl flex flex-col items-center justify-center bg-slate-900/50 border border-slate-700/50 relative overflow-hidden"
          style={{ minHeight: '180px' }}
        >
          {isOpening ? (
            <div className="flex flex-col items-center animate-bounce">
              <div style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 0 20px #f59e0b)' }}>
                🎁
              </div>
              <div className="text-xs font-black text-amber-300 mt-2 animate-pulse">
                ✨ 正在感應星光力量解鎖中... ✨
              </div>
            </div>
          ) : pulledItems.length > 0 ? (
            <div className="flex flex-col items-center gap-3 w-full animate-fade-in">
              <div className="text-xs font-black text-emerald-400">
                🎉 恭喜獲得以下豐厚寶物！已自動存入背包！
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full">
                {pulledItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl flex items-center justify-between text-left"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: `1.5px solid ${item.color}`,
                      boxShadow: `0 4px 12px ${item.color}30`
                    }}
                  >
                    <div>
                      <div className="font-extrabold text-xs text-white">
                        {item.name}
                      </div>
                      <div className="text-[10px] text-slate-300">
                        {item.desc}
                      </div>
                    </div>
                    <span 
                      className="badge font-black text-[10px] px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: item.color, color: '#ffffff' }}
                    >
                      {item.rarity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div 
                style={{ 
                  fontSize: '4.2rem',
                  filter: 'drop-shadow(0 8px 16px rgba(245, 158, 11, 0.4))'
                }}
              >
                🧰
              </div>
              <div className="text-xs text-slate-300 font-bold mt-2">
                黃金寶箱待命！選擇下方抽取方式開啟！
              </div>
            </div>
          )}
        </div>

        {/* Probability Info Tag */}
        <div className="text-[11px] text-secondary flex justify-center gap-3 my-3">
          <span className="text-pink-400 font-bold">🌟 SSR 15%</span>
          <span className="text-purple-400 font-bold">⚡ SR 30%</span>
          <span className="text-blue-400 font-bold">💎 R 55%</span>
        </div>

        {/* Draw Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-2">
          <button
            disabled={isOpening}
            onClick={() => performDraw(1, 'coins')}
            className="btn-primary py-2.5 px-3 rounded-xl font-bold flex flex-col items-center justify-center text-xs bg-amber-500 border-amber-500 text-slate-950 shadow-md hover:opacity-95"
          >
            <span>🎯 單抽 (1 Draw)</span>
            <span className="text-[11px] opacity-90 font-extrabold">🪙 80 金幣</span>
          </button>

          <button
            disabled={isOpening}
            onClick={() => performDraw(5, 'coins')}
            className="btn-primary py-2.5 px-3 rounded-xl font-bold flex flex-col items-center justify-center text-xs bg-gradient-to-r from-amber-500 to-pink-500 border-none text-white shadow-lg hover:opacity-95"
          >
            <span>🔥 豪華五連抽 (5x)</span>
            <span className="text-[11px] opacity-90 font-extrabold">🪙 360 金幣 (9折特惠)</span>
          </button>
        </div>

        {/* Gems Option */}
        <div className="mt-2 pt-2 border-t border-light flex justify-center">
          <button
            disabled={isOpening}
            onClick={() => performDraw(5, 'gems')}
            className="text-xs text-pink-500 hover:text-pink-400 font-bold flex items-center gap-1"
          >
            <span>💎 使用 8 智慧水晶進行尊榮五連抽 (必出 SR 以上) →</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GachaLootModal;
