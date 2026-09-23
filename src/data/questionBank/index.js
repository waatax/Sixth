// 課綱精選千題題庫匯整模組 (Thousand Questions Data Hub)
// 包含全 8 大學科、64 個單元、共 1,024 題具有代表性的課綱標準精選題目

import { mathQuestions } from './mathQuestions.js';
import { sciQuestions } from './sciQuestions.js';
import { manQuestions } from './manQuestions.js';
import { socQuestions } from './socQuestions.js';
import { engQuestions } from './engQuestions.js';
import { artQuestions } from './artQuestions.js';
import { peQuestions } from './peQuestions.js';
import { compQuestions } from './compQuestions.js';

export {
  mathQuestions,
  sciQuestions,
  manQuestions,
  socQuestions,
  engQuestions,
  artQuestions,
  peQuestions,
  compQuestions
};

// 標記每一題為課綱代表精選題
function tagQuestions(bank) {
  const taggedBank = {};
  for (const [unitId, questions] of Object.entries(bank)) {
    taggedBank[unitId] = questions.map((q, idx) => ({
      ...q,
      isRepresentative: true,
      order: idx + 1
    }));
  }
  return taggedBank;
}

export const thousandQuestionsData = {
  ...tagQuestions(mathQuestions),
  ...tagQuestions(sciQuestions),
  ...tagQuestions(manQuestions),
  ...tagQuestions(socQuestions),
  ...tagQuestions(engQuestions),
  ...tagQuestions(artQuestions),
  ...tagQuestions(peQuestions),
  ...tagQuestions(compQuestions)
};

// 統計資訊輔助函數
export function getThousandQuestionsStats() {
  const unitCount = Object.keys(thousandQuestionsData).length;
  let totalQuestions = 0;
  for (const list of Object.values(thousandQuestionsData)) {
    totalQuestions += list.length;
  }
  return {
    unitCount,
    totalQuestions
  };
}
