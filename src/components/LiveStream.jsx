import { youtubeLiveEmbedUrl, social } from '../data';

export default function LiveStream() {
  return (
    <section className="live-stream">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Join us live</span>
          <h2>Watch the Service</h2>
          <p>
            This plays automatically whenever we're live — Erev Shabbat Fridays @ 7:00 PM and
            Shabbat Service Saturdays @ 9:45 AM MST. Otherwise, check back at service time.
          </p>
        </div>

        <div className="live-frame">
          <iframe
            src={youtubeLiveEmbedUrl}
            title="Roeh Israel — Live Service"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>

        <div className="live-links">
          <a className="btn btn-outline btn-sm" href={social.youtube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
          <a className="btn btn-outline btn-sm" href={social.facebookLive} target="_blank" rel="noopener noreferrer">
            Watch on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
