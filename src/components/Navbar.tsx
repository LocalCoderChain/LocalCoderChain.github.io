import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',        href: '/#about' },
  { label: 'Skills',       href: '/#skills' },
  { label: 'Projects',     href: '/#projects' },
  { label: 'Research',     href: '/#research' },
  { label: 'Resume',       href: '/#resume' },
  { label: 'Contact',      href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleAnchorClick = (href: string) => (e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.slice(2);
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface-900/90 backdrop-blur-md border-b border-surface-700/60 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-mono text-accent-sage text-lg font-light">&lt;</span>
            <span className="font-display text-lg text-text-primary group-hover:text-accent-sage transition-colors duration-200">
              LCC
            </span>
            <span className="font-mono text-accent-lavender text-sm font-light">/&gt;</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleAnchorClick(link.href)}
                className="px-3 py-1.5 rounded-lg text-sm font-sans text-text-secondary 
                           hover:text-text-primary hover:bg-surface-700/50 
                           transition-all duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={handleAnchorClick('/#contact')}
              className="ml-3 btn-primary text-xs px-4 py-2"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-700/50 transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-surface-800/95 backdrop-blur-md border-b border-surface-700"
          >
            <nav className="section-container py-4 flex flex-col gap-1">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleAnchorClick(link.href)}
                  className="px-4 py-3 rounded-xl text-sm font-sans text-text-secondary 
                             hover:text-text-primary hover:bg-surface-700/60 
                             transition-all duration-150 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contact"
                onClick={handleAnchorClick('/#contact')}
                className="mt-2 btn-primary justify-center"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
