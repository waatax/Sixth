import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 跨領域整合拓撲對照表
const crossSubjectLinks = {
  'math-u4': { targetUnitId: 'sci-u6', targetIdx: 0, relation: '跨域物理聯想', desc: '比例與比值 ➔ 槓桿原理施力臂與抗力臂反比平衡' },
  'math-u6': { targetUnitId: 'art-u1', targetIdx: 0, relation: '跨域美學幾何', desc: '圓面積與扇形分割 ➔ 十二色相環幾何角度切割' },
  'math-u7': { targetUnitId: 'sci-u1', targetIdx: 2, relation: '跨域大氣物理', desc: '速率距離時間 ➔ 颱風移動路徑速度與海陸風氣流' },
  'math-u9': { targetUnitId: 'soc-u7', targetIdx: 0, relation: '跨域地理製圖', desc: '比例尺縮放 ➔ 世界地圖比例尺與經緯度實距換算' },
  'math-u10': { targetUnitId: 'soc-u3', targetIdx: 0, relation: '跨域經濟量化', desc: '基準量與比較量 ➔ 產業成長率與進出口倍數比較' },
  'math-u11': { targetUnitId: 'sci-u6', targetIdx: 0, relation: '跨域等量平衡', desc: '等量公理 ➔ 天平與槓桿左右力矩等值平衡' },
  'math-u12': { targetUnitId: 'soc-u3', targetIdx: 1, relation: '跨域經濟統計', desc: '圓形百分率圖 ➔ 家庭經濟支出與進出口貿易比例' },
  'sci-u1': { targetUnitId: 'soc-u7', targetIdx: 0, relation: '跨域地理氣候', desc: '大氣高低壓與鋒面 ➔ 臺灣與全球氣候帶與季風分布' },
  'sci-u3': { targetUnitId: 'soc-u8', targetIdx: 0, relation: '跨域科技硬體', desc: '電磁鐵與電流效應 ➔ 資訊科技硬體與電機工程' },
  'sci-u5': { targetUnitId: 'sci-u1', targetIdx: 0, relation: '跨域熱力氣候', desc: '熱對流與海陸風 ➔ 大氣垂直上升冷凝與海陸日夜溫差' },
  'sci-u6': { targetUnitId: 'pe-u4', targetIdx: 1, relation: '跨域人體力學', desc: '槓桿與滑輪省力 ➔ 人體骨骼關節槓桿與運動防護' },
  'sci-u7': { targetUnitId: 'comp-u6', targetIdx: 0, relation: '跨域戶外保養', desc: '物質防鏽防腐 ➔ 戶外登山金屬裝備防潮保養' },
  'sci-u8': { targetUnitId: 'pe-u2', targetIdx: 0, relation: '跨域生命健康', desc: '食物鏈能量金字塔 ➔ 人體六大類營養素與熱量平衡' },
  'sci-u9': { targetUnitId: 'art-u2', targetIdx: 0, relation: '跨域聲學音樂', desc: '聲音頻率與振幅 ➔ 音樂旋律音高與五線譜音符時值' },
  'sci-u10': { targetUnitId: 'pe-u3', targetIdx: 0, relation: '跨域微觀健康', desc: '顯微鏡微生物觀察 ➔ 傷口感染細菌防護與急救' },
  'man-u1': { targetUnitId: 'soc-u8', targetIdx: 1, relation: '跨域批判思維', desc: 'PIRLS 閱讀理解四層次 ➔ 數位假訊息事實驗證' },
  'man-u2': { targetUnitId: 'eng-u2', targetIdx: 0, relation: '跨語文敘事法', desc: '記敘文起承轉合 ➔ 英語過去式冒險故事創作' },
  'man-u4': { targetUnitId: 'art-u2', targetIdx: 0, relation: '跨域語文音樂', desc: '修辭押韻對仗 ➔ 音樂旋律對稱與節奏律動' },
  'man-u8': { targetUnitId: 'soc-u2', targetIdx: 0, relation: '跨域文化語言', desc: '六書漢字形音義 ➔ 臺灣多元族群文化資產' },
  'soc-u1': { targetUnitId: 'soc-u5', targetIdx: 0, relation: '公民憲政體系', desc: '五權分立中央體系 ➔ 法律位階金字塔與兒少人權' },
  'soc-u3': { targetUnitId: 'comp-u1', targetIdx: 2, relation: '跨域理財素養', desc: '機會成本與產業轉型 ➔ 631 儲蓄理財分配法則' },
  'soc-u4': { targetUnitId: 'eng-u5', targetIdx: 0, relation: '跨域全球公民', desc: '全球化與國際組織 ➔ 英語世界節慶巡禮與多元文化' },
  'eng-u1': { targetUnitId: 'comp-u1', targetIdx: 0, relation: '跨域自律生活', desc: '日常作息時間規劃 ➔ 艾森豪時間四象限矩陣' },
  'eng-u2': { targetUnitId: 'man-u2', targetIdx: 0, relation: '跨語文冒險敘事', desc: '過去式冒險故事 ➔ 記敘文高潮轉折情節鋪陳' },
  'eng-u3': { targetUnitId: 'soc-u7', targetIdx: 0, relation: '跨域空間方位', desc: '問路與空間介系詞 ➔ 地球村經緯坐標與城鎮導航' },
  'eng-u8': { targetUnitId: 'math-u4', targetIdx: 0, relation: '跨域量化比較', desc: '形容詞比較級最高級 ➔ 數學比與比值倍數比較' },
  'pe-u3': { targetUnitId: 'comp-u2', targetIdx: 0, relation: '跨域應變溝通', desc: 'CPR+AED 急救流程 ➔ 緊急應變冷靜指令與同理心' },
  'pe-u4': { targetUnitId: 'sci-u6', targetIdx: 0, relation: '跨域人體力學', desc: '運動體適能 ➔ 骨骼肌腱支點施力槓桿力學' },
  'comp-u1': { targetUnitId: 'math-u7', targetIdx: 0, relation: '跨域理性規劃', desc: '艾森豪矩陣時間規劃 ➔ 速率距離時間精準分配' },
  'comp-u3': { targetUnitId: 'man-u1', targetIdx: 1, relation: '跨域深度學習', desc: '費曼學習法小學生教導 ➔ 閱讀理解精準主旨提煉' }
};

