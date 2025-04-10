import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Home, Briefcase, Layout } from 'lucide-react'; // Lucide icons

export default function Services() {
  const services = [
    {
      icon: <Home size={28} className="text-[#C4A962]" />,
      title: 'Residential Design',
      description:
        'We create cozy, stylish homes that reflect your personality and bring warmth to your everyday living space. Every detail is curated for comfort and functionality.'
    },
    {
      icon: <Briefcase size={28} className="text-[#C4A962]" />,
      title: 'Commercial Design',
      description:
        'From offices to retail spaces, we design professional yet inviting environments that boost productivity and leave a lasting impression on clients and customers.'
    },
    {
      icon: <Layout size={28} className="text-[#C4A962]" />,
      title: 'Interior Design',
      description:
        'We specialize in transforming interiors with a perfect blend of aesthetics and practicality—tailored to your taste, needs, and lifestyle.'
    },
    // 🔥 Add more services below following the same format
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
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.1}
                scale={1.02}
                transitionSpeed={400}
                className="bg-[#1c1c1c] hover:bg-[#2a2a2a] p-8 rounded-xl border border-[#C4A962]/10 hover:border-[#C4A962] transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif text-[#C4A962] mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
