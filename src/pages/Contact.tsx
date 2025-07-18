import React, { useState } from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { submitContactForm } from '../lib/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const result = await submitContactForm(formData);
      
      if (result.success) {
        setSubmitMessage(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setSubmitMessage(result.message);
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name *
                    </div>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </div>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </div>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
              </div>

              {submitMessage && (
                <div className={`p-4 rounded-lg text-center ${
                  submitMessage.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {submitMessage}
                </div>
              )}

              <div className="pentagon-container mx-auto" style={{ width: '180px', height: '140px', transform: 'rotate(180deg)' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pentagon-hover w-full h-full flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 60%, 85% 85%, 15% 85%, 0% 60%)',
                    border: '2px solid rgba(255,255,255,0.1)',
                    background: 'linear-gradient(45deg, rgba(255,255,255,0.05), transparent)',
                  }}
                >
                  <div className="transform rotate-180 translate-y-2">
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span className="text-sm whitespace-nowrap">Sending...</span>
                      </div>
                    ) : (
                      <span className="text-base whitespace-nowrap">Send Message</span>
                    )}
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