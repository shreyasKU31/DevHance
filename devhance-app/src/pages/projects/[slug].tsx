
import { Project } from "@/types/project";
import { GetServerSideProps } from "next";
import { RenderContent } from "@/components/RenderContent";

interface ProjectDetailsPageProps {
  project: Project | null;
}

const ProjectDetailsPage = ({ project }: ProjectDetailsPageProps) => {
  if (!project) return <div className="max-w-2xl mx-auto p-6 text-red-600">Project not found.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="mb-4 text-gray-600">{project.problem}</p>
      <RenderContent content={project.content} />
      <div className="mt-6">
        <b>Learnings:</b> {project.outcomesAndLearnings}
      </div>
      <div className="mt-4 flex gap-4">
        {project.links?.liveDemo && (
          <a href={project.links.liveDemo} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Live Demo</a>
        )}
        {project.links?.repository && (
          <a href={project.links.repository} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Repository</a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/projects/${slug}`);
  let project = null;
  if (res.ok) {
    project = await res.json();
  }
  return {
    props: {
      project,
    },
  };
};
