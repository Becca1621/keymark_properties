
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scrollUtils';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the scrollToSection from state if it exists
    const sectionId = location.state?.scrollToSection;
    
    if (sectionId) {
      // Small timeout to ensure the DOM is fully loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      // If no section is specified, scroll to top
      scrollToTop();
    }
  }, [location.pathname, location.state]);

  return null; // This component doesn't render anything
};

export default ScrollManager;
