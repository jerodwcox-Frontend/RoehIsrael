import { aboutStats } from '../data';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-media">
          <span className="chai-badge" title="Chai — Life">חי</span>
          <div className="stat-badge">
            <span className="num">45+</span>
            <span className="cap">Years in Denver</span>
          </div>
          <span className="credit">
            Photo:{' '}
            <a href="https://www.flickr.com/photos/24298372@N04/3370866111" target="_blank" rel="noopener noreferrer">
              Lawrie Cate
            </a>
            , CC BY 2.0
          </span>
        </div>

        <div className="about-copy">
          <div className="section-head">
            <span className="eyebrow">Our story</span>
            <h2>From a Living Room to a Congregation of 300</h2>
          </div>
          <p>
            Eliezer Urbach started Roeh Israel while working for Chosen People
            Ministries. What began as a small home fellowship quickly outgrew his
            living room — and in 1980, moved by G-d, he launched Roeh Israel as an
            independent congregation.
          </p>
          <p>
            Burt Yellin was called to be Pastor/Rabbi in 1985 and still serves the
            Lord here today. Bill Berg joined as Associate Pastor in 1991, faithfully
            serving until he went home to the Lord in December 2018. What began as a
            handful of believers has grown to some 300 people.
          </p>

          <div className="about-stats">
            {aboutStats.map((s) => (
              <div className="stat" key={s.cap}>
                <div className="num">{s.num}</div>
                <div className="cap">{s.cap}</div>
              </div>
            ))}
          </div>

          <div className="about-caption">
            <span className="hebrew">עם ישראל חי</span>
            <span className="translit">Am Yisrael Chai — the people of Israel live</span>
          </div>
        </div>
      </div>
    </section>
  );
}
