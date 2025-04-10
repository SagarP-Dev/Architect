import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
      className="flex items-center justify-center w-16 h-16 rounded-full bg-[#C4A962]"
    >
      {!logoError ? (
        <img 
          src={logoPath}
          alt="Company Logo" 
          className="w-full h-full rounded-full object-cover"
          onError={() => setLogoError(true)}
        />
      ) : (
        <span className="text-white font-bold text-xl">SB</span>
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
        className={`fixed w-full py-6 px-6 lg:px-12 flex justify-between items-center z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
        }`}
      >
        <Logo />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-12"
        >
          {['home', 'projects', 'services', 'about'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="nav-link text-white hover:text-[#C4A962] transition-colors duration-300" 
              onClick={handleNavClick}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 bg-[#C4A962] text-white uppercase tracking-wider text-sm font-medium hover:bg-[#9F885A] transition-colors duration-300 rounded-full ml-4"
            onClick={handleNavClick}
          >
            Contact Us
          </a>
        </motion.div>

        <button 
          className="md:hidden text-[#C4A962]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}
