import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MessianicStar } from './icons';
import { nav } from '../data';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="announce-bar">
        <div className="container">
          <span>Give via Zelle: roehisraeldenver@gmail.com</span>
        </div>
      </div>

      <header className="navbar">
        <div className="container">
          <Link className="brand" to="/">
            <span className="brand-mark">
              <MessianicStar stroke="#dabb52" />
            </span>
            <span className="brand-text">
              <span className="name">Congregation Roeh Israel</span>
              <span className="hebrew-name">רועה ישראל</span>
              <span className="tagline">A Messianic Jewish Congregation</span>
            </span>
          </Link>

          <nav className="nav-links">
            {nav.map((item) =>
              item.external ? (
                <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="nav-cta">
            <Link className="btn btn-outline btn-sm" to="/find-us">
              Contact Us
            </Link>
            <Link className="btn btn-primary btn-sm" to="/give">
              Give
            </Link>
          </div>

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

        <nav className={`mobile-links ${open ? 'open' : ''}`}>
          {nav.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <NavLink key={item.href} to={item.href} end={item.href === '/'} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            )
          )}
          <Link to="/give" onClick={() => setOpen(false)}>
            Give
          </Link>
        </nav>
      </header>
    </>
  );
}
