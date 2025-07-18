import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Calendar, Clock, Music, DollarSign, User, Mail, Phone } from 'lucide-react';
import PageBackground from '../components/PageBackground';
import { submitBookingForm } from '../lib/emailjs';

interface BookingState {
  producer?: {
    name: string;
    image: string;
  };
}

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = useParams();
  const state = location.state as BookingState;
  
  // Use a default producer if none is provided
  const producer = state?.producer || { name: "a Producer", image: "" };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    hours: "4",
    projectType: "single",
    details: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const bookingData = {
        ...formData,
        producerName: producer.name,
        serviceType: service ? service.replace(/-/g, ' ') : 'Producer Session'
      };

      const result = await submitBookingForm(bookingData);
      
      if (result.success) {
        setSubmitMessage(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          hours: "4",
          projectType: "single",
          details: ""
        });
        setTimeout(() => {
          navigate('/');
        }, 2000);
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
        <h1 className="text-4xl font-bold text-white mb-12 text-center tracking-wider">BOOKING</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-wider">
              {service
                ? `Get a Quote: ${service.replace(/-/g, ' ')}`
                : `Book Session with ${producer.name}`}
            </h2>
            <p className="text-gray-300 text-xl">Complete the form below to request a booking</p>
          </div>

          <div className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Full Name *
                    </div>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email *
                    </div>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </div>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              {!service && (
                <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Date
                    </div>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Time
                    </div>
                  </label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Session Length (hours)
                  </div>
                </label>
                <select
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option value="2">2 Hours ($400)</option>
                  <option value="4">4 Hours ($700)</option>
                  <option value="8">8 Hours ($1200)</option>
                  <option value="12">12 Hours ($1600)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    Project Type
                  </div>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-neutral-700/50 border border-neutral-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                >
                  <option value="single">Single</option>
                  <option value="ep">EP (3-5 songs)</option>
                  <option value="album">Album (8+ songs)</option>
                  <option value="beat">Beat Purchase</option>
                </select>
              </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details
                </label>
                <textarea
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  rows={4}
                  placeholder="Tell us about your project, reference tracks, or any specific requirements..."
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

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <DollarSign className="w-5 h-5" />
                      Request Booking
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default Booking;