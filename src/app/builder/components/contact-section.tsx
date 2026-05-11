'use client';

import { useState } from 'react';
import { ScrollReveal } from './scroll-reveal';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted');
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-[#0F1B33] inline-block gold-underline pb-2">
              Get In Touch
            </h2>
            <p className="font-source-sans text-[#64748B] mt-6 max-w-2xl mx-auto">
              Ready to start your next project? Contact us today for a consultation and let's build something extraordinary together.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Form Column */}
          <ScrollReveal>
            <div className="bg-[#F1F5F9] p-8 md:p-10 rounded-sm shadow-md">
              <h3 className="font-montserrat font-bold text-2xl text-[#0F1B33] mb-6">
                Send a Message
              </h3>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-sm font-source-sans flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-[#0F1B33]">Full Name</label>
                    <input 
                      id="name"
                      required
                      className="flex h-10 w-full rounded-sm border border-[#CBD5E1] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#94A3B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#0F1B33]">Email Address</label>
                    <input 
                      id="email"
                      type="email"
                      required
                      className="flex h-10 w-full rounded-sm border border-[#CBD5E1] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#94A3B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-[#0F1B33]">Phone Number</label>
                  <input 
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-sm border border-[#CBD5E1] bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#94A3B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-[#0F1B33]">Message</label>
                  <textarea 
                    id="message"
                    required
                    className="flex min-h-[120px] w-full rounded-sm border border-[#CBD5E1] bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-[#94A3B8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-[#0F1B33] hover:bg-[#c4a030] h-12 px-8 py-2 rounded-sm font-montserrat font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0F1B33] border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info Column */}
          <ScrollReveal className="delay-100 flex flex-col justify-between">
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-[#0F1B33] mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="bg-[#F1F5F9] p-3 rounded-sm text-[#D4AF37]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[#0F1B33]">Our Office</h4>
                    <p className="font-source-sans text-[#64748B]">123 Construction Blvd, Suite 400<br />New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#F1F5F9] p-3 rounded-sm text-[#D4AF37]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[#0F1B33]">Phone</h4>
                    <p className="font-source-sans text-[#64748B]">+1 (555) 123-4567<br />Mon-Fri, 8am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#F1F5F9] p-3 rounded-sm text-[#D4AF37]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-[#0F1B33]">Email</h4>
                    <p className="font-source-sans text-[#64748B]">info@buildcraftpro.com<br />careers@buildcraftpro.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map iframe */}
            <div className="w-full h-64 bg-gray-200 rounded-sm overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744576391!3d40.69763123334691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1709660309194!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
