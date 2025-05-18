import React, { useState } from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactFormData } from '../../types';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Section
      id="contact"
      title="Contact Me"
      subtitle="Have a question or want to work together? Get in touch!"
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Get In Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Fill out the form and I'll get back to you as soon as possible.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Email</h4>
                <p className="text-gray-600 dark:text-gray-300">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Phone</h4>
                <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 p-2 bg-blue-100 dark:bg-blue-900 rounded-full">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Location</h4>
                <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your Email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                placeholder="Your Message"
              />
            </div>
            
            <div>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
              
              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md animate-fadeIn">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md animate-fadeIn">
                  {error}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;