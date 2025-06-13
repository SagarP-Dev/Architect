import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

// Import all images
import bapiBhai from "../assets/bapi-bhai.jpg"; 
import project3 from '../assets/rajendra-behera.jpg'; 
import project4 from '../assets/sankar-sen.jpg'; 
import img5 from '../assets/sandipan.jpg'; 
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
import img38 from '../assets/WhatsApp Image 2025-06-11 at 20.30.40_13ffd703.jpg';
import img39 from '../assets/WhatsApp Image 2025-06-11 at 20.30.45_27c50deb.jpg';
import img40 from '../assets/WhatsApp Image 2025-06-11 at 20.30.44_bec39354.jpg';
import img41 from '../assets/WhatsApp Image 2025-06-11 at 20.30.44_91392386.jpg';
import img42 from '../assets/WhatsApp Image 2025-06-11 at 20.30.44_235dac89.jpg';
import img43 from '../assets/WhatsApp Image 2025-06-11 at 20.30.43_7faed58a.jpg';
import img44 from '../assets/WhatsApp Image 2025-06-11 at 20.30.42_9bdd8761.jpg';
import img45 from '../assets/WhatsApp Image 2025-06-11 at 20.30.42_fe73bfd4.jpg';
import img46 from '../assets/WhatsApp Image 2025-06-11 at 20.31.21_80695e22.jpg';
import img47 from '../assets/WhatsApp Image 2025-06-11 at 20.31.20_152c0e44.jpg';
import img48 from '../assets/WhatsApp Image 2025-06-11 at 20.31.19_066c2ce5.jpg';


type Category = 'All' | 'Residential' | 'Commercial' | 'Interior';
type InteriorSubcategory = 'Bedroom' | 'Dining' | 'Living Room' | 'Office' | 'Puja Room';

interface Project {
  image: string;
  name: string;
  description: string;
  additionalImages?: string[];
  subcategory?: InteriorSubcategory;
  category: 'Residential' | 'Commercial' | 'Interior';
  status?: 'ongoing' | 'completed';
}

