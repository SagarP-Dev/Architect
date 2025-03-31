import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

type MobileMenuProps = {
  onClose: () => void;
};

export default function MobileMenu({ onClose }: MobileMenuProps) {
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
    onClose();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black z-30 md:hidden pt-24"
    >
      <div className="flex flex-col items-center gap-8 p-8">
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
        <button className="contact-button mt-4">
          Contact Us
        </button>
        <div className="flex gap-6 mt-8">
          <a href="#" className="social-link"><Instagram size={16} /></a>
          <a href="#" className="social-link"><Facebook size={16} /></a>
          <a href="#" className="social-link"><Linkedin size={16} /></a>
          <a href="#" className="social-link"><Youtube size={16} /></a>
        </div>
      </div>
    </motion.div>
  );
}