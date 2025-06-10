import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { Home, Briefcase, Layout, Palette, Ruler, Lightbulb } from 'lucide-react';
import { Link } from 'react-scroll'; // ✅ Import react-scroll

export default function Services() {
  const services = [
    {
      icon: <Home size={32} className="text-[#C4A962]" />,
      title: 'Residential Design',
      description:
        'We create cozy, stylish homes that reflect your personality and bring warmth to your everyday living space.',
      features: ['Custom home design', 'Space planning', 'Furniture selection']
    },
    {
      icon: <Briefcase size={32} className="text-[#C4A962]" />,
      title: 'Commercial Design',
      description:
        'From offices to retail spaces, we design professional yet inviting environments that boost productivity.',
      features: ['Office layouts', 'Brand integration', 'Ergonomic solutions']
    },
    {
      icon: <Layout size={32} className="text-[#C4A962]" />,
      title: 'Interior Design',
      description:
        'We specialize in transforming interiors with a perfect blend of aesthetics and practicality.',
      features: ['Color schemes', 'Material selection', 'Lighting design']
    },
    {
      icon: <Palette size={32} className="text-[#C4A962]" />,
      title: 'Color Consultation',
      description:
        'Expert guidance in selecting the perfect color palette to create harmony and evoke the right mood.',
      features: ['Color psychology', 'Finish selection', 'Mood boards']
    },
    {
      icon: <Ruler size={32} className="text-[#C4A962]" />,
      title: 'Space Planning',
      description:
        'Optimizing your space for functionality and flow while keeping aesthetics intact.',
      features: ['Furniture layout', 'Traffic flow', 'Storage solutions']
    },
    {
      icon: <Lightbulb size={32} className="text-[#C4A962]" />,
      title: 'Lighting Design',
      description:
        'Creating lighting schemes that enhance your space and mood.',
      features: ['Task lighting', 'Ambient lighting', 'Accent lighting']
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-[#111111] py-28 px-6 lg:px-24 relative overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#C4A962] filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#C4A962] filter blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto relative"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            variants={fadeInUp}
            className="text-[#C4A962] uppercase tracking-widest text-sm mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4"
          >
            Our Premium Services
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-[#C4A962] mx-auto"
          ></motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.08}
                glareColor="#C4A962"
                glarePosition="all"
                glareBorderRadius="12px"
                scale={1.03}
                transitionSpeed={500}
                className="h-full bg-gradient-to-b from-[#1c1c1c] to-[#151515] p-8 rounded-xl border border-[#2a2a2a] hover:border-[#C4A962]/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-[#C4A962]/10 group-hover:bg-[#C4A962]/20 transition-all duration-300 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4A962] mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Have a special project in mind? Our team is ready to bring your vision to life with custom solutions tailored to your needs.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            className="bg-[#C4A962] hover:bg-[#d8b970] text-[#111111] font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer inline-block"
          >
            Get a Free Consultation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
