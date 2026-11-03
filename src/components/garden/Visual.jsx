import { useState } from "react";

// Data-driven, code-native diagrams. Colours come from the subject tokens on the page;
// every figure carries a text equivalent through aria-label.
const INK = "#22304a";
const MUTED = "#5c6a80";
const LINE = "#c9d3e0";
const SC = "var(--sc)";
const SS = "var(--ss)";
const SUN = "#ffc24b";
const CORAL = "#f4694f";
const WHITE = "#fff";

function Svg({ w, h, label, children, className = "" }) {
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={label}
      className={`viz-svg ${className}`}
      style={{ maxWidth: Math.max(w, 280) * 1.25 }}
    >
      {children}
    </svg>
  );
}
const Label = ({ x, y, children, size = 14, anchor = "middle", color = INK, weight = 700 }) => (
  <text x={x} y={y} fontSize={size} textAnchor={anchor} fill={color} fontWeight={weight}>
    {children}
  </text>
);
const fmt = (n) => (Number.isInteger(n) ? String(n) : String(+n.toFixed(2)));

function Blocks({ n }) {
  const thousands = Math.floor(n / 1000);
  const hundreds = Math.floor((n % 1000) / 100);
  const tens = Math.floor((n % 100) / 10);
  const ones = n % 10;
  const W = 340;
  const items = [];
  let x = 6;
  let y = 6;
  const row = 62;
  const place = (width) => {
    if (x + width > W - 6) {
      x = 6;
      y += row + 8;
    }
    const at = [x, y];
    x += width + 6;
    return at;
  };
  for (let i = 0; i < thousands; i++) {
    const [a, b] = place(58);
    items.push(
      <g key={`k${i}`}>
        <rect x={a} y={b} width="58" height="58" rx="6" fill={SC} />
        <path d={`M${a + 19} ${b}V${b + 58}M${a + 39} ${b}V${b + 58}M${a} ${b + 19}H${a + 58}M${a} ${b + 39}H${a + 58}`} stroke={WHITE} strokeOpacity=".6" />
        <text x={a + 29} y={b + 35} fontSize="13" textAnchor="middle" fill={WHITE} fontWeight="800">千</text>
      </g>,
    );
  }
  for (let i = 0; i < hundreds; i++) {
    const [a, b] = place(58);
    const lines = [];
    for (let k = 1; k < 10; k++)
      lines.push(<path key={k} d={`M${a + k * 5.8} ${b}V${b + 58}M${a} ${b + k * 5.8}H${a + 58}`} stroke={WHITE} strokeOpacity=".55" strokeWidth=".8" />);
    items.push(
      <g key={`h${i}`}>
        <rect x={a} y={b} width="58" height="58" rx="3" fill={SC} opacity=".82" />
        {lines}
      </g>,
    );
  }
  for (let i = 0; i < tens; i++) {
    const [a, b] = place(10);
    const lines = [];
    for (let k = 1; k < 10; k++) lines.push(<path key={k} d={`M${a} ${b + k * 5.8}H${a + 10}`} stroke={WHITE} strokeOpacity=".7" strokeWidth=".8" />);
    items.push(
      <g key={`t${i}`}>
        <rect x={a} y={b} width="10" height="58" rx="2" fill={SUN} stroke="#c78f1c" />
        {lines}
      </g>,
    );
  }
  if (tens) x += 4;
  for (let i = 0; i < ones; i++) {
    const [a, b] = place(13);
    items.push(<rect key={`o${i}`} x={a} y={b + 45} width="13" height="13" rx="2.5" fill={CORAL} />);
  }
  const H = y + row + 28;
  const parts = [thousands && `${thousands} 個千`, hundreds && `${hundreds} 個百`, tens && `${tens} 個十`, ones && `${ones} 個一`].filter(Boolean);
  return (
    <Svg w={W} h={H} label={`位值積木表示 ${n}：${parts.join("、")}`}>
      {items}
      <Label x={W / 2} y={H - 8} size={15}>
        {`${n} ＝ ${parts.join(" ＋ ") || "0"}`}
      </Label>
    </Svg>
  );
}

function NumberLine({ min, max, start, hop }) {
  const W = 340;
  const pad = 22;
  const span = max - min || 1;
  const X = (v) => pad + ((v - min) / span) * (W - pad * 2);
  const ticks = 10;
  const end = start + (hop || 0);
  return (
    <Svg w={W} h={104} label={`數線從 ${fmt(min)} 到 ${fmt(max)}，標出 ${fmt(start)}${hop ? `，再往前 ${fmt(hop)} 到 ${fmt(end)}` : ""}`}>
      <path d={`M${pad - 10} 70H${W - pad + 10}`} stroke={INK} strokeWidth="2.5" strokeLinecap="round" />
      {Array.from({ length: ticks + 1 }, (_, i) => {
        const v = min + (span * i) / ticks;
        const big = i % 5 === 0;
        return (
          <g key={i}>
            <path d={`M${X(v)} ${big ? 62 : 65}V${big ? 78 : 75}`} stroke={INK} strokeWidth={big ? 2 : 1.2} />
            {big && <Label x={X(v)} y={96} size={12} color={MUTED} weight={600}>{fmt(v)}</Label>}
          </g>
        );
      })}
      {hop ? (
        <>
          <path d={`M${X(start)} 66C${X(start)} 22 ${X(end)} 22 ${X(end)} 62`} fill="none" stroke={SC} strokeWidth="2.5" strokeDasharray="5 4" />
          <path d={`M${X(end) - 5} 54L${X(end)} 63L${X(end) + 5} 54`} fill="none" stroke={SC} strokeWidth="2.5" strokeLinecap="round" />
          <Label x={(X(start) + X(end)) / 2} y={22} size={14} color={SC}>{`＋${fmt(hop)}`}</Label>
          <circle cx={X(end)} cy={70} r="7" fill={SC} stroke={WHITE} strokeWidth="2" />
        </>
      ) : null}
      <circle cx={X(start)} cy={70} r="7" fill={CORAL} stroke={WHITE} strokeWidth="2" />
      {!hop && <Label x={X(start)} y={50} size={15}>{fmt(start)}</Label>}
    </Svg>
  );
}

function ArrayDots({ r, c }) {
  const size = Math.min(26, Math.floor(300 / Math.max(c, 1)), Math.floor(200 / Math.max(r, 1)));
  const W = Math.max(c * size + 24, 220);
  const H = r * size + 46;
  const ox = (W - c * size) / 2;
  return (
    <Svg w={W} h={H} label={`${r} 排，每排 ${c} 個，共 ${r * c} 個`}>
      {Array.from({ length: r * c }, (_, i) => (
        <circle key={i} cx={ox + (i % c) * size + size / 2} cy={8 + Math.floor(i / c) * size + size / 2} r={size * 0.38} fill={Math.floor(i / c) % 2 ? SC : SUN} />
      ))}
      <Label x={W / 2} y={H - 10} size={15}>{`${r} × ${c} ＝ ${r * c}`}</Label>
    </Svg>
  );
}

