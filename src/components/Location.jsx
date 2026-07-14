import { officeHours, contact } from '../data';
import { PinIcon, MailIcon, PhoneIcon, ClockIcon } from './icons';

export default function Location({ showHeading = true }) {
  return (
    <section className="location" id="find-us">
      <div className="container">
        <div>
          {showHeading && (
            <div className="section-head">
              <span className="eyebrow">Find us</span>
              <h2>Visit Us in Denver</h2>
              <p>We'd love to welcome you in person. Here's everything you need to plan your visit.</p>
            </div>
          )}

          <div className="info-list">
            <div className="info-item">
              <span className="icon">
                <PinIcon width="20" height="20" />
              </span>
              <div>
                <h4>Address</h4>
                {contact.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <MailIcon width="20" height="20" />
              </span>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <PhoneIcon width="20" height="20" />
              </span>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon">
                <ClockIcon width="20" height="20" />
              </span>
              <div className="hours-table" style={{ marginTop: '0.25rem' }}>
                <h4>Office Hours</h4>
                {officeHours.map((h) => (
                  <div className={`hours-row ${h.closed ? 'closed' : ''}`} key={h.day}>
                    <span className="day">{h.day}</span>
                    <span className="time">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="map-frame">
          <iframe
            title="Congregation Roeh Israel map"
            src="https://www.google.com/maps?q=8556+East+Warren+Avenue+Unit+1+Denver+Colorado+80231&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
