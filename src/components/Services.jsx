import { serviceTimes } from '../data';
import { CandleIcon, TorahIcon, KidsIcon } from './icons';

const icons = [CandleIcon, TorahIcon, KidsIcon];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">Join us</span>
          <h2>Worship With Us This Week</h2>
          <span className="hebrew-accent">שבת שלום</span>
          <p>
            Every gathering is an open door — whether it's your first Shabbat or your
            three-hundredth, there's a seat for you.
          </p>
        </div>

        <div className="service-grid">
          {serviceTimes.map((s, i) => {
            const Icon = icons[i];
            return (
              <div className={`service-card ${s.accent ? 'accent' : ''}`} key={s.title}>
                <span className="icon">
                  <Icon width="22" height="22" />
                </span>
                <h3>{s.title}</h3>
                <p className="when">{s.when}</p>
                <p className="desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
