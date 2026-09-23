export interface GalleryItem {
  id: string;
  title: string;
  category: "Structural" | "Piping" | "Custom Fabrication" | "Industrial";
  client: string;
  location: string;
  year: string;
  image: string;
  images: string[];
  tags: string[];
  description: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}

export const galleryItems: GalleryItem[] = [
  {
    id: "on-site-emergency-welding",
    title: "On-site Emergency Welding",
    category: "Industrial",
    client: "Apex Refining Corp",
    location: "Rotterdam, Netherlands",
    year: "2025",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b63c9a5ef69d3854c1fc_Project%20Big%20Img%2001(1).png",
    images: [
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b63c9a5ef69d3854c1fc_Project%20Big%20Img%2001(1).png",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Metal repair", "Pipe welding", "Steel cutting"],
    description: "Emergency high-pressure pipeline fracture repair completed within 14 hours, preventing plant shutdown with 100% radiographic weld pass.",
    aspectRatio: "landscape"
  },
  {
    id: "custom-metal-fabrication",
    title: "Custom Metal Fabrication",
    category: "Custom Fabrication",
    client: "Nexus Infrastructure",
    location: "London, United Kingdom",
    year: "2025",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8bc1585c5fb243a0bc0_Project%20Big%20Img%2002.png",
    images: [
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8bc1585c5fb243a0bc0_Project%20Big%20Img%2002.png",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bbae8b2b4040e772c997_Metal%20fabrication.png",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Fabrication", "Industrial", "Welding"],
    description: "Multi-axis CNC bent and welded structural modules for an automated distribution center spanning 45,000 sq meters.",
    aspectRatio: "landscape"
  },
  {
    id: "heavy-duty-pipe-welding",
    title: "Heavy-Duty Pipe Welding",
    category: "Piping",
    client: "Statoil Gas Terminal",
    location: "Bergen, Norway",
    year: "2024",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8e7b4a2bee79d42f92e_Project%20Big%20Img%2003.png",
    images: [
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8e7b4a2bee79d42f92e_Project%20Big%20Img%2003.png",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b63c9a5ef69d3854c1fc_Project%20Big%20Img%2001(1).png",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Exhaust systems", "Stainless steel", "TIG welding"],
    description: "Duplex stainless steel process piping network operating at cryogenic temperatures with full ultrasonic verification.",
    aspectRatio: "landscape"
  },
  {
    id: "structural-steel-framework",
    title: "Structural Steel Framework",
    category: "Structural",
    client: "Vanguard Sky Tower",
    location: "Frankfurt, Germany",
    year: "2024",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b90cc7c9692668f36a8f_Project%20Big%20Img%2004.png",
    images: [
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b90cc7c9692668f36a8f_Project%20Big%20Img%2004.png",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bba310af0e29540ec79f_Structural%20welding.png",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Precision grind", "Custom fixtures", "Production"],
    description: "High-tolerance cantilevered steel roof trusses and node connectors supporting an 80-meter architectural glass atrium.",
    aspectRatio: "landscape"
  },
  {
    id: "subsea-manifold-skid",
    title: "Subsea Manifold Skid Assembly",
    category: "Industrial",
    client: "Nordic Deep Offshore",
    location: "Stavanger, Norway",
    year: "2025",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b63c9a5ef69d3854c1fc_Project%20Big%20Img%2001(1).png",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8e7b4a2bee79d42f92e_Project%20Big%20Img%2003.png"
    ],
    tags: ["Subsea", "ASME IX", "Super Duplex"],
    description: "Heavy structural base skid engineered for 3,000-meter water depth hydrostatic pressures with C5-M marine anti-corrosion coating.",
    aspectRatio: "square"
  },
  {
    id: "architectural-monumental-stairs",
    title: "Monumental Helical Staircase",
    category: "Custom Fabrication",
    client: "Aethel Headquarters",
    location: "Manchester, UK",
    year: "2024",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8bc1585c5fb243a0bc0_Project%20Big%20Img%2002.png",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b90cc7c9692668f36a8f_Project%20Big%20Img%2004.png",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Architectural", "Corten Steel", "Mirror Finish"],
    description: "Seamless double-curved plate steel stringers with concealed weld seams and integrated LED recessed wiring channels.",
    aspectRatio: "portrait"
  },
  {
    id: "thermal-energy-vessels",
    title: "Thermal Energy Pressure Vessels",
    category: "Piping",
    client: "Solaris Power Gen",
    location: "Seville, Spain",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b8e7b4a2bee79d42f92e_Project%20Big%20Img%2003.png",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b63c9a5ef69d3854c1fc_Project%20Big%20Img%2001(1).png"
    ],
    tags: ["ASME VIII", "Pressure Vessel", "Molten Salt"],
    description: "High-temperature alloy storage vessels engineered for 565°C continuous operating temperatures in concentrated solar plants.",
    aspectRatio: "landscape"
  },
  {
    id: "robotic-welding-gantry",
    title: "Automated Rail Gantry System",
    category: "Structural",
    client: "EuroRail Transit Systems",
    location: "Lyon, France",
    year: "2025",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05b90cc7c9692668f36a8f_Project%20Big%20Img%2004.png",
      "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
      "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bba310af0e29540ec79f_Structural%20welding.png",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
    ],
    tags: ["Rail Infrastructure", "EN 15085", "Heavy Girders"],
    description: "Electrified high-speed rail overhead gantries built to extreme dynamic vibration fatigue life requirements of 100+ years.",
    aspectRatio: "landscape"
  }
];
