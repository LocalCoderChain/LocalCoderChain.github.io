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
  // ─── TEMPLATE (copy this block to add a new project) ──────────────────────
  // {
  //   id: 'my-new-project',
  //   title: 'My New Project',
  //   shortDescription: 'One sentence hook — what it does and why it matters.',
  //   detailedDescription: `Full paragraph explaining the project in depth.`,
  //   problemStatement: `What problem were you solving?`,
  //   solutionApproach: `How did you approach it technically?`,
  //   keyLearnings: [
  //     'What you learned from this project.',
  //   ],
  //   futureImprovements: [
  //     'What you would do next.',
  //   ],
  //   technologies: ['Python', 'LangChain', 'FastAPI'],
  //   screenshots: ['screenshot1.png', 'screenshot2.png'],
  //   architectureDiagrams: ['architecture.png'],
  //   demoVideo: 'demo.mp4',
  //   reportPDF: 'report.pdf',
  //   githubURL: 'https://github.com/LocalCoderChain/my-new-project',
  //   featured: false,
  //   category: 'AI',
  //   tags: ['AI', 'RAG', 'Python'],
  //   year: 2025,
  //   status: 'completed',
  // },

  // ─── Featured Project 1 ───────────────────────────────────────────────────
  {
    id: 'engineering-rag',
    title: 'Engineering RAG System',
    shortDescription:
      'A retrieval-augmented generation pipeline built for technical document Q&A over large engineering corpora.',
    detailedDescription: `A production-ready RAG (Retrieval-Augmented Generation) system designed to answer complex engineering questions by grounding responses in verified technical documentation. The system processes PDFs, engineering specs, and standards documents, chunks them intelligently, embeds them into a local vector store, and retrieves the most semantically relevant context before generating answers using a locally-hosted LLM.`,
    problemStatement: `Engineering teams waste hours searching through hundreds of pages of specs and standards. Traditional search is keyword-based and misses semantic intent. ChatGPT hallucinations are dangerous in technical contexts.`,
    solutionApproach: `Built a local-first RAG pipeline using LlamaIndex and Ollama. Documents are ingested, chunked with overlap, embedded using a local embedding model, and stored in ChromaDB. At query time, semantic search retrieves relevant chunks and feeds them to Mistral 7B for grounded answer generation. The entire stack runs offline.`,
    keyLearnings: [
      'Chunk size and overlap significantly impact retrieval quality — 512 tokens with 64-token overlap worked best for dense technical text.',
      'Re-ranking retrieved chunks with a cross-encoder before LLM generation reduced hallucinations measurably.',
      'Local inference with Ollama is viable for most technical Q&A use cases at negligible cost.',
      'Metadata filtering (by document type, version) dramatically improves answer precision.',
    ],
    futureImprovements: [
      'Add multi-hop reasoning for complex cross-document queries.',
      'Implement query expansion using hypothetical document embeddings (HyDE).',
      'Build a web UI for non-technical engineers.',
      'Add support for CAD file metadata ingestion.',
    ],
    technologies: ['Python', 'LlamaIndex', 'ChromaDB', 'Ollama', 'Mistral 7B', 'FastAPI', 'React'],
    screenshots: ['dashboard.png', 'query-interface.png', 'results-view.png'],
    architectureDiagrams: ['rag-pipeline.png', 'system-overview.png'],
    demoVideo: 'demo.mp4',
    reportPDF: 'report.pdf',
    githubURL: 'https://github.com/LocalCoderChain/engineering-rag',
    featured: true,
    category: 'RAG',
    tags: ['RAG', 'AI', 'LLM', 'Python', 'Local AI', 'LlamaIndex'],
    year: 2024,
    status: 'completed',
  },

  // ─── Featured Project 2 ───────────────────────────────────────────────────
  {
    id: 'code-rag',
    title: 'Code RAG Assistant',
    shortDescription:
      'A codebase-aware AI assistant that answers questions about large repositories using semantic code search.',
    detailedDescription: `A developer tool that ingests entire codebases and enables natural language Q&A about the code. Unlike simple grep-based search, Code RAG understands the semantic meaning of functions, classes, and documentation strings — allowing developers to ask questions like "where is authentication handled?" or "how does the caching layer work?" and receive accurate, grounded answers.`,
    problemStatement: `Onboarding to large codebases takes weeks. Developers spend enormous time understanding unfamiliar code instead of building. Existing tools require knowing what to search for, which defeats the purpose.`,
    solutionApproach: `Implemented a code-aware chunking strategy that respects function and class boundaries rather than splitting arbitrarily. Used tree-sitter for AST-based parsing across Python, JavaScript, and TypeScript. Code chunks are embedded using a code-specialized embedding model (CodeBERT), stored in FAISS, and retrieved at query time to ground LLM responses.`,
    keyLearnings: [
      'AST-aware chunking preserves semantic integrity far better than character-based splits.',
      'Code-specialized embeddings (CodeBERT) outperform general text embeddings for retrieval by ~22%.',
      'Including docstrings and type hints in chunks significantly improves answer quality.',
      'A two-stage retrieval pipeline (sparse BM25 + dense semantic) performs better than either alone.',
    ],
    futureImprovements: [
      'Add support for Java, Go, Rust.',
      'Implement dependency graph traversal for multi-file reasoning.',
      'Build VS Code extension for inline usage.',
      'Add conversation memory for multi-turn code exploration.',
    ],
    technologies: ['Python', 'tree-sitter', 'CodeBERT', 'FAISS', 'FastAPI', 'LangChain', 'TypeScript'],
    screenshots: ['code-search.png', 'answer-view.png'],
    architectureDiagrams: ['code-rag-arch.png'],
    demoVideo: 'demo.mp4',
    reportPDF: 'report.pdf',
    githubURL: 'https://github.com/LocalCoderChain/code-rag',
    featured: true,
    category: 'RAG',
    tags: ['RAG', 'AI', 'Code Analysis', 'Python', 'NLP'],
    year: 2024,
    status: 'completed',
  },

  // ─── Featured Project 3 ───────────────────────────────────────────────────
  {
    id: 'carbon-calculator',
    title: 'Carbon Footprint Calculator',
    shortDescription:
      'An interactive web tool for estimating organizational carbon emissions across Scope 1, 2, and 3 categories.',
    detailedDescription: `A full-stack web application that enables organizations to track and estimate their carbon footprint across all three GHG Protocol scopes. Users input data across transportation, energy, supply chain, and business travel categories. The system computes emissions using verified emission factors from recognized databases and generates exportable reports.`,
    problemStatement: `Small organizations lack accessible tools for carbon accounting. Enterprise solutions cost tens of thousands per year. Spreadsheet-based approaches are error-prone and inconsistent.`,
    solutionApproach: `Built a React frontend with a FastAPI backend. Emission factors are sourced from DEFRA and EPA databases and stored in a normalized PostgreSQL schema. Calculations are versioned, allowing organizations to track improvements year-over-year. Reports export to PDF with methodology documentation included.`,
    keyLearnings: [
      'Scope 3 emissions are the most complex and impactful category for most organizations.',
      'Building a clear calculation methodology is as important as the code itself.',
      'Data validation at ingestion is critical — garbage-in, garbage-out is especially harmful in emissions contexts.',
    ],
    futureImprovements: [
      'Add industry benchmarking to contextualize results.',
      'Integrate live energy grid carbon intensity APIs.',
      'Build a reduction planning module with scenario modeling.',
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Python', 'TailwindCSS', 'Docker'],
    screenshots: ['dashboard.png', 'input-form.png', 'report-view.png'],
    architectureDiagrams: ['system-arch.png'],
    reportPDF: 'report.pdf',
    githubURL: 'https://github.com/LocalCoderChain/carbon-calculator',
    featured: true,
    category: 'Software Engineering',
    tags: ['Web Development', 'Sustainability', 'Python', 'React', 'FastAPI'],
    year: 2023,
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
