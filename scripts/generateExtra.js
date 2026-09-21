import fs from 'fs';
import path from 'path';
import { createSvg, outDir } from './svgHelper.js';

const u6 = createSvg(
  '簡單機械生活複合應用 (Compound Machines)',
  '108 課綱 INc-III-6：自行車、指甲剪等多重槓桿輪軸斜面整合分析',
  '複合機械整合',
  `
  <rect x="0" y="0" width="760" height="326" rx="12" fill="#1e293b" stroke="#334155"/>
  <rect x="0" y="0" width="760" height="40" rx="12" fill="#334155" fill-opacity="0.5"/>
  <text x="25" y="26" font-size="15" font-weight="700" fill="#f8fafc">✂️ 生活複合機械：指甲剪的物理大智慧</text>
  
  <rect x="25" y="60" width="345" height="240" rx="8" fill="#0f172a" stroke="#2563eb"/>
  <text x="40" y="88" font-size="14" font-weight="800" fill="#60a5fa">壓柄部分：第二類槓桿 (省力)</text>
  <text x="40" y="115" font-size="12" fill="#cbd5e1">• 支點在最前端固定銷</text>
  <text x="40" y="138" font-size="12" fill="#cbd5e1">• 抗力點在中間向下按壓處</text>
  <text x="40" y="161" font-size="12" fill="#cbd5e1">• 施力點在尾端拇指按壓處</text>
  <text x="40" y="190" font-size="13" font-weight="700" fill="#34d399">施力臂 &gt; 抗力臂 ➔ 輕鬆省力！</text>

  <rect x="390" y="60" width="345" height="240" rx="8" fill="#0f172a" stroke="#f59e0b"/>
  <text x="405" y="88" font-size="14" font-weight="800" fill="#fbbf24">刀刃本體：第一類槓桿 (省距離)</text>
  <text x="405" y="115" font-size="12" fill="#cbd5e1">• 支點在中間相連處</text>
  <text x="405" y="138" font-size="12" fill="#cbd5e1">• 施力點在壓柄下壓觸點</text>
  <text x="405" y="161" font-size="12" fill="#cbd5e1">• 抗力點在最前端刀口處</text>
  <text x="405" y="190" font-size="13" font-weight="700" fill="#f87171">刀口薄如斜面 ➔ 壓強極大輕鬆剪斷指甲！</text>
  `
);

fs.writeFileSync(path.join(outDir, 'sci_u6_concept5.svg'), u6, 'utf-8');
console.log('sci_u6_concept5.svg created successfully');
