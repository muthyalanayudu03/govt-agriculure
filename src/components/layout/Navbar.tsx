import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about',
    children: [
      { label: 'Who We Are', path: '/about/who-we-are' },
      { label: 'Core Team', path: '/about/core-team' }
    ]
  },
  { label: 'What We Do', path: '/what-we-do' },
  { 
    label: 'Farming Solutions', 
    path: '/farming-solutions',
    children: [
      { label: 'Corporate Cultivation', path: '/farming-solutions/corporate-cultivation' },
      { label: 'Organic Farming', path: '/farming-solutions/organic-farming' },
      { label: 'Import & Export', path: '/farming-solutions/import-export' },
      { label: 'Organic Foods', path: '/farming-solutions/organic-foods' }
    ]
  },
  { 
    label: 'Legacy & Recognition', 
    path: '/legacy-recognition',
    children: [
      { label: 'Gallery & Testimonials', path: '/legacy-recognition/gallery-testimonials' },
      { label: 'Media & Videos', path: '/legacy-recognition/media-videos' },
      { label: 'Certifications', path: '/legacy-recognition/certifications' }
    ]
  },
  { label: 'Subsidiaries', path: '/subsidiaries' },
  { label: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-gov flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:info@kisaanparivar.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@kisaanparivar.com</span>
            </a>
          </div>
          <div className="text-xs opacity-80">
            Government Aligned Initiative
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-gov">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">KP</span>
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-primary leading-tight">
                Kisaan Parivar
              </h1>
              <p className="text-xs text-muted-foreground">Empowering Farmers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-muted'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.path && (
                  <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-md shadow-lg py-2 min-w-[200px] animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          location.pathname === child.path
                            ? 'text-primary bg-muted'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-primary hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => !item.children && setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-primary bg-muted'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l-2 border-muted pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2 text-sm ${
                          location.pathname === child.path
                            ? 'text-primary'
                            : 'text-muted-foreground hover:text-primary'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
