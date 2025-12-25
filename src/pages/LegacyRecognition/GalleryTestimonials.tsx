import { useState, useEffect } from 'react';
import { Quote, Filter, X, Images, Camera, Store, Truck, Warehouse, Leaf } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionTitle from '@/components/common/SectionTitle';
import ShimmerSection from '@/components/shimmer/ShimmerSection';
import { fetchGalleryData } from '@/services/api';
import { GalleryItem, Testimonial, galleryCategories } from '@/data/galleryData';

// Import farming images
import farmingHarvest from '@/assets/farming-harvest.jpg';
import tractorFarming from '@/assets/tractor-farming.jpg';
import cowsGrazing from '@/assets/cows-grazing.jpg';
import organicFarmAerial from '@/assets/organic-farm-aerial.jpg';

const galleryImages: Record<string, string> = {
  'KP E-Mart': farmingHarvest,
  'Import & Export': tractorFarming,
  'Storage Facilities': cowsGrazing,
  'Organic Products': organicFarmAerial
};

const categoryIcons: Record<string, React.ReactNode> = {
  'All': <Images className="w-4 h-4" />,
  'KP E-Mart': <Store className="w-4 h-4" />,
  'Import & Export': <Truck className="w-4 h-4" />,
  'Storage Facilities': <Warehouse className="w-4 h-4" />,
  'Organic Products': <Leaf className="w-4 h-4" />
};

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
      <Layout>
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
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumb />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mt-4 mb-3 sm:mb-4">
            Gallery & Testimonials
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-primary-foreground/80 max-w-3xl">
            Explore our journey through images and hear from the farmers and partners 
            who have been part of our mission for sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Gallery" 
            subtitle="Visual stories of our agricultural excellence and community impact"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-10">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium
                  transition-all duration-300 flex items-center gap-1.5 sm:gap-2
                  ${activeCategory === category 
                    ? 'bg-primary text-primary-foreground shadow-glass' 
                    : 'glass-card text-muted-foreground hover:bg-accent/20 hover:text-accent-foreground'
                  }
                `}
              >
                {categoryIcons[category]}
                <span className="hidden xs:inline">{category}</span>
                <span className="xs:hidden">{category === 'All' ? 'All' : category.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl glass-card
                  cursor-pointer transform transition-all duration-500 hover:shadow-glass-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={galleryImages[item.category] || farmingHarvest}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  <span className="text-[10px] sm:text-xs text-accent font-medium uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-primary-foreground font-semibold text-sm sm:text-base lg:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/80 text-xs sm:text-sm mt-1 line-clamp-2 hidden sm:block">
                    {item.description}
                  </p>
                </div>
                {/* Mobile overlay - always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-primary/80 to-transparent sm:hidden">
                  <h3 className="text-primary-foreground font-medium text-xs truncate">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <Camera className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground text-base sm:text-lg">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 sm:py-14 lg:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What People Say" 
            subtitle="Testimonials from farmers, partners, and agricultural experts"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="relative glass-card rounded-xl p-5 sm:p-6 pt-8 sm:pt-10 hover:shadow-glass-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 sm:-top-5 left-5 sm:left-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary 
                  flex items-center justify-center shadow-glass">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent to-secondary 
                    flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm sm:text-base">
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
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 sm:py-14 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { value: '500+', label: 'Gallery Images' },
              { value: '1000+', label: 'Happy Farmers' },
              { value: '50+', label: 'Partner Organizations' },
              { value: '15+', label: 'Years of Excellence' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass rounded-lg p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-accent mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-primary-foreground/80">
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
          className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 
              rounded-full glass flex items-center justify-center transition-colors hover:bg-primary-foreground/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
          </button>
          
          <div 
            className="glass-card bg-card rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video">
              <img 
                src={galleryImages[selectedImage.category] || farmingHarvest}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <span className="text-xs text-primary font-medium uppercase tracking-wider bg-accent/20 px-2 py-1 rounded">
                {selectedImage.category}
              </span>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mt-2 sm:mt-3 mb-2 sm:mb-3">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GalleryTestimonials;