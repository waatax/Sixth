import { useMemo } from 'react';
import katex from 'katex';

// 把一般文字中的 $...$ 數學式用 KaTeX 排版，其餘文字原樣顯示（避免畫面出現 \times、\frac 等原始碼）
const MathText = ({ text, className }) => {
  const parts = useMemo(() => {
    const source = String(text ?? '');
    if (!source.includes('$')) return [{ type: 'text', value: source }];
    // 先比對 $$...$$（獨立一行的公式），再比對 $...$，避免 $ 配對錯位
    return source.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g).filter(Boolean).map((chunk) => {
      const isBlock = chunk.length > 4 && chunk.startsWith('$$') && chunk.endsWith('$$');
      if (isBlock || (chunk.length > 2 && chunk.startsWith('$') && chunk.endsWith('$'))) {
        const tex = isBlock ? chunk.slice(2, -2) : chunk.slice(1, -1);
        try {
          return { type: 'math', value: katex.renderToString(tex, { throwOnError: false, displayMode: isBlock }) };
        } catch {
          return { type: 'text', value: chunk.slice(1, -1) };
        }
      }
      return { type: 'text', value: chunk };
    });
  }, [text]);

  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.type === 'math'
          ? <span key={i} dangerouslySetInnerHTML={{ __html: p.value }} />
          : <span key={i}>{p.value}</span>
      )}
    </span>
  );
};

export default MathText;
