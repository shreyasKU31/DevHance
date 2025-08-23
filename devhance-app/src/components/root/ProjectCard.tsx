import { Edit, Share2, MoreVertical } from "lucide-react";
import Link from "next/link";

// --- TypeScript Interface for Project Data ---
interface Project {
  _id: string;
  title: string;
  status: "Published" | "Draft";
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card glass-pro group">
    <div className="flex items-center">
      <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-green-400"></div>
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

export default ProjectCard;
