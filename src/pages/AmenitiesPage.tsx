import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  WashingMachine, UtensilsCrossed, Bath, LayoutDashboard, Columns,
  LampFloor, ShoppingBag, Sofa, Sun, Cctv, Droplet, Accessibility,
  Car, BatteryCharging, Power, Users2, ArrowUpDown, Building, Clock,
  Trash2, Dumbbell
} from "lucide-react";

// Amenity card component
const AmenityPageCard = ({ icon, title }) => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg transition-all duration-300 hover:shadow-elegant border-l-4 border-luxury-green flex flex-col items-center justify-center text-center h-40">
    <div className="text-luxury-green mb-4">
      <div className="text-4xl">{icon}</div>
    </div>
    <h3 className="font-serif text-base font-semibold text-white">
      {title}
    </h3>
  </div>
);

const AmenitiesPage = () => {
  const interiorAmenities = [
    { icon: <WashingMachine className="w-8 h-8" />, title: "In-unit washer & dryer" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: "Stainless steel appliances" },
    { icon: <Bath className="w-8 h-8" />, title: "In-unit Hot tub/ Sauna" },
    { icon: <LayoutDashboard className="w-8 h-8" />, title: "Granite countertops" },
    { icon: <Columns className="w-8 h-8" />, title: "Open & Traditional Kitchen layouts" },
    { icon: <LampFloor className="w-8 h-8" />, title: "Luxury Hardwood & Ceramic floors" },
    { icon: <ShoppingBag className="w-8 h-8" />, title: "Walk-in closets" },
    { icon: <Sofa className="w-8 h-8" />, title: "Private balconies" },
    { icon: <Sun className="w-8 h-8" />, title: "Large windows for natural light" },
  ];

  const buildingAmenities = [
    { icon: <Cctv className="w-8 h-8" />, title: "Security and CCTV surveillance" },
    { icon: <Droplet className="w-8 h-8" />, title: "Ground Water" },
    { icon: <Accessibility className="w-8 h-8" />, title: "Accessible building entrance" },
    { icon: <Car className="w-8 h-8" />, title: "Garage Parking" },
    { icon: <BatteryCharging className="w-8 h-8" />, title: "EV Charging" },
    { icon: <Power className="w-8 h-8" />, title: "Standby Generator" },
    { icon: <Users2 className="w-8 h-8" />, title: "Community lounge" },
    { icon: <ArrowUpDown className="w-8 h-8" />, title: "Elevator access" },
    { icon: <Building className="w-8 h-8" />, title: "On-site management" },
    { icon: <Clock className="w-8 h-8" />, title: "24/7 maintenance support" },
    { icon: <Trash2 className="w-8 h-8" />, title: "Garbage shooter" },
    { icon: <Dumbbell className="w-8 h-8" />, title: "Resident fitness center (coming soon)" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 gradient-flow-middle py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button
              variant="outline"
              className="bg-white/90 hover:bg-white flex items-center gap-2"
              asChild
            >
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
              Premium Amenities
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Our residences are complemented by a suite of premium amenities designed to elevate your lifestyle and provide the ultimate in comfort and convenience.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-center font-serif text-3xl font-bold mb-10 text-white">Interior Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {interiorAmenities.map((amenity, index) => (
                <AmenityPageCard key={index} icon={amenity.icon} title={amenity.title} />
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-center font-serif text-3xl font-bold mb-10 text-white">Building & Community Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {buildingAmenities.map((amenity, index) => (
                <AmenityPageCard key={index} icon={amenity.icon} title={amenity.title} />
              ))}
            </div>
          </div>

          <div className="mt-16 relative overflow-hidden rounded-xl">
            <img
              src="/Bldginterior2.jpg"
              alt="Building Interior"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Experience the Height of Luxury
                </h3>
                <p className="max-w-2xl mx-auto text-lg text-white/90">
                  Schedule a private tour today and discover why our residences are the pinnacle of sophisticated urban living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AmenitiesPage;
