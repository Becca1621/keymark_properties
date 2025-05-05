import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const BookTourForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    interest: 'tour',
    propertyType: '3-bedroom',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' with your actual EmailJS IDs
      const result = await emailjs.send(
        'service_6anfl59',  // Your EmailJS service ID
        'template_44cytub', // Your EmailJS template ID
        formData,           // Form data to send
        '6YgG2pFPPEuiC-PUm'      // Your EmailJS user ID
      );

      if (result.status === 200) {
        toast({
          title: "Tour Request Submitted",
          description: "Your request has been received. We'll contact you shortly.",
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          interest: 'tour',
          propertyType: '3-bedroom',
          message: ''
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="book-tour" className="pt-16 gradient-flow-start">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-4 text-white text-shadow">Book a Tour</h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Experience the luxury of our properties firsthand. Schedule a private tour with one of our property specialists.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=" "
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Preferred Date</Label>
                <Input 
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  placeholder="mm/dd/yy"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="interest">I'm interested in</Label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold"
                >
                  <option value="tour">Scheduling a tour</option>
                  <option value="rent">Renting a property</option>
                  <option value="buy">Buying a property</option>
                  <option value="info">General information</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Interest</Label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold"
                >
                  <option value="3-bedroom">3 Bedroom</option>
                  <option value="4-bedroom">4 Bedroom</option>
                  <option value="penthouse">Penthouse</option>
                  <option value="penthouse">Retail</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Notes</Label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your specific interests or questions..."
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-luxury-green hover:bg-luxury-green/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Tour"}
            </Button>

            {isSubmitting && (
              <div className="text-center text-sm text-luxury-gray">
                <p>Submitting your request...</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTourForm;
