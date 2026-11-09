export interface ServiceItem {
  id: string;
  name: string;
  category: "tint" | "audio" | "security" | "specialty";
  startingPrice: number;
  priceNote: string;
  isPopular?: boolean;
  isPrimary?: boolean;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  image: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ceramic-heat-shield",
    name: "Ceramic Tint Heat Shield Protection",
    category: "tint",
    startingPrice: 250,
    priceNote: "Starting advertised price; final quote varies by vehicle size & window count",
    isPopular: true,
    isPrimary: true,
    badge: "Most Popular in Houston",
    shortDescription:
      "Advanced Nano-Ceramic film designed to block harsh Texas infrared heat, guard against UV damage, and enhance interior comfort without signal interference.",
    detailedDescription:
      "Our premier heat-rejection package. Utilizing advanced nano-ceramic particles, this film offers up to 90%+ infrared heat rejection, keeping your vehicle cabin noticeably cooler under blazing Houston sun while protecting leather, upholstery, and electronics from harmful UV fading.",
    features: [
      "90%+ Infrared (IR) Heat Rejection",
      "99% UV Ray Rejection (SPF 1000+ equivalent)",
      "Zero Radio, GPS, or Cell Phone Signal Interference",
      "Superior Optical Clarity Day & Night",
      "Custom Precision Cut for Exact Factory Fit",
    ],
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tesla-ceramic-tint",
    name: "Tesla Ceramic Tinting",
    category: "tint",
    startingPrice: 399,
    priceNote: "Starting price for Tesla Model 3 / Model Y / Model S / Model X",
    isPopular: true,
    badge: "EV & Tesla Specialist",
    shortDescription:
      "Specialized ceramic tint installation engineered for Tesla full glass roofs, frameless windows, and expansive curved rear windows.",
    detailedDescription:
      "Tesla vehicles feature unique panoramic glass roofs and frameless windows that absorb tremendous radiant heat. Our technicians specialize in one-piece seamless rear glass installations and high-rejection nano ceramic films to extend cabin battery efficiency.",
    features: [
      "Seamless One-Piece Rear Window Installation",
      "Reduces Battery Drain from A/C Usage",
      "Full Glass Roof Heat Shield Options",
      "Safe Installation Around Sensitive Tesla Electronics",
      "Available for Model 3, Model Y, Model S, Model X & Cybertruck",
    ],
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "windshield-ceramic-tint",
    name: "Windshield Ceramic Tint",
    category: "tint",
    startingPrice: 180,
    priceNote: "Starting price; available in clear 70% or tinted shades",
    isPopular: true,
    badge: "Maximum Cabin Relief",
    shortDescription:
      "High-clarity ceramic film for the front windshield that blocks the largest source of heat entering your cabin without reducing night visibility.",
    detailedDescription:
      "Your front windshield is the single largest entry point for solar heat and dashboard damage. Our ceramic windshield installations provide massive heat and glare reduction while preserving total optical clarity.",
    features: [
      "Substantial Front Dash & Steering Wheel Temperature Reduction",
      "Dramatically Cuts Dangerous Sun Glare",
      "Available in Ultra-Clear High VLT (70%) or Texas Legal Visor Strips",
      "Protects Dashboards from Warping & Cracking",
      "Computer-Pattern Precision Cutting",
    ],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "heat-efficiency-tint",
    name: "Heat Efficiency Tint / Dark Shades",
    category: "tint",
    startingPrice: 175,
    priceNote: "Starting price for complete automotive tint package",
    shortDescription:
      "Quality automotive window tinting with premium dark shade choices for enhanced privacy, sharp style, and everyday heat reduction.",
    detailedDescription:
      "Upgrade your vehicle's look and privacy with dependable, color-stable tint films available in popular darkness percentages from 5% limo tint to 50% light tint.",
    features: [
      "Deep Charcoal & Sleek Black Shade Options",
      "Balanced Privacy & Sleek Exterior Appearance",
      "Quality Color-Stable Construction",
      "Reduces Interior Glare & Eye Fatigue",
      "Professional Defroster-Safe Application",
    ],
    image: "https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "car-audio-upgrades",
    name: "Car Audio Upgrades",
    category: "audio",
    startingPrice: 199,
    priceNote: "Starting advertised installation; equipment priced separately",
    badge: "Audio & Screen Pro",
    shortDescription:
      "Complete stereo system upgrades and modern 10-inch Tesla-style tablet screen radios with Apple CarPlay & Android Auto.",
    detailedDescription:
      "Modernize your car's dash with large touchscreen tablet radios, Bluetooth streaming, Apple CarPlay, Android Auto, and custom speaker replacements tuned for rich, clean sound.",
    features: [
      "10-inch Tesla-Style Screen Tablet Radio Options",
      "Apple CarPlay & Android Auto Integration",
      "Speaker, Amplifier & Subwoofer Enclosure Upgrades",
      "Factory Steering Wheel Controls Retention",
      "Clean, Hidden Factory-Grade Harness Wiring",
    ],
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "audio-equipment",
    name: "Audio Equipment Sales & Setup",
    category: "audio",
    startingPrice: 100,
    priceNote: "Price depends on selected equipment and installation requirements",
    shortDescription:
      "Authorized and top-tier car audio gear from Pioneer, Kicker, Alpine, JVC, Kenwood, Polk Audio, JBL, and Infinity.",
    detailedDescription:
      "We supply and install genuine high-fidelity audio equipment from the industry's most trusted brands. Whether you need punchy bass or studio-grade vocal clarity, our team will match the right setup for your vehicle.",
    features: [
      "Top Brands: Pioneer, Kicker, Alpine, JVC, Kenwood, Polk, JBL, Infinity",
      "Subwoofers, Component Speakers & Amplifiers",
      "Custom Sub Boxes & Space-Saving Enclosures",
      "In-Stock Equipment Ready for Same-Day Installation",
      "Expert Acoustic Tuning",
    ],
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "viper-remote-start",
    name: "Viper Remote Start & Car Security",
    category: "security",
    startingPrice: 159,
    priceNote: "Starting price for basic security / remote start systems",
    badge: "Vehicle Security",
    shortDescription:
      "Viper remote start systems and vehicle alarms. Cool your car down before you get in during hot Houston summers.",
    detailedDescription:
      "Start your engine and turn on the A/C from your key fob or smartphone before stepping outside. Safeguard your vehicle with dependable shock sensors, sirens, and anti-theft immobilization.",
    features: [
      "Pre-Cool Vehicle AC During Brutal Texas Heat",
      "Extended Range Fobs & Smartphone Control Options",
      "Shock Sensors, Starter Kill & Loud Siren Integration",
      "Professional Wire Soldering & Factory Bypass Modules",
      "Compatible with Most Gas, Hybrid, and Push-to-Start Vehicles",
    ],
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "headlight-bulb-upgrades",
    name: "Headlight & Fog Light Bulb Upgrades",
    category: "specialty",
    startingPrice: 59,
    priceNote: "Starting price for bulb upgrade sets",
    shortDescription:
      "Bright crisp white LED headlight and fog light bulb replacements for improved night visibility and modern front styling.",
    detailedDescription:
      "Replace dim, yellowing halogen factory bulbs with crisp, bright white high-output LED bulbs for enhanced nighttime road illumination and safer highway driving.",
    features: [
      "Crisp 6000K Pure White Color Output",
      "Significantly Brighter Than Standard Halogen Bulbs",
      "Low Power Draw & Long Lifespan",
      "Proper Beam Alignment to Prevent Glaring Other Drivers",
      "Available for Low Beams, High Beams & Fog Lights",
    ],
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "tint-removal",
    name: "Professional Tint Removal",
    category: "tint",
    startingPrice: 20,
    priceNote: "Starting per window; whole vehicle strip quotes available",
    shortDescription:
      "Clean, damage-free removal of old, bubbling, purple, or scratched tint while protecting rear window defroster heating lines.",
    detailedDescription:
      "Old deteriorated tint looks unsightly and obscures vision. We use specialized steam and adhesive extraction techniques to safely strip old film without harming defroster lines or radio antennas.",
    features: [
      "Safely Preserves Rear Window Defroster Grids",
      "Zero Scraping Damage to Glass Surfaces",
      "Complete Sticky Adhesive & Glue Removal",
      "Preps Windows for Fresh Premium Ceramic Installation",
      "Fast Turnaround Service",
    ],
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "wiring-repair",
    name: "Wiring Installation & Repair",
    category: "specialty",
    startingPrice: 55,
    priceNote: "Starting diagnostic / repair rate; custom quotes for complex rewires",
    shortDescription:
      "Professional automotive electrical wiring, troubleshooting, audio diagnostics, and auxiliary accessory wiring.",
    detailedDescription:
      "Experiencing blown fuses, parasitic battery drain, static in your speakers, or botched wiring from previous installs? Our electrical specialists diagnose and repair wiring cleanly and safely.",
    features: [
      "Audio System Troubleshooting & Short Circuit Tracing",
      "Parasitic Battery Drain Diagnostics",
      "Clean Soldered Connections with Heat Shrink Protection",
      "Backup Camera & Dashcam Hardwire Installations",
      "Factory Harness Repair & Clean Re-Routing",
    ],
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800&auto=format&fit=crop",
  },
];

