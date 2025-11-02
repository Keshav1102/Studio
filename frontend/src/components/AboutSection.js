import React from 'react';
import { aboutData } from '../mockData';
import { Award, Users, Star, Calendar } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Calendar, label: 'Experience', value: aboutData.experience },
    { icon: Users, label: 'Happy Clients', value: aboutData.clients },
    { icon: Award, label: 'Awards Won', value: aboutData.awards },
    { icon: Star, label: 'Satisfaction', value: aboutData.satisfaction }
  ];

  return (
    <section id="about" className="section-spacing bg-[--color-gray-900]">
      <div className="container-artworld">
        <div className="max-w-4xl mx-auto text-center">
          <p className="caption-text text-[--color-gold] mb-4 animate-fade-in">
            {aboutData.tagline}
          </p>
          <h2 className="section-title text-white animate-fade-in-up">
            {aboutData.title}
          </h2>
          <p className="body-text mt-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {aboutData.description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center animate-scale-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[--color-gold]/10 mb-4">
                  <Icon className="w-8 h-8 text-[--color-gold]" />
                </div>
                <h3 className="subsection-title text-white mb-2">{stat.value}</h3>
                <p className="caption-text">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
