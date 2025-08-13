/**
 * @file ContextCollapse.jsx
 * @module ContextCollapse
 * @description
 * A section that explains "The Context Collapse," refactored to use Tailwind CSS.
 *
 * @requires framer-motion
 * @requires react-icons
 * @requires react-type-animation
 */
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiFigma, FiFileText } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

// Assumes the new minimal CSS file is created and linked
import "../../../../public/designSystem.css";

// --- Sub-Components for Visual Metaphor ---

const AnimatedCodeCard = () => (
  <div className="w-full max-w-md rounded-lg border border-white/10 bg-[#1f2937] shadow-2xl">
    <div className="flex items-center gap-2 border-b border-white/10 bg-[#374151] p-3">
      <div className="h-3 w-3 rounded-full bg-[#ef4444]"></div>
      <div className="h-3 w-3 rounded-full bg-[#f59e0b]"></div>
      <div className="h-3 w-3 rounded-full bg-[#22c55e]"></div>
    </div>
    <div className="min-h-[100px] p-6 font-mono text-sm text-gray-300">
      <pre>
        <code>
          <TypeAnimation
            sequence={[
              "const getProjectDetails = (id) => {",
              1000,
              "const getProjectDetails = (id) => {\n  const project = await fetch(`/api/projects/${id}`);\n  return project.process;\n};",
              5000,
              "",
            ]}
            wrapper="span"
            speed={50}
            cursor={true}
            repeat={Infinity}
            style={{ whiteSpace: "pre-line", display: "inline-block" }}
          />
        </code>
      </pre>
    </div>
  </div>
);

const StaticArtifact = () => (
  <div className="w-[250px] opacity-80">
    <div className="rounded-lg border border-white/10 bg-[#1f2937] p-2 shadow-xl">
      <div className="flex gap-2 border-b border-white/10 pb-2">
        <div className="h-3 w-3 rounded-full bg-white/10"></div>
        <div className="h-3 w-3 rounded-full bg-white/10"></div>
        <div className="h-3 w-3 rounded-full bg-white/10"></div>
      </div>
      <div className="pt-4">
        <div className="mb-3 h-2.5 w-4/5 rounded-lg bg-white/5"></div>
        <div className="mb-3 h-2.5 w-11/12 rounded-lg bg-white/5"></div>
        <div className="h-2.5 w-3/5 rounded-lg bg-white/5"></div>
      </div>
    </div>
  </div>
);

// --- Main Component ---

const ContextCollapse = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-32 px-8 text-[#e5e7eb]">
      <div className="dotted-background"></div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left Column: Visual Metaphor */}
        <div className="flex min-h-[400px] flex-col items-center justify-center">
          <motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            <AnimatedCodeCard />
            <div className="my-4 h-16 w-px bg-gradient-to-b from-blue-400/50 to-transparent"></div>
            <StaticArtifact />
          </motion.div>
        </div>

        {/* Right Column: The Narrative */}
        <div className="text-left">
          <motion.h2
            className="mb-8 font-['Syne'] text-4xl font-bold leading-tight text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
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
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p>
              Your <FiGithub className="inline-icon" /> GitHub shows your code,
              but not your architectural genius. Your{" "}
              <FiFigma className="inline-icon" /> Behance shows the final
              pixels, but not the tough design decisions you overcame. Resumes
              and portfolios <FiFileText className="inline-icon" /> today are
              flat files—they show the{" "}
              <span className="font-medium text-[#46c4fa]">what</span>, but
              completely miss the{" "}
              <span className="font-medium text-[#46c4fa]">how</span> and the{" "}
              <span className="font-medium text-[#46c4fa]">why</span>.
            </p>
            <p>
              Recruiters, clients, and collaborators never see the most valuable
              part of your work:{" "}
              <strong className="highlight-process">your process.</strong>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContextCollapse;
