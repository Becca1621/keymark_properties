
import { useState, useEffect, useRef } from 'react';
import PropertyCard from '@/components/property/PropertyCard';
import PropertyFilters from '@/components/property/PropertyFilters';
import { properties } from '@/components/property/PropertyTypes';

const PropertiesSection = () => {
  const [filter, setFilter] = useState('all');
  const [propertyTypeFilter, setPropertyTypeFilter] = useState<'all' | 'rent' | 'sale'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProperties = properties.filter(p => {
    const typeMatch = filter === 'all' 
      ? true
      : filter === 'retail'
        ? p.type === 'retail'
        : p.bedrooms === parseInt(filter) && p.type === 'apartment';
    
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
    <section id="properties" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 gradient-flow-start animate-on-scroll">
      <div className="container-responsive">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-3 sm:mb-4 text-white text-shadow">
            Explore Available Spaces
          </h2>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto px-4">
            Explore our premium selection of three and four bedroom residences, offered in both furnished and unfurnished options, along with retail spaces, all thoughtfully designed with elegant finishes and modern amenities.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 pb-4 sm:pb-6">
          <PropertyFilters 
            propertyTypeFilter={propertyTypeFilter}
            setPropertyTypeFilter={setPropertyTypeFilter}
            setFilter={setFilter}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
