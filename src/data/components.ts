export interface ComponentItem {
  id: string;
  name: string;
  category: 'Machines' | 'Accessories';
  code: string;
  badge?: string;
  tagline: string;
  description: string;
  material: string;
  standards: string;
  finish: string;
  tolerance: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  tags: string[];
}

export const componentsData: ComponentItem[] = [
  // ================= MACHINES (from shamsmalabar.com/machines/) =================
  {
    id: 'plate-cutting-machine',
    name: 'Plate Cutting Machine',
    category: 'Machines',
    code: 'MACH-CUT-01',
    badge: 'Industrial Machinery',
    tagline: 'High-definition heavy plate cutting machinery engineered for precision profile shearing and sheet metal processing.',
    description: 'Equipped with modern cutting technology to process mild steel, stainless steel, and aluminum plates with clean dross-free edges and tight angular tolerances. Essential for structural framing, pre-fabrication, and heavy industrial metalwork.',
    material: 'Carbon Steel, Stainless Steel, Galvanized Sheet, Aluminum Alloys',
    standards: 'CE / ISO 9001 Industrial Safety & Tolerance Compliance',
    finish: 'Clean deburred cut edge ready for welding or bending',
    tolerance: '±0.2 mm precision cutting tolerance',
    image: '/images/components/plate-cutting-machine.png',
    features: [
      'High-capacity plate cutting across thin gauges to heavy structural thicknesses',
      'Automated CNC backgauge for rapid and repeatable dimensional setup',
      'Minimal heat-affected zone (HAZ) preserving base material mechanical properties',
      'Laser-assisted optical alignment guide for acute and straight linear cuts'
    ],
    specs: [
      { label: 'Plate Capacity', value: 'Up to 25 mm plate thickness' },
      { label: 'Cutting Width', value: '3,200 mm bed capacity' },
      { label: 'Backgauge Range', value: '10 mm to 1,000 mm motorized' },
      { label: 'Operation', value: 'Electro-hydraulic heavy-duty' }
    ],
    tags: ['Plate Cutting', 'Shearing Machine', 'Steel Fabrication', 'CNC Equipment']
  },
  {
    id: 'plate-bending-machine',
    name: 'Plate Bending Machine',
    category: 'Machines',
    code: 'MACH-BND-02',
    badge: 'Industrial Machinery',
    tagline: 'Multi-axis CNC press brake and plate bending machinery delivering accurate multi-angle folds and cylindrical profiles.',
    description: 'High-tonnage hydraulic plate bending machinery capable of handling thick plates and large section lengths. Programmed for acute bends, 90-degree flanges, hems, channels, and custom architectural contours with repeatable precision.',
    material: 'Carbon Steel, Structural Steel, Stainless Steel 304/316, Brass',
    standards: 'DIN ISO 2768-mK / CE Machinery Directive',
    finish: 'Smooth mark-free bend radii without surface cracking or stretching',
    tolerance: '±0.1° angle accuracy, ±0.15 mm flange height',
    image: '/images/components/plate-bending-machine.png',
    features: [
      'Multi-axis CNC controlled backgauge and automatic hydraulic crowning system',
      'Quick-clamp segmented tooling for varied section profiles and return bends',
      'Pressure-sensitive electronic synchronization preventing sheet distortion',
      'Custom radius dies for structural cones, hoppers, and architectural enclosures'
    ],
    specs: [
      { label: 'Bending Force', value: '250 Tonnes hydraulic power' },
      { label: 'Max Bend Length', value: '4,000 mm bed length' },
      { label: 'Throat Depth', value: '400 mm deep frame clearance' },
      { label: 'Control Unit', value: 'Multi-axis touchscreen CNC' }
    ],
    tags: ['Plate Bending', 'Press Brake', 'CNC Forming', 'Steel Bending']
  },
  {
    id: 'cnc-punching-machine',
    name: 'CNC Punching Machine',
    category: 'Machines',
    code: 'MACH-PNC-03',
    badge: 'Industrial Machinery',
    tagline: 'High-speed CNC turret punch press for automated sheet perforation, intricate cutouts, louvers, and embossing.',
    description: 'Advanced CNC punching machinery delivering high stroke rates and versatile multi-tool rotation. Handles complex hole arrays, countersinks, slots, and ventilation louvers with lightning speed and flawless repeatability.',
    material: 'Cold Rolled Steel, Galvanized Steel, Aluminum, Stainless Steel',
    standards: 'ISO 9001 / High Precision Turret Standards',
    finish: 'Smooth punched edges with uniform burr control and zero distortion',
    tolerance: '±0.05 mm hole-to-hole pitch accuracy',
    image: '/images/components/cnc-punching-machine.png',
    features: [
      'Multi-station auto-index turret holding diverse tool and die configurations',
      'High-speed hydraulic punching up to 600 hits per minute',
      'Automated sheet repositioning system for oversized plate processing',
      'CAD/CAM nesting interface for optimal raw material yield and speed'
    ],
    specs: [
      { label: 'Punching Force', value: '30 Tonnes hydraulic capacity' },
      { label: 'Sheet Dimension', value: 'Up to 1,250 mm x 2,500 mm' },
      { label: 'Max Thickness', value: '6.35 mm mild steel' },
      { label: 'Turret Stations', value: '32 Stations with Auto-Index' }
    ],
    tags: ['CNC Punching', 'Turret Press', 'Perforation', 'Sheet Metal']
  },

  // ================= ACCESSORIES (from shamsmalabar.com/accessories/) =================
  {
    id: 'steel-brackets-angles',
    name: 'Steel Brackets & Structural Angles',
    category: 'Accessories',
    code: 'ACC-BRK-01',
    badge: 'Custom Accessory',
    tagline: 'Precision-fabricated steel brackets, heavy corner gussets, and slotted angles providing essential structural reinforcement.',
    description: 'Even the most intricate projects rely on the strength and reliability of small components. Our steel accessories—from brackets to frames and fittings—are designed with precision, ensuring that every piece plays its part in supporting the larger structure.',
    material: 'Mild Steel, S275 / S355, Stainless Steel 304/316',
    standards: 'BS EN 1090 / AWS Structural Fabrication',
    finish: 'Hot-Dip Galvanized, Powder Coated, or Zinc Electroplated',
    tolerance: '±0.5 mm hole center positioning',
    image: '/images/components/accessory-brackets.png',
    features: [
      'Precision laser-cut slotted holes for flexible on-site bolt alignment',
      'Heavy-duty formed 90° bends with zero micro-fractures',
      'Deburred edges guaranteeing safe handling and rapid installation',
      'Available in standard architectural gauges and bespoke heavy thicknesses'
    ],
    specs: [
      { label: 'Thickness', value: '3 mm to 16 mm heavy steel' },
      { label: 'Angle Profiles', value: '90°, 45°, and custom obtuse angles' },
      { label: 'Hole Types', value: 'Round, slotted, and counter-sunk' },
      { label: 'Usage', value: 'Facade framing, beam connections' }
    ],
    tags: ['Steel Bracket', 'Structural Angle', 'Corner Gusset', 'Connection Hardware']
  },
  {
    id: 'welded-frames-flanges',
    name: 'Precision Welded Frames & Flanges',
    category: 'Accessories',
    code: 'ACC-FRM-02',
    badge: 'Custom Accessory',
    tagline: 'Custom-fit steel frames, base flanges, and mounting sub-assemblies built to integrate seamlessly with main structures.',
    description: 'Engineered sub-assemblies and frame components fabricated with meticulous attention to detail. Designed to provide structural anchor points, equipment mounting bases, and rigid boundary enclosures.',
    material: 'Structural Hollow Sections (SHS/RHS), Carbon Steel, Stainless Steel',
    standards: 'AWS D1.1 / ISO 3834 Welding Standards',
    finish: 'Shop Primer, Hot Dip Galvanizing, or Industrial Enamel',
    tolerance: 'Squareness and diagonal tolerance within ±1.0 mm',
    image: '/images/components/accessory-frames.png',
    features: [
      'Continuous seal-welded joints preventing internal water ingress and rust',
      'Stress-relieved weld seams for lasting dimensional stability',
      'Pre-drilled anchor bolt patterns ready for rapid site drop-in',
      'Custom-fit geometry tailored to CAD project drawings'
    ],
    specs: [
      { label: 'Profile Sizes', value: 'Box sections 20x20 mm to 150x150 mm' },
      { label: 'Weld Method', value: 'GMAW (MIG) & GTAW (TIG) certified' },
      { label: 'Load Rating', value: 'Engineered for high static loads' },
      { label: 'Customization', value: '100% custom dimensions available' }
    ],
    tags: ['Steel Frames', 'Mounting Flange', 'Base Assembly', 'Custom Fabrication']
  },
  {
    id: 'custom-fit-fittings',
    name: 'Custom-Fit Fittings & Joinery Connectors',
    category: 'Accessories',
    code: 'ACC-FIT-03',
    badge: 'Custom Accessory',
    tagline: 'High-precision metal joinery fittings, socket connectors, and decorative end caps for architectural steel installations.',
    description: 'Small components designed for big impact. From architectural handrail joiners to precision tube fittings, these accessories ensure seamless continuity and dependable mechanical fastening across diverse structures.',
    material: 'Stainless Steel 304 / 316, Brass, Carbon Steel',
    standards: 'ASTM A276 / Architectural Metalwork Standards',
    finish: 'Satin Brushed, Mirror Polished, or PVD Titanium Coated',
    tolerance: '±0.1 mm precision fit-up',
    image: '/images/components/accessory-fittings.png',
    features: [
      'Seamless push-fit and welded connector configurations',
      'Corrosion-resistant marine-grade stainless steel options',
      'Concealed mechanical fastener design for clean aesthetic architectural lines',
      'Smooth chamfered lead-ins ensuring effortless installation'
    ],
    specs: [
      { label: 'Tube & Pipe Sizes', value: 'Ø 25.4 mm to Ø 101.6 mm OD' },
      { label: 'Joining Methods', value: 'Internal sleeve, socket weld, or screw' },
      { label: 'Finish Grades', value: '240-grit, 320-grit, #8 Mirror' },
      { label: 'Applications', value: 'Railings, display stands, decor' }
    ],
    tags: ['Pipe Fittings', 'Tube Joiners', 'Handrail Hardware', 'Architectural']
  },
  {
    id: 'precision-metal-clips',
    name: 'Precision Metal Clips & Clamps',
    category: 'Accessories',
    code: 'ACC-CLP-04',
    badge: 'Custom Accessory',
    tagline: 'Heavy-duty securing clips, conduit brackets, and standoff clamping accessories engineered for harsh industrial duty.',
    description: 'Specialized clamp fittings and retaining clips fabricated with high-yield steel to secure conduits, piping, architectural panels, and grating with total anti-vibration security.',
    material: 'Spring Steel, Galvanized Carbon Steel, SS 316',
    standards: 'DIN 3015 / Industrial Fastening Norms',
    finish: 'Zinc Flake Coating, Dacromet, or Passivated Stainless',
    tolerance: 'Accurate clamping pressure with ±0.2 mm profile',
    image: '/images/components/accessory-clips.png',
    features: [
      'High tensile retention force preventing slip under severe vibration',
      'Smooth radiused edges preventing cable and pipe abrasion',
      'Quick-release and permanent bolt-down mounting options',
      'Extreme weather and marine corrosion resistance'
    ],
    specs: [
      { label: 'Clamp Diameters', value: '10 mm to 200 mm' },
      { label: 'Plate Thickness', value: '2 mm to 6 mm heavy gauge' },
      { label: 'Coating Barrier', value: '15-25 µm anti-corrosion barrier' },
      { label: 'Applications', value: 'Piping, electrical tray, panel retention' }
    ],
    tags: ['Metal Clips', 'Heavy Clamps', 'Cable Retainers', 'Industrial Hardware']
  },
  {
    id: 'architectural-decorative-fittings',
    name: 'Architectural & Decorative Metal Fittings',
    category: 'Accessories',
    code: 'ACC-DEC-05',
    badge: 'Custom Accessory',
    tagline: 'Museum-quality decorative metal accessories, stand-off spacers, and custom luxury brass & stainless fixtures.',
    description: 'Tailored components combining structural integrity with elegant aesthetics. Ideal for luxury commercial interiors, hotel lobby displays, glass wall stand-offs, and custom decorative metal furniture.',
    material: 'Architectural Brass, AISI 316 Stainless Steel, Mild Steel',
    standards: 'Bespoke Interior & Architectural Standards',
    finish: 'PVD Titanium Gold, Antique Patina, Matte Black Powder Coat',
    tolerance: '±0.1 mm visual and tactile perfection',
    image: '/images/components/accessory-architectural.png',
    features: [
      'Flawlessly hand-polished and machine-finished surfaces',
      'EPDM rubber buffer rings protecting glass and stone surfaces',
      'Invisible screw thread machining with zero visible fastener heads',
      'Customized CNC engraving and decorative detailing available'
    ],
    specs: [
      { label: 'Diameter Range', value: '15 mm to 80 mm standoff discs' },
      { label: 'Finishes', value: 'Satin Brass, PVD Champagne, Bronze' },
      { label: 'Durability', value: 'Salt spray tested for humid interior & exterior' },
      { label: 'Applications', value: 'Glass facade, signage, luxury retail' }
    ],
    tags: ['Architectural Fittings', 'Brass Standoff', 'Decorative Metal', 'Luxury Finish']
  },
  {
    id: 'heavy-duty-support-plates',
    name: 'Heavy-Duty Support & Fastening Plates',
    category: 'Accessories',
    code: 'ACC-PLT-06',
    badge: 'Custom Accessory',
    tagline: 'Pre-punched base plates, shims, and heavy-duty load distribution plates for steel construction.',
    description: 'Critical load-transfer accessories engineered to distribute heavy point loads over concrete footings, steel beams, and composite masonry. CNC drilled and deburred for instant alignment on site.',
    material: 'ASTM A36, S355JR, High-Tensile Steel',
    standards: 'AISC / EN 10025 Structural Standards',
    finish: 'Hot-Dip Galvanized (ISO 1461) or Red Oxide Shop Primer',
    tolerance: '±0.5 mm hole centers, flatness within 0.5 mm',
    image: '/images/components/accessory-plates.png',
    features: [
      'High-capacity load dispersal preventing concrete crushing and point stress',
      'Multi-hole patterns accommodating foundation anchor bolts',
      'Available with pre-welded stiffener gussets and shear keys',
      'Supplied in matched thickness shim packs for precision leveling'
    ],
    specs: [
      { label: 'Plate Dimensions', value: '100x100 mm to 800x800 mm' },
      { label: 'Thickness', value: '6 mm to 50 mm' },
      { label: 'Hole Diameters', value: 'M12 to M48 clearance holes' },
      { label: 'Applications', value: 'Column footings, gantry cranes, bases' }
    ],
    tags: ['Base Plates', 'Shim Packs', 'Support Plates', 'Heavy Hardware']
  }
];
