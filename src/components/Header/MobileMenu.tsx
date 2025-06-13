// components/MobileMenu.tsx
import { motion } from 'framer-motion';
import { Instagram, ChevronRight } from 'lucide-react';

type MobileMenuProps = {
  onClose: () => void;
  activeSection: string;
};

export default function MobileMenu({ onClose, activeSection }: MobileMenuProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const section = href.substring(1);
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
    onClose();
  };

  const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'our-works', label: 'Our Works' },
  { id: 'reviews', label: 'Reviews' },
];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-950/95 backdrop-blur-md z-40 md:hidden pt-32"
    >
      <div className="flex flex-col items-center justify-between h-full p-6 pb-12">
        <div className="w-full flex flex-col items-center gap-1">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`w-full py-4 px-6 rounded-xl flex items-center justify-between ${
                activeSection === item.id 
                  ? 'bg-gray-800/50 text-[#C4A962]' 
                  : 'text-white/90 hover:text-[#C4A962]'
              }`}
              onClick={handleNavClick}
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="text-lg font-medium uppercase tracking-wider">
                {item.label}
              </span>
              <ChevronRight 
                size={20} 
                className={`transition-transform duration-300 ${
                  activeSection === item.id ? 'opacity-100' : 'opacity-70'
                }`} 
              />
            </motion.a>
          ))}
          
          <motion.div
            className="w-full mt-6"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="#contact" 
              className="block w-full py-4 px-6 bg-gradient-to-r from-[#C4A962] to-[#E8D9A6] text-gray-900 uppercase tracking-wider text-sm font-bold text-center rounded-xl shadow-lg hover:shadow-[#C4A962]/40 transition-all duration-300"
              onClick={handleNavClick}
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="w-full flex flex-col items-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-white/60 text-sm mb-4">Follow us on social media</p>
          <motion.a
            href="https://www.instagram.com/_eco.scape_?igsh=enZlazVuMjJpd3J1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] text-white shadow-lg hover:shadow-[#E1306C]/50 transition-all duration-300 group"
            aria-label="Visit our Instagram profile"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Instagram size={24} className="group-hover:scale-110 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
