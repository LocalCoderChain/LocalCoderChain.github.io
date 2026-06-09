import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (images.length === 0) return null;

  const prev = () => setLightbox(i => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setLightbox(i => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setLightbox(i)}
            className="relative rounded-xl overflow-hidden aspect-video bg-surface-700 group"
          >
            <img
              src={src}
              alt={`${projectTitle} screenshot ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={e => { (e.target as HTMLImageElement).parentElement!.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-surface-700/80 text-text-secondary hover:text-text-primary"
            >
              <X size={20} />
            </button>
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 p-2 rounded-xl bg-surface-700/80 text-text-secondary hover:text-text-primary"
            >
              <ChevronLeft size={24} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              src={images[lightbox]}
              alt={`${projectTitle} screenshot ${lightbox + 1}`}
              className="max-w-4xl max-h-[80vh] w-full object-contain rounded-2xl"
              onClick={e => e.stopPropagation()}
            />
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 p-2 rounded-xl bg-surface-700/80 text-text-secondary hover:text-text-primary"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 font-mono text-xs text-text-muted">
              {lightbox + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
