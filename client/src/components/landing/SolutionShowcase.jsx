/**
 * @file SolutionShowcase.jsx
 * @module SolutionShowcase
 * @description Section 3: The animated solution reveal with syntax highlighting.
 * @requires framer-motion, react-type-animation, react-syntax-highlighter
 */
import React from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// --- Helper Component for the Animated Code Editor ---
const AnimatedCodeEditor = () => {
  return (
    <motion.div
      className="glass-pro mx-auto w-full max-w-4xl rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // Add the floating animation
      animate={{ y: [0, -10, 0] }}
      style={{
        transition: "transform 6s ease-in-out infinite",
      }}
    >
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/10 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <div className="min-h-[300px] p-6 font-mono text-sm text-left">
        <TypeAnimation
          sequence={[
            `// Import all your scattered context.\nimport { figmaDesigns } from '@figma';\nimport { sourceCode } from '@github';\nimport { videoDemo } from '@youtube';\n\n// Unify them into a single, powerful narrative.\nconst myStory = new devhance.Showcase({\n  title: "My Project's True Genius",\n  ...\n});\n\n// The result? A masterpiece.\nreturn myStory.render();`,
            5000, // Wait 5 seconds after typing
            () => {}, // Empty function to trigger repeat
          ]}
          speed={70}
          cursor={true}
          wrapper="pre"
          repeat={Infinity} // Repeat the animation infinitely
          codeTagProps={{
            children: (code) => (
              <SyntaxHighlighter
                language="javascript"
                style={vscDarkPlus}
                customStyle={{
                  background: "transparent",
                  whiteSpace: "pre-wrap",
                }}
              >
                {code}
              </SyntaxHighlighter>
            ),
          }}
        />
      </div>
    </motion.div>
  );
};

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
