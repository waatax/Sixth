// 學習內容擴充匯整：64 單元各新增 1 個「延伸應用」知識點（第 4 個重點）與 3 題對應的四選一練習
// 知識點沿用同單元第 1 個重點的課綱資訊，圖解使用自動排版的知識圖卡

import { mathSciExpansion } from './mathSci.js';
import { manSocExpansion } from './manSoc.js';
import { engArtExpansion } from './engArt.js';
import { peCompExpansion } from './peComp.js';

export const expansionContent = {
  ...mathSciExpansion,
  ...manSocExpansion,
  ...engArtExpansion,
  ...peCompExpansion
};

const expansionKpId = (unitId) => `kp-${unitId}-4`;

// 把延伸知識點接在每個單元原有的 3 個重點後面，並和同單元的重點互相連結
export function appendExpansionPoints(points) {
  const result = [];
  const byUnit = {};
  for (const kp of points) (byUnit[kp.unitId] ??= []).push(kp);

  for (const [unitId, siblings] of Object.entries(byUnit)) {
    result.push(...siblings);
    const content = expansionContent[unitId]?.kp;
    if (!content) continue;
    const base = siblings[0];
    const subjectLabel = base.category.split('・')[0];
    const kp = {
      id: expansionKpId(unitId),
      pointIndex: siblings.length,
      unitId,
      unitIndex: base.unitIndex,
      subjectId: base.subjectId,
      semester: base.semester,
      title: content.t,
      category: `${subjectLabel}・延伸應用`,
      badgeColor: 'violet',
      definition: content.d,
      formulaOrRule: content.r,
      strategyTip: `【什麼時候用】${content.s}`,
      trapAlert: `【易錯提醒】${content.w}`,
      practicalUtility: `【生活實用】${content.u}`,
      textbookFocus: base.textbookFocus,
      juniorHighBridge: base.juniorHighBridge,
      infographicKey: `info-${unitId}-4`,
      example: content.e,
      isExpansion: true,
      useTailoredCard: true,
      relatedPoints: siblings.map((sib) => ({
        id: sib.id,
        title: sib.title,
        unitId,
        subjectId: sib.subjectId,
        relation: '同課基礎重點',
        badgeType: 'sibling',
        desc: `先學會這個基礎重點，再看延伸應用：${sib.title}`
      }))
    };
    const last = siblings[siblings.length - 1];
    last.relatedPoints = [
      ...(last.relatedPoints || []),
      {
        id: kp.id,
        title: kp.title,
        unitId,
        subjectId: kp.subjectId,
        relation: '同課延伸應用',
        badgeType: 'sibling',
        desc: `學完這一課的重點，挑戰延伸應用：${kp.title}`
      }
    ];
    result.push(kp);
  }
  return result;
}

// 每單元 3 題延伸練習，題目格式與題庫一致
export function getExpansionQuestions(unitId) {
  const list = expansionContent[unitId]?.q || [];
  return list.map(([question, options, answerIndex, explanation], i) => ({
    id: `x-${unitId}-${i + 1}`,
    question: `【延伸應用】${question}`,
    options,
    answerIndex,
    explanation,
    kpId: expansionKpId(unitId),
    isExpansion: true
  }));
}
