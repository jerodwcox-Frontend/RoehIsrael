import { Link } from 'react-router-dom';
import { quickLinks } from '../data';
import { MicIcon, PlayIcon, HandsIcon, CalendarIcon, HeartIcon, PinIcon } from './icons';

const icons = {
  sermons: MicIcon,
  podcast: PlayIcon,
  missions: HandsIcon,
  events: CalendarIcon,
  give: HeartIcon,
  'find-us': PinIcon,
};

export default function QuickLinks() {
  return (
    <div className="quick-links">
      <div className="container">
        {quickLinks.map((item) => {
          const Icon = icons[item.key];
          return (
            <Link className="quick-link" key={item.key} to={item.href}>
              <span className="quick-link-icon">
                <Icon width="20" height="20" />
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
