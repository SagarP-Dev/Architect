import { useState, useEffect, useRef } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Import all images
import bapiBhai from "../assets/bapi-bhai.jpg"; 
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
type InteriorSubcategory = 'Bedroom' | 'Dining' | 'Living Room' | 'Office' | 'Puja Room';

interface Project {
  image: string;
  name: string;
  description: string;
  completionDate: string;
  additionalImages?: string[];
  subcategory?: InteriorSubcategory;
}

const projects: Record<Category, Project[]> = {
  Residential: [
    {
      image: project3,
      name: 'Rajendra Behera',
      description: 'Luxury villa with premium finishes and custom architectural details.',
      completionDate: 'November 20XX',
      additionalImages: [img13, img14]
    },
    {
      image: project4,
      name: 'Sankar Sen',
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
      name: 'Toyota Showroom-Balasore',
      description: 'A sleek and professional corporate office space designed for the Toyota brand, blending functionality with modern aesthetics. This workspace features open-plan collaborative areas, private meeting rooms, and state-of-the-art facilities tailored for productivity and innovation. The design emphasizes clean lines, brand-themed elements, and a welcoming atmosphere for both staff and clients.',
      completionDate: 'April 20XX',
      additionalImages: [img9, img10, img12, img11, img15]
    },
    {
      image: img34,
      name: 'Toyota Showroom-Baripada',
      description: 'A sleek and professional corporate office space designed for the Toyota brand, blending functionality with modern aesthetics. This workspace features open-plan collaborative areas, private meeting rooms, and state-of-the-art facilities tailored for productivity and innovation. The design emphasizes clean lines, brand-themed elements, and a welcoming atmosphere for both staff and clients.',
      completionDate: 'April 20XX',
      additionalImages: [img35, img36, img37]
    },
    {
      image: bapiBhai,
      name: 'Shree Nivas-Appartment',
      description: 'A beautiful residential property with modern amenities and elegant design.',
      completionDate: 'March 20XX',
      additionalImages: [img18, img16]
    },
  ],
  Interior: [
    // Bedroom projects
    {
      image: img17,
      name: '',
      description: 'A cozy and tranquil bedroom retreat designed for comfort and relaxation. Featuring soft lighting, warm textures, and a harmonious color palette, the space creates a serene ambiance ideal for unwinding. Thoughtful furnishings, ample storage, and subtle design accents ensure both style and functionality, making it a perfect personal sanctuary.',
      completionDate: 'April 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img21,
      name: '',
      description: 'A cozy and tranquil bedroom retreat designed for comfort and relaxation. Featuring soft lighting, warm textures, and a harmonious color palette, the space creates a serene ambiance ideal for unwinding. Thoughtful furnishings, ample storage, and subtle design accents ensure both style and functionality, making it a perfect personal sanctuary.',
      completionDate: 'August 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img22,
      name: '',
      description: 'Luxurious sleeping quarters with premium bedding and decor.',
      completionDate: 'September 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img26,
      name: '',
      description: 'First design option for primary bedroom with neutral palette.',
      completionDate: 'January 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img27,
      name: '',
      description: 'Second design option with warmer tones and textured finishes.',
      completionDate: 'February 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img28,
      name: '',
      description: 'Third design option featuring bold colors and modern art.',
      completionDate: 'March 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img29,
      name: '',
      description: 'First option for accommodations with minimalist design.',
      completionDate: 'April 20XX',
      subcategory: 'Bedroom'
    },
    {
      image: img30,
      name: '',
      description: 'Second option with more traditional furnishings and decor.',
      completionDate: 'May 20XX',
      subcategory: 'Bedroom'
    },
    
    // Dining projects
    {
      image: img23,
      name: '',
      description: 'Elegant dining space for entertaining guests and family gatherings.',
      completionDate: 'October 20XX',
      subcategory: 'Dining'
    },
    {
      image: img24,
      name: '',
      description: 'Casual dining area with comfortable seating and natural light.',
      completionDate: 'November 20XX',
      subcategory: 'Dining'
    },
    
    // Living Room projects
    {
      image: img20,
      name: '',
      description: 'Modern living room with elegant furniture and lighting fixtures.',
      completionDate: 'July 20XX',
      subcategory: 'Living Room'
    },

    {
      image: img31,
      name: '',
      description: 'Home theater with premium audio-visual equipment and seating.',
      completionDate: 'June 20XX',
      subcategory: 'Living Room'
    },
    
    {
      image: img32,
      name: '',
      description: 'Spacious living area with modern design elements.',
      completionDate: 'July 20XX',
      subcategory: 'Living Room'
    },
    
    // Office projects
    
    {
      image: img25,
      name: '',
      description: 'Contemporary living space with modern furniture and decor.',
      completionDate: 'December 20XX',
      subcategory: 'Office'
    },
    {
      image: img19,
      name: '',
      description: 'Beautifully crafted Durga Puja pandal with intricate designs and decorations.',
      completionDate: 'June 20XX',
      subcategory: 'Office'
    },
    
    // Puja Room projects
    
    {
      image: img33,
      name: '',
      description: 'Sacred space designed for worship and meditation.',
      completionDate: 'August 20XX',
      subcategory: 'Puja Room'
    }
  ],
};

const WatermarkOverlay = () => (
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
    <div className="text-white/20 text-4xl font-bold transform -rotate-45 select-none">
      © {new Date().getFullYear()} Ecoscape
    </div>
  </div>
);

