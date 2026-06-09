import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/contact';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 }
  }
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-sage/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-lavender/5 blur-3xl" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundSize: '60px 60px',
            backgroundImage: `
              linear-gradient(to right, #8fb8a8 1px, transparent 1px),
              linear-gradient(to bottom, #8fb8a8 1px, transparent 1px)
            `,
          }}
        />
      </div>

      <div className="section-container pt-24 pb-16 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Monospace eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-6">
            <span className="font-mono text-accent-sage text-sm tracking-widest">
              &gt;_ localcoderchain
            </span>
            <span className="h-px flex-1 max-w-16 bg-accent-sage/30" />
          </motion.div>

          {/* Name / brand */}
          <motion.div variants={item} className="mb-4">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-primary leading-[1.05]">
              Building
              <span className="block text-accent-sage italic">intelligent</span>
              software.
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={item} className="font-mono text-sm sm:text-base text-accent-lavender mb-3 tracking-wide">
            AI Developer &nbsp;•&nbsp; Software Engineer &nbsp;•&nbsp; Research Enthusiast
          </motion.p>

          {/* Tagline */}
          <motion.p variants={item} className="font-sans text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed mb-10 text-balance">
            Building practical AI systems, local-first applications, and intelligent software tools.
          </motion.p>

          {/* CTA row */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
            <a href="/#projects" onClick={e => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }} className="btn-primary">
              View Projects
            </a>
            <a href="/#contact" onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className="btn-secondary">
              Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-4">
            {contactInfo.github && (
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"
                 className="p-2.5 rounded-xl text-text-muted hover:text-accent-sage hover:bg-surface-700/60 transition-all duration-150"
                 aria-label="GitHub">
                <Github size={18} />
              </a>
            )}
            {contactInfo.linkedin && (
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-2.5 rounded-xl text-text-muted hover:text-accent-lavender hover:bg-surface-700/60 transition-all duration-150"
                 aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            )}
            {contactInfo.email && (
              <a href={`mailto:${contactInfo.email}`}
                 className="p-2.5 rounded-xl text-text-muted hover:text-accent-coral hover:bg-surface-700/60 transition-all duration-150"
                 aria-label="Email">
                <Mail size={18} />
              </a>
            )}
            <div className="h-4 w-px bg-surface-600 mx-1" />
            <span className="font-mono text-xs text-text-muted">Available for internships & roles</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
