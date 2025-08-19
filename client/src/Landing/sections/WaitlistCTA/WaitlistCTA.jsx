/**
 * @file WaitlistCTA.jsx
 * @module WaitlistCTA
 * @description The final call-to-action section for the landing page.
 * @requires framer-motion, react-icons/fi
 */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import clickPopup from "../../common/WaitlistForm/Form";

// --- Main Component ---
const WaitlistCTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle the API submission here.
    // For this demo, we'll just simulate a successful submission.
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#111827] py-20 lg:py-32">
      {/* Layer 1: Animated Gradient Background */}
      <div className="animate-liquid-light absolute inset-0 z-0"></div>

      {/* Note: You could re-use your InteractiveLiquid component here for Layer 2 */}
      {/* For simplicity, I'm focusing on the gradient and form as requested. */}

      <div className="relative z-10 mx-auto max-w-3xl px-8 text-center">
        <motion.h2
          className="font-['Syne'] text-4xl font-bold text-white md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Your Story Awaits. Be the First to Tell It.
        </motion.h2>

        <motion.p
          className="mt-6 text-base text-white/80 md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Join the waitlist to get exclusive early access to the future of
          creative portfolios. It's free.
        </motion.p>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  type="submit"
                  className="group relative h-14 w-full rounded-xl bg-[#111827] px-8 font-medium text-white transition-transform duration-200 hover:-translate-y-1 sm:w-auto"
                  whileHover="hover"
                  onClick={clickPopup}
                >
                  <motion.div className="absolute inset-0 rounded-xl bg-gradient-aura opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                  <span className="relative">Be the First in Line</span>
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                className="flex items-center justify-center gap-3 text-lg text-green-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="text-2xl" />
                <span>You're on the list! We'll be in touch soon.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
