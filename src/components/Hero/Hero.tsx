// components/Hero/Hero.tsx
import { motion } from 'framer-motion';
import ScrollIndicator from '../shared/ScrollIndicator';
import ecoscapeLogo from '../assets/WhatsApp_Image_2025-03-31_at_11.55.57_354e1db8-removebg-preview.png';

export default function Hero() {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 lg:px-24 z-20">
        {/* Logo and Text Container */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 md:gap-12">
          {/* Animated Logo - Now placed beside text on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100, filter: "blur(20px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 1.8, ease: [0.2, 0.8, 0.4, 1] }
            }}
            className="w-full max-w-xs md:max-w-md flex-shrink-0"
          >
            <img 
              src={ecoscapeLogo} 
              alt="Ecoscape Logo" 
              className="w-full h-auto object-contain opacity-90"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 md:mb-6 text-white leading-tight">
              Ecoscape
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-4 font-light italic text-[#C4A962]">
                Developer
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0">
              Creating timeless spaces that inspire and elevate the human experience through innovative architectural design.
            </p>
          </motion.div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}