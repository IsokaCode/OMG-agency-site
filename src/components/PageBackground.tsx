import React, { useState, useEffect } from 'react';
import metalicRoomBg from '../assets/metalic-room-background.png';

interface PageBackgroundProps {
  children: React.ReactNode;
  immediate?: boolean;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children, immediate = false }) => {
  const [pageLoaded, setPageLoaded] = useState(immediate);

  // Set pageLoaded to true after a short delay to trigger animations
  useEffect(() => {
    if (!immediate) {
      const timer = setTimeout(() => {
        setPageLoaded(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [immediate]);

  return (
    <div className="min-h-screen bg-neutral-900 pt-16 relative">
      {/* Background Image with animated darkness */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-2000"
        style={{
          backgroundImage: `url(${metalicRoomBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: pageLoaded ? 0.5 : 0.9, // Start brighter, then darken
        }}
      />
      
      {/* Additional darkening overlay with animation */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-2000"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4))',
          opacity: pageLoaded ? 1 : 0, // Fade in the overlay
        }}
      />
      
      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackground; 