import React, { useState } from 'react';
import { contactData } from '../mockData';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend integration
    console.log('Form submitted:', formData);
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to book a photography session.');
    window.open(`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="section-spacing bg-black">
      <div className="container-artworld">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="caption-text text-[--color-gold] mb-4 animate-fade-in">
            Get In Touch
          </p>
          <h2 className="section-title text-white animate-fade-in-up">
            Contact Us
          </h2>
          <p className="body-text mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to capture your special moments? Reach out to us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block caption-text text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[--color-gray-900] border border-[--color-gray-700] text-white px-4 py-3 focus:outline-none focus:border-[--color-gold] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block caption-text text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[--color-gray-900] border border-[--color-gray-700] text-white px-4 py-3 focus:outline-none focus:border-[--color-gold] transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block caption-text text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-[--color-gray-900] border border-[--color-gray-700] text-white px-4 py-3 focus:outline-none focus:border-[--color-gold] transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="service" className="block caption-text text-white mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-[--color-gray-900] border border-[--color-gray-700] text-white px-4 py-3 focus:outline-none focus:border-[--color-gold] transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography</option>
                  <option value="portrait">Portrait Photography</option>
                  <option value="maternity">Maternity Shoot</option>
                  <option value="portfolio">Portfolio Shoot</option>
                  <option value="product">Product Photography</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block caption-text text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-[--color-gray-900] border border-[--color-gray-700] text-white px-4 py-3 focus:outline-none focus:border-[--color-gold] transition-colors resize-none"
                  placeholder="Tell us about your requirements"
                />
              </div>

              <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn-outline-gold w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="animate-slide-in-right">
            <div className="bg-[--color-gray-900] p-8 mb-8">
              <h3 className="subsection-title text-white mb-6">Visit Our Studio</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[--color-gold] flex-shrink-0 mt-1" />
                  <div>
                    <p className="caption-text text-white font-semibold mb-1">Address</p>
                    <p className="body-text text-sm">{contactData.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[--color-gold] flex-shrink-0 mt-1" />
                  <div>
                    <p className="caption-text text-white font-semibold mb-1">Phone</p>
                    <p className="body-text text-sm">{contactData.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[--color-gold] flex-shrink-0 mt-1" />
                  <div>
                    <p className="caption-text text-white font-semibold mb-1">Email</p>
                    <p className="body-text text-sm">{contactData.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[--color-gold] flex-shrink-0 mt-1" />
                  <div>
                    <p className="caption-text text-white font-semibold mb-1">Business Hours</p>
                    <p className="body-text text-sm">{contactData.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="aspect-video w-full">
              <iframe
                src={contactData.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Krishna Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
