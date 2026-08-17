import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { PlayCircle, CheckCircle } from 'lucide-react';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const subject = coursesData.subjects.find(s => s.id === subjectId);
  const units = coursesData.units[subjectId] || [];

  if (!subject) return <div>找不到該科目</div>;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="h1">{subject.name} 單元列表</h1>
        <span className="badge">108課綱對齊</span>
      </div>

      <div className="units-list flex flex-col gap-4">
        {units.length === 0 ? (
          <p>此科目尚無單元資料。</p>
        ) : (
          units.map((unit, index) => (
            <div key={unit.id} className="card flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-sm" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>單元 {index + 1}</span>
                  <h2 className="h3" style={{ marginTop: '4px' }}>{unit.title}</h2>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', marginTop: '8px' }}>{unit.description}</p>
                </div>
                <Link to={`/quiz/${unit.id}`} className="btn-outline flex items-center gap-2 text-sm">
                  <CheckCircle size={16} /> 重點測驗
                </Link>
              </div>
              
              <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
                <h4 className="text-sm" style={{ fontWeight: 600, marginBottom: '8px' }}>學習重點：</h4>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {unit.keyConcepts.map((concept, i) => <li key={i}>{concept}</li>)}
                </ul>
              </div>

              <div className="flex justify-end mt-2">
                <a href={unit.videoUrl} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-2">
                  <PlayCircle size={18} /> 觀看均一教學影片
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SubjectPage;
