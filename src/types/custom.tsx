export type Badges = {
  badgeTitle: string;
  badgeImage: string;
};

export type BadgeCategories = Badges & {
  tag: string;
};

export type BlogData = {
  id: number;
  title: string;
  text: string;
  img: string;
  badges: Badges[];
};

export type BlogFocus = { dataId: number; open: boolean };

export type PortfolioIndex = {
  first: number;
  middle: number;
  last: number;
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
