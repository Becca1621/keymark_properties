import React, { useState, useEffect } from 'react';
import InteriorAmenities from './amenities/InteriorAmenities';
import BuildingAmenities from './amenities/BuildingAmenities';
import ZapierSetupModal, { loadSavedFormConfig } from './ZapierSetupModal';
import SubmissionsListModal from './SubmissionsListModal';
import { Button } from '@/components/ui/button';
import { Settings, FileText } from 'lucide-react';
import { 
  setFormDestinationConfig, 
  getFormDestinationConfig, 
  getSubmissionsList 
} from '@/utils/formSubmission';

const AmenitiesSection: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showZapierSetup, setShowZapierSetup] = useState(false);
  const [showSubmissionsList, setShowSubmissionsList] = useState(false);
  
  // Simple admin check via URL parameter - for demo purposes only
  // In a real application, use proper authentication
  useEffect(() => {
    // Load saved form configuration on component mount
    loadSavedFormConfig();
    
    // Check for admin mode via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('adminMode') === 'true') {
      setIsAdmin(true);

      // If in admin mode, also set up notification email if needed
      const config = getFormDestinationConfig();
      if (!config.notificationEmail) {
        const savedEmail = localStorage.getItem('notificationEmail');
        if (savedEmail) {
          setFormDestinationConfig({
            ...config,
            notificationEmail: savedEmail
          });
        }
      }
    }
  }, []);

  // Custom handler for the ZapierSetupModal to also save email settings
  const handleZapierModalSave = (webhookUrl: string, useGoogleSheets: boolean) => {
    // Get existing email from config
    const config = getFormDestinationConfig();
    const notificationEmail = prompt('Enter email address for form notifications:', config.notificationEmail || '');
    
    // Save all settings
    setFormDestinationConfig({
      zapierWebhookUrl: webhookUrl,
      useGoogleSheets,
      notificationEmail: notificationEmail || config.notificationEmail,
      createSubmissionList: true
    });
    
    // Save email separately for persistence
    if (notificationEmail) {
      localStorage.setItem('notificationEmail', notificationEmail);
    }

    // View recent submissions if available
    const submissions = getSubmissionsList();
    if (submissions.length > 0) {
      console.log('Recent form submissions:', submissions);
    }
  };

  return (
    <div id="amenities" className="py-20 gradient-flow-middle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isAdmin && (
          <div className="mb-6 flex justify-end gap-2">
            <Button 
              variant="outline" 
              className="bg-black/20 text-white hover:bg-black/40 flex items-center gap-2"
              onClick={() => setShowSubmissionsList(true)}
            >
              <FileText size={16} />
              View Submissions
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-black/20 text-white hover:bg-black/40 flex items-center gap-2"
              onClick={() => setShowZapierSetup(true)}
            >
              <Settings size={16} />
              Configure Form Notifications
            </Button>
          </div>
        )}
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-white text-shadow">
            Premium Amenities
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Our residences are complemented by a suite of premium amenities designed to elevate your lifestyle and provide the ultimate in comfort and convenience.
          </p>
        </div>
        
        <InteriorAmenities className="mb-16" />
        
        <BuildingAmenities className="mb-16" />
        
        <div className="mt-16 relative overflow-hidden rounded-xl">
          <img 
            src="/Bldginterior2.jpg" 
            alt="Building Exterior" 
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
        
        {/* Zapier Setup Modal */}
        <ZapierSetupModal 
          open={showZapierSetup} 
          onOpenChange={setShowZapierSetup}
          onSave={handleZapierModalSave}
        />
        
        {/* Submissions List Modal */}
        <SubmissionsListModal 
          open={showSubmissionsList} 
          onOpenChange={setShowSubmissionsList}
        />
      </div>
    </div>
  );
};

export default AmenitiesSection;
