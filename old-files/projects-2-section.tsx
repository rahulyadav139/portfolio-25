import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

const Projects2Section = () => {
  const projects = [
    {
      id: 1,
      title: 'Microservice E-commerce Platform',
      description:
        'This project showcases a scalable e-commerce platform built with microservices architecture using React, Node.js, and MongoDB for seamless user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      link: '#',
    },
    {
      id: 2,
      title: 'Real-time Chat Application',
      description:
        'A full-stack real-time messaging application with WebSocket integration, user authentication, and modern responsive design using Next.js and Socket.io.',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Redis'],
      link: '#',
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      description:
        'An intelligent analytics dashboard that processes large datasets and provides AI-driven insights using Python, FastAPI, and modern visualization libraries.',
      technologies: ['Python', 'FastAPI', 'React', 'TensorFlow'],
      link: '#',
    },
    {
      id: 4,
      title: 'Blockchain Voting System',
      description:
        'A secure and transparent voting system built on blockchain technology using Solidity smart contracts and Web3 integration for decentralized governance.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      link: '#',
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-right mb-16">
          <h2 className="text-6xl lg:text-8xl font-bold font-fira-code mb-8">
            Projects
          </h2>
        </div>

        <Separator className="my-8" />

        <div className="flex gap-8">
          {/* Left Side - Navigation Numbers */}
          <div className="flex flex-col items-center space-y-4 pt-8">
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground font-fira-code">
              1
            </div>
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground font-fira-code">
              2
            </div>
            <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground">
              <ChevronDown className="w-5 h-5" />
            </div>
          </div>

          {/* Right Side - Projects Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map(project => (
              <Card
                key={project.id}
                className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 rounded-2xl"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-fira-code leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
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

                  {/* Read More Button */}
                  <div className="flex items-center gap-3">
                    <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium italic hover:bg-primary/90 transition-colors">
                      View Project
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            ... /View all projects ...
          </p>
          <button className="text-primary hover:text-primary/80 transition-colors font-medium">
            See more projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects2Section;
