
import { useNavigation } from "../hooks/useNavigation";
import BuildingAmenities from "../components/amenities/BuildingAmenities";
import InteriorAmenities from "../components/amenities/InteriorAmenities";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AmenitiesPage = () => {
  const { handleNavigation } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="pt-24 pb-10 px-4 md:px-8 lg:px-16 bg-neutral-50">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-neutral-900 mb-2">
          Luxury Amenities
        </h1>
        <div className="w-20 h-1 bg-[#9a8478] mx-auto mb-8"></div>
        
        <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-12">
          Our residences are enhanced by a curated selection of premium amenities, thoughtfully designed to elevate your lifestyle with unmatched comfort and convenience. Blending timeless elegance with modern design, this is the perfect place to call home.
        
        <BuildingAmenities />
        <InteriorAmenities />
        
        <div className="text-center mt-16">
          <button 
            className="px-8 py-3 bg-[#9a8478] text-white rounded hover:bg-[#8a7468] transition-colors"
            onClick={() => handleNavigation('/', 'book-tour')}
          >
            Book a Tour
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AmenitiesPage;
