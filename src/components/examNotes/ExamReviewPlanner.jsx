import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function ExamReviewPlanner({notes, info}) {
  const [checked, setChecked] = useState({});
  const key = `${info.subjectId}-${info.semester}-${info.scope}`;
  const count = notes.filter(n=>checked[`${key}-${n.unitId}`]).length;
  return <section className="exam-review-planner no-print" aria-label="段考複習計畫">
    <div className="review-planner-heading"><div><small>EXAM REVIEW / 有方法地複習</small><h2>先確認範圍，再一步步練會</h2><p>讀懂觀念 → 遮住答案試做 → 找出錯因 → 隔日再回想</p></div><a href={info.pdfUrl} download={info.pdfFileName}>下載白底列印講義 ↓</a></div>
    <div className="review-planner-grid"><div><h3>本次單元自評 <span>{count}／{notes.length}</span></h3><p>能不看筆記說明並解題，再勾選；只記錄本頁自評，不代表正式學力判定。</p>{notes.map(n=><label key={n.unitId}><input type="checkbox" checked={!!checked[`${key}-${n.unitId}`]} onChange={e=>setChecked(c=>({...c,[`${key}-${n.unitId}`]:e.target.checked}))}/><span>{n.title}</span><Link to={`/lesson/${n.unitId}`}>補觀念 →</Link></label>)}</div><aside><h3>課本與課綱核對</h3><p>本站目前整理六年級八科 64 單元，提供 48 種學科／學期／範圍組合，另有 8 份畢業考相容檔。</p><p>康軒、南一、翰林及其他版本的冊次、頁碼與進度尚未逐一查核；不能視為完整覆蓋各版本或全部 108 課綱。請先比對學校公告，將缺少的課名另外列入複習。</p><a href="https://www.naer.edu.tw/PageSyllabus?fid=52" target="_blank" rel="noreferrer">查閱正式課綱 ↗</a><a href="https://textbooks.naer.edu.tw/" target="_blank" rel="noreferrer">查閱審定版本 ↗</a><p>PDF 採 A4 白底、無色塊；內含單元核對表與訂正留白。列印建議原尺寸或符合頁面。</p></aside></div>
  </section>;
}
