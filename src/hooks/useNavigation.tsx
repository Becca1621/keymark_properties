
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection, scrollToTop } from '../utils/scrollUtils';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string, sectionId?: string) => {
    // If we're already on the target path
    if (location.pathname === path) {
      // If section ID is provided, scroll to that section
      if (sectionId) {
        scrollToSection(sectionId);
      } else {
        scrollToTop();
      }
    } else {
      // Navigate to the path and then scroll if needed
      navigate(path, { 
        state: { scrollToSection: sectionId } 
      });
    }
  };

  return { handleNavigation };
};
