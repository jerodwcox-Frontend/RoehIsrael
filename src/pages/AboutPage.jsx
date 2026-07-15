import PageBanner from '../components/PageBanner';
import About from '../components/About';

export default function AboutPage() {
  return (
    <>
      <PageBanner
        hebrew="הסיפור שלנו"
        eyebrow="Our Story"
        title="From a Living Room to a Congregation"
        lede="Roeh Israel has been a home for Jewish and Gentile believers in Y'shua since 1980 — this is how we got here."
      />
      <About showHeading={false} />
    </>
  );
}
