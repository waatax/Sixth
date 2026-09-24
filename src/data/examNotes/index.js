// 🎓 108 課綱教科書考前筆記大複習總庫 (Exam Notes Data Hub)
// 匯整 8 大學科、16 個學期專頁、全數 64 單元深度教學筆記與歷年真題實戰
// 支援依「期中考（第1次段考）」、「期末考／畢業考（第2次段考）」與「全學期」動態篩選與 PDF 導出

import { mathNotes } from './mathNotes.js';
import { sciNotes } from './sciNotes.js';
import { manNotes } from './manNotes.js';
import { socNotes } from './socNotes.js';
import { engNotes } from './engNotes.js';
import { artNotes } from './artNotes.js';
import { peNotes } from './peNotes.js';
import { compNotes } from './compNotes.js';
import { unitHighlightsMap } from './unitHighlights.js';

export {
  mathNotes,
  sciNotes,
  manNotes,
  socNotes,
  engNotes,
  artNotes,
  peNotes,
  compNotes,
  unitHighlightsMap
};

// 64 單元段考範圍對照表 (Unit to Exam Scope Mapping)
export const unitExamScopeMap = {
  // 🧮 數學 (12 單元)
  'math-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 30%' },
  'math-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 35%' },
  'math-u3': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 35%' },
  'math-u4': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 35%' },
  'math-u5': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 35%' },
  'math-u6': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 30%' },
  'math-u7': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 35%' },
  'math-u8': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 35%' },
  'math-u9': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 30%' },
  'math-u10': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 35%' },
  'math-u11': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 35%' },
  'math-u12': { scope: 'final', label: '6下畢業考 (國中先修)', weight: '先修評量約佔 30%' },

  // 🔬 自然科學 (10 單元)
  'sci-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 35%' },
  'sci-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 35%' },
  'sci-u3': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 30%' },
  'sci-u4': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'sci-u5': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'sci-u6': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 35%' },
  'sci-u7': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 35%' },
  'sci-u8': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 30%' },
  'sci-u9': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },
  'sci-u10': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },

  // 📖 國語文 (8 單元)
  'man-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 50%' },
  'man-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 50%' },
  'man-u3': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'man-u4': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'man-u5': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 50%' },
  'man-u6': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 50%' },
  'man-u7': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },
  'man-u8': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },

  // 🌍 社會領域 (8 單元)
  'soc-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 50%' },
  'soc-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 50%' },
  'soc-u3': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'soc-u4': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'soc-u5': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 50%' },
  'soc-u6': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 50%' },
  'soc-u7': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },
  'soc-u8': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },

  // 🇬🇧 英語文 (8 單元)
  'eng-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 50%' },
  'eng-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '段考約佔 50%' },
  'eng-u3': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'eng-u4': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '段考約佔 50%' },
  'eng-u5': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 50%' },
  'eng-u6': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '段考約佔 50%' },
  'eng-u7': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業考約佔 50%' },
  'eng-u8': { scope: 'final', label: '6下畢業考 (國中先修)', weight: '先修評量約佔 50%' },

  // 🎨 藝術領域 (6 單元)
  'art-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '評量約佔 50%' },
  'art-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '評量約佔 50%' },
  'art-u3': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '期末評量 100%' },
  'art-u4': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '評量約佔 50%' },
  'art-u5': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '評量約佔 50%' },
  'art-u6': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業評量 100%' },

  // 💪 健體領域 (6 單元)
  'pe-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '評量約佔 50%' },
  'pe-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '評量約佔 50%' },
  'pe-u3': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '期末評量 100%' },
  'pe-u4': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '評量約佔 50%' },
  'pe-u5': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '評量約佔 50%' },
  'pe-u6': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業評量 100%' },

  // 🌱 綜合活動 (6 單元)
  'comp-u1': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '評量約佔 50%' },
  'comp-u2': { scope: 'midterm', label: '6上期中考 (第1次段考)', weight: '評量約佔 50%' },
  'comp-u3': { scope: 'final', label: '6上期末考 (第2次段考)', weight: '期末評量 100%' },
  'comp-u4': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '評量約佔 50%' },
  'comp-u5': { scope: 'midterm', label: '6下期中考 (第1次段考)', weight: '評量約佔 50%' },
  'comp-u6': { scope: 'final', label: '6下畢業考 (期末考)', weight: '畢業評量 100%' }
};

// 輔助函式：自動注入 examScope、examScopeLabel 與三大段考知識亮點
function enrichNoteWithScope(note) {
  const meta = unitExamScopeMap[note.unitId] || { scope: 'midterm', label: '段考重點', weight: '核心考點' };
  const highlightInfo = unitHighlightsMap[note.unitId] || {
    priorConcept: '前期核心觀念與先備基礎',
    masterySkill: '108 課綱核心素養實戰應用',
    highlights: ['課綱核心概念精準掌握', '歷屆名校高頻考點聚焦', '段考避雷指引與真題詳解']
  };

  return {
    ...note,
    examScope: meta.scope,
    examScopeLabel: meta.label,
    examWeight: meta.weight,
    priorConcept: highlightInfo.priorConcept,
    masterySkill: highlightInfo.masterySkill,
    highlights: highlightInfo.highlights
  };
}

