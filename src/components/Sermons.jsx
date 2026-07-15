import { sermonSources } from '../data';
import { YoutubeIcon, PlayIcon, FacebookIcon, XIcon } from './icons';

const icons = { youtube: YoutubeIcon, rumble: PlayIcon, facebook: FacebookIcon, twitter: XIcon };

export default function Sermons({ showHeading = true }) {
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
