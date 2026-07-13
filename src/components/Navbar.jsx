import { useState } from 'react';
import { StarOfDavid } from './icons';
import { nav } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce-bar">
        <div className="container">
          <span>
            <strong>VBS 2026</strong> registration is open
          </span>
          <span className="sep">•</span>
          <span>Give via Zelle: roehisraeldenver@gmail.com</span>
        </div>
      </div>

      <header className="navbar">
        <div className="container">
          <a className="brand" href="#home">
            <span className="brand-mark">
              <StarOfDavid stroke="#dabb52" />
            </span>
            <span className="brand-text">
              <span className="name">Congregation Roeh Israel</span>
              <span className="hebrew-name">רועה ישראל</span>
              <span className="tagline">A Messianic Jewish Congregation</span>
            </span>
          </a>

          <nav className="nav-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <a className="btn btn-outline btn-sm" href="#find-us">
              Contact
            </a>
            <a className="btn btn-primary btn-sm" href="#give">
              Give
            </a>
            <button
              className="nav-toggle"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <nav className={`mobile-links ${open ? 'open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#give" onClick={() => setOpen(false)}>
            Give
          </a>
        </nav>
      </header>
    </>
  );
}
