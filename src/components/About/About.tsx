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
            Welcome to our digital space! We’re passionate about crafting exceptional web experiences that blend design, functionality, and performance. Our team brings creativity and technical expertise together to deliver impactful solutions.
          </p>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Mission</h3>
            <p>
              Our mission is to empower individuals and businesses by building innovative, scalable, and user-friendly digital products. We believe in clean code, purposeful design, and long-term collaboration.
            </p>
          </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Who We Are</h3>
            <p>
              We are a small but dynamic team of full-stack developers, UI/UX designers, and creative thinkers based in Balasore, Odisha. With a strong foundation in the MERN stack, we specialize in building responsive websites, web applications, and interactive user interfaces.
            </p>
          </div>

          {/* Vision */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Our Vision</h3>
            <p>
              To become a trusted name in digital transformation by consistently delivering top-tier web solutions that adapt to a rapidly evolving tech landscape.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
