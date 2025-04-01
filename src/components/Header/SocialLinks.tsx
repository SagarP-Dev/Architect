import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-50">
      <a 
        href="https://www.instagram.com/_sagar_panigrahi__/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <Instagram size={16} />
      </a>
      <a 
        href="https://www.facebook.com/sagar.panigrahi.182" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <Facebook size={16} />
      </a>
      <a 
        href="https://www.linkedin.com/in/sagar-trushna-panigrahi-079b6727a/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <Linkedin size={16} />
      </a>
      <a 
        href="https://www.youtube.com/yourchannel" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <Youtube size={16} />
      </a>
    </div>
  );
}