// 小六友善版微知識點補強層：把每個知識點換成「白話解釋 + 例子 + 專屬規則 + 專屬易錯提醒」
// 原始的精簡重點保留在 keyFact，所有顯示 definition / formulaOrRule / trapAlert 的畫面自動受惠

import { mathSciKid } from './mathSci.js';
import { manSocKid } from './manSoc.js';
import { engArtPeCompKid } from './engArtPeComp.js';

export const kidKnowledgeOverlay = { ...mathSciKid, ...manSocKid, ...engArtPeCompKid };

// 這些知識點原本的專屬圖卡內容超出小六程度或與知識點不符，改用自動排版的知識圖卡
export const kidInfographicOverrides = new Set([
  'kp-pe-u1-1',
  'kp-pe-u2-2',
  'kp-pe-u4-1',
  'kp-pe-u4-2',
  'kp-pe-u4-3',
  'kp-pe-u6-1',
  'kp-comp-u3-1'
]);

export function applyKidOverlay(points) {
  const titleById = {};
  for (const kp of points) {
    const kid = kidKnowledgeOverlay[kp.id];
    if (!kid) continue;
    // 健體原文多為超出小六程度的醫學術語，只保留白話版本
    if (kp.subjectId !== 'health_pe') kp.keyFact = kp.definition.replace(/^[^：]*：/, '');
    if (kid.t) kp.title = kid.t;
    kp.definition = kid.d;
    kp.example = kid.e;
    kp.formulaOrRule = kid.r;
    kp.trapAlert = `【易錯提醒】${kid.w}`;
    if (kidInfographicOverrides.has(kp.id)) kp.useTailoredCard = true;
    titleById[kp.id] = kp.title;
  }
  // 關聯知識點的標題同步更新
  for (const kp of points) {
    for (const rel of kp.relatedPoints || []) {
      if (titleById[rel.id]) rel.title = titleById[rel.id];
    }
  }
  return points;
}
