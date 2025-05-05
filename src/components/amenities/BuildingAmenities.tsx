
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
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious
} from "@/components/ui/carousel";

const buildingAmenities = [
  {
    icon: <Cctv className="w-8 h-8" />,
    title: "Security and CCTV surveillance",
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Ground Water",
  },
  {
    icon: <Accessibility className="w-8 h-8" />,
    title: "Accessible building entrance",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Garage Parking",
  },
  {
    icon: <BatteryCharging className="w-8 h-8" />,
    title: "EV Charging",
  },
  {
    icon: <Power className="w-8 h-8" />,
    title: "Standby Generator",
  },
  {
    icon: <Users2 className="w-8 h-8" />,
    title: "Community lounge",
  },
  {
    icon: <ArrowUpDown className="w-8 h-8" />,
    title: "Elevator access",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "On-site management",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 maintenance support",
  },
  {
    icon: <Trash2 className="w-8 h-8" />,
    title: "Garbage shooter",
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
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
      <div className="relative px-4 sm:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {buildingAmenities.map((amenity, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <AmenityCard 
                  icon={amenity.icon} 
                  title={amenity.title}
                  index={index}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );
};

export default BuildingAmenities;
