
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
  ConciergeBell, 
  Dumbbell
} from "lucide-react";
import AmenityCard from './AmenityCard';

const buildingAmenities = [
  {
    icon: <Cctv className="w-6 h-6" />,
    title: "Security and CCTV surveillance",
    description: "State-of-the-art security monitoring for your peace of mind."
  },
  {
    icon: <Droplet className="w-6 h-6" />,
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
    icon: <BatteryCharging className="w-6 h-6" />,
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
    icon: <ArrowUpDown className="w-6 h-6" />,
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
    icon: <ConciergeBell className="w-6 h-6" />,
    title: "Concierge service",
    description: "Personalized concierge services to enhance your lifestyle."
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Resident fitness center (coming soon)",
    description: "State-of-the-art fitness equipment and facilities."
  },
];

interface BuildingAmenitiesProps {
  className?: string;
}

const BuildingAmenities: React.FC<BuildingAmenitiesProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h3 className="text-center font-serif text-2xl font-bold mb-8 text-luxury-green">Building & Community Highlights</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buildingAmenities.map((amenity, index) => (
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

export default BuildingAmenities;
