import { motion } from 'framer-motion';

export default function RunningText() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-transparent py-3 px-4 overflow-hidden z-50">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />
      
      <motion.div
        className="whitespace-nowrap text-sm md:text-base font-medium text-[#F4E285]"
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        For any construction, design, or project-related inquiries, feel free to reach out to us at +91 94383 54999. We're here to help you bring your ideas to life!&nbsp;
        For any construction, design, or project-related inquiries, feel free to reach out to us at +91 94383 54999. We're here to help you bring your ideas to life!
      </motion.div>
    </div>
  );
}