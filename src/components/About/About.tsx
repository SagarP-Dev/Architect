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
        <h2 className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12">About Us</h2>
        
        <div className="grid grid-cols-1 gap-10 text-gray-400 leading-relaxed text-lg">
          {/* Introduction */}
          <p>
          Welcome to our creative studio, where visionary design seamlessly transitions into expert construction. We specialize in crafting functional and timeless spaces that reflect individuality, purpose, and balance. While design sets the foundation, our true strength lies in executing those ideas through precise construction services. Whether it's building cozy homes or impactful commercial environments, we handle everything—from planning and interior styling to full-scale construction—with unmatched quality and care. Our integrated approach ensures a smooth journey from concept to completion.
          </p>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
            <p>
            Our mission is to bring dreams to life through purposeful design and solid construction. We focus on creating spaces that are not only visually compelling but built to last. By combining innovative interior design with high-quality construction practices, we ensure every detail is handled with precision, functionality, and elegance. We aim to deliver environments that inspire, perform, and endure.
            </p>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Who We Are</h3>
            <p>
            Based in Balasore, Odisha, we are a dedicated team of architects, interior designers, project managers, and construction professionals. Our portfolio spans Residential Design, Commercial Spaces, and Turnkey Construction Projects. From initial space planning to the final coat of paint, we manage every aspect with close collaboration and attention to detail. Our commitment lies in building spaces that reflect our clients' vision while ensuring structural integrity and high-quality finishes.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Vision</h3>
            <p>
            To be a leading force in design and construction, known for delivering transformative spaces that combine beauty with strength. We envision building environments that people are proud to live and work in—spaces that blend aesthetics, durability, and human-centered functionality. Through innovation and craftsmanship, we aim to set a new benchmark in the construction and design industry.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
