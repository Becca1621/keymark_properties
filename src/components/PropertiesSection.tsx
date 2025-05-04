
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ArrowLeft, ArrowRight, Bed, Phone, Store } from "lucide-react";

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
  propertyType: 'rent' | 'sale'; // Add this property
}

const properties: Property[] = [
  {
    id: 1,
    name: "Deluxe Three Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    size: "400 sq m",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony with city views.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'rent'
  },
  {
    id: 2,
    name: "Premium Four Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 4.5,
    size: "400 sq m",
    description: "Luxury unit with four bedrooms, gourmet kitchen with stainless steel appliances, and private balconies.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'rent'
  },
  {
    id: 3,
    name: "Penthouse Four Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 5,
    size: "800 sq m",
    description: "Expansive four bedroom apartment with premium finishes, chef's kitchen, separate dining area, and panoramic city views.",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
    ],
    features: ["In-unit laundry", "In-unit Spa", "Walk-in closets", "Private balconies"],
    propertyType: 'rent'
  },
  {
    id: 4,
    name: "Retail Space",
    price: "",
    salePrice: "",
    type: "retail",
    bedrooms: 1,
    bathrooms: 1,
    size: "Various sq m",
    description: "Premium retail spaces in a high-traffic location, featuring modern designs with flexible layouts and excellent visibility.",
    images: [
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    ],
    features: ["Elevator Access", "Parking", "Office", "Shops", "24/7 Building Security"],
    propertyType: 'rent'
  },
  {
    id: 5,
    name: "Deluxe Three Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 3,
    bathrooms: 3.5,
    size: "400 sq m",
    description: "Spacious three bedroom apartment with modern finishes, open concept living area and a private balcony with city views.",
    images: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'sale'
  },
  {
    id: 6,
    name: "Premium Four Bedroom",
    price: "",
    salePrice: "",
    type: "apartment",
    bedrooms: 4,
    bathrooms: 4.5,
    size: "400 sq m",
    description: "Luxury unit with four bedrooms, gourmet kitchen with stainless steel appliances, and private balconies.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
    ],
    features: ["In-unit laundry", "Stainless steel appliances", "Walk-in closets", "Private balconies"],
    propertyType: 'sale'
  }
];

const PropertyCard = ({ property }: { property: Property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.images.length) % property.images.length);
  };

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

        {property.type === "retail" ? (
          <div className="flex mb-4 text-sm text-luxury-charcoal gap-4">
            <div className="flex items-center">
              <Store size={16} className="mr-1" />
              <span>Commercial</span>
            </div>
            <div>
              <span>{property.size}</span>
            </div>
          </div>
        ) : (
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
        )}

        <p className="text-luxury-charcoal mb-4">{property.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 text-luxury-charcoal">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {property.features.map((feature, index) => (
              <span key={index} className="text-xs bg-luxury-cream text-luxury-charcoal px-2 py-1 rounded">{feature}</span>
            ))}
          </div>
        </div>

        <div className="w-full text-center py-2 border border-black text-black rounded flex items-center justify-center gap-2">
          <Phone size={16} /> 
          <span>Call for details</span>
        </div>
      </CardContent>
    </Card>
  );
};

const PropertiesSection = () => {
  const [filter, setFilter] = useState('all');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<'all' | 'rent' | 'sale'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProperties = properties.filter(p => {
    // Filter by apartment type (3-bedroom, 4-bedroom, retail)
    const typeMatch = filter === 'all' 
      ? true
      : filter === 'retail'
        ? p.type === 'retail'
        : p.bedrooms === parseInt(filter) && p.type === 'apartment';
    
    // Filter by property type (rent/sale)
    const propertyTypeMatch = propertyTypeFilter === 'all' 
      ? true
      : p.propertyType === propertyTypeFilter;
    
    return typeMatch && propertyTypeMatch;
  });

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
    <section id="properties" ref={sectionRef} className="py-20 gradient-flow-start animate-on-scroll">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white text-shadow">Live. Work. Thrive.</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Discover our premium selection of 3 & 4 bedroom apartments and retail spaces, designed with elegant finishes and modern amenities.</p>
        </div>

        <div className="mb-8 space-y-4">
          {/* Property Type Toggle (Rent/Sale) */}
          <div className="flex justify-center mb-4">
            <ToggleGroup 
              type="single" 
              value={propertyTypeFilter}
              onValueChange={(value) => {
                if (value) setPropertyTypeFilter(value as 'all' | 'rent' | 'sale');
              }}
              className="property-toggle-group"
            >
              <ToggleGroupItem value="all" className="property-toggle px-6">
                All
              </ToggleGroupItem>
              <ToggleGroupItem value="rent" className="property-toggle px-6">
                Rent
              </ToggleGroupItem>
              <ToggleGroupItem value="sale" className="property-toggle px-6">
                Sale
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          {/* Apartment Filter (All/3-Bedroom/4-Bedroom/Retail) */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-[500px] max-w-full grid-cols-4 mx-auto bg-luxury-dark/50 backdrop-blur-sm">
              <TabsTrigger value="all" onClick={() => setFilter('all')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">All</TabsTrigger>
              <TabsTrigger value="3" onClick={() => setFilter('3')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">3 Bedroom</TabsTrigger>
              <TabsTrigger value="4" onClick={() => setFilter('4')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">4 Bedroom</TabsTrigger>
              <TabsTrigger value="retail" onClick={() => setFilter('retail')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white">Retail</TabsTrigger>
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
