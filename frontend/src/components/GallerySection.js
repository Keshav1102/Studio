import React, { useState } from 'react';
import { galleryImages } from '../mockData';

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Work' },
    { id: 'maternity', label: 'Maternity' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'product', label: 'Product' }
  ];

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <section id="gallery" className="section-spacing bg-black">
        <div className="container-artworld">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="caption-text text-[--color-gold] mb-4 animate-fade-in">
              Our Portfolio
            </p>
            <h2 className="section-title text-white animate-fade-in-up">
              Gallery
            </h2>
            <p className="body-text mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore our diverse portfolio showcasing our expertise across different photography genres
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`nav-link px-6 py-3 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[--color-gold] text-black'
                    : 'bg-[--color-gray-800] text-white hover:bg-[--color-gray-700]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <p className="subsection-title text-white mb-2">{image.title}</p>
                    <p className="caption-text text-[--color-gold] uppercase">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-[--color-gold] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl max-h-[90vh]">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="text-center mt-4">
              <h3 className="subsection-title text-white">{selectedImage.title}</h3>
              <p className="caption-text text-[--color-gold] uppercase mt-2">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
