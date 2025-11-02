import React from 'react';
import { testimonials } from '../mockData';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-spacing bg-[--color-gray-900]">
      <div className="container-artworld">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="caption-text text-[--color-gold] mb-4 animate-fade-in">
            Client Testimonials
          </p>
          <h2 className="section-title text-white animate-fade-in-up">
            What Our Clients Say
          </h2>
          <p className="body-text mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-black p-8 border border-[--color-gray-700] hover:border-[--color-gold] transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-10 h-10 text-[--color-gold] mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[--color-gold] text-[--color-gold]" />
                ))}
              </div>

              <p className="body-text text-sm mb-6 leading-relaxed">{testimonial.text}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-[--color-gray-700]">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="caption-text">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
