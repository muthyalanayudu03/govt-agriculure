import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Map, 
  Leaf, 
  Award,
  Building,
  Sprout,
  Globe,
  Apple,
  ChevronLeft,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import HighlightCard from '@/components/highlights/HighlightCard';
import InfiniteCarousel from '@/components/carousel/InfiniteCarousel';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import { fetchHomeData, fetchHighlights, fetchCertifications } from '@/services/api';
import type { SliderItem, StatItem } from '@/data/homeData';
import type { Highlight } from '@/data/highlights';
import type { Certification } from '@/data/certifications';

const iconMap: Record<string, React.ReactNode> = {
  users: <Users className="w-8 h-8" />,
  map: <Map className="w-8 h-8" />,
  leaf: <Leaf className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  building: <Building className="w-6 h-6" />,
  sprout: <Sprout className="w-6 h-6" />,
  globe: <Globe className="w-6 h-6" />,
  apple: <Apple className="w-6 h-6" />,
  'shield-check': <ShieldCheck className="w-8 h-8" />
};

const Home = () => {
  const [homeData, setHomeData] = useState<{
    slider: SliderItem[];
    stats: StatItem[];
    about: { title: string; description: string; points: string[] };
    services: { id: number; title: string; description: string; icon: string }[];
  } | null>(null);
  const [highlights, setHighlights] = useState<Highlight[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [home, highlightsData, certsData] = await Promise.all([
          fetchHomeData(),
          fetchHighlights(),
          fetchCertifications()
        ]);
        setHomeData(home);
        setHighlights(highlightsData.highlights);
        setCertifications(certsData);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!homeData?.slider.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % homeData.slider.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [homeData?.slider.length]);

  const nextSlide = () => {
    if (homeData?.slider.length) {
      setCurrentSlide((prev) => (prev + 1) % homeData.slider.length);
    }
  };

  const prevSlide = () => {
    if (homeData?.slider.length) {
      setCurrentSlide((prev) => (prev - 1 + homeData.slider.length) % homeData.slider.length);
    }
  };

  if (loading) {
    return (
      <Layout>
        <ShimmerSection type="hero" />
        <div className="container-gov section-padding">
          <ShimmerSection type="text" />
          <div className="mt-12">
            <ShimmerSection count={4} />
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative h-[600px] bg-primary overflow-hidden">
        {homeData?.slider.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
            <div className="container-gov h-full flex items-center relative z-10">
              <div className="max-w-2xl text-primary-foreground animate-fade-in">
                <span className="inline-block px-4 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-sm mb-4">
                  {slide.subtitle}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <Link to="/about/who-we-are">
                    <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button className="bg-accent text-primary hover:bg-accent/90">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
          <button
            onClick={prevSlide}
            className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex gap-2">
            {homeData?.slider.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-accent' : 'bg-primary-foreground/30'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 bg-primary-foreground/20 rounded-full hover:bg-primary-foreground/30 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted border-b border-border">
        <div className="container-gov py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {homeData?.stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/30 text-primary mb-3">
                  {iconMap[stat.icon]}
                </div>
                <div className="font-heading text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle
            title="Our Key Highlights"
            subtitle="Driving sustainable agricultural growth through innovation, quality, and farmer empowerment"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <HighlightCard key={highlight.id} highlight={highlight} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                title={homeData?.about.title || ''}
                subtitle=""
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                {homeData?.about.description}
              </p>
              <ul className="space-y-3 mb-8">
                {homeData?.about.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about/who-we-are">
                <Button>
                  Discover More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-primary rounded-lg p-8 text-primary-foreground">
                <h3 className="font-heading text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                  To create a sustainable agricultural ecosystem that empowers farmers, promotes organic practices, and contributes to national food security while ensuring environmental preservation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">15+</div>
                    <div className="text-sm text-primary-foreground/70">Years Experience</div>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-accent">50K+</div>
                    <div className="text-sm text-primary-foreground/70">Farmers Supported</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle
            title="Our Farming Solutions"
            subtitle="Comprehensive agricultural services from cultivation to global markets"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeData?.services.map((service) => (
              <Card key={service.id} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/30 text-primary mb-4 group-hover:bg-accent transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {service.description}
                </p>
                <Link 
                  to={`/farming-solutions/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Certifications Carousel */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <SectionTitle
            title="Our Certifications"
            subtitle="Internationally recognized quality standards and compliance"
          />
        </div>
        <div className="max-w-full overflow-hidden">
          <InfiniteCarousel speed={40}>
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="flex-shrink-0 w-72 bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/30 text-primary mb-3">
                  {iconMap[cert.icon] || <ShieldCheck className="w-6 h-6" />}
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{cert.name}</h4>
                <p className="text-primary text-sm font-mono">{cert.code}</p>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {certifications.map((cert) => (
              <div 
                key={`dup-${cert.id}`} 
                className="flex-shrink-0 w-72 bg-card border border-border rounded-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/30 text-primary mb-3">
                  {iconMap[cert.icon] || <ShieldCheck className="w-6 h-6" />}
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">{cert.name}</h4>
                <p className="text-primary text-sm font-mono">{cert.code}</p>
              </div>
            ))}
          </InfiniteCarousel>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-gov text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Trusted by Government & Institutions
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Our commitment to quality and sustainable practices has earned us recognition from leading agricultural bodies and government institutions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Ministry of Agriculture', 'APEDA India', 'FSSAI', 'Organic India', 'State Agri Dept', 'FPO Network'].map((partner, index) => (
              <div 
                key={index}
                className="bg-secondary/50 rounded-lg p-4 text-sm font-medium"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent">
        <div className="container-gov text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary mb-4">
            Ready to Transform Agriculture?
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-8">
            Join hands with Kisaan Parivar in building a sustainable future for Indian agriculture. Whether you're a farmer, investor, or partner, we welcome you.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/contact">
              <Button className="bg-primary text-primary-foreground">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/subsidiaries">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Explore Our Companies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
