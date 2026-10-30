// 闖關朗讀內容：題目、選項（用畫面上的 A～D）、作答後的答案與解說
const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export function questionSpeech(exercise) {
  return [...new Set([exercise.prompt, exercise.audioText, exercise.statement,
    exercise.sentenceBefore && `${exercise.sentenceBefore} 空格 ${exercise.sentenceAfter || ''}`].filter(Boolean))].join('。');
}

export function optionsSpeech(exercise) {
  if (exercise.type === 'true_false') return '請判斷：觀念正確，還是觀念有誤？';
  return (exercise.options || []).map((option, i) => `選項 ${OPTION_LABELS[i] || i + 1}。${option}`).join('。');
}

// 答對簡短肯定；答錯念出正確答案與完整解說
export function feedbackSpeech(feedback) {
  if (!feedback) return '';
  if (feedback.isCorrect) return `答對了！${feedback.correctText ? `答案是：${feedback.correctText}。` : ''}`;
  return `正確答案是：${feedback.correctText}。解說：${feedback.detail}`;
}
