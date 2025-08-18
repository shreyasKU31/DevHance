import React, { useState, useEffect } from "react";
import Navbar from "./ui/NavBar";
import Hero from "./Hero";
import ContextCollapse from "./ContextCollapse";
import SolutionShowcase from "./SolutionShowcase";
import FeatureShowcase from "./FeatureShowcase";
import Testimonials from "./Testimonials";
import WaitlistCTA from "./WaitlistCTA";
import Footer from "./Footer";

const LandingPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to track mouse position for the cursor spotlight
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Interactive Cursor Spotlight */}
      <div
        className="cursor-spotlight"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
        aria-hidden="true"
      />
      <Navbar />
      <Hero />
      <ContextCollapse />
      <SolutionShowcase />
      <FeatureShowcase />
      <Testimonials />
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
