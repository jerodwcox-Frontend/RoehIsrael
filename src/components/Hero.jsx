export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" />
      <div className="container">
        <div className="hero-content">
          <span className="eyebrow">Denver, Colorado</span>
          <h1>
            Come as you are, <em>find your place</em> in the family of{' '}
            <span style={{ whiteSpace: 'nowrap' }}>G-d</span>.
          </h1>
          <p className="lede">
            Roeh Israel is a congregation of Jewish and Gentile believers in Y'shua
            the Messiah — worshiping together, studying Torah, and building
            community since 1980.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#find-us">
              Plan Your Visit
            </a>
            <a className="btn btn-ghost" href="#services">
              Service Times
            </a>
          </div>

          <div className="hero-times">
            <div className="hero-time">
              <span className="dot" />
              <span>
                <span className="label">Erev Shabbat</span>
                <br />
                <span className="value">Fridays @ 7:00 PM</span>
              </span>
            </div>
            <div className="hero-time">
              <span className="dot" />
              <span>
                <span className="label">Shabbat Service</span>
                <br />
                <span className="value">Saturdays @ 9:45 AM</span>
              </span>
            </div>
            <div className="hero-time">
              <span className="dot" />
              <span>
                <span className="label">Time Zone</span>
                <br />
                <span className="value">Mountain Standard Time</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
