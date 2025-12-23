import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import { submitContactForm } from '@/services/api';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    const result = await submitContactForm(formData);
    toast({ title: "Success", description: result.message });
    setFormData({ name: '', email: '', phone: '', message: '' });
    setSubmitting(false);
  };

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-gov">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">Get in touch with our team for inquiries, partnerships, or support.</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-gov">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="font-heading text-2xl font-semibold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Full Name *" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
                    <input type="email" placeholder="Email Address *" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" required />
                  </div>
                  <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  <textarea placeholder="Your Message *" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" required />
                  <Button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Message'}<Send className="w-4 h-4 ml-2" /></Button>
                </form>
              </Card>
            </div>
            <div className="space-y-4">
              <Card><div className="flex items-start gap-4"><MapPin className="w-6 h-6 text-primary flex-shrink-0" /><div><h4 className="font-semibold mb-1">Address</h4><p className="text-muted-foreground text-sm">Kisaan Parivar Pvt Ltd, Hitech City, Hyderabad, Telangana - 500081</p></div></div></Card>
              <Card><div className="flex items-start gap-4"><Phone className="w-6 h-6 text-primary flex-shrink-0" /><div><h4 className="font-semibold mb-1">Phone</h4><a href="tel:+919876543210" className="text-muted-foreground text-sm hover:text-primary">+91 98765 43210</a></div></div></Card>
              <Card><div className="flex items-start gap-4"><Mail className="w-6 h-6 text-primary flex-shrink-0" /><div><h4 className="font-semibold mb-1">Email</h4><a href="mailto:info@kisaanparivar.com" className="text-muted-foreground text-sm hover:text-primary">info@kisaanparivar.com</a></div></div></Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
