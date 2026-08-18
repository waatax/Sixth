import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Circle, Trophy, Zap, Sparkles, ChevronRight, Gift } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/soundEffects';

const DailyQuestCard = () => {
  const todayStr = new Date().toISOString().slice(0, 10);
  const [quests, setQuests] = useState([
    { id: 'q1', text: '📖 閱讀 1 個圖解觀念（3分鐘）', link: '/lesson/math-u1', done: false, xp: 30 },
    { id: 'q2', text: '⚡ 翻閱 3 張考前速記閃卡', link: '/flashcards', done: false, xp: 30 },
    { id: 'q3', text: '🎯 完成 1 組觀念小測驗', link: '/quiz/math-u1', done: false, xp: 40 }
  ]);
  const [claimed, setClaimed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`sixth_quests_${todayStr}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setQuests(parsed.quests || quests);
        setClaimed(parsed.claimed || false);
      } catch (e) {}
    }
  }, [todayStr]);

  const toggleQuest = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = quests.map(q => q.id === id ? { ...q, done: !q.done } : q);
    setQuests(updated);
    playSound('correct');

    const allDone = updated.every(q => q.done);
    localStorage.setItem(`sixth_quests_${todayStr}`, JSON.stringify({ quests: updated, claimed }));

    if (allDone && !claimed) {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } });
      playSound('levelup');
    }
  };

  const completedCount = quests.filter(q => q.done).length;
  const progressPercent = Math.round((completedCount / quests.length) * 100);
  const allCompleted = completedCount === quests.length;

  return (
    <div 
      className="card mb-6"
      style={{
        padding: '20px 24px',
        borderRadius: 'var(--radius-xl)',
        border: '1.5px solid var(--border-light)',
        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(245, 158, 11, 0.03) 100%)',
        boxShadow: 'var(--shadow-sm)'
      }}
    >
      <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span style={{ fontSize: '1.2rem' }}>☀️</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              今日 3 分鐘微學習任務 (Daily Micro-Quests)
            </h3>
            <span className="text-xs text-secondary">
              每天只要完成 3 個微動作，積少成多，自然培養自主學習好習慣！
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="badge badge-warning flex items-center gap-1 font-bold">
            <Gift size={13} />
            全部完成獲 +100 XP
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1.5 font-bold" style={{ color: 'var(--text-secondary)' }}>
          <span>今日進度：{completedCount} / {quests.length} 完成 ({progressPercent}%)</span>
          <span style={{ color: allCompleted ? 'var(--accent-success)' : 'var(--accent-primary)' }}>
            {allCompleted ? '🎉 今日任務全部達成！太強了！' : '🌱 再完成一個就能升級！'}
          </span>
        </div>
        <div style={{ height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
          <div 
            style={{ 
              width: `${progressPercent}%`, 
              height: '100%', 
              backgroundColor: allCompleted ? 'var(--accent-success)' : 'var(--accent-warning)',
              borderRadius: 'var(--radius-full)',
              transition: 'width 0.4s ease'
            }}
          />
        </div>
      </div>

      {/* Quests List */}
      <div className="flex flex-col gap-2">
        {quests.map(quest => (
          <Link
            key={quest.id}
            to={quest.link}
            className="flex items-center justify-between p-2.5 rounded-lg transition-all card-hoverable"
            style={{
              backgroundColor: quest.done ? 'var(--accent-success-soft)' : 'var(--bg-tertiary)',
              border: '1px solid',
              borderColor: quest.done ? 'var(--accent-success)' : 'var(--border-light)',
              textDecoration: 'none'
            }}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => toggleQuest(quest.id, e)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  color: quest.done ? 'var(--accent-success)' : 'var(--text-tertiary)'
                }}
                title={quest.done ? '標記為未完成' : '打勾標記為已完成'}
              >
                {quest.done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
              </button>
              <span 
                style={{ 
                  fontSize: '0.9rem', 
                  fontWeight: quest.done ? 600 : 500,
                  color: quest.done ? 'var(--accent-success-text)' : 'var(--text-primary)',
                  textDecoration: quest.done ? 'line-through' : 'none'
                }}
              >
                {quest.text}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="badge" style={{ backgroundColor: 'var(--bg-secondary)', fontSize: '0.75rem' }}>
                +{quest.xp} XP
              </span>
              <ChevronRight size={16} style={{ color: 'var(--text-tertiary)' }} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DailyQuestCard;
