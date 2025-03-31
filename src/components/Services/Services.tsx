import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    'Residential Design',
    'Commercial Architecture',
    'Interior Planning'
  ];

  return (
    <section id="services" className="min-h-screen bg-[#111111] py-24 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service} className="p-8 border border-[#C4A962]/20 hover:border-[#C4A962] transition-colors duration-300">
              <h3 className="text-2xl font-serif text-[#C4A962] mb-4">{service}</h3>
              <p className="text-gray-400">
                Crafting exceptional spaces that blend functionality with aesthetic excellence,
                tailored to your unique vision and requirements.
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}