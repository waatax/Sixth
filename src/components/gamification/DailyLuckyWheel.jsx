import { useState, useRef } from 'react';
import { Sparkles, Gift, X, Check, Award } from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/soundEffects';

const WHEEL_PRIZES = [
  { id: 0, label: '+60 🪙 金幣', type: 'coins', amount: 60, color: '#f59e0b', textDark: false },
  { id: 1, label: '+50 ⚡ XP', type: 'xp', amount: 50, color: '#3b82f6', textDark: false },
  { id: 2, label: '💎 1 智慧水晶', type: 'gems', amount: 1, color: '#ec4899', textDark: false },
  { id: 3, label: '🐟 活力小魚乾', type: 'item', itemId: 'pet_food_fish', amount: 2, color: '#10b981', textDark: false },
  { id: 4, label: '+100 🪙 大紅包', type: 'coins', amount: 100, color: '#ef4444', textDark: false },
  { id: 5, label: '+100 ⚡ 大XP', type: 'xp', amount: 100, color: '#8b5cf6', textDark: false },
  { id: 6, label: '⚡ 雙倍經驗卡', type: 'item', itemId: 'double_xp', amount: 1, color: '#06b6d4', textDark: false },
  { id: 7, label: '🛡️ 連勝護盾', type: 'item', itemId: 'streak_shield', amount: 1, color: '#eab308', textDark: true }
];

const DailyLuckyWheel = ({ isOpen, onClose }) => {
  const { lastSpinDate, claimDailySpin } = useGamification();
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationDegree, setRotationDegree] = useState(0);
  const [wonPrize, setWonPrize] = useState(null);

  const todayStr = new Date().toISOString().slice(0, 10);
  const alreadySpunToday = lastSpinDate === todayStr;

  const handleSpin = () => {
    if (isSpinning || alreadySpunToday) return;

    setIsSpinning(true);
    setWonPrize(null);
    playSound('coin');

    // Pick random slice index (0 to 7)
    const prizeIndex = Math.floor(Math.random() * WHEEL_PRIZES.length);
    const selectedPrize = WHEEL_PRIZES[prizeIndex];

    // Calculate rotation: 5 full spins (1800 deg) + prize angle offset
    // Each slice is 360 / 8 = 45 deg
    const sliceDeg = 360 / WHEEL_PRIZES.length;
    const targetSliceAngle = (WHEEL_PRIZES.length - 1 - prizeIndex) * sliceDeg + sliceDeg / 2;
    const finalRotation = rotationDegree + 1800 + targetSliceAngle;

    setRotationDegree(finalRotation);

    // Audio clicks during spin
    let tickCount = 0;
    const tickInterval = setInterval(() => {
      playSound('click');
      tickCount += 1;
      if (tickCount > 18) clearInterval(tickInterval);
    }, 180);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPrize(selectedPrize);
      claimDailySpin(selectedPrize);
      playSound('chest_open');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#8b5cf6']
      });
    }, 3800);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid var(--border-light)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          padding: '28px',
          textAlign: 'center',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-left">
            <span style={{ fontSize: '1.6rem' }}>🎡</span>
            <div>
              <h3 style={{ margin: 0, fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                每日星光幸運轉盤 (Daily Lucky Spin)
              </h3>
              <span className="text-xs text-secondary">
                每天免費抽一次！保證獲得金幣、水晶或神獸稀有道具！
              </span>
            </div>
          </div>
          <button onClick={onClose} className="btn-outline p-1 rounded-full">
            <X size={18} />
          </button>
        </div>

        {/* Wheel Graphic Container */}
        <div className="relative my-6 flex justify-center items-center">
          {/* Wheel Pointer Needle */}
          <div
            style={{
              position: 'absolute',
              top: '-12px',
              zIndex: 20,
              width: 0,
              height: 0,
              borderLeft: '14px solid transparent',
              borderRight: '14px solid transparent',
              borderTop: '26px solid #ef4444',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.35))'
            }}
          />

          {/* Rotating Wheel */}
          <div
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0,0,0,0.25), inset 0 0 15px rgba(0,0,0,0.2)',
              border: '6px solid var(--bg-tertiary)',
              transform: `rotate(${rotationDegree}deg)`,
              transition: isSpinning ? 'transform 3.8s cubic-bezier(0.15, 0.9, 0.25, 1)' : 'none'
            }}
          >
            {WHEEL_PRIZES.map((prize, idx) => {
              const rotateAngle = idx * 45;
              return (
                <div
                  key={prize.id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '50%',
                    height: '50%',
                    transformOrigin: '0% 100%',
                    transform: `rotate(${rotateAngle}deg) skewY(-45deg)`,
                    backgroundColor: prize.color,
                    border: '1px solid rgba(255,255,255,0.2)'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      left: '30%',
                      top: '30%',
                      transform: 'skewY(45deg) rotate(22.5deg)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: prize.textDark ? '#1f2937' : '#ffffff',
                      textShadow: prize.textDark ? 'none' : '0 1px 2px rgba(0,0,0,0.5)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {prize.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Hub Logo */}
          <div
            style={{
              position: 'absolute',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              zIndex: 10,
              border: '3px solid var(--accent-primary)'
            }}
          >
            ⭐
          </div>
        </div>

        {/* Won Prize Banner */}
        {wonPrize && (
          <div className="p-3 mb-4 rounded-xl bg-amber-500/10 border border-amber-500 text-amber-600 font-bold animate-fade-in text-sm flex items-center justify-center gap-2">
            <Sparkles size={16} />
            <span>恭喜獲得：{wonPrize.label}！已存入你的學習護照背包！</span>
          </div>
        )}

        {/* Spin Button */}
        <button
          onClick={handleSpin}
          disabled={isSpinning || alreadySpunToday}
          className="btn-primary w-full py-3 text-base font-bold flex items-center justify-center gap-2"
          style={{
            borderRadius: 'var(--radius-lg)',
            opacity: (isSpinning || alreadySpunToday) ? 0.6 : 1,
            backgroundColor: alreadySpunToday ? 'var(--bg-tertiary)' : 'var(--accent-warning)',
            borderColor: alreadySpunToday ? 'var(--border-light)' : 'var(--accent-warning)',
            color: alreadySpunToday ? 'var(--text-secondary)' : '#000000',
            cursor: alreadySpunToday ? 'not-allowed' : 'pointer'
          }}
        >
          {isSpinning ? (
            <span>💫 命運指針狂飆旋轉中...</span>
          ) : alreadySpunToday ? (
            <span>✅ 今日已領取幸運獎勵（明日 00:00 重置）</span>
          ) : (
            <>
              <Sparkles size={18} />
              <span>啟動星光幸運轉盤 (免費領獎)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default DailyLuckyWheel;
