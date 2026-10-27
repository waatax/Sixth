import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

const GamificationContext = createContext(null);

const STORAGE_KEY = 'sixth_gamification_state_v2026';

// Level progression formula: xpNeeded(level) = level * 120
export const getXpForNextLevel = (level) => level * 120;

export const TITLES = [
  { minLevel: 1, title: '🌱 知識萌新' },
  { minLevel: 3, title: '🧭 探索小學徒' },
  { minLevel: 5, title: '⚡ 邏輯破風手' },
  { minLevel: 8, title: '🌟 智慧冒險家' },
  { minLevel: 12, title: '🏆 學霸領航員' },
  { minLevel: 16, title: '👑 傳奇大宗師' },
  { minLevel: 20, title: '🌌 全知守護之神' }
];

export const PET_TEMPLATES = {
  fox: {
    id: 'fox',
    name: '智多狐 (Spark)',
    emoji: '🦊',
    element: 'math',
    description: '敏銳機智的數學小精靈，賦予數學與邏輯額外 +15% XP 加成！',
    buffText: '數學與算理 XP +15%',
    evolutions: [
      { stage: 1, name: '幼年・小靈狐', minLevel: 1, emoji: '🦊' },
      { stage: 2, name: '成長・九尾智狐', minLevel: 5, emoji: '🦊✨' },
      { stage: 3, name: '究極・天機神狐', minLevel: 10, emoji: '🦊👑🔥' }
    ]
  },
  owl: {
    id: 'owl',
    name: '博學鷹 (Sage)',
    emoji: '🦉',
    element: 'science',
    description: '洞悉宇宙奧秘的自然導師，賦予自然科學金幣獲取 +15% 加成！',
    buffText: '自然探究 金幣 +15%',
    evolutions: [
      { stage: 1, name: '幼年・夜翼鴞', minLevel: 1, emoji: '🦉' },
      { stage: 2, name: '成長・星辰智鷹', minLevel: 5, emoji: '🦉✨' },
      { stage: 3, name: '究極・時空神鳥', minLevel: 10, emoji: '🦉👑⚡' }
    ]
  },
  dragon: {
    id: 'dragon',
    name: '雷霆龍 (Draco)',
    emoji: '🐉',
    element: 'boss',
    description: '威風凜凜的戰鬥夥伴，在魔王城堡挑戰中對魔王造成額外 +20% 傷害！',
    buffText: '魔王挑戰 傷害 +20%',
    evolutions: [
      { stage: 1, name: '幼年・萌角龍', minLevel: 1, emoji: '🐲' },
      { stage: 2, name: '成長・雷霆翼龍', minLevel: 5, emoji: '🐉⚡' },
      { stage: 3, name: '究極・深淵聖龍', minLevel: 10, emoji: '🐉👑🔥' }
    ]
  },
  dolphin: {
    id: 'dolphin',
    name: '晴波豚 (Aqua)',
    emoji: '🐬',
    element: 'english',
    description: '悠遊雙語世界的語言天使，英語朗讀與聽力測驗可獲雙倍金幣！',
    buffText: '英語 & GEPT 金幣 +20%',
    evolutions: [
      { stage: 1, name: '幼年・浪花豚', minLevel: 1, emoji: '🐬' },
      { stage: 2, name: '成長・幻海飛豚', minLevel: 5, emoji: '🐬✨' },
      { stage: 3, name: '究極・潮汐神靈', minLevel: 10, emoji: '🐬👑🌊' }
    ]
  },
  cat: {
    id: 'cat',
    name: '星靈貓 (Luna)',
    emoji: '🐱',
    element: 'arts',
    description: '富含創意的藝術靈感使者，答題時有機率觸發 200% 幸運暴擊！',
    buffText: '隨機觸發 200% 幸運暴擊',
    evolutions: [
      { stage: 1, name: '幼年・斑斑喵', minLevel: 1, emoji: '🐱' },
      { stage: 2, name: '成長・月影靈貓', minLevel: 5, emoji: '🐱✨' },
      { stage: 3, name: '究極・永恆星貓', minLevel: 10, emoji: '🐱👑🌟' }
    ]
  }
};

