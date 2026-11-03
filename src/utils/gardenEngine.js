import { gardenLessons } from "../data/elementaryGarden.js";

export const GARDEN_STORAGE = "sixth-garden-v1";
const DAY = 86400000;
const intervals = [1, 3, 7, 14];
export const emptyGarden = () => ({
  version: 1,
  records: {},
  reads: {},
  days: {},
});
const questionKeys = new Set(
  gardenLessons.flatMap((l) => l.questions.map((q) => q.key)),
);
const lessonKeys = new Set(gardenLessons.map((l) => l.id));
const positive = (value) => Number.isFinite(value) && value >= 0;
const timestamp = (value) => positive(value) && value <= 8_640_000_000_000_000;

export function taipeiDay(now = Date.now()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
}

// Treat persisted data as untrusted, including old schemas and partially corrupted records.
export function readGarden(storage = globalThis.localStorage) {
  try {
    const data = JSON.parse(storage.getItem(GARDEN_STORAGE));
    const clean = emptyGarden();
    if (data?.version !== 1) return clean;
    for (const [key, r] of Object.entries(data.records || {})) {
      if (
        !questionKeys.has(key) ||
        !r ||
        !["attempts", "correct", "streak", "due", "updated"].every((k) =>
          positive(r[k]),
        ) ||
        r.correct > r.attempts ||
        !Number.isSafeInteger(r.attempts) ||
        r.attempts < 1 ||
        !Number.isSafeInteger(r.correct) ||
        !timestamp(r.due) ||
        !timestamp(r.updated) ||
        !Number.isInteger(r.streak) ||
        r.streak > 4 ||
        typeof r.wrong !== "boolean"
      )
        continue;
      clean.records[key] = {
        attempts: r.attempts,
        correct: r.correct,
        streak: r.streak,
        due: r.due,
        updated: r.updated,
        wrong: r.wrong,
        lastCredit: timestamp(r.lastCredit) ? r.lastCredit : 0,
      };
    }
    for (const [key, time] of Object.entries(data.reads || {}))
      if (lessonKeys.has(key) && timestamp(time)) clean.reads[key] = time;
    for (const [day, keys] of Object.entries(data.days || {})
      .sort()
      .slice(-30)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(day) && Array.isArray(keys))
        clean.days[day] = [
          ...new Set(keys.filter((key) => questionKeys.has(key))),
        ];
    }
    return clean;
  } catch {
    return emptyGarden();
  }
}

export function saveGarden(progress, storage = globalThis.localStorage) {
  try {
    storage.setItem(GARDEN_STORAGE, JSON.stringify(progress));
    return true;
  } catch {
    return false;
  }
}

export function recordGardenAnswer(
  progress,
  question,
  correct,
  now = Date.now(),
) {
  if (!questionKeys.has(question.key)) return progress;
  const old = progress.records[question.key];
  // Repeating a question before its scheduled review can correct a mistake, but
  // does not manufacture spaced mastery or push the review date further away.
  const eligible = !old || now >= old.due;
  const streak = correct
    ? Math.min(4, (old?.streak || 0) + Number(eligible))
    : 0;
  const due = !correct
    ? now + DAY
    : eligible
      ? now + intervals[Math.max(0, streak - 1)] * DAY
      : old.due;
  const day = taipeiDay(now);
  const days = {
    ...progress.days,
    [day]: [...new Set([...(progress.days[day] || []), question.key])],
  };
  return {
    ...progress,
    days: Object.fromEntries(Object.entries(days).sort().slice(-30)),
    records: {
      ...progress.records,
      [question.key]: {
        attempts: (old?.attempts || 0) + 1,
        correct: (old?.correct || 0) + Number(correct),
        wrong: !correct,
        streak,
        due,
        updated: now,
        lastCredit: correct && eligible ? now : old?.lastCredit || 0,
      },
    },
  };
}

export function lessonState(lesson, progress, now = Date.now()) {
  const records = lesson.questions.map((q) => progress.records[q.key]);
  const complete = records.every(Boolean);
  const mastered = records.every((r) => r && !r.wrong && r.streak >= 2);
  const due = records.some((r) => r && r.due <= now);
  const mistakes = records.some((r) => r?.wrong);
  const started = records.some(Boolean) || Boolean(progress.reads[lesson.id]);
  return {
    complete,
    mastered,
    due,
    mistakes,
    started,
    label: due
      ? "到時間複習了"
      : mistakes
        ? "再想想這個觀念"
        : mastered
          ? "已跨日複習"
          : complete
            ? "完成初次練習"
            : started
              ? "繼續探索"
              : "新發現",
  };
}

export function recommendLesson(lessons, progress, now = Date.now()) {
  return [...lessons].sort((a, b) => {
    const priority = (l) => {
      const s = lessonState(l, progress, now);
      return s.due
        ? 0
        : s.mistakes
          ? 1
          : s.started && !s.complete
            ? 2
            : !s.started
              ? 3
              : 4;
    };
    return priority(a) - priority(b) || a.order - b.order;
  })[0];
}
