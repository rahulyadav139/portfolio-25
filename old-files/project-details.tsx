import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects - Nikita Khvatov',
  description:
    'Explore all projects by Nikita Khvatov, full-stack developer. From microservice architectures to modern web applications.',
  keywords: [
    'Projects',
    'Portfolio',
    'Nikita Khvatov',
    'Full-stack Developer',
    'React',
    'Vue.js',
    'Golang',
    'TypeScript',
    'Web Development',
  ],
  openGraph: {
    title: 'All Projects - Nikita Khvatov',
    description:
      'Explore all projects by Nikita Khvatov, full-stack developer.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Projects - Nikita Khvatov',
    description:
      'Explore all projects by Nikita Khvatov, full-stack developer.',
  },
};

// Project data - in a real app this would come from a database or CMS
const projects = [
  {
    id: 'gostat',
    slug: 'gostat',
    title: 'Gostat',
    subtitle: 'Microservice-based HTTP Analytics Platform',
    description:
      'GOStat - a cutting-edge microservice-based application designed to handle HTTP request authentication and statistics with finesse.',
    shortDescription:
      'Real-time HTTP analytics platform with microservice architecture, handling millions of requests per second.',
    technologies: [
      'Golang',
      'TypeScript',
      'Gin',
      'NextJs',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Kubernetes',
    ],
    status: 'Live',
    year: '2024',
    category: 'Full-stack',
    liveUrl: 'https://gostat-demo.vercel.app',
    githubUrl: 'https://github.com/nikita/gostat',
    featured: true,
    image: '/api/placeholder/600/400',
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    subtitle: 'Scalable Microservice E-commerce Solution',
    description:
      'A modern e-commerce platform built with microservices architecture, featuring real-time inventory, payment processing, and analytics.',
    shortDescription:
      'Scalable e-commerce platform with microservices, real-time inventory, and payment processing.',
    technologies: [
      'React',
      'Node.js',
      'MongoDB',
      'Docker',
      'Redis',
      'Stripe API',
      'Socket.io',
    ],
    status: 'In Development',
    year: '2024',
    category: 'Full-stack',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/nikita/ecommerce-platform',
    featured: true,
    image: '/api/placeholder/600/400',
  },
  {
    id: 'chat-app',
    slug: 'realtime-chat',
    title: 'Real-time Chat Application',
    subtitle: 'WebSocket-based Messaging Platform',
    description:
      'A full-stack real-time messaging application with WebSocket integration, user authentication, and modern responsive design.',
    shortDescription:
      'Real-time messaging app with WebSocket integration, user authentication, and responsive design.',
    technologies: [
      'Next.js',
      'Socket.io',
      'PostgreSQL',
      'Redis',
      'TypeScript',
      'Tailwind CSS',
    ],
    status: 'Live',
    year: '2023',
    category: 'Full-stack',
    liveUrl: 'https://chat-demo.vercel.app',
    githubUrl: 'https://github.com/nikita/realtime-chat',
    featured: false,
    image: '/api/placeholder/600/400',
  },
  {
    id: 'analytics-dashboard',
    slug: 'ai-analytics',
    title: 'AI Analytics Dashboard',
    subtitle: 'Machine Learning Data Visualization',
    description:
      'An intelligent analytics dashboard that processes large datasets and provides AI-driven insights using Python, FastAPI, and modern visualization libraries.',
    shortDescription:
      'AI-powered analytics dashboard with machine learning insights and interactive data visualization.',
    technologies: [
      'Python',
      'FastAPI',
      'React',
      'TensorFlow',
      'PostgreSQL',
      'D3.js',
      'Docker',
    ],
    status: 'Live',
    year: '2023',
    category: 'Data Science',
    liveUrl: 'https://analytics-demo.vercel.app',
    githubUrl: 'https://github.com/nikita/ai-analytics',
    featured: true,
    image: '/api/placeholder/600/400',
  },
  {
    id: 'blockchain-voting',
    slug: 'blockchain-voting',
    title: 'Blockchain Voting System',
    subtitle: 'Decentralized Governance Platform',
    description:
      'A secure and transparent voting system built on blockchain technology using Solidity smart contracts and Web3 integration.',
    shortDescription:
      'Secure blockchain-based voting system with smart contracts and decentralized governance.',
    technologies: [
      'Solidity',
      'Web3.js',
      'React',
      'Ethereum',
      'IPFS',
      'MetaMask',
    ],
    status: 'Beta',
    year: '2023',
    category: 'Blockchain',
    liveUrl: 'https://voting-demo.vercel.app',
    githubUrl: 'https://github.com/nikita/blockchain-voting',
    featured: false,
    image: '/api/placeholder/600/400',
  },
  {
    id: 'mobile-fitness',
    slug: 'fitness-tracker',
    title: 'Fitness Tracker Mobile App',
    subtitle: 'React Native Health & Wellness App',
    description:
      'A comprehensive fitness tracking mobile application built with React Native, featuring workout plans, progress tracking, and social features.',
    shortDescription:
      'Mobile fitness app with workout plans, progress tracking, and social features built with React Native.',
    technologies: [
      'React Native',
      'Expo',
      'Node.js',
      'MongoDB',
      'Firebase',
      'Redux',
    ],
    status: 'Live',
    year: '2022',
    category: 'Mobile',
    liveUrl: 'https://fitness-demo.vercel.app',
    githubUrl: 'https://github.com/nikita/fitness-tracker',
    featured: false,
    image: '/api/placeholder/600/400',
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <main className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-16">
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

        {/* Project Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm text-center p-6">
            <div className="text-3xl font-bold font-fira-code text-primary mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-muted-foreground">Total Projects</div>
          </Card>
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm text-center p-6">
            <div className="text-3xl font-bold font-fira-code text-green-400 mb-2">
              {projects.filter(p => p.status === 'Live').length}
            </div>
            <div className="text-sm text-muted-foreground">Live Projects</div>
          </Card>
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm text-center p-6">
            <div className="text-3xl font-bold font-fira-code text-blue-400 mb-2">
              {new Set(projects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </Card>
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm text-center p-6">
            <div className="text-3xl font-bold font-fira-code text-purple-400 mb-2">
              {new Set(projects.map(p => p.year)).size}
            </div>
            <div className="text-sm text-muted-foreground">Years Active</div>
          </Card>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-fira-code">
              Featured Projects
            </h2>
            <div className="text-sm text-muted-foreground">
              {featuredProjects.length} featured projects
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map(project => (
              <Card
                key={project.id}
                className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <span className="text-muted-foreground relative z-10">
                    {project.title} Preview
                  </span>

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        project.status === 'Live'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : project.status === 'In Development'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl font-fira-code leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {project.year}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary/50 rounded-md text-secondary-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted/50 rounded-md text-muted-foreground">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    <Button asChild className="flex-1" size="sm">
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-fira-code">All Projects</h2>
            <div className="text-sm text-muted-foreground">
              {projects.length} total projects
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map(project => (
              <Card
                key={project.id}
                className="bg-card/30 border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          project.status === 'Live'
                            ? 'bg-green-400'
                            : project.status === 'In Development'
                            ? 'bg-blue-400'
                            : 'bg-yellow-400'
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">
                        {project.status}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-fira-code leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {project.shortDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-secondary/50 rounded-md text-secondary-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-muted/50 rounded-md text-muted-foreground">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <Button
                      asChild
                      className="flex-1"
                      variant="outline"
                      size="sm"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies Overview */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-fira-code mb-6 text-center">
            Technologies Used Across Projects
          </h2>
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm p-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {[...new Set(projects.flatMap(p => p.technologies))]
                .sort()
                .map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-sm bg-secondary/50 rounded-full text-secondary-foreground border border-border/30 hover:bg-secondary/70 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-card/30 border-border/30 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and collaborate
              on innovative projects. Let&apos;s discuss how we can bring your
              ideas to life.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Get in Touch
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link
                  href="/#projects"
                  className="inline-flex items-center gap-2"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
