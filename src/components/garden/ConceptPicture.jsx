import { useState } from "react";
import { ArrowRight, Minus, Plus } from "lucide-react";

// Code-native diagrams stay crisp at every size and have text equivalents.
export default function ConceptPicture({ lesson }) {
  const [parts, setParts] = useState(4);
  const [taken, setTaken] = useState(1);
  const [distance, setDistance] = useState(3);
  if (lesson.id === "g3-math" || lesson.id === "g5-math")
    return (
      <figure className="concept-picture">
        <figcaption>
          <b>動動手，把分數看出來</b>
          <span>每個小格一樣大；整條表示同一個整體。</span>
        </figcaption>
        <div
          className="fraction-strip"
          role="img"
          aria-label={`平均分成 ${parts} 份，選取 ${taken} 份，表示 ${taken}／${parts}`}
          style={{ gridTemplateColumns: `repeat(${parts}, 1fr)` }}
        >
          {Array.from({ length: parts }, (_, i) => (
            <span key={i} className={i < taken ? "filled" : ""}>
              {i < taken ? "✓" : ""}
            </span>
          ))}
        </div>
        <div className="fraction-controls">
          <label>
            平均分成{" "}
            <select
              value={parts}
              onChange={(e) => {
                const n = Number(e.target.value);
                setParts(n);
                setTaken((v) => Math.min(v, n));
              }}
            >
              {[2, 3, 4, 5, 6, 8].map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>{" "}
            份
          </label>
          <div>
            <button
              onClick={() => setTaken((v) => Math.max(0, v - 1))}
              disabled={!taken}
              aria-label="少取一份"
            >
              <Minus size={17} />
            </button>
            <output aria-live="polite">
              取 {taken} 份 = {taken}／{parts}
            </output>
            <button
              onClick={() => setTaken((v) => Math.min(parts, v + 1))}
              disabled={taken === parts}
              aria-label="多取一份"
            >
              <Plus size={17} />
            </button>
          </div>
        </div>
        <p>試試看：把 1／2 和 2／4 輪流表示出來，塗色的長度有改變嗎？</p>
      </figure>
    );
  if (lesson.id === "g6-math")
    return (
      <figure className="concept-picture">
        <figcaption>
          <b>移動滑桿，讓地圖說話</b>
          <span>比例尺 1：1000 · 同一單位才能比較</span>
        </figcaption>
        <label className="scale-slider">
          圖上距離：{distance} 公分
          <input
            type="range"
            min="1"
            max="10"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
          />
        </label>
        <div
          className="scale-line"
          style={{ width: `${distance * 8 + 20}%` }}
        />
        <output className="scale-output" aria-live="polite">
          {distance} 公分 × 1000 = {distance * 1000} 公分 ={" "}
          <b>{distance * 10} 公尺</b>
        </output>
      </figure>
    );
  if (lesson.id === "g6-arts")
    return (
      <figure className="concept-picture">
        <figcaption>
          <b>同樣從零開始，才好比較長度</b>
          <span>示例資料：甲班借書 10 本，乙班 20 本。</span>
        </figcaption>
        <div
          className="example-bars"
          role="img"
          aria-label="從零起算的長條圖，甲班 10 本，乙班 20 本，是甲班的兩倍"
        >
          <div>
            <span>甲班</span>
            <i style={{ width: "30%" }} />
            <b>10 本</b>
          </div>
          <div>
            <span>乙班</span>
            <i style={{ width: "60%" }} />
            <b>20 本</b>
          </div>
        </div>
        <p>乙班的數值是甲班兩倍。這裡是練習資料，不是學習成效統計。</p>
      </figure>
    );
  return (
    <figure className="concept-picture">
      <figcaption>
        <b>一張圖，串起這個觀念</b>
        <span>從左到右看；手機上從上往下讀。</span>
      </figcaption>
      <ol className="concept-flow">
        {lesson.panels.map((p, i) => (
          <li key={p.label}>
            <span className="flow-number">0{i + 1}</span>
            <small>{p.label}</small>
            <strong>{p.value}</strong>
            {i < 2 && (
              <ArrowRight className="flow-arrow" size={20} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