function Groups({ g, each, extra = 0 }) {
  const cols = Math.min(g, 4);
  const rows = Math.ceil(g / 4);
  const cell = 80;
  const W = Math.max(cols * cell + 8, 220);
  const H = rows * cell + 38 + (extra ? 34 : 0);
  const ox = (W - cols * cell) / 2;
  const total = g * each + extra;
  return (
    <Svg w={W} h={H} label={`${g} 組，每組 ${each} 個${extra ? `，還剩 ${extra} 個` : ""}，共 ${total} 個`}>
      {Array.from({ length: g }, (_, i) => {
        const x = ox + (i % 4) * cell;
        const y = 4 + Math.floor(i / 4) * cell;
        return (
          <g key={i}>
            <rect x={x + 3} y={y} width={cell - 6} height={cell - 8} rx="14" fill={SS} stroke={SC} strokeWidth="1.5" />
            {Array.from({ length: each }, (_, j) => (
              <circle key={j} cx={x + 18 + (j % 3) * 20} cy={y + 16 + Math.floor(j / 3) * 20} r="7.5" fill={SC} />
            ))}
          </g>
        );
      })}
      {Array.from({ length: extra }, (_, i) => (
        <circle key={i} cx={W / 2 - ((extra - 1) * 22) / 2 + i * 22} cy={rows * cell + 16} r="8" fill={CORAL} />
      ))}
      <Label x={W / 2} y={H - 8} size={15}>{extra ? `${g} 組 × 每組 ${each}，剩 ${extra}，共 ${total}` : `${g} 組 × 每組 ${each} ＝ ${total}`}</Label>
    </Svg>
  );
}

function FracBar({ n, d, n2, d2 }) {
  const W = 340;
  const whole = Math.max(1, Math.ceil(n / d));
  const unit = (W - 16) / whole;
  const bar = (num, den, y, color) => {
    const cells = [];
    for (let i = 0; i < whole * den; i++) {
      const w = unit / den;
      cells.push(<rect key={i} x={8 + i * w} y={y} width={w} height="42" fill={i < num ? color : WHITE} stroke={INK} strokeWidth="1.3" />);
    }
    for (let i = 1; i < whole; i++) cells.push(<path key={`w${i}`} d={`M${8 + i * unit} ${y - 3}V${y + 45}`} stroke={INK} strokeWidth="4" />);
    return cells;
  };
  const two = n2 !== undefined;
  return (
    <Svg w={W} h={two ? 142 : 88} label={two ? `比較 ${n}／${d} 和 ${n2}／${d2}` : `色條表示 ${n}／${d}`}>
      {bar(n, d, 6, SC)}
      <Label x={W / 2} y={70} size={16}>{`${n}／${d}`}</Label>
      {two && bar(n2, d2, 78, SUN)}
      {two && <Label x={W / 2} y={138} size={16}>{`${n2}／${d2}`}</Label>}
    </Svg>
  );
}

function PlaceValue({ digits, labels }) {
  const chars = [...String(digits)];
  const cols = labels.length;
  const cw = Math.min(60, 336 / cols);
  const W = Math.max(cw * cols + 8, 240);
  const ox = (W - cw * cols) / 2;
  return (
    <Svg w={W} h={96} label={`位值表：${labels.map((l, i) => `${l} ${chars[i]}`).join("、")}`}>
      {labels.map((l, i) => (
        <g key={i}>
          <rect x={ox + i * cw} y="4" width={cw} height="28" fill={SC} stroke={WHITE} />
          <Label x={ox + i * cw + cw / 2} y={23} size={cols > 6 ? 10 : 12} color={WHITE}>{l}</Label>
          <rect x={ox + i * cw} y="32" width={cw} height="56" fill={SS} stroke={WHITE} />
          <Label x={ox + i * cw + cw / 2} y={70} size={26} color={INK}>{chars[i]}</Label>
        </g>
      ))}
    </Svg>
  );
}

