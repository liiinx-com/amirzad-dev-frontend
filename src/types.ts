export interface Intro {}

export interface MenuItem {
  title: string;
  url: string;
  order: number;
  className?: string;
}

export interface AboutItem {
  id: string;
  order: number;
  title: string;
  content: string[];
  titleClassName?: string;
  iconClassName?: string;
}

export interface Project {
  id: string;
  order: number;
  featured: boolean;
  title: string;
  tags: Tag[];
  content: string[];
  category: string;
  titleClassName?: string;
  imageUrl?: string;
  videoUrl?: string;
  repoUrl?: string;
  slug: string;
}

export interface Tag {
  title: string;
  order: number;
  className: string;
}

export interface ContactInfo {
  id: string;
  order: number;
  title: string;
  content: string;
  iconName: "location" | "linkedin" | "email";
  url?: string;
  iconClassName?: string;
}

export interface WorkHistoryItem {
  id: string;
  order: number;
  title: string;
  role: string;
  companyUrl: string;
  content: string[];
  duration: string[];
  tags: Tag[];
  companyIntro: string;
  titleClassName?: string;
  imageUrl?: string;
  videoUrl?: string;
}

export interface SkillSet {
  id: string;
  slug: string;
  order: number;
  title: string;
  skills: Skill[];
  containerClassName?: string;
  videoUrl?: string;
}

export interface HeroItem {
  id: string;
  imageUrl: string;
  title: string;
  content: string[];
}

export interface Skill {
  id: string;
  title: string;
  order: number;
  rate: number;
}
