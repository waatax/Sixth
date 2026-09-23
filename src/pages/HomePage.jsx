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
  GraduationCap, 
  Award,
  Swords,
  Layers,
  FileText,
  BookOpen,
  Download,
  HelpCircle
} from 'lucide-react';
import GuidedStartWizard from '../components/common/GuidedStartWizard';
import DailyQuestCard from '../components/common/DailyQuestCard';
import DailyLuckyWheel from '../components/gamification/DailyLuckyWheel';
import PetSanctuaryModal from '../components/gamification/PetSanctuaryModal';
import GachaLootModal from '../components/gamification/GachaLootModal';
import LectureNotesDownloadHub from '../components/home/LectureNotesDownloadHub';
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      triggerHaptic('light');
      playSound('ios_tap');
    }
  };

  return (
    <div className="flex flex-col gap-8 py-2 pb-20 animate-fade-in">
      {/* ============================================================ */}
      {/* 🌟 1. 2026 旗艦首頁 Hero 學習導航看版 */}
      {/* ============================================================ */}
      <div 
        className="card"
        style={{
          padding: '28px 30px',
          borderRadius: '26px',
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(99, 102, 241, 0.08) 50%, rgba(236, 72, 153, 0.06) 100%)',
          border: '1.5px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="flex justify-between items-center flex-wrap gap-6">
          <div style={{ maxWidth: '720px' }}>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="badge badge-accent" style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontWeight: 800 }}>
                ✨ 108 課綱六年級 (6上 / 6下) 自主學習門戶
              </span>
              <span className="badge badge-success flex items-center gap-1 font-bold">
                <ShieldCheck size={13} />
                完全免登入・無廣告・公益綠色學習
              </span>
            </div>
            
            <h1 className="h1" style={{ margin: 0, fontSize: 'calc(1.9rem * var(--font-scale))', letterSpacing: '-0.02em', lineHeight: 1.3 }}>
              歡迎回來，{currentTitle}！直覺探索八大學科與章節講義
            </h1>

            <p className="text-secondary" style={{ marginTop: '10px', fontSize: 'calc(0.96rem * var(--font-scale))', lineHeight: 1.65 }}>
              每個單元皆具備 <strong style={{ color: 'var(--accent-primary)' }}>「視覺概念圖解」</strong>、<strong style={{ color: '#6366f1' }}>「章節段考講義 (PDF)」</strong> 與 <strong style={{ color: '#10b981' }}>「互動探究模擬」</strong>。點選下方科目即可立即開始學習與下載講義！
            </p>

            {/* Quick Fast Jump Action Buttons */}
            <div className="flex flex-wrap gap-2.5 mt-4">
              <button
                onClick={() => scrollToSection('subjects-section')}
                className="ios-pressable btn-primary flex items-center gap-1.5 text-xs font-black py-2 px-3.5"
                style={{
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 3px 10px rgba(37, 99, 235, 0.3)'
                }}
              >
                <span>🚀 進入八大學科學習</span>
              </button>

              <button
                onClick={() => scrollToSection('lecture-notes-hub')}
                className="ios-pressable flex items-center gap-1.5 text-xs font-black py-2 px-3.5"
                style={{
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#6366f1',
                  color: '#ffffff',
                  boxShadow: '0 3px 10px rgba(99, 102, 241, 0.35)',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <Download size={14} />
                <span>📑 快速下載章節講義 (57份PDF)</span>
              </button>

              <Link
                to="/labs"
                onClick={() => { triggerHaptic('selection'); playSound('ios_tap'); }}
                className="ios-pressable btn-outline flex items-center gap-1.5 text-xs font-bold py-2 px-3"
                style={{ borderRadius: 'var(--radius-md)', textDecoration: 'none' }}
              >
                <Sparkles size={14} className="text-emerald-500" />
                <span>🔬 互動實驗室</span>
              </Link>
            </div>
          </div>

          {/* Right Action Widgets: Pet, Wheel, Gacha */}
          <div className="flex flex-wrap gap-2 sm:justify-end w-full sm:w-auto">
            <button
              onClick={() => {
                setIsSanctuaryOpen(true);
                triggerHaptic('light');
                playSound('pet_happy');
                dispatchDynamicIsland({ title: '守護神獸庇護所', subtitle: '純淨陪伴成長', icon: currentEvolution?.emoji || '🦊' });
              }}
              className="ios-pressable btn-outline flex items-center justify-center gap-1.5 text-xs font-bold"
              style={{
                padding: '9px 14px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <span>{currentEvolution?.emoji || '🦊'} 守護神獸 (Lv.{currentPetStats?.level})</span>
            </button>

            <button
              onClick={() => {
                setIsWheelOpen(true);
                triggerHaptic('medium');
                playSound('ios_tap');
                dispatchDynamicIsland({ title: '每日幸運大轉盤', subtitle: '天天免費補給', icon: '🎡' });
              }}
              className="ios-pressable btn-outline flex items-center justify-center gap-1.5 text-xs font-bold"
              style={{
                padding: '9px 14px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)'
              }}
            >
              <span>🎡 幸運轉盤</span>
            </button>

            <button
              onClick={() => {
                setIsGachaOpen(true);
                triggerHaptic('medium');
                playSound('chest_open');
                dispatchDynamicIsland({ title: '神獸轉蛋盲盒', subtitle: '免費集齊圖鑑', icon: '🎁' });
              }}
              className="ios-pressable flex items-center justify-center gap-1.5 text-xs font-bold"
              style={{
                padding: '9px 14px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid #f59e0b',
                color: '#d97706'
              }}
            >
              <span>🎁 神獸盲盒</span>
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 📚 2. 【核心直覺入口】八大學科學習中心 (優先層級提升至最上方) */}
      {/* ============================================================ */}
      <section id="subjects-section" className="scroll-mt-20">
        <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="badge badge-accent font-bold">學習首選</span>
              <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.4rem * var(--font-scale))', whiteSpace: 'nowrap' }}>
                📖 八大學科學習領域・直覺闖關入口
              </h2>
            </div>
            <p className="text-xs text-secondary mt-1 mb-0">
              點擊學科直接展開課綱單元地圖；亦可一鍵直達專屬章節段考講義與重點筆記！
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

        {/* 8 Subjects Grid */}
        <div
          className="subjects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
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
            const completedCount = units.filter(u => (unitStars[u.id] || 0) > 0).length;
            const progressPercent = maxSubjectStars > 0 ? Math.round((subjectStars / maxSubjectStars) * 100) : 0;

            return (
              <div
                key={subject.id} 
                className="ios-glass-card flex flex-col justify-between" 
                style={{ 
                  padding: '24px', 
                  borderRadius: '24px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1.5px solid var(--border-light)',
                  borderTop: `6px solid ${subject.color}`,
                  background: `linear-gradient(145deg, var(--bg-secondary) 0%, ${subject.color}0c 100%)`,
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background Mascot Watermark */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '-10px',
                    right: '-8px',
                    fontSize: '4.5rem',
                    opacity: 0.07,
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
                        width: '54px',
                        height: '54px',
                        borderRadius: '16px',
                        backgroundColor: `${subject.color}15`,
                        border: `2px solid ${subject.color}35`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.9rem',
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
                          fontSize: '0.78rem',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        🐾 {subject.mascot}
                      </span>
                      <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5" style={{ fontSize: '0.74rem' }}>
                        ⭐ {subjectStars} / {maxSubjectStars} 星
                      </span>
                    </div>
                  </div>

                  {/* Subject Title */}
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.3rem', fontWeight: 800 }}>
                    {subject.name}
                  </h3>

                  {/* Slogan Badge */}
                  <div className="mt-1.5 mb-2">
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
                  <p className="text-sm text-secondary" style={{ lineHeight: 1.55, fontSize: '0.86rem', margin: 0 }}>
                    {subject.desc}
                  </p>

                  {/* Unit Progress Mini-bar */}
                  <div className="mt-3 pt-2">
                    <div className="flex justify-between items-center text-[11px] text-secondary font-bold mb-1">
                      <span>學習進度：{completedCount} / {unitCount} 單元</span>
                      <span>{progressPercent}%</span>
                    </div>
                    <div style={{ height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          width: `${progressPercent}%`, 
                          height: '100%', 
                          backgroundColor: subject.color,
                          borderRadius: '3px',
                          transition: 'width 0.3s ease'
                        }} 
                      />
                    </div>
                  </div>
                </div>

                {/* Subject Dual Actions (進入闖關 + 講義下載) */}
                <div 
                  className="flex flex-col gap-2 pt-4 mt-3 border-t"
                  style={{ borderTop: '1px solid var(--border-light)' }}
                >
                  <div className="flex items-center gap-2">
                    {/* Primary Button: 進入學科學習 */}
                    <Link
                      to={`/subject/${subject.id}`}
                      onClick={() => {
                        triggerHaptic('selection');
                        playSound('ios_tap');
                      }}
                      className="ios-pressable btn-primary flex-1 flex items-center justify-center gap-1.5 text-xs font-black py-2.5 px-3 text-center"
                      style={{
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: subject.color,
                        borderColor: subject.color,
                        color: '#ffffff',
                        textDecoration: 'none',
                        boxShadow: `0 3px 10px ${subject.color}35`
                      }}
                    >
                      <span>🚀 進入闖關 ({unitCount} 關)</span>
                      <ArrowRight size={13} />
                    </Link>

                    {/* Secondary Button: 專屬章節講義 */}
                    <Link
                      to={`/exam-notes/${subject.id}`}
                      onClick={() => {
                        triggerHaptic('light');
                        playSound('ios_tap');
                      }}
                      className="ios-pressable btn-outline flex items-center justify-center gap-1 text-xs font-bold py-2.5 px-3"
                      style={{
                        borderRadius: 'var(--radius-md)',
                        textDecoration: 'none',
                        whiteSpace: 'nowrap'
                      }}
                      title="查看並下載本學科段考講義與考前重點"
                    >
                      <FileText size={13} />
                      <span>章節講義</span>
                    </Link>
                  </div>

                  {/* Fast Semester Pills */}
                  <div className="flex items-center justify-between text-[11px] text-secondary px-1">
                    <span className="font-bold">快速跳轉：</span>
                    <div className="flex gap-2">
                      <Link 
                        to={`/exam-notes/${subject.id}/6A`} 
                        className="hover:underline font-bold"
                        style={{ color: subject.color }}
                      >
                        📘 6上講義
                      </Link>
                      <span>·</span>
                      <Link 
                        to={`/exam-notes/${subject.id}/6B`} 
                        className="hover:underline font-bold"
                        style={{ color: subject.color }}
                      >
                        📗 6下講義
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 📑 3. 【全新高光】章節講義與考前手冊快速下載中心 (核心需求元件) */}
      {/* ============================================================ */}
      <LectureNotesDownloadHub />

      {/* ============================================================ */}
      {/* ☀️ 4. 每日自主微任務 (Daily Quest) */}
      {/* ============================================================ */}
      <DailyQuestCard />

      {/* ============================================================ */}
      {/* 🎮 5. 沉浸式素養與實戰工具殿堂 (互動實驗、短影音、魔王城堡、計時模擬) */}
      {/* ============================================================ */}
      <section>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.3rem * var(--font-scale))' }}>
              🎮 沉浸式素養探究與實戰工具殿堂
            </h2>
            <span className="badge badge-accent font-bold">多元自主學習</span>
          </div>
        </div>

        <div
          className="grid gap-3.5"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {/* Card 1: Interactive Labs */}
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
                <span>互動探究實驗室</span>
                <span className="badge badge-success text-[10px] font-bold">PhET</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                圓面積切割拼貼、槓桿天平、水溶液酸鹼動態科學模擬
              </div>
            </div>
          </Link>

          {/* Card 2: Shorts Reels */}
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
                直式全螢幕！30秒微學習+即時突擊快答激勵
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
                <span>魔王城堡挑戰賽</span>
                <span className="badge text-[10px] font-bold text-purple-600 bg-purple-100">RPG</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                極速答題魔法雷擊！消滅四大守護魔王奪取智慧水晶
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
                <span className="badge badge-success text-[10px] font-bold">翻牌</span>
              </div>
              <div className="text-xs text-secondary mt-1" style={{ lineHeight: 1.5 }}>
                公式、成語與GEPT字彙連擊翻牌快速配對
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* ⚡ 6. 快速充電與考前利器 (閃卡、模擬考、錯題本、英檢、國中先修) */}
      {/* ============================================================ */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.3rem * var(--font-scale))' }}>
            ⚡ 快速充電與段考輔助利器
          </h2>
          <span className="badge badge-accent">全方位支援</span>
        </div>

        <div
          className="grid"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '14px'
          }}
        >
          <Link
            to="/flashcards"
            className="card card-hoverable flex items-start gap-3.5 p-3.5"
            style={{ 
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
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Zap size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>速記閃卡</div>
              <div className="text-xs text-secondary" style={{ marginTop: '2px', lineHeight: 1.4 }}>
                公式、專有名詞與核心句型 3 秒快速複習
              </div>
            </div>
          </Link>

          <Link
            to="/mock-exam"
            className="card card-hoverable flex items-start gap-3.5 p-3.5"
            style={{ 
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
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Timer size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>計時全真模擬</div>
              <div className="text-xs text-secondary" style={{ marginTop: '2px', lineHeight: 1.4 }}>
                10 分鐘 10 題實戰綜合測驗與即時精準解析
              </div>
            </div>
          </Link>

          <Link
            to="/mistakes"
            className="card card-hoverable flex items-start gap-3.5 p-3.5"
            style={{ 
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
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <CheckCircle2 size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>錯題粉碎本</div>
              <div className="text-xs text-secondary" style={{ marginTop: '2px', lineHeight: 1.4 }}>
                自動收錄易錯陷阱題，智能複習消滅學習弱點
              </div>
            </div>
          </Link>

          <Link
            to="/gept"
            className="card card-hoverable flex items-start gap-3.5 p-3.5"
            style={{ 
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
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Award size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>全民英檢先修</div>
              <div className="text-xs text-secondary" style={{ marginTop: '2px', lineHeight: 1.4 }}>
                GEPT 初級聽力朗讀與五級核心單字特訓
              </div>
            </div>
          </Link>

          <Link
            to="/prep"
            className="card card-hoverable flex items-start gap-3.5 p-3.5"
            style={{ 
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
                padding: '10px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <GraduationCap size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-primary)' }}>國中七年級先修</div>
              <div className="text-xs text-secondary" style={{ marginTop: '2px', lineHeight: 1.4 }}>
                國一數學負數、一元一次方程式與理化銜接精華
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 🧭 Guided Start Wizard Anchor */}
      <GuidedStartWizard />

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
