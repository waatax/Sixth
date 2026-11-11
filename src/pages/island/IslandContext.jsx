import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { gardenLessons } from "../../data/elementaryGarden.js";
import { lessonState, readGarden, recordGardenAnswer, saveGarden } from "../../utils/gardenEngine.js";
import { addActivity, answerXp, checkStickers, levelOf, readIsland, saveIsland } from "../../utils/islandGame.js";
import { playSound } from "../../utils/soundEffects.js";

const IslandContext = createContext(null);
export const useIsland = () => useContext(IslandContext);

const GAME_XP_DAILY_CAP = 80;

function statsOf(progress) {
  let complete = 0;
  let mastered = 0;
  const subjects = new Set();
  for (const lesson of gardenLessons) {
    const state = lessonState(lesson, progress);
    if (state.complete) {
      complete++;
      subjects.add(lesson.subject);
    }
    if (state.mastered) mastered++;
  }
  return { complete, mastered, subjects: subjects.size, reads: Object.keys(progress.reads).length };
}

export function IslandProvider({ children }) {
  const [progress, setProgress] = useState(readGarden);
  const [island, setIsland] = useState(readIsland);
  const [toasts, setToasts] = useState([]);
  const [saveFailed, setSaveFailed] = useState(false);
  const refs = useRef({ progress, island });
  refs.current = { progress, island };

  const stats = useMemo(() => statsOf(progress), [progress]);

  const commit = useCallback((nextProgress, nextIsland) => {
    const before = levelOf(refs.current.island.xp).level;
    const { island: withStickers, earned } = checkStickers(nextIsland, statsOf(nextProgress));
    refs.current = { progress: nextProgress, island: withStickers };
    setProgress(nextProgress);
    setIsland(withStickers);
    setSaveFailed(!(saveGarden(nextProgress) && saveIsland(withStickers)));
    const after = levelOf(withStickers.xp);
    const fresh = earned.map((id) => ({ kind: "sticker", id, key: `${id}-${Date.now()}` }));
    if (after.level > before) fresh.push({ kind: "level", id: after.level, key: `level-${after.level}` });
    if (fresh.length) setToasts((t) => [...t, ...fresh].slice(-3));
  }, []);

  const answer = useCallback(
    (question, correct, { silent } = {}) => {
      const { progress: p, island: i } = refs.current;
      const old = p.records[question.key];
      const isReview = Boolean(old) && Date.now() >= old.due;
      // Repeating before the review date is fine practice but earns only a token reward.
      const xp = old && !isReview ? (correct ? 2 : 1) : answerXp(correct, isReview);
      const next = recordGardenAnswer(p, question, correct);
      commit(next, addActivity(i, { xp, answers: 1, correct: correct ? 1 : 0 }));
      if (!silent && i.sound) playSound(correct ? "correct" : "wrong");
      return { xp, isReview };
    },
    [commit],
  );

  const markRead = useCallback(
    (lessonId) => {
      const { progress: p, island: i } = refs.current;
      if (p.reads[lessonId]) return;
      commit({ ...p, reads: { ...p.reads, [lessonId]: Date.now() } }, addActivity(i, { xp: 2 }));
    },
    [commit],
  );

  const finishLesson = useCallback(
    (first, review) => {
      const { progress: p, island: i } = refs.current;
      commit(p, addActivity(i, { xp: first ? 10 : 0, lessons: first || review ? 1 : 0 }));
    },
    [commit],
  );

  const gameDone = useCallback(
    (game, score, xp) => {
      const { progress: p, island: i } = refs.current;
      const today = Object.entries(i.days).at(-1);
      const gamesToday = today ? today[1].games : 0;
      const capped = gamesToday * 15 >= GAME_XP_DAILY_CAP ? 0 : xp;
      const next = addActivity(i, { xp: capped, games: 1, answers: 1 });
      commit(p, { ...next, best: { ...next.best, [game]: Math.max(next.best[game] || 0, score) } });
      return capped;
    },
    [commit],
  );

  const checkDone = useCallback(
    (entry) => {
      const { progress: p, island: i } = refs.current;
      commit(p, { ...addActivity(i, { xp: 10 }), checks: [...i.checks, entry].slice(-20) });
    },
    [commit],
  );

  const setPref = useCallback(
    (key, value) => {
      const { progress: p, island: i } = refs.current;
      commit(p, { ...i, [key]: value });
    },
    [commit],
  );

  const toggleLike = useCallback(
    (lessonId) => {
      const { progress: p, island: i } = refs.current;
      const likeKey = `like:${lessonId}`;
      const wasLiked = Boolean(i.best[likeKey]);
      const nextBest = { ...i.best, [likeKey]: wasLiked ? 0 : 1 };
      const likesCount = Object.entries(nextBest).filter(([k, v]) => k.startsWith("like:") && v > 0).length;
      nextBest.likes = likesCount;
      const rewardedKey = `liked-xp:${lessonId}`;
      const giveXp = !wasLiked && !i.best[rewardedKey] ? 3 : 0;
      if (giveXp) nextBest[rewardedKey] = 1;
      const nextIsland = giveXp ? addActivity(i, { xp: giveXp }) : i;
      if (!wasLiked && i.sound) playSound("correct");
      commit(p, { ...nextIsland, best: nextBest });
    },
    [commit],
  );

  const dismissToast = useCallback((key) => setToasts((t) => t.filter((x) => x.key !== key)), []);

  useEffect(() => {
    const sync = () => {
      setProgress(readGarden());
      setIsland(readIsland());
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const value = useMemo(
    () => ({ progress, island, stats, toasts, saveFailed, answer, markRead, finishLesson, gameDone, checkDone, setPref, toggleLike, dismissToast }),
    [progress, island, stats, toasts, saveFailed, answer, markRead, finishLesson, gameDone, checkDone, setPref, toggleLike, dismissToast],
  );
  return <IslandContext.Provider value={value}>{children}</IslandContext.Provider>;
}
