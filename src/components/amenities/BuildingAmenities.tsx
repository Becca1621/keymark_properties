
import React, { useEffect, useRef } from 'react';
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
  type CarouselApi
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
  const [api, setApi] = React.useState<CarouselApi>();
  const intervalRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (!api) return;
    
    // Start auto-scrolling when the component mounts
    intervalRef.current = window.setInterval(() => {
      api.scrollNext();
    }, 3000); // Change slides every 3 seconds
    
    // Clean up the interval when the component unmounts
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [api]);

  return (
    <div className={className}>
      <h3 className="text-center font-serif text-3xl font-bold mb-10 text-white">Building & Community Highlights</h3>
      <div className="relative px-4 sm:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
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
        </Carousel>
      </div>
    </div>
  );
};

export default BuildingAmenities;
