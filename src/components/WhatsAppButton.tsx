// components/WhatsAppButton.tsx
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Particle = ({ angle, distance }: { angle: number; distance: number }) => {
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
      animate={{ 
        x, 
        y, 
        opacity: 0, 
        scale: 0.5,
        transition: { 
          duration: 0.8, 
          ease: [0.2, 0.8, 0.4, 1] 
        }
      }}
      className="absolute w-2 h-2 rounded-full bg-white/80"
      style={{ x: 0, y: 0 }}
    />
  );
};

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const controls = useAnimation();
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000);
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        rotateY: [0, 8, -8, 0],
        rotateX: [0, 5, -5, 0],
        transition: { duration: 8, repeat: Infinity, ease: "easeInOut" }
      });
    };
    sequence();
  }, [controls]);

  const particles = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    angle: (i / 16) * Math.PI * 2,
    distance: 40 + Math.random() * 30
  }));

  return (
    <div className="fixed right-6 bottom-20 z-50" ref={buttonRef}> {/* Changed from bottom-6 to bottom-20 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          transition: { 
            delay: 1.5,
            type: 'spring',
            stiffness: 100,
            damping: 10
          }
        }}
        className="relative"
      >
        {/* Floating text bubble */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: 300,
                  damping: 15
                }
              }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute right-full top-1/2 -translate-y-1/2 mr-3"
            >
              <motion.div
                animate={{
                  y: [-3, 3, -3],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="px-4 py-3 bg-white text-gray-900 rounded-lg shadow-xl relative"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.03, 1],
                    transition: {
                      duration: 2,
                      repeat: Infinity
                    }
                  }}
                  className="block text-sm font-medium whitespace-nowrap"
                >
                  Message us on WhatsApp!
                </motion.span>
                <div className="absolute top-1/2 right-0 w-3 h-3 bg-white transform translate-x-1/2 -translate-y-1/2 rotate-45"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Particle burst */}
        <AnimatePresence>
          {isClicked && (
            <div className="absolute inset-0 pointer-events-none">
              {particles.map((particle) => (
                <Particle key={particle.id} angle={particle.angle} distance={particle.distance} />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main button container */}
        <motion.div
          animate={controls}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.15, 1],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute inset-0 rounded-full bg-[#25D366] blur-lg"
          />

          {/* Floating halo effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0, 0.4, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeOut"
              }
            }}
            className="absolute inset-0 rounded-full border-4 border-[#25D366]/50"
          />

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/+919439500261"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl relative overflow-hidden"
            aria-label="Chat with us on WhatsApp"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.9 }}
            onClick={handleClick}
          >
            {/* Animated gradient background */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                transition: {
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear'
                }
              }}
              className="absolute inset-0 opacity-90"
              style={{
                background: `linear-gradient(135deg, 
                  #25D366 0%, 
                  #128C7E 50%, 
                  #25D366 100%)`,
                backgroundSize: '200% 200%'
              }}
            />

            {/* Floating icon with 3D effect */}
            <motion.div
              animate={{
                y: [-4, 4, -4],
                rotateY: isHovered ? [0, 15, -15, 0] : 0,
                rotateX: isHovered ? [0, 10, -10, 0] : 0,
                transition: {
                  y: { 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  },
                  rotateY: { 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  },
                  rotateX: { 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }
                }
              }}
              className="relative z-10"
            >
              <MessageCircle 
                size={28} 
                className="drop-shadow-md"
              />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}