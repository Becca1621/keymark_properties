
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'rent', // Default value
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Inquiry Submitted",
      description: "We'll be in touch with you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      interest: 'rent',
    });
  };
  
  return (
    <div id="contact" className="py-20 bg-luxury-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-luxury-gray mb-6">
                Interested in learning more about our luxury residences? Complete the form and one of our dedicated property specialists will be in touch to answer your questions and schedule a personalized tour.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-luxury-gray">(212) 555-1234</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-luxury-gray">inquiries@keymarkproperties.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-luxury-gold/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-luxury-gray">345 Park Avenue, New York, NY 10022</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-elegant animate-fade-in">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Request Information
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in</Label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:border-luxury-gold"
                  >
                    <option value="rent">Renting a property</option>
                    <option value="buy">Buying a property</option>
                    <option value="tour">Scheduling a tour</option>
                    <option value="info">General information</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="I'm interested in learning more about..."
                  rows={4}
                />
              </div>
              
              <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-dark text-white">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
