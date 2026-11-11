import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Check, RotateCcw, Shield, Volume2 } from "lucide-react";
import { gardenLessons, subjectsForGrade } from "../../data/elementaryGarden.js";
import { makeRocketQuestion, matchSets, orderSets, sortSets, spellWords } from "../../data/garden/games.js";
import { shuffled } from "../../utils/islandGame.js";
import { speechEngine } from "../../utils/speechHelper.js";
import { playSound } from "../../utils/soundEffects.js";
import { useIsland } from "./IslandContext.jsx";
import { fireConfetti, gradeNames, QuestionCard, subjectById, SubjectIcon, subjectVars } from "./parts.jsx";

const catalog = [
  { id: "rocket", emoji: "🚀", name: "火箭速算", desc: "60 秒內答越多，火箭飛越高", tag: "數學", tone: "#2a64bf" },
  { id: "match", emoji: "🃏", name: "翻牌配對", desc: "翻開兩張，找出配成對的朋友", tag: "全科", tone: "#7346bd" },
  { id: "sort", emoji: "🗂️", name: "分類島", desc: "把每張卡送到正確的小島", tag: "全科", tone: "#0a7364" },
  { id: "order", emoji: "🚂", name: "順序列車", desc: "依序排好車廂，火車才能開", tag: "全科", tone: "#b53d25" },
  { id: "spell", emoji: "⛵", name: "拼字船", desc: "聽發音、看圖，拼出英文單字", tag: "英語", tone: "#096d8e" },
  { id: "boss", emoji: "🏆", name: "島主挑戰", desc: "用學過的題目闖關，答錯還能再來", tag: "評量", tone: "#ab4c14" },
];

// The closest content to the learner's grade comes first; other sets stay reachable.
const byCloseness = (sets, grade) => [...sets].sort((a, b) => Math.abs(a.grade - grade) - Math.abs(b.grade - grade) || a.grade - b.grade);

function GameFrame({ game, children, right }) {
  return (
    <div className="isl-game">
      <div className="isl-game-bar">
        <Link to="/games" className="isl-back"><ArrowLeft size={18} aria-hidden="true" /><span>遊戲</span></Link>
        <h1><span aria-hidden="true">{game.emoji}</span> {game.name}</h1>
        <div className="isl-game-right">{right}</div>
      </div>
      {children}
    </div>
  );
}

function Finish({ title, detail, xp, onAgain, emoji = "🎉" }) {
  return (
    <div className="isl-finish" role="status">
      <div className="isl-result-burst" aria-hidden="true">{emoji}</div>
      <h2>{title}</h2>
      <p>{detail}</p>
      <p className="isl-finish-xp">{xp > 0 ? `+${xp} 點經驗` : "今天的遊戲經驗已達上限，先去學一課吧！"}</p>
      <div className="isl-result-actions">
        <button type="button" className="isl-btn" onClick={onAgain}><RotateCcw size={16} aria-hidden="true" /> 再玩一次</button>
        <Link to="/map" className="isl-btn-soft">去學新課</Link>
      </div>
    </div>
  );
}

