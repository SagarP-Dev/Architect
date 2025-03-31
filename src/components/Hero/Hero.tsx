import { motion } from 'framer-motion';
import ScrollIndicator from '../shared/ScrollIndicator';

export default function Hero() {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-5xl"
        >
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl mb-6">
            "Name"
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 font-light italic text-white">
              Architect
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Creating timeless spaces that inspire and elevate the human experience through innovative architectural design.
          </p>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}