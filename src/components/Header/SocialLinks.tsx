import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-50">
      <a href="#" className="social-link"><Instagram size={16} /></a>
      <a href="#" className="social-link"><Facebook size={16} /></a>
      <a href="#" className="social-link"><Linkedin size={16} /></a>
      <a href="#" className="social-link"><Youtube size={16} /></a>
    </div>
  );
}