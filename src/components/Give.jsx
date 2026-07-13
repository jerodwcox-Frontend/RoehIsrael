import { contact } from '../data';
import { HeartIcon } from './icons';

export default function Give() {
  return (
    <section className="give" id="give">
      <div className="container">
        <div className="section-head centered">
          <span className="eyebrow">
            <HeartIcon width="14" height="14" style={{ marginRight: '0.25rem' }} />
          </span>
          <h2>Support the Congregation</h2>
          <p>
            Your generosity keeps our doors open and our ministries running. Give in
            the way that's easiest for you.
          </p>
        </div>

        <div className="give-grid">
          <div className="give-card">
            <h3>Give via Zelle</h3>
            <p>Send directly from your banking app — no fees, funds arrive instantly.</p>
            <span className="code">{contact.zelle}</span>
          </div>

          <div className="give-card">
            <h3>Give via Card or PayPal</h3>
            <p>Use a debit card, credit card, or your PayPal balance for a one-time or recurring gift.</p>
            <a className="btn btn-primary" href="#give" style={{ alignSelf: 'flex-start' }}>
              Donate Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
