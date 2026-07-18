import { useEffect, useState } from 'react';
import { unreachedGroup as fallback } from '../data';

export default function useUnreachedGroup() {
  const [group, setGroup] = useState(fallback);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;

    fetch('/api/unreached-group')
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;
        if (!data.name || !data.href) throw new Error('Incomplete response');
        setGroup(data);
        setStatus('ready');
      })
      .catch(() => {
        if (!cancelled) {
          setGroup(fallback);
          setStatus('fallback');
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { group, status };
}
