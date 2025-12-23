export interface Subsidiary {
  id: number;
  name: string;
  description: string;
  focus: string[];
  established: string;
  icon: string;
}

export const subsidiariesData: Subsidiary[] = [
  {
    id: 1,
    name: "Broadway Agri Ecom Tech Pvt Ltd",
    description: "Pioneering the integration of technology in agricultural commerce, Broadway Agri Ecom Tech develops innovative e-commerce solutions connecting farmers directly with consumers and businesses.",
    focus: [
      "Agricultural E-commerce Platforms",
      "Digital Marketplace Solutions",
      "Farm-to-Consumer Technology",
      "Supply Chain Digitization"
    ],
    established: "2018",
    icon: "laptop"
  },
  {
    id: 2,
    name: "Sailaja Sree Retail Marts Pvt Ltd",
    description: "Operating a chain of retail outlets specializing in organic and farm-fresh products, Sailaja Sree Retail Marts brings quality agricultural produce directly to urban consumers.",
    focus: [
      "Organic Retail Stores",
      "Farm-Fresh Products",
      "Consumer Direct Sales",
      "Quality Assurance"
    ],
    established: "2019",
    icon: "store"
  },
  {
    id: 3,
    name: "NPN Agri & Logistics Pvt Ltd",
    description: "Comprehensive agricultural logistics solutions ensuring timely and safe transportation of farm produce with temperature-controlled facilities and efficient supply chain management.",
    focus: [
      "Cold Chain Logistics",
      "Agricultural Transport",
      "Warehouse Management",
      "Supply Chain Solutions"
    ],
    established: "2020",
    icon: "truck"
  },
  {
    id: 4,
    name: "Kisaan Parivar Mart Pvt Ltd",
    description: "The flagship retail arm of the Kisaan Parivar group, operating KP E-Marts that serve as one-stop destinations for all agricultural and organic food products.",
    focus: [
      "KP E-Mart Operations",
      "Wholesale Distribution",
      "Farmer Partnership Programs",
      "Product Quality Control"
    ],
    established: "2017",
    icon: "shopping-cart"
  }
];
