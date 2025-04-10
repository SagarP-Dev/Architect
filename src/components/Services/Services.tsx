import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function Services() {
  const services = [
    'Residential Design',
    'Commercial Design',
    'Interior Design'
  ];

  return (
    <section id="services" className="min-h-screen bg-[#111111] py-24 px-6 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12"
        >
          Our Services
        </motion.h2>
        
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service}
              variants={fadeInUp}
              className="p-8 border border-[#C4A962]/20 hover:border-[#C4A962] transition-colors duration-300"
            >
              <h3 className="text-2xl font-serif text-[#C4A962] mb-4">{service}</h3>
              <p className="text-gray-400">
                Crafting exceptional spaces that blend functionality with aesthetic excellence,
                tailored to your unique vision and requirements.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}