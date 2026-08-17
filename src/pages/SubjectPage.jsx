import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { PlayCircle, CheckCircle, BookOpen, ArrowLeft } from 'lucide-react';

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
      <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-2" style={{ color: 'var(--text-secondary)' }}>
        <ArrowLeft size={16} /> 返回科目選單
      </Link>

      <div className="flex justify-between items-center flex-wrap gap-4 border-b pb-4" style={{ borderBottom: '1px solid var(--border-light)' }}>
        <div>
          <div className="flex items-center gap-3">
            <h1 className="h1" style={{ margin: 0 }}>{subject.name}</h1>
            <span className="badge" style={{ backgroundColor: `${subject.color}20`, color: subject.color }}>108 課綱完整收錄</span>
          </div>
          <p className="text-secondary mt-2" style={{ color: 'var(--text-secondary)' }}>{subject.desc}</p>
        </div>
        <span className="text-sm" style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>
          共 {units.length} 個單元
        </span>
      </div>

      <div className="units-list flex flex-col gap-6 mt-4">
        {units.length === 0 ? (
          <p className="text-center py-12 text-secondary">此科目尚無單元資料。</p>
        ) : (
          units.map((unit, index) => (
            <div key={unit.id} className="card flex flex-col gap-4">
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div className="flex items-center gap-2">
                    <span className="badge" style={{ backgroundColor: 'var(--bg-tertiary)' }}>No. {index + 1}</span>
                    <h2 className="h3" style={{ margin: 0, fontSize: '1.25rem' }}>{unit.title}</h2>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', marginTop: '8px', lineHeight: 1.6 }}>{unit.description}</p>
                </div>
              </div>
              
              <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <h4 className="text-sm" style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>🎯 核心素養與學習重點：</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}>
                  {unit.keyConcepts.map((concept, i) => (
                    <li key={i}>{concept}</li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-between items-center flex-wrap gap-3 mt-2 pt-3 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
                <a href={unit.videoUrl} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2 text-sm" style={{ padding: '8px 16px' }}>
                  <PlayCircle size={16} /> 均一平台影片
                </a>

                <div className="flex gap-3">
                  <Link to={`/quiz/${unit.id}`} className="btn-outline flex items-center gap-2 text-sm" style={{ padding: '8px 16px' }}>
                    <CheckCircle size={16} /> 重點測驗
                  </Link>
                  <Link to={`/lesson/${unit.id}`} className="btn-primary flex items-center gap-2 text-sm" style={{ padding: '8px 18px', backgroundColor: 'var(--accent-primary)' }}>
                    <BookOpen size={16} /> 閱讀教學單元
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
