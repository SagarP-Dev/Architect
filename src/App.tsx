// App.tsx
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Background from './components/Background/Background';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="text-white">
      <Header />
      <Background>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </Background>
    </div>
  );
}

export default App;