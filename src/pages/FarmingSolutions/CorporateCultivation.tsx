import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  Users, 
  CheckCircle,
  BarChart,
  Handshake,
  Target
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ShimmerSection from '@/components/shimmer/ShimmerSection';

const CorporateCultivation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: "High Returns", description: "Optimized yields with sustainable practices" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Support", description: "Dedicated agricultural experts" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Quality Assurance", description: "ISO certified processes" },
    { icon: <BarChart className="w-6 h-6" />, title: "Transparent Reporting", description: "Real-time farm analytics" }
  ];

  const process = [
    { step: 1, title: "Land Assessment", description: "Comprehensive soil and water analysis" },
    { step: 2, title: "Crop Planning", description: "Data-driven crop selection and rotation" },
    { step: 3, title: "Implementation", description: "Sustainable farming practices execution" },
    { step: 4, title: "Monitoring", description: "Continuous quality and yield tracking" },
    { step: 5, title: "Harvest & Processing", description: "Optimal timing and post-harvest care" },
    { step: 6, title: "Market Linkage", description: "Premium market access and distribution" }
  ];

  const metrics = [
    { value: "10,000+", label: "Acres Under Cultivation" },
    { value: "25%", label: "Above Market Returns" },
    { value: "100+", label: "Corporate Partners" },
    { value: "Zero", label: "Chemical Residue" }
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
                Corporate Cultivation
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Partner with us for large-scale sustainable farming operations that deliver consistent quality and sustainable returns while supporting rural communities.
              </p>
              <Link to="/contact">
                <Button className="bg-accent text-primary hover:bg-accent/90">
                  Partner With Us
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

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Why Corporate Cultivation?" 
            subtitle="Benefits of partnering with Kisaan Parivar for your agricultural investments"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/30 text-primary mb-4 group-hover:bg-accent transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <SectionTitle 
            title="Our Process" 
            subtitle="A systematic approach to corporate farming excellence"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item) => (
              <Card key={item.step} className="relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-heading font-bold text-accent/20">
                  {item.step.toString().padStart(2, '0')}
                </div>
                <div className="relative z-10">
                  <h4 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">
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
            Ready to Invest in Sustainable Agriculture?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Contact our team to discuss partnership opportunities and investment options.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground">
                Get Started
              </Button>
            </Link>
            <Link to="/farming-solutions/organic-farming">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Explore Organic Farming
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CorporateCultivation;
