
import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Property, properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PropertyGrid: React.FC = () => {
  const [activeType, setActiveType] = useState<'all' | 'rent' | 'sale'>('all');
  const [activeBedrooms, setActiveBedrooms] = useState<'all' | 3 | 4>('all');
  
  const filteredProperties = properties.filter(property => {
    const typeMatch = activeType === 'all' || property.type === activeType;
    const bedroomsMatch = activeBedrooms === 'all' || property.bedrooms === activeBedrooms;
    return typeMatch && bedroomsMatch;
  });
  
  return (
    <div id="properties" className="bg-luxury-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Discover Our Luxury Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium 3 & 4 bedroom residences, thoughtfully designed for those who appreciate the finest things in life.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-6">
            <Tabs 
              defaultValue="all" 
              onValueChange={(value) => setActiveType(value as 'all' | 'rent' | 'sale')}
              className="w-full max-w-md mx-auto"
            >
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="rent">For Rent</TabsTrigger>
                <TabsTrigger value="sale">For Sale</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant={activeBedrooms === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveBedrooms('all')}
              className={activeBedrooms === 'all' ? 'bg-luxury-green hover:bg-luxury-dark text-white' : ''}
            >
              All Bedrooms
            </Button>
            <Button 
              variant={activeBedrooms === 3 ? 'default' : 'outline'} 
              onClick={() => setActiveBedrooms(3)}
              className={activeBedrooms === 3 ? 'bg-luxury-green hover:bg-luxury-dark text-white' : ''}
            >
              3 Bedrooms
            </Button>
            <Button 
              variant={activeBedrooms === 4 ? 'default' : 'outline'} 
              onClick={() => setActiveBedrooms(4)}
              className={activeBedrooms === 4 ? 'bg-luxury-green hover:bg-luxury-dark text-white' : ''}
            >
              4 Bedrooms
            </Button>
          </div>
        </div>
        
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyGrid;
