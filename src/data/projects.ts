/**
 * ─────────────────────────────────────────────────────────────────────────────
 * projects.ts — Central data store for all portfolio projects.
 *
 * HOW TO ADD A NEW PROJECT:
 * 1. Create a folder at:  public/projects/{your-project-id}/
 * 2. Add screenshots to:  public/projects/{id}/screenshots/img1.png
 * 3. Add architecture:    public/projects/{id}/architecture/arch.png
 * 4. Add demo video:      public/projects/{id}/demo.mp4  (optional)
 * 5. Add report PDF:      public/projects/{id}/report.pdf (optional)
 * 6. Copy the template below and fill in your details.
 * 7. Set featured: true to show on the homepage Featured section.
 *
 * Asset paths are automatically resolved — no component changes needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'carbon-emissions',
    title: 'Atlas Copco Carbon Emissions Analytics Platform',
    shortDescription:
      'Industrial platform for carbon analytics, visualisation, and AI-assisted reporting using material usage and transportation data.',
    detailedDescription: `An industrial analytics platform built for Atlas Copco to track, visualise, and report carbon emissions across material usage and transportation workflows. The platform provides interactive dashboards and AI-assisted report generation to help teams understand and reduce their carbon footprint.`,
    problemStatement: `Industrial organisations struggle to track carbon emissions across complex supply chains and transportation networks. Manual reporting is slow, error-prone, and lacks actionable insights.`,
    solutionApproach: `Built a Python and Streamlit-based platform that ingests material usage and transportation data, computes emissions using standard factors, and generates AI-assisted reports with visualisations.`,
    keyLearnings: [
      'Scope 3 emissions from transportation are often the largest and hardest to track accurately.',
      'Streamlit enables rapid prototyping of data-heavy dashboards without a separate frontend.',
      'Clean data ingestion pipelines are more important than the analytics layer on top.',
    ],
    futureImprovements: [
      'Add live data integration with ERP systems.',
      'Expand to Scope 1 and Scope 2 emission tracking.',
      'Build exportable PDF reports with methodology documentation.',
    ],
    technologies: ['Python', 'Pandas', 'Streamlit'],
    screenshots: [],
    architectureDiagrams: [],
    githubURL: 'https://github.com/LocalCoderChain/carbon-emission-calculator',
    featured: true,
    category: 'Data Science',
    tags: ['Data Science', 'AI', 'Python', 'Streamlit', 'Sustainability'],
    year: 2024,
    status: 'completed',
  },
  {
    id: 'matsya',
    title: 'Matsya — Fisheries Knowledge & Disease Assistance Platform',
    shortDescription:
      'AI assistant for fisheries guidance, symptom understanding, disease support, and knowledge retrieval using local LLMs.',
    detailedDescription: `Matsya is an AI-powered assistant built to support fisheries workers and researchers with disease identification, symptom analysis, and knowledge retrieval. It combines local LLM inference with the ChatGPT API to provide accurate, accessible guidance in a domain with limited digital resources.`,
    problemStatement: `Fisheries workers often lack access to expert knowledge for disease diagnosis and treatment. Existing resources are scattered, technical, and inaccessible to non-experts.`,
    solutionApproach: `Built a conversational AI assistant using Ollama for local inference and the ChatGPT API for broader knowledge retrieval. The system handles symptom-based queries, disease identification, and general fisheries guidance through a simple chat interface.`,
    keyLearnings: [
      'Domain-specific AI assistants require careful prompt engineering to stay grounded.',
      'Combining local and cloud LLMs allows cost-effective handling of different query types.',
      'Non-technical users need simple, clear interfaces — complexity kills adoption.',
    ],
    futureImprovements: [
      'Add a RAG layer over a curated fisheries disease database.',
      'Support regional language inputs for rural fisheries workers.',
      'Build a mobile-friendly interface.',
    ],
    technologies: ['Python', 'Ollama', 'ChatGPT API'],
    screenshots: [],
    architectureDiagrams: [],
    githubURL: 'https://github.com/LocalCoderChain/matsya-ai-assistant',
    featured: true,
    category: 'AI',
    tags: ['AI', 'LLM', 'Python', 'Ollama', 'Local AI'],
    year: 2024,
    status: 'completed',
  },
  {
    id: 'code-rag',
    title: 'Local AI Code Analysis & Documentation Assistant',
    shortDescription:
      'Developer assistant for code explanation, issue detection, documentation generation, and summarisation using local LLM inference.',
    detailedDescription: `A fully local AI assistant for developers that analyses codebases, explains logic, detects potential issues, and generates documentation — all without sending code to external APIs. Built on Ollama for privacy-preserving local inference.`,
    problemStatement: `Developers working on proprietary or sensitive codebases cannot use cloud AI tools due to data privacy concerns. Existing local tools lack the quality needed for real developer workflows.`,
    solutionApproach: `Built a Python tool that feeds code files into a locally-hosted LLM via Ollama, using structured prompts for explanation, issue detection, and docstring generation. Static analysis tools augment LLM outputs for accuracy.`,
    keyLearnings: [
      'Local LLMs are viable for code tasks when prompts are well-structured.',
      'Combining static analysis with LLM output significantly reduces false positives in issue detection.',
      'Chunking large files at function boundaries preserves semantic context.',
    ],
    futureImprovements: [
      'Add a vector store for full codebase Q&A.',
      'Build a VS Code extension.',
      'Support multiple programming languages beyond Python.',
    ],
    technologies: ['Python', 'Ollama', 'Static Analysis Tools'],
    screenshots: [],
    architectureDiagrams: [],
    githubURL: 'https://github.com/LocalCoderChain/rag-code-analysis-assistant',
    featured: true,
    category: 'AI',
    tags: ['AI', 'Local AI', 'Python', 'Ollama', 'Developer Tools'],
    year: 2024,
    status: 'completed',
  },
  {
    id: 'engineering-rag',
    title: 'Engineering Research & Technical Documentation Assistant',
    shortDescription:
      'AI assistant for technical PDFs, engineering documents, semantic search, and summarisation using LangChain and local LLMs.',
    detailedDescription: `An AI-powered assistant that ingests technical PDFs and engineering documents, enables semantic search across them, and generates accurate summaries and answers using LangChain and locally-hosted LLMs via Ollama.`,
    problemStatement: `Engineers waste hours manually searching through dense technical documentation. Keyword search misses semantic intent and cross-document relationships.`,
    solutionApproach: `Built a RAG pipeline using LangChain to chunk, embed, and index technical documents into a local vector store. Semantic search retrieves relevant context which is passed to a local LLM for grounded answer generation.`,
    keyLearnings: [
      'LangChain significantly accelerates RAG pipeline development.',
      'Chunk size tuning is critical for dense technical documents.',
      'Local inference keeps sensitive engineering IP off cloud servers.',
    ],
    futureImprovements: [
      'Add multi-document cross-referencing.',
      'Build a web UI for non-technical engineers.',
      'Support CAD metadata and structured engineering formats.',
    ],
    technologies: ['Python', 'Ollama', 'LangChain'],
    screenshots: [],
    architectureDiagrams: [],
    githubURL: 'https://github.com/LocalCoderChain/engineering-document-rag',
    featured: false,
    category: 'RAG',
    tags: ['RAG', 'AI', 'LangChain', 'Python', 'Local AI'],
    year: 2024,
    status: 'completed',
  },
];
// ─── Derived helpers ─────────────────────────────────────────────────────────

export const getFeaturedProjects = (): Project[] =>
  projects.filter(p => p.featured);

export const getProjectById = (id: string): Project | undefined =>
  projects.find(p => p.id === id);

export const getProjectsByCategory = (category: string): Project[] =>
  category === 'All'
    ? projects
    : projects.filter(p => p.category === category || p.tags.includes(category));

export const getAllCategories = (): string[] => {
  const cats = new Set(projects.map(p => p.category));
  return ['All', ...Array.from(cats)];
};

export const getAllTags = (): string[] => {
  const tags = new Set(projects.flatMap(p => p.tags));
  return Array.from(tags).sort();
};

// Asset path helpers
export const getProjectAssetBase = (projectId: string): string =>
  `/projects/${projectId}`;

export const getScreenshotURL = (projectId: string, filename: string): string =>
  `/projects/${projectId}/screenshots/${filename}`;

export const getArchitectureURL = (projectId: string, filename: string): string =>
  `/projects/${projectId}/architecture/${filename}`;

export const getDemoVideoURL = (projectId: string, filename: string = 'demo.mp4'): string =>
  `/projects/${projectId}/${filename}`;

export const getReportURL = (projectId: string, filename: string = 'report.pdf'): string =>
  `/projects/${projectId}/${filename}`;
