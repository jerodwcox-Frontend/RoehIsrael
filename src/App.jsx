import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Events from './components/Events';
import Location from './components/Location';
import Give from './components/Give';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Events />
        <Location />
        <Give />
      </main>
      <Footer />
    </>
  );
}

export default App;
