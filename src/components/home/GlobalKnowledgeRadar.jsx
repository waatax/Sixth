import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Flame, 
  BookOpen, 
  Shuffle, 
  Trophy, 
  Bookmark, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  Clock,
  Network
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import { useGamification } from '../../context/GamificationContext';
import { triggerHaptic, playSound, dispatchDynamicIsland } from '../../utils/soundEffects';
import SubjectIconBadge from '../common/SubjectIconBadge';
import TrophyHallModal from '../gamification/TrophyHallModal';
import GlobalConceptGalaxyModal from './GlobalConceptGalaxyModal';

export const GlobalKnowledgeRadar = () => {
  const navigate = useNavigate();
  const { 
    unitStars = {}, 
    readLessons = {}, 
    streak = 1, 
    bookmarks = [],
    addXp,
    addCoins,
    todayConceptsMastered = 0,
    activityHistory = {},
    badges = []
  } = useGamification();

  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'tasks' | 'bookmarks'
  const [isTrophyHallOpen, setIsTrophyHallOpen] = useState(false);
  const [isGalaxyOpen, setIsGalaxyOpen] = useState(false);
  const [dailyChestClaimed, setDailyChestClaimed] = useState(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      return localStorage.getItem(`sixth_daily_chest_${today}`) === 'true';
    } catch (e) {
      return false;
    }
  });

  // Collect all units
  const allUnits = useMemo(() => {
    const list = [];
    coursesData.subjects.forEach(sub => {
      const uList = coursesData.units[sub.id] || [];
      uList.forEach(u => {
        list.push({ ...u, subjectId: sub.id, subjectName: sub.name, subjectColor: sub.color });
      });
    });
    return list;
  }, []);

  // Stats calculation
  const totalUnitsCount = allUnits.length;
  const readUnitsCount = Object.keys(readLessons).filter(id => allUnits.some(u => u.id === id)).length;
  const totalStarsCount = Object.values(unitStars).reduce((sum, s) => sum + (s || 0), 0);
  const maxPossibleStars = totalUnitsCount * 3;

  const readPercent = Math.min(100, Math.round((readUnitsCount / totalUnitsCount) * 100));
  const masteryPercent = Math.min(100, Math.round((totalStarsCount / maxPossibleStars) * 100));

  // Subject-by-subject stats
  const subjectStats = useMemo(() => {
    return coursesData.subjects.map(sub => {
      const uList = coursesData.units[sub.id] || [];
      const readCount = uList.filter(u => readLessons[u.id]).length;
      const stars = uList.reduce((acc, u) => acc + (unitStars[u.id] || 0), 0);
      const maxStars = uList.length * 3;
      const percent = maxStars > 0 ? Math.round((stars / maxStars) * 100) : 0;
      return {
        ...sub,
        totalUnits: uList.length,
        readCount,
        stars,
        maxStars,
        percent
      };
    });
  }, [readLessons, unitStars]);

  // 14-day study activity history heatmap
  const past14Days = useMemo(() => {
    const list = [];
    for (let i = 13; i >= 0; i--) {
      const d = new Date(Date.now() - 86400000 * i);
      const key = d.toISOString().slice(0, 10);
      const act = activityHistory[key] || { count: 0, xp: 0 };
      list.push({
        date: key,
        label: `${d.getMonth() + 1}/${d.getDate()}`,
        count: act.count || 0,
        xp: act.xp || 0
      });
    }
    return list;
  }, [activityHistory]);

  // Daily Tasks state
  const isTask1Done = readUnitsCount > 0;
  const isTask2Done = Object.keys(unitStars).length > 0;
  const isTask3Done = todayConceptsMastered >= 1;
  const allTasksDone = isTask1Done && isTask2Done && isTask3Done;

  const handleClaimChest = () => {
    if (dailyChestClaimed || !allTasksDone) return;
    const today = new Date().toISOString().slice(0, 10);
    try {
      localStorage.setItem(`sixth_daily_chest_${today}`, 'true');
    } catch (e) {}
    setDailyChestClaimed(true);
    addXp(120, 'daily_mastery_chest');
    addCoins(30);
    playSound('chest_open');
    triggerHaptic('heavy');
    dispatchDynamicIsland({
      title: '🎁 領取每日自律寶箱！',
      subtitle: '+120 XP • +30 金幣！今日目標達成',
      icon: '🎉',
      color: '#f59e0b'
    });
  };

  const handleRandomInspire = () => {
    triggerHaptic('medium');
    playSound('ios_tap');
    const unreadUnits = allUnits.filter(u => !readLessons[u.id]);
    const pool = unreadUnits.length > 0 ? unreadUnits : allUnits;
    const picked = pool[Math.floor(Math.random() * pool.length)];
    if (picked) {
      dispatchDynamicIsland({
        title: `🎲 靈感推薦：${picked.title}`,
        subtitle: `立即前往 ${picked.subjectName} 探索`,
        icon: '✨',
        color: picked.subjectColor
      });
      navigate(`/lesson/${picked.id}`);
    }
  };

  return (
    <div 
      className="card mb-6"
      style={{
        padding: '24px',
        borderRadius: '24px',
        background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(99, 102, 241, 0.05) 100%)',
        border: '1.5px solid var(--border-light)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-light">
        <div className="flex items-center gap-3">
          <div 
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
            }}
          >
            <Compass size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-black text-primary m-0 tracking-tight">
                全科知識圖譜掌握儀表盤
              </h2>
              <span className="badge badge-accent text-xs font-bold px-2 py-0.5">
                8 領域 • 64 單元
              </span>
            </div>
            <p className="text-xs text-secondary m-0 mt-0.5">
              可視化學習進度追蹤與每日正向多巴胺反饋閉環
            </p>
          </div>
        </div>

        {/* Tab switchers & Inspire button */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center p-1 rounded-xl bg-tertiary border border-light">
            <button
              onClick={() => { setActiveTab('overview'); playSound('ios_tap'); }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                activeTab === 'overview' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              知識星空
            </button>
            <button
              onClick={() => { setActiveTab('tasks'); playSound('ios_tap'); }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                activeTab === 'tasks' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <span>每日任務</span>
              {allTasksDone && !dailyChestClaimed && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              )}
            </button>
            <button
              onClick={() => { setActiveTab('bookmarks'); playSound('ios_tap'); }}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                activeTab === 'bookmarks' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'text-secondary hover:text-primary'
              }`}
            >
              <Bookmark size={12} />
              <span>星標收藏 ({bookmarks.length})</span>
            </button>
          </div>

          <button
            onClick={() => {
              setIsGalaxyOpen(true);
              triggerHaptic('medium');
              playSound('ios_tap');
            }}
            className="btn-outline text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-bold hover:border-indigo-500 hover:text-indigo-500"
            title="開啟 8 領域 64 單元全息概念星空圖譜"
          >
            <Network size={13} className="text-indigo-500" />
            <span className="hidden sm:inline">星空圖譜</span>
          </button>

          <button
            onClick={() => {
              setIsTrophyHallOpen(true);
              triggerHaptic('medium');
              playSound('chest_open');
            }}
            className="btn-outline text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-bold hover:border-amber-500 hover:text-amber-500"
            title="開啟榮譽成就徽章展覽館"
          >
            <Trophy size={13} className="text-amber-500" />
            <span className="hidden sm:inline">成就館 ({badges.length})</span>
          </button>

          <button
            onClick={handleRandomInspire}
            className="btn-outline text-xs px-3 py-1.5 rounded-xl flex items-center gap-1.5 font-bold hover:border-blue-500 hover:text-blue-500"
            title="隨機為你抽取下一個學習探索目標"
          >
            <Shuffle size={13} className="text-purple-500" />
            <span className="hidden sm:inline">靈感抽抽樂</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'overview' && (
        <div className="pt-4 animate-fade-in">
          {/* Top KPI Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
            <div 
              className="p-3 rounded-2xl border border-light flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center justify-between text-xs text-secondary font-bold mb-1">
                <span className="flex items-center gap-1">
                  <BookOpen size={13} className="text-blue-500" /> 課文精讀
                </span>
                <span className="text-blue-600 dark:text-blue-400">{readPercent}%</span>
              </div>
              <div className="text-xl font-black text-primary">
                {readUnitsCount} <span className="text-xs font-normal text-secondary">/ {totalUnitsCount} 單元</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className="bg-blue-500 h-full rounded-full transition-all duration-700" 
                  style={{ width: `${readPercent}%` }} 
                />
              </div>
            </div>

            <div 
              className="p-3 rounded-2xl border border-light flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center justify-between text-xs text-secondary font-bold mb-1">
                <span className="flex items-center gap-1">
                  <Star size={13} className="text-amber-500 fill-amber-500" /> 測驗星星
                </span>
                <span className="text-amber-600 dark:text-amber-400">{masteryPercent}%</span>
              </div>
              <div className="text-xl font-black text-primary">
                {totalStarsCount} <span className="text-xs font-normal text-secondary">/ {maxPossibleStars} ⭐</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mt-2">
                <div 
                  className="bg-amber-500 h-full rounded-full transition-all duration-700" 
                  style={{ width: `${masteryPercent}%` }} 
                />
              </div>
            </div>

            <div 
              className="p-3 rounded-2xl border border-light flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center justify-between text-xs text-secondary font-bold mb-1">
                <span className="flex items-center gap-1">
                  <Flame size={13} className="text-rose-500 fill-rose-500" /> 連續學習
                </span>
                <span className="text-rose-600 dark:text-rose-400">熱力中</span>
              </div>
              <div className="text-xl font-black text-primary">
                {streak} <span className="text-xs font-normal text-secondary">天打卡</span>
              </div>
              <div className="text-[11px] text-tertiary mt-2 truncate">
                保持連續學習獲取 XP 加成
              </div>
            </div>

            <div 
              className="p-3 rounded-2xl border border-light flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center justify-between text-xs text-secondary font-bold mb-1">
                <span className="flex items-center gap-1">
                  <TrendingUp size={13} className="text-emerald-500" /> 今日掌握
                </span>
                <span className="text-emerald-600 dark:text-emerald-400">突破</span>
              </div>
              <div className="text-xl font-black text-primary">
                {todayConceptsMastered} <span className="text-xs font-normal text-secondary">個核心考點</span>
              </div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-2">
                ✨ 自律學習每步都算數
              </div>
            </div>
          </div>

          {/* 14-Day Study Activity Heatmap */}
          <div 
            className="p-3.5 mb-5 rounded-2xl border border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ backgroundColor: 'var(--bg-card)' }}
          >
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-primary">
                <Flame size={14} className="text-rose-500 fill-rose-500" />
                <span>最近 14 天自律學習活躍足跡：</span>
                <span className="badge badge-accent text-[10px] font-bold py-0.5">連續學習</span>
              </div>
              <div className="text-[11px] text-secondary mt-0.5">
                方格數字代表當天完成之單元精讀與測驗挑戰次數
              </div>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {past14Days.map((day, idx) => {
                const isToday = idx === past14Days.length - 1;
                let bgStyle = 'bg-slate-200 dark:bg-slate-800 text-slate-400';
                if (day.count >= 3) bgStyle = 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400';
                else if (day.count === 2) bgStyle = 'bg-emerald-500 text-white';
                else if (day.count === 1) bgStyle = 'bg-emerald-400/70 text-slate-900 dark:text-white';

                return (
                  <div
                    key={day.date}
                    className="flex flex-col items-center gap-1 flex-shrink-0 cursor-default"
                    title={`${day.date}：活躍 ${day.count} 次，獲得 ${day.xp} XP`}
                  >
                    <div 
                      className={`w-6 sm:w-7 h-6 sm:h-7 rounded-lg flex items-center justify-center text-[10px] font-black transition-transform hover:scale-110 ${bgStyle} ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                    >
                      {day.count > 0 ? day.count : '·'}
                    </div>
                    <span className="text-[9px] text-tertiary">{day.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subject Radar Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {subjectStats.map(sub => {
              const uList = coursesData.units[sub.id] || [];
              const firstUnread = uList.find(u => !readLessons[u.id]) || uList[0];

              return (
                <div
                  key={sub.id}
                  onClick={() => {
                    triggerHaptic('light');
                    navigate(`/subject/${sub.id}`);
                  }}
                  className="p-3 rounded-2xl border border-light cursor-pointer hover:border-blue-400 hover:shadow-sm transition-all group"
                  style={{ backgroundColor: 'var(--bg-card)' }}
                >
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base">{sub.emoji}</span>
                      <span className="text-xs font-black text-primary group-hover:text-blue-500 transition-colors">
                        {sub.shortName}
                      </span>
                    </div>
                    <span 
                      className="text-[10px] font-black px-1.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${sub.color}20`,
                        color: sub.color
                      }}
                    >
                      {sub.percent}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden mb-2">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${sub.percent}%`,
                        backgroundColor: sub.color 
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-secondary">
                    <span>讀 {sub.readCount}/{sub.totalUnits}</span>
                    <span className="flex items-center gap-0.5 font-bold text-amber-500">
                      <Star size={10} className="fill-amber-500" />
                      {sub.stars}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Daily Tasks */}
      {activeTab === 'tasks' && (
        <div className="pt-4 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎁</span>
              <div>
                <div className="text-sm font-extrabold text-primary">
                  每日自律學習三部曲
                </div>
                <div className="text-xs text-secondary">
                  完成 3 項微學習任務，解鎖每日自律寶箱 (+120 XP、+30 🪙)
                </div>
              </div>
            </div>

            <button
              onClick={handleClaimChest}
              disabled={!allTasksDone || dailyChestClaimed}
              className={`px-4 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition-all ${
                dailyChestClaimed
                  ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 cursor-not-allowed'
                  : allTasksDone
                    ? 'btn-primary animate-bounce shadow-lg shadow-amber-500/25'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
            >
              <Trophy size={14} />
              <span>
                {dailyChestClaimed ? '今日已領取 ✅' : allTasksDone ? '領取今日寶箱！' : '尚未達成任務'}
              </span>
            </button>
          </div>

          <div className="space-y-2.5">
            {/* Task 1 */}
            <div 
              className="p-3 rounded-2xl border border-light flex items-center justify-between gap-3"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isTask1Done ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">
                    1. 精讀沉浸式課文 1 篇
                  </div>
                  <div className="text-[11px] text-secondary">
                    進入任一單元課堂，完成滾動精讀與核心觀念理解
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/lesson/math-u1')}
                className="btn-outline text-xs px-2.5 py-1 rounded-lg"
              >
                {isTask1Done ? '已完成' : '去精讀'}
              </button>
            </div>

            {/* Task 2 */}
            <div 
              className="p-3 rounded-2xl border border-light flex items-center justify-between gap-3"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isTask2Done ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">
                    2. 通關 1 次隨堂觀念測驗
                  </div>
                  <div className="text-[11px] text-secondary">
                    驗證知識吸收效果，爭取 3 顆滿分星級
                  </div>
                </div>
              </div>
              <button 
                onClick={() => navigate('/quiz/math-u1')}
                className="btn-outline text-xs px-2.5 py-1 rounded-lg"
              >
                {isTask2Done ? '已完成' : '去測驗'}
              </button>
            </div>

            {/* Task 3 */}
            <div 
              className="p-3 rounded-2xl border border-light flex items-center justify-between gap-3"
              style={{ backgroundColor: 'var(--bg-tertiary)' }}
            >
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isTask3Done ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary">
                    3. 標記打卡 1 個核心考點
                  </div>
                  <div className="text-[11px] text-secondary">
                    在課堂中點擊「30秒考點自評」打卡膠囊，建立主動回想心智模型
                  </div>
                </div>
              </div>
              <button 
                onClick={handleRandomInspire}
                className="btn-outline text-xs px-2.5 py-1 rounded-lg"
              >
                {isTask3Done ? '已完成' : '去打卡'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Bookmarks */}
      {activeTab === 'bookmarks' && (
        <div className="pt-4 animate-fade-in">
          {bookmarks.length === 0 ? (
            <div className="text-center py-8 text-secondary">
              <Bookmark size={32} className="mx-auto mb-2 opacity-40 text-blue-500" />
              <p className="text-sm">目前尚無星標收藏單元</p>
              <p className="text-xs text-tertiary">在任何課堂頂部點擊「書籤收藏」，即可在此快速回顧！</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {bookmarks.map(unitId => {
                const unit = allUnits.find(u => u.id === unitId);
                if (!unit) return null;
                const stars = unitStars[unitId] || 0;
                const isRead = !!readLessons[unitId];

                return (
                  <div
                    key={unitId}
                    onClick={() => {
                      triggerHaptic('light');
                      navigate(`/lesson/${unitId}`);
                    }}
                    className="p-3 rounded-2xl border border-light flex items-center justify-between gap-3 cursor-pointer hover:border-blue-400 transition-all"
                    style={{ backgroundColor: 'var(--bg-card)' }}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <SubjectIconBadge id={unit.subjectId} size="sm" />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-primary truncate">
                          {unit.title}
                        </div>
                        <div className="text-[11px] text-secondary flex items-center gap-2">
                          <span>{unit.subjectName}</span>
                          {isRead && <span className="text-emerald-500 font-bold">已讀完 ✅</span>}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <div className="flex text-amber-500">
                        {[1, 2, 3].map(s => (
                          <Star 
                            key={s} 
                            size={12} 
                            className={s <= stars ? 'fill-amber-500' : 'text-slate-300 dark:text-slate-600'} 
                          />
                        ))}
                      </div>
                      <ArrowRight size={14} className="text-secondary" />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Trophy Hall Modal */}
      <TrophyHallModal
        isOpen={isTrophyHallOpen}
        onClose={() => setIsTrophyHallOpen(false)}
      />

      {/* Concept Galaxy Modal */}
      <GlobalConceptGalaxyModal
        isOpen={isGalaxyOpen}
        onClose={() => setIsGalaxyOpen(false)}
      />
    </div>
  );
};

export default GlobalKnowledgeRadar;
