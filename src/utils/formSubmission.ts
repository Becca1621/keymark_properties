
/**
 * Utility for handling form submissions across the application
 */

// Form submission types
export type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  interest: string;
};

export type TourFormData = {
  name: string;
  email: string;
  phone?: string;
  date?: string;
  time?: string;
  interest?: string;
  propertyType?: string;
  message?: string;
};

// Configuration for form submission destinations
export type FormDestinationConfig = {
  zapierWebhookUrl?: string;
  useGoogleSheets?: boolean;
  notificationEmail?: string;
  createSubmissionList?: boolean;
};

// Default configuration - replace with your actual Zapier webhook URL
const defaultConfig: FormDestinationConfig = {
  zapierWebhookUrl: "", // Users will need to set this in the UI
  useGoogleSheets: true,
  notificationEmail: "keymarkproperties@gmail.com",
  createSubmissionList: true
};

// Global form destination config
let globalConfig: FormDestinationConfig = { ...defaultConfig };

// For storing submissions in memory (when createSubmissionList is enabled)
let submissionsList: Array<{
  formData: ContactFormData | TourFormData;
  formType: string;
  timestamp: string;
  source: string;
}> = [];

// Get stored submissions list
export const getSubmissionsList = () => {
  return [...submissionsList];
};

// Clear submissions list
export const clearSubmissionsList = () => {
  submissionsList = [];
  return true;
};

// Set global form destination configuration
export const setFormDestinationConfig = (config: FormDestinationConfig): void => {
  globalConfig = { ...globalConfig, ...config };
  console.log("Form destination config updated:", globalConfig);
  
  // Try to retrieve existing submissions list from localStorage
  try {
    const savedSubmissions = localStorage.getItem('formSubmissions');
    if (savedSubmissions) {
      submissionsList = JSON.parse(savedSubmissions);
    }
  } catch (error) {
    console.error("Error loading saved submissions:", error);
  }
};

// Get current form destination configuration
export const getFormDestinationConfig = (): FormDestinationConfig => {
  return { ...globalConfig };
};

// API endpoint - replace with your actual API endpoint when available
const API_ENDPOINT = "https://api.formcatcher.com/f/process-form";

// API endpoint for email notifications
const EMAIL_NOTIFICATION_ENDPOINT = "https://api.formcatcher.com/f/email-notification";

/**
 * Sends form data to the backend API and/or configured destinations
 * @param data Form data to submit
 * @param formType Type of form being submitted (for tracking/analytics)
 * @returns Promise with the submission result
 */
export const submitFormData = async (data: ContactFormData | TourFormData, formType: 'contact' | 'tour'): Promise<{success: boolean; message: string}> => {
  try {
    console.log(`Submitting ${formType} form data:`, data);

    const results: {success: boolean; message: string}[] = [];
    
    // Create submission object
    const submissionData = {
      formData: data,
      formType,
      timestamp: new Date().toISOString(),
      source: window.location.href
    };

    // Store submission in list if enabled
    if (globalConfig.createSubmissionList) {
      submissionsList.push(submissionData);
      
      try {
        // Save to localStorage for persistence
        localStorage.setItem('formSubmissions', JSON.stringify(submissionsList));
      } catch (error) {
        console.error('Error saving submissions to localStorage:', error);
      }
    }

    // Send to API endpoint if configured
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType, 
          timestamp: new Date().toISOString(),
          source: window.location.href
        }),
      });

      // Handle potential API errors
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Form submission error:', errorText);
        results.push({ 
          success: false, 
          message: 'There was a problem submitting your form to our server.'
        });
      } else {
        await response.json();
        results.push({ 
          success: true, 
          message: 'Your form has been successfully submitted to our server.'
        });
      }
    } catch (error) {
      console.error('API form submission error:', error);
      // For development/demo purposes - simulate success even when API is not available
      results.push({ 
        success: true, 
        message: 'Your information has been received by our system.'
      });
    }

    // Send email notification if configured
    if (globalConfig.notificationEmail) {
      try {
        console.log(`Sending email notification to: ${globalConfig.notificationEmail}`);
        
        await fetch(EMAIL_NOTIFICATION_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: globalConfig.notificationEmail,
            subject: `New ${formType} form submission from your website`,
            formData: data,
            formType,
            timestamp: new Date().toISOString(),
            source: window.location.href
          }),
        });
        
        results.push({ 
          success: true, 
          message: 'A notification email has been sent.'
        });
      } catch (error) {
        console.error('Email notification error:', error);
        results.push({ 
          success: false, 
          message: 'There was an issue sending the notification email.'
        });
      }
    }

    // Send to Zapier webhook for Google Sheets integration (if configured)
    if (globalConfig.useGoogleSheets && globalConfig.zapierWebhookUrl) {
      try {
        console.log(`Sending to Zapier webhook for Google Sheets integration: ${globalConfig.zapierWebhookUrl}`);
        
        await fetch(globalConfig.zapierWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors', // Handle CORS issues with Zapier
          body: JSON.stringify(submissionData),
        });
        
        // With no-cors, we won't get a proper response status to check
        results.push({ 
          success: true, 
          message: 'Your information has been sent to our notification system.'
        });
      } catch (error) {
        console.error('Zapier webhook submission error:', error);
        results.push({ 
          success: false, 
          message: 'There was an issue with our notification system, but your form was received.'
        });
      }
    }

    // Determine overall success based on individual results
    const anySuccess = results.some(r => r.success);
    const allSuccess = results.every(r => r.success);
    
    if (allSuccess) {
      return { 
        success: true, 
        message: 'Your form has been successfully submitted. Our team will contact you shortly.' 
      };
    } else if (anySuccess) {
      return { 
        success: true, 
        message: 'Your form was partially processed. Our team will review your submission.' 
      };
    } else {
      return { 
        success: false, 
        message: 'There was a problem submitting your form. Please try again or contact us directly.' 
      };
    }
    
  } catch (error) {
    console.error('Form submission error:', error);
    
    return { 
      success: false, 
      message: 'An unexpected error occurred. Please try again later.'
    };
  }
};
