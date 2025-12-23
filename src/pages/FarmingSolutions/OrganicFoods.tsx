import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Leaf, 
  ShoppingBag,
  Award,
  CheckCircle,
  Star
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ShimmerSection from '@/components/shimmer/ShimmerSection';

const OrganicFoods = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    {
      title: "Organic Grains",
      products: ["Basmati Rice", "Brown Rice", "Wheat", "Millets"],
      description: "Traditionally grown grains without chemical fertilizers"
    },
    {
      title: "Organic Pulses",
      products: ["Toor Dal", "Moong Dal", "Chana Dal", "Urad Dal"],
      description: "Protein-rich legumes from certified organic farms"
    },
    {
      title: "Organic Spices",
      products: ["Turmeric", "Red Chilli", "Coriander", "Cumin"],
      description: "Aromatic spices with authentic flavor and purity"
    },
    {
      title: "Organic Oils",
      products: ["Groundnut Oil", "Coconut Oil", "Mustard Oil", "Sesame Oil"],
      description: "Cold-pressed oils retaining natural nutrients"
    },
    {
      title: "Natural Sweeteners",
      products: ["Jaggery", "Palm Sugar", "Honey", "Coconut Sugar"],
      description: "Unrefined sweeteners with health benefits"
    },
    {
      title: "Dried Products",
      products: ["Dry Fruits", "Nuts", "Seeds", "Dehydrated Vegetables"],
      description: "Naturally preserved without artificial additives"
    }
  ];

  const qualityFeatures = [
    { title: "Farm Fresh", description: "Direct from certified organic farms" },
    { title: "No Chemicals", description: "100% chemical and pesticide free" },
    { title: "Lab Tested", description: "Quality assured through rigorous testing" },
    { title: "FSSAI Approved", description: "Meets all food safety standards" }
  ];

  const metrics = [
    { value: "200+", label: "Product Varieties" },
    { value: "100%", label: "Organic Certified" },
    { value: "50+", label: "Farmer Partners" },
    { value: "4.8/5", label: "Customer Rating" }
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-sm mb-4">
                Farming Solutions
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Organic Foods
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Premium organic food products sourced directly from our certified farms. Pure, nutritious, and sustainably produced for health-conscious consumers.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-primary-foreground/70">Trusted by 10,000+ Customers</span>
              </div>
              <Link to="/subsidiaries">
                <Button className="bg-accent text-primary hover:bg-accent/90">
                  Visit KP E-Mart
                  <ShoppingBag className="w-4 h-4 ml-2" />
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

      {/* Quality Features */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Quality Promise" 
            subtitle="What makes our organic products special"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/30 text-primary mb-4 group-hover:bg-accent transition-colors">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <SectionTitle 
            title="Our Product Range" 
            subtitle="Explore our diverse collection of certified organic products"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.products.map((product, pIndex) => (
                    <span 
                      key={pIndex}
                      className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-muted-foreground"
                    >
                      {product}
                    </span>
                  ))}
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
            Experience Pure Organic Goodness
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Visit our retail stores or contact us for bulk orders and partnerships.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/subsidiaries">
              <Button className="bg-primary text-primary-foreground">
                Find a Store
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Bulk Orders
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OrganicFoods;
