/**
 * @file Testimonials.jsx
 * @module Testimonials
 * @description A section to showcase user testimonials, combining hero cards and a dynamic marquee.
 * @requires framer-motion, react-fast-marquee, react-icons/fa
 */
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaTwitter, FaFigma, FaGoogle } from "react-icons/fa";

// --- Mock Data ---

const heroTestimonials = [
  {
    quote:
      "devhance is a total game-changer for my portfolio. It's the first platform that truly understands the importance of process over just final pixels.",
    author: "Elena Rodriguez",
    title: "Lead Product Designer at Figma",
    headshot: "https://i.pravatar.cc/150?img=1",
    CompanyIcon: FaFigma,
  },
  {
    quote:
      "I can finally connect my code to my design decisions in one cohesive narrative. This is the future of how we showcase technical projects.",
    author: "Marcus Chen",
    title: "Senior Frontend Engineer at Google",
    headshot: "https://i.pravatar.cc/150?img=2",
    CompanyIcon: FaGoogle,
  },
];

const wallOfLoveTweets = [
  {
    handle: "@sarah_dev",
    text: "devhance is a game-changer for my portfolio. Finally, a way to explain the 'why'!",
  },
  {
    handle: "@kenji_ux",
    text: "Just spent an hour on devhance. The future of showcasing work is here.",
  },
  {
    handle: "@david_codes",
    text: "The ability to embed live code sandboxes is incredible. My case studies feel alive.",
  },
  {
    handle: "@priya_creates",
    text: "Recruiters are loving my new devhance portfolio. The context is everything.",
  },
  {
    handle: "@liam_design",
    text: "Finally, a platform that respects the entire creative process. A must-have for any serious designer.",
  },
  {
    handle: "@chloe_builds",
    text: "The narrative editor is so intuitive. I built my first showcase in an afternoon.",
  },
];

// --- Helper Components ---

const HeroTestimonialCard = ({
  quote,
  author,
  title,
  headshot,
  CompanyIcon,
}) => (
  <motion.div
    className="glass-pro flex h-full flex-col justify-between p-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div>
      <p className="mb-6 text-xl leading-relaxed text-gray-300">
        "
        {quote.replace(
          "a total game-changer",
          `<span class="font-semibold text-[#46C4FA]">a total game-changer</span>`
        )}
        "
      </p>
    </div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={headshot}
          alt={author}
          className="mr-4 h-14 w-14 rounded-full border-2 border-white/30"
        />
        <div>
          <p className="font-['Syne'] text-lg font-bold text-white">{author}</p>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
      <CompanyIcon className="text-4xl text-white/50" />
    </div>
  </motion.div>
);

const WallOfLove = () => (
  <div className="wall-of-love-container">
    <Marquee pauseOnHover speed={40} gradient={false}>
      {wallOfLoveTweets.map((tweet, i) => (
        <div key={i} className="tweet-card">
          <FaTwitter className="mr-3 text-4xl text-blue-400" />
          <div>
            <p className="font-bold text-white">{tweet.handle}</p>
            <p className="text-gray-300">{tweet.text}</p>
          </div>
        </div>
      ))}
    </Marquee>
  </div>
);

// --- Main Component ---
const Testimonials = () => {
  return (
    <section className="w-full overflow-hidden bg-[#111827] py-32 px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-['Syne'] text-4xl font-bold text-white">
          Built for Creators. Loved by Innovators.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-300/80">
          From solo developers to lead designers at top companies, see what our
          community is saying about devhance.
        </p>
      </div>

      {/* Hero Testimonials */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
        {heroTestimonials.map((testimonial, i) => (
          <HeroTestimonialCard key={i} {...testimonial} />
        ))}
      </div>

      {/* Wall of Love Marquee */}
      <div className="mt-24 [transform:rotate(-2deg)]">
        <WallOfLove />
      </div>
    </section>
  );
};

export default Testimonials;
