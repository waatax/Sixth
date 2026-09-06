import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { 
  Zap, 
  Timer, 
  Globe, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  CheckCircle2, 
  ShieldCheck, 
  Smile, 
  GraduationCap, 
  Award,
  Swords,
  ShoppingBag,
  Layers,
  Gift,
  Heart,
  Flame
} from 'lucide-react';
import GuidedStartWizard from '../components/common/GuidedStartWizard';
import DailyQuestCard from '../components/common/DailyQuestCard';
import DailyLuckyWheel from '../components/gamification/DailyLuckyWheel';
import PetSanctuaryModal from '../components/gamification/PetSanctuaryModal';
import GachaLootModal from '../components/gamification/GachaLootModal';
import { useGamification } from '../context/GamificationContext';
import { triggerHaptic, playSound, dispatchDynamicIsland } from '../utils/soundEffects';

const HomePage = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isWheelOpen, setIsWheelOpen] = useState(false);
  const [isSanctuaryOpen, setIsSanctuaryOpen] = useState(false);
  const [isGachaOpen, setIsGachaOpen] = useState(false);

  const { 
    coins, 
    gems, 
    level, 
    currentTitle, 
    activePetTemplate, 
    currentPetStats, 
    unitStars 
  } = useGamification();

  const categories = [
    { id: 'all', label: '全部八大學科 (8)', icon: '📚' },
    { id: 'core', label: '核心基石 (國・數・自・社)', icon: '🌱' },
    { id: 'literacy', label: '素養探索 (英・藝・體・綜)', icon: '🌟' }
  ];

  const filteredSubjects = coursesData.subjects.filter(subject => {
    if (categoryFilter === 'all') return true;
    if (categoryFilter === 'core') {
      return ['mandarin', 'math', 'science', 'social'].includes(subject.id);
    }
    if (categoryFilter === 'literacy') {
      return ['english', 'arts', 'health_pe', 'integrative'].includes(subject.id);
    }
    return true;
  });

  const currentEvolution = activePetTemplate?.evolutions.slice().reverse().find(e => (currentPetStats?.level || 1) >= e.minLevel) || activePetTemplate?.evolutions[0];

  return (
    <div className="flex flex-col gap-6 py-2 pb-16">
      {/* 2026 New Semester Hero Banner */}
      <div 
        className="card"
        style={{
          padding: '24px 28px',
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(37, 99, 235, 0.06) 50%, rgba(236, 72, 153, 0.05) 100%)',
          border: '1.5px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div style={{ maxWidth: '720px' }}>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="badge badge-accent" style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontWeight: 800 }}>
                ✨ 2026 新學期啟航・沉浸式自主學習護照
              </span>
              <span className="badge badge-success flex items-center gap-1 font-bold">
                <ShieldCheck size={13} />
                108 課綱全科圖解・零壓力通關
              </span>
            </div>
            <h1 className="h1" style={{ margin: 0, fontSize: 'calc(1.85rem * var(--font-scale))', letterSpacing: '-0.02em' }}>
              歡迎回來，{currentTitle}！一起展開知識大冒險！
            </h1>
            <p className="text-secondary" style={{ marginTop: '8px', fontSize: 'calc(0.96rem * var(--font-scale))', lineHeight: 1.65 }}>
              每個單元都配備了 <strong style={{ color: 'var(--accent-primary)' }}>「視覺概念圖解」</strong>、<strong style={{ color: 'var(--accent-warning-text)' }}>「魔王城堡挑戰」</strong> 與 <strong style={{ color: '#ec4899' }}>「守護神獸養成」</strong>。在遊戲中自然掌握算理與核心素養！
            </p>
          </div>

          {/* Quick Lucky Wheel, Gacha, Shorts & Pet Sanctuary Action Box */}
          <div className="flex flex-wrap gap-2 sm:justify-end w-full sm:w-auto">
            <Link
              to="/shorts"
              onClick={() => {
                triggerHaptic('selection');
                playSound('ios_tap');
              }}
              className="ios-pressable btn-primary flex items-center justify-center gap-1.5 text-xs font-black"
              style={{
                padding: '9px 16px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#ec4899',
                borderColor: '#ec4899',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(236, 72, 153, 0.35)',
                textDecoration: 'none'
              }}
            >
              <span>📱 知識短影音 (Reels)</span>
            </Link>

            <Link
              to="/labs"
              onClick={() => {
                triggerHaptic('selection');
                playSound('ios_tap');
              }}
              className="ios-pressable btn-primary flex items-center justify-center gap-1.5 text-xs font-black"
              style={{
                padding: '9px 16px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#10b981',
                borderColor: '#10b981',
                color: '#ffffff',
                boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
                textDecoration: 'none'
              }}
            >
              <span>🔬 互動實驗室 (Labs)</span>
            </Link>

            <button
              onClick={() => {
                setIsGachaOpen(true);
                triggerHaptic('medium');
                playSound('chest_open');
                dispatchDynamicIsland({ title: '神獸轉蛋盲盒', subtitle: 'SSR 奇蹟光柱召喚中', icon: '🎁' });
              }}
              className="ios-pressable btn-primary flex items-center justify-center gap-1.5 text-xs font-black"
              style={{
                padding: '9px 16px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#f59e0b',
                borderColor: '#f59e0b',
                color: '#000000',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.35)'
              }}
            >
              <span>🎁 神獸轉蛋機</span>
            </button>

            <button
              onClick={() => {
                setIsWheelOpen(true);
                triggerHaptic('medium');
                playSound('ios_tap');
                dispatchDynamicIsland({ title: '每日幸運大轉盤', subtitle: '連勝每日補給', icon: '🎡' });
              }}
              className="ios-pressable btn-outline flex items-center justify-center gap-1.5 text-xs font-bold"
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <span>🎡 幸運轉盤</span>
            </button>

            <button
              onClick={() => {
                setIsSanctuaryOpen(true);
                triggerHaptic('light');
                playSound('pet_happy');
                dispatchDynamicIsland({ title: '守護神獸庇護所', subtitle: '撫摸與餵食進化', icon: currentEvolution?.emoji || '🦊' });
              }}
              className="ios-pressable btn-outline flex items-center justify-center gap-1.5 text-xs font-bold"
              style={{
                padding: '8px 14px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <span>{currentEvolution?.emoji || '🦊'} 守護神獸 (Lv.{currentPetStats?.level})</span>
            </button>
          </div>
        </div>
      </div>

      {/* ☀️ Daily 3-Minute Micro-Quests Card */}
      <DailyQuestCard />

      {/* 🏰 Gamified Arena & Tools Showcase Grid (短影音、實驗室、魔王城堡、記憶翻牌、星光商城、轉蛋) */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.25rem * var(--font-scale))' }}>
              🎮 沉浸式遊戲化學習殿堂
            </h2>
            <span className="badge badge-accent font-bold">2026 旗艦新功能</span>
          </div>
        </div>

        <div
          className="grid gap-3"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))' }}
        >
          {/* Card 1: Shorts Reels */}
          <Link
            to="/shorts"
            className="card card-hoverable flex items-start gap-3.5 p-4"
            style={{
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderLeft: '5px solid #ec4899',
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(236, 72, 153, 0.08) 100%)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(236, 72, 153, 0.15)',
                color: '#ec4899',
                padding: '12px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Zap size={24} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-base text-primary">
                <span>知識短影音</span>
                <span className="badge badge-error text-[10px] font-bold">HOT</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                TikTok 直式全螢幕！30秒微學習+突擊快答
              </div>
            </div>
          </Link>

          {/* Card 2: Interactive Labs */}
          <Link
            to="/labs"
            className="card card-hoverable flex items-start gap-3.5 p-4"
            style={{
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderLeft: '5px solid #10b981',
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(16, 185, 129, 0.08) 100%)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                padding: '12px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Sparkles size={24} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-base text-primary">
                <span>互動探究實驗</span>
                <span className="badge badge-success text-[10px] font-bold">PhET</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                圓面積切割、槓桿天平、酸鹼變色動態模擬
              </div>
            </div>
          </Link>

          {/* Card 3: Boss Castle */}
          <Link
            to="/boss-battle"
            className="card card-hoverable flex items-start gap-3.5 p-4"
            style={{
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderLeft: '5px solid #8b5cf6',
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(139, 92, 246, 0.08) 100%)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(139, 92, 246, 0.15)',
                color: '#8b5cf6',
                padding: '12px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Swords size={24} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-base text-primary">
                <span>魔王城堡挑戰</span>
                <span className="badge text-[10px] font-bold text-purple-600 bg-purple-100">RPG</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                極速答題魔法雷擊！消滅四大守護魔王奪水晶
              </div>
            </div>
          </Link>

          {/* Card 4: Memory Game */}
          <Link
            to="/memory-game"
            className="card card-hoverable flex items-start gap-3.5 p-4"
            style={{
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderLeft: '5px solid #3b82f6',
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(59, 130, 246, 0.08) 100%)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                color: '#3b82f6',
                padding: '12px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Layers size={24} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-base text-primary">
                <span>記憶翻牌對決</span>
                <span className="badge badge-success text-[10px] font-bold">NEW</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                公式、成語與GEPT字彙連擊翻牌快速配對
              </div>
            </div>
          </Link>

          {/* Card 5: Shop */}
          <Link
            to="/shop"
            className="card card-hoverable flex items-start gap-3.5 p-4"
            style={{
              borderRadius: 'var(--radius-xl)',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-light)',
              borderLeft: '5px solid #f59e0b',
              background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(245, 158, 11, 0.08) 100%)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(245, 158, 11, 0.15)',
                color: '#f59e0b',
                padding: '12px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <ShoppingBag size={24} />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-extrabold text-base text-primary">
                <span>星光道具商城</span>
                <span className="badge text-[10px] font-bold text-amber-600 bg-amber-100">🪙 {coins}</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                兌換雙倍經驗卡、50:50提示卡與神獸美食
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 8 Major Learning Areas Grid with Category Filters & Star Badges */}
      <section className="mt-2">
        <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
          <div>
            <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.35rem * var(--font-scale))', whiteSpace: 'nowrap' }}>
              📖 探索八大學習領域・冒險闖關地圖
            </h2>
            <p className="text-xs text-secondary" style={{ marginTop: '4px', margin: 0 }}>
              每個單元完成測驗皆可獲得 1~3 顆星級評分、經驗值與星光金幣！
            </p>
          </div>

          {/* iOS Segmented Control */}
          <div className="ios-segmented-control">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`ios-segment-item ${categoryFilter === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setCategoryFilter(cat.id);
                  triggerHaptic('selection');
                  playSound('ios_tap');
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className="subjects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredSubjects.map(subject => {
            const units = coursesData.units[subject.id] || [];
            const unitCount = units.length;
            
            // Calculate total stars earned in this subject
            let subjectStars = 0;
            units.forEach(u => {
              subjectStars += (unitStars[u.id] || 0);
            });
            const maxSubjectStars = unitCount * 3;

            return (
              <Link 
                to={`/subject/${subject.id}`} 
                key={subject.id} 
                onClick={() => {
                  triggerHaptic('selection');
                  playSound('ios_tap');
                }}
                className="ios-pressable ios-glass-card flex flex-col justify-between" 
                style={{ 
                  padding: '24px', 
                  borderRadius: '24px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1.5px solid var(--border-light)',
                  borderTop: `6px solid ${subject.color}`,
                  background: `linear-gradient(145deg, var(--bg-secondary) 0%, ${subject.color}0a 100%)`,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Cute Watermark in Top Right */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-10px',
                    fontSize: '4.5rem',
                    opacity: 0.08,
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}
                >
                  {subject.emoji}
                </div>

                <div>
                  {/* Top Header: Mascot Avatar + Badges */}
                  <div className="flex justify-between items-start mb-3.5">
                    <div 
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        backgroundColor: `${subject.color}15`,
                        border: `2px solid ${subject.color}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        boxShadow: `0 4px 12px ${subject.color}20`,
                        flexShrink: 0
                      }}
                    >
                      {subject.emoji}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span
                        className="badge"
                        style={{
                          backgroundColor: `${subject.color}18`,
                          color: subject.color,
                          fontWeight: 800,
                          fontSize: '0.76rem',
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        🐾 {subject.mascot}
                      </span>
                      <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5" style={{ fontSize: '0.72rem' }}>
                        ⭐ {subjectStars} / {maxSubjectStars} 星
                      </span>
                    </div>
                  </div>

                  {/* Subject Title */}
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>
                    {subject.name}
                  </h3>

                  {/* Slogan Badge */}
                  <div className="mt-2">
                    <span 
                      className="badge" 
                      style={{ 
                        backgroundColor: 'var(--bg-tertiary)', 
                        color: 'var(--text-secondary)',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '2px 8px',
                        border: '1px solid var(--border-light)'
                      }}
                    >
                      ✨ {subject.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-secondary" style={{ marginTop: '10px', lineHeight: 1.6, fontSize: '0.86rem' }}>
                    {subject.desc}
                  </p>
                </div>

                {/* Action Footer */}
                <div
                  className="flex items-center justify-between pt-3.5 mt-3 border-t text-sm font-bold"
                  style={{ 
                    borderTop: '1px solid var(--border-light)', 
                    color: subject.color 
                  }}
                >
                  <span className="flex items-center gap-1">
                    <span>🚀 進入闖關地圖 ({unitCount} 關)</span>
                  </span>
                  <div 
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: `${subject.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 🧭 Guided Start Wizard Anchor */}
      <GuidedStartWizard />

      {/* ⚡ Fast Review & Exam Tools Hub */}
      <section className="mt-4">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.25rem * var(--font-scale))' }}>
            ⚡ 快速充電與考前利器
          </h2>
          <span className="badge badge-accent">全方位輔助</span>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px'
          }}
        >
          <Link
            to="/flashcards"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ 
              padding: '20px', 
              borderLeft: '4px solid var(--accent-warning)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-secondary)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-warning-soft)',
                color: 'var(--accent-warning)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Zap size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>速記閃卡</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                公式、專有名詞與核心句型 3 秒快速複習
              </div>
            </div>
          </Link>

          <Link
            to="/mock-exam"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ 
              padding: '20px', 
              borderLeft: '4px solid var(--accent-primary)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-secondary)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent-primary)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Timer size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>計時模擬</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                10 分鐘 10 題實戰綜合測驗與即時解析
              </div>
            </div>
          </Link>

          <Link
            to="/mistakes"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ 
              padding: '20px', 
              borderLeft: '4px solid var(--accent-error)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-secondary)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-error-soft)',
                color: 'var(--accent-error)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>錯題本</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                自動收錄易錯陷阱題，智能複習消滅弱點
              </div>
            </div>
          </Link>

          <Link
            to="/gept"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ 
              padding: '20px', 
              borderLeft: '4px solid hsl(192, 88%, 45%)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-secondary)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'hsl(192, 88%, 95%)',
                color: 'hsl(192, 88%, 45%)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Award size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>全民英檢</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                GEPT 聽力朗讀與五級完整課綱
              </div>
            </div>
          </Link>

          <Link
            to="/prep"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ 
              padding: '20px', 
              borderLeft: '4px solid var(--accent-purple)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-secondary)',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-purple-soft)',
                color: 'var(--accent-purple)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <GraduationCap size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>國中先修</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                國一數學負數代數與理化銜接精華
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Lucky Wheel Modal */}
      <DailyLuckyWheel
        isOpen={isWheelOpen}
        onClose={() => setIsWheelOpen(false)}
      />

      {/* Sanctuary Modal */}
      <PetSanctuaryModal
        isOpen={isSanctuaryOpen}
        onClose={() => setIsSanctuaryOpen(false)}
      />

      {/* Gacha Loot Modal */}
      <GachaLootModal
        isOpen={isGachaOpen}
        onClose={() => setIsGachaOpen(false)}
      />
    </div>
  );
};

export default HomePage;
