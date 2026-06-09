import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft, Github, ExternalLink, Download, Lightbulb,
  ArrowRight, BookOpen, Cpu, Target, Wrench
} from 'lucide-react';
import {
  getProjectById, getScreenshotURL, getArchitectureURL,
  getDemoVideoURL, getReportURL
} from '../data/projects';
import ProjectGallery from '../components/ProjectGallery';
import VideoPlayer from '../components/VideoPlayer';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-3xl text-text-muted mb-4">Project not found.</p>
          <Link to="/projects" className="btn-primary">Back to projects</Link>
        </div>
      </div>
    );
  }

  const screenshotURLs = project.screenshots.map(s => getScreenshotURL(project.id, s));
  const archURLs = project.architectureDiagrams.map(a => getArchitectureURL(project.id, a));
  const demoVideoURL = project.demoVideo ? getDemoVideoURL(project.id, project.demoVideo) : null;
  const reportURL = project.reportPDF ? getReportURL(project.id, project.reportPDF) : null;

  return (
    <div className="min-h-screen pt-20 pb-24">
      {/* Back nav */}
      <div className="section-container py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-muted hover:text-text-primary font-mono text-sm transition-colors group"
        >
          <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
      </div>

      <div className="section-container">
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-16">

          {/* ── Hero ───────────────────────────────────────────────── */}
          <motion.div variants={item} className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="tag text-accent-sage border-accent-sage/30">{project.category}</span>
              <span className="tag">{project.year}</span>
              <span className={`tag ${
                project.status === 'completed' ? 'text-accent-sage border-accent-sage/30' :
                project.status === 'in-progress' ? 'text-accent-amber border-accent-amber/30' :
                'text-text-muted'
              }`}>
                {project.status}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-text-primary mb-4 leading-[1.1]">
              {project.title}
            </h1>
            <p className="font-sans text-lg text-text-secondary leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              {project.githubURL && (
                <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <Github size={15} /> View on GitHub
                </a>
              )}
              {project.liveURL && (
                <a href={project.liveURL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
              {reportURL && (
                <a href={reportURL} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <Download size={15} /> Download Report
                </a>
              )}
            </div>
          </motion.div>

          {/* ── Technologies ──────────────────────────────────────── */}
          <motion.section variants={item}>
            <h2 className="flex items-center gap-2 font-display text-xl text-text-primary mb-4">
              <Cpu size={18} className="text-accent-sage" /> Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="skill-pill border-surface-600">{tech}</span>
              ))}
            </div>
          </motion.section>

          {/* ── Divider ───────────────────────────────────────────── */}
          <div className="h-px bg-surface-700" />

          {/* ── Overview + Problem + Solution ─────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.section variants={item}>
              <h2 className="flex items-center gap-2 font-display text-xl text-text-primary mb-4">
                <BookOpen size={18} className="text-accent-lavender" /> Project Overview
              </h2>
              <p className="font-sans text-text-secondary leading-relaxed">
                {project.detailedDescription}
              </p>
            </motion.section>

            <div className="space-y-8">
              <motion.section variants={item}>
                <h2 className="flex items-center gap-2 font-display text-lg text-text-primary mb-3">
                  <Target size={16} className="text-accent-coral" /> Problem Statement
                </h2>
                <p className="font-sans text-text-secondary leading-relaxed text-sm">
                  {project.problemStatement}
                </p>
              </motion.section>

              <motion.section variants={item}>
                <h2 className="flex items-center gap-2 font-display text-lg text-text-primary mb-3">
                  <Wrench size={16} className="text-accent-amber" /> Solution Approach
                </h2>
                <p className="font-sans text-text-secondary leading-relaxed text-sm">
                  {project.solutionApproach}
                </p>
              </motion.section>
            </div>
          </div>

          {/* ── Architecture Diagrams ─────────────────────────────── */}
          {archURLs.length > 0 && (
            <motion.section variants={item}>
              <h2 className="font-display text-xl text-text-primary mb-4">Architecture</h2>
              <ProjectGallery images={archURLs} projectTitle={`${project.title} Architecture`} />
            </motion.section>
          )}

          {/* ── Screenshots ───────────────────────────────────────── */}
          {screenshotURLs.length > 0 && (
            <motion.section variants={item}>
              <h2 className="font-display text-xl text-text-primary mb-4">Screenshots</h2>
              <ProjectGallery images={screenshotURLs} projectTitle={project.title} />
            </motion.section>
          )}

          {/* ── Demo Video ────────────────────────────────────────── */}
          {demoVideoURL && (
            <motion.section variants={item}>
              <h2 className="font-display text-xl text-text-primary mb-4">Demo Video</h2>
              <VideoPlayer src={demoVideoURL} title={project.title} />
            </motion.section>
          )}

          {/* ── Key Learnings + Future Improvements ───────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.keyLearnings.length > 0 && (
              <motion.section variants={item} className="card p-6">
                <h2 className="flex items-center gap-2 font-display text-lg text-text-primary mb-4">
                  <Lightbulb size={17} className="text-accent-amber" /> Key Learnings
                </h2>
                <ul className="space-y-3">
                  {project.keyLearnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-accent-sage mt-0.5 shrink-0">
                        0{i + 1}
                      </span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{learning}</p>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {project.futureImprovements.length > 0 && (
              <motion.section variants={item} className="card p-6">
                <h2 className="flex items-center gap-2 font-display text-lg text-text-primary mb-4">
                  <ArrowRight size={17} className="text-accent-lavender" /> Future Improvements
                </h2>
                <ul className="space-y-3">
                  {project.futureImprovements.map((improvement, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-mono text-xs text-accent-lavender mt-0.5 shrink-0">
                        →
                      </span>
                      <p className="font-sans text-sm text-text-secondary leading-relaxed">{improvement}</p>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* ── Tags ──────────────────────────────────────────────── */}
          <motion.div variants={item} className="flex flex-wrap gap-2 pt-4 border-t border-surface-700">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </motion.div>

          {/* ── Back to projects ──────────────────────────────────── */}
          <motion.div variants={item}>
            <Link to="/projects" className="btn-secondary">
              <ArrowLeft size={15} /> All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