const ProtectedImage = ({ src, alt }: { src: string; alt: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      
      const imgRatio = img.width / img.height;
      const canvasRatio = canvas.width / canvas.height;
      
      let drawWidth, drawHeight, dx, dy;
      
      if (imgRatio > canvasRatio) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * imgRatio;
        dx = (canvas.width - drawWidth) / 2;
        dy = 0;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / imgRatio;
        dx = 0;
        dy = (canvas.height - drawHeight) / 2;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
      
      ctx.font = 'bold 48px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.save();
      ctx.translate(canvas.width/2, canvas.height/2);
      ctx.rotate(-Math.PI/4);
      ctx.fillText('© Ecoscape', 0, 0);
      ctx.fillText('© Ecoscape', 200, 200);
      ctx.fillText('© Ecoscape', -200, -200);
      ctx.restore();
    };

    img.onerror = () => {
      canvas.style.backgroundImage = `url(${src})`;
      canvas.style.backgroundSize = 'cover';
      canvas.style.backgroundPosition = 'center';
      canvas.style.backgroundRepeat = 'no-repeat';
    };
  }, [src]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full object-cover pointer-events-none"
      aria-label={alt}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
};

export default function Projects() {
  const [selected, setSelected] = useState<Category>('Residential');
  const [selectedInteriorSubcategory, setSelectedInteriorSubcategory] = useState<InteriorSubcategory | 'All'>('All');
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
    
    if (categoryReady[category]) {
      setIsLoading(false);
      return;
    }

    const checkLoaded = setInterval(() => {
      if (categoryReady[category]) {
        clearInterval(checkLoaded);
        setIsLoading(false);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(checkLoaded);
      setIsLoading(false);
    }, 5000);
  };

  const handleInteriorSubcategoryChange = (subcategory: InteriorSubcategory | 'All') => {
    setSelectedInteriorSubcategory(subcategory);
  };

  const getFilteredProjects = () => {
    if (selected !== 'Interior' || selectedInteriorSubcategory === 'All') {
      return projects[selected];
    }
    return projects[selected].filter(project => project.subcategory === selectedInteriorSubcategory);
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
  const interiorSubcategories: (InteriorSubcategory | 'All')[] = ['All', 'Bedroom', 'Dining', 'Living Room', 'Office', 'Puja Room'];

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

        {selected === 'Interior' && (
          <div className="flex justify-center mb-6 gap-2 flex-wrap">
            {interiorSubcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => handleInteriorSubcategoryChange(subcategory)}
                className={`px-4 py-1 rounded-full border border-[#C4A962] text-xs font-semibold transition-all duration-300 ${
                  selectedInteriorSubcategory === subcategory ? "bg-[#C4A962] text-black" : "text-[#C4A962] hover:bg-[#C4A962]/20"
                }`}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}

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
                  {getFilteredProjects().map((project: Project, index: number) => (
                    <motion.div 
                      key={`${selected}-${index}`}
                      variants={projectItem}
                      className="overflow-hidden rounded-lg shadow-lg relative group cursor-pointer h-96"
                      onClick={() => openModal(project)}
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center bg-black overflow-hidden">
                          <ProtectedImage src={project.image} alt={`${selected} Work ${index + 1}`} />
                        </div>
                        <WatermarkOverlay />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                          <div className="p-4 pb-6">
                            <h3 className="text-white text-xl font-bold mb-3 line-clamp-2 min-h-[3rem] flex items-center">
                              {project.name}
                            </h3>
                            <button
                              className="bg-[#C4A962] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D4B972] transition-colors w-full"
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onContextMenu={(e) => e.preventDefault()}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg flex flex-col">
            {/* Fixed header with dark background */}
            <div className="sticky top-0 z-10 bg-gray-900 p-4 flex justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white truncate max-w-[80%]">
                {selectedProject.name}
              </h2>
              <button 
                onClick={closeModal}
                className="text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Image section */}
                  <div className="flex-1">
                    <div 
                      className="relative bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80 w-full flex items-center justify-center"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ProtectedImage 
                          src={
                            currentImageIndex === 0 
                              ? selectedProject.image 
                              : selectedProject.additionalImages?.[currentImageIndex - 1] || selectedProject.image
                          } 
                          alt={selectedProject.name} 
                        />
                      </div>
                      
                      {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                            aria-label="Previous image"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
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
                            className={`aspect-square cursor-pointer border-2 ${currentImageIndex === 0 ? 'border-[#C4A962]' : 'border-transparent'} bg-gray-100 flex items-center justify-center`}
                          >
                            <ProtectedImage src={selectedProject.image} alt="Main view" />
                          </div>
                          {selectedProject.additionalImages.map((img, idx) => (
                            <div
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx + 1)}
                              className={`aspect-square cursor-pointer border-2 ${currentImageIndex === idx + 1 ? 'border-[#C4A962]' : 'border-transparent'} bg-gray-100 flex items-center justify-center`}
                            >
                              <ProtectedImage src={img} alt={`Additional view ${idx + 1}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Details section */}
                  <div className="flex-1">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Details</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Completion Date</h3>
                        <p className="text-gray-700">{selectedProject.completionDate}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Project Type</h3>
                        <p className="text-gray-700 capitalize">
                          {selected === 'Interior' && selectedProject.subcategory 
                            ? `${selectedProject.subcategory} ${selected}` 
                            : selected}
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={closeModal}
                      className="mt-8 bg-[#C4A962] text-black px-6 py-3 rounded-md font-medium hover:bg-[#D4B972] transition-colors w-full"
                    >
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}