import { missions, prayerBulletinUrl } from '../data';
import { PinIcon, StarOfDavid, HeartIcon, TorahIcon, BulletinIcon } from './icons';

const icons = [PinIcon, StarOfDavid, HeartIcon, TorahIcon];

export default function Missions({ showHeading = true }) {
  return (
    <section className="missions" id="missions">
      <div className="container">
        {showHeading && (
          <div className="section-head centered">
            <span className="eyebrow">Beyond our walls</span>
            <h2>Missions</h2>
            <span className="hebrew-accent">שליחות</span>
            <p>
              Roeh Israel exists to love G-d and love people — in our own neighborhood
              and to the ends of the earth. Here's where that plays out.
            </p>
          </div>
        )}

        <div className="missions-grid">
          {missions.map((m, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="mission-card" key={m.title}>
                <span className="icon">
                  <Icon width="22" height="22" />
                </span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="prayer-bulletin">
          <span className="icon">
            <BulletinIcon width="26" height="26" />
          </span>
          <div className="prayer-bulletin-text">
            <h3>This Week's Prayer/Mission Bulletin</h3>
            <p>Updated weekly — prayer requests, praise reports, and who to lift up in the coming days.</p>
          </div>
          <a
            className="btn btn-primary btn-sm"
            href={prayerBulletinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Bulletin
          </a>
        </div>
      </div>
    </section>
  );
}
