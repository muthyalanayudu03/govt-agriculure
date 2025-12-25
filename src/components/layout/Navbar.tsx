import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import LogoImg from "../../assets/Logo.svg";

const navLeft = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
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
  },
];

const navRight = [
  {
    label: "Legacy & Recognition",
    path: "/legacy-recognition",
    children: [
      { label: "Gallery & Testimonials", path: "/legacy-recognition/gallery-testimonials" },
      { label: "Media & Videos", path: "/legacy-recognition/media-videos" },
      { label: "Certifications", path: "/legacy-recognition/certifications" }
    ]
  },
  { label: "Subsidiaries", path: "/subsidiaries" },
  { label: "Contact", path: "/contact" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const renderNavItem = (item) => (
    <div
      key={item.path}
      className="relative"
      onMouseEnter={() => item.children && setActiveDropdown(item.path)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <Link
        to={item.path}
        className={`px-3 py-2 text-sm font-medium flex items-center gap-1 rounded-md transition-colors
          ${
            isActive(item.path)
              ? "text-primary bg-muted"
              : "text-muted-foreground hover:text-primary hover:bg-muted/50"
          }`}
      >
        {item.label}
        {item.children && <ChevronDown className="w-3 h-3" />}
      </Link>

      {item.children && activeDropdown === item.path && (
        <div className="absolute top-full left-0 mt-1 min-w-[220px] bg-card border border-border rounded-md shadow-lg py-2">
          {item.children.map((child) => (
            <Link
              key={child.path}
              to={child.path}
              className={`block px-4 py-2 text-sm transition-colors
                ${
                  location.pathname === child.path
                    ? "text-primary bg-muted"
                    : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                }`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-gov flex justify-between items-center py-2 text-sm">
          <div className="flex gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1">
              <Phone className="w-3 h-3" /> +91 98765 43210
            </a>
            <a href="mailto:info@kisaanparivar.com" className="flex items-center gap-1">
              <Mail className="w-3 h-3" /> info@kisaanparivar.com
            </a>
          </div>
          <span className="text-xs opacity-80">Government Aligned Initiative</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="container-gov">
        <div className="flex gap-5 justify-center items-center py-4">

          {/* Left Menu */}
          <div className="hidden lg:flex items-center gap-3">
            {navLeft.map(renderNavItem)}
          </div>

          {/* Center Logo */}
          <Link to="/" className="flex justify-center">
            <img src={LogoImg} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Right Menu */}
          <div className="hidden lg:flex items-center gap-3">
            {navRight.map(renderNavItem)}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t pt-4">
            {[...navLeft, ...navRight].map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 border-l pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 text-sm"
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
