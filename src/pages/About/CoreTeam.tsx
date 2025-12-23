import { useState, useEffect } from 'react';
import { Mail, Phone, Briefcase, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import { fetchTeamData } from '@/services/api';
import type { TeamMember } from '@/data/teamData';

const CoreTeam = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchTeamData();
        setTeam(data);
      } catch (error) {
        console.error('Error loading team data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

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
              Leadership
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Core Team
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Meet the experienced professionals driving Kisaan Parivar's mission of sustainable agricultural development and farmer empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-background">
        <div className="container-gov">
          <SectionTitle 
            title="Leadership & Management" 
            subtitle="Dedicated professionals with decades of experience in agriculture, business, and development"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="bg-muted h-48 flex items-center justify-center mb-4 rounded-md">
                  <div className="w-24 h-24 rounded-full bg-accent/30 flex items-center justify-center">
                    <span className="font-heading text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {member.designation}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <span>{member.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{member.experience} Experience</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm border-t border-border pt-4">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-muted">
        <div className="container-gov text-center">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-4">
            Connect With Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions about partnerships, investments, or our programs? Our team is ready to assist you.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="mailto:info@kisaanparivar.com"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoreTeam;
