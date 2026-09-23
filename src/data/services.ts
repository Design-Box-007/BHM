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
    id: "structural-welding",
    number: "01",
    title: "Structural welding",
    category: "Heavy Engineering",
    headline: "High-strength, code-compliant welding engineered for durability and safety every weld is executed.",
    description: "Certified full-penetration welding for high-load commercial, industrial, and civil infrastructure. Our AWS D1.1 certified welders ensure every joint meets stringent ultrasonic and X-ray non-destructive testing benchmarks.",
    details: "From high-rise structural skeletons and seismic retrofitting to multi-span bridge assemblies, we engineer robust steel connections capable of withstanding dynamic tectonic and environmental loads.",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bba310af0e29540ec79f_Structural%20welding.png",
    secondaryImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    tags: ["Precision", "Heavy-Duty", "Fast Response"],
    serviceUsDescription: "We provide expert structural welding services designed to deliver strength, safety, and precision in every project. From steel frameworks and beams to heavy-duty structures.",
    serviceUsBullets: [
      "Beam & Column welding",
      "Steel frame assembly",
      "Heavy-duty structural repairs",
      "Seismic retrofitting & bracing",
      "On-site crane & bridge assembly",
      "Full penetration groove welds"
    ],
    steps: [
      {
        number: "Step 01",
        title: "Consultation",
        description: "We review your project requirements, technical drawings, engineering specifications, and load criteria."
      },
      {
        number: "Step 02",
        title: "Material preparation",
        description: "Our team prepares certified welding procedures (WPS), bevels joint surfaces, and preheats base steel."
      },
      {
        number: "Step 03",
        title: "Welding execution",
        description: "Certified welders perform the welding process using advanced FCAW/SMAW methods with full NDT inspection."
      }
    ],
    whyChooseBullets: [
      "Certified & Skilled welders (AWS D1.1)",
      "Industrial-grade equipment & tooling",
      "Strict safety & OSHA compliance",
      "On-time project completion guarantee",
      "Heavy industrial facility capacity",
      "100% ultrasonic non-destructive testing"
    ],
    capabilities: [
      "Certified structural fabrication",
      "Heavy-duty infrastructure",
      "On-Site precision assembly",
      "Custom metal solutions"
    ],
    specs: [
      { label: "Weld Codes", value: "AWS D1.1, D1.5 / EN 1090-2" },
      { label: "Steel Grades", value: "A36, A572, A992, Hardox 450" },
      { label: "Testing Methods", value: "UT, MT, PT, RT Non-Destructive" },
      { label: "Capacity", value: "Single-span assemblies up to 60 Tons" }
    ]
  },
  {
    id: "metal-fabrication",
    number: "02",
    title: "Metal fabrication",
    category: "Precision Manufacturing",
    headline: "Custom metal fabrication services including cutting, bending, assembling, and finishing.",
    description: "Equipped with state-of-the-art 12kW fiber lasers, 350-ton CNC press brakes, and 5-axis machining stations to turn raw sheet metal and structural plate into turnkey mechanical components with tight tolerances.",
    details: "We support both rapid single-unit prototyping and high-throughput production runs with automated nesting, repeatable precision, and turnkey surface passivation or powder coating.",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bbae8b2b4040e772c997_Metal%20fabrication.png",
    secondaryImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80",
    tags: ["CNC Precision", "Laser Cutting", "Custom Forming"],
    serviceUsDescription: "We provide comprehensive metal fabrication solutions designed to deliver unmatched precision, structural integrity, and repeatability across industrial sheet metal and plate components.",
    serviceUsBullets: [
      "Fiber laser profiling up to 50mm",
      "CNC 350-ton multi-axis bending",
      "Automated robotic seam welding",
      "Turnkey mechanical finishing",
      "Sheet metal enclosure manufacturing",
      "Surface passivation & powder coating"
    ],
    steps: [
      {
        number: "Step 01",
        title: "CAD Modeling & Nesting",
        description: "Our engineering team reviews 3D models and optimizes material utilization through automated nesting algorithms."
      },
      {
        number: "Step 02",
        title: "Precision Cutting & Bending",
        description: "High-power fiber lasers slice components with micron precision before CNC press brakes bend to exact angles."
      },
      {
        number: "Step 03",
        title: "Assembly & Surface Finishing",
        description: "Craftsmen weld, dress, deburr, and apply protective industrial coatings for long-term corrosion resistance."
      }
    ],
    whyChooseBullets: [
      "±0.05 mm precision laser tolerances",
      "Automated high-throughput CNC machinery",
      "Rapid turnaround on custom prototypes",
      "Full material mill test reports (MTR)",
      "Turnkey surface powder coating & plating",
      "ISO 9001:2015 quality certified workflows"
    ],
    capabilities: [
      "Precision laser & plasma cutting",
      "CNC bending & metal forming",
      "Full-scale structural assembly",
      "Surface treatment & finishing"
    ],
    specs: [
      { label: "Tolerance", value: "±0.05 mm (Laser & CNC)" },
      { label: "Max Plate Thickness", value: "Up to 50mm Carbon / 30mm Stainless" },
      { label: "Forming Length", value: "4.2m continuous CNC bend length" },
      { label: "Finishing", value: "Anodizing, E-coat, Zinc, Blast Sa 2.5" }
    ]
  },
  {
    id: "pipe-welding",
    number: "03",
    title: "Pipe welding",
    category: "Pressure & Process Systems",
    headline: "Precision pipe welding for industrial systems, utilities, and process piping with strict quality.",
    description: "ASME Section IX and API 1104 certified orbital and open-root pipe welding. Delivering continuous, slag-free, full-penetration joints across complex cryogenic and high-temperature piping networks.",
    details: "We specialize in challenging metallurgy including duplex stainless, titanium, Inconel 625, chrome-moly alloys, and high-purity pharmaceutical stainless tubing.",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bbbaf8a7539b8d66091f_Pipe%20welding.png",
    secondaryImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    tags: ["High-Pressure", "ASME Certified", "Orbital TIG"],
    serviceUsDescription: "We deliver certified high-pressure pipe welding for critical petrochemical, process chemical, energy, and pharmaceutical infrastructure requiring zero-leak reliability.",
    serviceUsBullets: [
      "ASME Section IX pressure piping",
      "Orbital TIG sanitary tubing",
      "Cryogenic & high-temperature lines",
      "Duplex stainless & Inconel welding",
      "API 1104 pipeline tie-ins",
      "Zero-defect root pass purging"
    ],
    steps: [
      {
        number: "Step 01",
        title: "P&ID Schematic Review",
        description: "We analyze piping schematics, pressure class specifications, and thermal expansion parameters."
      },
      {
        number: "Step 02",
        title: "Fit-Up & Purge Control",
        description: "Pipe ends are prepped, clamped with laser alignment, and backed by ultra-pure inert gas shielding."
      },
      {
        number: "Step 03",
        title: "GTAW/SMAW Root & Cap",
        description: "Master pipe welders deposit continuous full-penetration passes followed by 100% hydrostatic pressure testing."
      }
    ],
    whyChooseBullets: [
      "ASME Sec IX & API 1104 certified welders",
      "Hydrostatic pressure testing to 2500#",
      "Ultra-pure Argon purge control (<10ppm O2)",
      "Sanitary food & pharma polish finishes",
      "100% radiographic weld inspection",
      "24/7 emergency plant shutdown support"
    ],
    capabilities: [
      "High-strength structural welding",
      "Specialized alloy fabrication",
      "Reliable structural welding",
      "Iterative design support"
    ],
    specs: [
      { label: "Certifications", value: "ASME Sec IX, API 1104, B31.3" },
      { label: "Diameters", value: "1/4\" sanitary tube to 48\" heavy wall" },
      { label: "Purge Control", value: "Ultra-pure Argon trailing shields (<10ppm O2)" },
      { label: "Pressure Rating", value: "Rated up to Class 2500#" }
    ]
  },
  {
    id: "custom-fabrication",
    number: "04",
    title: "Custom fabrication",
    category: "Bespoke Engineering",
    headline: "Tailor-made welding solutions designed for unique project requirements and rapid prototyping.",
    description: "When standard catalogs don't have the answer, our CAD engineers and master craftsmen collaborate with architects and industrial designers to build one-of-a-kind structural showpieces and rugged production tooling.",
    details: "From monumental spiral architectural staircases and architectural bronze cladding to specialized automated factory skids and subsea test fixtures.",
    image: "https://cdn.prod.website-files.com/69b9179f6eb9ffdf4069e938/6a05bbdb8de018b73041e6b7_Custom%20Welding%20Projects.png",
    secondaryImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
    tags: ["Bespoke Design", "Prototyping", "Specialty Alloys"],
    serviceUsDescription: "We engineer bespoke fabrication solutions tailored to unique architectural visions, prototype validation, and custom industrial machinery requirements.",
    serviceUsBullets: [
      "Custom architectural steelwork",
      "Specialty alloy metallurgy (Titanium/Monel)",
      "Rapid prototype engineering",
      "Heavy machinery skids & frames",
      "Subsea & test fixture enclosures",
      "Bespoke one-off installations"
    ],
    steps: [
      {
        number: "Step 01",
        title: "Concept & FEA Analysis",
        description: "We collaborate on 3D CAD modeling, stress analysis, and custom alloy selection."
      },
      {
        number: "Step 02",
        title: "Prototyping & Custom Jigs",
        description: "Specialized welding fixtures and modular jigs are fabricated to guarantee repeatable precision."
      },
      {
        number: "Step 03",
        title: "Artisanal Fabrication & Assembly",
        description: "Our craftsmen shape, weld, grind, and hand-finish every bespoke element to perfection."
      }
    ],
    whyChooseBullets: [
      "ISO 9001:2015 certified fabrication shop",
      "Dedicated senior project engineering lead",
      "Exotic & non-ferrous alloy expertise",
      "Rapid 72-hour prototyping turnaround",
      "Museum-grade architectural finishes",
      "Full turnkey assembly & on-site delivery"
    ],
    capabilities: [
      "Custom concept development",
      "Specialized alloy fabrication",
      "Precision prototype assembly",
      "Tailored fabrication"
    ],
    specs: [
      { label: "Supported Formats", value: "STEP, IGES, SolidWorks, DWG" },
      { label: "Materials", value: "Aluminum, Corten, Monel, Hastelloy" },
      { label: "Lead Time", value: "Rapid prototype delivery in 72 hours" },
      { label: "Quality Standard", value: "ISO 9001:2015 Certified Workflow" }
    ]
  }
];
