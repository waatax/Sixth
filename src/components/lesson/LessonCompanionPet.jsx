import { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, Heart, Zap, Award } from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import { playSound, triggerHaptic, dispatchDynamicIsland } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

/**
 * Interactive Mascot Companion for Lesson Page
 * Accompanies students as they read, providing growth-mindset praise and pet buffs.
 */
const LessonCompanionPet = ({ scrollProgress = 0, masteredCount = 0, totalConcepts = 0, subjectId = '' }) => {
  const { activePetTemplate, currentPetStats, activePetId, addCoins, addXp } = useGamification();
  const [petMessage, setPetMessage] = useState('');
  const [isBouncing, setIsBouncing] = useState(false);
  const [interactedCount, setInteractedCount] = useState(0);

  const petName = activePetTemplate?.name || '智多狐 (Spark)';
  const petEmoji = activePetTemplate?.emoji || '🦊';
  const petBuff = activePetTemplate?.buffText || '全科學習加成';

  // Dynamic dialogue based on reading progress & subject
  useEffect(() => {
    if (scrollProgress >= 98) {
      setPetMessage('太棒了！全課融會貫通，大腦神經突觸已牢牢建立！🎉');
    } else if (scrollProgress >= 75) {
      setPetMessage('衝刺階段！最後的例題解析最關鍵，堅持到底！💪');
    } else if (scrollProgress >= 50) {
      setPetMessage('進度已過半！你的專注力簡直如同探險家般優秀！🌟');
    } else if (scrollProgress >= 25) {
      setPetMessage('很棒的開局！把核心觀念讀懂，等下做測驗超輕鬆！📖');
    } else if (masteredCount > 0) {
      setPetMessage(`太讚了！已打卡 ${masteredCount} 個核心考點，繼續累積實力！⭐`);
    } else {
      setPetMessage(`我是你的學習守護夥伴 ${petName}，今天我們一起攻克這個單元！✨`);
    }
  }, [scrollProgress, masteredCount, petName]);

  const handlePetClick = () => {
    setIsBouncing(true);
    playSound('coin');
    triggerHaptic('light');

    const phrases = [
      '相信自己，每一次閱讀都在讓大腦變得更強壯！🧠',
      '不用怕題目難，把它拆成小步驟就能迎刃而解！💡',
      '學會一個新觀念，就像在知識地圖上點亮一盞燈！🗺️',
      '遇到不懂的段落？點擊「🔊 聽叮嚀」讓我唸給你聽！🎙️',
      '段考題只是把觀念換個包裝，本質都是一樣的！🎯'
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    setPetMessage(randomPhrase);

    if (interactedCount < 3) {
      setInteractedCount(prev => prev + 1);
      addCoins(3);
      addXp(5, 'pet_cheer');
      dispatchDynamicIsland({
        title: `${petEmoji} ${petName} 摸摸加油！`,
        subtitle: '激勵元氣滿滿・獲得 +3 🪙 +5 XP',
        icon: petEmoji
      });
      confetti({ particleCount: 20, spread: 40, origin: { y: 0.9 } });
    }

    setTimeout(() => setIsBouncing(false), 600);
  };

  return (
    <div className="lesson-companion-pet-wrapper">
      <div 
        className={`lesson-pet-card cursor-pointer ${isBouncing ? 'animate-bounce' : ''}`}
        onClick={handlePetClick}
        title="點擊與守護神獸互動互動 (+3 🪙)"
      >
        <div className="flex items-center gap-2">
          <div className="pet-avatar-bubble relative">
            <span className="text-2xl select-none">{petEmoji}</span>
            <span className="pet-lv-badge text-[9px] font-bold">
              Lv.{currentPetStats?.level || 1}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <span className="font-bold text-xs text-slate-800 dark:text-slate-200 truncate">
                {petName}
              </span>
              <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium flex items-center gap-0.5">
                <Zap size={10} /> {petBuff}
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug mt-0.5 truncate">
              "{petMessage}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCompanionPet;
