import { useUser } from "@clerk/nextjs";
import React from "react";
import { SparklesText } from "@/components/magicui/sparkles-text";

const Welcome = () => {
  const { user } = useUser();
  return (
    <div className="w-full text-center mb-12">
      <h1 className="font-['Syne'] md:text-5xl font-bold my-5">
        Welcome,
        <SparklesText className="inline-block ml-4">
          {user?.firstName || "Creator"}
        </SparklesText>
      </h1>
      <p className="mt-3 text-lg text-gray-300/70">
        It's a great day to build something amazing. What story will you tell
        today?
      </p>
    </div>
  );
};

export default Welcome;
