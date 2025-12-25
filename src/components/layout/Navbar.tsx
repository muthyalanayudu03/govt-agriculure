import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import LogoImg from "../../assets/Logo.svg";

// Left side navigation items
const leftNavItems = [
  { label: 'Home', path: '/' },
  { 
    label: 'About', 
    path: '/about',
    children: [
      { label: "Who We Are", path: "/about/who-we-are" },
      { label: "Core Team", path: "/about/core-team" }
    ]
  },
  { label: "What We Do", path: "/what-we-do" },
  {
    label: "Farming Solutions",
    path: "/farming-solutions",
    children: [
      { label: "Overview (Main Page)", path: "/farming-solutions" },
      { label: "Corporate Cultivation", path: "/farming-solutions/corporate-cultivation" },
      { label: "Organic Farming", path: "/farming-solutions/organic-farming" },
      { label: "Import & Export", path: "/farming-solutions/import-export" },
      { label: "Organic Foods", path: "/farming-solutions/organic-foods" }
    ]
  }
];

// Right side navigation items
const rightNavItems = [
  { 
    label: 'Legacy & Recognition', 
    path: '/legacy-recognition',
    children: [
      { label: "Gallery & Testimonials", path: "/legacy-recognition/gallery-testimonials" },
      { label: "Media & Videos", path: "/legacy-recognition/media-videos" },
      { label: "Certifications", path: "/legacy-recognition/certifications" }
    ]
  },
  { label: "Subsidiaries", path: "/subsidiaries" },
  { label: "Contact", path: "/contact" }
];

// Combined for mobile
const navItems = [...leftNavItems, ...rightNavItems];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleDropdownEnter = (path: string) => {
    setActiveDropdown(path);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (path: string) => {
    setMobileDropdown(mobileDropdown === path ? null : path);
  };

  return (
    <header className="sticky top-0 z-50 glass-dark shadow-lg">
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

      <nav className="w-full backdrop-blur-md bg-card/95">
        <div className="flex items-center justify-between py-2 lg:py-3">
          {/* Mobile menu button - left */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-primary hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-end">
            {leftNavItems.map((item) => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.path)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.children ? '#' : item.path}
                  onClick={(e) => item.children && e.preventDefault()}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-primary bg-accent/30'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.path ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.path && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-glass-lg py-2 min-w-[220px] animate-fade-in z-50"
                    onMouseEnter={() => handleDropdownEnter(item.path)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                          location.pathname === child.path
                            ? 'text-primary bg-accent/20 font-medium'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted/50 hover:pl-5'
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

          {/* Logo - Centered */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 mx-6 lg:mx-8">
            <div className="flex items-center justify-center">
              <img src={LogoImg} alt="Kisaan Parivar Logo" className="w-10 h-10 sm:w-20 sm:h-20" />
            </div>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-start">
            {rightNavItems.map((item) => (
              <div 
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.path)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={item.children ? '#' : item.path}
                  onClick={(e) => item.children && e.preventDefault()}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-primary bg-accent/30'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.path ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.path && (
                  <div 
                    className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-glass-lg py-2 min-w-[220px] animate-fade-in z-50"
                    onMouseEnter={() => handleDropdownEnter(item.path)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                          location.pathname === child.path
                            ? 'text-primary bg-accent/20 font-medium'
                            : 'text-muted-foreground hover:text-primary hover:bg-muted/50 hover:pl-5'
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

          {/* Placeholder for mobile balance */}
          <div className="w-10 lg:hidden" />
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in bg-card">
            {navItems.map((item) => (
              <div key={item.path} className="mb-1">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.children ? '#' : item.path}
                    onClick={(e) => {
                      if (item.children) {
                        e.preventDefault();
                        toggleMobileDropdown(item.path);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className={`flex-1 px-4 py-3 rounded-md text-sm font-medium flex items-center justify-between ${
                      isActive(item.path)
                        ? 'text-primary bg-accent/20'
                        : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileDropdown === item.path ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                </div>
                {item.children && mobileDropdown === item.path && (
                  <div className="ml-4 mt-1 border-l-2 border-accent/30 pl-4 space-y-1 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={`block py-2.5 px-3 text-sm rounded-md transition-colors ${
                          location.pathname === child.path
                            ? 'text-primary bg-accent/20 font-medium'
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
        )}
      </nav>
    </header>
  );
};

export default Navbar;