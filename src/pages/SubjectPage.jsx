import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { PlayCircle, CheckCircle2, BookOpen, ArrowLeft, Compass, ArrowRight } from 'lucide-react';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = coursesData.subjects.find(s => s.id === subjectId);
  const units = coursesData.units[subjectId] || [];

  if (!subject) return (
    <div className="container py-12 text-center">
      <h2 className="h2">找不到該科目</h2>
      <Link to="/" className="btn-primary mt-4 inline-flex">返回首頁</Link>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 py-3">
      {/* Top Breadcrumb */}
      <div>
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回八大學習領域
        </Link>
      </div>

      {/* Subject Header */}
      <div 
        className="card" 
        style={{ 
          padding: '28px', 
          borderLeft: `6px solid ${subject.color}`, 
          backgroundColor: 'var(--bg-secondary)' 
        }}
      >
        <div className="flex justify-between items-start flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <h1 className="h1" style={{ margin: 0 }}>{subject.name}</h1>
              <span className="badge" style={{ backgroundColor: `${subject.color}20`, color: subject.color, fontWeight: 700 }}>
                108 課綱完整深度教程
              </span>
            </div>
            <p className="text-secondary" style={{ fontSize: 'calc(1rem * var(--font-scale))', lineHeight: 1.7, maxWidth: '720px' }}>
              {subject.desc}
            </p>
          </div>
          <div>
            <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)', fontSize: '0.88rem', padding: '8px 14px' }}>
              收錄 {units.length} 個圖解核心單元
            </span>
          </div>
        </div>
      </div>

      {/* Recommended Learning Flow Guide */}
      <div
        className="card flex items-center justify-between flex-wrap gap-3 py-3 px-4"
        style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)', fontSize: '0.88rem' }}
      >
        <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>💡 推薦自主學習步驟：</span>
        <div className="flex items-center gap-2 text-secondary flex-wrap">
          <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>① 閱讀圖解教學單元</span>
          <span>➔</span>
          <span style={{ color: 'var(--accent-success)', fontWeight: 700 }}>② 觀念重點即時測驗</span>
          <span>➔</span>
          <span style={{ color: 'var(--accent-warning)', fontWeight: 700 }}>③ 均一延伸影音輔助</span>
          <span>➔</span>
          <span style={{ color: 'var(--accent-purple)', fontWeight: 700 }}>④ 錯題收錄考前複習</span>
        </div>
      </div>

      {/* Unit Cards List */}
      <div className="units-list flex flex-col gap-5 mt-1">
        {units.length === 0 ? (
          <div className="card text-center py-12">
            <p className="text-secondary">此科目尚無單元資料。</p>
          </div>
        ) : (
          units.map((unit, index) => (
            <div
              key={unit.id}
              className="card card-hoverable flex flex-col gap-4"
              style={{ padding: '24px' }}
            >
              {/* Unit Title & Badges */}
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className="badge"
                      style={{
                        backgroundColor: 'var(--accent-primary)',
                        color: 'var(--text-inverse)',
                        fontWeight: 700,
                        padding: '4px 10px'
                      }}
                    >
                      第 {index + 1} 課
                    </span>
                    <h2 className="h3" style={{ margin: 0 }}>{unit.title}</h2>
                  </div>
                  <p className="text-sm text-secondary" style={{ marginTop: '8px', lineHeight: 1.65 }}>
                    {unit.description}
                  </p>
                </div>
              </div>
              
              {/* Core Knowledge Points */}
              <div
                style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <div className="flex items-center gap-2 mb-2 text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                  <Compass size={16} style={{ color: 'var(--accent-primary)' }} />
                  <span>核心知識點與素養指標：</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                  {unit.keyConcepts.map((concept, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-secondary">
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>•</span>
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
                    className="flex items-center gap-1.5 text-sm text-secondary hover:text-primary transition-colors"
                    title="前往均一教育平台觀看相關教學影音"
                  >
                    <PlayCircle size={16} />
                    <span>📺 均一影音輔助 (延伸參考)</span>
                  </a>
                )}

                {/* Primary Core Actions */}
                <div className="flex gap-3 flex-wrap">
                  <Link 
                    to={`/quiz/${unit.id}`} 
                    className="btn-outline flex items-center gap-2 text-sm" 
                    style={{
                      padding: '9px 18px',
                      borderColor: 'var(--accent-success)',
                      color: 'var(--accent-success-text)'
                    }}
                  >
                    <CheckCircle2 size={16} /> 觀念重點測驗
                  </Link>
                  <Link 
                    to={`/lesson/${unit.id}`} 
                    className="btn-primary flex items-center gap-2 text-sm" 
                    style={{ padding: '9px 22px' }}
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
