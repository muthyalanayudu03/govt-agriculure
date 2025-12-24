import { useState, useEffect } from 'react';
import { ExternalLink, Laptop, Store, Truck, ShoppingCart, ArrowDown } from 'lucide-react';
import { fetchSubsidiaries } from '@/services/api';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import type { Subsidiary } from '@/data/subsidiaries';

const iconMap: Record<string, React.ReactNode> = {
  laptop: <Laptop className="w-8 h-8" />,
  store: <Store className="w-8 h-8" />,
  truck: <Truck className="w-8 h-8" />,
  'shopping-cart': <ShoppingCart className="w-8 h-8" />
};

const Subsidiaries = () => {
  const [subsidiaries, setSubsidiaries] = useState<Subsidiary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchSubsidiaries();
      setSubsidiaries(data);
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading) {
    return <Layout><div className="container-gov section-padding"><ShimmerSection count={4} /></div></Layout>;
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-gov">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Subsidiary Companies</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">
            Specialized companies driving different aspects of our agricultural mission, each focused on specific verticals of the agri-business ecosystem.
          </p>
        </div>
      </section>

      {/* Corporate Structure Overview */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/40 border border-accent rounded-lg p-6 text-center mb-6">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-2">
                Kisaan Parivar Limited (KPL)
              </h3>
              <p className="text-foreground/80">Holding Company - Standalone</p>
            </div>
            
            <div className="flex justify-center mb-6">
              <ArrowDown className="w-8 h-8 text-primary" />
            </div>
            
            <div className="bg-soft/50 border border-accent/30 rounded-lg p-4 text-center mb-8">
              <p className="text-foreground/90">
                Business verticals operated through specialized subsidiary companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Grid */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Our Subsidiaries" 
            subtitle="Each subsidiary specializes in a key area of agricultural commerce and logistics"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {subsidiaries.map((sub) => (
              <Card key={sub.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center text-primary flex-shrink-0">
                    {iconMap[sub.icon] || <Store className="w-8 h-8" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg md:text-xl font-semibold text-foreground mb-1">
                      {sub.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {sub.ownership}
                      </span>
                      <span className="text-muted-foreground text-sm">Est. {sub.established}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{sub.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {sub.focus.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-muted border border-border rounded-full text-xs text-foreground/80">
                      {f}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={sub.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors text-sm font-medium"
                >
                  Visit Website
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-accent">
        <div className="container-gov text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary mb-4">
            Partner With Our Subsidiaries
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Each of our subsidiary companies offers unique partnership opportunities for farmers, retailers, and businesses in the agricultural sector.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {subsidiaries.slice(0, 2).map((sub) => (
              <a
                key={sub.id}
                href={sub.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                {sub.shortName}
                <ExternalLink className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subsidiaries;
