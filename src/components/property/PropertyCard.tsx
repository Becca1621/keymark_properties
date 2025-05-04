
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Bed, Phone, Store } from "lucide-react";
import { Property } from '@/components/property/PropertyTypes';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
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
          onError={(e) => {
            console.error(`Failed to load image: ${property.images[currentImageIndex]}`);
            e.currentTarget.src = '/placeholder.svg'; // Fallback to placeholder image
          }}
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

export default PropertyCard;
