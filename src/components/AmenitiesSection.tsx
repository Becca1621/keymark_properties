
import React from 'react';
import InteriorAmenities from './amenities/InteriorAmenities';
import BuildingAmenities from './amenities/BuildingAmenities';

const AmenitiesSection: React.FC = () => {
  return (
    <div id="amenities" className="py-20 gradient-flow-middle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
            Premium Amenities
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Our residences are complemented by a suite of premium amenities designed to elevate your lifestyle and provide the ultimate in comfort and convenience.
          </p>
        </div>
        
        <InteriorAmenities className="mb-16" />
        
        <BuildingAmenities className="mb-16" />
        
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
