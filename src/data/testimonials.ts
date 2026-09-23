export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  title: string;
  quote: string;
  rating: number;
  avatar: string;
  bgLight?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "alex-johnson",
    name: "Alex Johnson",
    role: "Lead engineer",
    company: "Apex Refining Group",
    title: "Great work!",
    quote: "The structural welding work was completed with exceptional precision and professionalism. Every weld met our specifications, and the project was delivered on schedule. The team safety throughout the entire process was second to none.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    bgLight: false
  },
  {
    id: "sophia-collins",
    name: "Sophia Collins",
    role: "Project manager",
    company: "Nexus Structural Engineering",
    title: "Precision & quality",
    quote: "We contracted this team for a large-scale structural project involving high-tolerance steel framing. Not only was the weld penetration very strict safety protocol on-site was equally impressive , and a clear focus on compliance.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
    bgLight: true
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Operations director",
    company: "Vanguard Civil Works",
    title: "Highly reliable team",
    quote: "Reliability is the most important factor for us when choosing a sub-contractor. We've worked with this crew on multiple commercial builds, and they consistently deliver code-compliant welds with both structural and regulatory perfection.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
    bgLight: false
  },
  {
    id: "david-chen",
    name: "David Chen",
    role: "Principal architect",
    company: "Chen & Partners Architecture",
    title: "Outstanding results",
    quote: "Our startup needed a series of aluminum prototypes for a new automotive cooling system, and the geometry was incredibly challenging. Most shops turned us down, citing the complexity and tight tolerances required and innovative work.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
    bgLight: true
  }
];
