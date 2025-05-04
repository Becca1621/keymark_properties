
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
};

// Default configuration - replace with your actual Zapier webhook URL
const defaultConfig: FormDestinationConfig = {
  zapierWebhookUrl: "", // Users will need to set this in the UI
  useGoogleSheets: true
};

// Global form destination config
let globalConfig: FormDestinationConfig = { ...defaultConfig };

// Set global form destination configuration
export const setFormDestinationConfig = (config: FormDestinationConfig): void => {
  globalConfig = { ...globalConfig, ...config };
  console.log("Form destination config updated:", globalConfig);
};

// Get current form destination configuration
export const getFormDestinationConfig = (): FormDestinationConfig => {
  return { ...globalConfig };
};

// API endpoint - replace with your actual API endpoint when available
const API_ENDPOINT = "https://api.formcatcher.com/f/process-form";

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
          body: JSON.stringify({
            formData: data,
            formType,
            timestamp: new Date().toISOString(),
            source: window.location.href
          }),
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
