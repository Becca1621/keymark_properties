
import React, { useRef, useEffect } from 'react';
import { Building } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="about" ref={sectionRef} className="py-16 bg-ombre-light-gray animate-on-scroll">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 bg-luxury-green rounded-full flex items-center justify-center mb-6">
              <Building size={40} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-luxury-dark text-center lg:text-left">About KEYMARK</h2>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white/90 backdrop-filter backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-md">
              <p className="text-luxury-charcoal leading-relaxed mb-4">
                Discover KEYMARK Properties, an exceptional office, retail, and apartment complex ideally located in the vibrant heart of Bole. Located in a dynamic neighborhood, our prime location offers everything you need—vibrant cafes, a wide selection of restaurants, shopping hubs, recreational centers, lush parks, and easy access to the airport, all just moments away.
              </p>
              <p className="text-luxury-charcoal leading-relaxed">
                Enjoy flexible office spaces, dynamic retail options, and contemporary apartments, all within a bustling community where work, leisure, and living come together effortlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
