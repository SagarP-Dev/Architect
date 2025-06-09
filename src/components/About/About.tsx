import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-[#111111] py-24 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-4 text-center"
          >
            About Us
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-1 w-24 bg-[#C4A962]"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Introduction */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] p-8 rounded-lg border-l-4 border-[#C4A962]"
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Welcome to our creative studio, where visionary design seamlessly transitions into expert construction. We specialize in crafting functional and timeless spaces that reflect individuality, purpose, and balance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#C4A962] mr-3"></span>
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to bring dreams to life through purposeful design and solid construction. We focus on creating spaces that are not only visually compelling but built to last. By combining innovative interior design with high-quality construction practices, we ensure every detail is handled with precision, functionality, and elegance.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#C4A962] mr-3"></span>
                Who We Are
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Based in Balasore, Odisha, we are a dedicated team of architects, interior designers, project managers, and construction professionals. Our portfolio spans Residential Design, Commercial Spaces, and Turnkey Construction Projects. From initial space planning to the final coat of paint, we manage every aspect with close collaboration and attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] p-8 rounded-lg border-r-4 border-[#C4A962]"
            >
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#C4A962] mr-3"></span>
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be a leading force in design and construction, known for delivering transformative spaces that combine beauty with strength. We envision building environments that people are proud to live and work in—spaces that blend aesthetics, durability, and human-centered functionality.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Full width construction statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-[#C4A962] to-[#D4B973] p-8 rounded-lg"
        >
          <p className="text-[#111111] text-lg md:text-xl font-medium text-center">
            "While design sets the foundation, our true strength lies in executing those ideas through precise construction services. Our integrated approach ensures a smooth journey from concept to completion."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}