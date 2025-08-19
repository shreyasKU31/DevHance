import { motion } from "framer-motion";
const FloatingIcon = ({ icon }) => {
  const { Icon, position, color } = icon;
  return (
    <motion.div
      className="absolute"
      style={{ ...position, color: color }}
      animate={{ y: [0, -10, 0, 10, 0] }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Icon size="2rem" />
    </motion.div>
  );
};

export default FloatingIcon;
