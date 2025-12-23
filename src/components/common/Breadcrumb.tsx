import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
}

const Breadcrumb = ({ items = [] }: BreadcrumbProps) => {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from path if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    let currentPath = '';
    
    return pathSegments.map(segment => {
      currentPath += `/${segment}`;
      const label = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return { label, path: currentPath };
    });
  };

  const breadcrumbs = items.length > 0 ? items : generateBreadcrumbs();

  if (breadcrumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/50 border-b border-border">
      <div className="container-gov py-3">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          <li className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
          </li>
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-muted-foreground" />
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-primary">{item.label}</span>
              ) : (
                <Link 
                  to={item.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
