import { getProject } from "@/lib/posts";
import ProjectDetail from "@/components/Project/ProjectDetail";

interface ProjectDetailPageProps {
  params: Promise<{
    project: string;
  }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { project } = await params;

  const post = getProject(project);

  if (!post) {
    return <div>Project not found</div>;
  }

  return (
    <div className="overflow-hidden pt-[12vh]">
      <ProjectDetail post={post} project={project} />
    </div>
  );
}