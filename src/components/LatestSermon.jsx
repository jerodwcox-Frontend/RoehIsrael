import { Link } from 'react-router-dom';
import { PlayIcon } from './icons';
import usePodcastFeed from '../hooks/usePodcastFeed';

function formatDate(pubDate) {
  const date = new Date(pubDate);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export default function LatestSermon({ className = '' }) {
  const { episodes, status } = usePodcastFeed(1);
  const latest = episodes[0];

  if (status !== 'ready' || !latest) return null;

  return (
    <div className={`podcast-latest sermons-latest ${className}`}>
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
  );
}
