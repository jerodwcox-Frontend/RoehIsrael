import { events } from '../data';

export default function Events({ showHeading = true }) {
  return (
    <section className="events" id="events">
      <div className="container">
        {showHeading && (
          <div className="section-head">
            <span className="eyebrow">What's coming up</span>
            <h2>Events &amp; Gatherings</h2>
          </div>
        )}

        <div className="event-grid">
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
