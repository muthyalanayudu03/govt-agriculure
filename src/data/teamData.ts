export interface TeamMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  experience: string;
  image: string;
  bio: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Shri Narasimha Rao",
    designation: "Chairman & Managing Director",
    department: "Executive Leadership",
    experience: "25+ Years",
    image: "/team/chairman.jpg",
    bio: "Visionary leader with extensive experience in agricultural development and sustainable farming initiatives."
  },
  {
    id: 2,
    name: "Dr. Lakshmi Devi",
    designation: "Director - Operations",
    department: "Operations",
    experience: "18 Years",
    image: "/team/director-ops.jpg",
    bio: "Expert in agricultural operations management and supply chain optimization."
  },
  {
    id: 3,
    name: "Shri Venkata Krishna",
    designation: "Director - Finance",
    department: "Finance & Accounts",
    experience: "20 Years",
    image: "/team/director-finance.jpg",
    bio: "Financial strategist with deep expertise in agricultural investments and sustainable business models."
  },
  {
    id: 4,
    name: "Dr. Ramesh Babu",
    designation: "Chief Agricultural Officer",
    department: "Agricultural Sciences",
    experience: "22 Years",
    image: "/team/cao.jpg",
    bio: "Agricultural scientist specializing in organic farming and biodiversity conservation."
  },
  {
    id: 5,
    name: "Smt. Padma Sundari",
    designation: "Director - Exports",
    department: "International Trade",
    experience: "15 Years",
    image: "/team/director-exports.jpg",
    bio: "International trade expert with extensive experience in agricultural exports to global markets."
  },
  {
    id: 6,
    name: "Shri Suresh Kumar",
    designation: "General Manager - Retail",
    department: "Retail Operations",
    experience: "12 Years",
    image: "/team/gm-retail.jpg",
    bio: "Retail management professional driving the expansion of KP E-Mart network."
  }
];
