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
  lastSpinDate: null
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

  // Current Player Title calculation
  const currentTitle = TITLES.slice().reverse().find(t => state.level >= t.minLevel)?.title || '🌱 知識萌新';

  const value = {
    ...state,
    currentTitle,
    activePetTemplate: PET_TEMPLATES[state.activePetId],
    currentPetStats: state.petStats[state.activePetId],
    addXp,
    addCoins,
    addGems,
    recordQuizResult,
    feedPet,
    selectPet,
    buyItem,
    consumeItem,
    recordBossVictory,
    claimDailySpin
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
