import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Volume2, VolumeX, Eye, ArrowUp, Minus, Plus, Leaf } from 'lucide-react';
import { toggleMute, getMuteState } from '../../utils/soundEffects';

const EyeCareToolbar = ({ isCompact = false }) => {
  const { theme, setTheme, THEMES, fontSize, setFontSize, FONT_SIZES, increaseFontSize, decreaseFontSize } = useTheme();
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
        {/* Theme Quick Switcher (4 eye-care modes) */}
        <div className="flex items-center bg-tertiary p-1 rounded-full border border-light" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', padding: '2px 4px', gap: '2px' }}>
          <button
            onClick={() => setTheme('light')}
            className="flex items-center justify-center"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: theme === 'light' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'light' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'light' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="☀️ 淨柔明亮模式"
            aria-label="淨柔明亮模式"
          >
            <Sun size={15} />
          </button>

          <button
            onClick={() => setTheme('sepia')}
            className="flex items-center justify-center"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: theme === 'sepia' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'sepia' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'sepia' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="🌿 護眼暖陽模式（抗藍光）"
            aria-label="護眼暖陽模式"
          >
            <Eye size={15} />
          </button>

          <button
            onClick={() => setTheme('green')}
            className="flex items-center justify-center"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: theme === 'green' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'green' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'green' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="🍃 舒眼青木模式（抗疲勞）"
            aria-label="舒眼青木模式"
          >
            <Leaf size={15} />
          </button>

          <button
            onClick={() => setTheme('dark')}
            className="flex items-center justify-center"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: theme === 'dark' ? 'var(--bg-secondary)' : 'transparent',
              color: theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              boxShadow: theme === 'dark' ? 'var(--shadow-sm)' : 'none',
              transition: 'all var(--transition-fast)'
            }}
            title="🌙 深邃夜讀模式"
            aria-label="深邃夜讀模式"
          >
            <Moon size={15} />
          </button>
        </div>

        {/* Font Size Stepper */}
        <div className="flex items-center gap-1 bg-tertiary px-2 py-1 rounded-full border border-light" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-light)', padding: '2px 6px' }}>
          <button
            onClick={decreaseFontSize}
            disabled={fontSize === 'xs'}
            style={{
              padding: '3px 5px',
              borderRadius: 'var(--radius-sm)',
              opacity: fontSize === 'xs' ? 0.35 : 1,
              color: 'var(--text-primary)',
              fontWeight: 700,
              fontSize: '0.82rem'
            }}
            title="縮小字體"
            aria-label="縮小字體"
          >
            A-
          </button>

          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--accent-primary)', padding: '0 4px', minWidth: '40px', textAlign: 'center' }}>
            {FONT_SIZES[fontSize]?.label}
          </span>

          <button
            onClick={increaseFontSize}
            disabled={fontSize === 'xl'}
            style={{
              padding: '3px 5px',
              borderRadius: 'var(--radius-sm)',
              opacity: fontSize === 'xl' ? 0.35 : 1,
              color: 'var(--accent-primary)',
              fontWeight: 700,
              fontSize: '0.82rem'
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
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-tertiary)',
            border: '1px solid var(--border-light)',
            color: muted ? 'var(--text-tertiary)' : 'var(--accent-primary)'
          }}
          title={muted ? '開啟互動音效' : '靜音'}
          aria-label={muted ? '開啟音效' : '靜音'}
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    );
  }

  // Floating Bottom Dock Widget (Expandable)
  return (
    <div
      className="floating-eyecare-dock"
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
            width: '320px',
            maxWidth: 'calc(100vw - 28px)',
            padding: '18px',
            backgroundColor: 'var(--bg-secondary)',
            boxShadow: 'var(--shadow-lg)',
            border: '1.5px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Eye size={18} style={{ color: 'var(--accent-primary)' }} />
              <span style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-primary)' }}>視覺護眼與閱讀輔助</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', padding: '2px 8px', borderRadius: '50%' }}
              aria-label="關閉護眼面版"
            >
              ✕
            </button>
          </div>

          {/* Theme Selection - 4 Curated Eye-Care Palettes */}
          <div className="mb-4">
            <div className="text-xs font-bold text-secondary mb-2 flex items-center justify-between">
              <span>🎨 護眼閱讀光譜：</span>
              <span className="badge badge-accent" style={{ fontSize: '0.72rem' }}>{THEMES[theme]?.name}</span>
            </div>
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              {Object.values(THEMES).map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  style={{
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-md)',
                    border: theme === t.id ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)',
                    backgroundColor: theme === t.id ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
                    color: theme === t.id ? 'var(--accent-primary)' : 'var(--text-primary)',
                    fontWeight: theme === t.id ? 800 : 600,
                    fontSize: '0.82rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <span style={{ fontSize: '1.15rem' }}>{t.icon}</span>
                  <span style={{ whiteSpace: 'nowrap' }}>{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Adjuster - 5 Scaling Tiers */}
          <div className="mb-4">
            <div className="flex justify-between items-center text-xs font-bold text-secondary mb-2">
              <span>🔤 動態字級縮放：</span>
              <span className="badge badge-accent font-mono">{FONT_SIZES[fontSize]?.label} ({Math.round(FONT_SIZES[fontSize]?.scale * 100)}%)</span>
            </div>
            {/* Quick 5-tier pill selector */}
            <div className="flex items-center justify-between gap-1 mb-2 bg-tertiary p-1 rounded-lg" style={{ backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-sm)' }}>
              {Object.entries(FONT_SIZES).map(([key, val]) => (
                <button
                  key={key}
                  onClick={() => setFontSize(key)}
                  style={{
                    flex: 1,
                    padding: '5px 2px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: fontSize === key ? 800 : 500,
                    backgroundColor: fontSize === key ? 'var(--accent-primary)' : 'transparent',
                    color: fontSize === key ? 'var(--text-inverse)' : 'var(--text-secondary)',
                    border: 'none',
                    textAlign: 'center',
                    transition: 'all var(--transition-fast)'
                  }}
                  title={`${val.label} (${Math.round(val.scale * 100)}%)`}
                >
                  {val.label}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                className="btn-outline flex-grow"
                onClick={decreaseFontSize}
                disabled={fontSize === 'xs'}
                style={{ opacity: fontSize === 'xs' ? 0.35 : 1, padding: '7px', fontSize: '0.82rem', minHeight: '38px' }}
              >
                <Minus size={14} /> 縮小 A-
              </button>
              <button
                className="btn-primary flex-grow"
                onClick={increaseFontSize}
                disabled={fontSize === 'xl'}
                style={{ opacity: fontSize === 'xl' ? 0.35 : 1, padding: '7px', fontSize: '0.82rem', minHeight: '38px' }}
              >
                <Plus size={14} /> 放大 A+
              </button>
            </div>
          </div>

          {/* Sound Control */}
          <div className="pt-3 border-t flex justify-between items-center text-sm" style={{ borderTop: '1px solid var(--border-light)' }}>
            <span className="text-secondary text-xs font-semibold">互動音效回饋：</span>
            <button
              onClick={handleMuteToggle}
              className="btn-pill"
              style={{
                backgroundColor: muted ? 'var(--bg-tertiary)' : 'var(--accent-soft)',
                color: muted ? 'var(--text-tertiary)' : 'var(--accent-primary)',
                borderColor: muted ? 'var(--border-light)' : 'var(--accent-primary)',
                fontSize: '0.78rem'
              }}
            >
              {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span>{muted ? '已靜音' : '音效已開啟'}</span>
            </button>
          </div>

          {/* Eye-care tip reminder */}
          <div className="mt-3 p-2.5 rounded-lg text-xs" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)', lineHeight: 1.5, border: '1px solid var(--border-light)' }}>
            💡 <strong>護眼 20-20-20 原則</strong>：每看螢幕 20 分鐘，遠眺 20 呎 (6 公尺) 外景物 20 秒，守護視力健康！
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button Bar */}
      <div className="flex items-center gap-2">
        <button
          onClick={scrollToTop}
          className="card flex items-center justify-center ios-pressable"
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-secondary)',
            boxShadow: 'var(--shadow-md)',
            border: '1.5px solid var(--border-strong)',
            padding: 0
          }}
          title="回頁首"
          aria-label="回頁首"
        >
          <ArrowUp size={20} />
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 ios-pressable"
          style={{
            height: '46px',
            padding: '0 16px',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-inverse)',
            boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
            fontWeight: 800,
            fontSize: '0.86rem',
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
