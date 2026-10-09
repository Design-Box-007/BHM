export interface Product {
  id: string;
  name: string;
  category: string;
  sku: string;
  tagline: string;
  description: string;
  material: string;
  tolerance: string;
  finish: string;
  image: string;
  features: string[];
  specs: Record<string, string>;
}

export const products: Product[] = [
  {
    id: "metal-fabrication",
    name: "Custom Metal Fabrication",
    category: "Custom Fabrication",
    sku: "BHMI-FAB-001",
    tagline: "Precision-engineered metal fabrication solutions combining cutting, forming, bending, welding, and assembly.",
    description: "From cutting and forming to certified welding and surface finishing, every project is engineered with structural integrity, dimensional accuracy, safety, and long-term durability in mind.",
    material: "Carbon Steel, Stainless Steel, Aluminum",
    tolerance: "±0.5 mm dimensional accuracy",
    finish: "Mill / Primer / Powder Coated",
    image: "/images/service-metal-fabrication.jpg",
    features: [
      "Structural steel fabrication to exact project drawings",
      "Custom metal components and architectural assemblies",
      "Precision CNC bending, rolling, and forming",
      "Certified MIG, TIG & ARC structural welding"
    ],
    specs: {
      "Capabilities": "Cutting, Bending, Welding, Assembly",
      "Quality Control": "100% Dimensional & Visual Inspection",
      "Standards": "AWS / ISO Compliant Fabrication",
      "Turnaround": "Fast turnaround with material test certs"
    }
  },
  {
    id: "metal-cutting",
    name: "Precision Metal Cutting",
    category: "Precision Cutting",
    sku: "BHMI-CUT-002",
    tagline: "High-accuracy metal cutting using advanced CNC fiber laser and high-definition plasma machinery.",
    description: "Equipped with modern CNC plasma, laser, and precision sawing machinery to cut plates, sheets, tubes, and structural sections with minimal kerf and tight tolerances.",
    material: "Steel Plate, Stainless Steel, Brass, Aluminum",
    tolerance: "±0.1 mm precision cutting",
    finish: "Clean Dross-Free Edge / Deburred",
    image: "/images/service-metal-cutting.jpg",
    features: [
      "CNC fiber laser & high-definition plasma cutting",
      "Precision dimensional plate cutting up to 50mm",
      "Automated CAD nesting for maximum material yield",
      "Clean-edge preparation ready for welding"
    ],
    specs: {
      "Technology": "CNC Fiber Laser & HD Plasma",
      "Cutting Capacity": "Up to 50mm plate thickness",
      "Accuracy": "±0.1 mm tolerance",
      "Profile Types": "Plates, Pipes, Tubes, Channels, Beams"
    }
  },
  {
    id: "blasting-coating",
    name: "Industrial Blasting & Coating",
    category: "Surface Treatment",
    sku: "BHMI-BLS-003",
    tagline: "Professional abrasive shot blasting and multi-layer anti-corrosion protective coatings.",
    description: "Surface preparation to Swedish SA 2.5 standard followed by multi-layer epoxy, polyurethane, or thermal protective coatings for marine, industrial, and outdoor steel structures.",
    material: "Structural Steel, Fabricated Vessels, Pipework",
    tolerance: "SA 2.5 / SSPC-SP 10 Profile",
    finish: "Zinc Primer + Epoxy Barrier + Polyurethane Topcoat",
    image: "/images/service-blasting-coating.jpg",
    features: [
      "Industrial abrasive & shot blasting to ISO/SSPC standards",
      "Multi-coat anti-corrosion protection for C3, C4, C5-M marine exposure",
      "Controlled climate coating booths ensuring optimal curing",
      "Dry film thickness (DFT) and cross-hatch adhesion verification"
    ],
    specs: {
      "Blasting Standard": "SA 2.5 Near-White Blast",
      "Coating Types": "Zinc Rich, Epoxy, Polyurethane, Polyaspartic",
      "Inspection": "DFT Gauge, Cross-Hatch, Holiday Test",
      "Durability": "Up to 15-Year Marine Grade Protection"
    }
  },
  {
    id: "cnc-machining",
    name: "Precision CNC Machining",
    category: "Precision Machining",
    sku: "BHMI-CNC-004",
    tagline: "Multi-axis CNC milling and turning for tight-tolerance complex engineering components.",
    description: "Utilizing modern multi-axis CNC milling, turning centers, and precision boring tools to produce complex mechanical parts, flanges, shafts, and custom fixtures with repeatable accuracy.",
    material: "Alloy Steel, Stainless Steel 316, Brass, Bronze, Aluminum",
    tolerance: "±0.01 mm metrology tolerance",
    finish: "Ra < 0.4µm Precision Machined / Ground",
    image: "/images/service-cnc-machining.jpg",
    features: [
      "Tight-tolerance multi-axis CNC milling and turning",
      "Complex geometric component manufacturing",
      "CMM metrology and optical coordinate verification",
      "Prototype development through high-volume production"
    ],
    specs: {
      "Machining Accuracy": "±0.01 mm tolerance",
      "Machining Types": "3-Axis & 4-Axis CNC Milling, Turning, Boring",
      "Materials": "Steel, Stainless, Aluminum, Brass, Bronze",
      "Inspection": "Micrometers, Bore Gauges, CMM Metrology"
    }
  },
  {
    id: "interior-home-decor",
    name: "Interior & Architectural Metalwork",
    category: "Architectural & Bespoke",
    sku: "BHMI-DEC-005",
    tagline: "Bespoke architectural metal fabrication, luxury interior partitions, furniture frames, and decor.",
    description: "Specialized in luxury metal accents, custom room dividers, architectural handrails, metal table bases, brass/bronze detailing, and bespoke residential/commercial interior installations.",
    material: "Stainless Steel 304/316, Mild Steel, Brass, Bronze",
    tolerance: "±0.5 mm architectural fit-up",
    finish: "PVD Gold / Matte Black / Brushed Brass / Antique Patina",
    image: "/images/service-interior-decor.jpg",
    features: [
      "Bespoke architectural metalwork tailored to CAD drawings",
      "Seamless welded corners and invisible fastener engineering",
      "High-end decorative finishes (PVD, brushed, patina, powder coat)",
      "Collaborative fit-out with interior designers and architects"
    ],
    specs: {
      "Products": "Furniture, Screens, Partitions, Handrails, Cladding",
      "Finishes": "Powder Coat, PVD, Electroplate, Brushed, Patina",
      "Materials": "Stainless 304/316, Mild Steel, Brass, Aluminum",
      "Applications": "Luxury Residential, Hospitality, Retail, Offices"
    }
  },
  {
    id: "welding-services",
    name: "Certified Welding Solutions",
    category: "Precision Welding",
    sku: "BHMI-WLD-006",
    tagline: "High-performance certified structural welding across MIG, TIG, ARC, and Flux-Cored processes.",
    description: "Comprehensive welding capabilities spanning MIG (GMAW), TIG (GTAW), Stick (SMAW), and Flux-Cored (FCAW) welding for heavy structural joints, pressure lines, and machinery assemblies.",
    material: "Carbon Steel, High-Tensile Steel, Stainless Steel, Aluminum Alloys",
    tolerance: "AWS D1.1 Full Penetration Standards",
    finish: "Dressed / Ground Smooth / Passivated",
    image: "/images/service-welding-services.jpg",
    features: [
      "Certified welders skilled in MIG, TIG, ARC, and FCAW processes",
      "Full-penetration welding for extreme structural integrity",
      "Mobile welding rigs available for on-site fabrication & repairs",
      "100% NDT inspection: Visual (VT), Dye Penetrant (PT), Ultrasonic (UT)"
    ],
    specs: {
      "Weld Processes": "MIG (GMAW), TIG (GTAW), Stick (SMAW), FCAW",
      "Materials": "Carbon Steel, Stainless Steel, Aluminum Alloys",
      "Testing": "Visual (VT), Dye Penetrant (PT), Ultrasonic (UT)",
      "Compliance": "AWS D1.1 Structural Welding Code"
    }
  }
];
