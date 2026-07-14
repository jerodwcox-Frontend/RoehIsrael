import PageBanner from '../components/PageBanner';
import Events from '../components/Events';

export default function EventsPage() {
  return (
    <>
      <PageBanner
        hebrew="מועדים"
        eyebrow="What's coming up"
        title="Events & Gatherings"
        lede="From VBS to Torah study to potlucks — here's what's on the calendar at Roeh Israel."
      />
      <Events showHeading={false} />
    </>
  );
}
