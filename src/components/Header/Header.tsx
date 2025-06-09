// components/Header.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Removed Instagram import since it's not used here
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

const Logo = () => {
  const [logoError, setLogoError] = useState(false);
  const logoPath = '/WhatsApp Image 2025-03-31 at 11.55.57_354e1db8.jpg';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C4A962] border-2 border-white/20 hover:border-[#C4A962] transition-all duration-300"
    >
      {!logoError ? (
        <img 
          src={logoPath}
          alt="Ecoscape Logo" 
          className="w-full h-full rounded-full object-cover p-1"
          onError={() => setLogoError(true)}
        />
      ) : (
        <span className="text-white font-bold text-xl tracking-tighter">EC</span>
      )}
    </motion.div>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {  
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
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

  return (
    <>
      <SocialLinks />

      <nav
        className={`fixed w-full py-4 px-6 lg:px-12 flex justify-between items-center z-40 transition-all duration-500 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
      >
        <Logo />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8"
        >
          {['home', 'our-works', 'services', 'about'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="nav-link text-white/90 hover:text-[#C4A962] transition-all duration-300 text-sm uppercase tracking-wider font-medium"
              onClick={handleNavClick}
            >
              {item === 'our-works' ? 'Our Works' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-[#C4A962] text-gray-900 uppercase tracking-wider text-xs font-bold hover:bg-white transition-all duration-300 rounded-full ml-4 border border-transparent hover:border-[#C4A962]"
            onClick={handleNavClick}
          >
            Contact
          </a>
        </motion.div>

        <button 
          className="md:hidden text-[#C4A962] p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-[#C4A962]" />
          )}
        </button>
      </nav>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}