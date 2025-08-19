/**
 * @file Footer.jsx
 * @module Footer
 * @description The main footer for the landing page.
 * @requires react-icons/fa
 */
import React from "react";
import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

// --- Main Component ---
const Footer = () => {
  return (
    <footer className="w-full bg-[#111827] text-gray-400">
      <div className="mx-auto max-w-7xl px-8">
        {/* Top Separator */}
        <div className="h-px w-full gradient-separator"></div>

        <div className="flex justify-between py-20 lg:py-20 lg:text-left text-center">
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col items-center lg:items-start">
            <a
              href="#"
              aria-label="devhance homepage"
              className="flex gap-2 items-center"
            >
              <img
                className="w-12"
                src="/DHLogo.webp"
                alt="Devhance Logo"
                width="48"
                height="48"
              />
              <span className="font-syne text-xl font-bold text-white">
                DevHance
              </span>
            </a>
            <p className="max-w-xs text-sm text-gray-300/70">
              Providing a canvas for the world's creators to tell the story
              behind their work.
            </p>
            <p className="mt-8 text-xs text-gray-400/50">
              © 2025 devhance. All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigate */}
          {/* <div>
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
          </div> */}

          {/* Column 3: Connect */}
          <div>
            <h3 className="mb-5 font-['Lexend'] font-medium text-white/90">
              Connect
            </h3>
            <div className="flex justify-center gap-6 lg:justify-start">
              <a
                href="#"
                className="social-icon"
                aria-label="Visit the devhance GitHub profile"
              >
                <GitHubLogoIcon width={24} height={24} />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="Visit the devhance Twitter profile"
              >
                <TwitterLogoIcon width={24} height={24} />
              </a>
              <a
                href="#"
                className="social-icon"
                aria-label="Visit the devhance LinkedIn profile"
              >
                <LinkedInLogoIcon width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
