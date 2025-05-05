
import { useState, useEffect, useRef } from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import PropertyFilters from '@/components/property/PropertyFilters';
import { properties } from '@/components/property/PropertyTypes';

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white text-shadow">Explore Available Spaces</h2>
          <p className="text-white/90 max-w-2xl mx-auto">Explore our premium selection of three and four bedroom residences, offered in both furnished and unfurnished options, along with retail spaces, all thoughtfully designed with elegant finishes and modern amenities.</p>
        </div>

        <PropertyFilters 
          propertyTypeFilter={propertyTypeFilter}
          setPropertyTypeFilter={setPropertyTypeFilter}
          setFilter={setFilter}
        />

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
