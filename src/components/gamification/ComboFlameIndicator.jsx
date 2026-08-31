import { Flame, Zap } from 'lucide-react';

const ComboFlameIndicator = ({ comboCount }) => {
  if (comboCount <= 1) return null;

  const multiplier = comboCount >= 5 ? 2.0 : comboCount >= 3 ? 1.5 : 1.2;

  return (
    <div
      className="animate-fade-in flex items-center gap-1.5 px-3 py-1 rounded-full font-extrabold select-none"
      style={{
        background: comboCount >= 5
          ? 'linear-gradient(90deg, #ef4444 0%, #f59e0b 100%)'
          : 'linear-gradient(90deg, #f59e0b 0%, #eab308 100%)',
        color: '#ffffff',
        boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
        fontSize: '0.82rem',
        animation: 'pulse 1.5s infinite'
      }}
    >
      <Flame size={16} style={{ animation: 'bounce 0.8s infinite' }} />
      <span>🔥 連擊 COMBO x{comboCount}！</span>
      <span className="text-[11px] bg-black/20 px-1.5 py-0.5 rounded-full">
        +{Math.round((multiplier - 1) * 100)}% 金幣
      </span>
    </div>
  );
};

export default ComboFlameIndicator;
