import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, CheckCircle, ExternalLink, ArrowDown } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import { subsidiariesData } from '@/data/subsidiaries';

const WhoWeAre = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To empower farmers through sustainable agricultural practices, ensuring food security and rural prosperity while preserving biodiversity."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: "To be India's leading sustainable agriculture enterprise, transforming farming into a profitable and environmentally responsible profession."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "Integrity, sustainability, farmer-first approach, quality excellence, and commitment to national food security goals."
    }
  ];

  const milestones = [
    { year: "2016", title: "Foundation", description: "Kisaan Parivar Pvt Ltd established in Telangana" },
    { year: "2017", title: "First E-Mart", description: "Launch of KP E-Mart for direct farmer-consumer connection" },
    { year: "2018", title: "Organic Certification", description: "Received organic certification from authorized bodies" },
    { year: "2019", title: "Export Operations", description: "Commenced export operations to international markets" },
    { year: "2020", title: "50K Farmers", description: "Crossed milestone of empowering 50,000 farmers" },
    { year: "2023", title: "Multi-State Presence", description: "Expanded operations across 12 Indian states" }
  ];

  const commitments = [
    "100% organic farming practices on partner farms",
    "Fair pricing and transparent procurement processes",
    "Continuous farmer training and capacity building",
    "Modern agricultural technology adoption",
    "Environmental conservation and sustainability",
    "Quality assurance at every supply chain stage"
  ];

  if (loading) {
    return (
      <Layout>
        <div className="container-gov section-padding">
          <ShimmerSection type="text" />
          <div className="mt-12">
            <ShimmerSection count={3} />
          </div>
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
              About Kisaan Parivar
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Kisaan Parivar is a government-aligned agricultural enterprise committed to transforming Indian agriculture through sustainable practices, organic farming, and farmer empowerment programs.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Structure Section - Matching reference image */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary text-center mb-12">
            Group Corporate Structure of Kisaan Parivar Ltd
          </h2>
          
          {/* Holding Company Box */}
          <div className="max-w-5xl mx-auto">
            {/* Top Level - Holding Company */}
            <div className="bg-accent/40 border border-accent rounded-lg p-4 md:p-6 text-center mb-4">
              <h3 className="font-heading text-lg md:text-xl font-bold text-primary">
                Kisaan Parivar Limited (KPL) (Holding Company) - Standalone
              </h3>
            </div>
            
            {/* Description Box */}
            <div className="bg-soft/50 border border-accent/30 rounded-lg p-4 md:p-6 text-center mb-4">
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed">
                Standalone - Organic farming through innovative agriculture methods and technologies, processing, sale and distribution of agri and other agri-allied products on wholesale basis through distribution network and B2B model.
              </p>
            </div>
            
            {/* Arrow Down */}
            <div className="flex justify-center mb-4">
              <ArrowDown className="w-8 h-8 text-primary" />
            </div>
            
            {/* Business Verticals Box */}
            <div className="bg-accent/40 border border-accent rounded-lg p-4 md:p-6 text-center mb-8">
              <h3 className="font-heading text-base md:text-lg font-semibold text-foreground">
                Business verticals through its subsidiaries
              </h3>
            </div>
            
            {/* Connecting Lines and Subsidiary Cards */}
            <div className="relative">
              {/* Horizontal Line */}
              <div className="hidden lg:block absolute top-0 left-0 right-0 h-px bg-primary" style={{ top: '0' }} />
              
              {/* Vertical Lines from horizontal to cards */}
              <div className="hidden lg:block absolute left-[12.5%] w-px h-8 bg-primary" style={{ top: '0' }} />
              <div className="hidden lg:block absolute left-[37.5%] w-px h-8 bg-primary" style={{ top: '0' }} />
              <div className="hidden lg:block absolute left-[62.5%] w-px h-8 bg-primary" style={{ top: '0' }} />
              <div className="hidden lg:block absolute left-[87.5%] w-px h-8 bg-primary" style={{ top: '0' }} />
              
              {/* Arrows pointing down */}
              <div className="hidden lg:flex justify-between px-8 mb-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="flex justify-center w-1/4">
                    <ArrowDown className="w-6 h-6 text-primary" />
                  </div>
                ))}
              </div>
              
              {/* Mobile arrows */}
              <div className="lg:hidden flex justify-center mb-4">
                <ArrowDown className="w-6 h-6 text-primary" />
              </div>
              
              {/* Subsidiary Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 lg:pt-4">
                {subsidiariesData.map((sub) => (
                  <div key={sub.id} className="flex flex-col">
                    {/* Card Header */}
                    <div className="bg-accent/40 border border-accent rounded-t-lg p-4 text-center flex-grow">
                      <h4 className="font-heading text-sm md:text-base font-bold text-primary mb-1">
                        {sub.shortName}
                      </h4>
                      <p className="text-xs md:text-sm text-foreground/80 mb-3">
                        ({sub.ownership})
                      </p>
                      <a 
                        href={sub.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-accent rounded-full text-xs text-primary hover:bg-accent/20 transition-colors"
                      >
                        View Website
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    
                    {/* Focus Summary */}
                    <div className="bg-accent/20 border border-t-0 border-accent rounded-b-lg p-3 text-center">
                      <p className="text-xs md:text-sm text-foreground/90 leading-relaxed">
                        {sub.focusSummary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom connecting lines to future sections */}
            <div className="flex justify-center mt-8">
              <ArrowDown className="w-8 h-8 text-primary" />
            </div>
            
            {/* Bottom horizontal line indicating continuation */}
            <div className="relative mt-4">
              <div className="h-px bg-primary w-full" />
              <div className="flex justify-around mt-4">
                <div className="w-1/3">
                  <div className="flex justify-center mb-2">
                    <ArrowDown className="w-6 h-6 text-primary" />
                  </div>
                  <div className="bg-accent/30 border border-accent rounded-lg p-3 text-center">
                    <p className="text-xs md:text-sm text-foreground/80">Farmer Empowerment Programs</p>
                  </div>
                </div>
                <div className="w-1/3 mx-2">
                  <div className="flex justify-center mb-2">
                    <ArrowDown className="w-6 h-6 text-primary" />
                  </div>
                  <div className="bg-accent/30 border border-accent rounded-lg p-3 text-center">
                    <p className="text-xs md:text-sm text-foreground/80">Sustainable Agriculture Initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <Card key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/30 text-primary mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Our Story" centered={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2016, Kisaan Parivar emerged from a vision to create a sustainable agricultural ecosystem that places farmers at the center of agricultural development. Our founders, with decades of experience in agriculture and rural development, recognized the need for an integrated approach that combines traditional wisdom with modern practices.
                </p>
                <p>
                  Today, we operate across 12 Indian states, supporting over 50,000 farmers through our comprehensive programs that span from seed selection to market access. Our commitment to organic farming and sustainable practices has earned us recognition from government bodies and international certification agencies.
                </p>
                <p>
                  We believe that the future of Indian agriculture lies in empowering farmers with knowledge, resources, and market access while preserving our rich biodiversity and agricultural heritage.
                </p>
              </div>
            </div>
            <div className="bg-primary rounded-lg p-8 text-primary-foreground">
              <h3 className="font-heading text-2xl font-semibold mb-6">Our Commitments</h3>
              <ul className="space-y-4">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-primary-foreground/90">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted">
        <div className="container-gov">
          <SectionTitle 
            title="Our Journey" 
            subtitle="Key milestones in our pursuit of agricultural excellence"
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="inline-block max-w-md">
                      <div className="text-primary font-heading text-2xl font-bold mb-1">
                        {milestone.year}
                      </div>
                      <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-gov text-center">
          <h2 className="font-heading text-3xl font-semibold text-primary mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-primary/80 max-w-2xl mx-auto mb-6">
            Learn about the experienced professionals driving Kisaan Parivar's mission.
          </p>
          <Link to="/about/core-team">
            <Button className="bg-primary text-primary-foreground">
              View Core Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
