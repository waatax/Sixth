import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Flame, Timer, HelpCircle, RotateCcw } from 'lucide-react';
import { useGamification } from '../context/GamificationContext';
import { quizData } from '../data/quizData';
import { prepData } from '../data/prepData';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

const BOSS_STAGES = [
  {
    id: 'ghost',
    name: '👻 遺忘幽靈 (Phantom of Oblivion)',
    title: '第一關・記憶之森',
    subtitle: '專門吞噬學生的背誦公式與關鍵字，用扎實的基礎觀念消滅它！',
    maxHp: 600,
    timeLimitSec: 90,
    color: '#8b5cf6',
    emoji: '👻',
    reward: { xp: 180, coins: 80, gems: 1 }
  },
  {
    id: 'golem',
    name: '🗿 迷茫石巨人 (Golem of Confusion)',
    title: '第二關・邏輯迷宮',
    subtitle: '由複雜難懂的應用題凝聚而成，需要冷靜的步驟分析突破防禦！',
    maxHp: 1000,
    timeLimitSec: 120,
    color: '#0ea5e9',
    emoji: '🗿',
    reward: { xp: 280, coins: 120, gems: 2 }
  },
  {
    id: 'imp',
    name: '😈 粗心小惡魔 (Imp of Carelessness)',
    title: '第三關・陷阱深淵',
    subtitle: '最喜歡在小數點、單位換算和負號設置圈套，仔細審題擊敗它！',
    maxHp: 1400,
    timeLimitSec: 130,
    color: '#ef4444',
    emoji: '😈',
    reward: { xp: 400, coins: 180, gems: 2 }
  },
  {
    id: 'dragon',
    name: '👾 深淵混沌魔龍 (Abyss Dragon)',
    title: '終極關卡・全知神殿之巔',
    subtitle: '融合小六八大學科與國中先修考點的終極考驗，展現最強實力！',
    maxHp: 2000,
    timeLimitSec: 150,
    color: '#ec4899',
    emoji: '👾',
    reward: { xp: 650, coins: 300, gems: 4 }
  }
];

