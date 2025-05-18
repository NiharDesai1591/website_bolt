export interface NavItem {
  title: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'strategy' | 'leadership' | 'technical' | 'business';
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  link: string;
}

export interface SharedArticle {
  id: string;
  title: string;
  description: string;
  source: string;
  date: string;
  link: string;
  tags: string[];
}