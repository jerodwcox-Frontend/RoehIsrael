import { Link } from 'react-router-dom';
import { exploreLinks } from '../data';
import { StarOfDavid, CandleIcon, HandsIcon, MicIcon, PlayIcon, PinIcon } from './icons';

const icons = {
  about: StarOfDavid,
  services: CandleIcon,
  missions: HandsIcon,
  sermons: MicIcon,
  podcast: PlayIcon,
  'find-us': PinIcon,
};

export default function Explore() {
  return (
    <section className="explore">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Get connected</span>
          <h2>Find Your Place at Roeh Israel</h2>
          <p>No matter where you're starting from, there's a next step here for you.</p>
        </div>

        <div className="explore-grid">
          {exploreLinks.map((item) => {
            const Icon = icons[item.key];
            return (
              <Link className="explore-card" key={item.key} to={item.href}>
                <span className="icon">
                  <Icon width="22" height="22" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="explore-more">Learn more →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