export const SHOP_ITEMS = [
  {
    id: 'double_xp',
    category: 'cards',
    name: '⚡ 雙倍經驗卡',
    desc: '使用後接下來 3 次測驗或魔王戰獲得雙倍 XP 獎勵！',
    price: 60,
    currency: 'coins',
    icon: 'Zap',
    rarity: 'rare'
  },
  {
    id: 'hint_5050',
    category: 'cards',
    name: '🎯 50:50 智慧提示卡',
    desc: '在測驗或魔王戰中直接排除 2 個錯誤選項！',
    price: 40,
    currency: 'coins',
    icon: 'HelpCircle',
    rarity: 'common'
  },
  {
    id: 'streak_shield',
    category: 'cards',
    name: '🛡️ 連勝冰凍護盾',
    desc: '若今天忘記登入，自動保全連續登入天數不被中斷！',
    price: 120,
    currency: 'coins',
    icon: 'Shield',
    rarity: 'epic'
  },
  {
    id: 'pet_food_fish',
    category: 'food',
    name: '🐟 活力小魚乾',
    desc: '給神獸餵食，恢復 30 點飽食度並增加 +25 神獸經驗值！',
    price: 25,
    currency: 'coins',
    icon: 'Fish',
    rarity: 'common'
  },
  {
    id: 'pet_food_fruit',
    category: 'food',
    name: '🍎 智慧神聖果',
    desc: '給神獸餵食，恢復滿額飽食度並大幅增加 +100 神獸經驗值！',
    price: 80,
    currency: 'coins',
    icon: 'Apple',
    rarity: 'rare'
  },
  {
    id: 'pet_food_candy',
    category: 'food',
    name: '🍬 彩虹星光糖',
    desc: '蘊含宇宙智慧的神奇糖果，神獸立即提升 1 級！',
    price: 3,
    currency: 'gems',
    icon: 'Candy',
    rarity: 'legendary'
  },
  {
    id: 'hat_scholar',
    category: 'cosmetic',
    name: '🎓 狀元博士帽',
    desc: '為你的守護神獸戴上象徵學術最高榮譽的四方博士帽！',
    price: 150,
    currency: 'coins',
    icon: 'GraduationCap',
    rarity: 'rare'
  },
  {
    id: 'cape_royal',
    category: 'cosmetic',
    name: '👑 皇家榮譽披風',
    desc: '耀眼奪目的星光披風，讓神獸在闖關時散發威風氣場！',
    price: 5,
    currency: 'gems',
    icon: 'Crown',
    rarity: 'legendary'
  },
  {
    id: 'frame_aurora',
    category: 'cosmetic',
    name: '🌈 極光星空頭像框',
    desc: '讓全站頂部與學習護照煥發夢幻極光動態邊框！',
    price: 8,
    currency: 'gems',
    icon: 'Sparkles',
    rarity: 'legendary'
  }
];