function Clock({ h, m }) {
  const c = 90;
  const minA = (m / 60) * 360 - 90;
  const hourA = (((h % 12) + m / 60) / 12) * 360 - 90;
  const p = (a, l) => [c + l * Math.cos((a * Math.PI) / 180), c + l * Math.sin((a * Math.PI) / 180)];
  const [mx, my] = p(minA, 62);
  const [hx, hy] = p(hourA, 42);
  return (
    <Svg w={180} h={206} label={`時鐘顯示 ${h} 時 ${m} 分`}>
      <circle cx={c} cy={c} r="84" fill={WHITE} stroke={SC} strokeWidth="6" />
      {Array.from({ length: 60 }, (_, i) => {
        const [a, b] = p(i * 6, i % 5 ? 76 : 72);
        const [e, f] = p(i * 6, 80);
        return <path key={i} d={`M${a} ${b}L${e} ${f}`} stroke={i % 5 ? LINE : INK} strokeWidth={i % 5 ? 1 : 2} />;
      })}
      {Array.from({ length: 12 }, (_, i) => {
        const [a, b] = p((i + 1) * 30 - 90, 60);
        return <Label key={i} x={a} y={b + 5} size={14}>{i + 1}</Label>;
      })}
      <path d={`M${c} ${c}L${hx} ${hy}`} stroke={CORAL} strokeWidth="7" strokeLinecap="round" />
      <path d={`M${c} ${c}L${mx} ${my}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <circle cx={c} cy={c} r="6" fill={INK} />
      <Label x={c} y={202} size={15}>{`${h} 時 ${String(m).padStart(2, "0")} 分`}</Label>
    </Svg>
  );
}

function Coins({ list }) {
  const total = list.reduce((a, b) => a + b, 0);
  const W = Math.max(list.length * 66, 240);
  return (
    <Svg w={W} h={104} label={`錢幣共 ${total} 元`}>
      {list.map((v, i) => {
        const x = 34 + i * 64 + (W - list.length * 66) / 2;
        return v >= 100 ? (
          <g key={i}>
            <rect x={x - 28} y="16" width="58" height="38" rx="5" fill="#d9efe0" stroke="#3a8a5c" strokeWidth="2" />
            <Label x={x + 1} y={41} size={14} color="#1f6a42">{v}</Label>
          </g>
        ) : (
          <g key={i}>
            <circle cx={x} cy="35" r={v >= 50 ? 26 : v >= 10 ? 23 : v >= 5 ? 20 : 17} fill={v >= 10 ? SUN : "#d7dee8"} stroke={v >= 10 ? "#c78f1c" : "#8c99aa"} strokeWidth="2" />
            <Label x={x} y={41} size={15}>{v}</Label>
          </g>
        );
      })}
      <Label x={W / 2} y={92} size={15}>{`${list.join(" ＋ ")} ＝ ${total} 元`}</Label>
    </Svg>
  );
}

function Grid({ w, h }) {
  const cell = Math.min(34, Math.floor(280 / w), Math.floor(170 / h));
  const W = Math.max(w * cell + 30, 280);
  const H = h * cell + 66;
  const ox = (W - w * cell) / 2;
  return (
    <Svg w={W} h={H} label={`長 ${w}、寬 ${h} 的長方形，面積 ${w * h} 格，周長 ${(w + h) * 2}`}>
      {Array.from({ length: w * h }, (_, i) => (
        <rect key={i} x={ox + (i % w) * cell} y={6 + Math.floor(i / w) * cell} width={cell} height={cell} fill={SS} stroke={WHITE} />
      ))}
      <rect x={ox} y="6" width={w * cell} height={h * cell} fill="none" stroke={CORAL} strokeWidth="3.5" />
      <Label x={W / 2} y={h * cell + 30} size={14} color={SC}>{`面積 ${w} × ${h} ＝ ${w * h} 格`}</Label>
      <Label x={W / 2} y={h * cell + 54} size={14} color="#b8442d">{`周長 (${w} ＋ ${h}) × 2 ＝ ${(w + h) * 2}`}</Label>
    </Svg>
  );
}

function Angle({ deg }) {
  const c = [120, 128];
  const r = 96;
  const rad = (deg * Math.PI) / 180;
  const end = [c[0] + r * Math.cos(-rad), c[1] + r * Math.sin(-rad)];
  const arc = 34;
  const a = [c[0] + arc, c[1]];
  const b = [c[0] + arc * Math.cos(-rad), c[1] + arc * Math.sin(-rad)];
  const name = deg < 90 ? "銳角" : deg === 90 ? "直角" : deg < 180 ? "鈍角" : deg === 180 ? "平角" : deg === 360 ? "周角" : "大於平角";
  return (
    <Svg w={240} h={170} label={`角度 ${deg} 度，是${name}`}>
      <path d={`M${c[0]} ${c[1]}L${c[0] + r} ${c[1]}`} stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d={`M${c[0]} ${c[1]}L${end[0]} ${end[1]}`} stroke={SC} strokeWidth="4" strokeLinecap="round" />
      <path d={`M${a[0]} ${a[1]}A${arc} ${arc} 0 ${deg > 180 ? 1 : 0} 0 ${b[0]} ${b[1]}`} fill="none" stroke={CORAL} strokeWidth="3" />
      {deg === 90 && <path d={`M${c[0] + 16} ${c[1]}V${c[1] - 16}H${c[0]}`} fill="none" stroke={CORAL} strokeWidth="2.5" />}
      <circle cx={c[0]} cy={c[1]} r="5" fill={INK} />
      <Label x={120} y={162} size={15}>{`${deg} 度 · ${name}`}</Label>
    </Svg>
  );
}

function Cube({ l, w, h }) {
  const u = Math.min(26, Math.floor(160 / (l + w * 0.5)), Math.floor(100 / h));
  const dx = u * 0.55;
  const dy = u * 0.4;
  const W = Math.max(l * u + w * dx + 40, 240);
  const baseY = h * u + w * dy + 12;
  const ox = (W - l * u - w * dx) / 2;
  const cells = [];
  for (let z = 0; z < h; z++)
    for (let y = w - 1; y >= 0; y--)
      for (let x = 0; x < l; x++) {
        const px = ox + x * u + y * dx;
        const py = baseY - z * u - y * dy;
        const top = z === h - 1;
        const right = x === l - 1;
        const front = y === 0;
        if (!top && !right && !front) continue;
        cells.push(
          <g key={`${x}-${y}-${z}`} stroke={WHITE} strokeWidth="1">
            {front && <rect x={px} y={py - u} width={u} height={u} fill={SC} />}
            {top && <path d={`M${px} ${py - u}l${dx} ${-dy}h${u}l${-dx} ${dy}z`} fill={SUN} />}
            {right && <path d={`M${px + u} ${py}l${dx} ${-dy}v${-u}l${-dx} ${dy}z`} fill={SC} opacity=".72" />}
          </g>,
        );
      }
  return (
    <Svg w={W} h={baseY + 34} label={`長 ${l}、寬 ${w}、高 ${h} 的長方體，體積 ${l * w * h}`}>
      {cells}
      <Label x={W / 2} y={baseY + 26} size={15}>{`${l} × ${w} × ${h} ＝ ${l * w * h}`}</Label>
    </Svg>
  );
}

function BarChart({ labels, values, example }) {
  const W = 340;
  const max = Math.max(...values, 1);
  const bw = Math.min(46, 240 / labels.length);
  const gap = (W - 40 - bw * labels.length) / (labels.length + 1);
  const H = 180;
  const base = 140;
  return (
    <Svg w={W} h={example ? H + 16 : H} label={`長條圖：${labels.map((l, i) => `${l} ${values[i]}`).join("、")}`}>
      {[0, 0.5, 1].map((t) => (
        <g key={t}>
          <path d={`M30 ${base - t * 110}H${W - 6}`} stroke={LINE} strokeDasharray={t ? "3 4" : ""} />
          <Label x={26} y={base - t * 110 + 4} size={11} anchor="end" color={MUTED} weight={500}>{fmt(max * t)}</Label>
        </g>
      ))}
      {labels.map((l, i) => {
        const hh = (values[i] / max) * 110;
        const x = 34 + gap + i * (bw + gap);
        return (
          <g key={l}>
            <path d={`M${x} ${base}V${base - hh + 4}q0 -4 4 -4H${x + bw - 4}q4 0 4 4V${base}z`} fill={SC} />
            <Label x={x + bw / 2} y={base - hh - 6} size={13}>{values[i]}</Label>
            <Label x={x + bw / 2} y={base + 18} size={13} color={MUTED} weight={600}>{l}</Label>
          </g>
        );
      })}
      {example && <Label x={W / 2} y={H + 8} size={11} color={MUTED} weight={500}>示例資料，用來練習讀圖</Label>}
    </Svg>
  );
}

function LineChart({ labels, values }) {
  const W = 340;
  const base = 136;
  const min = Math.min(0, ...values);
  const max = Math.max(...values, 1);
  const X = (i) => 40 + (i * (W - 62)) / Math.max(labels.length - 1, 1);
  const Y = (v) => base - ((v - min) / (max - min)) * 106;
  const points = values.map((v, i) => `${X(i)},${Y(v)}`).join(" ");
  return (
    <Svg w={W} h={184} label={`折線圖：${labels.map((l, i) => `${l} ${values[i]}`).join("、")}`}>
      {[0, 0.5, 1].map((t) => (
        <g key={t}>
          <path d={`M34 ${base - t * 106}H${W - 6}`} stroke={LINE} strokeDasharray={t ? "3 4" : ""} />
          <Label x={30} y={base - t * 106 + 4} size={11} anchor="end" color={MUTED} weight={500}>{fmt(min + (max - min) * t)}</Label>
        </g>
      ))}
      <polyline points={points} fill="none" stroke={SC} strokeWidth="2.5" strokeLinejoin="round" />
      {values.map((v, i) => (
        <g key={i}>
          <circle cx={X(i)} cy={Y(v)} r="5" fill={SC} stroke={WHITE} strokeWidth="2" />
          {(i === 0 || i === values.length - 1 || v === max) && <Label x={X(i)} y={Y(v) - 10} size={12}>{v}</Label>}
          <Label x={X(i)} y={base + 18} size={12} color={MUTED} weight={600}>{labels[i]}</Label>
        </g>
      ))}
      <Label x={W / 2} y={178} size={11} color={MUTED} weight={500}>示例資料，用來練習讀圖</Label>
    </Svg>
  );
}

// Fixed order, validated for colour-blind separation; legends also carry the values.
const SERIES = ["#2f6fd0", "#c2571a", "#008a6f", "#7a4fc4"];
function arcPath(cx, cy, r, from, to) {
  const a = (from * Math.PI * 2) / 100 - Math.PI / 2;
  const b = (to * Math.PI * 2) / 100 - Math.PI / 2;
  if (to - from >= 100) return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0`;
  return `M${cx} ${cy}L${cx + r * Math.cos(a)} ${cy + r * Math.sin(a)}A${r} ${r} 0 ${to - from > 50 ? 1 : 0} 1 ${cx + r * Math.cos(b)} ${cy + r * Math.sin(b)}Z`;
}
function Pie({ pct }) {
  return (
    <Svg w={200} h={186} label={`圓形被塗滿 ${pct}%，圓心角 ${(pct * 360) / 100} 度`}>
      <circle cx="100" cy="82" r="76" fill={SS} stroke={INK} strokeWidth="2" />
      <path d={arcPath(100, 82, 76, 0, pct)} fill={SC} stroke={WHITE} strokeWidth="2" />
      <Label x={100} y={180} size={15}>{`${pct}% · 圓心角 ${(pct * 360) / 100} 度`}</Label>
    </Svg>
  );
}
function Donut({ labels, values }) {
  const total = values.reduce((a, b) => a + b, 0);
  let run = 0;
  return (
    <Svg w={340} h={176} label={`圓形圖：${labels.map((l, i) => `${l} ${values[i]}%`).join("、")}`}>
      {values.map((v, i) => {
        const from = (run / total) * 100;
        run += v;
        return <path key={i} d={arcPath(90, 88, 80, from, (run / total) * 100)} fill={SERIES[i % 4]} stroke={WHITE} strokeWidth="2" />;
      })}
      {labels.map((l, i) => (
        <g key={l}>
          <rect x="194" y={36 + i * 28} width="14" height="14" rx="3" fill={SERIES[i % 4]} />
          <Label x={214} y={48 + i * 28} size={14} anchor="start">{`${l} ${values[i]}%`}</Label>
        </g>
      ))}
    </Svg>
  );
}
function Percent({ p }) {
  const whole = Math.floor(p);
  return (
    <Svg w={240} h={262} label={`一百格中塗滿 ${p} 格，也就是 ${p}%，或 ${fmt(p / 100)}`}>
      {Array.from({ length: 100 }, (_, i) => (
        <rect key={i} x={20 + (i % 10) * 20} y={4 + Math.floor(i / 10) * 20} width="19" height="19" rx="3" fill={i < whole ? SC : SS} />
      ))}
      <Label x={120} y={228} size={16}>{`${p}% ＝ ${fmt(p / 100)}`}</Label>
      <Label x={120} y={250} size={13} color={MUTED} weight={600}>{`100 格裡的 ${p} 格`}</Label>
    </Svg>
  );
}

function Ruler({ len }) {
  const W = 340;
  const unit = Math.min(30, (W - 30) / Math.max(Math.ceil(len) + 1, 10));
  const total = Math.floor((W - 30) / unit);
  return (
    <Svg w={W} h={104} label={`直尺量到 ${len} 公分`}>
      <rect x="15" y="12" width={len * unit} height="20" rx="4" fill={CORAL} />
      <rect x="10" y="38" width={W - 20} height="44" rx="5" fill="#fff4cf" stroke="#c78f1c" />
      {Array.from({ length: total + 1 }, (_, i) => (
        <g key={i}>
          <path d={`M${15 + i * unit} 38v16`} stroke={INK} strokeWidth="1.5" />
          <Label x={15 + i * unit} y={72} size={11} weight={600}>{i}</Label>
          {i < total && unit > 20 && Array.from({ length: 9 }, (_, k) => <path key={k} d={`M${15 + i * unit + ((k + 1) * unit) / 10} 38v7`} stroke={INK} strokeWidth=".6" />)}
        </g>
      ))}
      <Label x={W / 2} y={100} size={14}>{`${len} 公分`}</Label>
    </Svg>
  );
}

function Cup({ ml, cap }) {
  const top = 12;
  const height = 130;
  const level = height * (ml / cap);
  return (
    <Svg w={180} h={172} label={`量杯容量 ${cap} 毫升，水到 ${ml} 毫升`}>
      <rect x="40" y={top + height - level} width="80" height={level} fill="#8dd3f0" />
      <path d={`M40 ${top}V${top + height}a8 8 0 0 0 8 8H112a8 8 0 0 0 8 -8V${top}`} fill="none" stroke={INK} strokeWidth="3" />
      {[0, 0.2, 0.4, 0.6, 0.8, 1].map((t) => (
        <g key={t}>
          <path d={`M120 ${top + height - t * height}h-14`} stroke={INK} strokeWidth="1.5" />
          <Label x={128} y={top + height - t * height + 4} size={11} anchor="start" weight={600}>{cap * t}</Label>
        </g>
      ))}
      <Label x={80} y={166} size={14}>{`${ml} 毫升`}</Label>
    </Svg>
  );
}

function Scale({ kg, unit = "公斤" }) {
  const a = (kg / 5) * 270 - 225;
  const nx = 90 + 56 * Math.cos((a * Math.PI) / 180);
  const ny = 86 + 56 * Math.sin((a * Math.PI) / 180);
  return (
    <Svg w={180} h={176} label={`秤顯示 ${kg} ${unit}`}>
      <rect x="30" y="8" width="120" height="14" rx="6" fill={SC} />
      <circle cx="90" cy="86" r="66" fill={WHITE} stroke={SC} strokeWidth="6" />
      {[0, 1, 2, 3, 4, 5].map((v) => {
        const t = (v / 5) * 270 - 225;
        return <Label key={v} x={90 + 50 * Math.cos((t * Math.PI) / 180)} y={90 + 50 * Math.sin((t * Math.PI) / 180)} size={12}>{v}</Label>;
      })}
      <path d={`M90 86L${nx} ${ny}`} stroke={CORAL} strokeWidth="4" strokeLinecap="round" />
      <circle cx="90" cy="86" r="5" fill={INK} />
      <Label x={90} y={170} size={15}>{`${kg} ${unit}`}</Label>
    </Svg>
  );
}

function CircleParts({ r }) {
  return (
    <Svg w={240} h={214} label={`圓：半徑 ${r}，直徑 ${r * 2}`}>
      <circle cx="120" cy="92" r="84" fill={SS} stroke={SC} strokeWidth="4" />
      <path d="M36 92H204" stroke={INK} strokeWidth="2.5" strokeDasharray="6 4" />
      <path d="M120 92L179 33" stroke={CORAL} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="120" cy="92" r="5" fill={INK} />
      <Label x={120} y={112} size={13}>圓心</Label>
      <Label x={165} y={72} size={13} color="#b8442d">{`半徑 ${r}`}</Label>
      <Label x={70} y={86} size={13}>{`直徑 ${r * 2}`}</Label>
      <Label x={120} y={200} size={14}>{`周長約 ${fmt(r * 2 * 3.14)} · 面積約 ${fmt(r * r * 3.14)}`}</Label>
    </Svg>
  );
}

function Solids({ kinds }) {
  const names = { cube: "正方體", cylinder: "圓柱", sphere: "球", prism: "長方體", cone: "圓錐" };
  const draw = {
    cube: (
      <g>
        <rect x="14" y="30" width="44" height="44" fill={SC} />
        <path d="M14 30l16-14h44l-16 14z" fill={SUN} />
        <path d="M58 30l16-14v44l-16 14z" fill={SC} opacity=".7" />
      </g>
    ),
    prism: (
      <g>
        <rect x="8" y="36" width="56" height="38" fill={SC} />
        <path d="M8 36l14-12h56l-14 12z" fill={SUN} />
        <path d="M64 36l14-12v38l-14 12z" fill={SC} opacity=".7" />
      </g>
    ),
    cylinder: (
      <g>
        <path d="M14 26v42c0 16 56 16 56 0V26z" fill={SC} />
        <ellipse cx="42" cy="26" rx="28" ry="10" fill={SUN} />
      </g>
    ),
    sphere: (
      <g>
        <circle cx="42" cy="44" r="32" fill={SC} />
        <ellipse cx="32" cy="32" rx="10" ry="7" fill={WHITE} opacity=".45" />
      </g>
    ),
    cone: (
      <g>
        <path d="M42 10L14 66c0 16 56 16 56 0z" fill={SC} />
        <ellipse cx="42" cy="66" rx="28" ry="9" fill={SUN} />
      </g>
    ),
  };
  const W = kinds.length * 88;
  return (
    <Svg w={Math.max(W, 180)} h={112} label={`立體形狀：${kinds.map((k) => names[k]).join("、")}`}>
      {kinds.map((k, i) => (
        <g key={k} transform={`translate(${i * 88 + 2} 2)`}>
          {draw[k]}
          <Label x={42} y={104} size={14}>{names[k]}</Label>
        </g>
      ))}
    </Svg>
  );
}

function Shape({ kind }) {
  const stroke = { stroke: INK, strokeWidth: 2.5, strokeLinejoin: "round" };
  const cap = (x, t) => <Label key={`cap-${x}`} x={x} y={122} size={13}>{t}</Label>;
  const sets = {
    "square-split": [<path key="a" d="M60 20H150V110H60Z" fill={SS} {...stroke} />, <path key="b" d="M60 110L150 20" {...stroke} fill="none" strokeDasharray="6 4" />, <path key="c" d="M60 20H150L60 110Z" fill={SC} opacity=".75" />, <path key="d" d="M210 110L255 20L300 110Z" fill={SUN} {...stroke} />],
    "triangle-quad-circle": [<path key="a" d="M50 100L90 25L130 100Z" fill={SC} {...stroke} />, cap(90, "三角形"), <rect key="b" x="140" y="35" width="70" height="65" fill={SUN} {...stroke} />, cap(175, "四邊形"), <circle key="c" cx="275" cy="66" r="38" fill={CORAL} {...stroke} />, cap(275, "圓")],
    "rect-square": [<rect key="a" x="30" y="35" width="130" height="66" fill={SC} {...stroke} />, cap(95, "長方形：對邊等長"), <rect key="b" x="210" y="25" width="80" height="80" fill={SUN} {...stroke} />, cap(250, "正方形：四邊等長")],
    "parallel-perpendicular": [<path key="a" d="M30 40H150M30 90H150" {...stroke} stroke={SC} strokeWidth="4" />, cap(90, "平行：永不相交"), <path key="b" d="M190 95H310M250 20V95" {...stroke} stroke={CORAL} strokeWidth="4" fill="none" />, <path key="c" d="M250 79h16v16" fill="none" {...stroke} />, cap(250, "垂直：相交成直角")],
    congruent: [<path key="a" d="M40 100L70 30L140 100Z" fill={SC} {...stroke} />, <path key="b" d="M180 30L250 30L210 100Z" fill={SUN} {...stroke} />, cap(170, "轉一轉、翻一翻，再疊在一起")],
    triangles: [<path key="a" d="M30 100L70 30L110 100Z" fill={SC} {...stroke} />, cap(70, "正三角形"), <path key="b" d="M130 100V30H200Z" fill={SUN} {...stroke} />, cap(165, "直角三角形"), <path key="c" d="M220 100L320 100L240 40Z" fill={CORAL} {...stroke} />, cap(270, "鈍角三角形")],
    quads: [<path key="a" d="M22 100L44 40H82L104 100Z" fill={SC} {...stroke} />, cap(62, "梯形"), <path key="b" d="M124 100L148 40H216L192 100Z" fill={SUN} {...stroke} />, cap(170, "平行四邊形"), <path key="c" d="M280 22L318 66L280 110L242 66Z" fill={CORAL} {...stroke} />, cap(280, "菱形")],
    "angle-sum": [<path key="a" d="M40 100L110 20L180 100Z" fill={SS} {...stroke} />, <path key="b" d="M54 100a14 14 0 0 0 -4 -12" fill="none" stroke={CORAL} strokeWidth="3" />, <path key="c" d="M210 100H320" {...stroke} />, <path key="d" d="M265 100L235 58M265 100L295 58" {...stroke} />, cap(110, "三個內角"), cap(265, "拼成一直線 180 度")],
    "area-formulas": [<path key="a" d="M20 100L50 40H130L100 100Z" fill={SC} {...stroke} />, <path key="b" d="M50 40V100" stroke={WHITE} strokeWidth="2" strokeDasharray="4 4" />, cap(75, "底 × 高"), <path key="c" d="M150 100L200 40L240 100Z" fill={SUN} {...stroke} />, cap(195, "底 × 高 ÷ 2"), <path key="d" d="M262 100L280 40H310L328 100Z" fill={CORAL} {...stroke} />, cap(295, "梯形")],
    symmetry: [<path key="a" d="M170 12V110" stroke={CORAL} strokeWidth="3" strokeDasharray="6 5" />, <path key="b" d="M170 30C130 0 60 20 70 62C78 96 140 96 170 100Z" fill={SC} opacity=".85" />, <path key="c" d="M170 30C210 0 280 20 270 62C262 96 200 96 170 100Z" fill={SC} opacity=".55" />, cap(170, "對摺後完全重合")],
  };
  return (
    <Svg w={340} h={130} label={`圖形示意：${kind}`}>
      {sets[kind] || sets["triangle-quad-circle"]}
    </Svg>
  );
}

function Venn({ nums, sets, what = "數" }) {
  const [left, both, right] = sets;
  const stack = (list, x) => {
    const rows = [];
    for (let i = 0; i < list.length; i += 2) rows.push(list.slice(i, i + 2).join("、"));
    return rows.map((row, i) => (
      <Label key={i} x={x} y={92 - ((rows.length - 1) * 22) / 2 + i * 22} size={17}>{row}</Label>
    ));
  };
  return (
    <Svg w={340} h={186} label={`${nums[0]} 和 ${nums[1]} 的共同數有 ${both.join("、")}`}>
      <circle cx="130" cy="88" r="78" fill={SC} opacity=".22" stroke={SC} strokeWidth="2" />
      <circle cx="210" cy="88" r="78" fill={SUN} opacity=".3" stroke="#c78f1c" strokeWidth="2" />
      <Label x={82} y={24} size={13}>{`只有 ${nums[0]} 的${what}`}</Label>
      <Label x={258} y={24} size={13}>{`只有 ${nums[1]} 的${what}`}</Label>
      {stack(left, 88)}
      {stack(both, 170)}
      {stack(right, 252)}
      <Label x={170} y={180} size={13} color={MUTED} weight={600}>{`中間重疊的是共同的${what}`}</Label>
    </Svg>
  );
}

function Column({ a, op, b }) {
  const opText = { "+": "＋", "-": "－", "×": "×" }[op] || op;
  const result = op === "+" ? a + b : op === "-" ? a - b : +(a * b).toFixed(2);
  return (
    <Svg w={200} h={152} label={`直式 ${a} ${opText} ${b} 等於 ${result}`}>
      <text x="170" y="36" fontSize="30" textAnchor="end" fill={INK} fontWeight="700" letterSpacing="3">{a}</text>
      <text x="170" y="82" fontSize="30" textAnchor="end" fill={INK} fontWeight="700" letterSpacing="3">{b}</text>
      <text x="48" y="82" fontSize="28" textAnchor="middle" fill={SC} fontWeight="800">{opText}</text>
      <path d="M36 96H182" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <text x="170" y="140" fontSize="30" textAnchor="end" fill={CORAL} fontWeight="800" letterSpacing="3">{result}</text>
    </Svg>
  );
}

function Balance({ a, op, b }) {
  const tilt = op === "＝" ? 0 : op === "＞" ? 8 : -8;
  return (
    <Svg w={320} h={140} label={`${a} ${op} ${b}`}>
      <path d="M160 40V118M124 122H196" stroke={INK} strokeWidth="5" strokeLinecap="round" />
      <g transform={`rotate(${tilt} 160 40)`}>
        <path d="M46 40H274" stroke={SC} strokeWidth="6" strokeLinecap="round" />
        <rect x="6" y="46" width="90" height="42" rx="11" fill={SS} stroke={SC} strokeWidth="2" />
        <rect x="224" y="46" width="90" height="42" rx="11" fill="#fff4cf" stroke="#c78f1c" strokeWidth="2" />
        <Label x={51} y={73} size={17}>{a}</Label>
        <Label x={269} y={73} size={17}>{b}</Label>
      </g>
      <circle cx="160" cy="40" r="17" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <Label x={160} y={46} size={18}>{op}</Label>
    </Svg>
  );
}

function Calendar({ today }) {
  const days = ["日", "一", "二", "三", "四", "五", "六"];
  return (
    <Svg w={280} h={196} label={`月曆示意，第 ${today} 天下方同一行是第 ${today + 7} 天，相差 7 天`}>
      {days.map((d, i) => (
        <g key={d}>
          <rect x={i * 40} y="0" width="40" height="28" fill={SC} stroke={WHITE} />
          <Label x={i * 40 + 20} y={19} size={13} color={WHITE}>{d}</Label>
        </g>
      ))}
      {Array.from({ length: 28 }, (_, i) => {
        const hit = i + 1 === today || i + 1 === today + 7;
        return (
          <g key={i}>
            <rect x={(i % 7) * 40} y={28 + Math.floor(i / 7) * 40} width="40" height="40" fill={hit ? SUN : SS} stroke={WHITE} />
            <Label x={(i % 7) * 40 + 20} y={54 + Math.floor(i / 7) * 40} size={14}>{i + 1}</Label>
          </g>
        );
      })}
    </Svg>
  );
}

function Thermo({ t }) {
  const h = Math.max(4, ((t + 10) / 60) * 120);
  return (
    <Svg w={160} h={180} label={`溫度計顯示 ${t} 度`}>
      <rect x="66" y="10" width="20" height="130" rx="10" fill={WHITE} stroke={INK} strokeWidth="2.5" />
      <rect x="71" y={134 - h} width="10" height={h + 8} fill={CORAL} />
      <circle cx="76" cy="146" r="17" fill={CORAL} stroke={INK} strokeWidth="2.5" />
      {[-10, 0, 10, 20, 30, 40, 50].map((v) => (
        <g key={v}>
          <path d={`M86 ${134 - ((v + 10) / 60) * 120}h9`} stroke={INK} strokeWidth="1.5" />
          <Label x={100} y={138 - ((v + 10) / 60) * 120} size={11} anchor="start" weight={600}>{v}</Label>
        </g>
      ))}
      <Label x={36} y={80} size={15}>{`${t}°C`}</Label>
    </Svg>
  );
}

function Plant() {
  return (
    <Svg w={320} h={232} label="植物的部位：花、葉、莖、根，以及花授粉後形成的果實與種子">
      <path d="M0 170H320V232H0Z" fill="#efe1c7" />
      <path d="M160 170V62" stroke="#3f8f54" strokeWidth="8" strokeLinecap="round" />
      <path d="M160 130C120 124 104 100 110 88C136 88 158 106 160 130ZM160 110C200 104 216 80 210 68C184 68 162 86 160 110Z" fill="#59ab6c" />
      <path d="M160 170C150 196 132 200 120 216M160 170C160 196 158 208 162 226M160 170C172 194 188 198 200 218" stroke="#8d6a3f" strokeWidth="4" fill="none" strokeLinecap="round" />
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse key={a} cx="160" cy="36" rx="10" ry="18" fill={CORAL} transform={`rotate(${a} 160 50)`} />
      ))}
      <circle cx="160" cy="50" r="9" fill={SUN} />
      <Label x={70} y={40} anchor="start" size={15}>花</Label><path d="M90 36H140" stroke={MUTED} />
      <Label x={250} y={72} anchor="start" size={15}>葉</Label><path d="M212 68H246" stroke={MUTED} />
      <Label x={40} y={150} anchor="start" size={15}>莖</Label><path d="M60 146H154" stroke={MUTED} />
      <Label x={240} y={214} anchor="start" size={15}>根</Label><path d="M204 212H236" stroke={MUTED} />
    </Svg>
  );
}

