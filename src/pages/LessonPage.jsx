import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { coursesData } from '../data/courses';
import './LessonPage.css';

// Vite dynamic import for raw markdown files
const mdModules = import.meta.glob('../data/lessons/*.md', { query: '?raw', import: 'default' });

const LessonPage = () => {
  const { unitId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  // Find unit metadata
  let currentUnit = null;
  let currentSubjectId = null;
  for (const subjectId in coursesData.units) {
    const unit = coursesData.units[subjectId].find(u => u.id === unitId);
    if (unit) {
      currentUnit = unit;
      currentSubjectId = subjectId;
      break;
    }
  }

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
    return <div className="container py-8 text-center">找不到此單元資料。</div>;
  }

  return (
    <div className="lesson-page-wrapper max-w-3xl mx-auto py-8">
      <button 
        className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors mb-6" 
        style={{ color: 'var(--text-secondary)' }} 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={16} /> 返回列表
      </button>

      {loading ? (
        <div className="card text-center py-12">載入教學內容中...</div>
      ) : (
        <div className="card markdown-body" style={{ padding: '40px' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      )}

      <div className="flex justify-end mt-8">
        <button 
          className="btn-primary flex items-center gap-2" 
          onClick={() => navigate(`/quiz/${unitId}`)}
        >
          <CheckCircle2 size={18} /> 進入單元重點測驗
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
