
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialTooltip from '@/components/SocialTooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useNavigation } from '@/hooks/useNavigation';
import {
  WashingMachine, UtensilsCrossed, Bath, LayoutDashboard, Columns,
  LampFloor, ShoppingBag, Sofa, Sun, Cctv, Droplet, Accessibility,
  Car, BatteryCharging, Power, Users2, ArrowUpDown, Building, Clock,
  Trash2, Dumbbell
} from "lucide-react";

// Amenity card component
const AmenityPageCard = ({ icon, title, description }) => (
  <div className="bg-gradient-to-br from-luxury-cream to-luxury-neutral-400 p-6 rounded-lg transition-all duration-300 hover:shadow-elegant border-l-4 border-luxury-green flex flex-col text-left h-full">
    <div className="text-luxury-green mb-4">
      <div className="w-8 h-8">{icon}</div>
    </div>
    <h3 className="font-serif text-base font-semibold text-luxury-dark mb-2">
      {title}
    </h3>
    <p className="text-luxury-dark/80 text-sm">
      {description}
    </p>
  </div>
);

const AmenitiesPage = () => {
  const { handleNavigation } = useNavigation();
  
  const interiorAmenities = [
    {
      icon: <WashingMachine className="w-6 h-6" />,
      title: "In-unit washer & dryer",
      description: "Convenient in-unit laundry for your comfort."
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Stainless steel appliances",
      description: "Modern kitchens with premium stainless steel appliance packages."
    },
    {
      icon: <Bath className="w-6 h-6" />,
      title: "In-unit Hot tub/Steam bath",
      description: "Luxury spa experience in the comfort of your own home."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "Granite countertops",
      description: "Elegant, durable stone countertops in kitchens and bathrooms."
    },
    {
      icon: <Columns className="w-6 h-6" />,
      title: "Open & Traditional Kitchen layouts",
      description: "Two Kitchen layouts in every unit - modern open concept and classic traditional floor plans."
    },
    {
      icon: <LampFloor className="w-6 h-6" />,
      title: "Luxury Hardwood & Ceramic floors",
      description: "Hardwood and premium ceramic flooring throughout."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Walk-in closets",
      description: "Spacious walk-in closets with custom organization options."
    },
    {
      icon: <Sofa className="w-6 h-6" />,
      title: "Private Balconies",
      description: "Enjoy outdoor living with private balconies and stunning views."
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Large windows for natural light",
      description: "Bright, open interiors enhanced by large windows throughout."
    },
  ];

  const buildingAmenities = [
    {
      icon: <Cctv className="w-6 h-6" />,
      title: "Security and CCTV surveillance",
      description: "State-of-the-art security monitoring for your peace of mind."
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Ground Water",
      description: "Sustainable ground water system providing clean, filtered water throughout the property."
    },
    {
      icon: <Accessibility className="w-6 h-6" />,
      title: "Accessible building entrance",
      description: "Designed for accessibility and convenience for all residents."
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Garage Parking",
      description: "Secure, covered parking for residents and guests."
    },
    {
      icon: <BatteryCharging className="w-6 h-6" />,
      title: "EV Charging",
      description: "Convenient charging stations for electric vehicles."
    },
    {
      icon: <Power className="w-6 h-6" />,
      title: "Standby Generator",
      description: "Reliable backup power system for peace of mind."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Community lounge",
      description: "Elegant social spaces for relaxation and entertaining."
    },
    {
      icon: <ArrowUpDown className="w-6 h-6" />,
      title: "Elevator access",
      description: "Modern elevators for convenient building navigation."
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "On-site management",
      description: "Professional management team located on premises."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 maintenance support",
      description: "Round-the-clock maintenance services available."
    },
    {
      icon: <Trash2 className="w-6 h-6" />,
      title: "Garbage shooter",
      description: "Convenient waste disposal system on each floor."
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Resident fitness center (coming soon)",
      description: "Modern fitness equipment and facility."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TooltipProvider>
        <SocialTooltip />
        <Navbar />

        <div className="flex-1 gradient-flow-middle py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
                Explore Our Premium Amenities
              </h1>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our residences are enhanced by a curated selection of premium amenities, thoughtfully designed to elevate your lifestyle with unmatched comfort and convenience. Blending timeless elegance with modern design. A perfect place to call home.
              </p>
            </div>

            <div className="mb-20">
              <h2 className="text-center font-serif text-3xl font-bold mb-10 text-white">Interior Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {interiorAmenities.map((amenity, index) => (
                  <AmenityPageCard key={index} icon={amenity.icon} title={amenity.title} description={amenity.description} />
                ))}
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-center font-serif text-3xl font-bold mb-10 text-white">Building & Community Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {buildingAmenities.map((amenity, index) => (
                  <AmenityPageCard key={index} icon={amenity.icon} title={amenity.title} description={amenity.description} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </TooltipProvider>
    </div>
  );
};

export default AmenitiesPage;
