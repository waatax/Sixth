import { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import PetSanctuaryModal from './PetSanctuaryModal';
import { playSound } from '../../utils/soundEffects';

const CHEER_MESSAGES = [
  '加油！今天又學會一個新觀念了！✨',
  '算理搞懂了，段考就天下無敵！🔥',
  '每天只要 3 分鐘，我們一起超越昨天的自己！🌱',
  '遇到錯題別怕，那是進步最快的地方！💪',
  '你認真專注的樣子超級帥氣！⭐',
  '記得點擊我，隨時餵我吃點美味小魚乾喔！🐟'
];

const PetCompanionWidget = () => {
  const { activePetTemplate, currentPetStats } = useGamification();
  const [isSanctuaryOpen, setIsSanctuaryOpen] = useState(false);
  const [bubbleText, setBubbleText] = useState('主人好！今天想一起挑戰哪一科呢？🐾');
  const [showHeart, setShowHeart] = useState(false);

  const currentEvolution = activePetTemplate?.evolutions.slice().reverse().find(e => (currentPetStats?.level || 1) >= e.minLevel) || activePetTemplate?.evolutions[0];

  const handlePetClick = () => {
    playSound('pet_happy');
    const randomMsg = CHEER_MESSAGES[Math.floor(Math.random() * CHEER_MESSAGES.length)];
    setBubbleText(randomMsg);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1200);
  };

  return (
    <>
      <div 
        className="pet-companion-floating-box select-none"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 90,
          display: 'flex',
          alignItems: 'flex-end',
          gap: '10px'
        }}
      >
        {/* Dialogue Bubble */}
        <div
          className="card animate-fade-in shadow-md"
          style={{
            maxWidth: '220px',
            padding: '10px 14px',
            borderRadius: '16px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1.5px solid var(--border-light)',
            fontSize: '0.82rem',
            lineHeight: 1.45,
            color: 'var(--text-primary)',
            position: 'relative',
            boxShadow: '0 6px 18px rgba(0,0,0,0.1)'
          }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-xs" style={{ color: 'var(--accent-primary)' }}>
              {activePetTemplate?.name.split(' ')[0]} (Lv.{currentPetStats?.level})
            </span>
            <button
              onClick={() => setIsSanctuaryOpen(true)}
              className="text-[11px] text-amber-500 font-bold hover:underline"
            >
              進殿堂 →
            </button>
          </div>
          <div>{bubbleText}</div>
        </div>

        {/* Pet Avatar Bubble Button */}
        <div style={{ position: 'relative' }}>
          {showHeart && (
            <div
              className="animate-fade-in"
              style={{
                position: 'absolute',
                top: '-24px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '1.5rem',
                animation: 'float 1s ease-out'
              }}
            >
              💖
            </div>
          )}

          <button
            onClick={handlePetClick}
            className="flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-90"
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.18)',
              fontSize: '2rem',
              backdropFilter: 'blur(8px)',
              backgroundColor: 'var(--bg-secondary)'
            }}
            title="點擊與守護神獸互動！"
          >
            {currentEvolution?.emoji || '🦊'}
          </button>
        </div>
      </div>

      {/* Sanctuary Modal */}
      <PetSanctuaryModal
        isOpen={isSanctuaryOpen}
        onClose={() => setIsSanctuaryOpen(false)}
      />
    </>
  );
};

export default PetCompanionWidget;
