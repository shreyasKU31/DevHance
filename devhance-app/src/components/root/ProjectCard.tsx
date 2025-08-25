
import { Edit, Share2, MoreVertical } from "lucide-react";
import Link from "next/link";
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
  </div>
);

export default ProjectCard;
