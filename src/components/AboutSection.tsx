import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, FlaskConical, Cpu } from 'lucide-react';

const highlights = [
  { icon: Cpu,         label: 'Local AI',        desc: 'Local-first AI systems that respect privacy.' },
  { icon: Database,    label: 'RAG Systems',      desc: 'Retrieval-augmented generation pipelines.' },
  { icon: Code2,       label: 'Full Stack',       desc: 'End-to-end web and API development.' },
  { icon: FlaskConical, label: 'Research',        desc: 'NLP, LLM evaluation, and systems research.' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="section-subheading mb-3"
            >
              01 — About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="section-heading mb-6"
            >
              Engineering AI that works in the real world.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="space-y-4 text-text-secondary font-sans text-base leading-relaxed"
            >
              <p>
                I'm a software engineer and AI practitioner focused on building systems that are practical, 
                grounded, and actually useful. I specialize in retrieval-augmented generation, local LLM 
                deployment, and building developer tooling for working with AI.
              </p>
              <p>
                My interest is in the full stack — from embedding models and vector databases to React 
                frontends and REST APIs. I care about building things that work well, are maintainable, 
                and can be understood and modified by other engineers.
              </p>
              <p>
                When I'm not building, I'm reading research papers, contributing to open-source projects, 
                and exploring what AI can do when it runs entirely on local hardware.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="h-px w-12 bg-accent-sage/40" />
              <span className="font-mono text-xs text-text-muted tracking-widest">
                open to opportunities
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-sage opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-sage" />
              </span>
            </motion.div>
          </div>

          {/* Right: highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="card p-5 group"
              >
                <div className="mb-3 w-9 h-9 rounded-xl bg-surface-700 flex items-center justify-center
                                group-hover:bg-accent-sage/10 transition-colors duration-200">
                  <h.icon size={18} className="text-accent-sage" />
                </div>
                <h3 className="font-sans font-semibold text-text-primary text-sm mb-1.5">{h.label}</h3>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
