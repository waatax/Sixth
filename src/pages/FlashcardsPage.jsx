import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { flashcardsData } from '../data/flashcardsData';
import { RotateCw, CheckCircle2, ChevronLeft, ChevronRight, ArrowLeft, Zap, Sparkles, Trophy, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

const FlashcardsPage = () => {
  const [currentSubject, setCurrentSubject] = useState('math');
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState([]);

  const cards = flashcardsData[currentSubject] || [];
  const currentCard = cards[cardIndex] || cards[0];

  useEffect(() => {
    try {
      const saved = localStorage.getItem(`sixth_mastered_cards_${currentSubject}`);
      if (saved) {
        setMasteredIds(JSON.parse(saved));
      } else {
        setMasteredIds([]);
      }
    } catch (e) {}
  }, [currentSubject]);

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

  const handleMastered = () => {
    if (!currentCard) return;
    if (!masteredIds.includes(currentCard.id)) {
      const updated = [...masteredIds, currentCard.id];
      setMasteredIds(updated);
      localStorage.setItem(`sixth_mastered_cards_${currentSubject}`, JSON.stringify(updated));

      // XP reward
      try {
        const savedStats = localStorage.getItem('sixth_student_stats');
        if (savedStats) {
          const parsed = JSON.parse(savedStats);
          parsed.xp = (parsed.xp || 0) + 10;
          localStorage.setItem('sixth_student_stats', JSON.stringify(parsed));
        }
      } catch (e) {}

      playSound('correct');

      if (updated.length === cards.length) {
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
        playSound('levelup');
      }
    } else {
      playSound('click');
    }
    handleNext();
  };

  const handleResetSubject = () => {
    localStorage.removeItem(`sixth_mastered_cards_${currentSubject}`);
    setMasteredIds([]);
    setCardIndex(0);
    setIsFlipped(false);
    playSound('click');
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
        playSound('click');
      } else if (e.key === 'ArrowRight') {
        setIsFlipped(false);
        setCardIndex((prev) => (prev + 1) % (cards.length || 1));
        playSound('click');
      } else if (e.key === 'ArrowLeft') {
        setIsFlipped(false);
        setCardIndex((prev) => (prev - 1 + (cards.length || 1)) % (cards.length || 1));
        playSound('click');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cards.length]);

  const isCurrentMastered = currentCard && masteredIds.includes(currentCard.id);
  const masteryPercent = cards.length > 0 ? Math.round((masteredIds.length / cards.length) * 100) : 0;

  return (
    <div className="flex flex-col gap-6 py-4 max-w-2xl mx-auto">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>
        {masteredIds.length > 0 && (
          <button 
            onClick={handleResetSubject}
            className="text-xs text-secondary hover:text-primary flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span>重置熟練度</span>
          </button>
        )}
      </div>

      {/* Header */}
      <div className="text-center">
        <span className="badge badge-warning mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          ⚡ 考前 3 分鐘・高頻公式與關鍵觀念速記閃卡
        </span>
        <h1 className="h1 mb-2" style={{ fontSize: 'calc(1.8rem * var(--font-scale))' }}>
          速記閃卡 (Flashcards)
        </h1>
        <p className="text-secondary text-sm" style={{ lineHeight: 1.6 }}>
          點擊卡片或按「空白鍵」翻看背面詳解，按「左右箭頭」切換閃卡！
        </p>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex justify-center gap-2 flex-wrap border-b pb-3" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <button
          className={`btn-pill ${currentSubject === 'math' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('math'); setCardIndex(0); setIsFlipped(false); }}
        >
          🧮 數學閃卡 ({flashcardsData.math.length})
        </button>
        <button
          className={`btn-pill ${currentSubject === 'science' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('science'); setCardIndex(0); setIsFlipped(false); }}
        >
          🔬 自然閃卡 ({flashcardsData.science.length})
        </button>
        <button
          className={`btn-pill ${currentSubject === 'mandarin' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('mandarin'); setCardIndex(0); setIsFlipped(false); }}
        >
          📖 國語閃卡 ({flashcardsData.mandarin.length})
        </button>
        <button
          className={`btn-pill ${currentSubject === 'english' ? 'active' : ''}`}
          onClick={() => { setCurrentSubject('english'); setCardIndex(0); setIsFlipped(false); }}
        >
          🇬🇧 英語閃卡 ({flashcardsData.english.length})
        </button>
      </div>

      {/* Mastery Progress Bar */}
      <div className="card p-3" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}>
        <div className="flex justify-between text-xs mb-1.5 font-bold" style={{ color: 'var(--text-secondary)' }}>
          <span>熟練進度：已掌握 {masteredIds.length} / {cards.length} 張 ({masteryPercent}%)</span>
          <span style={{ color: masteryPercent === 100 ? 'var(--accent-success)' : 'var(--accent-warning-text)' }}>
            {masteryPercent === 100 ? '🎉 全部熟練掌握！' : '⭐ 每掌握 1 張獲 +10 XP'}
          </span>
        </div>
        <div style={{ height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${masteryPercent}%`, 
              height: '100%', 
              backgroundColor: masteryPercent === 100 ? 'var(--accent-success)' : 'var(--accent-warning)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.3s ease'
            }} 
          />
        </div>
      </div>

      {/* The Flashcard */}
      {currentCard && (
        <div className="flex flex-col items-center gap-4">
          <div
            className="card cursor-pointer select-none animate-fade-in w-full text-center flex flex-col justify-between"
            onClick={handleFlip}
            style={{
              minHeight: '260px',
              padding: '32px 28px',
              borderRadius: 'var(--radius-xl)',
              backgroundColor: isFlipped ? 'var(--bg-secondary)' : 'var(--bg-tertiary)',
              border: isFlipped ? '2px solid var(--accent-primary)' : '1.5px solid var(--border-light)',
              boxShadow: 'var(--shadow-md)',
              transition: 'all var(--transition-normal)'
            }}
          >
            {/* Top Indicator */}
            <div className="flex justify-between items-center text-xs text-secondary mb-2">
              <span className="badge" style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)', fontWeight: 700 }}>
                {currentCard.tag}
              </span>
              <span className="font-bold">
                第 {cardIndex + 1} / {cards.length} 張 {isCurrentMastered && '✅ 已掌握'}
              </span>
            </div>

            {/* Main Content */}
            <div className="py-6 flex flex-col items-center justify-center" style={{ flex: 1 }}>
              <div 
                style={{ 
                  fontSize: isFlipped ? '1.15rem' : '1.35rem', 
                  fontWeight: 700, 
                  color: isFlipped ? 'var(--accent-primary)' : 'var(--text-primary)',
                  lineHeight: 1.6,
                  whiteSpace: 'pre-line'
                }}
              >
                {isFlipped ? currentCard.back : currentCard.front}
              </div>
            </div>

            {/* Bottom Hint */}
            <div className="flex justify-center items-center gap-1.5 text-xs text-tertiary mt-2">
              <RotateCw size={13} />
              <span>點擊卡片翻面查看 {isFlipped ? '題目' : '答案與公式'}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center w-full gap-3 flex-wrap">
            <button
              onClick={handlePrev}
              className="btn-outline flex items-center gap-1"
              style={{ padding: '10px 18px' }}
            >
              <ChevronLeft size={16} /> 上一張
            </button>

            <button
              onClick={handleMastered}
              className="btn-primary flex items-center gap-2 font-bold"
              style={{ 
                padding: '10px 24px', 
                backgroundColor: isCurrentMastered ? 'var(--accent-success)' : 'var(--accent-warning)',
                borderColor: isCurrentMastered ? 'var(--accent-success)' : 'var(--accent-warning)'
              }}
            >
              <CheckCircle2 size={18} />
              <span>{isCurrentMastered ? '已掌握 (再看下一張)' : '我記住了！(+10 XP)'}</span>
            </button>

            <button
              onClick={handleNext}
              className="btn-outline flex items-center gap-1"
              style={{ padding: '10px 18px' }}
            >
              下一張 <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardsPage;
