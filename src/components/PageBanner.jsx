export default function PageBanner({ hebrew, eyebrow, title, lede }) {
  return (
    <section className="page-banner">
      <div className="page-banner-media" />
      <div className="container">
        <div className="page-banner-content">
          {hebrew && <span className="hebrew-welcome">{hebrew}</span>}
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          {lede && <p className="lede">{lede}</p>}
        </div>
      </div>
    </section>
  );
}
