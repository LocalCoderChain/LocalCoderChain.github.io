/**
 * publications.ts — Research publications data store.
 *
 * HOW TO ADD A NEW PUBLICATION:
 * 1. Place your PDF at: public/publications/your-paper.pdf
 * 2. Add an entry below following the template.
 */

import type { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'vision-beyond-sight-2025',
    title: 'Vision Beyond Sight: AI-Powered Assistive Technology for the Visually Impaired',
    conference: 'ICAMMAIA — AIP Conference Proceedings',
    year: 2025,
    abstract:
      'This paper presents an AI-powered assistive system designed to enhance independence and accessibility for visually impaired individuals. The system leverages computer vision, natural language processing, and audio feedback to interpret and describe the visual environment in real time, enabling users to navigate and interact with their surroundings more effectively.',
    pdfLink: undefined,
    doiLink: undefined,
    authors: ['Arya Barsode'],
    tags: ['Computer Vision', 'Assistive Technology', 'NLP', 'AI'],
  },
  {
    id: 'satya-ledger-2026',
    title: 'Satya Ledger: A Blockchain-Based Decentralised Digital Receipt Framework for Government Financial Transactions',
    conference: 'ICAMMAIA 2026 — Publication in Progress',
    year: 2026,
    abstract:
      'Satya Ledger proposes a decentralised digital receipt framework built on blockchain technology to bring transparency, immutability, and auditability to government financial transactions. The system addresses challenges of receipt tampering, financial fraud, and lack of accountability in public sector spending.',
    pdfLink: undefined,
    doiLink: undefined,
    authors: ['Arya Barsode'],
    tags: ['Blockchain', 'Government Tech', 'Decentralisation', 'FinTech'],
  },
];