
import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { getSubmissionsList } from '@/utils/formSubmission';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";

type SubmissionsListModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const SubmissionsListModal: React.FC<SubmissionsListModalProps> = ({ open, onOpenChange }) => {
  const submissions = getSubmissionsList();
  
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md md:max-w-lg">
        <SheetHeader>
          <SheetTitle>Form Submissions</SheetTitle>
          <SheetDescription>
            View all form submissions collected from your website
          </SheetDescription>
        </SheetHeader>
        
        <div className="mt-6">
          {submissions.length === 0 ? (
            <div className="py-4 text-center text-muted-foreground">
              No form submissions yet
            </div>
          ) : (
            <ScrollArea className="h-[70vh]">
              <div className="space-y-4">
                {submissions.map((submission, index) => {
                  const formData = submission.formData;
                  const timestamp = new Date(submission.timestamp);
                  
                  return (
                    <div key={index} className="p-4 border rounded-md bg-background/50">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={submission.formType === 'contact' ? 'default' : 'secondary'}>
                          {submission.formType === 'contact' ? 'Contact Form' : 'Tour Request'}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          {formatDistanceToNow(timestamp, { addSuffix: true })}
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="font-medium">{formData.name}</div>
                        <div className="text-sm">{formData.email}</div>
                        {formData.phone && <div className="text-sm">{formData.phone}</div>}
                      </div>
                      
                      {formData.interest && (
                        <div className="mt-2 text-sm">
                          <span className="font-medium">Interest:</span> {formData.interest}
                        </div>
                      )}
                      
                      {formData.message && (
                        <div className="mt-2">
                          <div className="text-xs text-muted-foreground">Message:</div>
                          <p className="text-sm mt-1 whitespace-pre-wrap">
                            {formData.message}
                          </p>
                        </div>
                      )}
                      
                      {submission.formType === 'tour' && (
                        <div className="mt-2 text-sm flex flex-wrap gap-x-4">
                          {(formData as any).date && (
                            <div>
                              <span className="font-medium">Date:</span> {(formData as any).date}
                            </div>
                          )}
                          {(formData as any).time && (
                            <div>
                              <span className="font-medium">Time:</span> {(formData as any).time}
                            </div>
                          )}
                        </div>
                      )}
                      
                      <div className="mt-2 text-xs text-muted-foreground">
                        Source: {submission.source}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SubmissionsListModal;
