import React from 'react';
import { pricingPackages } from '../mockData';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-spacing bg-[--color-gray-900]">
      <div className="container-artworld">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="caption-text text-[--color-gold] mb-4 animate-fade-in">
            Flexible Options
          </p>
          <h2 className="section-title text-white animate-fade-in-up">
            Pricing Packages
          </h2>
          <p className="body-text mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Choose the perfect package for your photography needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-black p-8 border-2 transition-all duration-300 animate-scale-up ${
                pkg.popular
                  ? 'border-[--color-gold] transform md:scale-105 shadow-xl shadow-[--color-gold]/20'
                  : 'border-[--color-gray-700] hover:border-[--color-gold]'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[--color-gold] px-6 py-1">
                  <span className="caption-text text-black font-bold">Most Popular</span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="subsection-title text-white mb-2">{pkg.name}</h3>
                <p className="caption-text text-[--color-gray-400] mb-4">{pkg.duration}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-[--color-gold] font-serif">{pkg.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[--color-gold] flex-shrink-0 mt-0.5" />
                    <span className="body-text text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={pkg.popular ? 'btn-gold w-full' : 'btn-outline-gold w-full'}
              >
                Choose {pkg.name}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 caption-text">
          All packages include professional editing and online gallery access. Custom packages available upon request.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
