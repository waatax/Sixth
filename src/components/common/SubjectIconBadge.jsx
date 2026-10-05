import React from 'react';
import { 
  Calculator, 
  Microscope, 
  BookOpen, 
  Globe, 
  Languages, 
  Palette, 
  Activity, 
  Compass, 
  FileText, 
  Sparkles, 
  Zap, 
  Swords, 
  Layers, 
  Timer, 
  CheckCircle2, 
  GraduationCap, 
  Award,
  FlaskConical,
  Brain,
  Search,
  BookmarkCheck
} from 'lucide-react';

// 信達雅：精準學科與模組視覺語義對應
const ICON_MAP = {
  // 八大學科
  math: Calculator,
  science: Microscope,
  mandarin: BookOpen,
  social: Globe,
  english: Languages,
  arts: Palette,
  health_pe: Activity,
  integrative: Compass,

  // 實戰與特色功能模組
  notes: FileText,
  'exam-notes': FileText,
  labs: FlaskConical,
  shorts: Zap,
  'boss-battle': Swords,
  'memory-game': Layers,
  flashcards: BookmarkCheck,
  'mock-exam': Timer,
  mistakes: CheckCircle2,
  gept: Award,
  prep: GraduationCap,
  search: Search,
  brain: Brain,
  sparkles: Sparkles
};

// 專業色彩語義與柔和背景漸變調配
const COLOR_MAP = {
  math: {
    color: 'hsl(215, 85%, 52%)',
    bg: 'rgba(59, 130, 246, 0.12)',
    border: 'rgba(59, 130, 246, 0.28)',
    shadow: 'rgba(59, 130, 246, 0.2)'
  },
  science: {
    color: 'hsl(152, 70%, 42%)',
    bg: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.28)',
    shadow: 'rgba(16, 185, 129, 0.2)'
  },
  mandarin: {
    color: 'hsl(25, 90%, 52%)',
    bg: 'rgba(249, 115, 22, 0.12)',
    border: 'rgba(249, 115, 22, 0.28)',
    shadow: 'rgba(249, 115, 22, 0.2)'
  },
  social: {
    color: 'hsl(275, 75%, 55%)',
    bg: 'rgba(168, 85, 247, 0.12)',
    border: 'rgba(168, 85, 247, 0.28)',
    shadow: 'rgba(168, 85, 247, 0.2)'
  },
  english: {
    color: 'hsl(192, 88%, 45%)',
    bg: 'rgba(14, 165, 233, 0.12)',
    border: 'rgba(14, 165, 233, 0.28)',
    shadow: 'rgba(14, 165, 233, 0.2)'
  },
  arts: {
    color: 'hsl(340, 82%, 58%)',
    bg: 'rgba(236, 72, 153, 0.12)',
    border: 'rgba(236, 72, 153, 0.28)',
    shadow: 'rgba(236, 72, 153, 0.2)'
  },
  health_pe: {
    color: 'hsl(12, 85%, 54%)',
    bg: 'rgba(239, 68, 68, 0.12)',
    border: 'rgba(239, 68, 68, 0.28)',
    shadow: 'rgba(239, 68, 68, 0.2)'
  },
  integrative: {
    color: 'hsl(168, 75%, 42%)',
    bg: 'rgba(20, 184, 166, 0.12)',
    border: 'rgba(20, 184, 166, 0.28)',
    shadow: 'rgba(20, 184, 166, 0.2)'
  },
  default: {
    color: 'var(--accent-primary)',
    bg: 'var(--accent-soft)',
    border: 'rgba(99, 102, 241, 0.25)',
    shadow: 'rgba(99, 102, 241, 0.18)'
  }
};

const SIZE_MAP = {
  xs: { box: 24, icon: 13, radius: 7 },
  sm: { box: 32, icon: 16, radius: 10 },
  md: { box: 42, icon: 20, radius: 13 },
  lg: { box: 52, icon: 26, radius: 16 },
  xl: { box: 64, icon: 32, radius: 20 }
};

/**
 * SubjectIconBadge
 * 信達雅圖示標準元件：融合 Apple visionOS 磨砂 Squircle 容器與精準 Lucide 向量圖
 *
 * @param {string} id - 學科 id (如 'math', 'science') 或功能模組 id (如 'labs', 'notes')
 * @param {string} size - 'xs' | 'sm' | 'md' | 'lg' | 'xl' (預設 'md')
 * @param {string} customColor - 自訂顏色覆寫 (可選)
 * @param {string} className - 附加 class (可選)
 * @param {object} style - 附加 style (可選)
 * @param {React.ReactNode} children - 額外自訂內容 (可選)
 */
export const SubjectIconBadge = ({ 
  id, 
  size = 'md', 
  customColor, 
  className = '', 
  style = {},
  children 
}) => {
  const IconComponent = ICON_MAP[id] || Sparkles;
  const colorSpec = COLOR_MAP[id] || COLOR_MAP.default;
  const sizeSpec = SIZE_MAP[size] || SIZE_MAP.md;

  const activeColor = customColor || colorSpec.color;

  return (
    <div
      className={`subject-icon-badge flex items-center justify-center select-none ${className}`}
      style={{
        width: `${sizeSpec.box}px`,
        height: `${sizeSpec.box}px`,
        borderRadius: `${sizeSpec.radius}px`,
        backgroundColor: colorSpec.bg,
        border: `1.5px solid ${colorSpec.border}`,
        boxShadow: `0 3px 10px ${colorSpec.shadow}`,
        color: activeColor,
        flexShrink: 0,
        position: 'relative',
        transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)',
        ...style
      }}
    >
      <IconComponent 
        size={sizeSpec.icon} 
        strokeWidth={2.2} 
        style={{ flexShrink: 0 }}
      />
      {children}
    </div>
  );
};

export default SubjectIconBadge;
