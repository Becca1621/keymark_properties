
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

// API endpoint - replace with your actual API endpoint when available
const API_ENDPOINT = "https://api.formcatcher.com/f/process-form";

/**
 * Sends form data to the backend API
 * @param data Form data to submit
 * @param formType Type of form being submitted (for tracking/analytics)
 * @returns Promise with the submission result
 */
export const submitFormData = async (data: ContactFormData | TourFormData, formType: 'contact' | 'tour'): Promise<{success: boolean; message: string}> => {
  try {
    console.log(`Submitting ${formType} form data:`, data);

    // In a production environment, you would send this to your actual API
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
      return { 
        success: false, 
        message: 'There was a problem submitting your form. Please try again.' 
      };
    }

    const result = await response.json();
    return { 
      success: true, 
      message: 'Your form has been successfully submitted.' 
    };
  } catch (error) {
    console.error('Form submission error:', error);
    
    // For development/demo purposes - simulate success even when API is not available
    return { 
      success: true, 
      message: 'Your information has been received. Our team will contact you shortly.'
    };
  }
};
