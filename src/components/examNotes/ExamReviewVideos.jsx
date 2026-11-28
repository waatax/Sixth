import { useRef, useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { getReviewVideos, reviewVideoWatchUrl } from '../../data/reviewVideos';
import { reviewChaptersByVideo } from '../../data/reviewVideoChapters';
import './ExamReviewVideos.css';

const editions = [
  { id: 'knowledge', name: '知識與解題' },
  { id: 'full', name: '完整段考複習' },
];

function formatRuntime(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

function ExamVideoCard({ group, title }) {
  const [edition, setEdition] = useState(editions[0]);
  const [playback, setPlayback] = useState(null);
  const player = useRef(null);
  const video = group[edition.id];
  const videoTitle = `${title} ${edition.name}`;
  const chapters = reviewChaptersByVideo[video.id];
  const play = (start) => {
    setPlayback((previous) => ({ start, key: (previous?.key ?? 0) + 1 }));
    if (start > 0) player.current?.scrollIntoView({ block: 'nearest' });
  };

  return (
    <article className="review-video-card">
      <h3>{title}</h3>
      <div className="review-video-editions" role="group" aria-label={`${group.exam}影片版本`}>
        {editions.map((choice) => (
          <button key={choice.id} type="button" aria-pressed={choice.id === edition.id}
            onClick={() => {
              if (choice.id !== edition.id) {
                setEdition(choice);
                setPlayback(null);
              }
            }}>
            <span>{choice.name}</span>
            <span className="review-video-runtime">{formatRuntime(group[choice.id].seconds)}</span>
          </button>
        ))}
      </div>

      {chapters && <p className="review-video-note">共 {chapters.units.length} 個單元、{chapters.questions} 題影片示範。</p>}
      <div className="review-video-player" ref={player}>
        {playback ? (
          <iframe key={playback.key} src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&playsinline=1&start=${playback.start}`}
            title={videoTitle} allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : (
          <button type="button" className="review-video-poster" onClick={() => play(0)}
            aria-label={`播放 ${videoTitle}`}>
            <span className="review-video-play"><Play size={22} fill="currentColor" aria-hidden="true" /></span>
            <span>播放影片</span>
          </button>
        )}
      </div>

      <a className="review-video-watch" href={reviewVideoWatchUrl(video.id, playback?.start)}
        target="_blank" rel="noopener noreferrer" aria-label={`在 YouTube 觀看 ${videoTitle}（另開分頁）`}>
        在 YouTube 觀看 <ExternalLink size={15} aria-hidden="true" />
      </a>
      {chapters && (
        <details className="review-video-chapters">
          <summary>依單元跳到觀念或題型</summary>
          <ol>
            {chapters.units.map(({ title: unitTitle, concept, practice }) => (
              <li key={concept}>
                <strong>{unitTitle}</strong>
                <div className="review-video-editions">
                  <button type="button" onClick={() => play(concept)}
                    aria-label={`播放 ${unitTitle} 觀念講解`}>觀念講解 <span className="review-video-runtime">{formatRuntime(concept)}</span></button>
                  <button type="button" onClick={() => play(practice)}
                    aria-label={`播放 ${unitTitle} 題型實戰`}>題型實戰 <span className="review-video-runtime">{formatRuntime(practice)}</span></button>
                </div>
              </li>
            ))}
          </ol>
        </details>
      )}
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
          <p>從「知識與解題」開始，依單元複習觀念、跟著例題練習。也可切換「完整段考複習」。</p>
        </div>
      </div>
      <div className="review-video-grid">
        {groups.map((group) => (
          <ExamVideoCard key={group.knowledge.id} group={group} title={`${term}${subjectName}・${group.exam}`} />
        ))}
      </div>
      <p className="review-videos-note">影片來源為 WL 學習頻道。實際段考範圍以老師公告為準。</p>
    </section>
  );
}
