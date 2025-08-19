import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const NarrativeVisualizer = () => (
  <motion.div
    key="narrative"
    className="p-8 text-left text-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <TypeAnimation
      sequence={[
        "# Project Alpha: A Deep Dive",
        1000,
        "# Project Alpha: A Deep Dive\n\nThe initial challenge was to create a scalable architecture...",
        1000,
        "# Project Alpha: A Deep Dive\n\nThe initial challenge was to create a scalable architecture...\n\n> This became the foundational principle for the entire system.",
      ]}
      wrapper="pre"
      speed={60}
      cursor={true}
      repeat={0}
      style={{ whiteSpace: "pre-line", fontFamily: "Lexend, sans-serif" }}
    />
  </motion.div>
);

export default NarrativeVisualizer;
