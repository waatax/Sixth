// 四選一正確答案位置平衡器
// 原始題庫有八成答案集中在 (A)，學生只要一直選 A 就能高分，測驗失去意義。
// 這裡依題目文字算出固定的雜湊值，把正確答案換到 A~D 其中一格：
// 同一題每次出現位置都一樣（錯題本、重新作答不會亂掉），整體分布則接近各 25%。

// 說明裡直接提到「選項 C」「(B)」等字母，或選項含「以上皆是」這類依賴順序的題目，維持原樣
const LETTER_REFERENCE = /選項\s*[A-DＡ-Ｄ一二三四1-4]|[A-D]\s*選項|第[一二三四1-4]個選項|答案[為是]\s*[A-D](?![a-z])|[(（][A-D][)）]/;
const ORDER_DEPENDENT = /以上皆|以上都|以上均|皆是|皆非|兩者皆/;

function hashText(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function balanceQuestion(q) {
  if (!q || !Array.isArray(q.options) || q.options.length !== 4) return q;
  if (typeof q.answerIndex !== 'number' || q.answerIndex < 0 || q.answerIndex > 3) return q;
  if (q.keepOptionOrder) return q;
  const text = `${q.question || ''} ${q.explanation || ''}`;
  if (LETTER_REFERENCE.test(text)) return q;
  if (q.options.some(o => ORDER_DEPENDENT.test(String(o)))) return q;

  const target = hashText(String(q.question || '')) % 4;
  if (target === q.answerIndex) return q;
  const options = [...q.options];
  [options[target], options[q.answerIndex]] = [options[q.answerIndex], options[target]];
  return { ...q, options, answerIndex: target };
}

export function balanceQuestionList(list) {
  return Array.isArray(list) ? list.map(balanceQuestion) : list;
}

// 遞迴走訪資料結構，凡是「options + answerIndex」的題目物件都做平衡
export function balanceDeep(node) {
  if (Array.isArray(node)) return node.map(balanceDeep);
  if (!node || typeof node !== 'object') return node;
  if (Array.isArray(node.options) && typeof node.answerIndex === 'number') return balanceQuestion(node);
  const out = {};
  for (const [k, v] of Object.entries(node)) out[k] = balanceDeep(v);
  return out;
}
