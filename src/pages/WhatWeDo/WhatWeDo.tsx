import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sprout, 
  Users, 
  TrendingUp, 
  ShieldCheck,
  Truck,
  Award,
  BookOpen,
  Recycle
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ShimmerSection from '@/components/shimmer/ShimmerSection';

const WhatWeDo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Organic Cultivation",
      description: "Promoting chemical-free farming practices that produce healthy, nutritious crops while preserving soil health and biodiversity.",
      link: "/farming-solutions/organic-farming"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Farmer Training",
      description: "Comprehensive capacity building programs that equip farmers with modern agricultural techniques and sustainable practices.",
      link: "/farming-solutions/corporate-cultivation"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Supply Chain Management",
      description: "End-to-end logistics and cold chain solutions ensuring farm produce reaches markets in optimal condition.",
      link: "/farming-solutions/import-export"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Access",
      description: "Connecting farmers directly with domestic and international markets for fair prices and sustainable income.",
      link: "/farming-solutions/import-export"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes that meet international standards for food safety and organic certification.",
      link: "/legacy-recognition/certifications"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification Support",
      description: "Assisting farmers and businesses in obtaining organic and quality certifications for premium market access.",
      link: "/legacy-recognition/certifications"
    }
  ];

  const approach = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of farm conditions, soil health, and farmer requirements."
    },
    {
      step: "02",
      title: "Planning",
      description: "Custom agricultural plans aligned with organic practices and market demands."
    },
    {
      step: "03",
      title: "Implementation",
      description: "On-ground support for farmers in adopting sustainable cultivation methods."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Continuous tracking of crop health, yield, and quality parameters."
    },
    {
      step: "05",
      title: "Market Linkage",
      description: "Connecting produce with appropriate markets for optimal returns."
    }
  ];

  const impactMetrics = [
    { value: "50,000+", label: "Farmers Trained" },
    { value: "500+", label: "Organic Products" },
    { value: "12", label: "States Covered" },
    { value: "100+", label: "Export Destinations" }
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
          <ShimmerSection count={6} />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-gov">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-sm mb-4">
              Our Services
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              End-to-end agricultural solutions that empower farmers, ensure quality, and connect sustainable produce with global markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Our Core Services" 
            subtitle="Comprehensive agricultural solutions from farm to market"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/30 text-primary mb-4 group-hover:bg-accent transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-primary text-sm font-medium hover:underline"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <SectionTitle 
            title="Our Approach" 
            subtitle="A structured methodology for sustainable agricultural transformation"
          />
          <div className="grid md:grid-cols-5 gap-4">
            {approach.map((item, index) => (
              <div key={index} className="relative">
                <Card className="text-center h-full">
                  <div className="text-4xl font-heading font-bold text-accent/50 mb-2">
                    {item.step}
                  </div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </Card>
                {index < approach.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-gov">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-accent mb-2">
                  {metric.value}
                </div>
                <div className="text-primary-foreground/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-gov text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary mb-4">
            Explore Our Farming Solutions
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Discover our specialized services in corporate cultivation, organic farming, and international trade.
          </p>
          <Link to="/farming-solutions/corporate-cultivation">
            <Button className="bg-primary text-primary-foreground">
              View Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