const projectsData: Record<Exclude<Category, 'All'>, Project[]> = {
  Residential: [
    {
      image: img46,
      name: 'Electronic Hub',
      description: 'XYZ',
      additionalImages: [img48, img47],
      category: 'Commercial',
      status: 'ongoing'
    },
    {
      image: img38,
      name: 'Hero Showroom',
      description: 'XYZ',
      additionalImages: [img39, img40, img41, img42, img43, img44, img45],
      category: 'Commercial',
      status: 'ongoing'
    },
    {
      image: project3,
      name: 'Rajendra Behera',
      description: 'Luxury villa with premium finishes and custom architectural details.',
      additionalImages: [img13, img14],
      category: 'Residential',
      status: 'completed'
    },
    {
      image: project4,
      name: 'Sankar Sen',
      description: 'Elegant residence with traditional influences and modern comforts.',
      category: 'Residential',
      status: 'completed'
    },
    {
      image: img5,
      name: 'Sandipan Sarkar',
      description: 'Compact urban home with smart space utilization and minimalist design.',
      category: 'Residential',
      status: 'completed'
    }
  ],
  Commercial: [
    {
      image: img7,
      name: 'Toyota Showroom-Balasore',
      description: 'A sleek and professional corporate office space designed for the Toyota brand, blending functionality with modern aesthetics. This workspace features open-plan collaborative areas, private meeting rooms, and state-of-the-art facilities tailored for productivity and innovation. The design emphasizes clean lines, brand-themed elements, and a welcoming atmosphere for both staff and clients.',
      additionalImages: [img9, img10, img12, img11, img15],
      category: 'Commercial',
      status: 'completed'
    },
    {
      image: img34,
      name: 'Toyota Showroom-Baripada',
      description: 'A sleek and professional corporate office space designed for the Toyota brand, blending functionality with modern aesthetics. This workspace features open-plan collaborative areas, private meeting rooms, and state-of-the-art facilities tailored for productivity and innovation. The design emphasizes clean lines, brand-themed elements, and a welcoming atmosphere for both staff and clients.',
      additionalImages: [img35, img36, img37],
      category: 'Commercial',
      status: 'completed'
    },
    {
      image: bapiBhai,
      name: 'Shree Nivas-Appartment',
      description: 'A beautiful residential property with modern amenities and elegant design.',
      additionalImages: [img18, img16],
      category: 'Commercial',
      status: 'completed'
    },
  ],
  Interior: [
    // Bedroom projects
    {
      image: img17,
      name: '',
      description: 'A cozy and tranquil bedroom retreat designed for comfort and relaxation. Featuring soft lighting, warm textures, and a harmonious color palette, the space creates a serene ambiance ideal for unwinding. Thoughtful furnishings, ample storage, and subtle design accents ensure both style and functionality, making it a perfect personal sanctuary.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img21,
      name: '',
      description: 'A cozy and tranquil bedroom retreat designed for comfort and relaxation. Featuring soft lighting, warm textures, and a harmonious color palette, the space creates a serene ambiance ideal for unwinding. Thoughtful furnishings, ample storage, and subtle design accents ensure both style and functionality, making it a perfect personal sanctuary.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img22,
      name: '',
      description: 'Luxurious sleeping quarters with premium bedding and decor.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img26,
      name: '',
      description: 'First design option for primary bedroom with neutral palette.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img27,
      name: '',
      description: 'Second design option with warmer tones and textured finishes.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img28,
      name: '',
      description: 'Third design option featuring bold colors and modern art.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img29,
      name: '',
      description: 'First option for accommodations with minimalist design.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img30,
      name: '',
      description: 'Second option with more traditional furnishings and decor.',
      subcategory: 'Bedroom',
      category: 'Interior',
      status: 'completed'
    },
    
    // Dining projects
    {
      image: img23,
      name: '',
      description: 'Elegant dining space for entertaining guests and family gatherings.',
      subcategory: 'Dining',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img24,
      name: '',
      description: 'Casual dining area with comfortable seating and natural light.',
      subcategory: 'Dining',
      category: 'Interior',
      status: 'completed'
    },
    
    // Living Room projects
    {
      image: img20,
      name: '',
      description: 'Modern living room with elegant furniture and lighting fixtures.',
      subcategory: 'Living Room',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img31,
      name: '',
      description: 'Home theater with premium audio-visual equipment and seating.',
      subcategory: 'Living Room',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img32,
      name: '',
      description: 'Spacious living area with modern design elements.',
      subcategory: 'Living Room',
      category: 'Interior',
      status: 'completed'
    },
    
    // Office projects
    {
      image: img25,
      name: '',
      description: 'Contemporary Office space with modern furniture and decor.',
      subcategory: 'Office',
      category: 'Interior',
      status: 'completed'
    },
    {
      image: img19,
      name: '',
      description: 'Beautifully crafted office with intricate designs and decorations.',
      subcategory: 'Office',
      category: 'Interior',
      status: 'completed'
    },
    
    // Puja Room projects
    {
      image: img33,
      name: '',
      description: 'Sacred space designed for worship and meditation.',
      subcategory: 'Puja Room',
      category: 'Interior',
      status: 'completed'
    }
  ],
};

// Combine all projects for the "All" category
const allProjects = [
  ...projectsData.Residential,
  ...projectsData.Commercial,
  ...projectsData.Interior
];

const WatermarkOverlay = () => (
  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
    <div className="text-white/10 text-xl font-bold transform -rotate-15 select-none">
      © Ecoscape
    </div>
  </div>
);

interface ProtectedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ProtectedImage = ({ src, alt, className = '', priority = false }: ProtectedImageProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover pointer-events-none"
        onContextMenu={(e) => e.preventDefault()}
        loading={priority ? "eager" : "lazy"}
      />
      <WatermarkOverlay />
    </div>
  );
};

