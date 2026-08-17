import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, CheckCircle2, Image as ImageIcon, Sparkles } from 'lucide-react';
import { coursesData } from '../data/courses';
import './LessonPage.css';

// Vite dynamic import for raw markdown files
const mdModules = import.meta.glob('../data/lessons/*.md', { query: '?raw', import: 'default' });

// Subject to illustration mapping
const subjectImages = {
  math: {
    src: './images/math_visual.jpg',
    title: '【數學核心圖解】幾何圖形・分數運算・坐標與測量'
  },
  science: {
    src: './images/science_visual.jpg',
    title: '【自然科學圖解】氣象預報・電磁鐵・槓桿天平與生態系'
  },
  mandarin: {
    src: './images/social_visual.jpg',
    title: '【國語與人文圖解】古典書卷・文學修辭與表達溝通'
  },
  social: {
    src: './images/social_visual.jpg',
    title: '【社會領域圖解】臺灣地圖・民主法治・多元族群與SDGs永續'
  },
  english: {
    src: './images/english_arts_visual.jpg',
    title: '【英語溝通圖解】日常作息・對話情境與世界節慶'
  },
  arts: {
    src: './images/english_arts_visual.jpg',
    title: '【藝術美學圖解】色彩調色盤・樂器五線譜與設計思考'
  },
  health_pe: {
    src: './images/english_arts_visual.jpg',
    title: '【健體急救圖解】CPR急救・運動體適能與健康生活'
  },
  integrative: {
    src: './images/english_arts_visual.jpg',
    title: '【綜合活動圖解】時間金錢管理・多元智能與自主學習'
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
        <button className="btn-primary mt-4" onClick={() => navigate('/')}>返回首頁</button>
      </div>
    );
  }

  return (
    <div className="lesson-page-wrapper max-w-3xl mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <button 
          className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors" 
          style={{ color: 'var(--text-secondary)' }} 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} /> 返回單元列表
        </button>

        {currentSubject && (
          <span className="badge" style={{ backgroundColor: `${currentSubject.color}15`, color: currentSubject.color, fontWeight: 600 }}>
            {currentSubject.name}
          </span>
        )}
      </div>

      {/* Featured Educational Illustration Banner */}
      {subjectIllustration && (
        <div className="card mb-6" style={{ padding: '16px', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}>
          <div className="flex items-center gap-2 mb-3 text-sm" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            <ImageIcon size={18} />
            <span>{subjectIllustration.title}</span>
          </div>
          <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-light)' }}>
            <img 
              src={subjectIllustration.src} 
              alt={subjectIllustration.title} 
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '360px', objectFit: 'cover' }} 
            />
          </div>
        </div>
      )}

      {loading ? (
        <div className="card text-center py-12">
          <Sparkles className="animate-spin mb-2 mx-auto text-primary" size={32} />
          <p>載入深度圖解教學內容中...</p>
        </div>
      ) : (
        <div className="card markdown-body" style={{ padding: '36px' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      )}

      {/* Bottom CTA for Quiz */}
      <div className="flex justify-between items-center flex-wrap gap-4 mt-8 pt-6 border-t" style={{ borderTop: '1px solid var(--border-light)' }}>
        <a 
          href={currentUnit.videoUrl} 
          target="_blank" 
          rel="noreferrer" 
          className="btn-outline text-sm"
          style={{ padding: '10px 20px' }}
        >
          ▶️ 均一平台影片輔助
        </a>

        <button 
          className="btn-primary flex items-center gap-2" 
          onClick={() => navigate(`/quiz/${unitId}`)}
          style={{ padding: '10px 24px', fontSize: '1rem' }}
        >
          <CheckCircle2 size={18} /> 進入單元重點測驗（觀念驗收）
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
