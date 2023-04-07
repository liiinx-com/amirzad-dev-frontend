export interface Profile {}

export interface Tag {
  title: string;
  order: number;
  className: string;
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

export interface Skill {
  id: string;
  title: string;
  order: number;
  rate: number;
}
