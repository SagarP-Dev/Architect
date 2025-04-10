import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

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

  const socialLinks = [
    {
      icon: <Instagram size={16} />,
      url: 'https://www.instagram.com',
      label: 'Instagram'
    },
    {
      icon: <Facebook size={16} />,
      url: 'https://www.facebook.com',
      label: 'Facebook'
    },
    {
      icon: <Linkedin size={16} />,
      url: 'https://www.linkedin.com',
      label: 'LinkedIn'
    }
    
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black z-30 md:hidden pt-24"
    >
      <div className="flex flex-col items-center gap-8 p-8">
        {['home', 'our-works', 'services', 'about'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            className="nav-link" 
            onClick={handleNavClick}
          >
            {item === 'our-works' ? 'Our Works' : item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
        
        <a 
          href="#contact" 
          className="contact-button mt-4"
          onClick={handleNavClick}
        >
          Contact Us
        </a>

        <div className="flex gap-6 mt-8">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={`Visit our ${social.label} profile`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
