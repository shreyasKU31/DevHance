import React, { useState, useEffect } from "react";
import Navbar from "./ui/NavBar";
import Hero from "./Hero";
import ContextCollapse from "./ui/ContextCollapse";

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
    </div>
  );
};

export default LandingPage;
