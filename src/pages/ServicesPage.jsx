import PageBanner from '../components/PageBanner';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        hebrew="שבת שלום"
        eyebrow="Join us"
        title="Worship With Us This Week"
        lede="Every gathering is an open door — whether it's your first Shabbat or your three-hundredth, there's a seat for you."
      />
      <Services showHeading={false} />
    </>
  );
}
