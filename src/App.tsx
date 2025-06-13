// App.tsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from './components/Projects/Projects';
import ClientReviews from './components/ClientReviews';
import Contact from './components/Contact/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import RunningText from './components/RunningText';

function App() {
  return (
    <div className="text-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <ClientReviews />
            <Contact />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <RunningText />
      <WhatsAppButton />
    </div>
  );
}

export default App;
