import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import EventsPage from './pages/EventsPage';
import MissionsPage from './pages/MissionsPage';
import SermonsPage from './pages/SermonsPage';
import PodcastPage from './pages/PodcastPage';
import FindUsPage from './pages/FindUsPage';
import GivePage from './pages/GivePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="missions" element={<MissionsPage />} />
          <Route path="sermons" element={<SermonsPage />} />
          <Route path="podcast" element={<PodcastPage />} />
          <Route path="find-us" element={<FindUsPage />} />
          <Route path="give" element={<GivePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
