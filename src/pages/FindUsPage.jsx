import PageBanner from '../components/PageBanner';
import Location from '../components/Location';

export default function FindUsPage() {
  return (
    <>
      <PageBanner
        hebrew="ברוכים הבאים"
        eyebrow="Find us"
        title="Visit Us in Denver"
        lede="We'd love to welcome you in person. Here's everything you need to plan your visit."
      />
      <Location showHeading={false} />
    </>
  );
}
