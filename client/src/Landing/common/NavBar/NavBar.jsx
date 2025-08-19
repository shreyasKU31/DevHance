/**
 * @file Navbar.jsx
 * @module Navbar
 * @description The main navigation bar, refactored to use Tailwind CSS.
 * @requires react, framer-motion, react-icons/hi
 */
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// --- Main Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#", label: "Explore" },
    { href: "#", label: "About" },
    { href: "#", label: "Showcase" },
  ];

  return (
    <>
      <header
        className={`fixed left-1/2 top-4 z-50 w-[95%] max-w-6xl -translate-x-1/2 transition-all duration-500 ease-in-out ${
          isMounted ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
        }`}
      >
        <nav
          className="navbar-glass flex items-center justify-between px-8 py-4"
          aria-label="Main Navigation"
        >
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
                <span className="nav-link-underline" />
              </a>
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a
              href="#"
              aria-label="devhance homepage"
              className="flex gap-2 items-center"
            >
              <img className="w-12" src="/DHLogo.webp" alt="" />
              <span className="font-syne text-xl font-bold text-white">
                DevHance
              </span>
            </a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            {/* <a
              href="#"
              className="text-gray-300/70 transition-colors hover:text-white"
            >
              Log In
            </a>
            <a href="#" className="signup-button">
              Sign Up
            </a> */}
            <a href="#" className="signup-button">
              Get Early Access
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle Menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Syne'] text-3xl font-bold text-white"
            >
              {link.label}
            </a>
          ))}
          <hr className="w-1/2 border-white/20" />
          {/* <a href="#" className="text-xl text-gray-300/70">
            Log In
          </a> */}
          <a href="#" className="signup-button px-8 py-4 text-lg">
            Get Early Access
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
