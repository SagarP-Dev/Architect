import { motion, Variants } from 'framer-motion';

import bapiBhai from "../assets/bapi-bhai.jpg";
import project2 from '../assets/r-behera-2.jpg';
import project3 from '../assets/rajendra-behera.jpg';
import project4 from '../assets/sankar-sen.jpg';

export default function Projects() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const projectItem: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const projectImages = [bapiBhai, project2, project3, project4];

  return (
    <section id="projects" className="min-h-screen bg-black py-24 px-6 lg:px-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={projectItem}
          className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectImages.map((image, index) => (
            <motion.div 
              key={index}
              variants={projectItem}
              className="group relative overflow-hidden aspect-[4/3]"
            >
              <img
                src={image}
                alt={`Project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-xl text-white font-serif">View Project</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
