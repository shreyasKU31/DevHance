/**
 * @file DashboardNavbar.tsx
 * @module DashboardNavbar
 * @description A simple, responsive, and SEO-friendly navbar for the authenticated dashboard.
 * @requires react, @clerk/nextjs, lucide-react, framer-motion
 */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

const DashboardNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to prevent hydration errors by ensuring client-side components only render on the client
  const [isMounted, setIsMounted] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const navLinks = [
    { href: "/projects/create", label: "Add Projects" },
    { href: "/showcase", label: "Explore" },
  ];

  return (
    <>
      <header className="w-full border-b border-white/10 px-4 sm:px-6 lg:px-8">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center"
          aria-label="Dashboard Navigation"
        >
          {/* Left Side: Logo and Desktop Links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="font-['Syne'] text-2xl font-bold text-white"
            >
              devhance
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Spacer div that pushes content to the edges */}
          <div className="flex-grow" />

          {/* Right Side: User Button and Mobile Menu Toggle */}
          <div className="flex flex-shrink-0 items-center gap-4">
            {/* CORRECTED: Conditionally render client-side components to prevent hydration error */}
            {isMounted && (
              <div>
                <SignedOut>
                  <div className="brand">
                    <SignInButton />
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex gap-3">
                    <p>@{user?.username}</p>
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            )}

            <div className="md:hidden">
              {isMounted && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="rounded-md p-2 text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMounted && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/10 bg-[#111827] md:hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-4 py-2 text-base text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardNavbar;
