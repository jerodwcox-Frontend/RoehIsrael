import { nav, contact } from '../data';
import { StarOfDavid, FacebookIcon, YoutubeIcon, XIcon } from './icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark">
                <StarOfDavid stroke="#dabb52" />
              </span>
              <span className="brand-text">
                <span className="name">Congregation Roeh Israel</span>
                <span className="hebrew-name">רועה ישראל</span>
              </span>
            </a>
            <p>A Messianic Jewish Congregation in Denver, Colorado — welcoming Jew and Gentile alike since 1980.</p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <FacebookIcon width="16" height="16" />
              </a>
              <a href="#" aria-label="YouTube">
                <YoutubeIcon width="16" height="16" />
              </a>
              <a href="#" aria-label="X">
                <XIcon width="16" height="16" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>{contact.address.join(', ')}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Congregation Roeh Israel. All rights reserved.</span>
          <span>Redesign concept — original content courtesy roehisrael.org</span>
        </div>
      </div>
    </footer>
  );
}
