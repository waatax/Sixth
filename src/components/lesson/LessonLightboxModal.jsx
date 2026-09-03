import { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink } from 'lucide-react';

const LessonLightboxModal = ({ isOpen, imageSrc, imageAlt, onClose }) => {
  const [scale, setScale] = useState(1);

  if (!isOpen || !imageSrc) return null;

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale((s) => Math.min(s + 0.3, 3));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale((s) => Math.max(s - 0.3, 0.6));
  };

  const handleResetZoom = (e) => {
    e.stopPropagation();
    setScale(1);
  };

  return (
    <div
      className="lesson-lightbox-backdrop animate-fade-in"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.88)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      {/* Top Controls Bar */}
      <div
        className="flex items-center justify-between w-full max-w-4xl mb-3 px-4 py-2 rounded-xl text-white"
        style={{ backgroundColor: 'rgba(30, 41, 59, 0.8)', border: '1px solid rgba(255, 255, 255, 0.15)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 text-xs font-bold truncate pr-4">
          <span>🎨 視覺概念圖解：</span>
          <span className="text-slate-300 truncate">{imageAlt || '教學圖解'}</span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={handleZoomOut}
            className="btn-outline text-xs p-1.5 rounded-lg text-white border-slate-600 hover:bg-slate-700"
            title="縮小"
          >
            <ZoomOut size={16} />
          </button>
          <span className="text-xs font-mono font-bold w-12 text-center text-amber-300">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="btn-outline text-xs p-1.5 rounded-lg text-white border-slate-600 hover:bg-slate-700"
            title="放大"
          >
            <ZoomIn size={16} />
          </button>
          <button
            onClick={handleResetZoom}
            className="btn-outline text-xs p-1.5 rounded-lg text-white border-slate-600 hover:bg-slate-700"
            title="重設大小"
          >
            <RotateCcw size={16} />
          </button>
          <a
            href={imageSrc}
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs p-1.5 rounded-lg text-white border-slate-600 hover:bg-slate-700 ml-1"
            title="新分頁開啟原圖"
          >
            <ExternalLink size={16} />
          </a>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-red-500/20 border border-red-500/40 text-red-300 hover:bg-red-500 hover:text-white transition-colors ml-2"
            title="關閉預覽 (ESC)"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Image Display Area */}
      <div
        className="flex items-center justify-center overflow-auto max-w-5xl max-h-[80vh] rounded-2xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={imageAlt || '圖解高清展示'}
          style={{
            transform: `scale(${scale})`,
            transition: 'transform 0.2s ease',
            maxWidth: '100%',
            maxHeight: '75vh',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
          }}
        />
      </div>

      <div className="text-xs text-slate-400 mt-3 text-center">
        💡 點擊背景任一處或按下右上角 ✕ 即可關閉放大預覽
      </div>
    </div>
  );
};

export default LessonLightboxModal;