export const ALL_ACHIEVEMENTS = [
  { id: 'start_2026', name: '2026新學期啟航者', icon: '🚀', category: 'special', desc: '啟動最強小六旗艦版學習系統', req: '進入平台' },
  { id: 'math_novice', name: '數學小博士', icon: '🧮', category: 'subject', desc: '完成數學質因數與短除法核心探索', req: '通關數學單元' },
  { id: 'sci_detective', name: '氣象小偵探', icon: '⛅', category: 'subject', desc: '解構冷暖鋒面與天氣現象規律', req: '通關自然單元' },
  { id: 'read_1', name: '📖 破卷起航', icon: '📖', category: 'reading', desc: '完成第 1 篇沉浸式圖解單元精讀', req: '精讀 1 個單元' },
  { id: 'read_10', name: '📜 博覽群書', icon: '📜', category: 'reading', desc: '累計精讀超過 10 篇全科核心單元', req: '精讀 10 個單元' },
  { id: 'read_30', name: '👑 國小知識大宗師', icon: '👑', category: 'reading', desc: '突破 30 篇單元深度圖解，知識庫大成', req: '精讀 30 個單元' },
  { id: 'quiz_master', name: '滿分神射手', icon: '🎯', category: 'quiz', desc: '在隨堂觀念測驗中斬獲 3 星完美評級', req: '獲得 3 星評級' },
  { id: 'quiz_stars_15', name: '百發百中', icon: '⭐', category: 'quiz', desc: '全科題庫累計收割 15 顆榮譽星星', req: '獲得 15 顆星星' },
  { id: 'quiz_stars_50', name: '全滿貫星神', icon: '🌟', category: 'quiz', desc: '突破 50 顆星星，傲視全校段考', req: '獲得 50 顆星星' },
  { id: 'streak_3', name: '🔥 意志之火', icon: '🔥', category: 'streak', desc: '連續登入自主學習達到 3 天', req: '連續學習 3 天' },
  { id: 'streak_7', name: '⚡ 恆星耀斑', icon: '⚡', category: 'streak', desc: '自律突破一週！連續學習達到 7 天', req: '連續學習 7 天' },
  { id: 'streak_14', name: '💎 不動明王', icon: '💎', category: 'streak', desc: '連續學習達到 14 天，自律習慣已化為本能', req: '連續學習 14 天' },
  { id: 'boss_conqueror', name: '魔王征服者', icon: '⚔️', category: 'battle', desc: '在魔王城堡中運用學科學力擊潰強敵', req: '擊敗任意城堡魔王' },
  { id: 'dragon_slayer', name: '屠龍勇者', icon: '🐉', category: 'battle', desc: '擊敗終極黑晶聖龍，榮登傳奇之巔', req: '擊潰終極巨龍' },
  { id: 'lab_explorer', name: '🧪 探究實踐者', icon: '🧪', category: 'explore', desc: '進入 STEM PhET 跨領域互動實驗室操作', req: '開啟互動實驗' },
  { id: 'bookmark_collector', name: '🔖 星標藏書家', icon: '🔖', category: 'reading', desc: '星標收藏超過 3 個單元個人精選', req: '收藏 3 個單元' }
];

