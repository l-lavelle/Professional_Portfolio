export type Badges = {
  badgeTitle: string;
  badgeImage: string;
};

export type BadgeCategories = Badges & {
  tag: string;
};

export type Blog = {
  id: number;
  title: string;
  description: string;
  badges: Badges[];
  image: string;
  imageAlt: string;
  date: string;
};

export type BlogFocus = { dataId: number; open: boolean };

export type PortfolioIndex = {
  prev: number;
  center: number;
  next: number;
};

export type RefInput = {
  [key: string]: HTMLInputElement | HTMLTextAreaElement | null;
};

export type PortfolioOptions = {
  id: number;
  img: string;
  projectName: string;
  tagline: string;
  projectLink: string;
  githubLink: string;
  keyFeatures: string[];
  contributions: string[];
  techStack: string[];
  description: string;
};