async function generate() {
  const { coursesData } = await import('../src/data/courses.js');
  const { conceptBridges } = await import('../src/data/conceptBridges.js');
  const { unitHighlightsMap, normalizeHighlightItem } = await import('../src/data/examNotes/unitHighlights.js');
  const { textbookVersionMatrix } = await import('../src/data/examNotes/textbookVersionMatrix.js');

  const allPoints = [];

  for (const subject of coursesData.subjects) {
    const units = coursesData.units[subject.id] || [];
    for (let uIdx = 0; uIdx < units.length; uIdx++) {
      const unit = units[uIdx];
      const bridge = conceptBridges[unit.id] || {};
      const uHighlight = unitHighlightsMap[unit.id] || {};
      const tb = textbookVersionMatrix[unit.id] || {};
      const highlights = uHighlight.highlights || [];
      const radars = bridge.keywordRadar || [];
      const concepts = unit.keyConcepts || [];

      // Generate 3 explicit micro-knowledge points per unit
      for (let i = 0; i < 3; i++) {
        const rawH = highlights[i] || concepts[i] || '核心素養概念實踐';
        const normH = normalizeHighlightItem(rawH, i);
        const radar = radars[i % Math.max(1, radars.length)] || { trigger: '審題關鍵字', tool: '破題核心策略' };
        
        let cat = '核心概念突破';
        let badgeColor = 'blue';
        if (i === 0) {
          cat = '觀念本質與定義';
          badgeColor = 'blue';
        } else if (i === 1) {
          cat = '運算算理與公式';
          badgeColor = 'amber';
        } else {
          cat = '生活實用與避雷';
          badgeColor = 'emerald';
        }

        let pointTitle = normH.point ? normH.point.replace(/^[「【]/, '').replace(/[」】].*$/, '').trim() : '';
        if (!pointTitle || pointTitle.length > 20) {
          pointTitle = concepts[i] || `${unit.title.split('：')[1] || unit.title} 核心點 0${i + 1}`;
        }

        // Formulate clean, rich definition
        let definition = '';
        if (normH.point && normH.detail && !normH.detail.startsWith(normH.point)) {
          definition = `${normH.point}：${normH.detail}`;
        } else {
          definition = normH.detail || rawH;
        }
        
        let formulaOrRule = '';
        if (normH.detail && normH.detail.includes('$')) {
          formulaOrRule = normH.detail;
        } else if (radar.tool) {
          formulaOrRule = `核心工具與心法：${radar.tool}`;
        } else {
          formulaOrRule = normH.detail || rawH;
        }

        const kp = {
          id: `kp-${unit.id}-${i + 1}`,
          pointIndex: i,
          unitId: unit.id,
          unitIndex: uIdx,
          subjectId: subject.id,
          semester: unit.semester || '6A',
          title: pointTitle,
          category: `${subject.shortName}・${cat}`,
          badgeColor: badgeColor,
          definition: definition,
          formulaOrRule: formulaOrRule,
          strategyTip: `【審題觸發】當題目出現「${radar.trigger}」時，立即啟動「${radar.tool}」解題。考前速記：${tb.quickRescue || tb.rescueTip || '冷靜審題，標記關鍵字，列式代入驗算。'}`,
          trapAlert: normH.trapAlert ? `【避雷防錯】${normH.trapAlert}：${normH.detail}` : `【避雷提醒】審題時先圈出單位與關鍵字，切勿因跳步心算而粗心失分。`,
          practicalUtility: `【生活實用】${bridge.lifeApplication || '日常生活觀察、數據量化分析與問題決策。'}`,
          textbookFocus: `康軒：${tb.kangHsuan || '基礎觀念落實'} ｜ 南一：${tb.nanI || '實例引導演算'} ｜ 翰林：${tb.hanLin || '素養綜合應用'}`,
          juniorHighBridge: bridge.juniorHighBridge || '國中七年級相關單元深化銜接',
          infographicKey: `info-${unit.id}-${i + 1}`,
          relatedPoints: []
        };

        allPoints.push(kp);
      }
    }
  }

  // Second pass: dynamically construct 4-dimensional related points topology
  for (const kp of allPoints) {
    const related = [];

    // 1. 同單元心法點 (Sibling Points within same unit - Always 2 points)
    const unitPoints = allPoints.filter(p => p.unitId === kp.unitId && p.id !== kp.id);
    for (const sib of unitPoints) {
      let relName = '同課核心心法';
      if (sib.pointIndex === 0) relName = '同課觀念基石';
      else if (sib.pointIndex === 1) relName = '同課算理推導';
      else relName = '同課避雷實用';

      related.push({
        id: sib.id,
        title: sib.title,
        unitId: sib.unitId,
        subjectId: sib.subjectId,
        relation: relName,
        badgeType: 'sibling',
        desc: `本單元連貫心智模型：${sib.category}`
      });
    }

    // 2. 學科進階階梯 (Next / Prior unit within same subject)
    const sameSubjectPoints = allPoints.filter(p => p.subjectId === kp.subjectId && p.unitId !== kp.unitId);
    if (sameSubjectPoints.length > 0) {
      // Prior or Next Unit Point
      let targetU = sameSubjectPoints.find(p => p.unitIndex === (kp.unitIndex + 1) && p.pointIndex === 0);
      let stepRelation = '學科進階階梯';
      if (!targetU) {
        // Last unit wraps to previous
        targetU = sameSubjectPoints.find(p => p.unitIndex === (kp.unitIndex - 1) && p.pointIndex === 0) || sameSubjectPoints[0];
        stepRelation = '先備知識回溯';
      }

      if (targetU && !related.some(r => r.id === targetU.id)) {
        related.push({
          id: targetU.id,
          title: targetU.title,
          unitId: targetU.unitId,
          subjectId: targetU.subjectId,
          relation: stepRelation,
          badgeType: 'step',
          desc: `${stepRelation === '學科進階階梯' ? '深化挑戰下一個知識台階' : '鞏固核心基石概念'}：${targetU.category}`
        });
      }
    }

    // 3. 跨領域素養整合 (Cross-disciplinary connection)
    const crossMatch = crossSubjectLinks[kp.unitId];
    if (crossMatch) {
      const crossPoint = allPoints.find(p => p.unitId === crossMatch.targetUnitId && p.pointIndex === (crossMatch.targetIdx || 0));
      if (crossPoint && !related.some(r => r.id === crossPoint.id)) {
        related.push({
          id: crossPoint.id,
          title: crossPoint.title,
          unitId: crossPoint.unitId,
          subjectId: crossPoint.subjectId,
          relation: crossMatch.relation || '跨領域素養整合',
          badgeType: 'cross',
          desc: crossMatch.desc
        });
      }
    }

    // 4. 國中先修橋樑 (Junior High Bridge)
    const bridgeMatch = kp.juniorHighBridge.match(/【(.*?)】/);
    const bridgeTitle = bridgeMatch ? bridgeMatch[1] : (kp.juniorHighBridge.split('：')[0].replace(/^國[一二三].*?/, '').trim() || '國中先修銜接');
    related.push({
      id: `bridge-${kp.unitId}`,
      isBridge: true,
      title: bridgeTitle,
      unitId: kp.unitId,
      subjectId: kp.subjectId,
      relation: '國中先修橋樑',
      badgeType: 'bridge',
      desc: kp.juniorHighBridge
    });

    kp.relatedPoints = related;
  }

  console.log('Total generated knowledge points with 4-dimensional related points:', allPoints.length);

  const fileContent = `// 🎓 最強小六 (Sixth) 2026 旗艦版・108 課綱全科 64 單元【明確微知識點旗艦數據庫】
// 涵蓋 8 大學科領域、64 個教學單元、${allPoints.length} 個明確微概念知識點 (Micro-Knowledge Points)
// 每個知識點均具備：明確定義、核心公式/規律、破題攻略、防雷避坑、生活實用性、專屬 Infographic 與四維關聯知識點拓撲網絡

export const knowledgePointsData = ${JSON.stringify(allPoints, null, 2)};

// 依照單元 ID 查詢知識點清單
export function getKnowledgePointsByUnit(unitId) {
  return knowledgePointsData.filter(kp => kp.unitId === unitId);
}

// 依照學科 ID 與學期查詢知識點清單
export function getKnowledgePointsBySubject(subjectId, semester = 'all') {
  return knowledgePointsData.filter(kp => {
    const matchSubject = !subjectId || subjectId === 'all' || kp.subjectId === subjectId;
    const matchSemester = !semester || semester === 'all' || kp.semester === semester;
    return matchSubject && matchSemester;
  });
}

// 根據知識點 ID 取得單一項目
export function getKnowledgePointById(kpId) {
  return knowledgePointsData.find(kp => kp.id === kpId) || null;
}

// 取得與特定知識點關聯之知識點物件清單
export function getRelatedKnowledgePoints(kp) {
  if (!kp || !kp.relatedPoints) return [];
  return kp.relatedPoints.map(rel => {
    const fullKp = knowledgePointsData.find(p => p.id === rel.id);
    return {
      ...rel,
      fullKp: fullKp || null
    };
  });
}

// 全文多維度檢索知識點
export function searchKnowledgePoints(query = '', subjectId = 'all', semester = 'all') {
  const cleanQ = query.trim().toLowerCase();
  return knowledgePointsData.filter(kp => {
    const matchSubject = subjectId === 'all' || kp.subjectId === subjectId;
    const matchSemester = semester === 'all' || kp.semester === semester;
    if (!matchSubject || !matchSemester) return false;
    if (!cleanQ) return true;

    return (
      kp.title.toLowerCase().includes(cleanQ) ||
      kp.definition.toLowerCase().includes(cleanQ) ||
      kp.formulaOrRule.toLowerCase().includes(cleanQ) ||
      kp.practicalUtility.toLowerCase().includes(cleanQ) ||
      kp.strategyTip.toLowerCase().includes(cleanQ) ||
      kp.trapAlert.toLowerCase().includes(cleanQ) ||
      (kp.relatedPoints && kp.relatedPoints.some(r => r.title.toLowerCase().includes(cleanQ)))
    );
  });
}
`;

  fs.writeFileSync(path.join(rootDir, 'src/data/knowledgePoints.js'), fileContent, 'utf-8');
  console.log('Successfully wrote updated src/data/knowledgePoints.js with 4-dimensional related points!');
}

generate();
