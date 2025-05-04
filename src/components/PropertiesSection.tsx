import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ArrowLeft, ArrowRight, Bed, Phone } from "lucide-react";

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

  // Define standard features to display
  const standardFeatures = [
    "In-unit Washer/Dryer",
    "Walk-in Closets",
    "Private Balcony"
  ];

  // Check which standard features are included in the property features
  const availableStandardFeatures = standardFeatures.filter(
    feature => property.features.some(
      propFeature => propFeature.toLowerCase().includes(feature.toLowerCase())
    )
  );

  // Add "and more" if there are more features than our standard ones
  const hasMoreFeatures = property.features.length > availableStandardFeatures.length;

  return (
    <Card className="overflow-hidden h-full animate-slide-in shadow-lg">
      <div className="relative h-64">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.name} 
          className="w-full h-full object-cover" 
        />
        {/* Add dark gradient overlay for better text contrast */}
        <div className="property-overlay"></div>
        {property.images.length > 1 && (
          <>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 z-10"
              onClick={prevImage}
            >
              <ArrowLeft size={18} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 z-10"
              onClick={nextImage}
            >
              <ArrowRight size={18} />
            </Button>
          </>
        )}
      </div>
      <CardContent className="p-6 card-content card-gradient">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-luxury-dark">{property.name}</h3>
        </div>

        <div className="flex mb-4 text-sm text-luxury-charcoal gap-4">
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

        <p className="text-luxury-charcoal mb-4">{property.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-luxury-charcoal">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {availableStandardFeatures.map((feature, index) => (
              <span key={index} className="text-xs bg-luxury-cream text-luxury-charcoal px-2 py-1 rounded">{feature}</span>
            ))}
            {hasMoreFeatures && (
              <span className="text-xs bg-luxury-cream text-luxury-charcoal px-2 py-1 rounded">and more</span>
            )}
          </div>
        </div>

        <div className="w-full text-center py-2 border border-luxury-green text-luxury-green rounded flex items-center justify-center gap-2">
          <Phone size={16} /> 
          <span>Call for details</span>
        </div>
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
    <section id="properties" ref={sectionRef} className="py-20 bg-ombre-dark-green animate-on-scroll">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white text-shadow">Available Properties</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Discover our premium selection of 3 & 4 bedroom apartments, each designed with elegant finishes and modern amenities.</p>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-[400px] max-w-full grid-cols-3 mx-auto bg-luxury-dark/50 backdrop-blur-sm">
              <TabsTrigger value="all" onClick={() => setFilter('all')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="3" onClick={() => setFilter('3')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">3 Bedroom</TabsTrigger>
              <TabsTrigger value="4" onClick={() => setFilter('4')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">4 Bedroom</TabsTrigger>
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