function SetPicker({ sets, onPick, label }) {
  return (
    <div className="isl-setpick">
      <p>{label}</p>
      <div>
        {sets.map((s) => {
          const subject = subjectById(s.subject);
          return (
            <button type="button" key={s.id} style={subjectVars(subject)} onClick={() => onPick(s)}>
              <span className="isl-setpick-icon"><SubjectIcon subject={subject} size={19} /></span>
              <b>{s.title}</b>
              <small>{gradeNames[s.grade - 1]}年級 · {subject.name}</small>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Rocket({ game }) {
  const { island, gameDone } = useIsland();
  const [grade, setGrade] = useState(island.grade || 3);
  const [phase, setPhase] = useState("ready");
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(null);
  const [flash, setFlash] = useState(null);
  const [xp, setXp] = useState(0);
  const finished = useRef(false);
  function start() {
    finished.current = false;
    setScore(0);
    setTime(60);
    setQuestion(makeRocketQuestion(grade));
    setPhase("play");
  }
  useEffect(() => {
    if (phase !== "play") return undefined;
    const timer = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [phase]);
  useEffect(() => {
    if (phase === "play" && time <= 0 && !finished.current) {
      finished.current = true;
      setXp(gameDone("rocket", score, Math.min(25, 5 + score * 2)));
      setPhase("done");
      if (score >= 10) fireConfetti();
    }
  }, [time, phase, score, gameDone]);
  function choose(option) {
    const right = option === question.answer;
    setFlash(right ? "good" : "again");
    if (island.sound) playSound(right ? "correct" : "wrong");
    if (right) setScore((s) => s + 1);
    setTimeout(() => setFlash(null), 220);
    setQuestion(makeRocketQuestion(grade));
  }
  if (phase === "ready")
    return (
      <GameFrame game={game}>
        <div className="isl-game-start">
          <div className="isl-big-emoji" aria-hidden="true">🚀</div>
          <p>每答對一題，火箭就往上飛。答錯不扣分，直接換下一題。</p>
          <div className="isl-map-grades" role="group" aria-label="選擇難度年級">
            {gradeNames.map((name, i) => (
              <button type="button" key={name} className={grade === i + 1 ? "on" : ""} aria-pressed={grade === i + 1} onClick={() => setGrade(i + 1)}>
                {name}<small>年級</small>
              </button>
            ))}
          </div>
          <button type="button" className="isl-btn isl-btn-wide" onClick={start}>開始 60 秒挑戰</button>
          {island.best.rocket > 0 && <small>最佳紀錄：{island.best.rocket} 題</small>}
        </div>
      </GameFrame>
    );
  if (phase === "done")
    return (
      <GameFrame game={game}>
        <Finish emoji="🚀" title={`答對 ${score} 題！`} detail={score >= (island.best.rocket || 0) ? "刷新了你的紀錄！" : `最佳紀錄 ${island.best.rocket} 題，繼續加油！`} xp={xp} onAgain={() => setPhase("ready")} />
      </GameFrame>
    );
  return (
    <GameFrame game={game} right={<span className={`isl-timer ${time <= 10 ? "low" : ""}`} role="timer">{time} 秒</span>}>
      <div className="isl-rocket">
        <div className="isl-rocket-sky" aria-hidden="true">
          <span style={{ bottom: `${Math.min(82, score * 5)}%` }}>🚀</span>
        </div>
        <div className={`isl-rocket-play ${flash || ""}`}>
          <p className="isl-rocket-score" aria-live="polite">答對 {score} 題</p>
          <p className="isl-rocket-q">{question.text} ＝ ？</p>
          <div className="isl-rocket-options">
            {question.options.map((o) => (
              <button type="button" key={o} onClick={() => choose(o)}>{o}</button>
            ))}
          </div>
        </div>
      </div>
    </GameFrame>
  );
}

function Match({ game }) {
  const { island, gameDone } = useIsland();
  const [set, setSet] = useState(null);
  const [cards, setCards] = useState([]);
  const [open, setOpen] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [xp, setXp] = useState(null);
  function start(s) {
    setSet(s);
    setCards(shuffled(s.pairs.flatMap((p, i) => [{ id: `${i}a`, pair: i, text: p[0] }, { id: `${i}b`, pair: i, text: p[1] }])));
    setOpen([]);
    setMatched([]);
    setMoves(0);
    setXp(null);
  }
  function flip(card) {
    if (open.length === 2 || open.includes(card.id) || matched.includes(card.pair)) return;
    const next = [...open, card.id];
    setOpen(next);
    if (next.length < 2) return;
    setMoves((m) => m + 1);
    const [a, b] = next.map((id) => cards.find((c) => c.id === id));
    if (a.pair === b.pair) {
      const all = [...matched, a.pair];
      setMatched(all);
      setOpen([]);
      if (island.sound) playSound("correct");
      if (all.length === set.pairs.length) {
        setXp(gameDone("match", 1, 15));
        fireConfetti();
      }
    } else setTimeout(() => setOpen([]), 900);
  }
  if (!set)
    return (
      <GameFrame game={game}>
        <SetPicker sets={byCloseness(matchSets, island.grade || 3)} onPick={start} label="選一組牌：" />
      </GameFrame>
    );
  if (xp !== null)
    return (
      <GameFrame game={game}>
        <Finish emoji="🃏" title="全部配對成功！" detail={`你翻了 ${moves} 次，${set.title}都記住了。`} xp={xp} onAgain={() => setSet(null)} />
      </GameFrame>
    );
  return (
    <GameFrame game={game} right={<span className="isl-timer">翻 {moves} 次</span>}>
      <p className="isl-game-title">{set.title}：找出配成對的兩張</p>
      <div className="isl-cards">
        {cards.map((c) => {
          const face = open.includes(c.id) || matched.includes(c.pair);
          return (
            <button type="button" key={c.id} className={`isl-flip ${face ? "face" : ""} ${matched.includes(c.pair) ? "matched" : ""}`} aria-label={face ? c.text : "蓋著的牌"} onClick={() => flip(c)}>
              {face ? c.text : <span aria-hidden="true">🏝️</span>}
            </button>
          );
        })}
      </div>
    </GameFrame>
  );
}

function Sort({ game }) {
  const { island, gameDone } = useIsland();
  const [set, setSet] = useState(null);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [note, setNote] = useState(null);
  const [xp, setXp] = useState(null);
  function start(s) {
    setSet(s);
    setItems(shuffled(s.items));
    setIndex(0);
    setMistakes(0);
    setNote(null);
    setXp(null);
  }
  function choose(bin) {
    const [, correct] = items[index];
    if (bin === correct) {
      if (island.sound) playSound("correct");
      setNote(null);
      if (index + 1 === items.length) {
        setXp(gameDone("sort", mistakes === 0 ? 1 : 0, mistakes === 0 ? 15 : 10));
        if (mistakes === 0) fireConfetti();
      }
      setIndex(index + 1);
    } else {
      if (island.sound) playSound("wrong");
      setMistakes((m) => m + 1);
      setNote(`再想想：「${items[index][0]}」不屬於「${set.bins[bin]}」`);
    }
  }
  if (!set)
    return (
      <GameFrame game={game}>
        <SetPicker sets={byCloseness(sortSets, island.grade || 3)} onPick={start} label="選一個題目：" />
      </GameFrame>
    );
  if (xp !== null)
    return (
      <GameFrame game={game}>
        <Finish emoji="🗂️" title={mistakes ? `完成！修正了 ${mistakes} 次` : "全部一次就對！"} detail={`${set.title}分類完成。`} xp={xp} onAgain={() => setSet(null)} />
      </GameFrame>
    );
  return (
    <GameFrame game={game} right={<span className="isl-timer">{index + 1} / {items.length}</span>}>
      <p className="isl-game-title">{set.title}</p>
      <div className="isl-sort-card" aria-live="polite">{items[index][0]}</div>
      {note && <p className="isl-sort-note" role="status">{note}</p>}
      <div className="isl-sort-bins">
        {set.bins.map((bin, i) => (
          <button type="button" key={bin} onClick={() => choose(i)}>
            <span aria-hidden="true">{i === 0 ? "🏝️" : "⛰️"}</span>
            {bin}
          </button>
        ))}
      </div>
    </GameFrame>
  );
}

function Order({ game }) {
  const { island, gameDone } = useIsland();
  const [set, setSet] = useState(null);
  const [pool, setPool] = useState([]);
  const [placed, setPlaced] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  const [wrong, setWrong] = useState(null);
  const [xp, setXp] = useState(null);
  function start(s) {
    setSet(s);
    setPool(shuffled(s.items));
    setPlaced([]);
    setMistakes(0);
    setXp(null);
  }
  function pick(item) {
    if (item === set.items[placed.length]) {
      const next = [...placed, item];
      setPlaced(next);
      setPool(pool.filter((x) => x !== item));
      if (island.sound) playSound("correct");
      if (next.length === set.items.length) {
        setXp(gameDone("order", mistakes === 0 ? 1 : 0, mistakes === 0 ? 15 : 10));
        if (mistakes === 0) fireConfetti();
      }
    } else {
      if (island.sound) playSound("wrong");
      setMistakes((m) => m + 1);
      setWrong(item);
      setTimeout(() => setWrong(null), 450);
    }
  }
  if (!set)
    return (
      <GameFrame game={game}>
        <SetPicker sets={byCloseness(orderSets, island.grade || 3)} onPick={start} label="選一列火車：" />
      </GameFrame>
    );
  if (xp !== null)
    return (
      <GameFrame game={game}>
        <Finish emoji="🚂" title={mistakes ? `發車！修正了 ${mistakes} 次` : "一次排對，準時發車！"} detail={set.items.join(" → ")} xp={xp} onAgain={() => setSet(null)} />
      </GameFrame>
    );
  return (
    <GameFrame game={game}>
      <p className="isl-game-title">{set.title}：點出下一節車廂</p>
      <ol className="isl-train" aria-label="已排好的車廂">
        <li className="engine" aria-hidden="true">🚂</li>
        {set.items.map((_, i) => (
          <li key={i} className={placed[i] ? "in" : ""}>{placed[i] || i + 1}</li>
        ))}
      </ol>
      <div className="isl-order-pool">
        {pool.map((item) => (
          <button type="button" key={item} className={wrong === item ? "shake" : ""} onClick={() => pick(item)}>{item}</button>
        ))}
      </div>
    </GameFrame>
  );
}

function Spell({ game }) {
  const { island, gameDone } = useIsland();
  const grade = Math.max(3, island.grade || 3);
  const makeWords = () => shuffled(spellWords.filter(([g]) => g <= grade && g >= Math.max(3, grade - 1))).slice(0, 5);
  const [words, setWords] = useState(makeWords);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState([]);
  const [wrong, setWrong] = useState(null);
  const [xp, setXp] = useState(null);
  const word = words[index];
  const tiles = useMemo(() => (word ? shuffled([...word[1]].map((ch, i) => ({ ch, i }))) : []), [word]);
  const say = () => speechEngine.speakMixed(word[1], { id: "spell", rate: 0.8 });
  useEffect(() => () => speechEngine.stop(), []);
  function tap(tile) {
    const expected = word[1][picked.length];
    if (tile.ch.toLowerCase() !== expected.toLowerCase()) {
      setWrong(tile.i);
      if (island.sound) playSound("wrong");
      setTimeout(() => setWrong(null), 400);
      return;
    }
    const next = [...picked, tile.i];
    setPicked(next);
    if (next.length === word[1].length) {
      if (island.sound) playSound("correct");
      setTimeout(() => {
        if (index + 1 === words.length) {
          setXp(gameDone("spell", words.length, 15));
          fireConfetti();
        } else {
          setIndex(index + 1);
          setPicked([]);
        }
      }, 600);
    }
  }
  if (xp !== null)
    return (
      <GameFrame game={game}>
        <Finish emoji="⛵" title="五個單字都拼好了！" detail={words.map((w) => w[1]).join("、")} xp={xp} onAgain={() => { setWords(makeWords()); setIndex(0); setPicked([]); setXp(null); }} />
      </GameFrame>
    );
  return (
    <GameFrame game={game} right={<span className="isl-timer">{index + 1} / {words.length}</span>}>
      <div className="isl-spell">
        <div className="isl-spell-pic" aria-hidden="true">{word[3]}</div>
        <p className="isl-spell-zh">{word[2]}</p>
        {"speechSynthesis" in window && (
          <button type="button" className="isl-read" onClick={say}><Volume2 size={17} aria-hidden="true" /> 聽發音</button>
        )}
        <div className="isl-spell-slots" aria-label={`已拼 ${picked.length} 個字母，共 ${word[1].length} 個`}>
          {[...word[1]].map((ch, i) => (
            <span key={i} className={i < picked.length ? "in" : ""}>{i < picked.length ? ch : ""}</span>
          ))}
        </div>
        <div className="isl-spell-tiles">
          {tiles.map((t) => (
            <button type="button" key={`${word[1]}-${t.i}`} className={wrong === t.i ? "shake" : ""} disabled={picked.includes(t.i)} onClick={() => tap(t)}>{t.ch}</button>
          ))}
        </div>
      </div>
    </GameFrame>
  );
}

function Boss({ game }) {
  const { island, progress, answer, gameDone } = useIsland();
  const [grade, setGrade] = useState(island.grade || 3);
  const [subject, setSubject] = useState("all");
  const [queue, setQueue] = useState(null);
  const [shields, setShields] = useState(3);
  const [cleared, setCleared] = useState(0);
  const [turn, setTurn] = useState(0);
  const [xp, setXp] = useState(null);
  const [won, setWon] = useState(false);
  const [size, setSize] = useState(8);
  const lastRight = useRef(false);
  const subjects = subjectsForGrade(grade);
  const TOTAL = 8;
  function start() {
    const pool = gardenLessons.filter((l) => l.grade === grade && (subject === "all" || l.subject === subject));
    // Mix in practised material first: a boss should test what was actually learned.
    const seen = pool.filter((l) => l.questions.some((q) => progress.records[q.key]));
    const rest = pool.filter((l) => !seen.includes(l));
    const chosen = [...shuffled(seen), ...shuffled(rest)].slice(0, TOTAL);
    const picked = shuffled(chosen.map((l) => l.questions[Math.floor(Math.random() * l.questions.length)]));
    setQueue(picked);
    setSize(picked.length);
    setShields(3);
    setCleared(0);
    setTurn(0);
    setXp(null);
  }
  if (!queue)
    return (
      <GameFrame game={game}>
        <div className="isl-game-start">
          <div className="isl-big-emoji" aria-hidden="true">🐙</div>
          <p>打敗 8 題章魚島主！答錯會失去一面盾牌，那題還會再回來，讓你弄懂它。</p>
          <div className="isl-map-grades" role="group" aria-label="選擇年級">
            {gradeNames.map((name, i) => (
              <button type="button" key={name} className={grade === i + 1 ? "on" : ""} aria-pressed={grade === i + 1} onClick={() => { setGrade(i + 1); setSubject("all"); }}>
                {name}<small>年級</small>
              </button>
            ))}
          </div>
          <div className="isl-chips" role="group" aria-label="選擇科目">
            <button type="button" className={subject === "all" ? "on" : ""} aria-pressed={subject === "all"} onClick={() => setSubject("all")}>全部科目</button>
            {subjects.map((s) => (
              <button type="button" key={s.id} className={subject === s.id ? "on" : ""} style={subjectVars(s)} aria-pressed={subject === s.id} onClick={() => setSubject(s.id)}>{s.name}</button>
            ))}
          </div>
          <button type="button" className="isl-btn isl-btn-wide" onClick={start}>開始挑戰</button>
        </div>
      </GameFrame>
    );
  if (xp !== null)
    return (
      <GameFrame game={game}>
        <Finish emoji={won ? "🏆" : "🐙"} title={won ? "你打敗島主了！" : "盾牌用完了，島主逃走了"} detail={won ? `還留著 ${shields} 面盾牌。` : "答錯的題目已排進複習，弄懂後再回來挑戰。"} xp={xp} onAgain={() => setQueue(null)} />
      </GameFrame>
    );
  const q = queue[0];
  return (
    <GameFrame game={game} right={<span className="isl-shields" role="img" aria-label={`剩 ${shields} 面盾牌`}>{Array.from({ length: 3 }, (_, i) => <Shield key={i} size={20} fill={i < shields ? "currentColor" : "none"} aria-hidden="true" />)}</span>}>
      <div className="isl-boss-bar" role="progressbar" aria-label="島主血量" aria-valuemin={0} aria-valuemax={size} aria-valuenow={size - cleared}>
        <span style={{ width: `${((size - cleared) / size) * 100}%` }} />
        <em aria-hidden="true">🐙</em>
      </div>
      <QuestionCard
        key={`${q.key}-${turn}`}
        question={q}
        showHint={false}
        nextLabel="繼續"
        onAnswered={(correct) => {
          answer(q, correct);
          lastRight.current = correct;
          if (correct) setCleared((c) => c + 1);
          else setShields((s) => s - 1);
        }}
        onNext={() => {
          const next = lastRight.current ? queue.slice(1) : [...queue.slice(1), q];
          if (next.length === 0 || shields <= 0) {
            const victory = next.length === 0;
            setWon(victory);
            setXp(gameDone("boss", victory ? 1 : 0, victory ? 30 : 10));
            if (victory) fireConfetti({ particleCount: 150 });
            return;
          }
          setQueue(next);
          setTurn((t) => t + 1);
        }}
      />
    </GameFrame>
  );
}

const components = { rocket: Rocket, match: Match, sort: Sort, order: Order, spell: Spell, boss: Boss };

export default function GamesPage({ gameId }) {
  const { island } = useIsland();
  const navigate = useNavigate();
  const game = catalog.find((g) => g.id === gameId);
  useEffect(() => {
    document.title = `${game ? game.name : "遊戲島"}｜小小學習島`;
  }, [game]);
  if (game) {
    const Game = components[game.id];
    return <Game game={game} />;
  }
  function surpriseGame() {
    const pick = catalog[Math.floor(Math.random() * catalog.length)];
    navigate(`/games/${pick.id}`);
  }
  return (
    <div className="isl-games">
      <div className="isl-section-head">
        <h1>遊戲島</h1>
        <button type="button" className="isl-btn-soft" onClick={surpriseGame}>🎲 隨機驚喜挑戰</button>
      </div>
      <p className="isl-lead">用玩的把觀念練熟。遊戲經驗每天有上限，別忘了也要學新課喔！</p>
      <ul className="isl-game-list">
        {catalog.map((g) => (
          <li key={g.id}>
            <Link to={`/games/${g.id}`} style={{ "--tone": g.tone }}>
              <span className="isl-game-emoji" aria-hidden="true">{g.emoji}</span>
              <b>{g.name}</b>
              <small>{g.desc}</small>
              <em>{g.tag}{island.best[g.id] ? " · 玩過" : ""}</em>
              {island.best[g.id] > 0 && <Check className="isl-game-done" size={18} aria-hidden="true" />}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
