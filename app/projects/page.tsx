import { ProjectCard } from '@/components/project-card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import projects from '@/data/projects.json';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link
            href="/"
            className="text-lg inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-24">
          <h1 className="text-6xl lg:text-8xl font-bold font-fira-code mb-6">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of my work spanning full-stack web
            applications, mobile apps, data science projects, and blockchain
            solutions. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageFirst={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
