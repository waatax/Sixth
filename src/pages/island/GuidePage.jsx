import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { curriculumSources, gardenLessons, gardenSubjects, subjectsForGrade } from "../../data/elementaryGarden.js";
import { mathOfficial } from "../../data/garden/mathOfficial.js";
import { gradeNames } from "./parts.jsx";

const questionCount = gardenLessons.reduce((n, l) => n + l.questions.length, 0);

export default function GuidePage() {
  useEffect(() => {
    document.title = "給家長與老師｜小小學習島";
  }, []);
  const byCode = useMemo(() => {
    const map = {};
    for (const lesson of gardenLessons) for (const code of lesson.codes) (map[code] ||= []).push(lesson);
    return map;
  }, []);
  const mathRows = Object.values(mathOfficial).flat();
  const mathCovered = mathRows.filter(([code]) => byCode[code]).length;
  const scienceCodes = [...new Set(gardenLessons.filter((l) => l.subject === "science").flatMap((l) => l.codes))];
  return (
    <div className="isl-guide">
      <h1>給家長與老師</h1>
      <p className="isl-lead">這裡說明本站實際涵蓋什麼、怎麼對應不同版本的課本，以及還沒做到的地方。</p>

      <section className="isl-card">
        <h2>怎麼對應康軒、南一、翰林等版本？</h2>
        <p>
          國小各審定版本教科書都依同一份 108 課綱編寫，只是單元順序與名稱不同。本站用<b>課綱學習內容</b>與<b>觀念</b>當骨架，而不複製任何出版社的課文、插圖或習作。
        </p>
        <ol className="isl-guide-steps">
          <li><b>看課本單元名稱或裡面的觀念</b>，例如「分數的加減」。</li>
          <li><b>到<Link to="/map">學習地圖</Link>搜尋</b>，輸入觀念或課綱代碼（例如 N-4-5）。</li>
          <li><b>學完微課做挑戰</b>，再回到課本與學校作業。</li>
        </ol>
        <p className="isl-note">
          本站<b>尚未逐冊核對各版本的課名、頁碼與進度</b>，年級安排只是建議起點；每學年審定與學校選用版本會不同，請以學校課本與下方官方查詢為準。
        </p>
      </section>

      <section className="isl-card">
        <h2>目前涵蓋範圍（共 {gardenLessons.length} 課、{questionCount} 題）</h2>
        <div className="isl-table-wrap">
          <table className="isl-table">
            <caption className="sr-only">各年級各科微課數量</caption>
            <thead>
              <tr>
                <th scope="col">領域</th>
                {gradeNames.map((g) => <th key={g} scope="col">{g}</th>)}
                <th scope="col">合計</th>
              </tr>
            </thead>
            <tbody>
              {gardenSubjects.map((s) => {
                const counts = gradeNames.map((_, i) => (subjectsForGrade(i + 1).some((x) => x.id === s.id) ? gardenLessons.filter((l) => l.grade === i + 1 && l.subject === s.id).length : null));
                return (
                  <tr key={s.id}>
                    <th scope="row">{s.name}</th>
                    {counts.map((c, i) => <td key={i}>{c === null ? "–" : c}</td>)}
                    <td><b>{counts.reduce((a, b) => a + (b || 0), 0)}</b></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ul className="isl-guide-list">
          <li><b>數學：</b>領綱國小 {mathRows.length} 條學習內容，{mathCovered} 條都有對應微課（部分條目在領綱中重複編碼）。</li>
          <li><b>自然：</b>{scienceCodes.length} 條學習內容有對應微課，是代表性主題，<b>不是全部條目</b>。</li>
          <li><b>國語、英語、社會、藝術、健體、綜合、生活：</b>依學習階段挑選的代表性主題，<b>未逐條對應課綱，也不是完整課程</b>。</li>
          <li><b>尚未涵蓋：</b>本土語文、新住民語文、科技與校訂課程；口說、創作、動作與合作需要實作評量。</li>
          <li><b>小六深入教材：</b>另有<Link to="/practice">八科 64 單元與題庫</Link>、<Link to="/exam-notes">段考講義</Link>；這批舊內容尚未全部重新編審。</li>
        </ul>
      </section>

      <section className="isl-card">
        <h2>數學課綱條目對照</h2>
        <p>點開年級，可以看到每個條目對應的微課。</p>
        {Object.entries(mathOfficial).map(([grade, rows]) => (
          <details key={grade} className="isl-details">
            <summary>{gradeNames[grade - 1]}年級（{rows.length} 條）</summary>
            <ul className="isl-code-list">
              {rows.map(([code, title]) => (
                <li key={code}>
                  <code>{code}</code>
                  <span>{title}</span>
                  {byCode[code]?.map((l) => <Link key={l.id} to={`/explore/${l.id}`}>{l.title}</Link>)}
                </li>
              ))}
            </ul>
          </details>
        ))}
      </section>

      <section className="isl-card">
        <h2>學習與遊戲設計</h2>
        <ul className="isl-guide-list">
          <li><b>看圖 → 回想 → 應用：</b>每課先用圖解與例子建立理解，再用題目提取記憶。</li>
          <li><b>間隔複習：</b>依作答安排 1、3、7、14 天回顧；提前重做不會增加跨日熟練，也只給少量經驗。</li>
          <li><b>不懲罰錯誤：</b>答錯也有經驗，沒有公開排名；連續天數允許休息一天，避免孩子為了不斷火而焦慮。</li>
          <li><b>控制遊玩時間：</b>遊戲經驗每天有上限，引導孩子回到學習。</li>
          <li><b>隱私：</b>免登入、無廣告，不蒐集學生資料，紀錄只留在這個瀏覽器，可下載 CSV。</li>
        </ul>
        <p className="isl-note">本站尚未進行學習成效研究或學生實測，也未經專家委員會審查。內容由 AI 協助撰寫，雖經自動與人工檢查，仍可能有錯，發現問題歡迎回報。小考不是正式學力評量。</p>
      </section>

      <section className="isl-card">
        <h2>官方資料</h2>
        <ul className="isl-sources">
          {curriculumSources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noreferrer">{s.title} <ExternalLink size={14} aria-hidden="true" /></a>
              <span>{s.note}</span>
            </li>
          ))}
          <li>
            <a href="https://adl.edu.tw/" target="_blank" rel="noreferrer">教育部因材網 <ExternalLink size={14} aria-hidden="true" /></a>
            <span>更多學習重點與數位資源</span>
          </li>
        </ul>
        <small className="isl-set-note">課綱條目查核日：2026-11-03。</small>
      </section>

      <Link to="/" className="isl-btn">回學習島 <ArrowRight size={18} aria-hidden="true" /></Link>
    </div>
  );
}
