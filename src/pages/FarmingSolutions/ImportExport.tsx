import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Globe, 
  Ship, 
  Plane,
  CheckCircle,
  FileCheck,
  Package,
  TrendingUp
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ShimmerSection from '@/components/shimmer/ShimmerSection';

const ImportExport = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    { icon: <Package className="w-6 h-6" />, title: "Export Packaging", description: "International standard packaging solutions" },
    { icon: <FileCheck className="w-6 h-6" />, title: "Documentation", description: "Complete export documentation support" },
    { icon: <Ship className="w-6 h-6" />, title: "Logistics", description: "End-to-end shipping arrangements" },
    { icon: <Globe className="w-6 h-6" />, title: "Market Access", description: "Connections to global buyers" }
  ];

  const exportProducts = [
    "Organic Rice Varieties",
    "Premium Spices",
    "Organic Pulses",
    "Natural Sweeteners",
    "Organic Oils",
    "Dried Fruits & Nuts"
  ];

  const destinations = [
    { region: "Europe", countries: "Germany, UK, France, Netherlands" },
    { region: "Middle East", countries: "UAE, Saudi Arabia, Qatar" },
    { region: "North America", countries: "USA, Canada" },
    { region: "Asia Pacific", countries: "Singapore, Japan, Australia" }
  ];

  const process = [
    { step: 1, title: "Quality Selection", description: "Stringent product quality checks" },
    { step: 2, title: "Certification", description: "Organic and safety certifications" },
    { step: 3, title: "Processing", description: "Export-grade processing" },
    { step: 4, title: "Packaging", description: "International standard packing" },
    { step: 5, title: "Documentation", description: "Complete export paperwork" },
    { step: 6, title: "Shipping", description: "Timely global delivery" }
  ];

  const metrics = [
    { value: "100+", label: "Export Destinations" },
    { value: "500+", label: "Tons Monthly" },
    { value: "50+", label: "Product Varieties" },
    { value: "15+", label: "Years Experience" }
  ];

  if (loading) {
    return (
      <Layout>
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container-gov">
            <div className="shimmer h-12 w-1/3 rounded mb-4" />
            <div className="shimmer h-6 w-2/3 rounded" />
          </div>
        </div>
        <div className="container-gov section-padding">
          <ShimmerSection count={4} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-gov">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-sm mb-4">
                Farming Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Import & Export
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Connecting Indian organic produce with global markets. APEDA registered and IEC certified for seamless international trade.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-5 h-5" />
                  <span>APEDA Registered</span>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <CheckCircle className="w-5 h-5" />
                  <span>IEC Certified</span>
                </div>
              </div>
              <Link to="/contact">
                <Button className="bg-accent text-primary hover:bg-accent/90">
                  Business Inquiry
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="bg-secondary/30 rounded-lg p-8">
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-primary/50 rounded-lg">
                    <div className="font-heading text-2xl font-bold text-accent">{metric.value}</div>
                    <div className="text-primary-foreground/70 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Export Services" 
            subtitle="Comprehensive export support from farm to foreign markets"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/30 text-primary mb-4 group-hover:bg-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Destinations */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Export Products" centered={false} />
              <div className="grid grid-cols-2 gap-3">
                {exportProducts.map((product, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg"
                  >
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-foreground text-sm">{product}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionTitle title="Export Destinations" centered={false} />
              <div className="space-y-4">
                {destinations.map((dest, index) => (
                  <Card key={index} padding="sm">
                    <div className="flex items-center gap-3">
                      <Globe className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="font-heading font-semibold text-foreground">{dest.region}</h4>
                        <p className="text-muted-foreground text-sm">{dest.countries}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Export Process" 
            subtitle="Our streamlined export workflow"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 text-5xl font-heading font-bold text-accent/20">
                  {item.step.toString().padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-gov text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary mb-4">
            Start Your Export Journey
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Partner with us for reliable, certified organic product exports to global markets.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground">
              Contact Our Export Team
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ImportExport;
