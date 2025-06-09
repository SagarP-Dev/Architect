// components/MobileMenu.tsx
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
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
    onClose();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gray-900/95 backdrop-blur-sm z-30 md:hidden pt-24"
    >
      <div className="flex flex-col items-center justify-between h-full p-8">
        <div className="w-full flex flex-col items-center gap-6">
          {['home', 'our-works', 'services', 'about'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className="text-white/90 hover:text-[#C4A962] text-xl uppercase tracking-wider font-medium py-3 transition-all duration-300 w-full text-center border-b border-white/10 last:border-0"
              onClick={handleNavClick}
            >
              {item === 'our-works' ? 'Our Works' : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          
          <a 
            href="#contact" 
            className="px-8 py-3 bg-[#C4A962] text-gray-900 uppercase tracking-wider text-sm font-bold hover:bg-white transition-all duration-300 rounded-full mt-6 w-full text-center"
            onClick={handleNavClick}
          >
            Contact Us
          </a>
        </div>

        {/* Instagram Link - Now properly positioned at the bottom */}
        <div className="w-full flex justify-center pb-8">
          <a
            href="https://www.instagram.com/_eco.scape_?igsh=enZlazVuMjJpd3J1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] text-white hover:scale-110 transition-all duration-300"
            aria-label="Visit our Instagram profile"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}