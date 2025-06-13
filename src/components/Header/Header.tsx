// components/Header.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'our-works', 'services', 'reviews', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {  
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = href.substring(1);
      setActiveSection(section);
      
      const element = document.getElementById(section);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'our-works', label: 'Our Works' },
  { id: 'reviews', label: 'Reviews' },
];

  return (
    <>
      <SocialLinks />

      <nav
        className={`fixed w-full py-4 px-6 lg:px-12 flex justify-between items-center z-50 transition-all duration-500 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        {/* Empty div to maintain flex spacing */}
        <div className="w-[40px]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-6"
        >
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <a 
                href={`#${item.id}`}
                className={`nav-link px-3 py-2 text-white/90 hover:text-[#C4A962] transition-all duration-300 text-sm uppercase tracking-wider font-medium ${
                  activeSection === item.id ? 'text-[#C4A962]' : ''
                }`}
                onClick={handleNavClick}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span 
                    layoutId="nav-underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-[#C4A962]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            </div>
          ))}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-gradient-to-r from-[#C4A962] to-[#E8D9A6] text-gray-900 uppercase tracking-wider text-xs font-bold hover:bg-white transition-all duration-300 rounded-full ml-2 border border-transparent hover:border-[#C4A962] shadow-lg hover:shadow-[#C4A962]/30"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </motion.div>
        </motion.div>

        <motion.button 
          className="md:hidden p-2 rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <X size={28} className="text-[#C4A962] stroke-[2.5]" />
          ) : (
            <Menu size={28} className="text-[#C4A962] stroke-[2.5]" />
          )}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} activeSection={activeSection} />}
      </AnimatePresence>
    </>
  );
}
