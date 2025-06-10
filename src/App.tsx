import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Background from './components/Background/Background';
import RunningText from './components/RunningText';

function App() {
  return (
    <div className="text-white">
      <Header />
      <Background>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <Services />
              <About />
              <Contact />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Background>
      <RunningText />
    </div>
  );
}

export default App;
