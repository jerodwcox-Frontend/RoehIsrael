import { contact, paypalDonateUrl } from '../data';
import { HeartIcon, MenorahIcon } from './icons';

export default function Give({ showHeading = true }) {
  return (
    <section className="give" id="give">
      <MenorahIcon className="give-menorah" strokeWidth="0.7" />
      <div className="container">
        {showHeading && (
          <div className="section-head centered">
            <span className="eyebrow">
              <HeartIcon width="14" height="14" style={{ marginRight: '0.25rem' }} />
            </span>
            <h2>Support the Congregation</h2>
            <span className="hebrew-accent">צדקה — Tzedakah</span>
            <p>
              Your generosity keeps our doors open and our ministries running. Give in
              the way that's easiest for you.
            </p>
          </div>
        )}

        <div className="give-grid">
          <div className="give-card">
            <h3>Give via Zelle</h3>
            <p>Send directly from your banking app — no fees, funds arrive instantly.</p>
            <span className="code">{contact.zelle}</span>
          </div>

          <div className="give-card">
            <h3>Give via Card or PayPal</h3>
            <p>Use a debit card, credit card, or your PayPal balance for a one-time or recurring gift.</p>
            <a
              className="btn btn-primary"
              href={paypalDonateUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ alignSelf: 'flex-start' }}
            >
              Donate via PayPal
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
