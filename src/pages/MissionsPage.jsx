import PageBanner from '../components/PageBanner';
import Missions from '../components/Missions';

export default function MissionsPage() {
  return (
    <>
      <PageBanner
        hebrew="שליחות"
        eyebrow="Beyond our walls"
        title="Missions"
        lede="Roeh Israel exists to love G-d and love people — in our own neighborhood and to the ends of the earth."
      />
      <Missions showHeading={false} />
    </>
  );
}
