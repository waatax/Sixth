import { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { getReviewVideos, reviewPlaylistUrl, reviewVideoWatchUrl } from '../../data/reviewVideos';
import './ExamReviewVideos.css';

const editions = [
  { id: 'aligned', name: '課綱對齊版' },
  { id: 'full', name: '長篇重點複習' }
];

function formatRuntime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

function ExamVideoCard({ group, title }) {
  const [edition, setEdition] = useState(editions[0]);
  const [playing, setPlaying] = useState(false);
  const video = group[edition.id];
  const videoTitle = `${title} ${edition.name}`;

  return (
    <article className="review-video-card">
      <h3>{title}</h3>
      <div className="review-video-editions" role="group" aria-label={`${group.exam}影片版本`}>
        {editions.map((choice) => (
          <button key={choice.id} type="button" aria-pressed={choice.id === edition.id}
            onClick={() => {
              if (choice.id !== edition.id) {
                setEdition(choice);
                setPlaying(false);
              }
            }}>
            <span>{choice.name}</span>
            <span className="review-video-runtime">{formatRuntime(group[choice.id].seconds)}</span>
          </button>
        ))}
      </div>

      <div className="review-video-player">
        {playing ? (
          <iframe src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1`}
            title={videoTitle} allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : (
          <button type="button" className="review-video-poster" onClick={() => setPlaying(true)}
            aria-label={`播放 ${videoTitle}`}>
            <span className="review-video-play"><Play size={22} fill="currentColor" aria-hidden="true" /></span>
            <span>播放影片</span>
          </button>
        )}
      </div>

      <a className="review-video-watch" href={reviewVideoWatchUrl(video.id)}
        target="_blank" rel="noopener noreferrer" aria-label={`在 YouTube 觀看 ${videoTitle}（另開分頁）`}>
        在 YouTube 觀看 <ExternalLink size={15} aria-hidden="true" />
      </a>
    </article>
  );
}

export default function ExamReviewVideos({ subject, semester, scope, subjectName }) {
  const groups = getReviewVideos(subject, semester, scope);
  if (!groups.length) return null;
  const term = semester === '6A' ? '六上' : '六下';

  return (
    <section id="review-videos" className="review-videos no-print" aria-labelledby="review-videos-title">
      <div className="review-videos-heading">
        <div>
          <h2 id="review-videos-title">段考複習影片</h2>
          <p>先看課綱對齊版。遇到題目，暫停寫下答案和理由。需要多練時，再看長篇重點複習或接著做下方講義練習。</p>
        </div>
        <a href={reviewPlaylistUrl} target="_blank" rel="noopener noreferrer">
          YouTube 播放清單 <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="review-video-grid">
        {groups.map((group) => (
          <ExamVideoCard key={group.aligned.id} group={group} title={`${term}${subjectName}・${group.exam}`} />
        ))}
      </div>
      <p className="review-videos-note">影片來源為 WL 學習頻道。實際段考範圍以老師公告為準。</p>
    </section>
  );
}
