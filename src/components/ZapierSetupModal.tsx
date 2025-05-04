import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
  const [webhookUrl, setWebhookUrl] = useState("");
  const [useGoogleSheets, setUseGoogleSheets] = useState(true);
  
  // Load existing configuration on open
  useEffect(() => {
    if (open) {
      const config = getFormDestinationConfig();
      setWebhookUrl(config.zapierWebhookUrl || "");
      setUseGoogleSheets(config.useGoogleSheets !== false);
    }
  }, [open]);
  
  const handleSave = () => {
    // Basic validation for webhook URL
    if (useGoogleSheets && (!webhookUrl || !webhookUrl.startsWith('https://hooks.zapier.com'))) {
      toast({
        title: "Invalid Webhook URL",
        description: "Please enter a valid Zapier webhook URL starting with 'https://hooks.zapier.com'.",
        variant: "destructive",
      });
      return;
    }
    
    // Save configuration
    setFormDestinationConfig({
      zapierWebhookUrl: webhookUrl,
      useGoogleSheets
    });
    
    // Save to localStorage for persistence across page reloads
    try {
      localStorage.setItem('formDestinationConfig', JSON.stringify({
        zapierWebhookUrl: webhookUrl,
        useGoogleSheets
      }));
    } catch (e) {
      console.error("Could not save config to localStorage", e);
    }
    
    toast({
      title: "Configuration Saved",
      description: "Your form notification settings have been updated.",
    });
    
    // Call onSave callback if provided
    if (onSave) {
      onSave(webhookUrl, useGoogleSheets);
    }
    
    onOpenChange(false);
  };
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Google Sheets Integration</DialogTitle>
          <DialogDescription>
            Connect your forms to Google Sheets via Zapier to automatically log submissions.
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
            <Label htmlFor="useGoogleSheets">Enable Google Sheets notifications</Label>
          </div>
          
          {useGoogleSheets && (
            <div className="grid gap-2">
              <Label htmlFor="webhookUrl">Zapier Webhook URL</Label>
              <Input
                id="webhookUrl"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                className="w-full"
              />
              <p className="text-sm text-gray-500">
                Create a Zap in Zapier with a Webhook trigger and Google Sheets action, then paste the webhook URL here.
              </p>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} className="bg-luxury-gold hover:bg-luxury-gold/90">
            Save Configuration
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Load configuration from localStorage on initial load
export const loadSavedFormConfig = () => {
  try {
    const savedConfig = localStorage.getItem('formDestinationConfig');
    if (savedConfig) {
      const parsedConfig = JSON.parse(savedConfig);
      setFormDestinationConfig(parsedConfig);
      console.log("Loaded form destination config from localStorage:", parsedConfig);
    }
  } catch (e) {
    console.error("Could not load config from localStorage", e);
  }
};

export default ZapierSetupModal;
