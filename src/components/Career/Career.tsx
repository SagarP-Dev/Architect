import { motion } from 'framer-motion';

export default function Career() {
  return (
    <section id="career" className="min-h-screen bg-[#111111] py-24 px-6 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12">Career</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add career content here */}
          <p className="text-gray-400">Career opportunities coming soon...</p>
        </div>
      </motion.div>
    </section>
  );
}