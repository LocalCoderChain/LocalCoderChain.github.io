import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python',       category: 'Programming Languages', level: 'intermediate' },
  { name: 'Java',         category: 'Programming Languages', level: 'intermediate' },
  { name: 'SQL',          category: 'Programming Languages', level: 'intermediate' },
  { name: 'C',            category: 'Programming Languages', level: 'intermediate' },
  { name: 'JavaScript',   category: 'Programming Languages', level: 'beginner' },

  // AI & Machine Learning
  { name: 'Ollama',            category: 'AI & Machine Learning', level: 'expert' },
  { name: 'Local LLMs',        category: 'AI & Machine Learning', level: 'expert' },
  { name: 'LangChain',         category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'Prompt Engineering', category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'ChatGPT API',       category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'RAG Systems',       category: 'AI & Machine Learning', level: 'advanced' },

  // Data Science
  { name: 'Pandas',      category: 'Data Science', level: 'intermediate' },
  { name: 'Streamlit',   category: 'Data Science', level: 'intermediate' },

  // Databases
  { name: 'MySQL',    category: 'Databases', level: 'intermediate' },
  { name: 'SQLite',   category: 'Databases', level: 'intermediate' },
  { name: 'DBMS',     category: 'Databases', level: 'intermediate' },

  // Cloud & DevOps
  { name: 'AWS EC2',  category: 'Cloud & DevOps', level: 'intermediate' },
  { name: 'AWS S3',   category: 'Cloud & DevOps', level: 'intermediate' },
  { name: 'AWS IAM',  category: 'Cloud & DevOps', level: 'intermediate' },
  { name: 'AWS Cognito', category: 'Cloud & DevOps', level: 'beginner' },
  { name: 'Git',      category: 'Cloud & DevOps', level: 'beginner' },
  { name: 'GitHub',   category: 'Cloud & DevOps', level: 'beginner' },

  // Tools & Platforms
  { name: 'Jira',     category: 'Tools & Platforms', level: 'intermediate' },
  { name: 'APIs',     category: 'Tools & Platforms', level: 'intermediate' },
];
export const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

export const skillLevelOrder = { beginner: 0, intermediate: 1, advanced: 2, expert: 3 };