function States() {
  return (
    <Svg w={340} h={150} label="水的三態：冰熔化成水，水蒸發成水蒸氣，水蒸氣凝結成水，水凝固成冰">
      {[["🧊", "冰 固體", 50], ["💧", "水 液體", 170], ["☁️", "水蒸氣 氣體", 290]].map(([e, t, x]) => (
        <g key={t}>
          <circle cx={x} cy="60" r="38" fill={SS} stroke={SC} strokeWidth="2" />
          <text x={x} y="72" fontSize="32" textAnchor="middle">{e}</text>
          <Label x={x} y={118} size={13}>{t}</Label>
        </g>
      ))}
      <path d="M92 48H128M212 48H248" stroke={CORAL} strokeWidth="3" markerEnd="url(#arrow-red)" />
      <path d="M128 72H92M248 72H212" stroke="#2f7fc1" strokeWidth="3" markerEnd="url(#arrow-blue)" />
      <defs>
        <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill={CORAL} /></marker>
        <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="#2f7fc1" /></marker>
      </defs>
      <Label x={170} y={144} size={12} color={MUTED} weight={600}>紅箭頭：受熱　藍箭頭：遇冷</Label>
    </Svg>
  );
}

function Moon() {
  const phases = [["新月", "new"], ["上弦月", "right"], ["滿月", "full"], ["下弦月", "left"]];
  return (
    <Svg w={340} h={108} label="月相順序：新月、上弦月、滿月、下弦月">
      <rect width="340" height="108" rx="14" fill="#1e2b4f" />
      {phases.map(([name, kind], i) => {
        const x = 46 + i * 83;
        return (
          <g key={name}>
            <circle cx={x} cy="42" r="24" fill="#3a4770" />
            {kind === "full" && <circle cx={x} cy="42" r="24" fill="#ffe08a" />}
            {kind === "right" && <path d={`M${x} 18A24 24 0 0 1 ${x} 66Z`} fill="#ffe08a" />}
            {kind === "left" && <path d={`M${x} 18A24 24 0 0 0 ${x} 66Z`} fill="#ffe08a" />}
            <Label x={x} y={90} size={12} color={WHITE}>{name}</Label>
          </g>
        );
      })}
    </Svg>
  );
}

