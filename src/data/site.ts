export interface SiteConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  established: string;
  yearsExperience: number;
  rating: string;
  ratingCount: number;
  phone: string;
  phoneRaw: string;
  email: string;
  supportEmail: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    full: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socials: {
    name: string;
    href: string;
    handle: string;
  }[];
  stats: {
    value: string;
    label: string;
    suffix?: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "FORGEON",
  tagline: "Precision Welding & Metal Fabrication",
  heroHeadline: "Precision welding solutions",
  heroSubtext: "We deliver high-performance welding and fabrication services designed to meet the rigorous demands of modern industrial projects. Built with absolute focus on structural integrity, strict safety, and unyielding durability.",
  established: "Since 2015",
  yearsExperience: 10,
  rating: "4.9/5",
  ratingCount: 148,
  phone: "+1 (800) 582-9353",
  phoneRaw: "+18005829353",
  email: "info@forgeon-industries.com",
  supportEmail: "support@forgeon-industries.com",
  address: {
    street: "71–75 Shelton Street, Covent Garden",
    city: "London",
    state: "Greater London",
    zip: "WC2H 9JQ",
    country: "United Kingdom",
    full: "71–75 Shelton Street, Covent Garden, London WC2H 9JQ, UK",
  },
  businessHours: {
    weekdays: "Monday – Friday: 07:00 AM – 06:00 PM",
    saturday: "Saturday: 08:00 AM – 02:00 PM (Emergency Callouts 24/7)",
    sunday: "Sunday: Closed (Emergency Hotline Active)",
  },
  socials: [
    { name: "Facebook", href: "https://facebook.com", handle: "@forgeon.welding" },
    { name: "Instagram", href: "https://instagram.com", handle: "@forgeon_precision" },
    { name: "LinkedIn", href: "https://linkedin.com", handle: "forgeon-industries" },
    { name: "Twitter", href: "https://x.com", handle: "@forgeon_metal" },
  ],
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "99.8%", label: "Weld Integrity Rate" },
    { value: "650+", label: "Industrial Projects" },
    { value: "100%", label: "OSHA & AWS Compliance" },
  ],
};
