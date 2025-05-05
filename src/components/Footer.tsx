import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ZapierSetupModal from './ZapierSetupModal';
import SubmissionsListModal from './SubmissionsListModal';
import { getFormDestinationConfig, setFormDestinationConfig } from '@/utils/formSubmission';

const DEFAULT_WEBHOOK = 'https://hooks.zapier.com/hooks/catch/22774326/2pvngka/';
const DEFAULT_EMAIL = 'keymarkproperties@gmail.com';

const Footer: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showZapierSetup, setShowZapierSetup] = useState(false);
  const [showSubmissionsList, setShowSubmissionsList] = useState(false);

  useEffect(() => {
    // Check for admin mode via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('adminMode') === 'true') {
      setIsAdmin(true);
    }

    // Automatically set webhook and email if not configured
    const config = getFormDestinationConfig();
    const shouldUpdate =
      !config.zapierWebhookUrl || config.zapierWebhookUrl === '' || !config.notificationEmail;

    if (shouldUpdate) {
      setFormDestinationConfig({
        zapierWebhookUrl: DEFAULT_WEBHOOK,
        useGoogleSheets: true,
        notificationEmail: DEFAULT_EMAIL,
        createSubmissionList: true
      });

      localStorage.setItem('notificationEmail', DEFAULT_EMAIL);
    }
  }, []);

  const handleZapierModalSave = (webhookUrl: string, useGoogleSheets: boolean) => {
    const config = getFormDestinationConfig();
    const notificationEmail = prompt('Enter email address for form notifications:', config.notificationEmail || '');

    setFormDestinationConfig({
      zapierWebhookUrl: webhookUrl,
      useGoogleSheets,
      notificationEmail: notificationEmail || config.notificationEmail,
      createSubmissionList: true
    });

    if (notificationEmail) {
      localStorage.setItem('notificationEmail', notificationEmail);
    }
  };

  return (
    <footer className="gradient-flow-footer text-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/people/Keymark-Properties/61575888689741/"
                className="text-luxury-neutral-300 hover:text-luxury-cream transition-colors duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/keymark_properties"
                className="text-luxury-neutral-300 hover:text-luxury-cream transition-colors duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-luxury-neutral-300 font-sans text-sm leading-relaxed italic">
              Redefining luxury living with exceptional residences in the heart of Addis Ababa.
            </p>
          </div>
        </div>

        {isAdmin && (
          <div className="flex justify-center gap-2 mt-2 mb-4">
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

        <ZapierSetupModal
          open={showZapierSetup}
          onOpenChange={setShowZapierSetup}
        />

        <SubmissionsListModal
          open={showSubmissionsList}
          onOpenChange={setShowSubmissionsList}
        />

        <div className="border-t border-luxury-neutral-700/50 mt-3 pt-3 text-center">
          <p className="text-luxury-neutral-400 text-xs tracking-wider font-sans">
            © {new Date().getFullYear()} KEYMARK Properties. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
