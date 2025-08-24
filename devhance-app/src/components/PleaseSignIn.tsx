/**
 * @file UnauthorizedPage.tsx
 * @module UnauthorizedPage
 * @description A component to display a message prompting non-authenticated users to log in.
 * @requires react, @clerk/nextjs, lucide-react
 */
import React from "react";
import { SignInButton } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Image from "next/image";

// --- Custom SVG Icon for "Unauthorized Access" ---
// This is your provided SVG, turned into a reusable React component.

// --- Main Unauthorized Page Component ---
const UnauthorizedPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#111827] p-8 text-white">
      <div className="flex flex-col items-center text-center">
        <Image
          src={"/401.webp"}
          width={500}
          height={500}
          alt="401 UnAuthorized Image"
        />
        <h1 className="font-['Syne'] text-4xl font-bold">
          You Are Unauthorized
        </h1>
        <p className="mt-4 max-w-md text-lg text-gray-300/80">
          Please log in to continue to your dashboard and start creating.
        </p>

        {/* Branded Clerk Sign-In Button */}
        <div className="aura-gradient mt-8 inline-flex items-center gap-2 rounded-full p-1 transition-transform hover:scale-105">
          <div className="rounded-full brand ">
            <SignInButton mode="modal">
              <button className="flex items-center gap-2 font-semibold">
                <LogIn size={20} />
                Sign In
              </button>
            </SignInButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
