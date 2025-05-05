
import React from 'react';
import { 
  Cctv, 
  Droplet,
  Accessibility, 
  Car, 
  BatteryCharging, 
  Power, 
  Users2, 
  ArrowUpDown, 
  Building, 
  Clock, 
  Trash2, 
  Dumbbell
} from "lucide-react";
import AmenityCard from './AmenityCard';

const buildingAmenities = [
  {
    icon: <Cctv className="w-6 h-6" />,
    title: "Security and CCTV surveillance",
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Ground Water",
  },
  {
    icon: <Accessibility className="w-6 h-6" />,
    title: "Accessible building entrance",
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Garage Parking",
  },
  {
    icon: <BatteryCharging className="w-6 h-6" />,
    title: "EV Charging",
  },
  {
    icon: <Power className="w-6 h-6" />,
    title: "Standby Generator",
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Community lounge",
  },
  {
    icon: <ArrowUpDown className="w-6 h-6" />,
    title: "Elevator access",
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "On-site management",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "24/7 maintenance support",
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    title: "Garbage shooter",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Resident fitness center (coming soon)",
  },
];

interface BuildingAmenitiesProps {
  className?: string;
}

const BuildingAmenities: React.FC<BuildingAmenitiesProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h3 className="text-center font-serif text-3xl font-bold mb-10 text-white">Building & Community Highlights</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {buildingAmenities.map((amenity, index) => (
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

export default BuildingAmenities;
