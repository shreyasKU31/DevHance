/**
 * @file DashboardMain.tsx
 * @module DashboardMain
 * @description The main content area for the user's dashboard.
 * @requires react, framer-motion, lucide-react, swr
 */
import React from "react";
import { motion } from "framer-motion";
import { Plus, Edit, Share2, MoreVertical, Star, Loader } from "lucide-react";
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

// --- TypeScript Interface for Project Data ---
interface Project {
  _id: string;
  title: string;
  status: "Published" | "Draft";
}

// --- API Fetcher Function for SWR ---
const fetcher = (url: string) => fetch(url).then((res) => res.json());

// --- Sub-Components ---

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center text-center text-gray-400">
    <Loader className="mb-4 h-12 w-12 animate-spin" />
    <p>Loading your projects...</p>
  </div>
);

const EmptyState = ({ onCreate }: { onCreate: () => void }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5">
      <Star className="h-12 w-12 text-white/50" />
    </div>
    <h2 className="font-['Syne'] text-3xl font-bold text-white">
      Your Stage is Set.
    </h2>
    <p className="mt-2 max-w-sm text-gray-300/80">
      Transform your first project into a compelling story. Let's begin.
    </p>
    <button
      onClick={onCreate}
      className="aura-gradient mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
    >
      Create New Project
    </button>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card glass-pro group">
    <div className="flex items-center">
      <div
        className={`mr-3 h-2 w-2 flex-shrink-0 rounded-full ${
          project.status === "Published" ? "bg-green-400" : "bg-gray-500"
        }`}
      ></div>
      <div>
        <h3 className="font-['Syne'] font-bold text-white">
          {project.title || "Untitled Project"}
        </h3>
        <p
          className={`text-sm ${
            project.status === "Published" ? "text-green-400" : "text-gray-500"
          }`}
        >
          {project.status}
        </p>
      </div>
    </div>
    <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
      <button className="card-action-btn">
        <Share2 size={18} />
      </button>
      <Link href={`/dashboard/edit/${project._id}`} className="card-action-btn">
        <Edit size={18} />
      </Link>
      <button className="card-action-btn">
        <MoreVertical size={18} />
      </button>
    </div>
  </div>
);

const DataState = ({
  projects,
  onCreate,
}: {
  projects: Project[];
  onCreate: () => void;
}) => (
  <div className="w-full">
    <div className="mb-8 flex items-center justify-between">
      <h2 className="font-['Syne'] text-3xl font-bold text-white">
        My Project Stories
      </h2>
      <button
        onClick={onCreate}
        className="aura-gradient flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
      >
        <Plus size={16} /> Create New Project
      </button>
    </div>
    <div className="flex flex-col gap-4">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  </div>
);

// --- Main Dashboard Component ---
const Home = () => {
  const router = useRouter();
  const { data: projects, error, isLoading } = useSWR("/api/projects", fetcher);

  const handleCreateNew = () => {
    // UPDATED: Navigate to the new editor page
    router.push("/dashboard/create");
  };

  if (isLoading) return <LoadingState />;
  if (error) return <div>Failed to load projects.</div>;

  return (
    <main className="flex flex-grow items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {projects && projects.length > 0 ? (
          <DataState projects={projects} onCreate={handleCreateNew} />
        ) : (
          <EmptyState onCreate={handleCreateNew} />
        )}
      </div>
    </main>
  );
};

export default Home;
