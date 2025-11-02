import React from 'react';
import { Camera, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { contactData } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-[--color-gray-800]">
      <div className="container-artworld">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Camera className="w-8 h-8 text-[--color-gold]" />
              <div>
                <h3 className="text-xl font-bold font-serif text-white">Krishna Studio</h3>
                <p className="text-xs text-[--color-gray-400] tracking-wider">Est. 1996</p>
              </div>
            </div>
            <p className="body-text text-sm mb-6">
              Capturing life's precious moments with artistry and excellence for over 30 years.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[--color-gray-800] flex items-center justify-center hover:bg-[--color-gold] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[--color-gray-800] flex items-center justify-center hover:bg-[--color-gold] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[--color-gray-800] flex items-center justify-center hover:bg-[--color-gold] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="caption-text text-white font-bold mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="body-text text-sm hover:text-[--color-gold] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="body-text text-sm hover:text-[--color-gold] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="body-text text-sm hover:text-[--color-gold] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="body-text text-sm hover:text-[--color-gold] transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="body-text text-sm hover:text-[--color-gold] transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="body-text text-sm hover:text-[--color-gold] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="caption-text text-white font-bold mb-6 uppercase">Our Services</h4>
            <ul className="space-y-3">
              <li className="body-text text-sm">Wedding Photography</li>
              <li className="body-text text-sm">Portrait Photography</li>
              <li className="body-text text-sm">Maternity Shoot</li>
              <li className="body-text text-sm">Portfolio Shoot</li>
              <li className="body-text text-sm">Product Photography</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="caption-text text-white font-bold mb-6 uppercase">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[--color-gold] flex-shrink-0 mt-0.5" />
                <span className="body-text text-sm">{contactData.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[--color-gold] flex-shrink-0 mt-0.5" />
                <a href={`tel:${contactData.phone}`} className="body-text text-sm hover:text-[--color-gold] transition-colors">
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[--color-gold] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${contactData.email}`} className="body-text text-sm hover:text-[--color-gold] transition-colors">
                  {contactData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[--color-gray-800] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="caption-text text-center md:text-left">
              © {currentYear} Krishna Studio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="caption-text hover:text-[--color-gold] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="caption-text hover:text-[--color-gold] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
