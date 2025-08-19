/**
 * @file FeatureShowcase.jsx
 * @module FeatureShowcase
 * @description An interactive section to demonstrate the core features of the devhance editor.
 * @requires framer-motion, react-icons/fi, react-type-animation
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MediaVisualizer from "./MediaVisualizer";
import CodeVisualizer from "./CodeVisualizer";
import NarrativeVisualizer from "./NarrativeVisualizer";
import features from "./features.js";
import { Feather, Play, Code } from "lucide-react";

// --- Main Component ---
const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const icons = [<Feather />, <Play />, <Code />];

  return (
    <section id="features" className="w-full bg-[#111827] py-32 px-8">
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
          {features.map((feature, i) => (
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
                  {icons[i]}
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
