import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

// Simple placeholder components for missing pages to prevent routing errors
const Placeholder = ({ title }) => (
  <div className="flex-1 flex items-center justify-center p-20">
    <h1 className="text-4xl font-bold text-primary">{title} Page Coming Soon</h1>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Placeholder title="About us" />} />
          <Route path="services" element={<Placeholder title="Services & Workshops" />} />
          <Route path="events" element={<Placeholder title="Gallery & Events" />} />
          <Route path="faq" element={<Placeholder title="FAQs" />} />
          <Route path="contact" element={<Placeholder title="Contact Us" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}