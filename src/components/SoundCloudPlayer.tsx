import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, X, Maximize2, SkipBack, SkipForward } from 'lucide-react';

interface SoundCloudPlayerProps {
  playlistUrl: string;
  isVisible: boolean;
}

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({ playlistUrl, isVisible }) => {
  const [isPlaying, setIsPlaying] = useState(true); // Start as true since iframe auto-plays
  const [isExpanded, setIsExpanded] = useState(false);
  const [isIframeReady, setIsIframeReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for messages from SoundCloud iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Only handle messages from SoundCloud
      if (event.origin !== 'https://w.soundcloud.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // Handle different message types from SoundCloud
        if (data.method === 'getCurrentSound') {
          // Track is playing
          setIsPlaying(data.args[0]?.playbackStatus === 'playing');
        } else if (data.method === 'getPaused') {
          // Track pause state
          setIsPlaying(!data.args[0]);
        }
      } catch (error) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Initialize iframe and sync state
  useEffect(() => {
    if (iframeRef.current && isVisible) {
      const iframe = iframeRef.current;
      
      // Wait for iframe to load
      iframe.onload = () => {
        setIsIframeReady(true);
        
        // Get initial state from iframe
        setTimeout(() => {
          iframe.contentWindow?.postMessage(
            JSON.stringify({ method: 'getPaused' }),
            'https://w.soundcloud.com'
          );
        }, 1000);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const togglePlay = () => {
    if (!isIframeReady) return;
    
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ method: newPlayingState ? 'play' : 'pause' }),
        'https://w.soundcloud.com'
      );
    }
  };

  const skipToPrevious = () => {
    if (!isIframeReady) return;
    
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ method: 'prev' }),
        'https://w.soundcloud.com'
      );
    }
  };

  const skipToNext = () => {
    if (!isIframeReady) return;
    
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ method: 'next' }),
        'https://w.soundcloud.com'
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
              disabled={!isIframeReady}
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

            {/* Track controls */}
            <div className="flex items-center justify-center space-x-4">
              {/* Previous track button */}
              <button
                onClick={skipToPrevious}
                className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 transition-all duration-200 hover:scale-105 shadow-lg border border-neutral-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isIframeReady}
                title="Previous track"
              >
                <SkipBack size={18} />
              </button>

              {/* Main play button */}
              <button
                onClick={togglePlay}
                className="bg-neutral-600 hover:bg-neutral-500 text-white rounded-full p-4 transition-all duration-200 hover:scale-105 shadow-lg border border-neutral-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isIframeReady}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>

              {/* Next track button */}
              <button
                onClick={skipToNext}
                className="bg-neutral-700 hover:bg-neutral-600 text-white rounded-full p-2 transition-all duration-200 hover:scale-105 shadow-lg border border-neutral-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isIframeReady}
                title="Next track"
              >
                <SkipForward size={18} />
              </button>
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