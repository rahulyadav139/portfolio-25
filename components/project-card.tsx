// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Project } from '@/types/project';
import Image from 'next/image';
import { DualCircleButton } from './dual-circle-button';
import { FiGithub } from 'react-icons/fi';
import { TbWorldWww } from 'react-icons/tb';
import { IconButton } from './icon-button';

// const mainProject = {
//   slug: 'gostat',
//   title: 'Gostat',
//   description:
//     'GOStat - a cutting-edge microservice-based application designed to handle HTTP request authentication and statistics with finesse.',
//   fullDescription:
//     'This project comprises several key microservices, each contributing to its overall functionality and prowess.',
//   technologies: [
//     'Golang',
//     'TypeScript',
//     'Gin',
//     'NextJs',
//     'PostgreSQL',
//     'Redis',
//   ],
//   images: [
//     '/api/placeholder/400/300',
//     '/api/placeholder/400/300',
//     '/api/placeholder/400/300',
//     '/api/placeholder/200/200',
//   ],
// };

interface ProjectCardProps {
  project: Project;
  imageFirst?: boolean;
}

export const ProjectCard = ({
  project,
  imageFirst = false,
}: ProjectCardProps) => {
  return (
    <>
      {/* Main Project */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Project Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">{project.title}</h2>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(technology => (
                <span
                  key={technology}
                  className="px-3 py-1 text-sm bg-secondary rounded-full text-secondary-foreground border border-border/50"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">GOStat</span> - a
              cutting-edge{' '}
              <span className="font-semibold text-foreground">
                microservice-based
              </span>{' '}
              application designed to handle{' '}
              <span className="font-semibold text-foreground">
                HTTP request authentication
              </span>{' '}
              and statistics with finesse.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              This project{' '}
              <span className="font-semibold text-foreground">
                comprises several key microservices
              </span>
              , each contributing to its overall functionality and prowess.
            </p> */}
          </div>

          {/* <Button asChild className="inline-flex items-center gap-2">
            <Link href={`/projects/${mainProject.slug}`}>
              <ExternalLink className="w-4 h-4" />
              View Project
            </Link>
          </Button> */}

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <DualCircleButton
              highlightedIcon={ArrowUpRight}
              unHighlightedIcon={FiGithub}
              href={project.github}
              target="_blank"
            />

            {project.url && (
              <DualCircleButton
                highlightedIcon={ArrowUpRight}
                unHighlightedIcon={TbWorldWww}
                href={project.url}
                target="_blank"
              />
            )}

            <IconButton
              icon={ArrowRight}
              href={`/projects/${project.slug}`}
              label="View"
              classNames={{
                root: 'w-full md:w-auto',
                label: 'w-full md:w-auto',
              }}
            />
          </div>
        </div>

        <div
          className={`relative w-full justify-self-start ${
            imageFirst ? 'lg:-order-1' : 'lg:order-0'
          }`}
        >
          <div className="relative h-112 w-full rounded-3xl overflow-hidden">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Project Images */}
      </div>
    </>
  );
};

// <div className="lg:grid grid-cols-2 gap-4">
//   Large image top left
//   <Card className="col-span-1 bg-card/30 border-border/30 backdrop-blur-sm overflow-hidden">
//     <CardContent className="p-0">
//       <div className="aspect-[4/3] bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
//         <span className="text-muted-foreground">Mobile App UI</span>
//       </div>
//     </CardContent>
//   </Card>

//   Large image top right
//   <Card className="col-span-1 bg-card/30 border-border/30 backdrop-blur-sm overflow-hidden">
//     <CardContent className="p-0">
//       <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
//         <span className="text-muted-foreground">Dashboard</span>
//       </div>
//     </CardContent>
//   </Card>

//   Bottom image spanning both columns
//   <Card className="col-span-2 bg-card/30 border-border/30 backdrop-blur-sm overflow-hidden">
//     <CardContent className="p-0">
//       <div className="aspect-[2/1] bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
//         <span className="text-muted-foreground">Desktop Application</span>
//       </div>
//     </CardContent>
//   </Card>

//   Small image bottom right
//   <Card className="col-span-1 bg-card/30 border-border/30 backdrop-blur-sm overflow-hidden">
//     <CardContent className="p-0">
//       <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
//         <span className="text-muted-foreground text-sm">Icon</span>
//       </div>
//     </CardContent>
//   </Card>
// </div>;
