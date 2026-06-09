import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { projects, getAllCategories } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function AllProjectsPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = getAllCategories();

  const filtered = useMemo(() => {
    let result = projects;

    if (activeCategory !== 'All') {
      result = result.filter(
        p => p.category === activeCategory || p.tags.includes(activeCategory)
      );
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      result = result.filter(
        p =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.technologies.some(t => t.toLowerCase().includes(q)) ||
          p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-subheading mb-3">All Projects</p>
          <h1 className="section-heading mb-4">
            Everything I've built.
          </h1>
          <p className="font-sans text-text-secondary max-w-xl">
            {projects.length} projects across AI, RAG, software engineering, data science, and research.
          </p>
        </motion.div>

        {/* Search + filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-surface-700 border border-surface-600
                         text-text-primary placeholder-text-muted font-sans text-sm
                         focus:outline-none focus:border-accent-sage/50 transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all duration-150 ${
                  activeCategory === cat
                    ? 'bg-accent-sage text-surface-900 border-accent-sage font-medium'
                    : 'border-surface-600 text-text-secondary hover:text-text-primary hover:border-surface-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results count */}
        <p className="font-mono text-xs text-text-muted mb-6">
          {filtered.length} of {projects.length} projects
          {(query || activeCategory !== 'All') && (
            <button
              onClick={() => { setQuery(''); setActiveCategory('All'); }}
              className="ml-3 text-accent-sage hover:underline"
            >
              clear filters
            </button>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-display text-xl text-text-muted mb-2">No projects found.</p>
            <p className="font-sans text-sm text-text-muted">Try a different search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
