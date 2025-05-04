
import React, { useState } from 'react';
import { Property, properties } from '@/data/properties';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter, Grid2X2, Grid3X3 } from 'lucide-react';

// Create an inline PropertyCard component since the external one was removed
const PropertyCardInline = ({ property }: { property: Property }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => prev === 0 ? property.images.length - 1 : prev - 1);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={property.images[currentImageIndex]} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-luxury-green text-white text-sm font-medium px-3 py-1 rounded-full">
          {property.type === 'rent' ? 'For Rent' : 'For Sale'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-luxury-green transition-colors">
          {property.title}
        </h3>
        
        <p className="text-gray-500 text-sm mb-4">
          {property.address}
        </p>
      </div>
    </div>
  );
};

const PropertyGrid: React.FC = () => {
  const [activeType, setActiveType] = useState<'all' | 'rent' | 'sale'>('all');
  const [activeBedrooms, setActiveBedrooms] = useState<'all' | 3 | 4>('all');
  const [gridColumns, setGridColumns] = useState<2 | 3>(3);
  const [filtersVisible, setFiltersVisible] = useState(true);
  
  const filteredProperties = properties.filter(property => {
    const typeMatch = activeType === 'all' || property.type === activeType;
    const bedroomsMatch = activeBedrooms === 'all' || property.bedrooms === activeBedrooms;
    return typeMatch && bedroomsMatch;
  });

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };
  
  return (
    <div id="properties" className="bg-luxury-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Discover Our Luxury Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of premium properties, thoughtfully designed for those who appreciate the finest things in life.
          </p>
        </div>
        
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="outline" 
              onClick={toggleFilters}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {filtersVisible ? 'Hide Filters' : 'Show Filters'}
            </Button>
            
            <div className="flex items-center gap-2">
              <Button
                variant={gridColumns === 2 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setGridColumns(2)}
                className={gridColumns === 2 ? 'bg-luxury-green hover:bg-luxury-dark text-white' : ''}
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button
                variant={gridColumns === 3 ? 'default' : 'outline'}
                size="sm"
                onClick={() => setGridColumns(3)}
                className={gridColumns === 3 ? 'bg-luxury-green hover:bg-luxury-dark text-white' : ''}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {filtersVisible && (
            <div className="space-y-6 mb-8 p-6 bg-white rounded-lg shadow-sm">
              <div>
                <h3 className="text-lg font-medium mb-3">Property Type</h3>
                <Tabs 
                  defaultValue="all" 
                  value={activeType}
                  onValueChange={(value) => setActiveType(value as 'all' | 'rent' | 'sale')}
                  className="w-full max-w-md"
                >
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="rent">For Rent</TabsTrigger>
                    <TabsTrigger value="sale">For Sale</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Bedrooms</h3>
                <div className="flex flex-wrap gap-3">
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
            </div>
          )}
        </div>
        
        {filteredProperties.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {setActiveType('all'); setActiveBedrooms('all');}}
              className="mt-4"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-${gridColumns === 2 ? '2' : '2 lg:grid-cols-3'} gap-8`}>
            {filteredProperties.map((property) => (
              <PropertyCardInline key={property.id} property={property} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyGrid;
