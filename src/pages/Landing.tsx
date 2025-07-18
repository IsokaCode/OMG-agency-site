import React from 'react';
import { Play } from 'lucide-react';
import metalicRoomBg from '../assets/metalic-room-background.png';

interface LandingProps {
  onEnter: () => void;
  isTransitioning: boolean;
}

const Landing = ({ onEnter, isTransitioning }: LandingProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${metalicRoomBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          {/* 3D Logo */}
          <div 
            className={`mt-24 mb-12 transform-gpu perspective-[1000px] rotate-x-10 transition-transform duration-1000 -translate-x-8 ${
              isTransitioning ? 'scale-[0.15] -translate-y-[45vh]' : 'scale-100 translate-y-0'
            }`}
          >
            <img
              src="/omg%20music%20agency%20animation.gif"
              alt="OMG Logo"
              className="mx-auto"
              style={{
                width: '400px',
                height: 'auto',
              }}
            />
          </div>

          {/* Enter Button */}
          <button
            onClick={onEnter}
            className={`group relative inline-flex items-center justify-center px-12 py-4 text-xl font-medium text-white bg-transparent border-2 border-white/30 rounded-full overflow-hidden transition-all duration-300 hover:border-white hover:scale-105 -translate-x-11 -translate-y-9 ${
              isTransitioning ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
            }`}
          >
            <span className="relative z-10 flex items-center">
              ENTER <Play size={24} className="ml-2" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-300"></div>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Landing;