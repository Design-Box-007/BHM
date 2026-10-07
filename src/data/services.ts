export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  headline: string;
  description: string;
  details: string;
  image: string;
  secondaryImage: string;
  tags: string[];
  serviceUsDescription: string;
  serviceUsBullets: string[];
  steps: ServiceStep[];
  whyChooseBullets: string[];
  capabilities: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export const services: Service[] = [
  {
    id: "metal-fabrication",
    number: "01",
    title: "Metal Fabrication",
    category: "Custom Fabrication",
    headline: "Custom Metal Fabrication",
    description: "Precision-engineered metal fabrication solutions combining cutting, forming, bending, welding, and assembly to produce durable components for industrial, commercial, and architectural applications.",
    details: "From cutting and forming to certified welding and surface finishing, every project is engineered with structural integrity, dimensional accuracy, safety, and long-term durability in mind.",
    image: "/images/service-metal-fabrication.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    tags: ["Custom Fabrication", "Precision", "Heavy-Duty"],
    serviceUsDescription: "Precision-engineered metal fabrication solutions combining cutting, forming, bending, welding, and assembly to produce durable components for industrial, commercial, and architectural applications.",
    serviceUsBullets: [
      "Structural steel fabrication",
      "Custom metal components",
      "Precision cutting & forming",
      "MIG, TIG & ARC welding"
    ],
    steps: [
      {
        number: "Step 01",
        title: "Engineering & Material Selection",
        description: "We review technical drawings, specifications, and select optimal metal grades."
      },
      {
        number: "Step 02",
        title: "Cutting, Forming & Assembly",
        description: "Precision cutting and forming followed by certified welding and fit-up."
      },
      {
        number: "Step 03",
        title: "Finishing & Quality Inspection",
        description: "Final quality checks, surface dressing, and comprehensive dimensional verification."
      }
    ],
    whyChooseBullets: [
      "Custom fabrication to exact project drawings",
      "Skilled craftsmen & certified welders",
      "Modern CNC equipment & forming machinery",
      "High dimensional accuracy & structural integrity",
      "Strict safety and quality standards",
      "Turnkey delivery across the UAE"
    ],
    capabilities: [
      "Structural steel fabrication",
      "Custom metal components",
      "Precision cutting & forming",
      "MIG, TIG & ARC welding"
    ],
    specs: [
      { label: "Capabilities", value: "Cutting, Bending, Welding, Assembly" },
      { label: "Materials", value: "Carbon Steel, Stainless Steel, Aluminum" },
      { label: "Quality Control", value: "100% Dimensional & Visual Inspection" },
      { label: "Standards", value: "AWS / ISO Compliant Fabrication" }
    ]
  },
  {
    id: "metal-cutting",
    number: "02",
    title: "Metal Cutting",
    category: "Precision Cutting",
    headline: "Precision Metal Cutting",
    description: "High-accuracy metal cutting services using advanced machinery to achieve clean edges, precise dimensions, and consistent results across structural and custom fabrication projects.",
    details: "Equipped with modern CNC plasma, laser, and precision sawing machinery to cut plates, sheets, tubes, and structural sections with minimal kerf and tight tolerances.",
    image: "/images/service-metal-cutting.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    tags: ["CNC Laser", "Plasma Cutting", "Clean Edge"],
    serviceUsDescription: "High-accuracy metal cutting services using advanced machinery to achieve clean edges, precise dimensions, and consistent results across structural and custom fabrication projects.",
    serviceUsBullets: [
      "CNC plasma & laser cutting",
      "Precision dimensional cutting",
      "Steel plate & section cutting",
      "Clean-edge preparation"
    ],
    steps: [
      {
        number: "Step 01",
        title: "CAD File Import & Nesting",
        description: "Importing CAD drawings into automated nesting software for maximum yield."
      },
      {
        number: "Step 02",
        title: "High-Precision Cutting",
        description: "CNC plasma or laser cutting with controlled speeds and clean kerf profiles."
      },
      {
        number: "Step 03",
        title: "Edge Dressing & Deburring",
        description: "Removal of dross and micro-burrs for ready-to-weld or ready-to-assemble edges."
      }
    ],
    whyChooseBullets: [
      "Tight dimensional tolerances and repeatable accuracy",
      "Clean-edge preparation minimizing secondary grinding",
      "Handles heavy steel plates and thin gauge sheets",
      "Optimized nesting for cost efficiency",
      "Rapid turnaround on urgent cutting requirements",
      "Comprehensive material traceability"
    ],
    capabilities: [
      "CNC plasma & laser cutting",
      "Precision dimensional cutting",
      "Steel plate & section cutting",
      "Clean-edge preparation"
    ],
    specs: [
      { label: "Technology", value: "CNC Fiber Laser & High-Definition Plasma" },
      { label: "Cutting Capacity", value: "Up to 50mm plate thickness" },
      { label: "Accuracy", value: "±0.1 mm precision" },
      { label: "Profile Types", value: "Plates, Pipes, Tubes, Channels, Beams" }
    ]
  },
  {
    id: "blasting-coating",
    number: "03",
    title: "Blasting & Coating",
    category: "Surface Treatment",
    headline: "Industrial Blasting & Protective Coating",
    description: "Professional surface preparation and protective coating solutions designed to remove contaminants, improve surface adhesion, and protect fabricated steel against corrosion and environmental exposure.",
    details: "Surface preparation to Swedish SA 2.5 standard followed by multi-layer epoxy, polyurethane, or thermal protective coatings for marine, industrial, and outdoor steel structures.",
    image: "/images/service-blasting-coating.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    tags: ["Abrasive Blasting", "Anti-Corrosion", "Protective Coating"],
    serviceUsDescription: "Professional surface preparation and protective coating solutions designed to remove contaminants, improve surface adhesion, and protect fabricated steel against corrosion and environmental exposure.",
    serviceUsBullets: [
      "Abrasive & shot blasting",
      "Surface preparation & profiling",
      "Anti-corrosion coating",
      "Industrial protective coatings"
    ],
    steps: [
      {
        number: "Step 01",
        title: "Surface Inspection & Masking",
        description: "Assessment of base metal and precision masking of machined faces."
      },
      {
        number: "Step 02",
        title: "Abrasive Grit / Shot Blasting",
        description: "Blasting to SA 2.5 profile for maximum coating adhesion and anchor pattern."
      },
      {
        number: "Step 03",
        title: "Protective Primer & Topcoat",
        description: "Controlled application of zinc-rich primers, epoxy barrier, and polyurethane topcoats."
      }
    ],
    whyChooseBullets: [
      "Industrial abrasive & shot blasting to ISO/SSPC standards",
      "Multi-coat anti-corrosion protection for harsh environments",
      "Controlled climate coating booths ensuring optimal curing",
      "Dry film thickness (DFT) verification and adhesion testing",
      "Extended service life for outdoor and industrial steelwork",
      "Eco-friendly compliant disposal and containment"
    ],
    capabilities: [
      "Abrasive & shot blasting",
      "Surface preparation & profiling",
      "Anti-corrosion coating",
      "Industrial protective coatings"
    ],
    specs: [
      { label: "Blasting Standard", value: "SA 2.5 / SSPC-SP 10 Near-White" },
      { label: "Coating Types", value: "Zinc Primer, Epoxy, Polyurethane, Polyaspartic" },
      { label: "Inspection", value: "DFT Gauge, Cross-Hatch Adhesion, Holiday Test" },
      { label: "Environment", value: "C3, C4, C5-M Marine Grade Systems" }
    ]
  },
  {
    id: "cnc-machining",
    number: "04",
    title: "CNC Machining",
    category: "Precision Machining",
    headline: "Precision CNC Machining",
    description: "Advanced CNC machining services for producing complex metal components with tight tolerances, repeatable accuracy, and consistent dimensional quality for demanding engineering applications.",
    details: "Utilizing modern multi-axis CNC milling, turning centers, and precision boring tools to produce complex mechanical parts, flanges, shafts, and custom fixtures.",
    image: "/images/service-cnc-machining.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    tags: ["CNC Milling", "CNC Turning", "Tight Tolerance"],
    serviceUsDescription: "Advanced CNC machining services for producing complex metal components with tight tolerances, repeatable accuracy, and consistent dimensional quality for demanding engineering applications.",
    serviceUsBullets: [
      "CNC turning & milling",
      "Tight-tolerance machining",
      "Complex component manufacturing",
      "Precision drilling & finishing"
    ],
    steps: [
      {
        number: "Step 01",
        title: "CAM Programming & Simulation",
        description: "Generating multi-axis toolpaths and verifying clearance simulations in CAM."
      },
      {
        number: "Step 02",
        title: "Precision Machining Execution",
        description: "Multi-axis milling and turning using high-performance carbide tooling."
      },
      {
        number: "Step 03",
        title: "Metrology & CMM Inspection",
        description: "Rigorous dimensional verification and surface roughness testing."
      }
    ],
    whyChooseBullets: [
      "Tight-tolerance multi-axis CNC milling and turning",
      "Repeatable accuracy for both prototypes and batch production",
      "High surface finish quality and intricate geometric capabilities",
      "Experienced machinists and metrology engineers",
      "Full material certification and inspection reports",
      "Fast production turnaround times"
    ],
    capabilities: [
      "CNC turning & milling",
      "Tight-tolerance machining",
      "Complex component manufacturing",
      "Precision drilling & finishing"
    ],
    specs: [
      { label: "Machining Accuracy", value: "±0.01 mm tolerance" },
      { label: "Machining Types", value: "3-Axis & 4-Axis CNC Milling, Turning, Boring" },
      { label: "Materials", value: "Steel, Stainless, Aluminum, Brass, Bronze" },
      { label: "Inspection", value: "Micrometers, Bore Gauges, CMM Metrology" }
    ]
  },
  {
    id: "interior-home-decor",
    number: "05",
    title: "Interior & Home Décor",
    category: "Architectural & Bespoke",
    headline: "Custom Metalwork for Interiors",
    description: "Bespoke metal fabrication for interiors, furniture, architectural features, and home décor, combining precision manufacturing with refined finishes and contemporary design requirements.",
    details: "Specialized in luxury metal accents, custom room dividers, architectural handrails, metal table bases, brass/bronze detailing, and bespoke residential/commercial interior installations.",
    image: "/images/service-interior-decor.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
    tags: ["Bespoke Interior", "Architectural Metal", "Decor"],
    serviceUsDescription: "Bespoke metal fabrication for interiors, furniture, architectural features, and home décor, combining precision manufacturing with refined finishes and contemporary design requirements.",
    serviceUsBullets: [
      "Custom metal furniture",
      "Architectural metalwork",
      "Decorative metal elements",
      "Partitions, frames & fixtures"
    ],
    steps: [
      {
        number: "Step 01",
        title: "Design Concept & CAD Detailing",
        description: "Working with interior designers and architects to develop fabrication drawings."
      },
      {
        number: "Step 02",
        title: "Artisanal Metal Fabrication",
        description: "Handcrafted forming, seamless tig welding, and fine seam polishing."
      },
      {
        number: "Step 03",
        title: "Custom Finish & On-Site Fit-Out",
        description: "Application of powder coating, brushed brass, or patina followed by installation."
      }
    ],
    whyChooseBullets: [
      "Bespoke designs tailored to architectural drawings",
      "High-end finishes (matte black, brushed gold, brass, antique patina)",
      "Seamless welded corners and invisible fasteners",
      "Collaborative approach with architects and interior designers",
      "Durable premium materials built to last",
      "On-site installation and fitting across UAE"
    ],
    capabilities: [
      "Custom metal furniture",
      "Architectural metalwork",
      "Decorative metal elements",
      "Partitions, frames & fixtures"
    ],
    specs: [
      { label: "Products", value: "Furniture, Screens, Partitions, Handrails, Cladding" },
      { label: "Finishes", value: "Powder Coat, PVD, Electroplate, Brushed, Patina" },
      { label: "Materials", value: "Stainless Steel 304/316, Mild Steel, Brass, Aluminum" },
      { label: "Applications", value: "Luxury Residential, Hospitality, Retail, Offices" }
    ]
  },
  {
    id: "welding-services",
    number: "06",
    title: "Welding Services",
    category: "Precision Welding",
    headline: "Precision Welding Solutions",
    description: "High-performance welding services engineered for structural integrity, dimensional accuracy, and long-term durability across industrial, construction, commercial, and custom fabrication projects.",
    details: "Comprehensive welding capabilities spanning MIG (GMAW), TIG (GTAW), Stick (SMAW), and Flux-Cored (FCAW) welding for heavy structural joints, pressure lines, and machinery assemblies.",
    image: "/images/service-welding-services.jpg",
    secondaryImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    tags: ["MIG/TIG/ARC", "Structural Welding", "Heavy-Duty"],
    serviceUsDescription: "High-performance welding services engineered for structural integrity, dimensional accuracy, and long-term durability across industrial, construction, commercial, and custom fabrication projects.",
    serviceUsBullets: [
      "MIG, TIG & ARC welding",
      "Structural steel welding",
      "Heavy-duty fabrication",
      "On-site welding & assembly"
    ],
    steps: [
      {
        number: "Step 01",
        title: "Joint Design & Weld Procedure",
        description: "Preparation of joint bevels and selection of certified welding procedure specifications."
      },
      {
        number: "Step 02",
        title: "Precision Welding Execution",
        description: "Execution by qualified welders using MIG, TIG, or ARC methods with strict heat control."
      },
      {
        number: "Step 03",
        title: "NDT & Quality Certification",
        description: "Visual, ultrasonic, and penetrant testing to ensure 100% defect-free welds."
      }
    ],
    whyChooseBullets: [
      "Certified welders with deep expertise in MIG, TIG & ARC methods",
      "Full penetration welding for heavy structural integrity",
      "Mobile welding rigs available for on-site installation and repairs",
      "Strict compliance with AWS D1.1 and international codes",
      "100% quality inspection and NDT testing capability",
      "Fast response for urgent industrial welding needs"
    ],
    capabilities: [
      "MIG, TIG & ARC welding",
      "Structural steel welding",
      "Heavy-duty fabrication",
      "On-site welding & assembly"
    ],
    specs: [
      { label: "Weld Processes", value: "MIG (GMAW), TIG (GTAW), Stick (SMAW), FCAW" },
      { label: "Materials", value: "Carbon Steel, Stainless Steel, Aluminum Alloys" },
      { label: "Testing", value: "Visual (VT), Dye Penetrant (PT), Ultrasonic (UT)" },
      { label: "Compliance", value: "AWS D1.1 Structural Welding Code" }
    ]
  }
];
