import { useEffect, useState } from 'react';
import { podcastFeedUrl } from '../data';

function parseItem(item) {
  const text = (selector) => item.querySelector(selector)?.textContent?.trim() || '';
  const durationText = item.getElementsByTagName('itunes:duration')[0]?.textContent?.trim() || '';
  const duration = Number(durationText) || 0;
  const minutes = Math.floor(duration / 60);
  const seconds = String(duration % 60).padStart(2, '0');

  return {
    title: text('title'),
    link: text('link'),
    pubDate: text('pubDate'),
    audioUrl: item.querySelector('enclosure')?.getAttribute('url') || '',
    duration: duration ? `${minutes}:${seconds}` : '',
  };
}

export default function usePodcastFeed(limit = 5) {
  const [episodes, setEpisodes] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    fetch(podcastFeedUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`Feed request failed: ${res.status}`);
        return res.text();
      })
      .then((xml) => {
        if (cancelled) return;
        const doc = new DOMParser().parseFromString(xml, 'application/xml');
        if (doc.querySelector('parsererror')) throw new Error('Feed could not be parsed');
        const items = Array.from(doc.querySelectorAll('item')).slice(0, limit).map(parseItem);
        setEpisodes(items);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { episodes, status };
}
