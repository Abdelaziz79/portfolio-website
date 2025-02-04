import ProjectDetail from "@/app/_components/ProjectDetail";
import ProjectNotFound from "@/app/_components/ProjectNotFound";
import { projects } from "@/app/_constants/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }> & { id: string };
}) {
  const { id } = await params;

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <ProjectNotFound />;
  }

  return <ProjectDetail project={project} />;
}
