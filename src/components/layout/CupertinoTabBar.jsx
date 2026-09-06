import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Zap, 
  Sparkles, 
  Swords, 
  LayoutGrid, 
  X, 
  Timer, 
  CheckCircle2, 
  GraduationCap, 
  ShoppingBag, 
  Layers, 
  HelpCircle,
  Globe
} from 'lucide-react';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

const CupertinoTabBar = () => {
  const location = useLocation();
  const [isMoreSheetOpen, setIsMoreSheetOpen] = useState(false);

  const mainTabs = [
    { path: '/', label: '學習領域', icon: BookOpen },
    { path: '/shorts', label: '短影音', icon: Zap },
    { path: '/labs', label: '實驗室', icon: Sparkles },
    { path: '/boss-battle', label: '魔王戰', icon: Swords },
  ];

  const moreItems = [
    { path: '/flashcards', label: '速記翻翻卡', icon: Zap, color: '#f59e0b', desc: '考前重點高效速記' },
    { path: '/mock-exam', label: '全真模擬考', icon: Timer, color: '#ef4444', desc: '倒數計時真實段考' },
    { path: '/mistakes', label: '錯題粉碎擂台', icon: CheckCircle2, color: '#10b981', desc: '揮動重錘擊碎弱點' },
    { path: '/gept', label: '全民英檢先修', icon: Sparkles, color: '#8b5cf6', desc: '單字聽力雙語特訓' },
    { path: '/prep', label: '國中七年級先修', icon: GraduationCap, color: '#0ea5e9', desc: '會考必備衔接要點' },
    { path: '/shop', label: '星光守護商城', icon: ShoppingBag, color: '#ec4899', desc: '裝備飾品屬性強化' },
    { path: '/memory-game', label: '記憶翻牌挑戰', icon: Layers, color: '#6366f1', desc: '專注力與腦力特訓' },
    { path: '/question-bank', label: '全國段考試題庫', icon: HelpCircle, color: '#14b8a6', desc: '歷屆名校段考真題' },
    { path: '/resources', label: '全臺教育導航', icon: Globe, color: '#64748b', desc: '因材網均一公私立庫' }
  ];

  const handleTabClick = () => {
    triggerHaptic('selection');
    playSound('ios_tap');
  };

  const isMoreActive = moreItems.some(item => location.pathname === item.path);

  return (
    <>
      {/* Bottom Frosted Cupertino TabBar */}
      <nav aria-label="行動底部導航" className="cupertino-tab-bar">
        {mainTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              onClick={handleTabClick}
              className={`cupertino-tab-item ios-pressable ${isActive ? 'active' : ''}`}
            >
              <div className="tab-icon">
                <Icon size={21} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span>{tab.label}</span>
            </Link>
          );
        })}

        {/* 5th Tab: More Action Sheet Trigger */}
        <button
          onClick={() => {
            setIsMoreSheetOpen(true);
            triggerHaptic('selection');
            playSound('ios_tap');
          }}
          className={`cupertino-tab-item ios-pressable ${isMoreActive ? 'active' : ''}`}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="更多功能選單"
        >
          <div className="tab-icon">
            <LayoutGrid size={21} strokeWidth={isMoreActive ? 2.5 : 2} />
          </div>
          <span>更多功能</span>
        </button>
      </nav>

      {/* iOS Action Sheet for 'More' */}
      {isMoreSheetOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
          }}
          onClick={() => setIsMoreSheetOpen(false)}
        >
          <div 
            className="ios-action-sheet" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sheet Handle Indicator (iOS Pull-bar) */}
            <div className="flex justify-center mb-3">
              <div 
                style={{ 
                  width: '42px', 
                  height: '5px', 
                  borderRadius: '3px', 
                  backgroundColor: 'var(--border-strong)', 
                  opacity: 0.7 
                }} 
              />
            </div>

            {/* Sheet Header */}
            <div className="flex justify-between items-center pb-3 mb-4 border-b" style={{ borderColor: 'var(--border-light)' }}>
              <div className="flex items-center gap-2">
                <LayoutGrid size={20} style={{ color: 'var(--accent-primary)' }} />
                <span style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  全功能學習庫
                </span>
              </div>
              <button
                onClick={() => setIsMoreSheetOpen(false)}
                className="ios-pressable flex items-center justify-center"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-secondary)',
                  border: 'none'
                }}
                aria-label="關閉"
              >
                <X size={16} />
              </button>
            </div>

            {/* Grid of All Modules */}
            <div className="grid grid-cols-2 gap-3 mb-2">
              {moreItems.map((item) => {
                const Icon = item.icon;
                const isSelected = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      setIsMoreSheetOpen(false);
                      handleTabClick();
                    }}
                    className="ios-pressable p-3 rounded-2xl flex items-start gap-3 text-left"
                    style={{
                      textDecoration: 'none',
                      backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
                      border: isSelected ? '1.5px solid var(--accent-primary)' : '1px solid var(--border-light)'
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        backgroundColor: item.color,
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div style={{ overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          fontSize: '0.85rem', 
                          fontWeight: 700, 
                          color: isSelected ? 'var(--accent-text)' : 'var(--text-primary)',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}
                      >
                        {item.label}
                      </div>
                      <div 
                        style={{ 
                          fontSize: '0.68rem', 
                          color: 'var(--text-tertiary)', 
                          marginTop: '2px',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CupertinoTabBar;
