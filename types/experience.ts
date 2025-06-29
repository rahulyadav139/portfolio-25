export interface Experience {
  id: string;
  role: string;
  startDate: string;
  endDate?: string;
  location: string;
  description: string;
  fullDescription: string[];
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  company: {
    name: string;
    industry: string;
    size: string;
    type: string;
    website?: string;
  };
}
