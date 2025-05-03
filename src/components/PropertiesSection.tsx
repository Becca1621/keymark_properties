
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Bed, Wifi } from "lucide-react";

interface Property {
  id: number;
  name: string;
  price: string;
  salePrice?: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  size: string;
  description: string;
  images: string[];
  features: string[];
}

const properties: Property[] = [
  {
    id: 1,
    name: "Deluxe Three Bedroom",
    price: "$3,200/month",
    salePrice: "$680,000",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2,
    size: "1,450 sq ft",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony with city views.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80"
    ],
    features: ["Central Air Conditioning", "In-unit Washer/Dryer", "Walk-in Closets", "Smart Home Features", "Hardwood Floors"]
  },
  {
    id: 2,
    name: "Premium Three Bedroom",
    price: "$3,450/month",
    salePrice: "$720,000",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 2.5,
    size: "1,550 sq ft",
    description: "Luxury corner unit with three bedrooms, gourmet kitchen with stainless steel appliances, and floor-to-ceiling windows.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
    ],
    features: ["Central Air Conditioning", "In-unit Washer/Dryer", "Walk-in Closets", "Granite Countertops", "Private Terrace"]
  },
  {
    id: 3,
    name: "Executive Four Bedroom",
    price: "$4,200/month",
    salePrice: "$890,000",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 3,
    size: "1,950 sq ft",
    description: "Expansive four bedroom apartment with premium finishes, chef's kitchen, separate dining area, and panoramic city views.",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
    ],
    features: ["Central Air Conditioning", "In-unit Washer/Dryer", "Walk-in Closets", "Smart Home Features", "Custom Cabinetry"]
  },
  {
    id: 4,
    name: "Penthouse Four Bedroom",
    price: "$5,800/month",
    salePrice: "$1,250,000",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 3.5,
    size: "2,350 sq ft",
    description: "Luxury penthouse featuring four spacious bedrooms, designer finishes, wraparound terrace, and breathtaking views.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    ],
    features: ["Central Air Conditioning", "In-unit Washer/Dryer", "Walk-in Closets", "Marble Bathrooms", "Home Office Space"]
  }
];

const PropertyCard = ({ property }: { property: Property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewType, setViewType] = useState<'rent' | 'sale'>('rent');

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

  return (
    <Card className="overflow-hidden h-full animate-slide-in">
      <div className="relative h-64">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.name} 
          className="w-full h-full object-cover" 
        />
        {property.images.length > 1 && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
              onClick={prevImage}
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
              onClick={nextImage}
            >
              <ArrowRight size={18} />
            </Button>
          </>
        )}
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{property.name}</h3>
          <div>
            <Tabs value={viewType} onValueChange={(v) => setViewType(v as 'rent' | 'sale')} className="w-[140px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="rent">Rent</TabsTrigger>
                <TabsTrigger value="sale">Sale</TabsTrigger>
              </TabsList>
              <TabsContent value="rent" className="mt-2">
                <p className="text-lg font-bold text-primary">{property.price}</p>
              </TabsContent>
              <TabsContent value="sale" className="mt-2">
                <p className="text-lg font-bold text-primary">{property.salePrice}</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="flex mb-4 text-sm text-gray-600 gap-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div>
            <span>{property.bathrooms} Baths</span>
          </div>
          <div>
            <span>{property.size}</span>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{property.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {property.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">{feature}</span>
            ))}
            {property.features.length > 3 && (
              <span className="text-xs bg-gray-100 px-2 py-1 rounded">+{property.features.length - 3} more</span>
            )}
          </div>
        </div>

        <Button className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
};

const PropertiesSection = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.bedrooms === parseInt(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="properties" ref={sectionRef} className="py-20 bg-gray-50 animate-on-scroll">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Available Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our premium selection of 3 & 4 bedroom apartments, each designed with elegant finishes and modern amenities.</p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-[400px] max-w-full grid-cols-3 mx-auto">
              <TabsTrigger value="all" onClick={() => setFilter('all')}>All</TabsTrigger>
              <TabsTrigger value="3" onClick={() => setFilter('3')}>3 Bedroom</TabsTrigger>
              <TabsTrigger value="4" onClick={() => setFilter('4')}>4 Bedroom</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
