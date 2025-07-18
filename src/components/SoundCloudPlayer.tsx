import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, X, Maximize2 } from 'lucide-react';

interface SoundCloudPlayerProps {
  playlistUrl: string;
  isVisible: boolean;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ playlistUrl, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(50);
  const [isExpanded, setIsExpanded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!isVisible) return null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ method: isPlaying ? 'pause' : 'play' }),
        '*'
      );
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ method: 'setVolume', value: isMuted ? volume / 100 : 0 }),
        '*'
      );
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (!isMuted && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ method: 'setVolume', value: newVolume / 100 }),
        '*'
      );
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {/* Hidden iframe for actual playback */}
      <div className="hidden">
        <iframe
          ref={iframeRef}
          title="SoundCloud Playlist"
          width="1"
          height="1"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/jagger-rosenthal/sets/omg-playlist&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
        />
      </div>

      {/* Minimal collapsed state - floating pill */}
      {!isExpanded && (
        <div 
          className="bg-neutral-800/90 backdrop-blur-md rounded-full border border-neutral-500/40 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group"
          onClick={() => setIsExpanded(true)}
        >
          <div className="flex items-center px-4 py-2 space-x-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>
            
            <div className="text-neutral-300 text-xs font-medium opacity-90">OMG</div>
            
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-neutral-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-neutral-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            
            <Maximize2 size={12} className="text-neutral-500 group-hover:text-neutral-300 transition-colors" />
          </div>
        </div>
      )}

      {/* Expanded state - minimal controls */}
      {isExpanded && (
        <div className="bg-neutral-800/95 backdrop-blur-md rounded-xl border border-neutral-500/40 shadow-2xl transition-all duration-300">
          <div className="p-4 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neutral-400 rounded-full animate-pulse"></div>
                <h3 className="text-neutral-200 font-medium text-sm">OMG Playlist</h3>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-neutral-500 hover:text-neutral-300 transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* Main play button */}
            <div className="flex justify-center">
              <button
                onClick={togglePlay}
                className="bg-neutral-600 hover:bg-neutral-500 text-white rounded-full p-4 transition-all duration-200 hover:scale-105 shadow-lg border border-neutral-500/30"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
            </div>

            {/* Volume control */}
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleMute}
                className="text-neutral-500 hover:text-neutral-300 transition-colors p-1"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-600 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #9ca3af 0%, #9ca3af ${isMuted ? 0 : volume}%, #4b5563 ${isMuted ? 0 : volume}%, #4b5563 100%)`
                  }}
                />
              </div>
              
              <span className="text-neutral-500 text-xs w-6">
                {isMuted ? 0 : volume}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-neutral-600 rounded-full h-1">
              <div 
                className="bg-neutral-400 h-1 rounded-full transition-all duration-300" 
                style={{ width: isPlaying ? '45%' : '0%' }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoundCloudPlayer; 