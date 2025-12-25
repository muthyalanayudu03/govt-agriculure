import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about/who-we-are' },
    { label: 'What We Do', path: '/what-we-do' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    { label: 'Corporate Cultivation', path: '/farming-solutions/corporate-cultivation' },
    { label: 'Organic Farming', path: '/farming-solutions/organic-farming' },
    { label: 'Import & Export', path: '/farming-solutions/import-export' },
    { label: 'Organic Foods', path: '/farming-solutions/organic-foods' }
  ];

  const legal = [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
    { label: 'Certifications', path: '/legacy-recognition/certifications' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-gov py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-lg">KP</span>
              </div>
              <h3 className="font-heading text-xl font-semibold">Kisaan Parivar</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Empowering farmers through sustainable agriculture, organic farming practices, and innovative solutions for a prosperous rural India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Kisaan Parivar Pvt Ltd,<br />
                  Asian Suncity, B- Block, Flat no 1002, 10th Floor, Behind Sarath city mall, Kondapur, Hyderabad- 500084.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+91 9966999817" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  +91 9966999817
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:kpinfo@kisaanparivar.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  kpinfo@kisaanparivar.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary">
        <div className="container-gov py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Kisaan Parivar Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
