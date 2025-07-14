import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  isTransitioning: boolean;
}

const AudioPlayer = ({ isTransitioning }: AudioPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Initialize audio with preferred settings
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.loop = true;
      
      // Attempt autoplay with muted fallback for browsers that block unmuted autoplay
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started successfully
            console.log('Audio started playing automatically');
          })
          .catch(error => {
            // Autoplay failed - mute and try again
            console.log('Autoplay prevented, trying muted', error);
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(e => console.error('Still failed to play:', e));
            }
          });
      }
    }
  }, []);

  useEffect(() => {
    if (videoRef.current && isTransitioning) {
      const fadeOut = setInterval(() => {
        if (videoRef.current && videoRef.current.volume > 0) {
          videoRef.current.volume = Math.max(0, videoRef.current.volume - 0.1);
        }
      }, 100);

      return () => clearInterval(fadeOut);
    }
  }, [isTransitioning]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Hidden video element to play the audio */}
      <video
        ref={videoRef}
        src="/OMG intro speech.mp4"
        className="absolute opacity-0 w-1 h-1 pointer-events-none"
        playsInline
        autoPlay
        loop
        muted={isMuted}
      />
      
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 bg-black/50 backdrop-blur-sm p-3 rounded-full hover:bg-black/70 transition-colors duration-300"
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
};

export default AudioPlayer;