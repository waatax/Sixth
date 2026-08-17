import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { BookOpen, Award, CheckCircle, FileText } from 'lucide-react';

const HomePage = () => {
  const [selectedVersion, setSelectedVersion] = useState(coursesData.versions[0]);

  return (
    <div className="flex flex-col gap-10 py-6">
      <section className="hero text-center py-6">
        <span className="badge mb-4" style={{ backgroundColor: 'hsl(215, 80%, 95%)', color: 'var(--accent-primary)', fontSize: '0.85rem', padding: '6px 16px', borderRadius: '999px' }}>
          ✨ 108 課綱國民小學六年級・全科目自主學習平台
        </span>
        <h1 className="h1" style={{ marginBottom: '16px', fontSize: '2.75rem' }}>
          探索國小六年級的知識宇宙
        </h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
          涵蓋教育部 108 課綱<strong>八大領域、48 個核心單元</strong>。提供深度知識點教學、互動重點測驗、模擬試題下載與均一教育平台資源，一站掌握升國中關鍵學力！
        </p>
      </section>

      {/* Feature Highlights */}
      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <BookOpen style={{ color: 'var(--accent-primary)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>48 個教學單元</div>
            <div className="text-sm text-secondary">深度解析與迷思破解</div>
          </div>
        </div>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <CheckCircle style={{ color: 'hsl(150, 60%, 40%)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>互動重點測驗</div>
            <div className="text-sm text-secondary">即時批改與詳盡解析</div>
          </div>
        </div>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <FileText style={{ color: 'hsl(280, 65%, 50%)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>全國段考試題庫</div>
            <div className="text-sm text-secondary">歷屆考卷實戰演練</div>
          </div>
        </div>
        <div className="card flex items-center gap-3" style={{ padding: '16px 20px' }}>
          <Award style={{ color: 'hsl(25, 85%, 50%)' }} size={24} />
          <div>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>三大版本相容</div>
            <div className="text-sm text-secondary">康軒・南一・翰林</div>
          </div>
        </div>
      </section>

      {/* Version Selector */}
      <section className="version-selector flex justify-center items-center gap-3 flex-wrap card" style={{ padding: '16px 24px', backgroundColor: 'var(--bg-secondary)' }}>
        <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>📖 學校教科書版本：</span>
        <div className="flex gap-2">
          {coursesData.versions.map(version => (
            <button
              key={version}
              className={`btn-outline ${selectedVersion === version ? 'btn-primary' : ''}`}
              onClick={() => setSelectedVersion(version)}
              style={selectedVersion === version ? { backgroundColor: 'var(--accent-primary)', color: 'white', borderColor: 'var(--accent-primary)' } : {}}
            >
              {version}
            </button>
          ))}
        </div>
      </section>

      {/* 8 Subjects Grid */}
      <section>
        <h2 className="h2 mb-6" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>📚 108 課綱八大領域學科</h2>
        <div className="subjects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '20px' }}>
          {coursesData.subjects.map(subject => {
            const unitCount = (coursesData.units[subject.id] || []).length;
            return (
              <Link 
                to={`/subject/${subject.id}`} 
                key={subject.id} 
                className="card flex flex-col justify-between gap-4" 
                style={{ padding: '24px', borderTop: `4px solid ${subject.color}` }}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="badge" style={{ backgroundColor: `${subject.color}15`, color: subject.color }}>
                      {unitCount} 個單元
                    </span>
                    <span className="text-sm text-secondary">{selectedVersion}</span>
                  </div>
                  <h3 className="h3" style={{ fontSize: '1.25rem', marginTop: '8px' }}>{subject.name}</h3>
                  <p className="text-sm text-secondary mt-2" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {subject.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t text-sm" style={{ borderTop: '1px solid var(--border-light)', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  <span>進入學習單元 →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
