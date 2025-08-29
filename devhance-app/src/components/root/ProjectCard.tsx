
import { Edit, Share2, MoreVertical } from "lucide-react";
import Link from "next/link";
<<<<<<< HEAD
import { Project } from "@/types/Projects";

// --- TypeScript Interface for Project Data ---
interface ProjectCard {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCard) => (
  <div className="project-card glass-pro group">
    <div className="flex items-center">
      <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-400"></div>
      <div>
        <h3 className="font-['Syne'] font-bold text-white">
          {project.title || "Untitled Project"}
        </h3>
        <p></p>
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
=======
import { Project } from "@/types/project";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card glass-pro group p-4 border rounded mb-4">
    <h3 className="font-bold text-lg mb-2 text-white">{project.title || "Untitled Project"}</h3>
    <p className="text-gray-300 mb-4">{project.problem}</p>
    <Link
      href={`/projects/${project.slug}`}
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Know More
    </Link>
>>>>>>> 509e1e657b67e7dd2c2fbcb323be8e0730a519f2
  </div>
);

export default ProjectCard;
