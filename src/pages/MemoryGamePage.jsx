import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RotateCcw, Trophy, Sparkles, Timer, Flame, Award, CheckCircle2 } from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

const DECKS = {
  math: {
    id: 'math',
    name: '🧮 數學算理公式',
    pairs: [
      { id: 'm1', a: '圓面積公式', b: '半徑 × 半徑 × 3.14' },
      { id: 'm2', b: '底面積 × 柱高', a: '柱體體積公式' },
      { id: 'm3', a: '比值定義', b: '前項 ÷ 後項' },
      { id: 'm4', a: '圓周長公式', b: '直徑 × 3.14' },
      { id: 'm5', a: '速率公式', b: '距離 ÷ 時間' },
      { id: 'm6', a: '短除法求GCD', b: '左側所有質因數相乘' }
    ]
  },
  science: {
    id: 'science',
    name: '🔬 自然科學定律',
    pairs: [
      { id: 's1', a: '熱傳導', b: '固體物質內部熱傳遞' },
      { id: 's2', a: '熱對流', b: '流體熱升冷降循環' },
      { id: 's3', a: '槓桿平衡原理', b: '施力×施力臂 = 抗力×抗力臂' },
      { id: 's4', a: '鐵生鏽必要條件', b: '水 ＋ 氧氣' },
      { id: 's5', a: '定滑輪特點', b: '不省力，但能改變施力方向' },
      { id: 's6', a: '電解質水溶液', b: '溶於水後能夠導電' }
    ]
  },
  mandarin: {
    id: 'mandarin',
    name: '📖 國語成語修辭',
    pairs: [
      { id: 'c1', a: '揠苗助長', b: '急於求成反而壞事' },
      { id: 'c2', a: '守株待兔', b: '心存僥倖不願努力' },
      { id: 'c3', a: '擬人修辭', b: '將事物賦予人的情感與動作' },
      { id: 'c4', a: '排比修辭', b: '三個以上結構相同句子排列' },
      { id: 'c5', a: '設問修辭', b: '自問自答或無疑而問' },
      { id: 'c6', a: '以小見大', b: '從小細節反映深遠大道理' }
    ]
  },
  gept: {
    id: 'gept',
    name: '🇬🇧 GEPT 核心單字',
    pairs: [
      { id: 'e1', a: 'Accomplish', b: '達成 / 完成' },
      { id: 'e2', a: 'Environment', b: '自然環境' },
      { id: 'e3', a: 'Celebrate', b: '慶祝 / 歡度' },
      { id: 'e4', a: 'Delicious', b: '美味的 / 可口的' },
      { id: 'e5', a: 'Protect', b: '保護 / 防護' },
      { id: 'e6', a: 'Challenge', b: '挑戰 / 考驗' }
    ]
  }
};

