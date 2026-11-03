// Island rewards live apart from the learning records so a reset of one never harms the other.
import { taipeiDay } from "./gardenEngine.js";

export const ISLAND_STORAGE = "sixth-island-v1";
const DAY = 86400000;

export const emptyIsland = () => ({
  version: 1,
  xp: 0,
  grade: 0,
  sound: true,
  large: false,
  days: {},
  stickers: {},
  best: {},
  checks: [],
});

const count = (v) => (Number.isSafeInteger(v) && v >= 0 ? v : 0);

export function readIsland(storage = globalThis.localStorage) {
  try {
    const data = JSON.parse(storage.getItem(ISLAND_STORAGE));
    const clean = emptyIsland();
    if (data?.version !== 1) return clean;
    clean.xp = count(data.xp);
    clean.grade = Number.isInteger(data.grade) && data.grade >= 0 && data.grade <= 6 ? data.grade : 0;
    clean.sound = data.sound !== false;
    clean.large = data.large === true;
    for (const [day, d] of Object.entries(data.days || {}).sort().slice(-60))
      if (/^\d{4}-\d{2}-\d{2}$/.test(day) && d)
        clean.days[day] = {
          xp: count(d.xp),
          answers: count(d.answers),
          correct: count(d.correct),
          lessons: count(d.lessons),
          games: count(d.games),
        };
    for (const [id, time] of Object.entries(data.stickers || {}))
      if (Number.isFinite(time)) clean.stickers[id] = time;
    for (const [id, score] of Object.entries(data.best || {}))
      clean.best[id] = count(score);
    if (Array.isArray(data.checks))
      clean.checks = data.checks
        .filter((c) => c && Number.isFinite(c.time) && count(c.total) > 0)
        .slice(-20)
        .map((c) => ({
          time: c.time,
          grade: count(c.grade),
          subject: String(c.subject || "all"),
          total: count(c.total),
          correct: count(c.correct),
        }));
    return clean;
  } catch {
    return emptyIsland();
  }
}

export function saveIsland(island, storage = globalThis.localStorage) {
  try {
    storage.setItem(ISLAND_STORAGE, JSON.stringify(island));
    return true;
  } catch {
    return false;
  }
}

export const LEVELS = [
  { xp: 0, name: "小小探險家", unlock: "一座小島" },
  { xp: 60, name: "種子守護者", unlock: "第一棵樹" },
  { xp: 150, name: "好奇小隊員", unlock: "帳篷" },
  { xp: 280, name: "地圖小達人", unlock: "小木屋" },
  { xp: 450, name: "知識採集員", unlock: "花園" },
  { xp: 680, name: "島嶼研究員", unlock: "小河" },
  { xp: 980, name: "星空觀察家", unlock: "觀星台" },
  { xp: 1350, name: "航海小船長", unlock: "帆船" },
  { xp: 1800, name: "智慧建築師", unlock: "圖書館" },
  { xp: 2400, name: "學習島主", unlock: "燈塔" },
];

export function levelOf(xp) {
  let index = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) index = i;
  const current = LEVELS[index];
  const next = LEVELS[index + 1];
  return {
    level: index + 1,
    name: current.name,
    current,
    next,
    progress: next ? (xp - current.xp) / (next.xp - current.xp) : 1,
    toNext: next ? next.xp - xp : 0,
  };
}

export const DAILY_GOAL = 30;

// Learning consistently matters more than never missing: one rest day does not end a streak.
export function streakOf(island, now = Date.now()) {
  const today = taipeiDay(now);
  let streak = 0;
  let misses = 0;
  const hasToday = (island.days[today]?.answers || 0) > 0;
  for (let i = hasToday ? 0 : 1; i < 400; i++) {
    const day = taipeiDay(now - i * DAY);
    if ((island.days[day]?.answers || 0) > 0) {
      streak++;
      misses = 0;
    } else if (++misses > 1) break;
  }
  return streak;
}

export function addActivity(island, change, now = Date.now()) {
  const day = taipeiDay(now);
  const old = island.days[day] || { xp: 0, answers: 0, correct: 0, lessons: 0, games: 0 };
  return {
    ...island,
    xp: island.xp + (change.xp || 0),
    days: {
      ...island.days,
      [day]: {
        xp: old.xp + (change.xp || 0),
        answers: old.answers + (change.answers || 0),
        correct: old.correct + (change.correct || 0),
        lessons: old.lessons + (change.lessons || 0),
        games: old.games + (change.games || 0),
      },
    },
  };
}

export const answerXp = (correct, isReview) => (correct ? (isReview ? 15 : 10) : 3);

