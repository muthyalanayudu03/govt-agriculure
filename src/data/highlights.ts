export interface Highlight {
  id: number;
  title: string;
  description: string;
  icon: string;
  stats?: string;
}

export const highlightsData: Highlight[] = [
  {
    id: 1,
    title: "Biodiverse Agriculture",
    description: "Promoting crop diversity and sustainable farming practices that protect ecosystems while ensuring food security for future generations.",
    icon: "trees",
    stats: "500+ crop varieties"
  },
  {
    id: 2,
    title: "Organic Food Production",
    description: "FSSAI certified organic production facilities delivering chemical-free, nutritious food products to health-conscious consumers.",
    icon: "leaf",
    stats: "100% Chemical Free"
  },
  {
    id: 3,
    title: "Investor Profit Sustainability",
    description: "Transparent investment models ensuring sustainable returns while contributing to agricultural development and rural prosperity.",
    icon: "trending-up",
    stats: "15% Avg. Returns"
  },
  {
    id: 4,
    title: "Global Recognition",
    description: "Internationally acclaimed for quality standards, organic certifications, and commitment to sustainable agricultural practices.",
    icon: "award",
    stats: "12+ Certifications"
  }
];

export const trustPartners = [
  { id: 1, name: "Ministry of Agriculture", type: "Government" },
  { id: 2, name: "APEDA India", type: "Export Authority" },
  { id: 3, name: "FSSAI", type: "Food Safety" },
  { id: 4, name: "Organic Certification Bodies", type: "Quality Assurance" },
  { id: 5, name: "State Agricultural Universities", type: "Research Partner" },
  { id: 6, name: "Farmer Producer Organizations", type: "Community Partner" }
];
