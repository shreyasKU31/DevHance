import { motion } from "framer-motion";

const FloatingIcon = ({ icon }) => {
  const { Icon, position, color } = icon;
  return (
    <motion.div
      className="absolute w-12"
      style={{ ...position, color: color }}
      animate={{ y: [0, -10, 0, 10, 0] }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
  <Icon width={36} height={36} />
    </motion.div>
  );
};

export default FloatingIcon;
