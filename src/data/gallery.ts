export interface GalleryItem {
  id: string;
  title: string;
  category: "Structural" | "Custom Fabrication" | "Stainless Steel" | "Industrial";
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
    id: "car-parking-shade",
    title: "Car Parking Shade",
    category: "Structural",
    client: "Metro Commercial Center",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Car%20Parking%20shade.png",
    images: ["/images/gallery/Car%20Parking%20shade.png"],
    tags: ["Tensile Steel", "Shade Structure", "Powder Coating"],
    description: "Heavy-duty tensile steel car parking shade engineered for high wind loads and UV protection.",
    aspectRatio: "square"
  },
  {
    id: "ms-diesel-tank",
    title: "MS Diesel Tank",
    category: "Industrial",
    client: "Industrial Logistics Depot",
    location: "Abu Dhabi, UAE",
    year: "2025",
    image: "/images/gallery/MS%20Diesel%20Tank.png",
    images: ["/images/gallery/MS%20Diesel%20Tank.png"],
    tags: ["Storage Tank", "Pressure Welded", "Mild Steel"],
    description: "Custom mild steel diesel storage tank with precision welded seams and pressure-tested integrity.",
    aspectRatio: "square"
  },
  {
    id: "pergola-classic",
    title: "Custom Metal Pergola",
    category: "Custom Fabrication",
    client: "Private Villa Estate",
    location: "Sharjah, UAE",
    year: "2025",
    image: "/images/gallery/Pergola_1.png",
    images: ["/images/gallery/Pergola_1.png"],
    tags: ["Architectural Pergola", "Laser Cut", "Custom Fabrication"],
    description: "Modern architectural steel pergola featuring laser-cut geometric canopy panels and powder coat finish.",
    aspectRatio: "square"
  },
  {
    id: "pergola-architectural",
    title: "Architectural Pergola Structure",
    category: "Custom Fabrication",
    client: "Luxury Hospitality Resort",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Pergola%202.jpeg",
    images: ["/images/gallery/Pergola%202.jpeg"],
    tags: ["Outdoor Canopy", "Steel Framework", "Modern Pergola"],
    description: "Precision-engineered outdoor steel pergola structure designed for commercial and residential spaces.",
    aspectRatio: "square"
  },
  {
    id: "pergola-modern",
    title: "Modern Steel Pergola",
    category: "Custom Fabrication",
    client: "Skyline Residential Complex",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Pergola%204.png",
    images: ["/images/gallery/Pergola%204.png"],
    tags: ["Steel Louvers", "Modular Pergola", "Architectural"],
    description: "Contemporary heavy-duty steel pergola with custom profile columns and integrated shade slats.",
    aspectRatio: "square"
  },
  {
    id: "pool-ladder-commercial",
    title: "Commercial Pool Ladder",
    category: "Stainless Steel",
    client: "Grand Oasis Hotel",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Pool%20Ladder%202.png",
    images: ["/images/gallery/Pool%20Ladder%202.png"],
    tags: ["SS316 Marine", "Mirror Polish", "Pool Access"],
    description: "Heavy-duty commercial grade pool access ladder manufactured with corrosion-resistant SS316 marine steel.",
    aspectRatio: "landscape"
  },
  {
    id: "pool-ladder-standard",
    title: "Stainless Steel Pool Ladder",
    category: "Stainless Steel",
    client: "Aquatic Recreation Center",
    location: "Ajman, UAE",
    year: "2024",
    image: "/images/gallery/Pool%20Ladder.png",
    images: ["/images/gallery/Pool%20Ladder.png"],
    tags: ["Anti-Slip", "Stainless Steel", "Aquatic Equipment"],
    description: "Grade 316 stainless steel swimming pool ladder with anti-slip tread steps and ergonomic safety handrails.",
    aspectRatio: "square"
  },
  {
    id: "tensile-shade-structure",
    title: "Tensile Shade Structure",
    category: "Structural",
    client: "Public Exhibition Plaza",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Shade.png",
    images: ["/images/gallery/Shade.png"],
    tags: ["Tensile Membrane", "Large Span", "Structural Steel"],
    description: "Large-span architectural tensile membrane steel frame structure for outdoor commercial coverage.",
    aspectRatio: "square"
  },
  {
    id: "ss-manhole-covers",
    title: "Stainless Steel Manhole Covers",
    category: "Stainless Steel",
    client: "Urban Infrastructure Project",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/SS_Manhole%20COvers.png",
    images: ["/images/gallery/SS_Manhole%20COvers.png"],
    tags: ["Recessed Cover", "SS304 / SS316", "Drainage & Access"],
    description: "Precision-fabricated stainless steel recessed manhole covers with flush fitting and heavy traffic load rating.",
    aspectRatio: "square"
  },
  {
    id: "stainless-steel-hoppers",
    title: "Stainless Steel Hoppers",
    category: "Industrial",
    client: "Apex Processing Plant",
    location: "Ras Al Khaimah, UAE",
    year: "2024",
    image: "/images/gallery/Stainless%20Steel%20Hoppers.jpeg",
    images: ["/images/gallery/Stainless%20Steel%20Hoppers.jpeg"],
    tags: ["Sanitary Grade", "Bulk Storage", "Industrial Hopper"],
    description: "Industrial sanitary-grade stainless steel hoppers designed for bulk material dispensing and chemical storage.",
    aspectRatio: "portrait"
  },
  {
    id: "stainless-steel-rack",
    title: "Stainless Steel Storage Rack",
    category: "Stainless Steel",
    client: "Cleanroom Pharma Facility",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Stainless%20Steel%20Rack.png",
    images: ["/images/gallery/Stainless%20Steel%20Rack.png"],
    tags: ["Cleanroom", "Storage Racks", "Heavy Duty"],
    description: "Custom modular stainless steel storage racking system built for heavy industrial and cleanroom storage.",
    aspectRatio: "landscape"
  },
  {
    id: "industrial-stair-ladder",
    title: "Industrial Stair & Access Ladder",
    category: "Structural",
    client: "Energy Utility Station",
    location: "Abu Dhabi, UAE",
    year: "2024",
    image: "/images/gallery/Stair%20LAdder.png",
    images: ["/images/gallery/Stair%20LAdder.png"],
    tags: ["OSHA Compliant", "Access Ladder", "Safety Handrails"],
    description: "OSHA-compliant heavy structural steel stair ladder with safety handrails and slip-resistant grated steps.",
    aspectRatio: "square"
  },
  {
    id: "steel-canopies",
    title: "Engineered Steel Canopies",
    category: "Structural",
    client: "Commercial Concourse",
    location: "Sharjah, UAE",
    year: "2025",
    image: "/images/gallery/Steel%20Canopies.jpeg",
    images: ["/images/gallery/Steel%20Canopies.jpeg"],
    tags: ["Cantilever Canopy", "Entrance Canopy", "Architectural"],
    description: "Cantilevered architectural steel entrance canopies engineered for high structural load resistance.",
    aspectRatio: "landscape"
  },
  {
    id: "steel-lv-cable-boxes",
    title: "Steel LV Cable Enclosure Boxes",
    category: "Industrial",
    client: "Substation Electrical Works",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Steel%20LV_Cable%20Boxes.jpeg",
    images: ["/images/gallery/Steel%20LV_Cable%20Boxes.jpeg"],
    tags: ["IP66 Enclosure", "Electrical Junction", "Sheet Metal"],
    description: "NEMA/IP rated low-voltage cable junction and enclosure boxes manufactured from treated sheet steel.",
    aspectRatio: "landscape"
  },
  {
    id: "steel-mobility-tower",
    title: "Steel Mobility Tower Structures",
    category: "Structural",
    client: "Telecommunications Authority",
    location: "Dubai, UAE",
    year: "2024",
    image: "/images/gallery/Steel%20Mobility%20Tower%20Structures.jpeg",
    images: ["/images/gallery/Steel%20Mobility%20Tower%20Structures.jpeg"],
    tags: ["Lattice Tower", "Hot-Dip Galvanized", "Telecom Structure"],
    description: "High-strength structural steel telecommunications and mobility lattice tower modules.",
    aspectRatio: "portrait"
  },
  {
    id: "steel-power-clamps",
    title: "Heavy-Duty Steel Power Clamps",
    category: "Industrial",
    client: "Heavy Rigging & Piping Co.",
    location: "Abu Dhabi, UAE",
    year: "2025",
    image: "/images/gallery/Steel%20Power%20Clamps.jpeg",
    images: ["/images/gallery/Steel%20Power%20Clamps.jpeg"],
    tags: ["Power Clamps", "Pipe Clamping", "Forged Steel"],
    description: "Precision forged and machined steel heavy power clamps for structural bonding and industrial pipelines.",
    aspectRatio: "landscape"
  },
  {
    id: "heavy-industrial-structure",
    title: "Heavy Industrial Steel Framework",
    category: "Structural",
    client: "Heavy Manufacturing Facility",
    location: "Dubai, UAE",
    year: "2025",
    image: "/images/gallery/Structure.png",
    images: ["/images/gallery/Structure.png"],
    tags: ["Structural Framework", "Heavy Beams", "Industrial Plant"],
    description: "Engineered heavy structural steel columns, beams, and bracing for heavy industrial plant construction.",
    aspectRatio: "square"
  },
  {
    id: "swimming-pool-ladders",
    title: "Swimming Pool Safety Ladders",
    category: "Stainless Steel",
    client: "Olympic Sports Center",
    location: "Dubai, UAE",
    year: "2024",
    image: "/images/gallery/Swimming%20pool%20Ladders.png",
    images: ["/images/gallery/Swimming%20pool%20Ladders.png"],
    tags: ["SS316", "Pool Safety", "Precision Bending"],
    description: "Certified safety stainless steel pool step ladders built for public aquatic venues with reinforced anchors.",
    aspectRatio: "square"
  }
];
