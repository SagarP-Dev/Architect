import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SocialLinks from './SocialLinks';

// Explicitly type the logo variable with union type
let logo: string | null;
try {
  logo = '/logo.jpg'; // Path to your logo in public folder
} catch {
  logo = null; // Will use placeholder if logo not found
}

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
      <nav className={`fixed w-full py-6 px-6 lg:px-12 flex justify-between items-center z-40 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-black/50'}`}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C4A962]"
        >
          {logo ? (
            <img 
              src={logo}
              alt="Company Logo" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                logo = null; // Fallback to initials if image fails to load
              }}
            />
          ) : (
            <span className="text-white font-bold text-lg">SB</span>
          )}
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-12"
        >
          {['home', 'projects', 'services', 'media', 'career', 'blog', 'about'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="nav-link" 
              onClick={handleNavClick}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <button className="contact-button ml-4">
            Contact Us
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#C4A962]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}