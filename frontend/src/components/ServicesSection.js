import React from 'react';
import { services } from '../mockData';
import { Camera, User, Heart, Sparkles, Package } from 'lucide-react';

const iconMap = {
  Camera,
  User,
  Heart,
  Sparkles,
  Package
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-spacing bg-black">
      <div className="container-artworld">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="caption-text text-[--color-gold] mb-4 animate-fade-in">
            What We Offer
          </p>
          <h2 className="section-title text-white animate-fade-in-up">
            Our Photography Services
          </h2>
          <p className="body-text mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            From weddings to product shoots, we offer comprehensive photography services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-[--color-gray-900] p-8 hover:bg-[--color-gray-800] transition-all duration-300 animate-fade-in-up border border-transparent hover:border-[--color-gold]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[--color-gold]/10 group-hover:bg-[--color-gold]/20 transition-colors duration-300 mb-6">
                  <Icon className="w-7 h-7 text-[--color-gold]" />
                </div>
                <h3 className="subsection-title text-white mb-4">{service.title}</h3>
                <p className="body-text mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="caption-text flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[--color-gold]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