const MemoryGamePage = () => {
  const { addCoins, addXp } = useGamification();
  const [selectedDeckKey, setSelectedDeckKey] = useState('math');
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCardIds, setMatchedCardIds] = useState([]);
  const [flipCount, setFlipCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [timeSec, setTimeSec] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Initialize Cards
  const initGame = (deckKey) => {
    const deck = DECKS[deckKey] || DECKS.math;
    const cardsList = [];

    deck.pairs.forEach((pair, idx) => {
      cardsList.push({ uid: `${pair.id}_a`, pairId: pair.id, text: pair.a, type: 'a' });
      cardsList.push({ uid: `${pair.id}_b`, pairId: pair.id, text: pair.b, type: 'b' });
    });

    // Shuffle
    const shuffled = cardsList.sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setFlippedCards([]);
    setMatchedCardIds([]);
    setFlipCount(0);
    setCombo(0);
    setTimeSec(0);
    setIsCompleted(false);
    setIsTimerRunning(false);
  };

  useEffect(() => {
    initGame(selectedDeckKey);
  }, [selectedDeckKey]);

  // Timer loop
  useEffect(() => {
    let timer;
    if (isTimerRunning && !isCompleted) {
      timer = setInterval(() => setTimeSec(t => t + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, isCompleted]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2) return;
    if (flippedCards.includes(index)) return;
    if (matchedCardIds.includes(cards[index].pairId)) return;

    if (!isTimerRunning) setIsTimerRunning(true);

    playSound('click');
    const newFlipped = [...flippedCards, index];
    setFlippedCards(newFlipped);
    setFlipCount(c => c + 1);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      const firstCard = cards[firstIdx];
      const secondCard = cards[secondIdx];

      if (firstCard.pairId === secondCard.pairId) {
        // Matched!
        const nextCombo = combo + 1;
        setCombo(nextCombo);
        playSound('coin');
        setMatchedCardIds(prev => [...prev, firstCard.pairId]);
        setFlippedCards([]);

        // Check if all matched
        if (matchedCardIds.length + 1 === DECKS[selectedDeckKey].pairs.length) {
          setIsCompleted(true);
          setIsTimerRunning(false);
          playSound('levelup');
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899']
          });
          addCoins(50);
          addXp(120, 'memory_game');
        }
      } else {
        // Mismatch
        setCombo(0);
        setTimeout(() => {
          setFlippedCards([]);
        }, 900);
      }
    }
  };

  const starsEarned = flipCount <= 14 ? 3 : flipCount <= 20 ? 2 : 1;

  return (
    <div className="flex flex-col gap-6 py-4 max-w-2xl mx-auto pb-16">
      {/* Top Breadcrumb */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>
        <button onClick={() => initGame(selectedDeckKey)} className="btn-outline text-xs flex items-center gap-1">
          <RotateCcw size={13} />
          <span>重新發牌</span>
        </button>
      </div>

      {/* Header */}
      <div className="text-center">
        <span className="badge badge-accent mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          🃏 記憶連擊翻牌對決 (Memory Flip Arena)
        </span>
        <h1 className="h1 mb-2" style={{ fontSize: 'calc(1.8rem * var(--font-scale))' }}>
          記憶翻牌配對樂
        </h1>
        <p className="text-secondary text-sm" style={{ lineHeight: 1.6 }}>
          翻開卡牌尋找對應的觀念與公式！連續配對成功可獲金幣暴擊加成！
        </p>
      </div>

      {/* Subject Selector Tabs */}
      <div className="flex justify-center gap-2 flex-wrap border-b pb-3 border-light">
        {Object.entries(DECKS).map(([key, deck]) => (
          <button
            key={key}
            onClick={() => setSelectedDeckKey(key)}
            className={`btn-pill ${selectedDeckKey === key ? 'active' : ''}`}
          >
            {deck.name}
          </button>
        ))}
      </div>

      {/* Score & Timer Dashboard */}
      <div
        className="card p-3 flex justify-between items-center text-xs font-bold"
        style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)' }}
      >
        <div className="flex items-center gap-2">
          <Timer size={16} className="text-primary" />
          <span>用時：{timeSec} 秒</span>
        </div>

        <div className="flex items-center gap-2">
          <span>翻牌次數：{flipCount} 次</span>
          {combo > 1 && (
            <span className="badge badge-warning flex items-center gap-1 font-bold">
              <Flame size={12} />
              COMBO x{combo}
            </span>
          )}
        </div>

        <div className="text-emerald-500">
          已配對：{matchedCardIds.length} / {DECKS[selectedDeckKey].pairs.length} 組
        </div>
      </div>

      {/* Cards 3x4 / 4x3 Grid */}
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {cards.map((card, idx) => {
          const isFlipped = flippedCards.includes(idx) || matchedCardIds.includes(card.pairId);
          const isMatched = matchedCardIds.includes(card.pairId);

          return (
            <div
              key={card.uid}
              onClick={() => handleCardClick(idx)}
              className="card cursor-pointer select-none transition-all flex items-center justify-center p-3 text-center"
              style={{
                minHeight: '100px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: isMatched
                  ? 'var(--accent-success-soft)'
                  : isFlipped
                  ? 'var(--bg-secondary)'
                  : 'var(--bg-tertiary)',
                border: isMatched
                  ? '2px solid var(--accent-success)'
                  : isFlipped
                  ? '2px solid var(--accent-primary)'
                  : '1.5px solid var(--border-light)',
                transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(0deg)',
                boxShadow: isFlipped ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                fontWeight: 700,
                fontSize: 'calc(0.88rem * var(--font-scale))',
                color: isMatched
                  ? 'var(--accent-success-text)'
                  : isFlipped
                  ? 'var(--text-primary)'
                  : 'var(--text-tertiary)'
              }}
            >
              {isFlipped ? (
                <div className="animate-fade-in flex flex-col items-center justify-center gap-1">
                  <span>{card.text}</span>
                  {isMatched && <CheckCircle2 size={16} style={{ color: 'var(--accent-success)' }} />}
                </div>
              ) : (
                <div style={{ fontSize: '1.8rem', opacity: 0.5 }}>
                  🌟
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Modal */}
      {isCompleted && (
        <div
          className="card text-center p-6 flex flex-col items-center gap-4 animate-fade-in mt-4"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '6px solid var(--accent-success)',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div style={{ fontSize: '3rem' }}>🏆</div>
          <div>
            <h3 className="h2 my-1">太厲害了！配對全部成功！</h3>
            <p className="text-xs text-secondary">
              用時 {timeSec} 秒，僅翻牌 {flipCount} 次！獲得評分：{'⭐'.repeat(starsEarned)}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="badge badge-warning font-bold text-sm">+50 🪙 金幣</span>
            <span className="badge badge-success font-bold text-sm">+120 ⚡ XP</span>
          </div>

          <div className="flex gap-3 mt-2">
            <button className="btn-primary" onClick={() => initGame(selectedDeckKey)}>
              <RotateCcw size={16} /> 再玩一局
            </button>
            <Link to="/" className="btn-outline">
              返回課程首頁
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGamePage;
