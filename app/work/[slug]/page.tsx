import { notFound } from 'next/navigation';
import workExperiences from '@/data/work-experience.json';
import { WorkDetails } from '@/components/work-details';

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = workExperiences.find(work => work.id === slug);

  if (!work) {
    return notFound();
  }

  return <WorkDetails work={work} />;
}