export const allExamNotes = Object.fromEntries(
  Object.entries({
    ...mathNotes,
    ...sciNotes,
    ...manNotes,
    ...socNotes,
    ...engNotes,
    ...artNotes,
    ...peNotes,
    ...compNotes
  }).map(([k, v]) => [k, enrichNoteWithScope(v)])
);

// 依學科與學期查詢單元筆記清單
export function getNotesBySubjectAndSemester(subjectId, semester = '6A') {
  const semKey = semester.toUpperCase(); // '6A' or '6B'
  let targetBank = {};

  switch (subjectId) {
    case 'math':
      targetBank = mathNotes;
      break;
    case 'science':
      targetBank = sciNotes;
      break;
    case 'mandarin':
      targetBank = manNotes;
      break;
    case 'social':
      targetBank = socNotes;
      break;
    case 'english':
      targetBank = engNotes;
      break;
    case 'arts':
      targetBank = artNotes;
      break;
    case 'health_pe':
      targetBank = peNotes;
      break;
    case 'integrative':
      targetBank = compNotes;
      break;
    default:
      targetBank = mathNotes;
  }

  return Object.values(targetBank)
    .filter(note => note.semester === semKey)
    .map(enrichNoteWithScope);
}

// 依學科、學期與段考範圍（all | midterm | final）精準篩選單元筆記
export function getNotesBySubjectSemesterAndScope(subjectId, semester = '6A', scope = 'all') {
  const list = getNotesBySubjectAndSemester(subjectId, semester);
  if (scope === 'all') return list;
  return list.filter(n => n.examScope === scope);
}

// 取得特定學科、學期與段考的講義元資料（標題、描述、PDF檔名等）
export function getExamHandoutInfo(subjectId, semester = '6A', scope = 'all') {
  const semKey = semester.toUpperCase();
  const is6A = semKey === '6A';

  const subjectNames = {
    math: '數學領域',
    science: '自然科學領域',
    mandarin: '國語文領域',
    social: '社會領域',
    english: '英語文領域',
    arts: '藝術領域',
    health_pe: '健康與體育領域',
    integrative: '綜合活動領域'
  };

  const subName = subjectNames[subjectId] || '核心領域';

  let scopeName = '';
  let badgeText = '';
  let desc = '';

  if (scope === 'midterm') {
    scopeName = is6A ? '期中考（第一次段考）重點講義' : '期中考（第一次段考）重點講義';
    badgeText = '🎯 期中段考必勝';
    desc = `專為六年級${is6A ? '上' : '下'}學期「期中考／第一次段考」量身編修，集中攻克前半學期核心定義、公式口訣、易錯防雷陷阱與名校經典真題！`;
  } else if (scope === 'final') {
    scopeName = is6A ? '期末考（第二次段考）衝刺講義' : '畢業考（畢業考與國中先修）衝刺講義';
    badgeText = is6A ? '🏆 期末段考衝刺' : '🎓 畢業考高分衝刺';
    desc = `專為六年級${is6A ? '上' : '下'}學期「${is6A ? '期末考／第二次段考' : '畢業考與先修'}」打造，完整涵蓋進階高分考點、綜合應用與國中銜接大招！`;
  } else {
    scopeName = is6A ? '第一學期（期末總複習）完整講義' : '第二學期（畢業考與先修）完整講義';
    badgeText = '🌟 全學期大滿貫';
    desc = `完整收錄六年級${is6A ? '上' : '下'}學期全部單元，一站式囊括完整觀念突破、名師大招、常考易錯題與各校真題解析！`;
  }

  const pdfFileName = `${subjectId}_${semKey}_${scope}.pdf`;
  const pdfUrl = `/downloads/pdf/${pdfFileName}`;

  return {
    subjectId,
    subjectName: subName,
    semester: semKey,
    semesterLabel: is6A ? '六年級上學期' : '六年級下學期',
    scope,
    scopeName,
    badgeText,
    fullTitle: `108 課綱國小六年級${is6A ? '上' : '下'}學期【${scopeName}】名師大複習`,
    description: desc,
    pdfFileName,
    pdfUrl
  };
}

// 統計資訊
export function getExamNotesStats() {
  const totalUnits = Object.keys(allExamNotes).length;
  let totalWalkthroughs = 0;
  let totalCheckpoints = 0;
  let totalFormulas = 0;
  let totalPitfalls = 0;

  Object.values(allExamNotes).forEach(n => {
    if (n.pastExamWalkthroughs) totalWalkthroughs += n.pastExamWalkthroughs.length;
    if (n.selfChecklist) totalCheckpoints += n.selfChecklist.length;
    if (n.keyFormulas) totalFormulas += n.keyFormulas.length;
    if (n.examPitfalls) totalPitfalls += n.examPitfalls.length;
  });

  return {
    totalUnits,
    totalWalkthroughs,
    totalCheckpoints,
    totalFormulas,
    totalPitfalls
  };
}
