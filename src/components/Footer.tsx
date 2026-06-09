import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';
import { contactInfo } from '../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-700 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 group">
          <span className="font-mono text-accent-sage text-base font-light">&lt;</span>
          <span className="font-display text-sm text-text-secondary group-hover:text-text-primary transition-colors">LCC</span>
          <span className="font-mono text-accent-lavender text-xs font-light">/&gt;</span>
        </Link>

        <p className="font-mono text-xs text-text-muted">
          © {year} LocalCoderChain — Built with React & ♥
        </p>

        {/* Social */}
        <div className="flex items-center gap-2">
          {contactInfo.github && (
            <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"
               className="p-1.5 rounded-lg text-text-muted hover:text-text-secondary transition-colors"
               aria-label="GitHub">
              <Github size={15} />
            </a>
          )}
          {contactInfo.linkedin && (
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-1.5 rounded-lg text-text-muted hover:text-text-secondary transition-colors"
               aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
          )}
          {contactInfo.email && (
            <a href={`mailto:${contactInfo.email}`}
               className="p-1.5 rounded-lg text-text-muted hover:text-text-secondary transition-colors"
               aria-label="Email">
              <Mail size={15} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
