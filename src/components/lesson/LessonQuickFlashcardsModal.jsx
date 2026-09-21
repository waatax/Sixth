import { useState, useMemo } from 'react';
import { 
  RotateCw, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Volume2, 
  Zap
} from 'lucide-react';
import { speechEngine } from '../../utils/speechHelper';
import { playSound, triggerHaptic } from '../../utils/soundEffects';
import { useGamification } from '../../context/GamificationContext';
import { curatedCheatSheets } from '../../data/curatedCheatSheets';
import confetti from 'canvas-confetti';

const LessonQuickFlashcardsModal = ({ isOpen, onClose, unit, subjectName }) => {
  const { addCoins, addXp } = useGamification();
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredCards, setMasteredCards] = useState([]);

  // Generate pedagogical flashcards from curatedCheatSheets or fallback to keyConcepts
  const cards = useMemo(() => {
    if (!unit) return [];
    const curated = curatedCheatSheets[unit.id];

    if (curated) {
      const cardList = [];

      // 1. Formula / Rules Cards
      if (curated.formulasAndRules?.length > 0) {
        curated.formulasAndRules.forEach((rule, idx) => {
          cardList.push({
            id: `rule-${idx}`,
            tag: `${subjectName}・必勝定理`,
            front: `💡 【${rule.name}】\n這個觀念的核心公式或定理是什麼？`,
            back: `📐 核心公式：\n${rule.formula}\n\n📝 解析說明：\n${rule.detail}`
          });
        });
      }

      // 2. Pitfalls Warning Cards
      if (curated.topPitfalls?.length > 0) {
        curated.topPitfalls.slice(0, 2).forEach((pitfall, idx) => {
          cardList.push({
            id: `pitfall-${idx}`,
            tag: `${subjectName}・段考防雷`,
            front: `⚠️ 【段考高頻易錯題】\n本單元最容易失分的陷阱是什麼？該如何破解？`,
            back: `🛡️ 名師避雷正解：\n${pitfall}`
          });
        });
      }

      // 3. Mnemonic Card
      if (curated.mnemonic) {
        cardList.push({
          id: 'mnemonic',
          tag: `${subjectName}・金牌口訣`,
          front: `⭐ 【考前 10 秒速記】\n本單元的快速記憶金牌口訣是什麼？`,
          back: `🌟 ${curated.mnemonic}\n\n進考場前默念三遍，解題快狠準！`
        });
      }

      if (cardList.length > 0) return cardList;
    }

    // Fallback: Generate cards from keyConcepts
    const concepts = unit.keyConcepts || ['核心觀念', '重要考點'];
    return concepts.map((concept, idx) => {
      let formulaHint = '🔑 解題秘訣：先判斷題型，掌握因果關係與計算規則，避免常見陷阱。';
      if (concept.includes('因數') || concept.includes('倍數')) {
        formulaHint = '📐 分裝平分切最大找 GCD（直列相乘）；週期排程拼最小找 LCM（L型通乘）！';
      } else if (concept.includes('分數') || concept.includes('除法')) {
        formulaHint = '📐 除以一個分數等於乘以其「倒數」，記得約分至最簡分數！';
      } else if (concept.includes('小數') || concept.includes('餘數')) {
        formulaHint = '⚠️ 餘數的小數點必須對齊「原來的被除數小數點」還原真實數值！';
      } else if (concept.includes('圓周') || concept.includes('圓面積')) {
        formulaHint = '📐 圓周長 = 直徑 × 3.14；圓面積 = 半徑 × 半徑 × 3.14！';
      } else if (concept.includes('速率') || concept.includes('追趕')) {
        formulaHint = '📐 距離 = 速率 × 時間；追趕時間 = 距離差 ÷ 速率差！';
      } else if (concept.includes('酸') || concept.includes('鹼')) {
        formulaHint = '🧪 酸使藍色石蕊變紅、鹼使紅色石蕊變藍；酸鹼中和產生鹽和水！';
      } else if (concept.includes('電磁') || concept.includes('磁力')) {
        formulaHint = '⚡ 線圈圈數越多、串聯電池越多、有鐵芯，電磁鐵磁力越強！';
      }

      return {
        id: `quick-${unit.id}-${idx}`,
        front: `⭐ 考點 ${idx + 1}：【${concept}】\n請思考其核心要點與常考型態？`,
        back: `💡 核心掌握：${concept}\n\n${formulaHint}`,
        tag: `${subjectName}・精華速記`
      };
    });
  }, [unit, subjectName]);

  if (!isOpen || !unit || cards.length === 0) return null;

  const currentCard = cards[cardIndex] || cards[0];
  const isCurrentMastered = masteredCards.includes(cardIndex);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    playSound('click');
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev + 1) % cards.length);
    playSound('click');
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
    playSound('click');
  };

  const handleToggleMastery = (e) => {
    e.stopPropagation();
    if (!isCurrentMastered) {
      const next = [...masteredCards, cardIndex];
      setMasteredCards(next);
      playSound('coin');
      triggerHaptic('medium');
      addCoins(5);
      addXp(15, 'flashcard_mastery');
      if (next.length === cards.length) {
        playSound('levelup');
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
    } else {
      setMasteredCards(masteredCards.filter(i => i !== cardIndex));
      playSound('click');
    }
  };

  return (
    <div
      className="lesson-flashcards-backdrop animate-fade-in"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        className="card animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '540px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          padding: '26px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-light mb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-warning font-bold text-xs flex items-center gap-1">
              <Zap size={13} />
              <span>考前速記翻牌卡</span>
            </span>
            <span className="text-xs text-secondary font-bold">
              {cardIndex + 1} / {cards.length}
            </span>
            <span className="badge badge-success text-[10px] py-0.5 font-bold">
              已熟記 {masteredCards.length} / {cards.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-secondary hover:text-primary hover:bg-tertiary transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* The Card */}
        <div
          onClick={handleFlip}
          className="cursor-pointer select-none rounded-2xl p-7 flex flex-col justify-between text-center transition-all duration-300"
          style={{
            minHeight: '240px',
            backgroundColor: isFlipped ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
            border: isFlipped ? '2px solid var(--accent-primary)' : '1.5px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div className="flex justify-between items-center text-xs text-secondary">
            <span className="badge" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              {currentCard.tag}
            </span>
            <span className="text-[11px] text-tertiary font-medium">
              點擊卡片翻面 🔄
            </span>
          </div>

          <div className="py-4 my-auto">
            <h3
              style={{
                fontSize: isFlipped ? '1.05rem' : '1.25rem',
                fontWeight: 800,
                color: isFlipped ? 'var(--accent-text)' : 'var(--text-primary)',
                lineHeight: 1.65,
                whiteSpace: 'pre-line'
              }}
            >
              {isFlipped ? currentCard.back : currentCard.front}
            </h3>

            {isFlipped && (
              <div className="flex items-center justify-center gap-2 mt-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const lang = unit.id.startsWith('eng-') ? 'en-US' : 'zh-TW';
                    speechEngine.speak(currentCard.back, { lang });
                  }}
                  className="btn-outline text-xs inline-flex items-center gap-1 py-1 px-3 rounded-full"
                >
                  <Volume2 size={13} />
                  <span>朗讀</span>
                </button>

                <button
                  onClick={handleToggleMastery}
                  className={`text-xs inline-flex items-center gap-1 py-1 px-3 rounded-full font-bold transition-all ${
                    isCurrentMastered 
                      ? 'bg-emerald-500 text-white shadow-sm' 
                      : 'btn-outline border-emerald-500 text-emerald-600'
                  }`}
                >
                  <CheckCircle2 size={13} />
                  <span>{isCurrentMastered ? '已熟記 (+15 XP)' : '標記已熟記'}</span>
                </button>
              </div>
            )}
          </div>

          <div className="text-[11px] text-secondary flex items-center justify-center gap-1">
            <RotateCw size={12} />
            <span>{isFlipped ? '再點一下翻回正面' : '點擊翻看關鍵公式、陷阱與破解心法'}</span>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between mt-5 gap-3">
          <button
            onClick={handlePrev}
            className="btn-outline flex items-center gap-1 text-xs py-2 px-3.5"
          >
            <ChevronLeft size={15} /> 上一張
          </button>

          <div className="flex items-center gap-1">
            {cards.map((_, i) => (
              <div
                key={i}
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  backgroundColor: cardIndex === i 
                    ? 'var(--accent-primary)' 
                    : masteredCards.includes(i) 
                      ? 'var(--accent-success)' 
                      : 'var(--border-strong)',
                  transition: 'background-color 0.2s'
                }}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="btn-primary flex items-center gap-1 text-xs py-2 px-3.5"
          >
            下一張 <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonQuickFlashcardsModal;
