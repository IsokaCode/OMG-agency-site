import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageBackground from '../components/PageBackground';

const Contact: React.FC = () => {
  return (
    <PageBackground>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">CONTACT US</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-6 h-6 mr-3" />
                  <span>jagger@onmygrind.agency</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-6 h-6 mr-3" />
                  <span>+1 (000) 000-000</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-6 h-6 mr-3" />
                  <span>123 xxxxxx, Atlanta, GA</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Studio Hours</h2>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 10AM - 10PM</p>
                <p>Saturday: 12PM - 8PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
              </div>

              <div className="pentagon-container mx-auto" style={{ width: '180px', height: '140px', transform: 'rotate(180deg)' }}>
                <button
                  type="submit"
                  className="pentagon-hover w-full h-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
                    border: '2px solid rgba(255,255,255,0.1)',
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.05), transparent)',
                  }}
                >
                  <div className="transform rotate-180 translate-y-2">
                    <span className="text-base whitespace-nowrap">Send Message</span>
                  </div>
                  <div className="shimmer-overlay"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default Contact;