import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, CheckCircle2, Image as ImageIcon, Sparkles, BookOpen, ExternalLink, Compass } from 'lucide-react';
import { coursesData } from '../data/courses';
import './LessonPage.css';

// Vite dynamic import for raw markdown files
const mdModules = import.meta.glob('../data/lessons/*.md', { query: '?raw', import: 'default' });

// Subject to illustration mapping
const subjectImages = {
  math: {
    src: './images/math_visual.jpg',
    title: '【圖解一】立體幾何展開・分數切割圓餅・坐標軸與精準測量'
  },
  science: {
    src: './images/science_visual.jpg',
    title: '【圖解一】氣象鋒面預報・電磁鐵電路・槓桿天平與生態循環'
  },
  mandarin: {
    src: './images/social_visual.jpg',
    title: '【圖解一】古典文言書卷・修辭結構圖解與邏輯思維'
  },
  social: {
    src: './images/social_visual.jpg',
    title: '【圖解一】臺灣民主投票・多元族群文化傳承與SDGs永續目標'
  },
  english: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解一】日常作息情境・時態圖解與世界節慶對話'
  },
  arts: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解一】色彩調色盤環・五線譜樂理與設計思考五步驟'
  },
  health_pe: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解一】CPR+AED急救口訣・運動體適能與我的餐盤'
  },
  integrative: {
    src: './images/english_arts_visual.jpg',
    title: '【圖解一】時間管理四象限・多元智能與自主學習成長地圖'
  }
};

const LessonPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Find unit metadata and subject
  let currentUnit = null;
  let currentSubject = null;
  for (const subjectId in coursesData.units) {
    const unit = coursesData.units[subjectId].find(u => u.id === unitId);
    if (unit) {
      currentUnit = unit;
      currentSubject = coursesData.subjects.find(s => s.id === subjectId);
      break;
    }
  }

  const subjectIllustration = currentSubject ? subjectImages[currentSubject.id] : null;

  useEffect(() => {
    const fetchMarkdown = async () => {
      setLoading(true);
      const path = `../data/lessons/${unitId}.md`;
      if (mdModules[path]) {
        try {
          const mdContent = await mdModules[path]();
          setContent(mdContent);
        } catch (error) {
          setContent('# 糟糕！無法載入教學內容\n\n內容檔案可能遺失或正在建置中。');
        }
      } else {
        setContent(`# 🚧 教學內容建置中\n\n目前此單元 (${unitId}) 的深度教學內容尚未開放，敬請期待後續更新！\n\n您可以先返回單元列表，或直接進行重點測驗。`);
      }
      setLoading(false);
    };

    fetchMarkdown();
  }, [unitId]);

  if (!currentUnit) {
    return (
      <div className="container py-12 text-center">
        <h2>找不到此單元資料</h2>
        <button className="btn-primary mt-4" onClick={() => navigate('/')}>返回八大學習領域</button>
      </div>
    );
  }

  return (
    <div className="lesson-page-wrapper max-w-3xl mx-auto py-6">
      {/* Top Breadcrumb Navigation */}
      <div className="flex justify-between items-center flex-wrap gap-3 mb-4">
        <button 
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" 
          style={{ color: 'var(--text-secondary)' }} 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> 返回單元列表
        </button>

        <div className="flex items-center gap-2">
          {currentSubject && (
            <span className="badge" style={{ backgroundColor: `${currentSubject.color}15`, color: currentSubject.color, fontWeight: 700 }}>
              {currentSubject.name}
            </span>
          )}
          <span className="badge" style={{ backgroundColor: 'hsl(150, 60%, 95%)', color: 'hsl(150, 60%, 35%)', fontWeight: 600 }}>
            ✨ +10% 現代素養新知
          </span>
        </div>
      </div>

      {/* Featured Educational Illustration Banner */}
      {subjectIllustration && (
        <div className="card mb-6" style={{ padding: '16px', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span style={{ color: 'var(--accent-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ImageIcon size={17} />
              {subjectIllustration.title}
            </span>
            <span className="text-sm text-secondary" style={{ fontSize: '0.8rem' }}>專屬圖解輔助</span>
          </div>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
            <img 
              src={subjectIllustration.src} 
              alt={subjectIllustration.title} 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '340px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      )}

      {/* Main Core Generated Lesson Content */}
      {loading ? (
        <div className="card text-center py-12">
          <Sparkles className="animate-spin mb-2 mx-auto text-primary" size={32} />
          <p>載入深度圖解教學內容中...</p>
        </div>
      ) : (
        <div className="card markdown-body" style={{ padding: '36px', boxShadow: 'var(--shadow-sm)' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="card mt-8 flex justify-between items-center flex-wrap gap-4" style={{ padding: '20px 24px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>單元觀念已掌握？</div>
          <div className="text-sm text-secondary">立即透過互動測驗檢驗學習成效，並查看詳細解析！</div>
        </div>

        <div className="flex items-center gap-3">
          <a 
            href={currentUnit.videoUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn-outline text-sm flex items-center gap-1"
            style={{ padding: '9px 16px', color: 'var(--text-secondary)' }}
            title="點擊前往均一教育平台"
          >
            <span>📺 均一影音輔助</span>
            <ExternalLink size={14} />
          </a>

          <button 
            className="btn-primary flex items-center gap-2" 
            onClick={() => navigate(`/quiz/${unitId}`)}
            style={{ padding: '10px 24px', fontSize: '0.95rem', backgroundColor: 'hsl(150, 60%, 40%)', borderColor: 'hsl(150, 60%, 40%)' }}
          >
            <CheckCircle2 size={18} /> 進入觀念重點測驗 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
