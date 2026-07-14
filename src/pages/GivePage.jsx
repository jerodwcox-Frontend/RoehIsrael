import PageBanner from '../components/PageBanner';
import Give from '../components/Give';

export default function GivePage() {
  return (
    <>
      <PageBanner
        hebrew="צדקה"
        eyebrow="Give"
        title="Support the Congregation"
        lede="Your generosity keeps our doors open and our ministries running. Give in the way that's easiest for you."
      />
      <Give showHeading={false} />
    </>
  );
}
