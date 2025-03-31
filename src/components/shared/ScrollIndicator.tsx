import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <div className="w-[1px] h-16 bg-[#C4A962]" />
      <span className="text-sm uppercase tracking-wider text-[#C4A962]">Scroll</span>
    </motion.div>
  );
}