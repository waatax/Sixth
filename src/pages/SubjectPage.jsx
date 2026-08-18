import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { PlayCircle, CheckCircle2, BookOpen, ArrowLeft, Compass, ArrowRight, Star, Clock, ShieldCheck, Flame, Zap, Volume2, Headphones } from 'lucide-react';
import { speechEngine } from '../utils/speechHelper';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = coursesData.subjects.find(s => s.id === subjectId);
  const units = coursesData.units[subjectId] || [];
  const [completedUnits, setCompletedUnits] = useState([]);

  useEffect(() => {
    try {
      const savedStats = localStorage.getItem('sixth_student_stats');
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        // If we store completed unit ids, load them, otherwise dummy tracker
        setCompletedUnits(parsed.completedUnitIds || ['math-u1', 'sci-u1']);
      }
    } catch (e) {}
  }, []);

  if (!subject) return (
    <div className="container py-12 text-center">
      <h2 className="h2">找不到該科目</h2>
      <Link to="/" className="btn-primary mt-4 inline-flex">返回首頁</Link>
    </div>
  );

  // Helper for tier grouping
  const getTierInfo = (index, total) => {
    const ratio = index / total;
    if (ratio < 0.35) {
      return { label: '🌱 基礎加固・快速暖身', color: 'var(--accent-success)', bg: 'var(--accent-success-soft)' };
    } else if (ratio < 0.75) {
      return { label: '🌿 核心觀念・段考必考', color: 'var(--accent-primary)', bg: 'var(--accent-soft)' };
    } else {
      return { label: '🌳 實戰整合・高分挑戰', color: 'var(--accent-purple)', bg: 'var(--accent-purple-soft)' };
    }
  };

  return (
    <div className="flex flex-col gap-6 py-3">
      {/* Top Breadcrumb */}
      <div>
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回八大學習領域首頁
        </Link>
      </div>

      {/* Subject Header Banner */}
      <div 
        className="card" 
        style={{ 
          padding: '28px', 
          borderLeft: `6px solid ${subject.color}`, 
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid var(--border-light)',
          borderLeft: `6px solid ${subject.color}`
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div className="flex items-start gap-4" style={{ flex: 1, minWidth: '280px' }}>
            {/* Cute Mascot Avatar */}
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '18px',
                backgroundColor: `${subject.color}15`,
                border: `2px solid ${subject.color}35`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                boxShadow: `0 4px 14px ${subject.color}25`,
                flexShrink: 0
              }}
            >
              {subject.emoji}
            </div>

            <div>
              <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                <h1 className="h1" style={{ margin: 0, fontSize: 'calc(1.8rem * var(--font-scale))' }}>
                  {subject.name}
                </h1>
                <span className="badge" style={{ backgroundColor: `${subject.color}20`, color: subject.color, fontWeight: 800, fontSize: '0.78rem' }}>
                  🐾 {subject.mascot}
                </span>
                <span className="badge badge-success" style={{ fontWeight: 700, fontSize: '0.75rem' }}>
                  ✨ {subject.badge}
                </span>
              </div>
              <p className="text-secondary" style={{ fontSize: 'calc(0.98rem * var(--font-scale))', lineHeight: 1.65, maxWidth: '720px', margin: 0 }}>
                {subject.desc}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span className="badge badge-accent" style={{ fontSize: '0.88rem', padding: '6px 14px' }}>
              共 {units.length} 個圖解闖關單元
            </span>
            <span className="text-xs text-secondary flex items-center gap-1">
              <ShieldCheck size={14} style={{ color: 'var(--accent-success)' }} />
              每課平均 3~5 分鐘零負擔
            </span>
          </div>
        </div>
      </div>

      {/* 🧭 Scaffolding 3-Step Guide */}
      <div
        className="card flex items-center justify-between flex-wrap gap-3 py-3.5 px-5"
        style={{ 
          backgroundColor: 'var(--bg-secondary)', 
          border: '1px solid var(--border-light)', 
          borderRadius: 'var(--radius-lg)',
          fontSize: '0.88rem',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="flex items-center gap-2 font-bold" style={{ color: 'var(--text-primary)' }}>
          <span style={{ fontSize: '1.1rem' }}>🗺️</span>
          <span>零基礎闖關指南：</span>
        </div>
        <div className="flex items-center gap-2 text-secondary flex-wrap text-xs md:text-sm">
          <span className="badge" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent-primary)', fontWeight: 700 }}>
            ① 點選單元看圖解
          </span>
          <span>➔</span>
          <span className="badge" style={{ backgroundColor: 'var(--accent-success-soft)', color: 'var(--accent-success)', fontWeight: 700 }}>
            ② 做 3 題隨堂測驗
          </span>
          <span>➔</span>
          <span className="badge" style={{ backgroundColor: 'var(--accent-warning-soft)', color: 'var(--accent-warning-text)', fontWeight: 700 }}>
            ③ 錯題自動存入筆記
          </span>
        </div>
      </div>

      {/* 🎧 English Audio Warm-up Widget */}
      {subjectId === 'english' && (
        <div 
          className="card animate-fade-in p-4"
          style={{
            background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.06) 0%, rgba(16, 185, 129, 0.05) 100%)',
            border: '1.5px solid var(--accent-primary)',
            borderRadius: 'var(--radius-xl)'
          }}
        >
          <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-2 font-bold" style={{ color: 'var(--accent-primary)', fontSize: '0.95rem' }}>
              <Headphones size={18} />
              <span>🎧 全新功能：所有英文單元均支援「原音朗讀」與「點擊發音練習」！</span>
            </div>
            <span className="badge badge-success text-xs">美式母語標準發音</span>
          </div>
          <p className="text-xs text-secondary mb-3">
            快速暖身：點擊下方高頻日常問候句，立即測試你的瀏覽器語音發音：
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { en: "Good morning! How are you today?", zh: "早安！今天好嗎？" },
              { en: "Excuse me, where is the library?", zh: "請問圖書館在哪？" },
              { en: "What time do you usually wake up?", zh: "你通常幾點起床？" },
              { en: "Practice makes perfect!", zh: "熟能生巧！" }
            ].map((phrase, idx) => (
              <button
                key={idx}
                onClick={() => speechEngine.speak(phrase.en)}
                className="btn-outline flex items-center gap-1.5"
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text-primary)'
                }}
                title={`點擊聆聽: "${phrase.en}" (${phrase.zh})`}
              >
                <Volume2 size={13} style={{ color: 'var(--accent-primary)' }} />
                <span className="font-semibold">{phrase.en}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Unit Cards List */}
      <div className="units-list flex flex-col gap-5 mt-1">
        {units.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-secondary">此科目尚無單元資料。</p>
          </div>
        ) : (
          units.map((unit, index) => {
            const tier = getTierInfo(index, units.length);
            const isCompleted = completedUnits.includes(unit.id);

            return (
              <div
                key={unit.id}
                className="card card-hoverable flex flex-col gap-4"
                style={{ 
                  padding: '24px', 
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1.5px solid var(--border-light)'
                }}
              >
                {/* Unit Header & Badges */}
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span
                        className="badge"
                        style={{
                          backgroundColor: 'var(--accent-primary)',
                          color: 'var(--text-inverse)',
                          fontWeight: 700,
                          padding: '4px 10px'
                        }}
                      >
                        第 {index + 1} 關
                      </span>
                      <span 
                        className="badge" 
                        style={{ backgroundColor: tier.bg, color: tier.color, fontWeight: 700, fontSize: '0.75rem' }}
                      >
                        {tier.label}
                      </span>
                      <span className="text-xs text-secondary flex items-center gap-1">
                        <Clock size={12} />
                        約 3~5 分鐘
                      </span>
                    </div>

                    <h2 className="h3" style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                      {unit.title}
                    </h2>

                    <p className="text-sm text-secondary" style={{ marginTop: '8px', lineHeight: 1.65 }}>
                      {unit.description}
                    </p>
                  </div>

                  {/* Completion Star Badge */}
                  <div>
                    {isCompleted ? (
                      <span className="badge badge-success flex items-center gap-1 font-bold">
                        <Star size={13} style={{ fill: 'currentColor' }} />
                        已完成學習
                      </span>
                    ) : (
                      <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-tertiary)' }}>
                        🌱 探索解鎖中
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Core Knowledge Points */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  <div className="flex items-center gap-2 mb-2 text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                    <Compass size={15} style={{ color: 'var(--accent-primary)' }} />
                    <span>本單元核心考點與圖解關鍵：</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                    {unit.keyConcepts.map((concept, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-secondary">
                        <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>•</span>
                        <span>{concept}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions Toolbar */}
                <div
                  className="flex justify-between items-center flex-wrap gap-3 pt-3 border-t"
                  style={{ borderTop: '1px solid var(--border-light)' }}
                >
                  {/* Auxiliary Video Link */}
                  {unit.videoUrl && (
                    <a 
                      href={unit.videoUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors"
                      title="前往均一教育平台觀看相關教學影音"
                    >
                      <PlayCircle size={15} />
                      <span>📺 均一影音輔助 (延伸觀看)</span>
                    </a>
                  )}

                  {/* Primary Core Actions */}
                  <div className="flex gap-3 flex-wrap">
                    <Link 
                      to={`/quiz/${unit.id}`} 
                      className="btn-outline flex items-center gap-2 text-sm" 
                      style={{
                        padding: '8px 18px',
                        borderColor: 'var(--accent-success)',
                        color: 'var(--accent-success-text)'
                      }}
                    >
                      <CheckCircle2 size={16} /> 觀念測驗 (+50 XP)
                    </Link>
                    <Link 
                      to={`/lesson/${unit.id}`} 
                      className="btn-primary flex items-center gap-2 text-sm" 
                      style={{ padding: '8px 22px' }}
                    >
                      <BookOpen size={16} /> 進入圖解教學單元
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
