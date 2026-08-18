import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const FONT_SIZES = {
  sm: { label: '標準', scale: '1', class: 'font-size-sm' },
  md: { label: '中大', scale: '1.125', class: 'font-size-md' },
  lg: { label: '特大', scale: '1.25', class: 'font-size-lg' },
  xl: { label: '超大護眼', scale: '1.375', class: 'font-size-xl' },
};

export const THEMES = {
  light: {
    id: 'light',
    name: '淨柔明亮',
    icon: '☀️',
    desc: '柔和無眩光白晝模式'
  },
  dark: {
    id: 'dark',
    name: '深邃夜讀',
    icon: '🌙',
    desc: '低刺激沉浸夜間模式'
  },
  sepia: {
    id: 'sepia',
    name: '護眼暖陽',
    icon: '🌿',
    desc: '抗藍光羊皮紙暖光模式'
  }
};

export const ThemeProvider = ({ children }) => {
  // Theme state: 'light' | 'dark' | 'sepia'
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('sixth_theme');
    if (saved && ['light', 'dark', 'sepia'].includes(saved)) {
      return saved;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  // Font size state: 'sm' | 'md' | 'lg' | 'xl'
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('sixth_font_size');
    if (saved && Object.keys(FONT_SIZES).includes(saved)) {
      return saved;
    }
    return 'sm'; // Default standard
  });

  // Focus mode / reading ruler state
  const [focusMode, setFocusMode] = useState(() => {
    return localStorage.getItem('sixth_focus_mode') === 'true';
  });

  // Apply theme & font scale to documentElement
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('sixth_theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-font-size', fontSize);
    root.style.setProperty('--font-scale', FONT_SIZES[fontSize]?.scale || '1');
    localStorage.setItem('sixth_font_size', fontSize);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('sixth_focus_mode', String(focusMode));
  }, [focusMode]);

  const toggleTheme = () => {
    const themeCycle = ['light', 'sepia', 'dark'];
    const nextIdx = (themeCycle.indexOf(theme) + 1) % themeCycle.length;
    setTheme(themeCycle[nextIdx]);
  };

  const increaseFontSize = () => {
    const keys = Object.keys(FONT_SIZES);
    const currIdx = keys.indexOf(fontSize);
    if (currIdx < keys.length - 1) {
      setFontSize(keys[currIdx + 1]);
    }
  };

  const decreaseFontSize = () => {
    const keys = Object.keys(FONT_SIZES);
    const currIdx = keys.indexOf(fontSize);
    if (currIdx > 0) {
      setFontSize(keys[currIdx - 1]);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        fontSize,
        setFontSize,
        increaseFontSize,
        decreaseFontSize,
        focusMode,
        setFocusMode,
        FONT_SIZES,
        THEMES
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
