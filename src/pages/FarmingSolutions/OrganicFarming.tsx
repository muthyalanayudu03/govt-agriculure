import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Leaf, 
  Heart, 
  Droplets, 
  Sun,
  CheckCircle,
  Award
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ShimmerSection from '@/components/shimmer/ShimmerSection';

const OrganicFarming = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: "Healthier Produce", description: "Chemical-free, nutrient-rich crops" },
    { icon: <Droplets className="w-6 h-6" />, title: "Soil Conservation", description: "Preserving soil health for generations" },
    { icon: <Leaf className="w-6 h-6" />, title: "Biodiversity", description: "Supporting ecosystem balance" },
    { icon: <Sun className="w-6 h-6" />, title: "Sustainability", description: "Long-term environmental benefits" }
  ];

  const practices = [
    { title: "Crop Rotation", description: "Systematic rotation to maintain soil fertility and break pest cycles." },
    { title: "Composting", description: "Natural composting for nutrient-rich organic fertilizers." },
    { title: "Biological Pest Control", description: "Using beneficial insects and natural methods for pest management." },
    { title: "Green Manuring", description: "Growing cover crops to add organic matter to soil." },
    { title: "Mulching", description: "Natural mulches for moisture retention and weed control." },
    { title: "Water Conservation", description: "Efficient irrigation and rainwater harvesting systems." }
  ];

  const certifications = [
    "NPOP Certified",
    "USDA Organic",
    "EU Organic",
    "FSSAI Organic"
  ];

  const metrics = [
    { value: "100%", label: "Chemical Free" },
    { value: "30%", label: "Higher Nutrition" },
    { value: "15,000+", label: "Organic Farmers" },
    { value: "200+", label: "Product Varieties" }
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
                Organic Farming
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Embrace nature's way with our certified organic farming programs. We train and support farmers in adopting sustainable, chemical-free agricultural practices.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-sm"
                  >
                    <Award className="w-3 h-3" />
                    {cert}
                  </span>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-accent text-primary hover:bg-accent/90">
                  Join Our Program
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
            title="Benefits of Organic Farming" 
            subtitle="Why choosing organic is good for you, farmers, and the planet"
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

      {/* Practices */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <SectionTitle 
            title="Our Organic Practices" 
            subtitle="Scientific approaches to natural farming"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, index) => (
              <Card key={index}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {practice.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {practice.description}
                    </p>
                  </div>
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
            Explore Our Organic Products
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Discover our range of certified organic products from farm to table.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/farming-solutions/organic-foods">
              <Button className="bg-primary text-primary-foreground">
                View Products
              </Button>
            </Link>
            <Link to="/farming-solutions/import-export">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Export Operations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrganicFarming;
