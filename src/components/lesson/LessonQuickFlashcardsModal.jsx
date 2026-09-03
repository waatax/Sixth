import { useState } from 'react';
import { RotateCw, CheckCircle2, ChevronLeft, ChevronRight, X, Volume2, Sparkles, Trophy } from 'lucide-react';
import { speechEngine } from '../../utils/speechHelper';
import { playSound } from '../../utils/soundEffects';
import confetti from 'canvas-confetti';

const LessonQuickFlashcardsModal = ({ isOpen, onClose, unit, subjectName }) => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewedCards, setReviewedCards] = useState([]);

  if (!isOpen || !unit) return null;

  // Generate 3-5 flashcards dynamically from keyConcepts
  const concepts = unit.keyConcepts || ['核心觀念', '重要考點'];
  const cards = concepts.map((concept, idx) => ({
    id: `quick-${unit.id}-${idx}`,
    front: `⭐ 考點 ${idx + 1}：${concept}`,
    back: `💡 本課核心概念：【${concept}】\n\n掌握此觀念是解決段考與評量應用的關鍵基石！請務必熟記相關計算規則與定理口訣。`,
    tag: `${subjectName}・精華速記`
  }));

  const currentCard = cards[cardIndex] || cards[0];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    playSound('click');
  };

  const handleNext = () => {
    setIsFlipped(false);
    if (!reviewedCards.includes(cardIndex)) {
      const nextReviewed = [...reviewedCards, cardIndex];
      setReviewedCards(nextReviewed);
      if (nextReviewed.length === cards.length) {
        playSound('levelup');
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      }
    }
    setCardIndex((prev) => (prev + 1) % cards.length);
    playSound('click');
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCardIndex((prev) => (prev - 1 + cards.length) % cards.length);
    playSound('click');
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
          maxWidth: '520px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          padding: '28px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-light mb-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-warning font-bold text-xs">
              ⚡ 本單元考前速記翻牌卡
            </span>
            <span className="text-xs text-secondary font-bold">
              {cardIndex + 1} / {cards.length}
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
          className="cursor-pointer select-none rounded-2xl p-8 flex flex-col justify-between text-center transition-all duration-300"
          style={{
            minHeight: '220px',
            backgroundColor: isFlipped ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
            border: isFlipped ? '2px solid var(--accent-primary)' : '1.5px solid var(--border-light)',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div className="flex justify-between items-center text-xs text-secondary">
            <span className="badge" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              {currentCard.tag}
            </span>
            <span className="text-[11px] text-tertiary">
              點擊卡片翻面 🔄
            </span>
          </div>

          <div className="py-4 my-auto">
            <h3
              style={{
                fontSize: isFlipped ? '1.1rem' : '1.35rem',
                fontWeight: 800,
                color: isFlipped ? 'var(--accent-text)' : 'var(--text-primary)',
                lineHeight: 1.6,
                whiteSpace: 'pre-line'
              }}
            >
              {isFlipped ? currentCard.back : currentCard.front}
            </h3>

            {isFlipped && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speechEngine.speak(currentCard.back, { lang: unit.id.startsWith('eng-') ? 'en-US' : 'zh-TW' });
                }}
                className="btn-outline mt-3 text-xs inline-flex items-center gap-1 py-1 px-3 rounded-full"
              >
                <Volume2 size={13} />
                <span>聆聽發音說明</span>
              </button>
            )}
          </div>

          <div className="text-[11px] text-secondary flex items-center justify-center gap-1">
            <RotateCw size={12} />
            <span>{isFlipped ? '再點一下翻回正面' : '點擊翻看關鍵觀念解析'}</span>
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
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: cardIndex === i ? 'var(--accent-primary)' : reviewedCards.includes(i) ? 'var(--accent-success)' : 'var(--border-strong)'
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
