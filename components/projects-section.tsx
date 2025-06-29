'use client';

import { ProjectCard } from '@/components/project-card';
import Link from 'next/link';
import projects from '@/data/projects.json';

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="pt-32 pb-16 px-6 bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="font-fira-code font-bold text-4xl mb-4">
            .../Projects...
          </p>
        </div>

        {/* Main Project */}
        <div className="space-y-24">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageFirst={index % 2 !== 0}
            />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <Link
            href="/projects"
            className="text-2xl cursor-pointer text-primary hover:text-primary/80 transition-colors font-medium font-fira-code"
          >
            See more projects →
          </Link>
        </div>
      </div>
    </section>
  );
};
