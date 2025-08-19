/**
 * @file Testimonials.jsx
 * @module Testimonials
 * @description A section to showcase user testimonials, combining hero cards and a dynamic marquee.
 * @requires framer-motion, react-fast-marquee, react-icons/fa
 */
import HeroTestimonialCard from "./HeroTestimonialCard";
import WallOfLove from "./WallOfLove";
import { heroTestimonials } from "./data.js";
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
