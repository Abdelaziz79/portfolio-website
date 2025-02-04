export type Project = {
  id: string;
  title: string;
  description: {
    ar: string;
    en: string;
  };
  fullDescription: {
    ar: string;
    en: string;
  };
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: {
    ar: string[];
    en: string[];
  };
  team: {
    ar: string;
    en: string;
  };
  duration: {
    ar: string;
    en: string;
  };
  screenshots: string[];
  challenges: {
    ar: string[];
    en: string[];
  };
  solutions: {
    ar: string[];
    en: string[];
  };

  acknowledgment?: {
    ar: string;
    en: string;
    link?: string;
  };
};

export type Blog = {
  id: string;
  title: {
    ar: string;
    en: string;
  };

  description: {
    ar: string;
    en: string;
  };
  recommendedPosts?: string[];
  image: string;
  slug: string;
  date: string;
  readTime: {
    ar: string;
    en: string;
  };
  category: string;

  content: {
    ar: string;
    en: string;
  };
};

export type Experience = {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  company: {
    ar: string;
    en: string;
  };
  period: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
};

export type Certification = {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  issuer: {
    ar: string;
    en: string;
  };
  date: string;
  image: string;
};
