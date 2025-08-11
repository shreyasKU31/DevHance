import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Auth = () => {
  return (
    <div className=" flex justify-center items-center">
      <nav className="flex justify-center gap-1">
        <div>
          <SignedOut>
            <SignInButton>
              <button className="bg-cyan-500 text-white px-8 py-2 rounded transition-all hover:cursor-pointer hover:scale-105 duration-100">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Auth;
