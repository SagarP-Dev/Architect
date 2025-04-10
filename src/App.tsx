import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Media from './components/Media/Media';
import Career from './components/Career/Career';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  useEffect(() => {
    
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-black text-white relative">
      <Header />
      <Hero />
      <Projects />
      <Services />
      <Media />
      <Career />
      <Blog />
      <About />
      <Contact />
    </div>
  );
}

export default App;