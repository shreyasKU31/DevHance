/**
 * @file Footer.jsx
 * @module Footer
 * @description The main footer for the landing page.
 * @requires react-icons/fa
 */
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// --- Helper Component for the Logo ---
const DevhanceLogo = () => (
  <svg
    height="32"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mb-6 text-white"
  >
    {/* Using a simplified path for the logo as an example */}
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

// --- Main Component ---
const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] text-gray-400">
      <div className="mx-auto max-w-7xl px-8">
        {/* Top Separator */}
        <div className="h-px w-full gradient-separator"></div>

        <div className="grid grid-cols-1 gap-12 py-20 lg:grid-cols-[3fr_1fr_1fr] lg:py-20 lg:text-left text-center">
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="flex items-center gap-4 mb-4 font-syne text-xl font-bold text-white">
              <img className="w-10" src="../../../../public/logo.webp" alt="" />
              devhance
            </span>
            <p className="max-w-xs text-sm text-gray-300/70">
              Providing a canvas for the world's creators to tell the story
              behind their work.
            </p>
            <p className="mt-8 text-xs text-gray-400/50">
              © 2025 devhance. All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h3 className="mb-5 font-['Lexend'] font-medium text-white/90">
              Navigate
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="mb-5 font-['Lexend'] font-medium text-white/90">
              Connect
            </h3>
            <div className="flex justify-center gap-6 lg:justify-start">
              <a href="#" className="social-icon">
                <FaGithub />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
