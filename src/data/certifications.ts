export interface Certification {
  id: number;
  name: string;
  code: string;
  description: string;
  icon: string;
}

export const certificationsData: Certification[] = [
  {
    id: 1,
    name: "ISO 9001:2015",
    code: "Quality Management",
    description: "International standard for quality management systems ensuring consistent quality delivery.",
    icon: "shield-check"
  },
  {
    id: 2,
    name: "IEC Certificate",
    code: "AAXCS9259B",
    description: "Import Export Code for international trade operations.",
    icon: "globe"
  },
  {
    id: 3,
    name: "Corporate Identity Number",
    code: "U01611TG2016PLC113575",
    description: "Registered under the Companies Act, 2013.",
    icon: "building"
  },
  {
    id: 4,
    name: "FSSAI License",
    code: "13621999000229",
    description: "Food Safety and Standards Authority of India certification.",
    icon: "badge-check"
  },
  {
    id: 5,
    name: "Organic Trade Certificate",
    code: "ORG/SC/2304/000860",
    description: "Certified organic trading and processing operations.",
    icon: "leaf"
  },
  {
    id: 6,
    name: "APEDA Registration",
    code: "IECODE: AAXCS9259B",
    description: "Agricultural and Processed Food Products Export Development Authority.",
    icon: "truck"
  }
];
