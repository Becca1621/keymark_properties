
import React from 'react';
import { 
  WashingMachine, 
  Building, 
  Users, 
  Cctv, 
  Car, 
  BatteryCharging, 
  Power, 
  Users2, 
  ArrowUpDown, 
  Clock, 
  ConciergeBell, 
  Accessibility, 
  Dumbbell, 
  Droplet,
  // Adding new icons for interior amenities
  UtensilsCrossed,
  Bath,
  LayoutDashboard,
  Columns,
  Sofa,
  LampFloor,
  ShoppingBag
} from "lucide-react";

const interiorAmenities = [
  {
    icon: <WashingMachine className="w-6 h-6" />,
    title: "In-unit washer & dryer",
    description: "Convenient in-unit laundry facilities for your comfort."
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Stainless steel appliances",
    description: "Modern kitchens with premium stainless steel appliance packages."
  },
  {
    icon: <Bath className="w-6 h-6" />,
    title: "In-unit Hot tub/ Sauna",
    description: "Luxury spa experience in the comfort of your own home."
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Granite countertops",
    description: "Elegant, durable stone countertops in kitchens and bathrooms."
  },
  {
    icon: <Columns className="w-6 h-6" />,
    title: "Open and Traditional Kitchen layouts",
    description: "Choose from modern open concept or classic traditional floor plans."
  },
  {
    icon: <LampFloor className="w-6 h-6" />,
    title: "Luxury Hardwood and Ceramic floors",
    description: "Hardwood and premium ceramic flooring throughout."
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Walk-in closets",
    description: "Spacious walk-in closets with custom organization options."
  },
  {
    icon: <Sofa className="w-6 h-6" />,
    title: "Private balconies",
    description: "Enjoy outdoor living with private balconies and stunning views."
  },
  {
    icon: <Power className="w-6 h-6" />,
    title: "Modern lighting",
    description: "Designer lighting packages throughout each residence."
  }
];

const buildingAmenities = [
  {
    icon: <Cctv className="w-6 h-6" />,
    title: "Security and CCTV surveillance",
    description: "State-of-the-art security monitoring for your peace of mind."
  },
  {
    icon: <Droplet className="w-6 h-6" />, // Updated to Droplet icon
    title: "Ground Water",
    description: "Sustainable ground water system providing clean, filtered water throughout the property."
  },
  {
    icon: <Accessibility className="w-6 h-6" />,
    title: "Accessible building entrance",
    description: "Designed for accessibility and convenience for all residents."
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Secure garage parking",
    description: "Secure, covered parking for residents and guests."
  },
  {
    icon: <BatteryCharging className="w-6 h-6" />, // Changed from EvCharging
    title: "EV charging station",
    description: "Convenient charging stations for electric vehicles."
  },
  {
    icon: <Power className="w-6 h-6" />,
    title: "Emergency backup power system",
    description: "Reliable backup power system for peace of mind."
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Community lounge",
    description: "Elegant social spaces for relaxation and entertaining."
  },
  {
    icon: <ArrowUpDown className="w-6 h-6" />, // Changed from Elevator
    title: "Elevator access",
    description: "Modern elevators for convenient building navigation."
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "On-site management",
    description: "Professional management team located on premises."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 maintenance support",
    description: "Round-the-clock maintenance services available."
  },
  {
    icon: <ConciergeBell className="w-6 h-6" />, // Fixed casing
    title: "Concierge service",
    description: "Personalized concierge services to enhance your lifestyle."
  },
  {
    icon: <Dumbbell className="w-6 h-6" />, // Changed from Fitness
    title: "Resident fitness center (coming soon)",
    description: "State-of-the-art fitness equipment and facilities."
  },
];

const AmenitiesSection: React.FC = () => {
  return (
    <div id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-luxury-dark">
            Unparalleled Amenities
          </h2>
          <p className="text-luxury-gray max-w-2xl mx-auto">
            Our residences are complemented by a suite of premium amenities designed to elevate your lifestyle and provide the ultimate in comfort and convenience.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-center font-serif text-2xl font-bold mb-8 text-luxury-green">Interior Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorAmenities.map((amenity, index) => (
              <div 
                key={index} 
                className="bg-luxury-light p-6 rounded-lg transition-all duration-300 hover:shadow-elegant border-l-4 border-luxury-green" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-luxury-green mb-4">{typeof amenity.icon === 'string' ? (
                  <div className="text-4xl">{amenity.icon}</div>
                ) : (
                  amenity.icon
                )}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-luxury-dark">
                  {amenity.title}
                </h3>
                <p className="text-luxury-gray">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-center font-serif text-2xl font-bold mb-8 text-luxury-green">Building & Community Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buildingAmenities.map((amenity, index) => (
              <div 
                key={index} 
                className="bg-luxury-light p-6 rounded-lg transition-all duration-300 hover:shadow-elegant border-l-4 border-luxury-green" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-luxury-green mb-4">{typeof amenity.icon === 'string' ? (
                  <div className="text-4xl">{amenity.icon}</div>
                ) : (
                  amenity.icon
                )}</div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-luxury-dark">
                  {amenity.title}
                </h3>
                <p className="text-luxury-gray">{amenity.description}</p>
              </div>
            ))}
          </div>
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
