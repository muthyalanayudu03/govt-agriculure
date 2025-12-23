export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface VideoItem {
  id: number;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const galleryCategories = [
  "All",
  "KP E-Mart",
  "Import & Export",
  "Storage Facilities",
  "Organic Products"
];

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "KP E-Mart Flagship Store",
    category: "KP E-Mart",
    image: "/gallery/emart-1.jpg",
    description: "Our flagship retail store offering premium organic products."
  },
  {
    id: 2,
    title: "Export Quality Packaging",
    category: "Import & Export",
    image: "/gallery/export-1.jpg",
    description: "State-of-the-art packaging facility for export products."
  },
  {
    id: 3,
    title: "Cold Storage Unit",
    category: "Storage Facilities",
    image: "/gallery/storage-1.jpg",
    description: "Temperature-controlled storage ensuring product freshness."
  },
  {
    id: 4,
    title: "Organic Rice Collection",
    category: "Organic Products",
    image: "/gallery/organic-1.jpg",
    description: "Premium organic rice varieties from certified farms."
  },
  {
    id: 5,
    title: "E-Mart Customer Zone",
    category: "KP E-Mart",
    image: "/gallery/emart-2.jpg",
    description: "Customer-friendly shopping experience."
  },
  {
    id: 6,
    title: "International Shipment",
    category: "Import & Export",
    image: "/gallery/export-2.jpg",
    description: "Container loading for international markets."
  },
  {
    id: 7,
    title: "Warehouse Operations",
    category: "Storage Facilities",
    image: "/gallery/storage-2.jpg",
    description: "Efficient warehouse management systems."
  },
  {
    id: 8,
    title: "Organic Spices Range",
    category: "Organic Products",
    image: "/gallery/organic-2.jpg",
    description: "Authentic organic spices collection."
  }
];

export const videosData: VideoItem[] = [
  {
    id: 1,
    title: "Our Journey - Kisaan Parivar Documentary",
    thumbnail: "/videos/thumb-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "12:45"
  },
  {
    id: 2,
    title: "Organic Farming Practices",
    thumbnail: "/videos/thumb-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "8:30"
  },
  {
    id: 3,
    title: "Farmer Success Stories",
    thumbnail: "/videos/thumb-3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "15:20"
  },
  {
    id: 4,
    title: "Export Operations Overview",
    thumbnail: "/videos/thumb-4.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    duration: "10:15"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Farmer, Telangana",
    content: "Kisaan Parivar transformed my farming practices. With their guidance on organic methods, my income has doubled while my land remains healthy.",
    image: "/testimonials/farmer-1.jpg"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "Agricultural Scientist",
    content: "The scientific approach to sustainable agriculture practiced by Kisaan Parivar is commendable and aligned with modern agricultural research.",
    image: "/testimonials/scientist-1.jpg"
  },
  {
    id: 3,
    name: "Venkat Reddy",
    role: "Export Partner",
    content: "Quality and consistency are hallmarks of Kisaan Parivar products. Our international clients always appreciate their organic produce.",
    image: "/testimonials/partner-1.jpg"
  }
];
