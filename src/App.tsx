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

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowLanding(false);
      setIsTransitioning(false);
    }, 1000); // Match this with the animation duration
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
    </div>
  );
}

export default App;