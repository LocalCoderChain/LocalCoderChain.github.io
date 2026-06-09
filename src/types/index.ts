// ─── Project Types ────────────────────────────────────────────────────────────

export type ProjectCategory =
  | 'AI'
  | 'RAG'
  | 'Software Engineering'
  | 'Data Science'
  | 'Research'
  | 'Web Development';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  problemStatement: string;
  solutionApproach: string;
  keyLearnings: string[];
  futureImprovements: string[];
  technologies: string[];
  screenshots: string[];          // paths relative to public/projects/{id}/screenshots/
  architectureDiagrams: string[]; // paths relative to public/projects/{id}/architecture/
  demoVideo?: string;             // path relative to public/projects/{id}/
  reportPDF?: string;             // path relative to public/projects/{id}/
  githubURL?: string;
  liveURL?: string;
  featured: boolean;
  category: ProjectCategory;
  tags: string[];
  year: number;
  status: 'completed' | 'in-progress' | 'archived';
}

// ─── Publication Types ────────────────────────────────────────────────────────

export interface Publication {
  id: string;
  title: string;
  conference: string;
  year: number;
  abstract: string;
  pdfLink?: string;
  doiLink?: string;
  authors: string[];
  tags: string[];
}

// ─── Skill Types ──────────────────────────────────────────────────────────────

export type SkillCategory =
  | 'Programming Languages'
  | 'AI & Machine Learning'
  | 'Data Science'
  | 'Databases'
  | 'Cloud & DevOps'
  | 'Frameworks'
  | 'Tools & Platforms';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  icon?: string;
}

// ─── Contact Types ────────────────────────────────────────────────────────────

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  resumeURL: string;
}
