/**
 * @file FeatureShowcase.jsx
 * @module FeatureShowcase
 * @description An interactive section to demonstrate the core features of the devhance editor.
 * @requires framer-motion, react-icons/fi, react-type-animation
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFeather, FiPlayCircle, FiCode } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

// --- Data for the Feature Control Panel ---
const features = [
  {
    id: "narrative",
    Icon: FiFeather,
    title: "Rich Narrative Editor",
    description:
      "Weave your story with powerful text formatting, from headings and pull-quotes to inline comments.",
  },
  {
    id: "media",
    Icon: FiPlayCircle,
    title: "Dynamic Media Integration",
    description:
      "Embed anything—Figma prototypes, live code sandboxes, and high-resolution videos—directly into your narrative.",
  },
  {
    id: "code",
    Icon: FiCode,
    title: "Insightful Code Showcasing",
    description:
      "Go beyond static snippets. Highlight specific lines, add annotations, and link directly to your GitHub repo.",
  },
];

// --- Visualizer Components ---

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

const CodeVisualizer = () => (
  <motion.div
    key="code"
    className="p-8 font-mono text-sm text-left text-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* UPDATED: Simple, understandable auth code example */}
    <TypeAnimation
      sequence={[
        `// A simple function to check if a user has access.\n\nfunction canUserAccess(user) {\n  // 1. Check if the user is logged in.\n  if (!user.isLoggedIn) {\n    return "Access Denied: Please log in.";\n  }\n\n  // 2. Check if the user has the 'admin' role.\n  if (user.role === "admin") {\n    return "Welcome, Admin! Full access granted.";\n  }\n\n  // If not an admin, grant basic access.\n  return "Welcome! Basic access granted.";\n}`,
      ]}
      wrapper="pre"
      speed={60}
      cursor={true}
      repeat={0}
      style={{ whiteSpace: "pre-line" }}
    />
  </motion.div>
);

// --- Main Component ---
const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section className="w-full bg-[#111827] py-32 px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-['Syne'] text-4xl font-bold text-white">
          Build Your Narrative, Block by Block.
        </h2>
        <p className="mt-4 text-lg text-gray-300/80">
          devhance provides a powerful, intuitive editor to bring every piece of
          your project's story together.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 items-start gap-16 md:grid-cols-3">
        {/* Left Column: Feature Control Panel */}
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className="relative cursor-pointer rounded-lg p-6 text-left transition-colors hover:bg-white/5"
            >
              {activeFeature === feature.id && (
                <motion.div
                  layoutId="active-feature-bar"
                  className="active-feature-bar"
                />
              )}
              <div className="relative z-10">
                <div
                  className={`mb-3 text-2xl ${
                    activeFeature === feature.id
                      ? "text-[#46C4FA]"
                      : "text-gray-400"
                  }`}
                >
                  <feature.Icon />
                </div>
                <h3
                  className={`mb-2 font-['Syne'] text-lg font-bold ${
                    activeFeature === feature.id
                      ? "text-white"
                      : "text-gray-300"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: The Animated Visualizer */}
        <div className="sticky top-24 md:col-span-2">
          <div className="glass-pro min-h-[400px] w-full rounded-2xl">
            <AnimatePresence mode="wait">
              {activeFeature === "narrative" && <NarrativeVisualizer />}
              {activeFeature === "media" && <MediaVisualizer />}
              {activeFeature === "code" && <CodeVisualizer />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
