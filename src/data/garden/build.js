// Compact authoring format for island lessons.
// Questions: "問|正解|錯|錯|錯|理由", "tf:敘述|T或F|理由", "num:問|答案|單位|理由",
// "ord:提示|甲>乙>丙|理由", "pair:提示|左=右,左=右|理由".
import { balanceQuestion } from "../../utils/balanceOptions.js";
import {
  extraQuestionByLessonId,
  buildFunFact,
  buildTypeGuide,
} from "./enrichment.js";

export const stageOf = (grade) =>
  grade <= 2 ? "第一學習階段" : grade <= 4 ? "第二學習階段" : "第三學習階段";

export function parseQuestion(text, meta) {
  const base = { key: meta.key, unitId: meta.lessonId, kind: meta.kind, hint: meta.hint };
  const typed = text.match(/^(tf|num|ord|pair):/);
  if (!typed) {
    const [question, right, a, b, c, explanation] = text.split("|");
    return {
      ...balanceQuestion({
        question,
        options: [right, a, b, c],
        answerIndex: 0,
        explanation,
      }),
      ...base,
      type: "mcq",
    };
  }
  const body = text.slice(typed[0].length).split("|");
  if (typed[1] === "tf")
    return {
      ...base,
      type: "mcq",
      tf: true,
      question: body[0],
      options: ["對", "不對"],
      answerIndex: body[1] === "T" ? 0 : 1,
      explanation: body[2],
    };
  if (typed[1] === "num")
    return {
      ...base,
      type: "num",
      question: body[0],
      answer: body[1],
      unit: body[2],
      options: [`${body[1]}${body[2] ? ` ${body[2]}` : ""}`],
      answerIndex: 0,
      explanation: body[3],
    };
  if (typed[1] === "ord")
    return {
      ...base,
      type: "ord",
      question: body[0],
      items: body[1].split(">"),
      options: [body[1].split(">").join(" → ")],
      answerIndex: 0,
      explanation: body[2],
    };
  const pairs = body[1].split(",").map((p) => p.split("="));
  return {
    ...base,
    type: "pair",
    question: body[0],
    pairs,
    options: [pairs.map((p) => p.join(" ↔ ")).join("、")],
    answerIndex: 0,
    explanation: body[2],
  };
}

// Answers need the same grading rule everywhere a question can be shown.
export function normalizeAnswer(value) {
  return String(value)
    .trim()
    .replace(/[０-９]/g, (d) => String.fromCharCode(d.charCodeAt(0) - 65248))
    .replace(/，/g, ",")
    .replace(/,/g, "")
    .replace(/．/g, ".");
}

export function isCorrect(question, response) {
  if (question.type === "num")
    return normalizeAnswer(response) === normalizeAnswer(question.answer);
  if (question.type === "ord")
    return Array.isArray(response) && response.join(">") === question.items.join(">");
  if (question.type === "pair") return response === true;
  return response === question.answerIndex;
}

export function buildLesson(row, subject, order) {
  const {
    id,
    codes,
    grade,
    title,
    goal,
    exp,
    trap,
    panels,
    v,
    qs,
    kw = "",
  } = row;
  const panelList = panels.split(";").map((panel) => {
    const [label, value] = panel.split("|");
    return { label, value };
  });
  const allQs =
    qs.length < 3 && extraQuestionByLessonId[id]
      ? [...qs, extraQuestionByLessonId[id]]
      : qs;
  const lesson = {
    id,
    grade,
    subject,
    title,
    goal,
    explanation: exp,
    trap,
    codes,
    keywords: kw,
    visual: v || null,
    stage: stageOf(grade),
    minutes: grade <= 2 ? 4 : grade <= 4 ? 5 : 6,
    panels: panelList,
    questions: allQs.map((text, i) =>
      parseQuestion(text, {
        key: `garden:${id}:${i}`,
        lessonId: id,
        kind: i === 0 ? "把觀念想起來" : i === 1 ? "換個情境試試" : "進階挑戰",
        hint: i === 0 ? `回想學習目標：${goal}` : `想想這課的提醒：${trap}`,
      }),
    ),
    order,
  };
  lesson.funFact = buildFunFact(lesson);
  lesson.typeGuide = buildTypeGuide(lesson);
  return lesson;
}

// Math rows: L("N-1-2", 標題, 目標, 解說, 提醒, 三格整理, 圖解, 題目, 關鍵字)
export function mathRow(code, title, goal, exp, trap, panels, v, qs, kw) {
  const codes = code.split(",");
  return {
    id: `m-${codes[0]}`,
    codes,
    grade: Number(codes[0].split("-")[1]),
    title,
    goal,
    exp,
    trap,
    panels,
    v,
    qs,
    kw,
  };
}

// Other subjects: T(年級, 代碼或空字串, 英文短 id, 標題, 目標, 解說, 提醒, 三格整理, 圖解, 題目, 關鍵字)
export function topicRow(prefix, grade, code, slug, title, goal, exp, trap, panels, v, qs, kw) {
  return {
    id: `${prefix}${grade}-${slug}`,
    codes: code ? code.split(",") : [],
    grade,
    title,
    goal,
    exp,
    trap,
    panels,
    v,
    qs,
    kw,
  };
}
