import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-black py-24 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group relative overflow-hidden aspect-[4/3]">
              <img
                src={`https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=80&${item}`}
                alt={`Project ${item}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xl text-white font-serif">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}