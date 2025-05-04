import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { getFormDestinationConfig, setFormDestinationConfig } from "@/utils/formSubmission";

type ZapierSetupModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (webhookUrl: string, useGoogleSheets: boolean) => void;
};

const ZapierSetupModal: React.FC<ZapierSetupModalProps> = ({ open, onOpenChange, onSave }) => {
  const { toast } = useToast();
  const [useGoogleSheets, setUseGoogleSheets] = useState(true);

  const HARDCODED_WEBHOOK = "https://hooks.zapier.com/hooks/catch/22774326/2noue6f/";
  const NOTIFICATION_EMAIL = "keymarkproperties@gmail.com";

  useEffect(() => {
    if (open) {
      const config = getFormDestinationConfig();
      setUseGoogleSheets(config.useGoogleSheets !== false);
    }
  }, [open]);

  const handleSave = () => {
    const config = {
      zapierWebhookUrl: HARDCODED_WEBHOOK,
      useGoogleSheets,
      notificationEmail: NOTIFICATION_EMAIL,
      createSubmissionList: true
    };

    setFormDestinationConfig(config);

    try {
      localStorage.setItem('formDestinationConfig', JSON.stringify(config));
    } catch (e) {
      console.error("Could not save config to localStorage", e);
    }

    toast({
      title: "Configuration Saved",
      description: "Google Sheets and email notification setup is active.",
    });

    if (onSave) {
      onSave(HARDCODED_WEBHOOK, useGoogleSheets);
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Form Notification Setup</DialogTitle>
          <DialogDescription>
            Form submissions will be sent to Google Sheets and emailed to {NOTIFICATION_EMAIL}.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="useGoogleSheets"
              checked={useGoogleSheets}
              onChange={(e) => setUseGoogleSheets(e.target.checked)}
              className="h-4 w-4 text-luxury-gold focus:ring-luxury-gold border-gray-300 rounded"
            />
            <Label htmlFor="useGoogleSheets">Enable Google Sheets logging</Label>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            Zapier Webhook is fixed and notifications will be sent to <strong>{NOTIFICATION_EMAIL}</strong>.
          </p>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-luxury-green hover:bg-luxury-green/90">
            Save Configuration
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ZapierSetupModal;
