
import Hero from "../components/Hero";
import PropertiesSection from "../components/PropertiesSection";
import AmenitiesSection from "../components/AmenitiesSection";
import ContactSection from "../components/ContactSection";
import BookTourForm from "../components/BookTourForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>
      
      <section id="properties">
        <PropertiesSection />
      </section>
      
      <section id="amenities">
        <AmenitiesSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
      
      <section id="book-tour">
        <BookTourForm />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
