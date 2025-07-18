import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Producers from './pages/Producers';
import About from './pages/About';
import Shop from './pages/Shop';
import Videos from './pages/Videos';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import SoundCloudPlayer from './components/SoundCloudPlayer';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSoundCloudPlayer, setShowSoundCloudPlayer] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowLanding(false);
      setIsTransitioning(false);
      // Show SoundCloud player after entering the main site
      setShowSoundCloudPlayer(true);
    }, 1000); // Match this with the animation duration
  };

  const handleIsokodeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('contact uisoka1@gmail.com');
  };

  if (showLanding) {
    return <Landing onEnter={handleEnter} isTransitioning={isTransitioning} />;
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <Navbar setShowLanding={setShowLanding} />
      <Routes>
        <Route path="/producers" element={<Producers />} />
        <Route path="/producers/:producerSlug" element={<Producers />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:service" element={<Booking />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<Producers />} />
      </Routes>
      
      {/* SoundCloud Player - appears after entering from landing page */}
      <SoundCloudPlayer 
        playlistUrl="https://soundcloud.com/jagger-rosenthal/sets/omg-playlist"
        isVisible={showSoundCloudPlayer}
      />

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-neutral-500 text-xs font-light">
          Designed + Developed by{' '}
          <a 
            href="#" 
            onClick={handleIsokodeClick}
            className="text-neutral-400 hover:text-white transition-colors underline cursor-pointer"
          >
            Isokode
          </a>
          {' '}in partnership with OMG
        </p>
      </footer>
    </div>
  );
}

export default App;