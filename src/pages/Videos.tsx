import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import PageBackground from '../components/PageBackground';

const videos = [
  {
    id: 1,
    title: 'Metro X',
    subtitle: 'Studio Session Vol. 1',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=60',
    duration: '5:23',
    views: '102K',
    videoId: 'dQw4w9WgXcQ' // Example YouTube video ID
  },
  {
    id: 2,
    title: 'Crystal Wave',
    subtitle: 'Behind the Beat',
    thumbnail: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&auto=format&fit=crop&q=60',
    duration: '8:45',
    views: '87K',
    videoId: 'M7lc1UVf-VE' // Example YouTube video ID
  },
  {
    id: 3,
    title: 'Voltage',
    subtitle: 'Making the Hit',
    thumbnail: 'https://images.unsplash.com/photo-1583944000409-00dd0ba1a275?w=800&auto=format&fit=crop&q=60',
    duration: '12:30',
    views: '156K',
    videoId: '9bZkp7q19f0' // Example YouTube video ID
  }
];

interface VideoPlayerModalProps {
  video: typeof videos[0];
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-8"
      style={{ animation: 'fadeIn 0.3s ease-out' }}
    >
      <div 
        className="relative w-full max-w-6xl bg-neutral-800/80 rounded-2xl overflow-hidden"
        style={{ animation: 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/50 rounded-full p-2"
        >
          <X size={24} />
        </button>

        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{video.title}</h2>
          <p className="text-gray-400">{video.subtitle}</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            <span>{video.duration}</span>
            <span>•</span>
            <span>{video.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);
  const [isEntering, setIsEntering] = useState(true);

  useEffect(() => {
    // Start with opacity 0
    setIsEntering(true);
    // Trigger animation after a short delay
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageBackground>
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        {/* OMG Logo */}
        <div className="mb-12">
          <img
            src="/omg%20music%20agency%20animation.gif"
            alt="OMG Logo"
            className="mx-auto"
            style={{ width: '300px', height: 'auto' }}
          />
        </div>

        {/* YouTube Video */}
        <div className="w-full max-w-4xl px-4 mb-8">
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/HoSz5xtd8lI"
              title="OMG Agency Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* More Coming Soon Text */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">MORE COMING SOON</h2>
          <p className="text-xl text-neutral-400">
            We're cooking up something special. Stay tuned!
          </p>
        </div>
      </div>

      {/* Original Videos Content - Commented out for future use */}
      {/*
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-16 text-center tracking-wider">VIDEOS</h1>
        
        <div className="space-y-24">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="group grid grid-cols-[600px_1fr] gap-24 items-center cursor-pointer"
              style={{
                animation: `fadeIn 0.5s ease-out forwards ${index * 0.2}s`,
                opacity: 0,
              }}
              onClick={() => setSelectedVideo(video)}
            >
              <div className="pentagon-container" style={{ width: '600px', height: '600px', transform: 'rotate(180deg)' }}>
                <div
                  className="pentagon-hover relative"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
                    border: '2px solid rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    backfaceVisibility: 'hidden',
                    background: 'linear-gradient(45deg, rgba(0,0,0,0.05), transparent)',
                  }}
                >
                  <div className="shimmer-overlay"></div>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transform rotate-180"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-180">
                    <Play 
                      className="w-24 h-24 text-white"
                      style={{
                        filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.5))',
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="pl-12">
                <h2 className="text-[40px] font-bold mb-2 text-gray-800">
                  {video.title}
                </h2>
                <p className="text-[24px] mb-4 text-gray-600">
                  {video.subtitle}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{video.duration}</span>
                  <span>•</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
      
      {selectedVideo && (
        <VideoPlayerModal 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </PageBackground>
  );
};

export default Videos;