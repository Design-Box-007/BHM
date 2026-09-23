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
    id: "heavy-duty-bar-grating",
    name: "Industrial Heavy Bar Grating",
    category: "Structural Flooring",
    sku: "FGN-GRT-400",
    tagline: "High-traction safety grating for offshore platforms, refineries, and heavy industrial mezzanines.",
    description: "Engineered from forge-welded carbon steel or 316 stainless steel with serrated bearing bars for maximum slip resistance and wheel-load distribution.",
    material: "ASTM A1011 / 316L Stainless",
    tolerance: "±1.5 mm panel squareness",
    finish: "Hot-Dip Galvanized / Mill / Passivated",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    features: [
      "Maximum wheel load capacity up to H-20 highway rating",
      "Serrated slip-resistant anti-fatigue walking surface",
      "Immunity to saline, marine, and chemical atmospheres",
      "Standard and custom cut-out panel configurations"
    ],
    specs: {
      "Bearing Bar Depth": "25mm to 65mm",
      "Bearing Bar Thickness": "5mm to 9mm",
      "Standard Panel Size": "1000mm x 6000mm",
      "Coating Thickness": "Min 85 microns hot-dip zinc"
    }
  },
  {
    id: "structural-w-beams",
    name: "Precision Welded Flange Beams",
    category: "Structural Framing",
    sku: "FGN-WBM-900",
    tagline: "Custom deep-web structural beams fabricated to exact architectural camber and loading criteria.",
    description: "Automated submerged-arc welded wide-flange beams tailored for long clear spans where rolled hot sections are insufficient or weight optimization is critical.",
    material: "ASTM A572 Grade 50 / Grade 65",
    tolerance: "AISC Code of Standard Practice ±1.0 mm",
    finish: "Zinc Silicate Primer / Blast Cleaned SSPC-SP10",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18f15f6?auto=format&fit=crop&w=800&q=80",
    features: [
      "Submerged arc full-penetration web-to-flange welds",
      "Integrated stiffener plates and shear tab connections",
      "Custom pre-cambering to counteract dead-load deflection",
      "Full digital traceability with mill test reports"
    ],
    specs: {
      "Depth Range": "300mm to 2400mm",
      "Flange Width": "Up to 800mm",
      "Max Section Length": "24 Meters continuous",
      "Weld Quality": "100% UT tested flange welds"
    }
  },
  {
    id: "high-pressure-pipe-spools",
    name: "ASME High-Pressure Pipe Spool",
    category: "Pressure Piping",
    sku: "FGN-PSP-550",
    tagline: "Pre-fabricated skid and interconnecting piping spools for oil & gas and chemical processing.",
    description: "Turnkey fabricated piping assemblies with 100% X-ray inspected circumferential butt-welds, engineered to minimize field installation downtime and eliminate on-site hot work.",
    material: "ASTM A106 Gr B / A312 TP316L / Inconel 625",
    tolerance: "PFI Standard ES-3 (±3 mm end-to-end)",
    finish: "Pickled & Passivated / Epoxy Clad",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: [
      "ASME B31.3 certified fabrication and weld inspection",
      "Precision CNC beveling and automatic orbital TIG root pass",
      "Hydrostatic proof testing up to 10,000 psi",
      "Internal borescope visual inspection certified"
    ],
    specs: {
      "Nominal Pipe Size": "1/2\" to 36\" Sch 10 to Sch XXS",
      "Flange Ratings": "Class 150# through Class 2500#",
      "Weld Methods": "GTAW (TIG) root + FCAW/SAW cap",
      "NDE Level": "100% Radiographic / Dye Penetrant"
    }
  },
  {
    id: "industrial-process-tanks",
    name: "ASME Pressure & Storage Vessels",
    category: "Process Equipment",
    sku: "FGN-VES-800",
    tagline: "Cylindrical & conical stainless pressure vessels designed for sanitary food, pharma, and chemical storage.",
    description: "Custom horizontal and vertical vessels manufactured with internal sanitary mirror-polish finishes (Ra < 0.4 µm), dimpled heating jackets, and precision nozzle schedules.",
    material: "304L, 316L, 2205 Duplex Stainless Steel",
    tolerance: "ASME Section VIII Div 1 tolerances",
    finish: "Electropolished Internal / Satin Brush External",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    features: [
      "ASME 'U' & 'R' Stamp certification compliant",
      "Laser-welded dimple heat transfer cooling jackets",
      "Full clean-in-place (CIP) spray ball integration",
      "Full vacuum to 50 bar internal pressure rating"
    ],
    specs: {
      "Capacity": "500 Liters to 60,000 Liters",
      "Shell Thickness": "4mm to 25mm solid plate",
      "Internal Roughness": "Ra < 0.4 µm (Electropolished)",
      "Agitator Mount": "Heavy top/bottom sanitary flange"
    }
  },
  {
    id: "modular-equipment-skids",
    name: "Heavy Modular Equipment Skids",
    category: "Modular Systems",
    sku: "FGN-SKD-120",
    tagline: "Rigid structural baseframes designed for compressors, pumps, generators, and chemical injection skids.",
    description: "Heavy structural steel baseframes designed for 3-point lifting, vibration isolation, and extreme torsional rigidity during offshore marine transportation.",
    material: "Structural Grade S355J2 / ASTM A36",
    tolerance: "Machined pad flatness within 0.1 mm/meter",
    finish: "Marine Grade C5-M 3-Coat Epoxy System",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    features: [
      "Engineered lifting lugs certified to DNV 2.7-1",
      "Integrated drip pans with drain plugs for environmental containment",
      "Vibration dampening machined pump mounting pads",
      "Full FEA modal vibration and deflection verification"
    ],
    specs: {
      "Max Skid Footprint": "4.5m Width x 18m Length",
      "Max Payload": "Up to 45 Tons equipment load",
      "Lifting Certification": "Pad-eye proof load tested 2.5x",
      "Paint Warranty": "15-Year offshore marine rating"
    }
  },
  {
    id: "custom-mounting-brackets",
    name: "High-Tolerance Mounting Brackets",
    category: "Precision Hardware",
    sku: "FGN-BRK-045",
    tagline: "High-strength laser-cut and CNC formed brackets for heavy vehicle chasses and industrial machinery.",
    description: "Batch-manufactured with tight dimensional repeatability using multi-axis CNC bending and robotic pulsed-MIG welding for structural durability under intense cyclical stress.",
    material: "High-Yield Hardox 450 / Domex 700MC",
    tolerance: "±0.1 mm laser cut and bent",
    finish: "Zinc Nickel Electroplate / Black Oxide",
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    features: [
      "Extreme fatigue resistance under cyclical vibrations",
      "Countersunk and threaded blind rivet fastener inserts",
      "Multi-axis CNC forming without micro-cracking",
      "Automated robotic welding with 100% optical seam check"
    ],
    specs: {
      "Plate Range": "3mm to 16mm High-Yield Steel",
      "Batch Volumes": "50 units to 25,000 units/year",
      "Salt Spray Test": "1000+ hours without white/red rust",
      "Laser Piercing": "Zero taper ultra-clean holes"
    }
  }
];
