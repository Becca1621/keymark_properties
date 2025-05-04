import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type GoogleFormModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Form Notification Setup</DialogTitle>
          <DialogDescription>
            Please fill out the form below to configure notifications.
          </DialogDescription>
        </DialogHeader>

        {/* Embedding Google Form using an iframe */}
        <div className="grid gap-4 py-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeetOS2bfJhbxjdhwuAS4PRFuFlsLQZ0B4Ncspt-HSPPd-RXA/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded border-gray-300"
            title="Google Form"
          >
            Loading…
          </iframe>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GoogleFormModal;
