export type AccessLevel = "free" | "email-gated" | "paid" | "private";
export type ContentStatus = "Available" | "Coming Soon";

export interface Module {
  id: string;
  title: string;
  description: string;
  type: "guide" | "checklist" | "video" | "template" | "prompt";
  videoUrl?: string;
  content?: string;
  resourceLinks?: { label: string; href: string }[];
}

export interface Playbook {
  id: string;
  title: string;
  slug: string;
  summary: string;
  category: string;
  difficulty: "Starter" | "Focused" | "Advanced";
  estimatedTime: string;
  outcome: string;
  modules: Module[];
  toolsNeeded: string[];
  templatesIncluded: string[];
  featured: boolean;
  accessLevel: AccessLevel;
}

export interface Template {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  accessLevel: AccessLevel;
  fileUrl?: string;
}

export interface FounderTool {
  id: string;
  title: string;
  description: string;
  status: ContentStatus;
  category: string;
  slug: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  body: string;
  publishedAt: string;
  featured: boolean;
  accessLevel: AccessLevel;
}
