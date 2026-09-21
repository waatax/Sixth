import React, { useState, useEffect, useRef } from 'react';
import { 
  PenTool, 
  Eraser, 
  RotateCcw, 
  Trash2, 
  Download, 
  X, 
  Grid, 
  Square, 
  Sparkles, 
  Check, 
  Maximize2,
  Minimize2
} from 'lucide-react';
import { playSound } from '../../utils/soundEffects';

const LessonScratchpadModal = ({ isOpen, onClose, unitId, unitTitle }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState('pen'); // 'pen' | 'eraser'
  const [color, setColor] = useState('#2563eb'); // Default blue
  const [lineWidth, setLineWidth] = useState(3);
  const [bgStyle, setBgStyle] = useState('grid'); // 'grid' | 'dots' | 'blank'
  const [history, setHistory] = useState([]);
  const [historyStep, setHistoryStep] = useState(-1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);

  const colors = [
    { label: '藍色', val: '#2563eb' },
    { label: '黑色', val: '#1e293b' },
    { label: '紅色', val: '#ef4444' },
    { label: '綠色', val: '#10b981' },
    { label: '紫色', val: '#8b5cf6' },
    { label: '橘黃', val: '#f59e0b' }
  ];

  const storageKey = `sixth_scratchpad_${unitId}`;

  // Initialize Canvas
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      // Set display buffer resolution
      canvas.width = rect.width * window.devicePixelRatio || 800;
      canvas.height = rect.height * window.devicePixelRatio || 500;

      const ctx = canvas.getContext('2d');
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Load saved drawing if exists
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, rect.width, rect.height);
          saveState();
        };
        img.src = savedData;
      } else {
        saveState();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isOpen, storageKey]);

  // Save current canvas state to history for undo
  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL();
    setHistory(prev => [...prev.slice(0, historyStep + 1), dataUrl]);
    setHistoryStep(prev => prev + 1);

    try {
      localStorage.setItem(storageKey, dataUrl);
      setHasSaved(true);
      setTimeout(() => setHasSaved(false), 1500);
    } catch (e) {}
  };

  const undo = () => {
    if (historyStep <= 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const prevStep = historyStep - 1;
    const imgData = history[prevStep];

    const img = new Image();
    img.onload = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, 0, 0, rect.width, rect.height);
      setHistoryStep(prevStep);
      try {
        localStorage.setItem(storageKey, imgData);
      } catch (e) {}
    };
    img.src = imgData;
    playSound('click');
  };

  const clearCanvas = () => {
    if (window.confirm('確定要清空草稿畫布嗎？')) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      saveState();
      playSound('click');
    }
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${unitId}_隨堂計算草稿.png`;
    a.click();
    playSound('coin');
  };

  // Drawing event handlers
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(x, y);

    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = lineWidth * 4;
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }

    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.closePath();
      }
      setIsDrawing(false);
      saveState();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="lesson-scratchpad-backdrop animate-fade-in"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(5px)',
        zIndex: 99998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isFullScreen ? '0' : '16px'
      }}
    >
      <div 
        className="lesson-scratchpad-panel animate-scale-up"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isFullScreen ? '100vw' : '100%',
          maxWidth: isFullScreen ? '100vw' : '880px',
          height: isFullScreen ? '100vh' : '82vh',
          maxHeight: isFullScreen ? '100vh' : '680px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: isFullScreen ? '0' : 'var(--radius-xl)',
          border: isFullScreen ? 'none' : '2px solid var(--border-strong)',
          boxShadow: 'var(--shadow-xl)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Top Control Bar */}
        <div 
          className="scratchpad-header flex items-center justify-between p-3 border-b border-light flex-wrap gap-2"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div className="flex items-center gap-2">
            <div 
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <PenTool size={16} />
            </div>
            <div>
              <div className="font-bold text-xs flex items-center gap-1.5" style={{ color: 'var(--text-primary)' }}>
                <span>🧮 隨堂演練計算塗鴉板</span>
                <span className="badge badge-accent text-[10px] py-0.5">自動保存</span>
              </div>
              <span className="text-[10px] text-tertiary">{unitTitle} 專屬草稿紙</span>
            </div>
          </div>

          {/* Tools Selector */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* Pen vs Eraser */}
            <div className="flex items-center bg-slate-200/70 dark:bg-slate-700/70 p-0.5 rounded-lg">
              <button
                onClick={() => { setTool('pen'); playSound('click'); }}
                className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-all ${
                  tool === 'pen' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-600 dark:text-slate-300'
                }`}
                title="畫筆模式"
              >
                <PenTool size={13} />
                <span>畫筆</span>
              </button>
              <button
                onClick={() => { setTool('eraser'); playSound('click'); }}
                className={`p-1.5 rounded-md text-xs font-bold flex items-center gap-1 transition-all ${
                  tool === 'eraser' ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-600 dark:text-slate-300'
                }`}
                title="橡皮擦"
              >
                <Eraser size={13} />
                <span>板擦</span>
              </button>
            </div>

            {/* Colors (if pen mode) */}
            {tool === 'pen' && (
              <div className="flex items-center gap-1 ml-1">
                {colors.map(c => (
                  <button
                    key={c.val}
                    onClick={() => { setColor(c.val); playSound('click'); }}
                    style={{
                      backgroundColor: c.val,
                      width: color === c.val ? '22px' : '18px',
                      height: color === c.val ? '22px' : '18px',
                      borderRadius: '50%',
                      border: color === c.val ? '2px solid white' : 'none',
                      outline: color === c.val ? '2px solid #3b82f6' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    title={c.label}
                  />
                ))}
              </div>
            )}

            {/* Stroke Thickness */}
            <div className="flex items-center gap-1 text-[11px] text-tertiary ml-1">
              {[2, 4, 8].map(w => (
                <button
                  key={w}
                  onClick={() => setLineWidth(w)}
                  className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                    lineWidth === w ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300' : 'text-tertiary'
                  }`}
                  title={`筆寬 ${w}px`}
                >
                  <span style={{ fontSize: `${8 + w * 1.5}px` }}>•</span>
                </button>
              ))}
            </div>

            {/* Grid / Dots Background Selector */}
            <div className="flex items-center bg-slate-200/70 dark:bg-slate-700/70 p-0.5 rounded-lg ml-1">
              <button
                onClick={() => setBgStyle('grid')}
                className={`p-1 rounded text-xs ${bgStyle === 'grid' ? 'bg-white dark:bg-slate-800 text-primary' : 'text-tertiary'}`}
                title="數學方格紙"
              >
                <Grid size={13} />
              </button>
              <button
                onClick={() => setBgStyle('dots')}
                className={`p-1 rounded text-xs ${bgStyle === 'dots' ? 'bg-white dark:bg-slate-800 text-primary' : 'text-tertiary'}`}
                title="點陣紙"
              >
                <span className="text-xs px-0.5 font-bold">⁝</span>
              </button>
              <button
                onClick={() => setBgStyle('blank')}
                className={`p-1 rounded text-xs ${bgStyle === 'blank' ? 'bg-white dark:bg-slate-800 text-primary' : 'text-tertiary'}`}
                title="純白空白板"
              >
                <Square size={12} />
              </button>
            </div>

            {/* Actions: Undo, Clear, Download, Maximize, Close */}
            <button
              onClick={undo}
              disabled={historyStep <= 0}
              className="p-1.5 rounded-lg text-secondary hover:text-primary disabled:opacity-30"
              title="復原上一步"
            >
              <RotateCcw size={14} />
            </button>
            <button
              onClick={clearCanvas}
              className="p-1.5 rounded-lg text-secondary hover:text-rose-500"
              title="清空畫布"
            >
              <Trash2 size={14} />
            </button>
            <button
              onClick={handleDownload}
              className="p-1.5 rounded-lg text-secondary hover:text-primary"
              title="下載草稿圖檔"
            >
              <Download size={14} />
            </button>
            <button
              onClick={() => setIsFullScreen(!isFullScreen)}
              className="p-1.5 rounded-lg text-secondary hover:text-primary hidden sm:inline"
              title={isFullScreen ? '退出全螢幕' : '全螢幕演算'}
            >
              {isFullScreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-secondary hover:text-primary ml-1"
              title="關閉"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Canvas Workspace Area */}
        <div 
          ref={containerRef}
          className={`scratchpad-canvas-container flex-1 relative overflow-hidden select-none touch-none bg-style-${bgStyle}`}
          style={{
            cursor: tool === 'eraser' ? 'cell' : 'crosshair'
          }}
        >
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
          />

          {hasSaved && (
            <div 
              className="absolute bottom-3 right-3 badge badge-success text-[10px] flex items-center gap-1 opacity-80"
            >
              <Check size={11} /> 已自動儲存草稿
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonScratchpadModal;
