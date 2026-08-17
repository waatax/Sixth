import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { PlayCircle, CheckCircle2, BookOpen, ArrowLeft, Sparkles, Compass, CheckCircle } from 'lucide-react';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = coursesData.subjects.find(s => s.id === subjectId);
  const units = coursesData.units[subjectId] || [];

  if (!subject) return (
    <div className="container py-12 text-center">
      <h2>找不到該科目</h2>
      <Link to="/" className="btn-primary mt-4 inline-block">返回首頁</Link>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 py-4">
      <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-1" style={{ color: 'var(--text-secondary)' }}>
        <ArrowLeft size={16} /> 返回八大學習領域
      </Link>

      {/* Subject Header */}
      <div className="card" style={{ padding: '24px', borderLeft: `6px solid ${subject.color}`, backgroundColor: 'var(--bg-secondary)' }}>
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="h1" style={{ margin: 0, fontSize: '2rem' }}>{subject.name}</h1>
              <span className="badge" style={{ backgroundColor: `${subject.color}20`, color: subject.color, fontWeight: 700 }}>
                108 課綱完整深度教程
              </span>
            </div>
            <p className="text-secondary mt-2" style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>
              {subject.desc}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', fontSize: '0.85rem', padding: '6px 12px' }}>
              收錄 {units.length} 個圖解單元
            </span>
          </div>
        </div>
      </div>

      {/* Learning Flow Guide */}
      <div className="flex items-center justify-between flex-wrap gap-2 py-2 px-4 card" style={{ backgroundColor: 'var(--bg-tertiary)', border: 'none', fontSize: '0.85rem' }}>
        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>💡 推薦學習路徑：</span>
        <div className="flex items-center gap-2 text-secondary flex-wrap">
          <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>① 閱讀圖解教學單元</span>
          <span>➔</span>
          <span style={{ color: 'hsl(150, 60%, 35%)', fontWeight: 600 }}>② 觀念重點即時測驗</span>
          <span>➔</span>
          <span>③ 均一延伸影音輔助 (選修)</span>
          <span>➔</span>
          <span style={{ color: 'hsl(280, 65%, 45%)', fontWeight: 600 }}>④ 全國段考真題實戰</span>
        </div>
      </div>

      {/* Unit Cards List */}
      <div className="units-list flex flex-col gap-5 mt-2">
        {units.length === 0 ? (
          <p className="text-center py-12 text-secondary">此科目尚無單元資料。</p>
        ) : (
          units.map((unit, index) => (
            <div key={unit.id} className="card flex flex-col gap-4" style={{ padding: '24px', transition: 'all var(--transition-fast)' }}>
              {/* Unit Title & Badges */}
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div className="flex items-center gap-2">
                    <span className="badge" style={{ backgroundColor: 'var(--accent-primary)', color: 'white', fontWeight: 700, padding: '3px 8px' }}>
                      第 {index + 1} 課
                    </span>
                    <h2 className="h3" style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-primary)' }}>{unit.title}</h2>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.6 }}>{unit.description}</p>
                </div>
              </div>
              
              {/* Core Knowledge Points */}
              <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                <div className="flex items-center gap-2 mb-2 text-sm" style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                  <Compass size={16} style={{ color: 'var(--accent-primary)' }} />
                  <span>核心知識點與素養指標：</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                  {unit.keyConcepts.map((concept, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }}>•</span>
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Action Toolbar: Our Generated Content is the Hero */}
              <div className="flex justify-between items-center flex-wrap gap-3 pt-3 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
                {/* Secondary Auxiliary Link */}
                <a 
                  href={unit.videoUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-1 text-sm text-secondary hover:text-primary transition-colors"
                  style={{ color: 'var(--text-tertiary)', fontSize: '0.85rem' }}
                  title="前往均一教育平台觀看相關教學影音"
                >
                  <PlayCircle size={15} />
                  <span>📺 均一影音輔助 (延伸參考)</span>
                </a>

                {/* Primary Core Actions */}
                <div className="flex gap-3">
                  <Link 
                    to={`/quiz/${unit.id}`} 
                    className="btn-outline flex items-center gap-2 text-sm" 
                    style={{ padding: '8px 16px', borderColor: 'hsl(150, 60%, 40%)', color: 'hsl(150, 60%, 35%)' }}
                  >
                    <CheckCircle2 size={16} /> 觀念重點測驗
                  </Link>
                  <Link 
                    to={`/lesson/${unit.id}`} 
                    className="btn-primary flex items-center gap-2 text-sm" 
                    style={{ padding: '8px 20px', backgroundColor: 'var(--accent-primary)', fontWeight: 600, boxShadow: 'var(--shadow-sm)' }}
                  >
                    <BookOpen size={16} /> 進入圖解教學單元
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
