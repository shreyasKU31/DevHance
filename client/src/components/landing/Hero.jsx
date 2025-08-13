/**
 * @file HeroSection.jsx
 * @module HeroSection
 * @description
 * A simplified hero section focusing on the headline and CTAs.
 *
 * @requires framer-motion
 * @requires typewriter-effect
 * @requires react-icons
 */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiArrowRight, FiEye } from "react-icons/fi";

// Assumes designSystem.css and HeroSection.css are loaded
import "../../../public/designSystem.css";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to track mouse position for the cursor spotlight
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#111827] text-[#e5e7eb] font-['Lexend'] overflow-hidden">
      {/* Interactive Cursor Spotlight */}
      <div
        className="cursor-spotlight"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-5xl mx-auto flex flex-col gap-4">
          <h1 className="font-['Syne'] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            <span className="block text-3xl md:text-5xl lg:text-6xl text-white mt-2">
              Your Project is a
              <span className="animated-build ml-4"> Masterpiece.</span>
            </span>
            <div className="mt-2">
              <Typewriter
                options={{
                  strings: [
                    "Unveil your Process.",
                    "Showcase your Story.",
                    "Amaze the World.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  wrapperClassName:
                    "text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight",
                  cursorClassName:
                    "text-4xl md:text-6xl lg:text-7xl text-[#fc44e7]",
                }}
              />
            </div>
          </h1>
          <p className="mt-2 text-base md:text-lg max-w-2xl mx-auto text-gray-200/80">
            The professional platform where creators don't just show their
            work—they explain its genius.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.2), 0 0 25px -5px rgba(252, 68, 231, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white rounded-full bg-gradient-aura w-full sm:w-auto"
            >
              Start Showcasing{" "}
              <FiArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-300 rounded-full border-gradient-aura-animated hover-glass-pro w-full sm:w-auto transition-colors duration-300 hover:text-white">
              <FiEye className="mr-2" /> Explore Projects
            </button>
          </div>
          <p className="mt-8 text-sm text-gray-400/60">
            Join innovators from Google, Figma, and MIT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
