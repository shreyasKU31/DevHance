import ProjectCard from "@/components/root/ProjectCard";
import { Plus } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCard {
  _id: string;
  title: string;
  status: "Published" | "Draft";
}

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
        className="brand flex items-center gap-2 rounded-full px-6 text-sm font-semibold text-white transition-transform hover:scale-105"
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

export default DataState;
