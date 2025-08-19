import React, { useState, useEffect } from "react";
import Navbar from "../common/NavBar/NavBar";
import Hero from "../sections/Hero/Hero";
import ContextCollapse from "../sections/ContextCollapse/ContextCollapse";
import SolutionShowcase from "../sections/SolutionShowcase/SolutionShowcase";
import FeatureShowcase from "../sections/FeatureShowcase/FeatureShowcase";
import Testimonials from "../sections/Testimonials/Testimonials";
import WaitlistCTA from "../sections/WaitlistCTA/WaitlistCTA";
import Footer from "../common/Footer/Footer";

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
      {/* <Testimonials /> */}
      <WaitlistCTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