const BossBattlePage = () => {
  const { 
    activePetId, 
    inventory, 
    consumeItem, 
    recordBossVictory, 
    bossRecords
  } = useGamification();

  const [selectedBoss, setSelectedBoss] = useState(null);
  const [battleStarted, setBattleStarted] = useState(false);
  const [battleVictory, setBattleVictory] = useState(false);
  const [battleDefeat, setBattleDefeat] = useState(false);

  const [bossHp, setBossHp] = useState(600);
  const [timeLeft, setTimeLeft] = useState(90);
  const [combo, setCombo] = useState(0);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [attackAnimation, setAttackAnimation] = useState(false);
  const [lastDamage, setLastDamage] = useState(null);
  const [disabledOptions, setDisabledOptions] = useState([]);
  const [battleQuestions, setBattleQuestions] = useState([]);

  // Compile full question pool
  const allQuestionPool = useMemo(() => {
    const pool = [];
    // From all subjects quizData
    Object.entries(quizData).forEach(([uId, list]) => {
      list.forEach(q => pool.push({ ...q, source: uId }));
    });
    // From prepData
    if (prepData.mathPrep) {
      prepData.mathPrep.forEach(mp => {
        if (mp.sampleQuestions) {
          mp.sampleQuestions.forEach(sq => {
            pool.push({
              question: sq.q,
              options: sq.options,
              answerIndex: sq.ans,
              explanation: sq.exp,
              source: '國中先修'
            });
          });
        }
      });
    }
    return pool;
  }, []);

  // Timer loop
  useEffect(() => {
    if (!battleStarted || battleVictory || battleDefeat) return;

    if (timeLeft <= 0) {
      setBattleDefeat(true);
      playSound('wrong');
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [battleStarted, battleVictory, battleDefeat, timeLeft]);

  const startBattle = (boss) => {
    setSelectedBoss(boss);
    setBossHp(boss.maxHp);
    setTimeLeft(boss.timeLimitSec);
    setCombo(0);
    setBattleVictory(false);
    setBattleDefeat(false);
    setDisabledOptions([]);

    // Shuffle 25 random questions
    const shuffled = allQuestionPool.slice().sort(() => 0.5 - Math.random()).slice(0, 25);
    setBattleQuestions(shuffled);
    setCurrentQIndex(0);
    setBattleStarted(true);
    playSound('levelup');
  };

  const handleAnswer = (optionIdx) => {
    if (attackAnimation) return;

    const q = battleQuestions[currentQIndex];
    const isCorrect = optionIdx === q.answerIndex;

    if (isCorrect) {
      const newCombo = combo + 1;
      setCombo(newCombo);

      // Damage Calculation: Base 200 + Pet Buff + Combo Multiplier
      let baseDmg = 200;
      if (activePetId === 'dragon') baseDmg += 50; // Thunder dragon +25% DMG
      if (newCombo >= 4) baseDmg = Math.round(baseDmg * 1.5);
      else if (newCombo >= 2) baseDmg = Math.round(baseDmg * 1.25);

      // Random critical hit
      const isCrit = Math.random() < 0.25;
      if (isCrit) baseDmg = Math.round(baseDmg * 1.5);

      setLastDamage({ amount: baseDmg, isCrit, combo: newCombo });
      setAttackAnimation(true);
      if (isCrit) playSound('critical');
      else playSound('boss_hit');

      const nextHp = Math.max(0, bossHp - baseDmg);
      setBossHp(nextHp);

      if (nextHp <= 0) {
        // Victory!
        setTimeout(() => {
          setAttackAnimation(false);
          setBattleVictory(true);
          const elapsedSec = selectedBoss.timeLimitSec - timeLeft;
          recordBossVictory(selectedBoss.id, elapsedSec, selectedBoss.reward);
          playSound('levelup');
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.5 },
            colors: ['#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#8b5cf6']
          });
        }, 800);
      } else {
        setTimeout(() => {
          setAttackAnimation(false);
          setDisabledOptions([]);
          setCurrentQIndex(prev => (prev + 1) % battleQuestions.length);
        }, 700);
      }
    } else {
      // Wrong answer
      setCombo(0);
      playSound('wrong');
      setLastDamage({ amount: 0, isMiss: true });
      setAttackAnimation(true);
      setTimeout(() => {
        setAttackAnimation(false);
      }, 600);
    }
  };

  const handleUse5050 = () => {
    if ((inventory.hint_5050 || 0) <= 0) {
      alert('背包中沒有 50:50 提示卡了！可至星光商城購買！');
      return;
    }
    const q = battleQuestions[currentQIndex];
    const wrongIndices = q.options.map((_, i) => i).filter(i => i !== q.answerIndex);
    const twoWrongs = wrongIndices.slice(0, 2);
    setDisabledOptions(twoWrongs);
    consumeItem('hint_5050');
    playSound('coin');
  };

  const currentQ = battleQuestions[currentQIndex] || battleQuestions[0];
  const hpPercent = selectedBoss ? Math.max(0, Math.round((bossHp / selectedBoss.maxHp) * 100)) : 0;

  return (
    <div className="flex flex-col gap-6 py-4 max-w-3xl mx-auto pb-16">
      {/* Top Breadcrumb */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/shop" className="btn-pill text-xs flex items-center gap-1 font-bold text-amber-500">
            <span>🛒 道具商城</span>
          </Link>
        </div>
      </div>

      {/* Screen 1: Boss Stage Selection */}
      {!battleStarted ? (
        <div className="flex flex-col gap-6 animate-fade-in">
          <div className="text-center">
            <span className="badge badge-warning mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
              ⚔️ 知識魔王城堡挑戰賽 (Boss Castle Battle)
            </span>
            <h1 className="h1 mb-2" style={{ fontSize: 'calc(2.1rem * var(--font-scale))' }}>
              知識魔王城堡 (Boss Arena)
            </h1>
            <p className="text-secondary text-sm max-w-lg mx-auto" style={{ lineHeight: 1.7 }}>
              用極速答題發動魔法雷擊！擊敗守護魔王，贏取海量經驗值、星光金幣與稀有智慧水晶！
            </p>
          </div>

          {/* 4 Boss Cards Grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {BOSS_STAGES.map(boss => {
              const record = bossRecords[boss.id] || { defeatedCount: 0, bestTimeSec: 0 };
              const isDefeated = record.defeatedCount > 0;
              return (
                <div
                  key={boss.id}
                  className="card card-hoverable flex flex-col justify-between p-5 text-left"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1.5px solid var(--border-light)',
                    borderLeft: `6px solid ${boss.color}`,
                    background: `linear-gradient(135deg, var(--bg-secondary) 0%, ${boss.color}0a 100%)`
                  }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div
                        style={{
                          fontSize: '2.5rem',
                          width: '56px',
                          height: '56px',
                          borderRadius: '16px',
                          backgroundColor: `${boss.color}15`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {boss.emoji}
                      </div>

                      <div className="flex flex-col items-end gap-1">
                        <span className="badge text-[11px] font-bold" style={{ backgroundColor: `${boss.color}20`, color: boss.color }}>
                          {boss.title}
                        </span>
                        {isDefeated && (
                          <span className="badge badge-success text-[10px] font-bold">
                            🏆 已擊敗 {record.defeatedCount} 次
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 style={{ margin: '6px 0 4px 0', fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {boss.name}
                    </h3>
                    <p className="text-xs text-secondary mb-4" style={{ lineHeight: 1.55 }}>
                      {boss.subtitle}
                    </p>
                  </div>

                  <div>
                    {/* Rewards Pill */}
                    <div className="flex items-center justify-between text-xs py-2 px-3 mb-3 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                      <span className="font-bold text-secondary">通關獎勵：</span>
                      <div className="flex items-center gap-2 font-bold">
                        <span className="text-blue-500">+{boss.reward.xp} XP</span>
                        <span className="text-amber-500">+{boss.reward.coins} 🪙</span>
                        <span className="text-pink-500">+{boss.reward.gems} 💎</span>
                      </div>
                    </div>

                    <button
                      onClick={() => startBattle(boss)}
                      className="btn-primary w-full py-2.5 text-sm font-bold flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: boss.color,
                        borderColor: boss.color,
                        color: '#ffffff',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: `0 4px 12px ${boss.color}40`
                      }}
                    >
                      <span>🔥 挑戰魔王 (限時 {boss.timeLimitSec}s)</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : battleVictory ? (
        /* Screen 2: Victory Screen */
        <div
          className="card text-center py-10 flex flex-col items-center gap-5 max-w-xl mx-auto animate-fade-in"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '6px solid var(--accent-success)',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--accent-warning-soft)',
              padding: '24px',
              borderRadius: '50%',
              color: 'var(--accent-warning)',
              fontSize: '3.5rem'
            }}
          >
            🏆
          </div>

          <div>
            <span className="badge badge-success mb-2 font-bold">
              🎉 VICTORY！魔王已被徹底淨化！
            </span>
            <h2 className="h1 my-2" style={{ fontSize: 'calc(2.2rem * var(--font-scale))' }}>
              成功征服 {selectedBoss.name}！
            </h2>
            <p className="text-secondary text-sm">
              用時：{selectedBoss.timeLimitSec - timeLeft} 秒 | 獲得榮譽徽章與星光寶箱！
            </p>
          </div>

          {/* Loot Chest Cards */}
          <div className="flex gap-3 justify-center my-2">
            <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)', minWidth: '100px' }}>
              <div className="text-xs text-secondary">經驗值</div>
              <div className="font-bold text-lg text-blue-500">+{selectedBoss.reward.xp} XP</div>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)', minWidth: '100px' }}>
              <div className="text-xs text-secondary">星光金幣</div>
              <div className="font-bold text-lg text-amber-500">+{selectedBoss.reward.coins} 🪙</div>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)', minWidth: '100px' }}>
              <div className="text-xs text-secondary">智慧水晶</div>
              <div className="font-bold text-lg text-pink-500">+{selectedBoss.reward.gems} 💎</div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="btn-outline flex items-center gap-2" onClick={() => setBattleStarted(false)}>
              <RotateCcw size={16} /> 選擇其他魔王
            </button>
            <button className="btn-primary flex items-center gap-2" onClick={() => startBattle(selectedBoss)}>
              🔥 再戰一次
            </button>
          </div>
        </div>
      ) : battleDefeat ? (
        /* Screen 3: Defeat Screen */
        <div
          className="card text-center py-10 flex flex-col items-center gap-5 max-w-xl mx-auto animate-fade-in"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '6px solid var(--accent-error)',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div style={{ fontSize: '4rem' }}>⏰</div>
          <div>
            <span className="badge badge-error mb-2 font-bold">時間耗盡・挑戰未完成</span>
            <h2 className="h2 my-2">別灰心！多加練習觀念隨時再來！</h2>
            <p className="text-secondary text-sm">
              魔王還剩 {bossHp} 點 HP。可以在商店購買「50:50 提示卡」輔助戰鬥！
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="btn-outline" onClick={() => setBattleStarted(false)}>
              返回魔王選單
            </button>
            <button className="btn-primary" onClick={() => startBattle(selectedBoss)}>
              <RotateCcw size={16} /> 立即重新挑戰
            </button>
          </div>
        </div>
      ) : (
        /* Screen 4: Active Battle Arena */
        <div className="flex flex-col gap-4 animate-fade-in">
          {/* Top Status Bar: Boss HP & Countdown Timer */}
          <div
            className="card p-4 flex flex-col gap-3"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-xl)',
              border: '2px solid var(--border-light)'
            }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '1.8rem' }}>{selectedBoss.emoji}</span>
                <div>
                  <div className="font-extrabold text-sm" style={{ color: 'var(--text-primary)' }}>
                    {selectedBoss.name}
                  </div>
                  <div className="text-xs text-secondary">
                    HP: {bossHp} / {selectedBoss.maxHp} ({hpPercent}%)
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {combo > 1 && (
                  <div className="badge badge-warning font-bold text-xs flex items-center gap-1 animate-pulse">
                    <Flame size={14} />
                    <span>COMBO x{combo}</span>
                  </div>
                )}

                <div
                  className="flex items-center gap-1 font-bold text-base px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: timeLeft < 20 ? 'rgba(239, 68, 68, 0.15)' : 'var(--bg-tertiary)',
                    color: timeLeft < 20 ? 'var(--accent-error)' : 'var(--accent-primary)'
                  }}
                >
                  <Timer size={16} />
                  <span>{timeLeft}s</span>
                </div>
              </div>
            </div>

            {/* Boss HP Bar */}
            <div style={{ height: '14px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '7px', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
              <div
                style={{
                  width: `${hpPercent}%`,
                  height: '100%',
                  background: hpPercent < 30 ? '#ef4444' : 'linear-gradient(90deg, #f59e0b 0%, #ec4899 100%)',
                  borderRadius: '7px',
                  transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>
          </div>

          {/* Interactive Battle Stage */}
          <div
            className="card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden"
            style={{
              minHeight: '200px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid var(--border-light)',
              background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, var(--bg-secondary) 80%)'
            }}
          >
            {/* Animated Boss Sprite */}
            <div
              className={`select-none transition-transform ${attackAnimation ? 'scale-125 shake' : 'hover:scale-105'}`}
              style={{
                fontSize: '5rem',
                filter: attackAnimation ? 'drop-shadow(0 0 20px #ef4444)' : 'drop-shadow(0 8px 16px rgba(0,0,0,0.2))',
                animation: attackAnimation ? 'none' : 'float 2.5s ease-in-out infinite'
              }}
            >
              {selectedBoss.emoji}
            </div>

            {/* Floating Damage Popup */}
            {lastDamage && attackAnimation && (
              <div
                className="animate-fade-in font-black"
                style={{
                  position: 'absolute',
                  top: '25%',
                  fontSize: lastDamage.isCrit ? '2rem' : '1.5rem',
                  color: lastDamage.isMiss ? '#94a3b8' : lastDamage.isCrit ? '#ec4899' : '#f59e0b',
                  textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  animation: 'float 0.8s ease-out'
                }}
              >
                {lastDamage.isMiss ? 'MISS!' : `${lastDamage.isCrit ? '💥 CRITICAL! ' : '⚡ -'}${lastDamage.amount} DMG`}
              </div>
            )}
          </div>

          {/* Battle Question Card */}
          {currentQ && (
            <div
              className="card p-6 flex flex-col gap-4"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-xl)',
                border: '1.5px solid var(--border-light)'
              }}
            >
              {/* Question Header & 50:50 Lifeline Button */}
              <div className="flex justify-between items-center text-xs">
                <span className="badge badge-accent font-bold">
                  題目 {currentQIndex + 1} ({currentQ.source || '核心觀念'})
                </span>

                <button
                  onClick={handleUse5050}
                  className="btn-outline flex items-center gap-1 text-xs py-1 px-3 font-bold"
                  style={{
                    backgroundColor: 'var(--accent-warning-soft)',
                    borderColor: 'var(--accent-warning)',
                    color: 'var(--accent-warning-text)'
                  }}
                  title="消耗 1 張 50:50 提示卡排除 2 個錯誤選項"
                >
                  <HelpCircle size={14} />
                  <span>50:50 排除卡 ({inventory.hint_5050 || 0})</span>
                </button>
              </div>

              {/* Question Text */}
              <h3 className="h3" style={{ fontSize: 'calc(1.15rem * var(--font-scale))', lineHeight: 1.5, margin: 0 }}>
                {currentQ.question}
              </h3>

              {/* 4 Answer Choice Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-2">
                {currentQ.options.map((opt, i) => {
                  const isDisabled = disabledOptions.includes(i);
                  return (
                    <button
                      key={i}
                      disabled={isDisabled || attackAnimation}
                      onClick={() => handleAnswer(i)}
                      className="btn-outline text-left p-3.5 flex items-center justify-between transition-all"
                      style={{
                        borderRadius: 'var(--radius-md)',
                        fontSize: 'calc(0.92rem * var(--font-scale))',
                        opacity: isDisabled ? 0.3 : 1,
                        textDecoration: isDisabled ? 'line-through' : 'none',
                        cursor: isDisabled ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <span>{opt}</span>
                      <Zap size={14} style={{ opacity: 0.6 }} />
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BossBattlePage;
