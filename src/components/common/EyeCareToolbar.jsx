import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Volume2, VolumeX, Eye, ArrowUp, Minus, Plus } from 'lucide-react';
import { toggleMute, getMuteState } from '../../utils/soundEffects';

const EyeCareToolbar = ({ isCompact = false }) => {
  const { theme, setTheme, THEMES, fontSize, FONT_SIZES, increaseFontSize, decreaseFontSize } = useTheme();
  const [muted, setMuted] = useState(getMuteState());
  const [isOpen, setIsOpen] = useState(false);

  const handleMuteToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Compact inline toolbar for Header
  if (isCompact) {
    return (
      <div className="flex items-center gap-2">
        {/* Theme Quick Switcher */}
        <div className="flex items-center bg-tertiary p-1 rounded-full border border-light" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', padding: '3px' }}>
          <button
            onClick={() => setTheme('light')}
            className={`flex items-center justify-center`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: theme === 'light' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'light' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'light' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="☀️ 淨柔明亮模式"
            aria-label="淨柔明亮模式"
          >
            <Sun size={17} />
          </button>

          <button
            onClick={() => setTheme('sepia')}
            className={`flex items-center justify-center`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: theme === 'sepia' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'sepia' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'sepia' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="🌿 護眼暖陽模式（抗藍光）"
            aria-label="護眼暖陽模式"
          >
            <Eye size={17} />
          </button>

          <button
            onClick={() => setTheme('dark')}
            className={`flex items-center justify-center`}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'dark' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="🌙 深邃夜讀模式"
            aria-label="深邃夜讀模式"
          >
            <Moon size={17} />
          </button>
        </div>

        {/* Font Size Stepper */}
        <div className="flex items-center gap-1 bg-tertiary px-2 py-1 rounded-full border border-light" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', padding: '3px 8px' }}>
          <button
            onClick={decreaseFontSize}
            disabled={fontSize === 'sm'}
            style={{
              padding: '4px 6px',
              borderRadius: 'var(--radius-sm)',
              opacity: fontSize === 'sm' ? 0.35 : 1,
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
            title="縮小字體"
            aria-label="縮小字體"
          >
            A-
          </button>

          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)', padding: '0 4px', minWidth: '42px', textAlign: 'center' }}>
            {FONT_SIZES[fontSize]?.label}
          </span>

          <button
            onClick={increaseFontSize}
            disabled={fontSize === 'xl'}
            style={{
              padding: '4px 6px',
              borderRadius: 'var(--radius-sm)',
              opacity: fontSize === 'xl' ? 0.35 : 1,
              color: 'var(--accent-primary)',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
            title="放大字體（護眼）"
            aria-label="放大字體"
          >
            A+
          </button>
        </div>

        {/* Sound Toggle */}
        <button
          onClick={handleMuteToggle}
          className="flex items-center justify-center"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-tertiary)',
            border: '1px solid var(--border-light)',
            color: muted ? 'var(--text-tertiary)' : 'var(--accent-primary)'
          }}
          title={muted ? '開啟互動音效' : '靜音'}
          aria-label={muted ? '開啟音效' : '靜音'}
        >
          {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
        </button>
      </div>
    );
  }

  // Floating Bottom Dock Widget (Expandable)
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '12px'
      }}
    >
      {/* Expanded Eye-Care Settings Card */}
      {isOpen && (
        <div
          className="card animate-fade-in"
          style={{
            width: '300px',
            padding: '20px',
            backgroundColor: 'var(--bg-secondary)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Eye size={18} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>視覺護眼與閱讀輔助</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', padding: '2px 6px' }}
            >
              ✕
            </button>
          </div>

          {/* Theme Selection */}
          <div className="mb-4">
            <div className="text-xs font-bold text-secondary mb-2">🎨 閱讀光譜與主題：</div>
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  style={{
                    padding: '8px 6px',
                    borderRadius: 'var(--radius-md)',
                    border: theme === t.id ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)',
                    backgroundColor: theme === t.id ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
                    color: theme === t.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
                    fontWeight: theme === t.id ? 700 : 500,
                    fontSize: '0.8rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Adjuster */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs font-bold text-secondary mb-2">
              <span>🔤 字體大小調節：</span>
              <span className="badge badge-accent">{FONT_SIZES[fontSize]?.label} ({FONT_SIZES[fontSize]?.scale * 100}%)</span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                className="btn-outline flex-grow"
                onClick={decreaseFontSize}
                disabled={fontSize === 'sm'}
                style={{ opacity: fontSize === 'sm' ? 0.4 : 1, padding: '8px', fontSize: '0.85rem' }}
              >
                <Minus size={14} /> 縮小 A-
              </button>
              <button
                className="btn-primary flex-grow"
                onClick={increaseFontSize}
                disabled={fontSize === 'xl'}
                style={{ opacity: fontSize === 'xl' ? 0.4 : 1, padding: '8px', fontSize: '0.85rem' }}
              >
                <Plus size={14} /> 放大 A+
              </button>
            </div>
          </div>

          {/* Sound Control */}
          <div className="pt-3 border-t flex justify-between items-center text-sm" style={{ borderTop: '1px solid var(--border-light)' }}>
            <span className="text-secondary text-xs">互動音效回饋：</span>
            <button
              onClick={handleMuteToggle}
              className="btn-pill"
              style={{
                backgroundColor: muted ? 'var(--bg-tertiary)' : 'var(--accent-soft)',
                color: muted ? 'var(--text-tertiary)' : 'var(--accent-primary)',
                borderColor: muted ? 'var(--border-light)' : 'var(--accent-primary)'
              }}
            >
              {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span>{muted ? '已靜音' : '音效已開啟'}</span>
            </button>
          </div>

          {/* Eye-care tip reminder */}
          <div className="mt-3 p-2 rounded text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-tertiary)', lineHeight: 1.5 }}>
            💡 溫馨護眼叮嚀：建議用眼 30 分鐘遠眺 20 英呎 (6公尺) 放鬆 20 秒。
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button Bar */}
      <div className="flex items-center gap-2">
        <button
          onClick={scrollToTop}
          className="card flex items-center justify-center"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-strong)',
            padding: 0
          }}
          title="回頁首"
          aria-label="回頁首"
        >
          <ArrowUp size={20} />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
          style={{
            height: '46px',
            padding: '0 18px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
            fontWeight: 700,
            fontSize: '0.88rem',
            border: 'none',
            cursor: 'pointer'
          }}
          title="開啟視覺護眼與字級控制盤"
          aria-label="護眼控制盤"
        >
          <Eye size={18} />
          <span>護眼與字級</span>
        </button>
      </div>
    </div>
  );
};

export default EyeCareToolbar;
