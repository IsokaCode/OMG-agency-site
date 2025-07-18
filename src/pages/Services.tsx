import React, { useState } from 'react';
import { Music, Mic2, Briefcase, FileText, Palette, ShoppingBag, Clapperboard, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageBackground from '../components/PageBackground';

const services = [
  {
    icon: <Music className="w-8 h-8" />, // Music Production
    title: 'Music Production',
    description: 'We bring your sound to life',
    details: "We offer full-scale music production services tailored to all artists, across every genre and budget. Whether you're an emerging talent or #1 Charting, we bring your sound to life."
  },
  {
    icon: <Mic2 className="w-8 h-8" />, // A&R
    title: 'A&R (Artist & Repertoire)',
    description: 'Help develop your artistic vision',
    details: 'Our A&R team helps develop your artistic vision—from song selection to studio sessions and collaborations—guiding your career with careful insight and creative direction'
  },
  {
    icon: <Briefcase className="w-8 h-8" />, // Management
    title: 'Management',
    description: 'Comprehensive management services',
    details: (
      <>
        <div>Comprehensive management services including:</div>
        <ul className="list-disc list-inside mt-2 flex flex-col items-center space-y-2">
          <li className="text-center">Contract negotiation &amp; legal support</li>
          <li className="text-center">Tour planning &amp; logistics</li>
          <li className="text-center">Live performance coordination</li>
          <li className="text-center">Strategic long-term and short-term career planning</li>
          <li className="text-center">Budgeting and Financial Oversight</li>
          <li className="text-center">Access to a comprehensive network of connections and key industry figures</li>
          <li className="text-center">Logistical and personal problem solving that comes with maneuvering the complexities of the industry</li>
        </ul>
      </>
    )
  },
  {
    icon: <FileText className="w-8 h-8" />, // Admin Publishing
    title: 'Administrative Publishing Consulting',
    description: 'Handle the administrative side of music publishing',
    details: 'We handle the administrative side of music publishing to ensure your royalties are tracked and collected globally.'
  },
  {
    icon: <Palette className="w-8 h-8" />, // Creative/Art Direction
    title: 'Creative/Art Direction and Marketing',
    description: 'Enhance your visual identity',
    details: (
      <>
        <div>Enhance your visual identity and reach with our integrated marketing support:</div>
        <ul className="list-disc list-inside mt-2 flex flex-col items-center space-y-2">
          <li className="text-center">Branding strategy</li>
          <li className="text-center">Logo Design</li>
          <li className="text-center">Website creation</li>
          <li className="text-center">Music video production</li>
          <li className="text-center">Promotional trailers &amp; content</li>
          <li className="text-center">Digital marketing campaigns &amp; social media assets</li>
        </ul>
      </>
    )
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />, // Merchandising
    title: 'Merchandising',
    description: 'Overseeing production and Creative collaboration',
    details: (
      <>
        <ul className="list-disc list-inside mt-2 flex flex-col items-center space-y-2">
          <li className="text-center">Creative Collaboration and Designing of merchandise</li>
          <li className="text-center">Overseeing production and access to Production Facilities</li>
          <li className="text-center">Various types of garment production</li>
          <li className="text-center">Finding the most efficient means of distribution</li>
        </ul>
      </>
    )
  },
  {
    icon: <Clapperboard className="w-8 h-8" />, // Sync Licensing
    title: 'Sync Licensing',
    description: 'Get your music placed in film, TV, ads, games, and more',
    details: 'Get your music placed in film, TV, ads, games, and more.We connect your catalog to trusted sync partners and opportunities across the entertainment industry.'
  }
];

const ServicePentagon = ({ service, index, onClick }: { service: typeof services[0], index: number, onClick: () => void }) => {
  return (
    <div
      className="pentagon-container cursor-pointer"
      style={{
        width: '340px',
        height: '280px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
        transform: 'rotate(180deg)',
        animation: `fadeIn 0.5s ease-out forwards ${index * 0.1}s`,
        opacity: 0,
      }}
      onClick={onClick}
    >
      <div
        className="pentagon-hover"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
          border: '2px solid rgba(255,255,255,0.1)',
          overflow: 'hidden',
          backfaceVisibility: 'hidden',
          background: 'linear-gradient(45deg, rgba(255,255,255,0.05), transparent)',
        }}
      >
        <div className="shimmer-overlay"></div>
        <div 
          className="absolute inset-0 bg-neutral-800/90 flex flex-col items-center justify-center p-8 transform rotate-180"
          style={{ paddingBottom: '4rem' }}
        >
          <div className="text-white mb-3 transform transition-transform duration-300 group-hover:scale-110">
            {service.icon}
          </div>
          <h3 className="text-lg font-bold text-white mb-2 text-center">{service.title}</h3>
          <p className="text-gray-300 text-center text-xs leading-tight whitespace-pre-line px-2 max-w-[90%] break-words mx-auto">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

const ExpandedServiceCard = ({ service, onClose, onQuote }: { service: typeof services[0], onClose: () => void, onQuote: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
    <div className="relative bg-neutral-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 mx-4">
      <button onClick={onClose} className="absolute top-4 right-4 text-white/80 hover:text-white z-10"><X size={28} /></button>
      <div className="flex flex-col items-center">
        <div className="mb-4 text-white">{service.icon}</div>
        <h2 className="text-lg font-bold text-white mb-2 text-center whitespace-nowrap">{service.title}</h2>
        <p className="text-gray-300 text-center mb-6">{service.details}</p>
        <button
          onClick={onQuote}
          className="px-8 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors text-lg font-semibold"
        >
          Get a Quote
        </button>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">OUR SERVICES</h1>
        <div className="text-center mb-16">
          <p className="text-gray-600 text-xl">ON MY GRIND. ALWAYS.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {services.map((service, index) => (
            <ServicePentagon key={service.title} service={service} index={index} onClick={() => setExpandedIndex(index)} />
          ))}
        </div>
        {expandedIndex !== null && (
          <ExpandedServiceCard
            service={services[expandedIndex]}
            onClose={() => setExpandedIndex(null)}
            onQuote={() => navigate(`/booking/${services[expandedIndex].title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
          />
        )}
      </div>
    </PageBackground>
  );
};

export default Services;