import { SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

const PleaseSignIn = () => {
  return (
    <div className="text-white">
      PleaseSignIn
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
};

export default PleaseSignIn;
