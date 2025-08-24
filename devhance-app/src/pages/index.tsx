/**
 * @file index.tsx
 * @module Dashboard
 * @description The main dashboard page for the application root.
 * @requires react, framer-motion, lucide-react, swr
 */
import React from "react";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import useSWR from "swr";
import { useRouter } from "next/router";
import DataState from "@/components/root/DataState";
import EmptyState from "@/components/root/EmptyState";
import GridBeamBackground from "@/components/GridBeamBackground";

// --- API Fetcher Function for SWR ---
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center text-center text-gray-400">
    <Loader className="mb-4 h-12 w-12 animate-spin" />
    <p>Loading your projects...</p>
  </div>
);

// --- Main Dashboard Component ---
const Home = () => {
  const router = useRouter();
  const { data: projects, error, isLoading } = useSWR("/api/projects", fetcher);

  const handleCreateNew = () => {
    router.push("/projects/create");
  };

  if (isLoading) return <LoadingState />;
  if (error) return <div>Failed to load projects.</div>;

  return (
    <main>
      <div className="absolute inset-0 -z-10">
        <GridBeamBackground />
      </div>
      <div className="flex flex-grow items-center justify-center p-8">
        <div className="w-full max-w-4xl">
          {projects && projects.length > 0 ? (
            <DataState projects={projects} onCreate={handleCreateNew} />
          ) : (
            <EmptyState onCreate={handleCreateNew} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
