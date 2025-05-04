
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface PropertyFiltersProps {
  propertyTypeFilter: 'all' | 'rent' | 'sale';
  setPropertyTypeFilter: (value: 'all' | 'rent' | 'sale') => void;
  setFilter: (value: string) => void;
}

const PropertyFilters = ({ 
  propertyTypeFilter, 
  setPropertyTypeFilter, 
  setFilter 
}: PropertyFiltersProps) => {
  return (
    <div className="mb-8 space-y-4">
      {/* Property Type Toggle (Rent/Sale) */}
      <div className="flex justify-center mb-4">
        <ToggleGroup 
          type="single" 
          value={propertyTypeFilter}
          onValueChange={(value) => {
            if (value) setPropertyTypeFilter(value as 'all' | 'rent' | 'sale');
          }}
          className="bg-luxury-dark/50 backdrop-blur-sm rounded-md border border-luxury-dark/20"
        >
          <ToggleGroupItem value="all" className="toggle-group-item data-[state=on]:bg-luxury-green data-[state=on]:text-white px-6">
            All
          </ToggleGroupItem>
          <ToggleGroupItem value="rent" className="toggle-group-item data-[state=on]:bg-luxury-green data-[state=on]:text-white px-6">
            Rent
          </ToggleGroupItem>
          <ToggleGroupItem value="sale" className="toggle-group-item data-[state=on]:bg-luxury-green data-[state=on]:text-white px-6">
            Sale
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {/* Apartment Filter */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-[500px] max-w-full grid-cols-4 mx-auto bg-luxury-dark/50 backdrop-blur-sm">
          <TabsTrigger value="all" onClick={() => setFilter('all')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white text-white/80">All</TabsTrigger>
          <TabsTrigger value="3" onClick={() => setFilter('3')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white text-white/80">3 Bedroom</TabsTrigger>
          <TabsTrigger value="4" onClick={() => setFilter('4')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white text-white/80">4 Bedroom</TabsTrigger>
          <TabsTrigger value="retail" onClick={() => setFilter('retail')} className="data-[state=active]:bg-luxury-green data-[state=active]:text-white text-white/80">Retail</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PropertyFilters;
