import { events } from '../data';

export default function Events() {
  return (
    <section className="events" id="events">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What's coming up</span>
          <h2>Events &amp; Gatherings</h2>
        </div>

        <div className="event-grid">
          <div className="event-feature">
            <span className="tag">July 6–9 · 9 AM–12 PM</span>
            <h3>Vacation Bible School 2026</h3>
            <p>
              A week of Scripture, songs, and community for our youngest members.
              Registration forms and full details are on our VBS page.
            </p>
            <a
              className="btn btn-primary btn-sm"
              href="https://roehisrael.org/vbs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ alignSelf: 'flex-start' }}
            >
              Register for VBS
            </a>
          </div>

          <div className="event-list">
            {events.map((e) => (
              <div className="event-row" key={e.title}>
                <div className="event-date">
                  <span className="mon">{e.month}</span>
                  <span className="day">{e.day}</span>
                </div>
                <div>
                  <h4>{e.title}</h4>
                  <p>{e.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
