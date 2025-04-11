// components/Background.tsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

export default function Background({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden"
      style={{ position: 'relative' }} // Explicitly set position
    >
      <motion.div 
        className="fixed inset-0 z-0"
        style={{ y: yBg }}
      >
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}