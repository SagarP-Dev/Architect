import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="bg-black text-white relative">
      <Header />
      <Hero />
      <Projects />
      <Services />
      {/* Add more sections here as needed */}
    </div>
  );
}

export default App;