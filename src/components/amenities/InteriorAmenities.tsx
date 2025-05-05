
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
  Sun 
} from "lucide-react";
import AmenityCard from './AmenityCard';

const interiorAmenities = [
  {
    icon: <WashingMachine className="w-6 h-6" />,
    title: "In-unit washer & dryer",
  },
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Stainless steel appliances",
  },
  {
    icon: <Bath className="w-6 h-6" />,
    title: "In-unit Hot tub/ Sauna",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Granite countertops",
  },
  {
    icon: <Columns className="w-6 h-6" />,
    title: "Open & Traditional Kitchen layouts",
  },
  {
    icon: <LampFloor className="w-6 h-6" />,
    title: "Luxury Hardwood & Ceramic floors",
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: "Walk-in closets",
  },
  {
    icon: <Sofa className="w-6 h-6" />,
    title: "Private balconies",
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Large windows for natural light",
  },
];

interface InteriorAmenitiesProps {
  className?: string;
}

const InteriorAmenities: React.FC<InteriorAmenitiesProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h3 className="text-center font-serif text-3xl font-bold mb-10 text-white">Interior Features</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {interiorAmenities.map((amenity, index) => (
          <AmenityCard 
            key={index} 
            icon={amenity.icon} 
            title={amenity.title}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default InteriorAmenities;
