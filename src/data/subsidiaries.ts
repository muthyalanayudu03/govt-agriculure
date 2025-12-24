export interface Subsidiary {
  id: number;
  name: string;
  shortName: string;
  description: string;
  focus: string[];
  established: string;
  icon: string;
  website: string;
  ownership: string;
  focusSummary: string;
}

export const subsidiariesData: Subsidiary[] = [
  {
    id: 1,
    name: "Broadway Agri Ecom Tech Private Limited",
    shortName: "Broadway Agri Ecom Tech Pvt. Ltd.",
    description: "B2B Model and E-Com Solutions – Cluster of stock delivery points both for Kisaan Parivar Group and other E-com majors.",
    focus: [
      "Agricultural E-commerce Platforms",
      "Digital Marketplace Solutions",
      "Farm-to-Consumer Technology",
      "Supply Chain Digitization"
    ],
    established: "2018",
    icon: "laptop",
    website: "https://broadwayagri.com/",
    ownership: "90% Subsidiary Company",
    focusSummary: "B2B Model and E-Com Solutions – Cluster of stock delivery points both for Kisaan Parivar Group and other E-com majors"
  },
  {
    id: 2,
    name: "Sailaja Sree Retail Marts Private Limited",
    shortName: "Sailaja Sree Retail Marts Pvt. Ltd.",
    description: "Diversified Retail Stores – Focus on Semi-Rural and Rural, Tier-II and III Areas.",
    focus: [
      "Organic Retail Stores",
      "Farm-Fresh Products",
      "Consumer Direct Sales",
      "Quality Assurance"
    ],
    established: "2019",
    icon: "store",
    website: "https://sailajasreeretail.com/",
    ownership: "90% Subsidiary Company",
    focusSummary: "Diversified Retail Stores – Focus on Semi-Rural and Rural, Tier-II and III Areas"
  },
  {
    id: 3,
    name: "NPN Agri & Logistics Private Limited",
    shortName: "NPN Agri & Logistics Pvt. Ltd.",
    description: "Processing, Sale Distribution on Wholesale and B2B model for Agri and other allied products with warehouses, cold storages.",
    focus: [
      "Cold Chain Logistics",
      "Agricultural Transport",
      "Warehouse Management",
      "Supply Chain Solutions"
    ],
    established: "2020",
    icon: "truck",
    website: "https://npnagri.com/",
    ownership: "90% Subsidiary Company",
    focusSummary: "Processing, Sale Distribution on Wholesale and B2B model for Agri and other allied products with warehouses, cold storages"
  },
  {
    id: 4,
    name: "Kisaan Parivar Mart Private Limited",
    shortName: "Kisaan Parivar Mart Pvt. Ltd.",
    description: "Specialty Retail Stores – Focus on Urban and Tier-I Cities.",
    focus: [
      "KP E-Mart Operations",
      "Wholesale Distribution",
      "Farmer Partnership Programs",
      "Product Quality Control"
    ],
    established: "2017",
    icon: "shopping-cart",
    website: "https://www.kpemart.com/",
    ownership: "Wholly owned Subsidiary Company",
    focusSummary: "Specialty Retail Stores – Focus on Urban and Tier-I Cities"
  }
];
