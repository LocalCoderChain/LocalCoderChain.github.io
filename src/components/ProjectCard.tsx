import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { getScreenshotURL } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const firstScreenshot = project.screenshots[0];
  const imgSrc = firstScreenshot ? getScreenshotURL(project.id, firstScreenshot) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="card group flex flex-col overflow-hidden"
    >
      {/* Image / placeholder */}
      <div className="relative h-44 bg-surface-700 overflow-hidden">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-mono text-4xl text-surface-600">{'</>'}</span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="tag bg-surface-900/80 backdrop-blur-sm text-accent-sage border-accent-sage/30">
            {project.category}
          </span>
        </div>

        {/* Year */}
        <div className="absolute top-3 right-3">
          <span className="tag bg-surface-900/80 backdrop-blur-sm">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg text-text-primary mb-2 leading-snug group-hover:text-accent-sage transition-colors duration-200">
          {project.title}
        </h3>
        <p className="font-sans text-sm text-text-secondary leading-relaxed flex-1 mb-4">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="tag text-[11px]">{tag}</span>
          ))}
        </div>

        {/* Action row */}
        <div className="flex items-center justify-between pt-3 border-t border-surface-700">
          <div className="flex gap-2">
            {project.githubURL && (
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-700 transition-all"
                aria-label="GitHub"
              >
                <Github size={15} />
              </a>
            )}
            {project.liveURL && (
              <a
                href={project.liveURL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="p-1.5 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface-700 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 font-mono text-xs text-accent-sage 
                       hover:gap-2 transition-all duration-150"
          >
            View details <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