function Circuit() {
  return (
    <Svg w={320} h={170} label="完整電路：電池、開關、燈泡連成一個迴路">
      <path d="M50 40H270V130H50Z" fill="none" stroke={INK} strokeWidth="4" strokeLinejoin="round" />
      <rect x="28" y="66" width="44" height="36" rx="5" fill={SC} />
      <Label x={50} y={89} size={13} color={WHITE}>電池</Label>
      <circle cx="160" cy="40" r="20" fill={SUN} stroke={INK} strokeWidth="3" />
      <path d="M150 34L170 46M170 34L150 46" stroke={INK} strokeWidth="2" />
      <Label x={160} y={14} size={13}>燈泡</Label>
      <rect x="140" y="118" width="40" height="24" fill={WHITE} />
      <path d="M140 130L176 114" stroke={CORAL} strokeWidth="5" strokeLinecap="round" />
      <Label x={160} y={160} size={13}>開關：接上燈才亮</Label>
    </Svg>
  );
}

function Compass() {
  return (
    <Svg w={200} h={200} label="方位：北在上、南在下、西在左、東在右">
      <circle cx="100" cy="100" r="66" fill={SS} stroke={SC} strokeWidth="3" />
      <path d="M100 42L114 100L100 158L86 100Z" fill={WHITE} stroke={INK} strokeWidth="2" />
      <path d="M100 42L114 100H86Z" fill={CORAL} />
      <Label x={100} y={26} size={18}>北</Label>
      <Label x={100} y={190} size={18}>南</Label>
      <Label x={16} y={106} size={18}>西</Label>
      <Label x={184} y={106} size={18}>東</Label>
    </Svg>
  );
}

