import { useState, useEffect, useRef } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Import all images
import bapiBhai from "../assets/bapi-bhai.jpg"; 
import project2 from '../assets/r-behera-2.jpg'; 
import project3 from '../assets/rajendra-behera.jpg'; 
import project4 from '../assets/sankar-sen.jpg'; 
import img5 from '../assets/sandipan.jpg'; 
import img6 from '../assets/WhatsApp Image 2025-04-10 at 13.55.06_3cd8c7a4.jpg'; 
import img7 from '../assets/WhatsApp Image 2025-04-10 at 13.59.16_10b62b7b.jpg'; 
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
import img34 from '../assets/WhatsApp Image 2025-04-13 at 17.25.11_0694b909.jpg';
import img35 from '../assets/WhatsApp Image 2025-04-13 at 17.25.09_856231bc.jpg';
import img36 from '../assets/WhatsApp Image 2025-04-13 at 17.25.10_7337cbc1.jpg';
import img37 from '../assets/WhatsApp Image 2025-04-13 at 17.25.10_73684546.jpg';

type Category = 'Residential' | 'Commercial' | 'Interior';

interface Project {
  image: string;
  name: string;
  description: string;
  completionDate: string;
  additionalImages?: string[];
}

const projects: Record<Category, Project[]> = {
  Residential: [
    {
      image: bapiBhai,
      name: 'Soumendra Das',
      description: 'A beautiful residential property with modern amenities and elegant design.',
      completionDate: 'March 20XX',
      additionalImages: [img18, img16]
    },
    {
      image: project2,
      name: 'R. Behera Residence',
      description: 'Contemporary home design with spacious interiors and lush landscaping.',
      completionDate: 'January 20XX',
    },
    {
      image: project3,
      name: 'Rajendra Behera Residence',
      description: 'Luxury villa with premium finishes and custom architectural details.',
      completionDate: 'November 20XX',
      additionalImages: [img13, img14]
    },
    {
      image: project4,
      name: 'Sankar Sen Residence',
      description: 'Elegant residence with traditional influences and modern comforts.',
      completionDate: 'August 20XX',
      additionalImages: [img6]
    },
    {
      image: img5,
      name: 'Sandipan Sarkar',
      description: 'Compact urban home with smart space utilization and minimalist design.',
      completionDate: 'May 20XX',
    }
  ],
  Commercial: [
    {
      image: img7,
      name: 'Toyota Showroom',
      description: 'A sleek and professional corporate office space designed for the Toyota brand, blending functionality with modern aesthetics. This workspace features open-plan collaborative areas, private meeting rooms, and state-of-the-art facilities tailored for productivity and innovation. The design emphasizes clean lines, brand-themed elements, and a welcoming atmosphere for both staff and clients.',
      completionDate: 'April 20XX',
      additionalImages: [img9, img10, img12, img11, img15]
    },
    {
      image: img34,
      name: 'Toyota Showroom Baripada',
      description: 'A sleek and professional corporate office space designed for the Toyota brand, blending functionality with modern aesthetics. This workspace features open-plan collaborative areas, private meeting rooms, and state-of-the-art facilities tailored for productivity and innovation. The design emphasizes clean lines, brand-themed elements, and a welcoming atmosphere for both staff and clients.',
      completionDate: 'April 20XX',
      additionalImages: [img35, img36, img37]
    }
  ],
  Interior: [
    {
      image: img17,
      name: 'Bedroom',
      description: 'A cozy and tranquil bedroom retreat designed for comfort and relaxation. Featuring soft lighting, warm textures, and a harmonious color palette, the space creates a serene ambiance ideal for unwinding. Thoughtful furnishings, ample storage, and subtle design accents ensure both style and functionality, making it a perfect personal sanctuary.',
      completionDate: 'April 20XX',
    },
    {
      image: img19,
      name: 'Durga Puja Pandel',
      description: 'Beautifully crafted Durga Puja pandal with intricate designs and decorations.',
      completionDate: 'June 20XX',
    },
    {
      image: img20,
      name: 'Living Room Design',
      description: 'Modern living room with elegant furniture and lighting fixtures.',
      completionDate: 'July 20XX',
    },
    {
      image: img21,
      name: 'Bedroom',
      description: 'A cozy and tranquil bedroom retreat designed for comfort and relaxation. Featuring soft lighting, warm textures, and a harmonious color palette, the space creates a serene ambiance ideal for unwinding. Thoughtful furnishings, ample storage, and subtle design accents ensure both style and functionality, making it a perfect personal sanctuary.',
      completionDate: 'August 20XX',
    },
    {
      image: img22,
      name: 'Bedroom',
      description: 'Luxurious sleeping quarters with premium bedding and decor.',
      completionDate: 'September 20XX',
    },
    {
      image: img23,
      name: 'Formal Dining',
      description: 'Elegant dining space for entertaining guests and family gatherings.',
      completionDate: 'October 20XX',
    },
    {
      image: img24,
      name: 'Breakfast Nook',
      description: 'Casual dining area with comfortable seating and natural light.',
      completionDate: 'November 20XX',
    },
    {
      image: img25,
      name: 'Living Room',
      description: 'Contemporary living space with modern furniture and decor.',
      completionDate: 'December 20XX',
    },
    {
      image: img26,
      name: 'Bedroom',
      description: 'First design option for primary bedroom with neutral palette.',
      completionDate: 'January 20XX',
    },
    {
      image: img27,
      name: 'Bedroom',
      description: 'Second design option with warmer tones and textured finishes.',
      completionDate: 'February 20XX',
    },
    {
      image: img28,
      name: 'Bedroom',
      description: 'Third design option featuring bold colors and modern art.',
      completionDate: 'March 20XX',
    },
    {
      image: img29,
      name: 'Bedroom',
      description: 'First option for accommodations with minimalist design.',
      completionDate: 'April 20XX',
    },
    {
      image: img30,
      name: 'Bedroom',
      description: 'Second option with more traditional furnishings and decor.',
      completionDate: 'May 20XX',
    },
    {
      image: img31,
      name: 'Media Room',
      description: 'Home theater with premium audio-visual equipment and seating.',
      completionDate: 'June 20XX',
    },
    {
      image: img32,
      name: 'Living Area',
      description: 'Spacious living area with modern design elements.',
      completionDate: 'July 20XX',
    },
    {
      image: img33,
      name: 'Puja Room',
      description: 'Sacred space designed for worship and meditation.',
      completionDate: 'August 20XX',
    }
  ],
};

