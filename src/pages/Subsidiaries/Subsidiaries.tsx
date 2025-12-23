import { useState, useEffect } from 'react';
import { fetchSubsidiaries } from '@/services/api';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import { Laptop, Store, Truck, ShoppingCart } from 'lucide-react';
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
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container-gov">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">Our Subsidiaries</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl">Specialized companies driving different aspects of our agricultural mission.</p>
        </div>
      </section>
      <section className="section-padding bg-background">
        <div className="container-gov">
          <div className="grid md:grid-cols-2 gap-6">
            {subsidiaries.map((sub) => (
              <Card key={sub.id} className="h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center text-primary">
                    {iconMap[sub.icon] || <Store className="w-8 h-8" />}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{sub.name}</h3>
                    <span className="text-muted-foreground text-sm">Est. {sub.established}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{sub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {sub.focus.map((f, i) => (
                    <span key={i} className="px-3 py-1 bg-muted border border-border rounded-full text-xs">{f}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Subsidiaries;
