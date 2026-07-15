import { Link } from 'react-router-dom';
import { nav, contact, social } from '../data';
import { StarOfDavid, FacebookIcon, YoutubeIcon, XIcon, PlayIcon } from './icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <span className="brand-mark">
                <StarOfDavid stroke="#dabb52" />
              </span>
              <span className="brand-text">
                <span className="name">Congregation Roeh Israel</span>
                <span className="hebrew-name">רועה ישראל</span>
              </span>
            </Link>
            <p>A Messianic Jewish Congregation in Denver, Colorado — welcoming Jew and Gentile alike since 1980.</p>
            <div className="footer-social">
              <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon width="16" height="16" />
              </a>
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                <XIcon width="16" height="16" />
              </a>
              <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon width="16" height="16" />
              </a>
              <a href={social.rumble} target="_blank" rel="noopener noreferrer" aria-label="Rumble">
                <PlayIcon width="16" height="16" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
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
