import { useEffect, useMemo, useRef, useState } from "react";
import {
  BookOpen, Calculator, Check, Compass, FlaskConical, Globe2, HeartPulse, Languages,
  Lightbulb, Palette, RotateCcw, Sprout, Volume2, X,
} from "lucide-react";
import { gardenSubjects } from "../../data/elementaryGarden.js";
import { isCorrect } from "../../data/garden/build.js";
import { shuffled } from "../../utils/islandGame.js";
import { speechEngine } from "../../utils/speechHelper.js";

const icons = { Calculator, BookOpen, Sprout, FlaskConical, Globe2, Languages, Palette, HeartPulse, Compass };
export const gradeNames = ["一", "二", "三", "四", "五", "六"];
export const subjectById = (id) => gardenSubjects.find((s) => s.id === id);

export function SubjectIcon({ subject, size = 22 }) {
  const Icon = icons[subject?.icon] || Sprout;
  return <Icon size={size} strokeWidth={2} aria-hidden="true" />;
}

export const subjectVars = (subject) => (subject ? { "--sc": subject.color, "--ss": subject.soft } : undefined);

// Fractions are written stacked, the way children see them in class.
export function Rich({ children }) {
  const text = String(children ?? "");
  const parts = text.split(/(\d+／\d+)/);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    const m = part.match(/^(\d+)／(\d+)$/);
    if (!m) return part;
    return (
      <span key={i} className="isl-frac" role="img" aria-label={`${m[2]}分之${m[1]}`}>
        <span>{m[1]}</span>
        <span>{m[2]}</span>
      </span>
    );
  });
}

export function Ring({ value, max = 1, size = 56, stroke = 7, color = "var(--sc)", children, label }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = max ? Math.min(1, value / max) : 0;
  return (
    <span className="isl-ring" style={{ width: size, height: size }} role="img" aria-label={label}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e7ebf2" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <span className="isl-ring-text">{children}</span>
    </span>
  );
}

// Each level adds one visible thing to the island, so progress is something to look at.
export function IslandScene({ level = 1, className = "" }) {
  return (
    <svg viewBox="0 0 420 220" preserveAspectRatio="xMidYMid slice" className={`isl-scene ${className}`} role="img" aria-label={`第 ${level} 級的小島`}>
      <defs>
        <linearGradient id="isl-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#bfeaf6" />
          <stop offset="1" stopColor="#e9f9fb" />
        </linearGradient>
      </defs>
      <rect width="420" height="220" fill="url(#isl-sky)" />
      <circle cx="356" cy="46" r="24" fill="#ffc24b" />
      <path d="M58 58c0-11 16-15 22-6 8-10 25-3 22 8H58z M220 36c0-8 12-11 16-4 6-7 18-2 16 6h-32z" fill="#fff" />
      <path d="M0 150c40-10 70 8 110 0s70-12 110-2 70 10 110 0 60-6 90 0v72H0z" fill="#3cc0d2" />
      <path d="M0 176c40-8 80 8 120 0s80-8 120 0 80 8 120 0 40-4 60 0v44H0z" fill="#1fa7bd" />
      <path d="M62 168c10-42 74-70 152-70s134 30 146 70c-30 18-70 22-146 22s-122-4-152-22z" fill="#f6dc9c" />
      <path d="M84 154c14-32 66-50 130-50s112 20 122 50c-26 12-62 14-122 14s-104-2-130-14z" fill="#6fc77a" />
      {level >= 2 && (
        <g>
          <path d="M126 142v-36" stroke="#8d6a3f" strokeWidth="7" strokeLinecap="round" />
          <circle cx="126" cy="94" r="22" fill="#3e9e5a" />
          <circle cx="112" cy="106" r="14" fill="#4cb169" />
          <circle cx="140" cy="106" r="14" fill="#4cb169" />
        </g>
      )}
      {level >= 3 && <path d="M170 146l22-34 22 34z M192 112l-6 34h12z" fill="#f4694f" stroke="#c34a33" strokeWidth="2" strokeLinejoin="round" />}
      {level >= 4 && (
        <g>
          <rect x="232" y="118" width="40" height="30" fill="#c98e55" stroke="#8d6a3f" strokeWidth="2" />
          <path d="M226 120l26-22 26 22z" fill="#a4503a" />
          <rect x="247" y="130" width="10" height="18" fill="#6f4b2a" />
        </g>
      )}
      {level >= 5 && (
        <g fill="#f4694f">
          <circle cx="150" cy="156" r="4" /><circle cx="162" cy="160" r="4" fill="#ffc24b" /><circle cx="176" cy="156" r="4" fill="#c23f7d" /><circle cx="190" cy="160" r="4" /><circle cx="204" cy="156" r="4" fill="#ffc24b" />
        </g>
      )}
      {level >= 6 && <path d="M298 118c-20 8-8 22-26 30s-10 16 2 18" fill="none" stroke="#3cc0d2" strokeWidth="9" strokeLinecap="round" />}
      {level >= 7 && (
        <g>
          <path d="M100 150l8-32h10l8 32z" fill="#6c7aa1" />
          <path d="M104 118a10 10 0 0 1 18 0z" fill="#3a4770" />
          <path d="M118 112l14-10" stroke="#3a4770" strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
      {level >= 8 && (
        <g>
          <path d="M28 182h48l-8 12H36z" fill="#a4503a" />
          <path d="M52 182v-34l22 26z" fill="#fff" stroke="#22304a" />
        </g>
      )}
      {level >= 9 && (
        <g>
          <rect x="196" y="82" width="54" height="30" fill="#fff5dc" stroke="#8d6a3f" strokeWidth="2" />
          <path d="M190 84l33-20 33 20z" fill="#2f6fd0" />
          <path d="M206 90v22M223 90v22M240 90v22" stroke="#8d6a3f" strokeWidth="3" />
        </g>
      )}
      {level >= 10 && (
        <g>
          <path d="M336 160l6-62h14l6 62z" fill="#fff" stroke="#22304a" strokeWidth="2" />
          <path d="M338 128h22M340 112h18" stroke="#f4694f" strokeWidth="6" />
          <rect x="340" y="86" width="18" height="12" fill="#ffc24b" stroke="#22304a" strokeWidth="2" />
          <path d="M358 92l44-14v28z" fill="#ffc24b" opacity=".5" />
        </g>
      )}
      <path d="M268 158c-3-8 8-12 11-5 5-5 12 2 8 8l-10 7z" fill="#ff8f7a" />
    </svg>
  );
}

function useSpeech(id) {
  const [speaking, setSpeaking] = useState(false);
  useEffect(() => {
    const off = speechEngine.subscribe((s) => setSpeaking(s.isPlaying && s.activeId === id));
    return () => {
      off?.();
      speechEngine.stop();
    };
  }, [id]);
  return [speaking, (text) => (speaking ? speechEngine.stop() : speechEngine.speakMixed(text.replace(/(\d+)／(\d+)/g, (_, n, d) => `${d}分之${n}`), { id, rate: 0.85 }))];
}

export function ReadAloud({ text, id = "island", label = "聽一聽" }) {
  const [speaking, toggle] = useSpeech(id);
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  return (
    <button type="button" className="isl-read" aria-pressed={speaking} onClick={() => toggle(text)}>
      <Volume2 size={17} aria-hidden="true" />
      {speaking ? "停止" : label}
    </button>
  );
}

const spokenQuestion = (q) =>
  q.type === "mcq" ? `${q.question}。${q.options.map((o, i) => `${q.tf ? "" : `選項${"ABCD"[i]}，`}${o}`).join("。")}` : q.question;

function NumInput({ question, disabled, value, onChange, onSubmit }) {
  return (
    <label className="isl-num">
      <span className="sr-only">你的答案</span>
      <input
        inputMode="decimal"
        autoComplete="off"
        value={value}
        disabled={disabled}
        placeholder="輸入答案"
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onSubmit();
        }}
      />
      {question.unit && <span>{question.unit}</span>}
    </label>
  );
}