export default function OurWorks() {
  const [selected, setSelected] = useState<Category>('Residential');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const loadedImages = useRef<Set<string>>(new Set());
  const [categoryReady, setCategoryReady] = useState<Record<Category, boolean>>({
    Residential: false,
    Commercial: false,
    Interior: false
  });

  // Preload all images on component mount
  useEffect(() => {
    const loadImagesForCategory = (category: Category) => {
      const categoryImages = projects[category].flatMap(project => 
        [project.image, ...(project.additionalImages || [])]
      );

      if (categoryImages.length === 0) {
        setCategoryReady(prev => ({ ...prev, [category]: true }));
        return;
      }

      let loadedCount = 0;
      const totalImages = categoryImages.length;

      categoryImages.forEach(src => {
        if (!loadedImages.current.has(src)) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            loadedImages.current.add(src);
            loadedCount++;
            if (loadedCount === totalImages) {
              setCategoryReady(prev => ({ ...prev, [category]: true }));
            }
          };
          img.onerror = () => {
            loadedCount++;
            if (loadedCount === totalImages) {
              setCategoryReady(prev => ({ ...prev, [category]: true }));
            }
          };
        } else {
          loadedCount++;
          if (loadedCount === totalImages) {
            setCategoryReady(prev => ({ ...prev, [category]: true }));
          }
        }
      });
    };

    // Load images for all categories
    (Object.keys(projects) as Category[]).forEach(category => {
      loadImagesForCategory(category);
    });
  }, []);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (!selectedProject?.additionalImages) return;
    const totalImages = (selectedProject.additionalImages?.length || 0) + 1;
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    if (!selectedProject?.additionalImages) return;
    const totalImages = (selectedProject.additionalImages?.length || 0) + 1;
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleCategoryChange = (category: Category) => {
    if (category === selected || isLoading) return;
    
    setIsLoading(true);
    setSelected(category);
    
    // If category is already ready, show it immediately
    if (categoryReady[category]) {
      setIsLoading(false);
      return;
    }

    // Otherwise wait for images to load
    const checkLoaded = setInterval(() => {
      if (categoryReady[category]) {
        clearInterval(checkLoaded);
        setIsLoading(false);
      }
    }, 100);

    // Timeout after 5 seconds in case of errors
    setTimeout(() => {
      clearInterval(checkLoaded);
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, selectedProject]);

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
              onClick={() => handleCategoryChange(tab)}
              className={`px-5 py-2 rounded-full border border-[#C4A962] text-sm font-semibold transition-all duration-300 ${
                selected === tab ? "bg-[#C4A962] text-black" : "text-[#C4A962] hover:bg-[#C4A962]/20"
              } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={isLoading}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery with loading state */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex justify-center items-center"
              >
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-[#C4A962] border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-[#C4A962] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <p className="mt-4 text-[#C4A962]">Loading projects...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  variants={container}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                  {projects[selected].map((project: Project, index: number) => (
                    <motion.div 
                      key={`${selected}-${index}`}
                      variants={projectItem}
                      className="overflow-hidden aspect-[4/3] rounded-lg shadow-lg relative group cursor-pointer"
                      onClick={() => openModal(project)}
                    >
                      <img
                        src={project.image}
                        alt={`${selected} Work ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                        <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
                        <button
                          className="bg-[#C4A962] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D4B972] transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Custom Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6">
              <h2 className="text-3xl font-bold text-[#C4A962] mb-6">{selectedProject.name}</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={
                        currentImageIndex === 0 
                          ? selectedProject.image 
                          : selectedProject.additionalImages?.[currentImageIndex - 1] || selectedProject.image
                      }
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          aria-label="Previous image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                          aria-label="Next image"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  
                  {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                    <div className="mt-4">
                      <div className="grid grid-cols-4 gap-2">
                        <div
                          onClick={() => setCurrentImageIndex(0)}
                          className={`aspect-square cursor-pointer border-2 ${currentImageIndex === 0 ? 'border-[#C4A962]' : 'border-transparent'}`}
                        >
                          <img
                            src={selectedProject.image}
                            alt="Main view"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {selectedProject.additionalImages.map((img, idx) => (
                          <div
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx + 1)}
                            className={`aspect-square cursor-pointer border-2 ${currentImageIndex === idx + 1 ? 'border-[#C4A962]' : 'border-transparent'}`}
                          >
                            <img
                              src={img}
                              alt={`Additional view ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Project Details */}
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Details</h3>
                    <p className="text-gray-700">{selectedProject.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Completion Date</h3>
                    <p className="text-gray-700">{selectedProject.completionDate}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Project Type</h3>
                    <p className="text-gray-700 capitalize">{selected}</p>
                  </div>
                  
                  <button
                    onClick={closeModal}
                    className="mt-4 bg-[#C4A962] text-black px-6 py-3 rounded-md font-medium hover:bg-[#D4B972] transition-colors w-full sm:w-auto"
                  >
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}