/**
 * publications.ts — Research publications data store.
 *
 * HOW TO ADD A NEW PUBLICATION:
 * 1. Place your PDF at: public/publications/your-paper.pdf
 * 2. Add an entry below following the template.
 */

import type { Publication } from '@/types';

export const publications: Publication[] = [
  // ─── TEMPLATE ─────────────────────────────────────────────────────────────
  // {
  //   id: 'my-paper-2024',
  //   title: 'My Research Paper Title',
  //   conference: 'Conference Name or Journal',
  //   year: 2024,
  //   abstract: 'Full abstract text here...',
  //   pdfLink: '/publications/my-paper.pdf',
  //   doiLink: 'https://doi.org/10.xxxx/xxxxx',
  //   authors: ['Author One', 'Author Two'],
  //   tags: ['RAG', 'NLP', 'LLM'],
  // },

  // ─── Example Entry ────────────────────────────────────────────────────────
  {
    id: 'local-rag-survey-2024',
    title: 'A Survey of Local Retrieval-Augmented Generation Systems for Privacy-Sensitive Domains',
    conference: 'Workshop on Efficient Natural Language & Speech Technology (EffNLP)',
    year: 2024,
    abstract:
      'Retrieval-Augmented Generation (RAG) has emerged as a dominant paradigm for grounding large language model outputs in factual knowledge. However, most RAG implementations depend on cloud-hosted APIs, creating significant privacy concerns for regulated industries such as healthcare, legal, and engineering. In this survey, we systematically review approaches for implementing fully local RAG pipelines, evaluate trade-offs between embedding models, vector stores, and inference backends, and propose a taxonomy of deployment configurations. We identify key gaps in the literature around evaluation benchmarks for local RAG and outline directions for future work.',
    pdfLink: '/publications/local-rag-survey.pdf',
    doiLink: undefined,
    authors: ['LocalCoderChain'],
    tags: ['RAG', 'LLM', 'Privacy', 'Survey', 'Local AI'],
  },
];
