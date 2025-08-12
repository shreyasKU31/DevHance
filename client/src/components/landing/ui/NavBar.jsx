import React, { useState, useEffect } from "react";
// Import icons from the 'react-icons' library
import { HiMenuAlt3, HiX } from "react-icons/hi";

// --- Main Navbar Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Effect for the initial fade-in and drop-down animation on page load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  // Navigation link items for reusability
  const navLinks = [
    { href: "#", label: "Explore" },
    { href: "#", label: "About" },
    { href: "#", label: "Showcase" },
  ];

  return (
    <>
      <header
        className={`
          fixed left-1/2 -translate-x-1/2 top-4 w-[95%] max-w-6xl z-50
          transition-all duration-500 ease-in-out
          ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }
        `}
      >
        <nav
          className="w-full px-6 py-3 rounded-full border border-white/10 
                     bg-black/20 backdrop-blur-lg shadow-lg"
          aria-label="Main Navigation"
        >
          <div className="flex items-center justify-between">
            {/* Left Side: Main Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-lexend text-sm text-white/70 hover:text-white 
                             transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-aura-accent 
                               group-hover:w-full group-hover:left-0 transition-all duration-300"
                  />
                </a>
              ))}
            </div>

            {/* Center: Brand Identity */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <a
                href="#"
                className="flex items-center"
                aria-label="devhance homepage"
              >
                <span className="font-syne text-xl font-bold text-white">
                  devhance
                </span>
              </a>
            </div>

            {/* Right Side: User Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="#"
                className="font-lexend text-sm text-white/70 hover:text-white transition-colors duration-300"
              >
                Log In
              </a>
              <a
                href="#"
                className="bg-gradient-aura text-white font-lexend font-medium text-sm
                           py-2 px-5 rounded-full transition-transform duration-300
                           hover:scale-105 hover:shadow-aura-glow"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile: Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
                aria-label="Toggle Menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <HiMenuAlt3 size={28} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`
          fixed inset-0 z-40 md:hidden
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="w-full h-full bg-black/50 backdrop-blur-xl flex flex-col">
          <div className="container mx-auto h-full flex flex-col items-center justify-center text-center gap-8 -mt-16">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-lexend text-2xl text-white"
              >
                {link.label}
              </a>
            ))}
            <hr className="w-1/2 border-white/20" />
            <a href="#" className="font-lexend text-2xl text-white">
              Log In
            </a>
            <a
              href="#"
              className="bg-gradient-aura text-white font-lexend font-medium text-lg
                         py-3 px-8 rounded-full"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
