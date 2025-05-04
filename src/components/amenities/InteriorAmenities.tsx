
import React from 'react';
import { 
  WashingMachine, 
  UtensilsCrossed, 
  Bath, 
  LayoutDashboard, 
  Columns, 
  LampFloor, 
  ShoppingBag, 
  Sofa,
  Window
} from "lucide-react";
import AmenityCard from './AmenityCard';

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
    icon: <Window className="w-6 h-6" />,
    title: "Bright, airy interiors",
    description: "Bright, open interiors enhanced by large windows throughout."
  },
];

interface InteriorAmenitiesProps {
  className?: string;
}

const InteriorAmenities: React.FC<InteriorAmenitiesProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h3 className="text-center font-serif text-2xl font-bold mb-8 text-luxury-green">Interior Features</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interiorAmenities.map((amenity, index) => (
          <AmenityCard 
            key={index} 
            icon={amenity.icon} 
            title={amenity.title} 
            description={amenity.description} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default InteriorAmenities;
