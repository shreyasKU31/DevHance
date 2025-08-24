/**
 * @file GridBeamBackground.tsx
 * @module GridBeamBackground
 * @description A creative, animated background with a dot grid and moving beams of light.
 * @requires react, framer-motion
 */
import React from "react";
import { motion } from "framer-motion";

const GridBeamBackground = () => {
  return (
    <div className="grid-beam-background -z-20" aria-hidden="true">
      {/* The static dot grid is applied via CSS */}
      <div className="dot-grid"></div>

      {/* The animated, glowing beams */}
      <motion.div
        className="beam beam-1"
        animate={{ x: ["100%", "-100%"], y: ["50%", "50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="beam beam-2"
        animate={{ x: ["-100%", "100%"], y: ["-50%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="beam beam-3"
        animate={{ x: ["100%", "-100%"], y: ["-50%", "50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="beam beam-4"
        animate={{ x: ["-100%", "100%"], y: ["-50%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GridBeamBackground;
