import { useState, useEffect } from 'react';
import { Quote, Filter, X } from 'lucide-react';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionTitle from '@/components/common/SectionTitle';
import Card from '@/components/common/Card';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import { fetchGalleryData } from '@/services/api';
import { GalleryItem, Testimonial, galleryCategories } from '@/data/galleryData';

const GalleryTestimonials = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchGalleryData();
        setGalleryItems(data.gallery);
        setTestimonials(data.testimonials);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredGallery = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-primary text-primary-foreground py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="animate-pulse">
              <div className="h-8 w-64 bg-primary-foreground/20 rounded mb-4" />
              <div className="h-4 w-96 bg-primary-foreground/20 rounded" />
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-12">
          <ShimmerSection count={8} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Gallery & Testimonials
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl">
            Explore our journey through images and hear from the farmers and partners 
            who have been part of our mission for sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Gallery" 
            subtitle="Visual stories of our agricultural excellence and community impact"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium
                  transition-all duration-300 flex items-center gap-2
                  ${activeCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }
                `}
              >
                {category === activeCategory && <Filter className="w-4 h-4" />}
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-card border border-border 
                  cursor-pointer transform transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <span className="text-primary-foreground/60 text-sm text-center px-4">
                      {item.title}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-primary-foreground font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What People Say" 
            subtitle="Testimonials from farmers, partners, and agricultural experts"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="relative bg-card"
                hover
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary 
                  flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>

                <div className="pt-6">
                  {/* Content */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-accent to-secondary 
                      flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '500+', label: 'Gallery Images' },
              { value: '1000+', label: 'Happy Farmers' },
              { value: '50+', label: 'Partner Organizations' },
              { value: '15+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 
              rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 
              flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </button>
          
          <div 
            className="bg-card rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
              <span className="text-primary-foreground/60 text-lg">
                {selectedImage.title}
              </span>
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2 mb-3">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryTestimonials;
