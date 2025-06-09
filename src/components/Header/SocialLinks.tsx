// components/SocialLinks.tsx
import { motion } from 'framer-motion'; // Added motion import
import { Instagram } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-50">
      <motion.a 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        href="https://www.instagram.com/_eco.scape_?igsh=enZlazVuMjJpd3J1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#C13584] to-[#E1306C] text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-[#C13584]/50"
        aria-label="Visit our Instagram profile"
      >
        <Instagram size={16} />
      </motion.a>
    </div>
  );
}