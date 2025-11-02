import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/artworld.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PricingSection />
          <GallerySection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </BrowserRouter>
  );
}

export default App;
