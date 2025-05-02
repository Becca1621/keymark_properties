
import React from 'react';

const amenities = [
  {
    icon: "🏊‍♂️",
    title: "Infinity Pool",
    description: "A stunning rooftop infinity pool with panoramic city views."
  },
  {
    icon: "🏋️",
    title: "Fitness Center",
    description: "State-of-the-art fitness center with personal training services."
  },
  {
    icon: "🍷",
    title: "Wine Cellar",
    description: "Temperature-controlled wine storage for residents."
  },
  {
    icon: "🎭",
    title: "Private Theater",
    description: "Intimate screening room for private film viewings."
  },
  {
    icon: "🛋️",
    title: "Resident Lounge",
    description: "Elegant lounge space for socializing and entertaining."
  },
  {
    icon: "🧖",
    title: "Spa & Sauna",
    description: "Full-service spa with treatment rooms and sauna."
  }
];

const AmenitiesSection: React.FC = () => {
  return (
    <div id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Unparalleled Amenities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our residences are complemented by a suite of premium amenities designed to elevate your lifestyle and provide the ultimate in comfort and convenience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <div 
              key={index} 
              className="amenity-card animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="font-serif text-xl font-semibold mb-3">
                {amenity.title}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2965&auto=format&fit=crop" 
            alt="Building Exterior" 
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="font-serif text-3xl font-bold mb-4">
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