const ProjectCard = ({ 
  project, 
  index,
  openModal 
}: { 
  project: Project; 
  index: number;
  openModal: (project: Project) => void;
}) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
    className="overflow-hidden rounded-lg shadow-lg relative group cursor-pointer h-96"
    onClick={(e) => {
      e.stopPropagation();
      openModal(project);
    }}
    onContextMenu={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }}
  >
    <div className="relative w-full h-full flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <ProtectedImage 
            src={project.image} 
            alt={`${project.category} Work ${index + 1}`}
            priority={index < 6}
          />
        </div>
      </div>
      
      <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 h-32 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-1 line-clamp-2">
          {project.category === 'Interior' && !project.name 
            ? '' 
            : project.name || `${project.category} Project`}
        </h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-[#C4A962] text-sm capitalize">
            {project.category}
            {project.subcategory ? ` • ${project.subcategory}` : ''}
          </span>
          {project.status === 'ongoing' && (
            <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full">
              Ongoing
            </span>
          )}
        </div>
        <button
          className="bg-[#C4A962] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D4B972] transition-colors w-full"
        >
          View Details
        </button>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const [selected, setSelected] = useState<Category>('All');
  const [selectedInteriorSubcategory, setSelectedInteriorSubcategory] = useState<InteriorSubcategory | 'All'>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const loadedImages = useRef<Set<string>>(new Set());
  const [categoryReady, setCategoryReady] = useState<Record<Category, boolean>>({
    All: false,
    Residential: false,
    Commercial: false,
    Interior: false
  });

  useEffect(() => {
    const loadImagesForCategory = (category: Category) => {
      let categoryImages: string[] = [];
      
      if (category === 'All') {
        categoryImages = allProjects.flatMap(project => 
          [project.image, ...(project.additionalImages || [])]
        );
      } else {
        categoryImages = projectsData[category].flatMap(project => 
          [project.image, ...(project.additionalImages || [])]
        );
      }

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

    (['All', 'Residential', 'Commercial', 'Interior'] as Category[]).forEach(category => {
      loadImagesForCategory(category);
    });
  }, []);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
    window.history.pushState({ modalOpen: true }, '');
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    if (window.history.state?.modalOpen) {
      window.history.back();
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (isModalOpen) {
        closeModal();
        window.history.pushState(null, '', window.location.pathname);
      }
    };
  
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [isModalOpen, closeModal]);

  const nextImage = useCallback(() => {
    if (!selectedProject?.additionalImages) return;
    const totalImages = (selectedProject.additionalImages?.length || 0) + 1;
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject?.additionalImages) return;
    const totalImages = (selectedProject.additionalImages?.length || 0) + 1;
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [selectedProject]);

  const handleCategoryChange = useCallback((category: Category) => {
    if (category === selected || isLoading) return;
    
    setIsLoading(true);
    setSelected(category);
    setShowAllProjects(false);
    
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
  }, [selected, isLoading, categoryReady]);

  const handleInteriorSubcategoryChange = useCallback((subcategory: InteriorSubcategory | 'All') => {
    setSelectedInteriorSubcategory(subcategory);
  }, []);

  const getFilteredProjects = useCallback(() => {
    if (selected === 'All') {
      return allProjects;
    }
    
    if (selected !== 'Interior' || selectedInteriorSubcategory === 'All') {
      return projectsData[selected];
    }
    
    return projectsData[selected].filter(project => project.subcategory === selectedInteriorSubcategory);
  }, [selected, selectedInteriorSubcategory]);

  const getOngoingProjects = useCallback(() => {
    return allProjects.filter(project => project.status === 'ongoing');
  }, []);

  const getCompletedProjects = useCallback(() => {
    const filtered = getFilteredProjects().filter(project => project.status !== 'ongoing');
    return showAllProjects ? filtered : filtered.slice(0, 6);
  }, [getFilteredProjects, showAllProjects]);

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
  }, [isModalOpen, closeModal, nextImage, prevImage]);

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

  const tabs: Category[] = ['All', 'Residential', 'Commercial', 'Interior'];
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
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="text-4xl md:text-5xl font-serif text-[#C4A962] mb-12 text-center"
        >
          Our Works
        </motion.h2>

        {/* Ongoing Projects Section */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.6 } }
          }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-serif text-[#C4A962] mb-8 text-center">
            Ongoing Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {getOngoingProjects().map((project, index) => (
              <ProjectCard 
                key={`ongoing-${index}`}
                project={project}
                index={index}
                openModal={openModal}
              />
            ))}
          </div>
        </motion.div>

        {/* Completed Projects Section */}
        <motion.div 
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 0.6 } }
          }}
        >
          <h3 className="text-2xl md:text-3xl font-serif text-[#C4A962] mb-8 text-center">
            Completed Projects
          </h3>

          <div className="flex justify-center mb-10 gap-4 flex-wrap">
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
                    {getCompletedProjects().map((project, index) => (
                      <ProjectCard 
                        key={`completed-${index}`}
                        project={project}
                        index={index}
                        openModal={openModal}
                      />
                    ))}
                  </motion.div>

                  {!showAllProjects && getFilteredProjects().length > 6 && (
                    <div className="text-center mt-10">
                      <button
                        onClick={() => setShowAllProjects(true)}
                        className="bg-transparent border border-[#C4A962] text-[#C4A962] px-6 py-3 rounded-md text-sm font-medium hover:bg-[#C4A962]/10 transition-colors"
                      >
                        View More Projects
                      </button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90"
          onClick={closeModal}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <div 
            className="relative w-full max-w-6xl bg-white rounded-lg overflow-hidden max-h-[90vh] flex flex-col lg:flex-row"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh' }}
          >
            {/* Mobile close button */}
            <button 
              onClick={closeModal}
              className="lg:hidden absolute top-2 right-2 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Desktop close button */}
            <button 
              onClick={closeModal}
              className="hidden lg:block absolute top-4 lg:top-[120px] right-4 z-50 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full lg:w-[70%] h-[70vh] lg:h-auto relative bg-gray-100 flex items-center justify-center">
              <div 
                className="relative w-full h-full flex items-center justify-center overflow-auto"
                onContextMenu={(e) => e.preventDefault()}
              >
                <div className="w-full h-full flex items-center justify-center p-2">
                  <img
                    src={
                      currentImageIndex === 0 
                        ? selectedProject.image 
                        : selectedProject.additionalImages?.[currentImageIndex - 1] || selectedProject.image
                    }
                    alt={selectedProject.name || `${selectedProject.category} Project`}
                    className="max-w-full max-h-full object-contain"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>

              {selectedProject.additionalImages && selectedProject.additionalImages.length > 0 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
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

            <div className="w-full lg:w-[30%] p-6 overflow-y-auto flex flex-col">
              <div className="flex-grow mt-6 lg:mt-40">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {selectedProject.description}
                </p>

                <div className="border-t border-gray-200 pt-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-1">Project Type</h4>
                  <p className="text-gray-600 text-sm capitalize">
                    {selectedProject.category}
                    {selectedProject.subcategory ? ` • ${selectedProject.subcategory}` : ''}
                  </p>
                </div>

                {selectedProject.status && (
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">Status</h4>
                    <p className="text-gray-600 text-sm capitalize">
                      {selectedProject.status === 'ongoing' ? (
                        <span className="text-yellow-600">In Progress</span>
                      ) : (
                        <span className="text-green-600">Completed</span>
                      )}
                    </p>
                  </div>
                )}
              </div>

              <button
                onClick={closeModal}
                className="bg-[#C4A962] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D4B972] transition-colors w-full mt-auto"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
