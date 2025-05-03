
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { properties } from '@/data/properties';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [activeImage, setActiveImage] = useState(0);
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
            <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleContactClick = () => {
    toast({
      title: "Request Sent",
      description: "A property specialist will contact you shortly.",
    });
  };
  
  const handleImageChange = (index: number) => {
    setActiveImage(index);
  };
  
  const handleNextImage = () => {
    setActiveImage((prev) => (prev + 1) % property.images.length);
  };
  
  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1));
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link to="/" className="text-gray-600 hover:text-luxury-gold flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative h-96 overflow-hidden rounded-xl">
                <img 
                  src={property.images[activeImage]} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                <div className="absolute top-4 right-4 bg-luxury-gold text-white text-sm font-medium px-3 py-1 rounded-full">
                  {property.type === 'rent' ? 'For Rent' : 'For Sale'}
                </div>
              </div>
              
              {property.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageChange(index)}
                      className={`flex-shrink-0 w-20 h-20 overflow-hidden rounded-md ${activeImage === index ? 'ring-2 ring-luxury-gold' : ''}`}
                    >
                      <img 
                        src={image} 
                        alt={`${property.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-8">
              <div>
                <h1 className="font-serif text-3xl font-bold text-luxury-dark mb-2">
                  {property.title}
                </h1>
                <p className="text-gray-500 mb-4">
                  {property.address}
                </p>
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-luxury-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-luxury-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-luxury-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span>{property.squareFeet.toLocaleString()} sq ft</span>
                  </div>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="font-serif text-2xl font-bold text-luxury-dark">
                    {formatPrice(property.price)}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {property.type === 'rent' ? '/month' : ''}
                  </span>
                </div>
              </div>
              
              <div>
                <h2 className="font-serif text-xl font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>
              
              <div>
                <h2 className="font-serif text-xl font-semibold mb-3">Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                  {property.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-luxury-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <Button 
                  onClick={handleContactClick}
                  className="w-full bg-luxury-gold hover:bg-luxury-dark text-white"
                >
                  Request a Viewing
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleContactClick}
                  className="w-full border-luxury-gold text-luxury-dark hover:bg-luxury-gold/10"
                >
                  Download Floor Plan
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">Similar Properties You Might Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties
                .filter(p => p.id !== id && p.bedrooms === property.bedrooms)
                .slice(0, 3)
                .map(similarProperty => (
                  <Link 
                    key={similarProperty.id}
                    to={`/property/${similarProperty.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={similarProperty.images[0]} 
                        alt={similarProperty.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-luxury-gold text-white text-sm font-medium px-3 py-1 rounded-full">
                        {similarProperty.type === 'rent' ? 'For Rent' : 'For Sale'}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-luxury-gold transition-colors">
                        {similarProperty.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {similarProperty.bedrooms} Bed • {similarProperty.bathrooms} Bath • {similarProperty.squareFeet.toLocaleString()} sq ft
                      </p>
                      <div className="font-serif text-lg font-semibold text-luxury-dark">
                        {formatPrice(similarProperty.price)}
                        {similarProperty.type === 'rent' && <span className="text-gray-500 text-sm ml-1">/month</span>}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetails;