function Cycle({ items }) {
  const W = 340;
  const R = 92;
  const RX = 112;
  const c = [W / 2, 118];
  const n = items.length;
  const P = (i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [c[0] + RX * Math.cos(a), c[1] + R * Math.sin(a)];
  };
  return (
    <Svg w={W} h={236} label={`循環：${items.join(" → ")}，再回到開始`}>
      <ellipse cx={c[0]} cy={c[1]} rx={RX} ry={R} fill="none" stroke={SC} strokeWidth="3" strokeDasharray="6 7" />
      <path d={`M${c[0] - 9} ${c[1] - 5}A12 12 0 1 1 ${c[0] - 8} ${c[1] + 9}`} fill="none" stroke={SC} strokeWidth="3" strokeLinecap="round" />
      {items.map((t, i) => {
        const [x, y] = P(i);
        return (
          <g key={t}>
            <rect x={x - 52} y={y - 19} width="104" height="38" rx="19" fill={WHITE} stroke={SC} strokeWidth="2" />
            <Label x={x} y={y + 5} size={14}>{t}</Label>
          </g>
        );
      })}
    </Svg>
  );
}

function Ring({ center, items }) {
  const W = 340;
  return (
    <Svg w={W} h={222} label={`${center}周圍：${items.join("、")}`}>
      <circle cx={W / 2} cy="110" r="36" fill={SUN} />
      <Label x={W / 2} y={115} size={15}>{center}</Label>
      {items.map((t, i) => {
        const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        const x = W / 2 + 130 * Math.cos(a);
        const y = 110 + 84 * Math.sin(a);
        return (
          <g key={t}>
            <circle cx={x} cy={y} r="20" fill={SS} stroke={SC} strokeWidth="2" />
            <Label x={x} y={y + 4} size={t.length > 2 ? 10 : 13}>{t}</Label>
          </g>
        );
      })}
    </Svg>
  );
}