function OrderInput({ items, picked, setPicked, disabled, answer }) {
  const left = items.filter((x) => !picked.includes(x));
  return (
    <div className="isl-order">
      <ol className="isl-order-slots" aria-label="你排的順序">
        {items.map((_, i) => (
          <li key={i} className={picked[i] ? "filled" : ""}>
            <span>{i + 1}</span>
            {picked[i] ? (
              <button type="button" disabled={disabled} onClick={() => setPicked(picked.filter((x) => x !== picked[i]))}>
                {picked[i]}
              </button>
            ) : (
              <em>點下方選項</em>
            )}
            {answer && picked[i] !== answer[i] && <small>應為 {answer[i]}</small>}
          </li>
        ))}
      </ol>
      <div className="isl-order-pool">
        {left.map((x) => (
          <button type="button" key={x} disabled={disabled} onClick={() => setPicked([...picked, x])}>
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}

function PairInput({ pairs, onDone, disabled }) {
  const rights = useMemo(() => shuffled(pairs.map((p) => p[1])), [pairs]);
  const [left, setLeft] = useState(null);
  const [done, setDone] = useState([]);
  const [wrong, setWrong] = useState(null);
  const mistakes = useRef(0);
  function chooseRight(r) {
    if (left === null) return;
    const pair = pairs[left];
    if (pair[1] === r) {
      const next = [...done, left];
      setDone(next);
      setLeft(null);
      if (next.length === pairs.length) onDone(mistakes.current === 0);
    } else {
      mistakes.current++;
      setWrong(r);
      setTimeout(() => setWrong(null), 450);
    }
  }
  return (
    <div className="isl-pairs">
      <div>
        {pairs.map((p, i) => (
          <button type="button" key={p[0]} disabled={disabled || done.includes(i)} aria-pressed={left === i} className={`${left === i ? "on" : ""} ${done.includes(i) ? "matched" : ""}`} onClick={() => setLeft(i)}>
            {done.includes(i) && <Check size={15} aria-hidden="true" />}
            {p[0]}
          </button>
        ))}
      </div>
      <div>
        {rights.map((r) => {
          const matched = done.some((i) => pairs[i][1] === r);
          return (
            <button type="button" key={r} disabled={disabled || matched || left === null} className={`${matched ? "matched" : ""} ${wrong === r ? "shake" : ""}`} onClick={() => chooseRight(r)}>
              {matched && <Check size={15} aria-hidden="true" />}
              {r}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// One component grades every question type, so lessons, checks and boss fights agree.
export function QuestionCard({ question: q, testMode = false, onAnswered, onNext, nextLabel = "下一題", onBack, showHint = true, autoFocus = true }) {
  const [picked, setPicked] = useState(null);
  const [text, setText] = useState("");
  const [sequence, setSequence] = useState([]);
  const [result, setResult] = useState(null);
  const [hint, setHint] = useState(false);
  const heading = useRef(null);
  const items = useMemo(() => (q.type === "ord" ? shuffled(q.items) : []), [q]);
  useEffect(() => {
    if (autoFocus) heading.current?.focus();
  }, [q, autoFocus]);

  const ready =
    q.type === "mcq" ? picked !== null : q.type === "num" ? text.trim() !== "" : q.type === "ord" ? sequence.length === q.items.length : false;

  function submit(pairOk) {
    if (result) return;
    if (q.type !== "pair" && !ready) return;
    const response = q.type === "mcq" ? picked : q.type === "num" ? text : q.type === "ord" ? sequence : pairOk;
    const correct = isCorrect(q, response);
    setResult({ correct });
    onAnswered?.(correct);
    if (testMode) onNext?.();
  }

  return (
    <div className="isl-q">
      <div className="isl-q-top">
        <span className="isl-q-kind">{q.kind}</span>
        <ReadAloud id={`q-${q.key}`} text={spokenQuestion(q)} label="聽題目" />
      </div>
      <h2 ref={heading} tabIndex={-1} className="isl-q-title">
        <Rich>{q.question}</Rich>
      </h2>
      {q.type === "mcq" && (
        <div className={`isl-options ${q.tf ? "is-tf" : ""}`} role="group" aria-label="答案選項">
          {q.options.map((o, i) => {
            const show = result && !testMode;
            const cls = [picked === i && "picked", show && i === q.answerIndex && "right", show && picked === i && !result.correct && "wrong"].filter(Boolean).join(" ");
            return (
              <button type="button" key={o} className={cls} disabled={Boolean(result)} aria-pressed={picked === i} onClick={() => setPicked(i)}>
                <span className="isl-letter" aria-hidden="true">{q.tf ? (i === 0 ? "⭕" : "❌") : "ABCD"[i]}</span>
                <span><Rich>{o}</Rich></span>
                {show && i === q.answerIndex && <Check size={20} aria-label="正確答案" />}
                {show && picked === i && !result.correct && <X size={20} aria-label="你的選擇" />}
              </button>
            );
          })}
        </div>
      )}
      {q.type === "num" && <NumInput question={q} disabled={Boolean(result)} value={text} onChange={setText} onSubmit={() => submit()} />}
      {q.type === "ord" && <OrderInput items={items} picked={sequence} setPicked={setSequence} disabled={Boolean(result)} answer={result && !result.correct && !testMode ? q.items : null} />}
      {q.type === "pair" && <PairInput pairs={q.pairs} onDone={(ok) => submit(ok)} disabled={Boolean(result)} />}

      {!result && (
        <div className="isl-q-actions">
          {showHint && !testMode && (
            <button type="button" className="isl-btn-ghost" aria-expanded={hint} onClick={() => setHint((v) => !v)}>
              <Lightbulb size={17} aria-hidden="true" />
              {hint ? "收起提示" : "給我提示"}
            </button>
          )}
          {q.type !== "pair" && (
            <button type="button" className="isl-btn" disabled={!ready} onClick={() => submit()}>
              {testMode ? "下一題" : "確認答案"}
            </button>
          )}
        </div>
      )}
      {hint && !result && (
        <div className="isl-hint">
          <span><Rich>{q.hint}</Rich></span>
          {onBack && (
            <button type="button" onClick={onBack}>
              <RotateCcw size={14} aria-hidden="true" />
              回去看圖解
            </button>
          )}
        </div>
      )}
      {result && !testMode && (
        <div className={`isl-feedback ${result.correct ? "good" : "again"}`} role="status">
          <strong>{result.correct ? "答對了！你的想法很棒" : "差一點，我們一起弄懂"}</strong>
          {!result.correct && q.type !== "pair" && (
            <p>
              正確答案：<b><Rich>{q.type === "mcq" ? q.options[q.answerIndex] : q.options[0]}</Rich></b>
            </p>
          )}
          <p><Rich>{q.explanation}</Rich></p>
          <button type="button" className="isl-btn" onClick={onNext}>
            {nextLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export function fireConfetti(options) {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
  import("canvas-confetti").then(({ default: confetti }) =>
    confetti({ particleCount: 90, spread: 75, origin: { y: 0.7 }, disableForReducedMotion: true, ...options }),
  );
}
