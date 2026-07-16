import { Link } from 'react-router-dom';
import { sermonSources } from '../data';
import { YoutubeIcon, PlayIcon, FacebookIcon, XIcon } from './icons';
import usePodcastFeed from '../hooks/usePodcastFeed';

const icons = { youtube: YoutubeIcon, rumble: PlayIcon, facebook: FacebookIcon, twitter: XIcon };

function formatDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function Sermons({ showHeading = true }) {
  const { episodes, status } = usePodcastFeed(1);
  const latest = episodes[0];

  return (
    <section className="missions" id="sermons">
      <div className="container">
        {showHeading && (
          <div className="section-head centered">
            <span className="eyebrow">Watch &amp; listen</span>
            <h2>Lessons &amp; Sermons</h2>
            <span className="hebrew-accent">תורה ולימוד</span>
            <p>
              Can't make it in person? Catch the latest teaching wherever you already
              are — new sermons and lessons are posted after every service.
            </p>
          </div>
        )}

        {status === 'ready' && latest && (
          <div className="podcast-latest sermons-latest">
            <span className="icon">
              <PlayIcon width="26" height="26" />
            </span>
            <div className="podcast-latest-text">
              <span className="podcast-tag">Latest Sermon</span>
              <h3>{latest.title}</h3>
              <p>{formatDate(latest.pubDate)}</p>
            </div>
            <Link className="btn btn-outline btn-sm podcast-external" to="/podcast">
              Listen Now
            </Link>
          </div>
        )}

        <div className="missions-grid">
          {sermonSources.map((s) => {
            const Icon = icons[s.key];
            return (
              <div className="mission-card" key={s.key}>
                <span className="icon">
                  <Icon width="22" height="22" />
                </span>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
                <a
                  className="btn btn-outline btn-sm"
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {s.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
