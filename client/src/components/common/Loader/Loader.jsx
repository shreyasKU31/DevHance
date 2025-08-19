// src/components/Loader.jsx

import React from "react";
// We'll create this CSS file next

// Using the SVG logo from our previous work
const DevhanceLogo = () => (
  <svg
    height="80"
    viewBox="0 0 250 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-white"
  >
    <path
      d="M25.918 75.3848C15.7138 65.1805 15.7138 48.8195 25.918 38.6152L38.6152 25.918"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M74.082 24.6152C84.2862 34.8195 84.2862 51.1805 74.082 61.3848L61.3848 74.082"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text
      x="110"
      y="65"
      fontFamily="Syne, sans-serif"
      fontSize="48"
      fontWeight="bold"
      fill="currentColor"
    >
      devhance
    </text>
  </svg>
);

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-logo-container">
        <DevhanceLogo />
      </div>
    </div>
  );
};

export default Loader;
