/**
 * @file SolutionShowcase.jsx
 * @module SolutionShowcase
 * @description Section 3: The animated solution reveal with syntax highlighting.
 * @requires framer-motion, react-type-animation, react-syntax-highlighter
 */
import React from "react";
import { useInView } from "framer-motion";
import AnimatedCodeEditor from "./AnimatedCodeEditor";

// --- Main Component ---
const SolutionShowcase = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="relative w-full bg-[#111827] py-32">
      <div className="relative z-10">{isInView && <AnimatedCodeEditor />}</div>
    </section>
  );
};

export default SolutionShowcase;
