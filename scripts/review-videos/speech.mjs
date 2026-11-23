// 把講義／課文文字轉成「念得出來」的旁白，並切成中文（Yating）與英文（Zira）片段。

const UNICODE_FRACTIONS = {
  '¼': '4分之1', '½': '2分之1', '¾': '4分之3', '⅓': '3分之1', '⅔': '3分之2', '⅕': '5分之1',
  '⅖': '5分之2', '⅗': '5分之3', '⅘': '5分之4', '⅙': '6分之1', '⅚': '6分之5', '⅛': '8分之1',
  '⅜': '8分之3', '⅝': '8分之5', '⅞': '8分之7', '⅐': '7分之1', '⅑': '9分之1', '⅒': '10分之1'
};
const SUP = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
const SUB = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' };

// 找出 \cmd{...} 的大括號內容（支援巢狀）
function readGroup(s, i) {
  while (s[i] === ' ') i++;
  if (s[i] !== '{') {
    // 單一字元或 \cmd 參數
    if (s[i] === '\\') {
      const m = /^\\[a-zA-Z]+/.exec(s.slice(i));
      if (m) return [m[0], i + m[0].length];
    }
    return [s[i] || '', i + 1];
  }
  let depth = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') depth++;
    else if (s[j] === '}') {
      depth--;
      if (depth === 0) return [s.slice(i + 1, j), j + 1];
    }
  }
  return [s.slice(i + 1), s.length];
}

export function latexToSpeech(tex) {
  let s = String(tex);
  let out = '';
  let i = 0;
  while (i < s.length) {
    const rest = s.slice(i);
    let m;
    if ((m = /^\\[dt]?frac/.exec(rest))) {
      const [a, j] = readGroup(s, i + m[0].length);
      const [b, k] = readGroup(s, j);
      // 前面若是整數，念成「又」
      const prefix = /\d\s*$/.test(out) ? '又' : '';
      out += `${prefix}${latexToSpeech(b)}分之${latexToSpeech(a)}`;
      i = k;
    } else if ((m = /^\\sqrt/.exec(rest))) {
      const [a, j] = readGroup(s, i + m[0].length);
      out += `根號${latexToSpeech(a)}`;
      i = j;
    } else if ((m = /^\\(text|textbf|mathrm|mathbf|textit|operatorname|boxed|underline|overline|bm|mbox)\b/.exec(rest))) {
      const [a, j] = readGroup(s, i + m[0].length);
      out += latexToSpeech(a);
      i = j;
    } else if ((m = /^\\(textcolor|color)\b/.exec(rest))) {
      const [, j] = readGroup(s, i + m[0].length);
      if (m[1] === 'textcolor') {
        const [b, k] = readGroup(s, j);
        out += latexToSpeech(b);
        i = k;
      } else i = j;
    } else if ((m = /^\^\s*\\circ/.exec(rest)) || (m = /^\^\{\\circ\}/.exec(rest))) {
      out += '度';
      i += m[0].length;
    } else if (rest[0] === '^') {
      const [a, j] = readGroup(s, i + 1);
      const v = latexToSpeech(a);
      out += v === '2' ? '的平方' : v === '3' ? '的3次方' : `的${v}次方`;
      i = j;
    } else if (rest[0] === '_') {
      const [a, j] = readGroup(s, i + 1);
      out += latexToSpeech(a);
      i = j;
    } else if ((m = /^\\[a-zA-Z]+/.exec(rest))) {
      const map = {
        '\\times': '乘', '\\div': '除以', '\\cdot': '乘', '\\pm': '正負', '\\le': '小於等於', '\\leq': '小於等於',
        '\\ge': '大於等於', '\\geq': '大於等於', '\\neq': '不等於', '\\ne': '不等於', '\\approx': '約等於',
        '\\pi': '圓周率', '\\implies': '，所以', '\\Rightarrow': '，所以', '\\rightarrow': '，變成', '\\to': '，到',
        '\\Leftrightarrow': '，等同', '\\leftrightarrow': '，對應', '\\longrightarrow': '，變成',
        '\\angle': '角', '\\triangle': '三角形', '\\because': '因為', '\\therefore': '所以', '\\circ': '度',
        '\\cdots': '等等', '\\ldots': '等等', '\\dots': '等等', '\\quad': '，', '\\qquad': '，', '\\%': '%',
        '\\left': '', '\\right': '', '\\big': '', '\\Big': '', '\\displaystyle': '', '\\hline': '',
        '\\lt': '小於', '\\gt': '大於', '\\infty': '無限大', '\\sim': '到', '\\square': '方格', '\\star': '',
        '\\checkmark': '', '\\heartsuit': '', '\\alpha': 'alpha', '\\beta': 'beta', '\\Delta': 'Delta',
        '\\mid': '整除', '\\uparrow': '上升', '\\downarrow': '下降', '\\newline': '，', '\\\\': '，'
      };
      out += map[m[0]] ?? '';
      i += m[0].length;
    } else if (rest.startsWith('\\%')) {
      out += '%';
      i += 2;
    } else if (/^\\[,;:! ]/.test(rest)) {
      out += ' ';
      i += 2;
    } else if (rest.startsWith('\\{') || rest.startsWith('\\}')) {
      i += 2;
    } else if (rest.startsWith('\\\\')) {
      out += '，';
      i += 2;
    } else if (rest[0] === '{' || rest[0] === '}' || rest[0] === '&') {
      i += 1;
    } else {
      out += rest[0];
      i += 1;
    }
  }
  return out;
}

