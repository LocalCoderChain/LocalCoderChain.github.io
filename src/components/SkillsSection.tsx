import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillsByCategory } from '../data/skills';
import type { SkillCategory } from '../types';

const CATEGORY_COLORS: Record<SkillCategory, string> = {
  'Programming Languages':  'border-accent-sage/40 hover:border-accent-sage/70 hover:text-accent-sage',
  'AI & Machine Learning':  'border-accent-lavender/40 hover:border-accent-lavender/70 hover:text-accent-lavender',
  'Data Science':           'border-accent-teal/40 hover:border-accent-teal/70 hover:text-accent-teal',
  'Databases':              'border-accent-amber/40 hover:border-accent-amber/70 hover:text-accent-amber',
  'Cloud & DevOps':         'border-accent-coral/40 hover:border-accent-coral/70 hover:text-accent-coral',
  'Frameworks':             'border-accent-sage/40 hover:border-accent-sage/70 hover:text-accent-sage',
  'Tools & Platforms':      'border-surface-500/60 hover:border-surface-400 hover:text-text-primary',
};

const LEVEL_DOTS: Record<string, number> = {
  beginner: 1, intermediate: 2, advanced: 3, expert: 4
};

export default function SkillsSection() {
  const categories = Object.keys(skillsByCategory) as SkillCategory[];
  const [active, setActive] = useState<SkillCategory>(categories[0]);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-24 bg-surface-800/40" ref={ref}>
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-subheading mb-3"
        >
          02 — Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="section-heading mb-10"
        >
          Technical toolkit.
        </motion.h2>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 border ${
                active === cat
                  ? 'bg-accent-sage text-surface-900 border-accent-sage font-medium'
                  : 'border-surface-600 text-text-secondary hover:text-text-primary hover:border-surface-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {(skillsByCategory[active] || []).map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: i * 0.03 }}
              className={`skill-pill border ${CATEGORY_COLORS[skill.category]}`}
            >
              <span className="text-text-primary">{skill.name}</span>
              <span className="flex gap-0.5 ml-1">
                {Array.from({ length: 4 }).map((_, d) => (
                  <span
                    key={d}
                    className={`w-1 h-1 rounded-full ${
                      d < LEVEL_DOTS[skill.level]
                        ? 'bg-accent-sage'
                        : 'bg-surface-600'
                    }`}
                  />
                ))}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="mt-8 flex items-center gap-6 text-xs font-mono text-text-muted">
          <span>Proficiency:</span>
          {['beginner', 'intermediate', 'advanced', 'expert'].map(l => (
            <span key={l} className="flex items-center gap-1.5">
              <span className="flex gap-0.5">
                {Array.from({ length: 4 }).map((_, d) => (
                  <span
                    key={d}
                    className={`w-1 h-1 rounded-full ${
                      d < LEVEL_DOTS[l] ? 'bg-accent-sage' : 'bg-surface-600'
                    }`}
                  />
                ))}
              </span>
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
