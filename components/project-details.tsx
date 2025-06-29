import { ArrowLeft } from 'lucide-react';
import { Footer } from './footer';
import Link from 'next/link';
import { Project } from '@/types/project';
import Image from 'next/image';
import { Card } from './ui/card';
import { CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold font-fira-code mb-2">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {project.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Description */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-fira-code">
                Overview
              </h2>
              <p className="whitespace-pre-line text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-fira-code">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Images */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 font-fira-code">
                Screenshots
              </h2>

              {!project.screenshots && (
                <div className="relative w-full rounded-3xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover object-top w-full"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots?.map((screenshot, index) => (
                  <Card
                    key={index}
                    className="bg-card/30 border-border/30 backdrop-blur-sm overflow-hidden"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-muted-foreground">
                          {screenshot.title}
                        </span>
                      </div>
                    </CardContent>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-1">
                        {screenshot.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {screenshot.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Project Links Card */}
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 font-fira-code">
                  Project Links
                </h3>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full justify-start rounded-lg"
                    variant="outline"
                  >
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Project
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-start rounded-lg"
                    variant="outline"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      <FiGithub className="w-4 h-4" />
                      Source Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Technology Stack Card */}
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 font-fira-code">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary/50 rounded-md text-secondary-foreground border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};