function PatternRow({ items }) {
  return (
    <div className="viz-pattern" role="img" aria-label={`規律：${items.join("、")}`}>
      {items.map((t, i) => (
        <span key={i} className={t === "?" ? "is-question" : ""}>{t}</span>
      ))}
    </div>
  );
}

function FlowRow({ items }) {
  return (
    <ol className="viz-flow">
      {items.map((t, i) => (
        <li key={i}>
          <span className="viz-flow-num">{i + 1}</span>
          {t}
        </li>
      ))}
    </ol>
  );
}

function CompareCards({ items }) {
  return (
    <ul className={`viz-compare cols-${items.length}`}>
      {items.map(([a, b]) => (
        <li key={a}>
          <strong>{a}</strong>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Timeline({ items }) {
  return (
    <ol className="viz-timeline">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ol>
  );
}

function Tree({ root, branches }) {
  return (
    <div className="viz-tree" role="img" aria-label={`${root}：${branches.map(([b, l]) => `${b}包括${l.join("、")}`).join("；")}`}>
      <strong className="viz-tree-root">{root}</strong>
      <div className="viz-tree-branches">
        {branches.map(([b, leaves]) => (
          <div key={b}>
            <b>{b}</b>
            <ul>
              {leaves.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function DataTable({ head, rows }) {
  return (
    <div className="viz-table-wrap">
      <table className="viz-table">
        <caption className="sr-only">示例表格</caption>
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Sliders exist only where moving a value reveals the idea itself.
const explorers = {
  blocks: (s) => [{ label: "數量", i: 1, min: 1, max: s[1] >= 1000 ? 9999 : s[1] >= 100 ? 999 : 99, step: 1 }],
  array: () => [
    { label: "幾排", i: 1, min: 1, max: 10, step: 1 },
    { label: "每排幾個", i: 2, min: 1, max: 12, step: 1 },
  ],
  groups: () => [
    { label: "幾組", i: 1, min: 1, max: 8, step: 1 },
    { label: "每組幾個", i: 2, min: 1, max: 9, step: 1 },
  ],
  grid: () => [
    { label: "長", i: 1, min: 1, max: 10, step: 1 },
    { label: "寬", i: 2, min: 1, max: 8, step: 1 },
  ],
  clock: () => [
    { label: "時", i: 1, min: 1, max: 12, step: 1 },
    { label: "分", i: 2, min: 0, max: 55, step: 5 },
  ],
  angle: () => [{ label: "角度", i: 1, min: 5, max: 180, step: 5 }],
  percent: () => [{ label: "塗幾格", i: 1, min: 0, max: 100, step: 1 }],
  pie: () => [{ label: "百分率", i: 1, min: 5, max: 100, step: 5 }],
  cube: () => [
    { label: "長", i: 1, min: 1, max: 6, step: 1 },
    { label: "寬", i: 2, min: 1, max: 5, step: 1 },
    { label: "高", i: 3, min: 1, max: 5, step: 1 },
  ],
  frac: (s) =>
    s.length > 3
      ? []
      : [
          { label: "平均分成", i: 2, min: 2, max: 12, step: 1 },
          { label: "取幾份", i: 1, min: 0, max: 24, step: 1 },
        ],
  circle: () => [{ label: "半徑", i: 1, min: 1, max: 12, step: 1 }],
};

export function renderSpec(s) {
  const [type] = s;
  switch (type) {
    case "blocks": return <Blocks n={s[1]} />;
    case "line": return <NumberLine min={s[1]} max={s[2]} start={s[3]} hop={s[4]} />;
    case "array": return <ArrayDots r={s[1]} c={s[2]} />;
    case "groups": return <Groups g={s[1]} each={s[2]} extra={s[3]} />;
    case "frac": return <FracBar n={s[1]} d={s[2]} n2={s[3]} d2={s[4]} />;
    case "pv": return <PlaceValue digits={s[1]} labels={s[2]} />;
    case "clock": return <Clock h={s[1]} m={s[2]} />;
    case "coins": return <Coins list={s[1]} />;
    case "grid": return <Grid w={s[1]} h={s[2]} />;
    case "angle": return <Angle deg={s[1]} />;
    case "cube": return <Cube l={s[1]} w={s[2]} h={s[3]} />;
    case "bars": return <BarChart labels={s[1]} values={s[2]} />;
    case "chart": return s[1] === "line" ? <LineChart labels={s[2]} values={s[3]} /> : <BarChart labels={s[2]} values={s[3]} example />;
    case "pie": return <Pie pct={s[1]} />;
    case "donut": return <Donut labels={s[1]} values={s[2]} />;
    case "percent": return <Percent p={s[1]} />;
    case "ruler": return <Ruler len={s[1]} />;
    case "cup": return <Cup ml={s[1]} cap={s[2]} />;
    case "scale": return <Scale kg={s[1]} unit={s[2]} />;
    case "circle": return <CircleParts r={s[1]} />;
    case "solids": return <Solids kinds={s[1]} />;
    case "shape": return <Shape kind={s[1]} />;
    case "venn": return <Venn nums={s[1]} sets={s[2]} what={s[3]} />;
    case "column": return <Column a={s[1]} op={s[2]} b={s[3]} />;
    case "balance": return <Balance a={s[1]} op={s[2]} b={s[3]} />;
    case "calendar": return <Calendar today={s[2]} />;
    case "thermo": return <Thermo t={s[1]} />;
    case "plant": return <Plant />;
    case "states": return <States />;
    case "moon": return <Moon />;
    case "circuit": return <Circuit />;
    case "compass": return <Compass />;
    case "cycle": return <Cycle items={s.slice(1)} />;
    case "ring": return <Ring center={s[1]} items={s[2]} />;
    case "pattern": return <PatternRow items={s[1]} />;
    case "flow": return <FlowRow items={s.slice(1)} />;
    case "compare": return <CompareCards items={s.slice(1)} />;
    case "timeline": return <Timeline items={s[1]} />;
    case "tree": return <Tree root={s[1]} branches={s[2]} />;
    case "table": return <DataTable head={s[1]} rows={s[2]} />;
    default: return null;
  }
}

export default function Visual({ spec }) {
  const [values, setValues] = useState({});
  const merged = spec.map((v, i) => (values[i] !== undefined ? values[i] : v));
  // Keep the fraction numerator valid when the denominator shrinks.
  if (spec[0] === "frac" && spec.length <= 3) merged[1] = Math.min(merged[1], merged[2] * 2);
  const controls = explorers[spec[0]]?.(spec) || [];
  return (
    <div className="viz">
      <div className="viz-stage">{renderSpec(merged)}</div>
      {controls.length > 0 && (
        <div className="viz-controls">
          <p className="viz-try">動動手：拉拉看，圖會跟著變</p>
          {controls.map((c) => (
            <label key={c.label}>
              <span>
                {c.label} <b>{merged[c.i]}</b>
              </span>
              <input
                type="range"
                min={c.min}
                max={c.max}
                step={c.step}
                value={merged[c.i]}
                onChange={(e) => setValues((v) => ({ ...v, [c.i]: Number(e.target.value) }))}
              />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
