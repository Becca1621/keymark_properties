
import React, { useEffect, useRef } from 'react';
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
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";

const interiorAmenities = [
  {
    icon: <WashingMachine className="w-8 h-8" />,
    title: "In-unit washer & dryer",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: "Stainless steel appliances",
  },
  {
    icon: <Bath className="w-8 h-8" />,
    title: "In-unit Hot tub/Steam Bath",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Granite countertops",
  },
  {
    icon: <Columns className="w-8 h-8" />,
    title: "Open & Traditional Kitchen layouts",
  },
  {
    icon: <LampFloor className="w-8 h-8" />,
    title: "Luxury Hardwood & Ceramic floors",
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Walk-in closets",
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: "Private balconies",
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Large windows for natural light",
  },
];

interface InteriorAmenitiesProps {
  className?: string;
}

const InteriorAmenities: React.FC<InteriorAmenitiesProps> = ({ className = '' }) => {
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
      <h3 className="text-center font-serif text-3xl font-bold mb-10 text-white">Interior Features</h3>
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
            {interiorAmenities.map((amenity, index) => (
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

export default InteriorAmenities;
