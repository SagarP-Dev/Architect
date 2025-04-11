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
          Welcome to our creative studio where design meets lifestyle. We're dedicated to crafting timeless and functional spaces that reflect individuality, purpose, and harmony. From cozy homes to impactful commercial environments, our approach blends aesthetics with intentional design.
          In addition to design, we also specialize in construction services, ensuring a seamless transition from concept to completion. Whether it's building from the ground up or renovating existing spaces, we bring precision, quality, and care to every project.
          </p>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
            <p>
            Our mission is to elevate everyday spaces through thoughtful and elegant design solutions. We aim to transform visions into reality by creating environments that are not only visually stunning but deeply personal and practical.
            Beyond design, we are equally committed to delivering high-quality construction services, ensuring that every detail is executed with precision and care. From concept to completion, we strive to build spaces that inspire and endure.
            </p>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Who We Are</h3>
            <p>
            We are a passionate team of interior designers, architects, space planners, and construction experts based in Balasore, Odisha. With a strong portfolio in Residential Design, Commercial Design, Interior Styling, and end-to-end construction, we bring ideas to life through collaboration, creativity, and attention to detail. Every project we take on is tailored to reflect the unique needs and personality of our clients, from initial concept to final build.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Vision</h3>
            <p>
            To become a leading name in interior, architectural, and construction services by delivering meaningful, modern, and human-centric spaces that stand the test of time. We strive to inspire through design and craftsmanship, creating environments that people love to live and work in—spaces that are not only beautifully designed but expertly built.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
