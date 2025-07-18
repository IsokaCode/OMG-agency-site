import emailjs from '@emailjs/browser';

// EmailJS Configuration
export const EMAILJS_CONFIG = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_9wnh31q', // Your Gmail service ID
  BOOKING_TEMPLATE_ID: 'template_y4vgfzw', // Replace with your booking template ID
  CONTACT_TEMPLATE_ID: 'template_uv08trj', // Replace with your contact template ID
  PUBLIC_KEY: 'WxQNKfDm2VRWn90ho', // Replace with your public key from Account tab
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Booking form submission (for producers and services)
export const submitBookingForm = async (formData: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.BOOKING_TEMPLATE_ID,
      {
        to_email: 'andre@onmygrind.agency', 
        from_name: formData.name,
        from_email: formData.email,
        producer_name: formData.producerName || 'N/A',
        service_type: formData.serviceType || 'N/A',
        date: formData.date,
        time: formData.time,
        hours: formData.hours,
        project_type: formData.projectType,
        details: formData.details,
        phone: formData.phone || 'N/A',
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true, message: 'Booking request sent successfully!' };
  } catch (error) {
    console.error('Booking form error:', error);
    return { success: false, message: 'Failed to send booking request. Please try again.' };
  }
};

// Contact form submission
export const submitContactForm = async (formData: any) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
      {
        to_email: 'andre@onmygrind.agency', 
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        phone: formData.phone || 'N/A',
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
}; 