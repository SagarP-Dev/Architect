import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import bapiBhai from "../assets/bapi-bhai.jpg"; 
import project2 from '../assets/r-behera-2.jpg'; 
import project3 from '../assets/rajendra-behera.jpg'; 
import project4 from '../assets/sankar-sen.jpg'; 
import img5 from '../assets/sandipan.jpg'; 
import img6 from '../assets/WhatsApp Image 2025-04-10 at 13.55.06_3cd8c7a4.jpg'; 
import img7 from '../assets/WhatsApp Image 2025-04-10 at 13.59.16_10b62b7b.jpg'; 
import img8 from '../assets/WhatsApp Image 2025-04-10 at 14.02.32_b7ad153d.jpg'; 
import img9 from '../assets/WhatsApp Image 2025-04-10 at 14.09.27_29fee8a4.jpg'; 
import img10 from '../assets/WhatsApp Image 2025-04-10 at 14.09.49_c70a5449.jpg'; 
import img11 from '../assets/WhatsApp Image 2025-04-10 at 14.10.39_72956366.jpg'; 
import img12 from '../assets/WhatsApp Image 2025-04-10 at 14.12.43_23df84d2.jpg'; 
import img13 from '../assets/WhatsApp Image 2025-04-10 at 14.21.36_1f35ca3f.jpg'; 
import img14 from '../assets/WhatsApp Image 2025-04-10 at 14.22.43_94403fd7.jpg'; 
import img15 from '../assets/WhatsApp Image 2025-04-10 at 14.10.54_26b34a66.jpg'; 
import img16 from '../assets/IMG_20210210_121255.jpg'; 
import img17 from '../assets/IMG_20210714_194316.jpg'; 
import img18 from '../assets/IMG_20210714_223506.jpg'; 
import img19 from '../assets/durga.jpg'; 
import img20 from '../assets/193ed538531469.57650e131c6d9.jpg';
import img21 from '../assets/BED 3 (1).jpg';
import img22 from '../assets/BED 4.jpg';
import img23 from '../assets/DINING 1.jpg';
import img24 from '../assets/DINING 2.jpg';
import img25 from '../assets/b92fb438531469.57650e131a898.jpg';
import img26 from '../assets/bed 1 v1.jpg';
import img27 from '../assets/bed 1 v2.jpg';
import img28 from '../assets/bed 1 v3.jpg';
import img29 from '../assets/bed 2 v1.jpg';
import img30 from '../assets/bed 2 v2.jpg';
import img31 from '../assets/cceac438531469.57650e131b4a4.jpg';
import img32 from '../assets/dc179838531469.57650e1317652.jpg';
import img33 from '../assets/puja.jpg';

type Category = 'Residential' | 'Commercial' | 'Interior';

const images: Record<Category, string[]> = {
  Residential: [bapiBhai, project2, project3, project4, img5, img6, img13, img14],
  Commercial: [img7, img8, img9, img10, img12],
  Interior: [
    img11, img15, img16, img17, img18, img19, img20, img21, img22,
    img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33
  ],
};

export default function OurWorks() {
  const [selected, setSelected] = useState<Category>('Residential');

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

  const tabs: Category[] = ['Residential', 'Commercial', 'Interior'];

  return (
    <section id="our-works" className="min-h-screen bg-black py-24 px-6 lg:px-24">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={projectItem}
          className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12 text-center"
        >
          Our Works
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelected(tab)}
              className={`px-5 py-2 rounded-full border border-[#C4A962] text-sm font-semibold transition-all duration-300 ${
                selected === tab ? "bg-[#C4A962] text-black" : "text-[#C4A962] hover:bg-[#C4A962]/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div 
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {images[selected].map((image: string, index: number) => (
            <motion.div 
              key={index}
              variants={projectItem}
              className="overflow-hidden aspect-[4/3] rounded-lg shadow-lg"
            >
              <img
                loading="lazy"
                src={image}
                alt={`${selected} Work ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
