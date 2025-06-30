export type Profile = {
  name: string;
  title: string;
  company: string;
  displayPicture: string;
  about: string;
  email: string;
  website: string;
  image: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
  };
  tagline: {
    line1: string;
    line2: string;
  };
  resume: string;
  seo: {
    title: string;
    description: string;
    ogImage: string;
  };
};