const INITIAL_STATE = {
  xp: 180,
  level: 2,
  coins: 150,
  gems: 3,
  streak: 5,
  lastActiveDate: new Date().toISOString().slice(0, 10),
  activeDoubleXpCount: 0,
  activeFrame: null,
  
  // Pet companion state
  activePetId: 'fox',
  petStats: {
    fox: { level: 3, xp: 60, hunger: 90, happiness: 100, equipped: ['hat_scholar'] },
    owl: { level: 1, xp: 0, hunger: 80, happiness: 80, equipped: [] },
    dragon: { level: 1, xp: 0, hunger: 80, happiness: 80, equipped: [] },
    dolphin: { level: 1, xp: 0, hunger: 80, happiness: 80, equipped: [] },
    cat: { level: 1, xp: 0, hunger: 80, happiness: 80, equipped: [] }
  },

  // Inventory item counts
  inventory: {
    double_xp: 1,
    hint_5050: 2,
    streak_shield: 1,
    pet_food_fish: 3,
    pet_food_fruit: 1,
    pet_food_candy: 0,
    hat_scholar: 1,
    cape_royal: 0,
    frame_aurora: 0
  },

  // Progress tracking: unitId -> stars (1, 2, 3)
  unitStars: {
    'math-u1': 3,
    'math-u2': 2,
    'sci-u1': 3,
    'man-u1': 3,
    'eng-u1': 3
  },

  // Duolingo-style Crown Mastery Levels per unit (0 ~ 5 Crowns; 5 = Legendary Golden Crown 👑)
  unitCrowns: {
    'math-u1': 3,
    'math-u2': 2,
    'sci-u1': 3,
    'man-u1': 2,
    'eng-u1': 3
  },

  // Duolingo-style Hearts / Stamina (Max 5, 100% free refill via practice or coins)
  hearts: 5,
  maxHearts: 5,
  dailyXpGoal: 50,
  selectedTextbookVersion: 'all',

  // Boss defeats
  bossRecords: {
    ghost: { defeatedCount: 2, bestTimeSec: 42 },
    golem: { defeatedCount: 1, bestTimeSec: 75 },
    imp: { defeatedCount: 0, bestTimeSec: 0 },
    dragon: { defeatedCount: 0, bestTimeSec: 0 }
  },

  // Badges unlocked
  badges: ['數學小博士', '氣象小偵探', '2026新學期啟航者'],

  // Daily spin
  lastSpinDate: null,

  // Lesson Reading Progress: unitId -> completion timestamp
  readLessons: {
    'math-u1': Date.now() - 86400000,
    'sci-u1': Date.now() - 86400000,
    'man-u1': Date.now() - 86400000
  },

  // Bookmarked Units: array of unitIds
  bookmarks: ['math-u1', 'sci-u1'],

  // User Highlights across all lessons: array of { id, unitId, text, note, createdAt }
  highlights: [],

  // Daily study metrics
  todayStudyMinutes: 15,
  todayConceptsMastered: 4,

  // 14-day study activity history { 'YYYY-MM-DD': { count: 3, xp: 80 } }
  activityHistory: {
    [new Date(Date.now() - 86400000 * 4).toISOString().slice(0, 10)]: { count: 2, xp: 70 },
    [new Date(Date.now() - 86400000 * 3).toISOString().slice(0, 10)]: { count: 3, xp: 120 },
    [new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10)]: { count: 1, xp: 40 },
    [new Date(Date.now() - 86400000 * 1).toISOString().slice(0, 10)]: { count: 4, xp: 160 },
    [new Date().toISOString().slice(0, 10)]: { count: 2, xp: 80 }
  }
};

