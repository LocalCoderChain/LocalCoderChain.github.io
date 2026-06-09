import type { Skill } from '@/types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python',      category: 'Programming Languages', level: 'expert' },
  { name: 'TypeScript',  category: 'Programming Languages', level: 'advanced' },
  { name: 'JavaScript',  category: 'Programming Languages', level: 'advanced' },
  { name: 'C++',         category: 'Programming Languages', level: 'intermediate' },
  { name: 'SQL',         category: 'Programming Languages', level: 'advanced' },
  { name: 'Bash',        category: 'Programming Languages', level: 'intermediate' },

  // AI & Machine Learning
  { name: 'LangChain',     category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'LlamaIndex',    category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'Ollama',        category: 'AI & Machine Learning', level: 'expert' },
  { name: 'RAG Systems',   category: 'AI & Machine Learning', level: 'expert' },
  { name: 'Hugging Face',  category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'PyTorch',       category: 'AI & Machine Learning', level: 'intermediate' },
  { name: 'Transformers',  category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'FAISS',         category: 'AI & Machine Learning', level: 'advanced' },
  { name: 'ChromaDB',      category: 'AI & Machine Learning', level: 'advanced' },

  // Data Science
  { name: 'Pandas',     category: 'Data Science', level: 'advanced' },
  { name: 'NumPy',      category: 'Data Science', level: 'advanced' },
  { name: 'Matplotlib', category: 'Data Science', level: 'intermediate' },
  { name: 'Scikit-learn', category: 'Data Science', level: 'intermediate' },
  { name: 'Jupyter',    category: 'Data Science', level: 'advanced' },

  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 'advanced' },
  { name: 'SQLite',     category: 'Databases', level: 'advanced' },
  { name: 'MongoDB',    category: 'Databases', level: 'intermediate' },
  { name: 'Redis',      category: 'Databases', level: 'intermediate' },

  // Cloud & DevOps
  { name: 'Docker',       category: 'Cloud & DevOps', level: 'advanced' },
  { name: 'Git / GitHub', category: 'Cloud & DevOps', level: 'expert' },
  { name: 'Linux',        category: 'Cloud & DevOps', level: 'advanced' },
  { name: 'AWS (basics)', category: 'Cloud & DevOps', level: 'beginner' },
  { name: 'CI/CD',        category: 'Cloud & DevOps', level: 'intermediate' },

  // Frameworks
  { name: 'React',     category: 'Frameworks', level: 'advanced' },
  { name: 'FastAPI',   category: 'Frameworks', level: 'advanced' },
  { name: 'Flask',     category: 'Frameworks', level: 'advanced' },
  { name: 'Vite',      category: 'Frameworks', level: 'advanced' },
  { name: 'TailwindCSS', category: 'Frameworks', level: 'advanced' },

  // Tools & Platforms
  { name: 'VS Code',     category: 'Tools & Platforms', level: 'expert' },
  { name: 'Jupyter Lab', category: 'Tools & Platforms', level: 'advanced' },
  { name: 'Postman',     category: 'Tools & Platforms', level: 'advanced' },
  { name: 'tree-sitter', category: 'Tools & Platforms', level: 'intermediate' },
  { name: 'Obsidian',    category: 'Tools & Platforms', level: 'advanced' },
];

export const skillsByCategory = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
  if (!acc[skill.category]) acc[skill.category] = [];
  acc[skill.category].push(skill);
  return acc;
}, {});

export const skillLevelOrder = { beginner: 0, intermediate: 1, advanced: 2, expert: 3 };