const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}\u{1F1E6}-\u{1F1FF}\u{E0020}-\u{E007F}]/gu;

// 給畫面以外的文字：去掉 markdown 與表情
export function plain(text) {
  return String(text ?? '')
    .replace(/<\/?[a-z][^>]*>/gi, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*|__|`/g, '')
    .replace(/\\n(?![a-z])/g, '\n');
}

function symbolsToSpeech(s, { math }) {
  return s
    .replace(/(\d)\s*([¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅐⅑⅒])/g, (_, d, f) => `${d}又${UNICODE_FRACTIONS[f]}`)
    .replace(/[¼½¾⅓⅔⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞⅐⅑⅒]/g, (f) => UNICODE_FRACTIONS[f])
    .replace(/(\d)?([⁰¹²³⁴⁵⁶⁷⁸⁹]+)⁄([₀₁₂₃₄₅₆₇₈₉]+)/g, (_, d, a, b) =>
      `${d ? d + '又' : ''}${[...b].map((c) => SUB[c]).join('')}分之${[...a].map((c) => SUP[c]).join('')}`)
    .replace(/(\d+)\s*\/\s*(\d+)(?=\s*(拍|$|[^\d/]))/g, (all, a, b, _n, off, str) =>
      // 日期 10/10 不轉；拍號、分數轉成「b分之a」
      /\d\/\d+\/\d/.test(str.slice(Math.max(0, off - 3), off + all.length + 3)) ? all : `${b}分之${a}`)
    .replace(/(\d+(?:\.\d+)?)\s*[℃]|(\d+(?:\.\d+)?)\s*°\s*C/g, (_, a, b) => `攝氏${a || b}度`)
    .replace(/(\d)\s*°/g, '$1度')
    .replace(/(\d)\s*cm³|(\d)\s*cm\^3/g, (_, a, b) => `${a || b}立方公分`)
    .replace(/(\d)\s*cm²|(\d)\s*cm\^2/g, (_, a, b) => `${a || b}平方公分`)
    .replace(/(\d)\s*m²/g, '$1平方公尺')
    .replace(/(\d)\s*m³/g, '$1立方公尺')
    .replace(/(\d)\s*km\/h/g, '$1公里每小時')
    .replace(/(\d)\s*m\/s/g, '$1公尺每秒')
    .replace(/(\d)\s*cm\b/g, '$1公分')
    .replace(/(\d)\s*mm\b/g, '$1毫米')
    .replace(/(\d)\s*km\b/g, '$1公里')
    .replace(/(\d)\s*kg\b/g, '$1公斤')
    .replace(/(\d)\s*mL\b/g, '$1毫升')
    .replace(/(\d)\s*Hz\b/g, '$1赫茲')
    .replace(/([0-9A-Za-z)）])\s*²/g, '$1的平方')
    .replace(/([0-9A-Za-z)）])\s*³/g, '$1的3次方')
    .replace(/(\d+(?:\.\d+)?)\s*%/g, '百分之$1')
    .replace(/[×✕✖]/g, '乘')
    .replace(/÷/g, '除以')
    .replace(/≠/g, '不等於')
    .replace(/≈|≒/g, '約等於')
    .replace(/≤|≦/g, '小於等於')
    .replace(/≥|≧/g, '大於等於')
    .replace(/(\S)\s*=\s*(?=\S)/g, '$1等於')
    .replace(/\s+<\s+|(?<=[\dA-Za-z）)])\s*<\s*(?=[\dA-Za-z（(])/g, '小於')
    .replace(/\s+>\s+|(?<=[\dA-Za-z）)])\s*>\s*(?=[\dA-Za-z（(])/g, '大於')
    .replace(/(\d)\s*\+\s*(\d)/g, '$1加$2')
    .replace(/(\d)\s*\+\s*(\d)/g, '$1加$2')
    .replace(/\s\+\s/g, ' 加 ')
    .replace(/\s\/\s/g, ' 或 ')
    .replace(math ? /(\d)\s*[−–-]\s*(?=\d)/g : /(\d)\s+[−–]\s+(?=\d)/g, '$1減')
    .replace(/(\d)\s*:\s*(\d)/g, math ? '$1比$2' : '$1:$2')
    .replace(/_{2,}|＿{2,}/g, '，空格，')
    .replace(/[（(]\s*[)）]/g, '，括號，')
    .replace(/[➔→⇒⟹➜➡]/g, '，')
    .replace(/[←⇐]/g, '，')
    .replace(/[↔⇔]/g, '，對應，')
    .replace(/[↑]/g, '上升')
    .replace(/[↓]/g, '下降')
    .replace(/[•●◆◇▪■□☐☑✓✔★☆]/g, '，')
    .replace(/❌|⚠️|⚠/g, '')
    .replace(/[|｜]/g, '，');
}

// 一段顯示文字 → 旁白純文字
export function toSpeech(text, opts = {}) {
  let s = plain(text);
  // $$...$$ 與 $...$ 數學式
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, t) => latexToSpeech(t))
    .replace(/\$([^$]+)\$/g, (_, t) => latexToSpeech(t));
  if (opts.latex) s = latexToSpeech(s);
  s = s.replace(EMOJI_RE, '');
  s = s.replace(/【([^】]*)】\s*[：:]?/g, '$1，');
  s = symbolsToSpeech(s, opts);
  s = s
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/^\s*[-*]\s+/gm, '')
    .replace(/[「」『』〈〉《》“”"]/g, '')
    .replace(/[#*~^\\{}]/g, '')
    .replace(/\s*\n\s*/g, '。')
    .replace(/[：:]\s*[。，]/g, '：')
    .replace(/\s*([，。、；：！？])\s*/g, '$1')
    .replace(/([，。、；：！？])(\s*[，。、；,])+/g, '$1')
    .replace(/\s+,\s*/g, '，')
    .replace(/^[，。、；\s]+/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
  return s;
}

// 英文片段：至少含一個 3 個字母以上、有小寫的單字；或兩個以上英文字
const EN_RUN = /[A-Za-z][A-Za-z0-9'’\-]*(?:[ ,.!?;:'’"\-()/&]+[A-Za-z0-9][A-Za-z0-9'’\-]*)*[.!?]?/g;
function isEnglish(run) {
  const words = run.match(/[A-Za-z][A-Za-z'’\-]*/g) || [];
  if (!words.length) return false;
  const real = words.filter((w) => w.length >= 3 && /[a-z]/.test(w));
  if (real.length >= 1) return true;
  return words.length >= 3 && words.some((w) => /[a-z]/.test(w));
}

// 分段：[{lang:'zh'|'en', text}]
export function segments(text, opts = {}) {
  const s = toSpeech(text, opts);
  if (!s) return [];
  const out = [];
  let last = 0;
  for (const m of s.matchAll(EN_RUN)) {
    if (!isEnglish(m[0])) continue;
    if (m.index > last) out.push({ lang: 'zh', text: s.slice(last, m.index) });
    out.push({ lang: 'en', text: m[0] });
    last = m.index + m[0].length;
  }
  if (last < s.length) out.push({ lang: 'zh', text: s.slice(last) });
  return out
    .map((x) => ({ ...x, text: x.text.replace(/^[，。、；：\s,]+|[，、；\s,]+$/g, '').trim() }))
    .filter((x) => /[\p{L}\p{N}]/u.test(x.text));
}
