import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(p => !p);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(isNaN(p) ? 0 : p);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    videoRef.current.currentTime = ratio * videoRef.current.duration;
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-black group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted={muted}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setPlaying(false)}
        className="w-full aspect-video object-cover"
        playsInline
      />

      {/* Controls overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {/* Title */}
        {title && (
          <div className="absolute top-4 left-4">
            <span className="font-mono text-xs text-white/70">{title}</span>
          </div>
        )}

        {/* Bottom controls */}
        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
          {/* Progress bar */}
          <div
            className="h-1 bg-white/20 rounded-full cursor-pointer hover:h-1.5 transition-all"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-accent-sage rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="text-white hover:text-accent-sage transition-colors">
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button onClick={() => setMuted(m => !m)} className="text-white hover:text-accent-sage transition-colors">
              {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
            <div className="flex-1" />
            <button onClick={handleFullscreen} className="text-white hover:text-accent-sage transition-colors">
              <Maximize size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Big play button when paused */}
      {!playing && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label="Play video"
        >
          <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center
                          hover:bg-accent-sage/80 transition-colors duration-200 group/btn">
            <Play size={24} className="text-white ml-1" />
          </div>
        </button>
      )}
    </div>
  );
}
