import { useState } from 'react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/courses';

const HomePage = () => {
  const [selectedVersion, setSelectedVersion] = useState(coursesData.versions[0]);

  return (
    <div className="flex flex-col gap-8">
      <section className="hero" style={{ padding: '48px 0', textAlign: 'center' }}>
        <h1 className="h1" style={{ marginBottom: '16px' }}>探索國小六年級的知識宇宙</h1>
        <p className="text-lg" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          完全對齊 108 課綱，搭配優質教學影片與重點測驗，讓學習變得簡單又有效率。
        </p>
      </section>

      <section className="version-selector flex justify-center items-center gap-4">
        <span style={{ fontWeight: 600 }}>選擇您的課本版本：</span>
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

      <section className="subjects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '24px' }}>
        {coursesData.subjects.map(subject => (
          <Link to={`/subject/${subject.id}`} key={subject.id} className="card flex flex-col items-center justify-center gap-4" style={{ textAlign: 'center', padding: '48px 24px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: `${subject.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: subject.color }}>
              <span className="h2">{subject.name.charAt(0)}</span>
            </div>
            <h2 className="h3">{subject.name}</h2>
            <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>查看 {selectedVersion} 單元</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default HomePage;
