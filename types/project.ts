export interface Project {
  id: string;
  title: string;
  subtitle: string;
  categories: string[];
  description: string;
  type: string;
  thumbnail: string;
  screenshots?: {
    title: string;
    description: string;
    image: string;
  }[];
  slug: string;
  url: string;
  github: string;
  technologies: string[];
  features: string[];
  fullDescription: string;
}
