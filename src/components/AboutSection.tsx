
import React, { useRef, useEffect } from 'react';

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
    <section id="about" ref={sectionRef} className="py-16 bg-gradient-to-br from-luxury-neutral-100 to-luxury-neutral-300 animate-on-scroll">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center lg:items-start">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 text-luxury-dark text-center lg:text-left border-b-2 pb-2 border-luxury-gold">About KEYMARK</h2>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white/95 backdrop-filter backdrop-blur-sm p-6 lg:p-8 rounded-lg shadow-elegant">
              <p className="text-luxury-dark leading-relaxed mb-4">
                Discover KEYMARK Properties, an exceptional office, retail, and apartment complex ideally located in the vibrant heart of Bole. Located in a dynamic neighborhood, our prime location offers everything you need—vibrant cafes, a wide selection of restaurants, shopping hubs, recreational centers, lush parks, and easy access to the airport, all just moments away.
              </p>
              <p className="text-luxury-dark leading-relaxed">
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
