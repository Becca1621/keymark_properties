
import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback((path: string, sectionId?: string) => {
    // If we're already on the same path, just scroll to the section
    if (location.pathname === path) {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Scroll to top if no section is specified
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Navigate to the new path and then scroll to section if needed
      navigate(path, { state: { scrollTo: sectionId } });
    }
  }, [navigate, location.pathname]);

  return { handleNavigation };
};
