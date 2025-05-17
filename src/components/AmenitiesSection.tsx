
import React from 'react';
import InteriorAmenities from './amenities/InteriorAmenities';
import BuildingAmenities from './amenities/BuildingAmenities';
import { Button } from './ui/button';

const AmenitiesSection: React.FC = () => {
  return (
    <div id="amenities" className="pt-8 sm:pt-12 pb-12 sm:pb-20 gradient-flow-middle">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white text-shadow">
            Discover Elevated Living
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
            Our thoughtfully curated collection of high-end amenities has been crafted to elevate your everyday experience. From luxury interior finishes to convenient community features, every detail has been designed to offer comfort, convenience, and a lifestyle of effortless sophistication.
          </p>
        </div>
        <div className="flex justify-center mb-8 sm:mb-12">
          <Button
            asChild
            className="px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-luxury-navy text-white hover:bg-luxury-dark transition-colors"
          >
            <a href="/amenities">View All Amenities</a>
          </Button>
        </div>
        <InteriorAmenities className="mb-12 sm:mb-20" />
        
        <BuildingAmenities className="mb-12 sm:mb-20" />
        
        <div className="mt-10 sm:mt-16 relative overflow-hidden rounded-lg sm:rounded-xl">
          <img 
            src="/Bldginterior2.jpg" 
            alt="Building Exterior" 
            className="w-full h-64 sm:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-4 sm:p-8">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Experience the Height of Luxury
              </h3>
              <p className="text-sm sm:text-lg max-w-2xl mx-auto text-white/90">
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
