import Hero from '../components/Hero';
import LatestSermon from '../components/LatestSermon';
import Services from '../components/Services';
import About from '../components/About';
import Events from '../components/Events';
import Location from '../components/Location';
import Give from '../components/Give';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="latest-sermon-home">
        <div className="container">
          <LatestSermon />
        </div>
      </section>
      <Services />
      <About />
      <Events />
      <Location />
      <Give />
    </>
  );
}
