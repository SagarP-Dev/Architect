import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react'; // Added hooks
import ecoscapeLogo from '../assets/ChatGPT Image Jun 12, 2025, 04_38_02 PM.png';
import constructionVideo from '../assets/8964796-uhd_3840_2160_25fps.mp4';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stats = [
    { value: "5+", label: "YEARS EXPERIENCE" },
    { value: "23+", label: "PROJECTS COMPLETED" },
    { value: "23+", label: "HAPPY CLIENTS" },
    { value: "24/7", label: "SUPPORT" }
  ];

  // Handle video load with fade-in effect
  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    e.currentTarget.style.opacity = '1';
    setIsLoading(false);
  };

  // Fallback in case the video events don't fire
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Fallback timeout

    return () => clearTimeout(timer);
  }, []);

  // Check if video is already loaded (cached)
  useEffect(() => {
    if (videoRef.current?.readyState === 4) {
      setIsLoading(false);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Critical CSS Inlined */}
      <style>{`
        #home video {
          opacity: 0;
          transition: opacity 1s ease;
        }
        @media (max-width: 768px) {
          .hero-stats {
            margin-top: 2rem;
          }
        }
        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 20;
          display: ${isLoading ? 'block' : 'none'};
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: #C4A962;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}

      {/* Optimized Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad} // Additional event for better coverage
          onError={() => setIsLoading(false)} // Hide loader if video fails
          preload="metadata"
          poster={ecoscapeLogo}
        >
          <source src={constructionVideo} type="video/mp4" />
          <img 
            src={ecoscapeLogo} 
            alt="Construction background" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content - Only show when not loading */}
      {!isLoading && (
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-8">
            
            {/* Left Side - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Logo with optimized loading */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-4 sm:mb-5"
              >
                <img
                  src={ecoscapeLogo}
                  alt="Ecoscape Logo"
                  className="w-[150px] sm:w-[220px] md:w-[260px] h-auto object-contain drop-shadow-lg mx-auto lg:mx-0 mb-3"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <p className="text-[#C4A962] font-semibold uppercase text-sm sm:text-base tracking-wider">
                  Build Joy, Build Dreams • Developers
                </p>
              </motion.div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                Building <span className="text-[#C4A962]">Dreams</span>,<br />
                Crafting <span className="text-[#C4A962]">Realities</span>
              </h1>

              {/* Subheadline */}
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-5 max-w-md mx-auto lg:mx-0">
                Transforming visions into exceptional living spaces with innovative design and sustainable construction.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full max-w-sm">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 bg-[#C4A962] text-gray-900 font-bold uppercase rounded-lg text-center shadow-md hover:shadow-[#C4A962]/50 transition-all text-xs"
                >
                  GET A FREE QUOTE
                </motion.a>
                <motion.a
                  href="#our-works"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 border-2 border-[#C4A962] text-white font-bold uppercase rounded-lg text-center hover:bg-[#C4A962]/10 transition-all text-xs"
                >
                  VIEW PROJECTS
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-auto flex-1 flex items-center justify-center mt-4 sm:mt-6 lg:mt-60 hero-stats"
            >
              <div className="w-full max-w-xs sm:max-w-md p-3 sm:p-5 md:p-6 bg-gray-900/60 backdrop-blur-md rounded-xl border border-gray-700/50">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-1.5 sm:p-2">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#C4A962] mb-0.5 sm:mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] xs:text-xs sm:text-sm uppercase tracking-wide text-gray-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
