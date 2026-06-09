import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function ResumeSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="resume" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-subheading mb-3"
        >
          05 — Resume
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="section-heading mb-10"
        >
          Download resume.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="card p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-xl text-text-primary mb-2">
              LocalCoderChain — Resume
            </h3>
            <p className="font-sans text-sm text-text-secondary">
              AI Developer &nbsp;•&nbsp; Software Engineer &nbsp;•&nbsp; Research Enthusiast
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Python', 'RAG', 'LLM', 'React', 'FastAPI'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={contactInfo.resumeURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Eye size={15} /> Preview
            </a>
            <a
              href={contactInfo.resumeURL}
              download
              className="btn-primary"
            >
              <Download size={15} /> Download PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
