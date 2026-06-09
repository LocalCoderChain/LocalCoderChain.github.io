import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { contactInfo } from '../data/contact';

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your-email@example.com',
    href: `mailto:${contactInfo.email}`,
    accent: 'text-accent-coral',
    border: 'hover:border-accent-coral/40',
    desc: 'Best for detailed inquiries',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'LocalCoderChain',
    href: contactInfo.github,
    accent: 'text-accent-sage',
    border: 'hover:border-accent-sage/40',
    desc: 'Browse the code',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'your-username',
    href: contactInfo.linkedin,
    accent: 'text-accent-lavender',
    border: 'hover:border-accent-lavender/40',
    desc: 'Connect professionally',
  },
  {
    icon: FileDown,
    label: 'Resume',
    value: 'Download PDF',
    href: contactInfo.resumeURL,
    accent: 'text-accent-amber',
    border: 'hover:border-accent-amber/40',
    desc: 'Full CV and work history',
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="py-24 bg-surface-800/40" ref={ref}>
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="section-subheading mb-3"
        >
          06 — Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="section-heading mb-4"
        >
          Let's work together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="font-sans text-text-secondary max-w-lg mb-10 leading-relaxed"
        >
          Currently seeking internship and full-time roles in AI engineering and software development.
          Open to research collaborations, consulting, and interesting side projects.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className={`card p-5 flex flex-col gap-3 border border-surface-600 ${link.border} transition-all duration-200 group`}
            >
              <div className={`w-9 h-9 rounded-xl bg-surface-700 flex items-center justify-center ${link.accent} 
                              group-hover:scale-110 transition-transform duration-200`}>
                <link.icon size={17} />
              </div>
              <div>
                <p className="font-sans font-semibold text-text-primary text-sm mb-0.5">{link.label}</p>
                <p className={`font-mono text-xs ${link.accent} mb-1`}>{link.value}</p>
                <p className="font-sans text-xs text-text-muted">{link.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
