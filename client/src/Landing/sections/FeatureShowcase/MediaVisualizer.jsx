import { motion } from "framer-motion";

const MediaVisualizer = () => (
  <motion.div
    key="media"
    className="flex h-full w-full items-center justify-center p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="relative h-48 w-full max-w-sm rounded-lg border border-dashed border-white/20"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
        Drop your embed here
      </div>
      {/* Mock Figma Embed animating in */}
      <motion.div
        className="absolute inset-2 rounded-md bg-gradient-to-br from-purple-500 to-pink-500 p-4 text-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <p className="font-bold">Figma Prototype</p>
        <div className="mt-2 h-16 w-full rounded bg-white/20"></div>
      </motion.div>
    </motion.div>
  </motion.div>
);

export default MediaVisualizer;