export const STICKERS = [
  { id: "first-read", emoji: "🌱", name: "好奇的開始", how: "讀完第一課" },
  { id: "first-lesson", emoji: "🧭", name: "勇敢試一回", how: "完成一課的挑戰" },
  { id: "lessons-5", emoji: "🐣", name: "五課小雞", how: "完成 5 課" },
  { id: "lessons-20", emoji: "🦜", name: "二十課鸚鵡", how: "完成 20 課" },
  { id: "lessons-50", emoji: "🦉", name: "五十課貓頭鷹", how: "完成 50 課" },
  { id: "lessons-100", emoji: "🐳", name: "百課大鯨魚", how: "完成 100 課" },
  { id: "review-1", emoji: "🌳", name: "讓記憶長根", how: "到期後再次答對一課" },
  { id: "review-10", emoji: "🌲", name: "記憶森林", how: "跨日複習 10 課" },
  { id: "streak-3", emoji: "🔥", name: "三日火苗", how: "連續學習 3 天" },
  { id: "streak-7", emoji: "🏕️", name: "一週營火", how: "連續學習 7 天" },
  { id: "streak-30", emoji: "🌋", name: "三十日火山", how: "連續學習 30 天" },
  { id: "goal-1", emoji: "⭐", name: "今日達標", how: "達成每日目標" },
  { id: "check-1", emoji: "📝", name: "勇於檢查", how: "完成一次小考" },
  { id: "check-perfect", emoji: "💯", name: "滿分小考", how: "小考全部答對" },
  { id: "game-rocket", emoji: "🚀", name: "火箭駕駛", how: "火箭速算答對 10 題" },
  { id: "game-match", emoji: "🃏", name: "記憶高手", how: "完成翻牌配對" },
  { id: "game-sort", emoji: "🗂️", name: "分類達人", how: "分類島全對" },
  { id: "game-order", emoji: "🚂", name: "順序列車長", how: "順序列車全對" },
  { id: "game-spell", emoji: "⛵", name: "拼字船長", how: "拼字船完成 5 個字" },
  { id: "game-boss", emoji: "🏆", name: "島主挑戰者", how: "打敗島主" },
  { id: "subject-all", emoji: "🌈", name: "全科探險家", how: "每個科目都完成一課" },
  { id: "level-5", emoji: "🏡", name: "蓋好花園", how: "達到第 5 級" },
  { id: "level-10", emoji: "🗼", name: "點亮燈塔", how: "達到第 10 級" },
];

// Sticker rules read derived state, so re-running them never double-awards anything.
export function checkStickers(island, stats, now = Date.now()) {
  const has = (id) => island.stickers[id];
  const earned = [];
  const award = (id, cond) => {
    if (cond && !has(id)) earned.push(id);
  };
  const today = island.days[taipeiDay(now)];
  const streak = streakOf(island, now);
  const lv = levelOf(island.xp).level;
  award("first-read", stats.reads > 0);
  award("first-lesson", stats.complete > 0);
  award("lessons-5", stats.complete >= 5);
  award("lessons-20", stats.complete >= 20);
  award("lessons-50", stats.complete >= 50);
  award("lessons-100", stats.complete >= 100);
  award("review-1", stats.mastered >= 1);
  award("review-10", stats.mastered >= 10);
  award("streak-3", streak >= 3);
  award("streak-7", streak >= 7);
  award("streak-30", streak >= 30);
  award("goal-1", (today?.xp || 0) >= DAILY_GOAL);
  award("check-1", island.checks.length > 0);
  award("check-perfect", island.checks.some((c) => c.correct === c.total));
  award("game-rocket", (island.best.rocket || 0) >= 10);
  award("game-match", (island.best.match || 0) >= 1);
  award("game-sort", (island.best.sort || 0) >= 1);
  award("game-order", (island.best.order || 0) >= 1);
  award("game-spell", (island.best.spell || 0) >= 5);
  award("game-boss", (island.best.boss || 0) >= 1);
  award("subject-all", stats.subjects >= 9);
  award("level-5", lv >= 5);
  award("level-10", lv >= 10);
  if (!earned.length) return { island, earned };
  const stickers = { ...island.stickers };
  for (const id of earned) stickers[id] = now;
  return { island: { ...island, stickers }, earned };
}

export function questsOf(island, now = Date.now()) {
  const d = island.days[taipeiDay(now)] || { xp: 0, answers: 0, correct: 0, lessons: 0, games: 0 };
  return [
    { id: "lesson", label: "學完一課", icon: "📘", done: d.lessons >= 1, to: "/map" },
    { id: "correct", label: "答對 5 題", icon: "🎯", done: d.correct >= 5, value: Math.min(d.correct, 5), max: 5, to: "/map" },
    { id: "game", label: "玩一場遊戲", icon: "🎮", done: d.games >= 1, to: "/games" },
  ];
}

export function shuffled(list, random = Math.random) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
