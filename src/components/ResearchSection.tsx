import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, ExternalLink, Download } from 'lucide-react';
import { publications } from '../data/publications';

export default function ResearchSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  if (publications.length === 0) return null;

  return (
    <section id="research" className="py-24 bg-surface-800/40" ref={ref}>
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-subheading mb-3"
        >
          04 — Research
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="section-heading mb-10"
        >
          Publications.
        </motion.h2>

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-surface-700 flex items-center justify-center">
                  <FileText size={18} className="text-accent-lavender" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg text-text-primary leading-snug">
                      {pub.title}
                    </h3>
                    <span className="tag shrink-0 text-accent-lavender border-accent-lavender/30">
                      {pub.year}
                    </span>
                  </div>
                  <p className="font-mono text-xs text-accent-sage mb-3">{pub.conference}</p>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed mb-4">
                    {pub.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pub.tags.map(tag => (
                      <span key={tag} className="tag text-[11px]">{tag}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {pub.pdfLink && (
                      <a
                        href={pub.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs"
                      >
                        <Download size={13} /> PDF
                      </a>
                    )}
                    {pub.doiLink && (
                      <a
                        href={pub.doiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs"
                      >
                        <ExternalLink size={13} /> DOI
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
