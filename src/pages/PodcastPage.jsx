import PageBanner from '../components/PageBanner';
import Podcast from '../components/Podcast';

export default function PodcastPage() {
  return (
    <>
      <PageBanner
        hebrew="האזנה"
        eyebrow="Listen anytime"
        title="The Roeh Israel Podcast"
        lede="Every message from Burt Yellin and our guest speakers, posted automatically as soon as it's live — this always shows our latest episode."
      />
      <Podcast showHeading={false} />
    </>
  );
}
