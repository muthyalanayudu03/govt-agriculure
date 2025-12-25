import { useState, useEffect } from 'react';
import { X, Phone, Mail, User, MessageSquare, Send } from 'lucide-react';
import farmingHarvest from '@/assets/farming-harvest.jpg';

interface WelcomePopupProps {
  onClose: () => void;
}

const WelcomePopup = ({ onClose }: WelcomePopupProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-glass-lg animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-primary hover:bg-accent/30 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="flex flex-col md:flex-row h-full bg-card">
          {/* Left Side - Image & Content */}
          <div className="relative md:w-1/2 h-48 sm:h-56 md:h-auto">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${farmingHarvest})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 md:p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs sm:text-sm font-medium mb-2 sm:mb-3 w-fit backdrop-blur-sm border border-accent/30">
                Welcome to Kisaan Parivar
              </span>
              <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-2 sm:mb-3">
                Empowering Farmers, <br className="hidden sm:block" />Nurturing Nature
              </h2>
              <p className="text-primary-foreground/80 text-sm sm:text-base max-w-md hidden sm:block">
                Join us in our mission to transform agriculture through sustainable practices and farmer empowerment.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-none">
            {!submitted ? (
              <>
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-sm mb-4 sm:mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your name"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="you@example.com"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm sm:text-base"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="How can we help you?"
                        className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-3.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm sm:text-base hover:opacity-90 transition-all flex items-center justify-center gap-2 glass-button disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-muted-foreground text-sm">
                  We've received your message and will get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;