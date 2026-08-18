import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { Zap, Timer, Globe, Bookmark, ArrowRight, Sparkles, Compass, CheckCircle2, ShieldCheck, Smile, GraduationCap } from 'lucide-react';
import GuidedStartWizard from '../components/common/GuidedStartWizard';
import DailyQuestCard from '../components/common/DailyQuestCard';

const HomePage = () => {
  const [selectedVersion, setSelectedVersion] = useState(coursesData.versions[0]);
  const [categoryFilter, setCategoryFilter] = useState('all');

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

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Friendly Reassurance Top Banner */}
      <div 
        className="card"
        style={{
          padding: '24px 28px',
          borderRadius: 'var(--radius-xl)',
          background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(37, 99, 235, 0.05) 100%)',
          border: '1.5px solid var(--border-light)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div style={{ maxWidth: '800px' }}>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="badge badge-accent" style={{ padding: '4px 12px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
                ✨ 108 課綱・小六無壓力自主學習護照
              </span>
              <span className="badge badge-success flex items-center gap-1 font-bold">
                <ShieldCheck size={13} />
                圖解導讀・零門檻起步
              </span>
            </div>
            <h1 className="h1" style={{ margin: 0, fontSize: 'calc(1.8rem * var(--font-scale))', letterSpacing: '-0.02em' }}>
              放輕鬆，我們一步一步把觀念學會！
            </h1>
            <p className="text-secondary" style={{ marginTop: '8px', fontSize: 'calc(0.98rem * var(--font-scale))', lineHeight: 1.65 }}>
              不用死背硬記，每個單元都配備了 <strong style={{ color: 'var(--accent-primary)' }}>「視覺概念圖解」</strong> 與 <strong style={{ color: 'var(--accent-warning-text)' }}>「段考必考關鍵字」</strong>。即使基礎不好，也能看懂算理、輕鬆拿下高分！
            </p>
          </div>
        </div>
      </div>

      {/* 🧭 Guided Start Wizard: "不知從何開始？" Psychological Anchor */}
      <GuidedStartWizard />

      {/* ☀️ Daily 3-Minute Micro-Quests Card */}
      <DailyQuestCard />

      {/* 8 Major Learning Areas Grid with Category Filters & Inline Version Selector */}
      <section className="mt-1">
        <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
          {/* Left: Title + Compact Inline Version Selector */}
          <div className="flex items-center gap-3 flex-wrap">
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.35rem * var(--font-scale))', whiteSpace: 'nowrap' }}>
                  📖 探索八大學習領域
                </h2>

                {/* Compact Single-line Version Selector */}
                <div 
                  className="inline-flex items-center gap-1 p-1 rounded-full"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-strong)',
                    fontSize: '0.78rem',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <span style={{ color: 'var(--text-secondary)', fontWeight: 700, paddingLeft: '8px', paddingRight: '2px', fontSize: '0.74rem', whiteSpace: 'nowrap' }}>
                    版本：
                  </span>
                  <div className="flex gap-1">
                    {coursesData.versions.map(version => (
                      <button
                        key={version}
                        className={`btn-pill ${selectedVersion === version ? 'active' : ''}`}
                        onClick={() => setSelectedVersion(version)}
                        style={{
                          fontSize: '0.74rem',
                          padding: '3px 9px',
                          minHeight: '24px',
                          lineHeight: 1,
                          borderRadius: 'var(--radius-full)'
                        }}
                      >
                        {version}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-secondary" style={{ marginTop: '4px', margin: 0 }}>
                點選任一學科，按照「基礎 ➔ 進階」闖關地圖進行探索
              </p>
            </div>
          </div>

          {/* Right: Category Filter Tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`btn-pill flex items-center gap-1.5 ${categoryFilter === cat.id ? 'active' : ''}`}
                onClick={() => setCategoryFilter(cat.id)}
                style={{ fontSize: '0.85rem', padding: '6px 14px' }}
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
            const unitCount = (coursesData.units[subject.id] || []).length;
            return (
              <Link 
                to={`/subject/${subject.id}`} 
                key={subject.id} 
                className="card card-hoverable flex flex-col justify-between" 
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
                  {/* Top Header: Cute Mascot Avatar + Badges */}
                  <div className="flex justify-between items-start mb-3.5">
                    {/* Cute Mascot Avatar with soft glow */}
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

                    {/* Cute Tag Pills */}
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
                      <span className="text-xs text-tertiary" style={{ fontSize: '0.72rem' }}>
                        收錄 {unitCount} 關圖解
                      </span>
                    </div>
                  </div>

                  {/* Subject Title */}
                  <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.25rem', fontWeight: 800 }}>
                    {subject.name}
                  </h3>

                  {/* Cute Slogan Badge */}
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
                    <span>🚀 進入闖關探索</span>
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

      {/* ⚡ Autonomous Learning Tools Hub */}
      <section className="mt-4">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="h2" style={{ margin: 0, fontSize: 'calc(1.25rem * var(--font-scale))' }}>
            ⚡ 快速充電與考前利器
          </h2>
          <span className="badge badge-accent">零壓力輔助</span>
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
              backgroundColor: 'var(--bg-secondary)'
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
              backgroundColor: 'var(--bg-secondary)'
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
              backgroundColor: 'var(--bg-secondary)'
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
              <Bookmark size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>錯題筆記</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                自動收錄弱點題目，隨時一鍵搞懂消滅
              </div>
            </div>
          </Link>

          <Link
            to="/resources"
            className="card card-hoverable flex items-start gap-3.5"
            style={{ 
              padding: '20px', 
              borderLeft: '4px solid var(--accent-success)',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: 'var(--bg-secondary)'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--accent-success-soft)',
                color: 'var(--accent-success)',
                padding: '12px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Globe size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>教育資源</div>
              <div className="text-xs text-secondary" style={{ marginTop: '4px', lineHeight: 1.5 }}>
                因材網、Cool English、PaGamO 整合導航
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
              backgroundColor: 'var(--bg-secondary)'
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
    </div>
  );
};

export default HomePage;
