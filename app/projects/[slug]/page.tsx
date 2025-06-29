import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import { Project } from '@/types/project';
import { ProjectDetails } from '@/components/project-details';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project: Project | undefined = projects.find(
    project => project.slug === slug
  );

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}
