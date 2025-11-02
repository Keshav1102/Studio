import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-artworld">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Camera className="w-8 h-8 text-[--color-gold]" />
            <div>
              <h1 className="text-xl font-bold font-serif text-white">Krishna Studio</h1>
              <p className="text-xs text-[--color-gray-400] tracking-wider">Est. 1996</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link text-white hover:text-[--color-gold]">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-white hover:text-[--color-gold]">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link text-white hover:text-[--color-gold]">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link text-white hover:text-[--color-gold]">
              Gallery
            </button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link text-white hover:text-[--color-gold]">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link text-white hover:text-[--color-gold]">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-gold text-sm py-2 px-6">
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection('hero')} className="nav-link text-white hover:text-[--color-gold] text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-white hover:text-[--color-gold] text-left">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="nav-link text-white hover:text-[--color-gold] text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('gallery')} className="nav-link text-white hover:text-[--color-gold] text-left">
              Gallery
            </button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link text-white hover:text-[--color-gold] text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link text-white hover:text-[--color-gold] text-left">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-gold text-sm py-2 px-6 w-full">
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