export const GamificationProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...INITIAL_STATE, ...JSON.parse(saved) };
      }
    } catch (e) {}
    return INITIAL_STATE;
  });

  // Save to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  // Check Daily Streak upon mount
  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    if (state.lastActiveDate !== today) {
      if (state.lastActiveDate === yesterday) {
        // Logged in on consecutive day
        setState(prev => ({
          ...prev,
          streak: prev.streak + 1,
          lastActiveDate: today,
          coins: prev.coins + 15
        }));
      } else {
        // Missed a day: check if streak_shield was available
        if (state.inventory?.streak_shield > 0) {
          setState(prev => ({
            ...prev,
            lastActiveDate: today,
            inventory: {
              ...prev.inventory,
              streak_shield: prev.inventory.streak_shield - 1
            }
          }));
        } else {
          // Reset streak to 1
          setState(prev => ({
            ...prev,
            streak: 1,
            lastActiveDate: today
          }));
        }
      }
    }
  }, [state.lastActiveDate, state.inventory]);

  // Level Up Check
  const checkLevelUp = useCallback((currentXp, currentLevel) => {
    let nextLevelXp = getXpForNextLevel(currentLevel);
    let newLevel = currentLevel;
    let remainingXp = currentXp;

    while (remainingXp >= nextLevelXp) {
      remainingXp -= nextLevelXp;
      newLevel += 1;
      nextLevelXp = getXpForNextLevel(newLevel);
    }

    return { newLevel, remainingXp };
  }, []);

  // Add XP with Double XP Card check & level up fanfare
  const addXp = useCallback((amount, source = '學習挑戰') => {
    setState(prev => {
      let multiplier = 1;
      let newDoubleCount = prev.activeDoubleXpCount;
      if (newDoubleCount > 0) {
        multiplier = 2;
        newDoubleCount -= 1;
      }

      // Check active pet buff
      if (prev.activePetId === 'fox' && source && String(source).includes('math')) {
        multiplier += 0.15;
      }

      const earned = Math.round(amount * multiplier);
      const totalXp = prev.xp + earned;
      const { newLevel } = checkLevelUp(totalXp, prev.level);

      if (newLevel > prev.level) {
        playSound('levelup');
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6']
        });
      }

      return {
        ...prev,
        xp: totalXp,
        level: Math.max(prev.level, newLevel),
        activeDoubleXpCount: newDoubleCount
      };
    });
  }, [checkLevelUp]);

  // Add Gold Coins
  const addCoins = useCallback((amount) => {
    setState(prev => {
      playSound('coin');
      return {
        ...prev,
        coins: prev.coins + amount
      };
    });
  }, []);

  // Add Wisdom Gems
  const addGems = useCallback((amount) => {
    setState(prev => {
      playSound('chest_open');
      return {
        ...prev,
        gems: prev.gems + amount
      };
    });
  }, []);

  // Record Quiz Result & Award Stars + Coins + XP
  const recordQuizResult = useCallback((unitId, score, totalQuestions) => {
    const percent = Math.round((score / totalQuestions) * 100);
    let stars = 1;
    if (percent >= 90) stars = 3;
    else if (percent >= 60) stars = 2;

    const baseCoins = stars * 15;
    const baseExp = score * 20 + (stars === 3 ? 50 : 0);

    setState(prev => {
      const prevStars = prev.unitStars[unitId] || 0;
      const newUnitStars = {
        ...prev.unitStars,
        [unitId]: Math.max(prevStars, stars)
      };

      // Add badge if completed series
      const newBadges = [...prev.badges];
      if (stars === 3 && !newBadges.includes('滿分神射手')) {
        newBadges.push('滿分神射手');
      }

      return {
        ...prev,
        unitStars: newUnitStars,
        badges: newBadges
      };
    });

    addXp(baseExp, unitId);
    addCoins(baseCoins);

    return { stars, earnedCoins: baseCoins, earnedXp: baseExp };
  }, [addCoins, addXp]);

  // Record Lesson Reading Completion & Award XP + Coins
  const recordLessonRead = useCallback((unitId) => {
    let isFirstTime = false;
    setState(prev => {
      const alreadyRead = !!prev.readLessons?.[unitId];
      if (!alreadyRead) isFirstTime = true;

      const newReadLessons = {
        ...(prev.readLessons || {}),
        [unitId]: Date.now()
      };

      const readCount = Object.keys(newReadLessons).length;
      const newBadges = [...(prev.badges || [])];
      if (readCount >= 1 && !newBadges.includes('📖 破卷起航')) {
        newBadges.push('📖 破卷起航');
      }
      if (readCount >= 10 && !newBadges.includes('📜 博覽群書')) {
        newBadges.push('📜 博覽群書');
      }
      if (readCount >= 30 && !newBadges.includes('👑 國小知識大宗師')) {
        newBadges.push('👑 國小知識大宗師');
      }

      // Slightly increase active pet happiness and hunger
      const petId = prev.activePetId;
      const currentPet = prev.petStats?.[petId] || { hunger: 80, happiness: 80 };
      const updatedPet = {
        ...currentPet,
        happiness: Math.min(100, (currentPet.happiness || 80) + 5),
        hunger: Math.min(100, (currentPet.hunger || 80) + 3)
      };

      const today = new Date().toISOString().slice(0, 10);
      const currentHistory = prev.activityHistory || {};
      const todayAct = currentHistory[today] || { count: 0, xp: 0 };
      const nextHistory = {
        ...currentHistory,
        [today]: {
          count: todayAct.count + 1,
          xp: todayAct.xp + (isFirstTime ? 50 : 20)
        }
      };

      return {
        ...prev,
        readLessons: newReadLessons,
        todayConceptsMastered: (prev.todayConceptsMastered || 0) + 1,
        badges: newBadges,
        activityHistory: nextHistory,
        petStats: {
          ...(prev.petStats || {}),
          [petId]: updatedPet
        }
      };
    });

    const earnedXp = isFirstTime ? 50 : 20;
    const earnedCoins = isFirstTime ? 15 : 5;
    addXp(earnedXp, `lesson_read_${unitId}`);
    addCoins(earnedCoins);

    return { isFirstTime, earnedXp, earnedCoins };
  }, [addCoins, addXp]);

  // Toggle Bookmark
  const toggleBookmark = useCallback((unitId) => {
    setState(prev => {
      const current = prev.bookmarks || [];
      const isBookmarked = current.includes(unitId);
      const newBookmarks = isBookmarked ? current.filter(id => id !== unitId) : [...current, unitId];
      return {
        ...prev,
        bookmarks: newBookmarks
      };
    });
  }, []);

  // Check Bookmark
  const isBookmarked = useCallback((unitId) => {
    return (state.bookmarks || []).includes(unitId);
  }, [state.bookmarks]);

  // Add Highlight
  const addHighlight = useCallback((unitId, text, note = '') => {
    setState(prev => {
      const newHighlight = {
        id: `hl_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        unitId,
        text,
        note,
        createdAt: Date.now()
      };
      return {
        ...prev,
        highlights: [newHighlight, ...(prev.highlights || [])]
      };
    });
  }, []);

  // Remove Highlight
  const removeHighlight = useCallback((highlightId) => {
    setState(prev => ({
      ...prev,
      highlights: (prev.highlights || []).filter(h => h.id !== highlightId)
    }));
  }, []);

  // Feed Pet
  const feedPet = useCallback((foodItemId) => {
    const item = SHOP_ITEMS.find(i => i.id === foodItemId);
    if (!item) return false;

    let success = false;
    setState(prev => {
      const count = prev.inventory[foodItemId] || 0;
      if (count <= 0) return prev;

      const petId = prev.activePetId;
      const pet = prev.petStats[petId];
      let gainedExp = 30;
      let gainedHunger = 30;
      let newPetLevel = pet.level;

      if (foodItemId === 'pet_food_fruit') {
        gainedExp = 100;
        gainedHunger = 70;
      } else if (foodItemId === 'pet_food_candy') {
        newPetLevel += 1;
        gainedExp = 0;
        gainedHunger = 100;
      }

      let newPetXp = pet.xp + gainedExp;
      const petXpNeeded = pet.level * 80;
      if (newPetXp >= petXpNeeded) {
        newPetLevel += 1;
        newPetXp -= petXpNeeded;
        playSound('levelup');
      } else {
        playSound('pet_happy');
      }

      success = true;
      return {
        ...prev,
        inventory: {
          ...prev.inventory,
          [foodItemId]: count - 1
        },
        petStats: {
          ...prev.petStats,
          [petId]: {
            ...pet,
            level: newPetLevel,
            xp: newPetXp,
            hunger: Math.min(100, pet.hunger + gainedHunger),
            happiness: Math.min(100, pet.happiness + 20)
          }
        }
      };
    });

    return success;
  }, []);

  // Select Active Pet
  const selectPet = useCallback((petId) => {
    if (PET_TEMPLATES[petId]) {
      setState(prev => ({ ...prev, activePetId: petId }));
      playSound('click');
    }
  }, []);

  // Buy Shop Item
  const buyItem = useCallback((itemId) => {
    const item = SHOP_ITEMS.find(i => i.id === itemId);
    if (!item) return { success: false, reason: '找不到道具' };

    let success = false;
    let reason = '';

    setState(prev => {
      if (item.currency === 'coins') {
        if (prev.coins < item.price) {
          reason = '星光金幣不足！快去闖關做題目賺取金幣吧！';
          return prev;
        }
        success = true;
        playSound('coin');
        return {
          ...prev,
          coins: prev.coins - item.price,
          inventory: {
            ...prev.inventory,
            [itemId]: (prev.inventory[itemId] || 0) + 1
          }
        };
      } else if (item.currency === 'gems') {
        if (prev.gems < item.price) {
          reason = '智慧水晶不足！擊敗關卡魔王或連續打卡可獲得水晶！';
          return prev;
        }
        success = true;
        playSound('chest_open');
        return {
          ...prev,
          gems: prev.gems - item.price,
          inventory: {
            ...prev.inventory,
            [itemId]: (prev.inventory[itemId] || 0) + 1
          }
        };
      }
      return prev;
    });

    return { success, reason };
  }, []);

  // Consume Item from Inventory
  const consumeItem = useCallback((itemId) => {
    let success = false;
    setState(prev => {
      const count = prev.inventory[itemId] || 0;
      if (count <= 0) return prev;

      let newActiveDouble = prev.activeDoubleXpCount;
      let newFrame = prev.activeFrame;

      if (itemId === 'double_xp') {
        newActiveDouble += 3;
        playSound('levelup');
      } else if (itemId === 'frame_aurora') {
        newFrame = 'aurora';
        playSound('levelup');
      }

      success = true;
      return {
        ...prev,
        activeDoubleXpCount: newActiveDouble,
        activeFrame: newFrame,
        inventory: {
          ...prev.inventory,
          [itemId]: count - 1
        }
      };
    });
    return success;
  }, []);

  // Record Boss Victory
  const recordBossVictory = useCallback((bossId, timeSec, loot) => {
    setState(prev => {
      const current = prev.bossRecords[bossId] || { defeatedCount: 0, bestTimeSec: 999 };
      const newDefeats = current.defeatedCount + 1;
      const bestTime = current.bestTimeSec === 0 ? timeSec : Math.min(current.bestTimeSec, timeSec);

      // Add badge
      const newBadges = [...prev.badges];
      if (!newBadges.includes('魔王征服者')) {
        newBadges.push('魔王征服者');
      }
      if (bossId === 'dragon' && !newBadges.includes('屠龍勇者')) {
        newBadges.push('屠龍勇者');
      }

      return {
        ...prev,
        bossRecords: {
          ...prev.bossRecords,
          [bossId]: {
            defeatedCount: newDefeats,
            bestTimeSec: bestTime
          }
        },
        badges: newBadges
      };
    });

    if (loot?.xp) addXp(loot.xp, 'boss_victory');
    if (loot?.coins) addCoins(loot.coins);
    if (loot?.gems) addGems(loot.gems);
  }, [addCoins, addGems, addXp]);

  // Claim Daily Lucky Wheel Spin
  const claimDailySpin = useCallback((reward) => {
    const today = new Date().toISOString().slice(0, 10);
    setState(prev => ({
      ...prev,
      lastSpinDate: today
    }));

    if (reward.type === 'xp') addXp(reward.amount, 'daily_spin');
    if (reward.type === 'coins') addCoins(reward.amount);
    if (reward.type === 'gems') addGems(reward.amount);
    if (reward.type === 'item') {
      setState(prev => ({
        ...prev,
        inventory: {
          ...prev.inventory,
          [reward.itemId]: (prev.inventory[reward.itemId] || 0) + (reward.amount || 1)
        }
      }));
    }
  }, [addCoins, addGems, addXp]);

  // 🦉 Duolingo-style: Upgrade Unit Crown Level (Lv.1 ~ Lv.5 Legendary)
  const earnUnitCrown = useCallback((unitId, xpEarned = 40, coinsEarned = 15) => {
    setState(prev => {
      const currentCrown = prev.unitCrowns?.[unitId] || 0;
      const nextCrown = Math.min(5, currentCrown + 1);
      const prevStars = prev.unitStars?.[unitId] || 0;
      const today = new Date().toISOString().slice(0, 10);
      const currentHistory = prev.activityHistory || {};
      const todayAct = currentHistory[today] || { count: 0, xp: 0 };

      const newBadges = [...(prev.badges || [])];
      if (nextCrown >= 5 && !newBadges.includes('👑 傳奇金冠宗師')) {
        newBadges.push('👑 傳奇金冠宗師');
      }

      return {
        ...prev,
        unitCrowns: {
          ...(prev.unitCrowns || {}),
          [unitId]: nextCrown
        },
        unitStars: {
          ...(prev.unitStars || {}),
          [unitId]: Math.max(prevStars, Math.min(3, nextCrown))
        },
        badges: newBadges,
        activityHistory: {
          ...currentHistory,
          [today]: {
            count: todayAct.count + 1,
            xp: todayAct.xp + xpEarned
          }
        }
      };
    });

    addXp(xpEarned, `duolingo_crown_${unitId}`);
    addCoins(coinsEarned);
  }, [addCoins, addXp]);

  // 🦉 Duolingo-style: Lose 1 Heart on mistake
  const loseHeart = useCallback(() => {
    setState(prev => ({
      ...prev,
      hearts: Math.max(0, (prev.hearts ?? 5) - 1)
    }));
  }, []);

  // 🦉 Duolingo-style: Practice to Refill Hearts (100% Free & Green Educational)
  const refillHearts = useCallback((amount = 5) => {
    playSound('levelup');
    setState(prev => ({
      ...prev,
      hearts: Math.min(prev.maxHearts || 5, (prev.hearts ?? 0) + amount)
    }));
  }, []);

  // 🦉 Duolingo-style: Set Preferred Textbook Version & Daily Goal
  const setPreferredTextbookVersion = useCallback((versionId) => {
    setState(prev => ({ ...prev, selectedTextbookVersion: versionId }));
  }, []);

  const setDailyXpGoal = useCallback((goalXp) => {
    setState(prev => ({ ...prev, dailyXpGoal: goalXp }));
  }, []);

  // Calculate today's earned XP and League Tier
  const todayKey = new Date().toISOString().slice(0, 10);
  const todayXp = state.activityHistory?.[todayKey]?.xp || 0;

  const LEAGUE_TIERS = [
    { id: 'bronze', name: '青銅聯賽', icon: '🥉', minXp: 0, color: '#b45309' },
    { id: 'silver', name: '白銀聯賽', icon: '🥈', minXp: 150, color: '#64748b' },
    { id: 'gold', name: '黃金聯賽', icon: '🥇', minXp: 350, color: '#eab308' },
    { id: 'sapphire', name: '藍寶石聯賽', icon: '🔷', minXp: 600, color: '#2563eb' },
    { id: 'emerald', name: '翡翠聯賽', icon: '🟢', minXp: 900, color: '#10b981' },
    { id: 'obsidian', name: '黑曜石聯賽', icon: '🔮', minXp: 1300, color: '#7c3aed' },
    { id: 'diamond', name: '傳奇鑽石聯賽', icon: '💎', minXp: 1800, color: '#06b6d4' }
  ];
  const currentLeague = LEAGUE_TIERS.slice().reverse().find(l => state.xp >= l.minXp) || LEAGUE_TIERS[0];

  // Current Player Title calculation
  const currentTitle = TITLES.slice().reverse().find(t => state.level >= t.minLevel)?.title || '🌱 知識萌新';

  const value = {
    ...state,
    todayXp,
    currentLeague,
    leagueTiers: LEAGUE_TIERS,
    currentTitle,
    allAchievements: ALL_ACHIEVEMENTS,
    activePetTemplate: PET_TEMPLATES[state.activePetId],
    currentPetStats: state.petStats[state.activePetId],
    addXp,
    addCoins,
    addGems,
    recordQuizResult,
    recordLessonRead,
    toggleBookmark,
    isBookmarked,
    addHighlight,
    removeHighlight,
    feedPet,
    selectPet,
    buyItem,
    consumeItem,
    recordBossVictory,
    claimDailySpin,
    earnUnitCrown,
    loseHeart,
    refillHearts,
    setPreferredTextbookVersion,
    setDailyXpGoal
  };


  return (
    <GamificationContext.Provider value={value}>
      {children}
    </GamificationContext.Provider>
  );
};

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within a GamificationProvider');
  }
  return context;
};
