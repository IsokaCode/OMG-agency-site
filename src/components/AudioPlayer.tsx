import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  isTransitioning: boolean;
}

const AudioPlayer = ({ isTransitioning }: AudioPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Initialize audio with preferred settings
    if (videoRef.current) {
      videoRef.current.volume = 0.3;
      videoRef.current.loop = true;
      
      // Try to play unmuted first
      const playUnmuted = async () => {
        try {
          await videoRef.current!.play();
          console.log('Audio started playing automatically (unmuted)');
          setIsMuted(false);
        } catch (error) {
          console.log('Autoplay prevented, trying muted', error);
          // If unmuted autoplay fails, mute and try again
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            try {
              await videoRef.current.play();
              console.log('Audio started playing (muted)');
            } catch (e) {
              console.error('Still failed to play:', e);
            }
          }
        }
      };

      playUnmuted();
    }
  }, []);

  // Handle user interaction to unmute audio
  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasUserInteracted && videoRef.current && isMuted) {
        setHasUserInteracted(true);
        videoRef.current.muted = false;
        setIsMuted(false);
        console.log('Audio unmuted after user interaction');
      }
    };

    // Listen for various user interactions
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [hasUserInteracted, isMuted]);

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
      setHasUserInteracted(true); // Mark as interacted when user manually toggles
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
        title={isMuted ? "Unmute audio" : "Mute audio"}
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