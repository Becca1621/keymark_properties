
import React from 'react';
import InteriorAmenities from './amenities/InteriorAmenities';
import BuildingAmenities from './amenities/BuildingAmenities';

const AmenitiesSection: React.FC = () => {
  return (
    <div id="amenities" className="pt-12 pb-20 gradient-flow-middle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white text-shadow">
            Discover Elevated Living
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Our thoughtfully curated collection of high-end amenities has been crafted to elevate your everyday experience. From luxury interior finishes to convenient community features, every detail has been designed to offer comfort, convenience, and a lifestyle of effortless sophistication.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <a
            href="/amenities"
            className="inline-block px-6 py-2 text-sm font-medium text-luxury-dark bg-luxury-green rounded-full shadow hover:bg-luxury-green/90 transition"
          >
            View All Amenities
          </a>
        </div>
        <InteriorAmenities className="mb-20" />
        
        <BuildingAmenities className="mb-20" />
        
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <img 
            src="/Bldginterior2.jpg" 
            alt="Building Exterior" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Experience the Height of Luxury
              </h3>
              <p className="max-w-2xl mx-auto text-lg text-white/90">
                Schedule a private tour today and discover why our residences are the pinnacle of sophisticated urban living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;
