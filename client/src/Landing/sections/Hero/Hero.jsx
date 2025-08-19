/**
 * @file HeroSection.jsx
 * @module HeroSection
 * @description
 * A simplified hero section focusing on the headline and CTAs.
 *
 * @requires framer-motion
 * @requires typewriter-effect
 * @requires lucide-react
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Assuming clickPopup is a valid import from your project structure
// import clickPopup from "../../common/WaitlistForm/Form";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight } from "lucide-react";

// A placeholder for the clickPopup function if it's not available
const clickPopup = () => console.log("Request Early Access button clicked");

const HeroSection = () => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1200); // 1.2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#111827] p-4 text-[#e5e7eb]">
      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center p-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="font-Syne text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span className="mt-2 block text-3xl text-white md:text-5xl lg:text-6xl">
              Your Project is a
              <span className="animated-build ml-4"> Masterpiece.</span>
            </span>
          </h1>
          {/* Animated Sub-headline using react-type-animation */}

          <div className="mt-4 h-16">
            {showTypewriter && (
              <TypeAnimation
                sequence={[
                  "Unveil your Process.",
                  2000,
                  "Showcase your Story.",
                  2000,
                  "Amaze the World.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="font-['Syne'] text-3xl font-bold text-white md:text-5xl lg:text-6xl"
                cursor={true}
                repeat={Infinity}
              />
            )}
          </div>

          <p className="mx-auto mt-2 max-w-2xl text-base text-gray-200/80 md:text-lg">
            The professional platform where creators don't just show their
            work—they explain its genius.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{
                y: -4,
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.2), 0 0 25px -5px rgba(252, 68, 231, 0.5)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={clickPopup}
              className="group signup-button inline-flex w-full items-center justify-center rounded-full bg-gradient-aura px-8 py-4 text-base font-semibold tracking-widest text-white sm:w-auto"
            >
              Request Early Access
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </motion.button>
          </div>

          <p className="mt-8 text-sm text-gray-400/60">
            Join innovators from Google, Figma, and MIT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
