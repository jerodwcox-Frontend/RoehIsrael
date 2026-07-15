import PageBanner from '../components/PageBanner';
import Sermons from '../components/Sermons';

export default function SermonsPage() {
  return (
    <>
      <PageBanner
        hebrew="תורה ולימוד"
        eyebrow="Watch & listen"
        title="Lessons & Sermons"
        lede="Can't make it in person? Catch the latest teaching wherever you already are — new sermons and lessons are posted after every service."
      />
      <Sermons showHeading={false} />
    </>
  );
}
