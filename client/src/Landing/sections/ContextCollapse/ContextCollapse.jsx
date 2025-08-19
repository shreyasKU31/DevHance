/**
 * @file ContextCollapse.jsx
 * @module ContextCollapse
 * @description Section 2: Visually and textually defines "The Context Collapse."
 * @requires framer-motion, react-icons/fa
 */
import React from "react";
import { motion } from "framer-motion";
import icons from "./icons.js";
import FloatingIcon from "./FloatingIcon";

// --- Main Component ---
const ContextCollapse = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-32 px-8 text-[#e5e7eb]">
      <div className="absolute inset-0 z-0">
        {icons.map((icon, i) => (
          <FloatingIcon key={i} icon={icon} />
        ))}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="text-left">
          <motion.h2
            className="mb-8 font-['Syne'] text-4xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Your Work is Brilliant.
            <br />
            Your Portfolio is Broken.
          </motion.h2>
          <motion.div
            className="space-y-6 text-lg leading-relaxed text-gray-300/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
          >
            <p>
              Your GitHub shows your code, but not your architectural genius.
              Your Behance shows the final pixels, but not the tough design
              decisions you overcame. Resumes and portfolios today are flat
              files—they show the
              <span className="font-semibold text-[#46C4FA]"> what</span>, but
              completely miss the
              <span className="font-semibold text-[#46C4FA]"> how</span> and the
              <span className="font-semibold text-[#46C4FA]"> why</span>.
            </p>
            <p>
              Recruiters, clients, and collaborators never see the most valuable
              part of your work:
              <strong className="highlight-process"> your process.</strong>
            </p>
          </motion.div>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default ContextCollapse;
