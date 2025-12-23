export interface SliderItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export const sliderData: SliderItem[] = [
  {
    id: 1,
    title: "Empowering Indian Farmers",
    subtitle: "Sustainable Agriculture for a Better Tomorrow",
    description: "Supporting over 50,000 farmers across 12 states with modern agricultural practices and organic farming solutions.",
    image: "/hero-agriculture.jpg"
  },
  {
    id: 2,
    title: "Organic Farming Excellence",
    subtitle: "Certified Organic Products for Global Markets",
    description: "ISO 9001:2015 certified operations delivering premium quality organic produce to international markets.",
    image: "/hero-organic.jpg"
  },
  {
    id: 3,
    title: "Food Security Mission",
    subtitle: "From Farm to Table, Quality Assured",
    description: "End-to-end supply chain management ensuring fresh, nutritious food reaches every household.",
    image: "/hero-food.jpg"
  }
];

export const statsData: StatItem[] = [
  { id: 1, value: "50,000+", label: "Farmers Empowered", icon: "users" },
  { id: 2, value: "12", label: "States Covered", icon: "map" },
  { id: 3, value: "100+", label: "Organic Products", icon: "leaf" },
  { id: 4, value: "15+", label: "Years of Excellence", icon: "award" }
];

export const aboutPreview = {
  title: "Building a Sustainable Agricultural Ecosystem",
  description: "Kisaan Parivar is committed to transforming Indian agriculture through sustainable practices, farmer empowerment, and innovative solutions. Our mission aligns with national food security goals while promoting biodiversity and organic farming.",
  points: [
    "Government-aligned agricultural initiatives",
    "Certified organic farming practices",
    "End-to-end farmer support programs",
    "Export-grade quality assurance"
  ]
};

export const servicesPreview = [
  {
    id: 1,
    title: "Corporate Cultivation",
    description: "Large-scale sustainable farming partnerships with corporate entities.",
    icon: "building"
  },
  {
    id: 2,
    title: "Organic Farming",
    description: "Certified organic agricultural practices and training programs.",
    icon: "sprout"
  },
  {
    id: 3,
    title: "Import & Export",
    description: "Global trade facilitation for agricultural products.",
    icon: "globe"
  },
  {
    id: 4,
    title: "Organic Foods",
    description: "Premium organic food products for domestic and international markets.",
    icon: "apple"
  }
];
