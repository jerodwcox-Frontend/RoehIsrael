import usePodcastFeed from '../hooks/usePodcastFeed';
import { podcastChannelUrl } from '../data';
import { PlayIcon } from './icons';

function formatDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function Podcast({ showHeading = true }) {
  const { episodes, status } = usePodcastFeed(5);
  const [latest, ...older] = episodes;

  return (
    <section className="podcast">
      <div className="container">
        {showHeading && (
          <div className="section-head centered">
            <span className="eyebrow">Listen anytime</span>
            <h2>The Roeh Israel Podcast</h2>
            <span className="hebrew-accent">האזנה</span>
            <p>
              Every message from Burt Yellin and our guest speakers, posted automatically
              as soon as it's live — this always shows our latest episode.
            </p>
          </div>
        )}

        {status === 'loading' && <p className="podcast-status">Loading the latest episode…</p>}

        {status === 'error' && (
          <div className="podcast-fallback">
            <p>We couldn't load the episode list right now.</p>
            <a className="btn btn-primary btn-sm" href={podcastChannelUrl} target="_blank" rel="noopener noreferrer">
              Listen on Podbean
            </a>
          </div>
        )}

        {status === 'ready' && latest && (
          <>
            <div className="podcast-latest">
              <span className="icon">
                <PlayIcon width="26" height="26" />
              </span>
              <div className="podcast-latest-text">
                <span className="podcast-tag">Latest episode</span>
                <h3>{latest.title}</h3>
                <p>
                  {formatDate(latest.pubDate)}
                  {latest.duration && ` · ${latest.duration}`}
                </p>
              </div>
              <a
                className="btn btn-outline btn-sm podcast-external"
                href={latest.link || podcastChannelUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Podbean
              </a>
              {latest.audioUrl && (
                <audio className="podcast-player" controls preload="none" src={latest.audioUrl}>
                  Your browser doesn't support inline audio —{' '}
                  <a href={latest.link}>listen on Podbean instead</a>.
                </audio>
              )}
            </div>

            {older.length > 0 && (
              <div className="podcast-list">
                {older.map((ep) => (
                  <a
                    className="podcast-row"
                    key={ep.link}
                    href={ep.link || podcastChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <PlayIcon width="16" height="16" />
                    </span>
                    <span className="podcast-row-text">
                      <span className="title">{ep.title}</span>
                      <span className="meta">
                        {formatDate(ep.pubDate)}
                        {ep.duration && ` · ${ep.duration}`}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
