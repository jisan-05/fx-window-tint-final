export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "ceramic-tint" | "windshield" | "tesla-ev" | "car-audio";
  categoryLabel: string;
  image: string;
  alt: string;
  description: string;
  specs: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Chevy Tahoe — Nano Ceramic Heat Shield",
    category: "ceramic-tint",
    categoryLabel: "Ceramic Tint",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
    alt: "Full nano-ceramic window tint on full size SUV in Houston",
    description: "Full vehicle ceramic heat shield tinting to combat high Houston summer temperatures. Maximum IR heat reduction.",
    specs: "Front 30% / Rear 15% Ceramic Film",
  },
  {
    id: "gal-2",
    title: "Tesla Model 3 — One-Piece Rear Ceramic Tint",
    category: "tesla-ev",
    categoryLabel: "Tesla & EV",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
    alt: "Tesla Model 3 ceramic tinting with seamless one-piece rear window",
    description: "Seamless single-sheet installation on the expansive Model 3 rear glass with high-rejection ceramic film.",
    specs: "20% Nano-Ceramic sides and one-piece rear",
  },
  {
    id: "gal-3",
    title: "Ford F-150 — Ceramic Windshield & Dark Sides",
    category: "windshield",
    categoryLabel: "Windshield Tint",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    alt: "Ford F150 ceramic windshield heat shield and side window tint",
    description: "Clear ceramic windshield protection blocking 90%+ infrared rays hitting the dashboard, paired with factory match sides.",
    specs: "70% Clear Ceramic Windshield + 20% Front Match",
  },
  {
    id: "gal-4",
    title: "10-Inch Tablet Touchscreen Radio Install",
    category: "car-audio",
    categoryLabel: "Car Audio",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1000&auto=format&fit=crop",
    alt: "10-inch Tesla-style tablet screen radio in vehicle dashboard with Apple CarPlay",
    description: "Custom flush-mount 10-inch Android/Apple CarPlay touchscreen radio with retained factory steering controls and backup camera.",
    specs: "10-inch HD Display + Wireless CarPlay & Android Auto",
  },
  {
    id: "gal-5",
    title: "BMW M-Sport Sedan — Dark Ceramic Tint",
    category: "ceramic-tint",
    categoryLabel: "Ceramic Tint",
    image: "https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=1000&auto=format&fit=crop",
    alt: "Luxury sports sedan with deep ceramic tint in Houston",
    description: "High-clarity dark ceramic window film providing aggressive aesthetic profile and total cabin UV protection.",
    specs: "15% Full Vehicle Ceramic Tint",
  },
  {
    id: "gal-6",
    title: "Tesla Model Y — Full Panoramic Glass Roof Ceramic",
    category: "tesla-ev",
    categoryLabel: "Tesla & EV",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
    alt: "Tesla Model Y with full glass roof ceramic heat shield",
    description: "Overhead heat rejection film installed on Tesla Model Y glass roof to dramatically drop interior greenhouse temperatures.",
    specs: "High-IR Ceramic Barrier on panoramic roof & all side windows",
  },
  {
    id: "gal-7",
    title: "Lexus RX — Clear 70% Ceramic Windshield Heat Shield",
    category: "windshield",
    categoryLabel: "Windshield Tint",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
    alt: "Lexus SUV with optically clear 70% ceramic front windshield heat shield",
    description: "Total UV and heat blockage on the front glass without dark discoloration. Crystal-clear day and night optics.",
    specs: "70% Ultra-Clear Nano-Ceramic Windshield Film",
  },
  {
    id: "gal-8",
    title: "Custom Subwoofer & Amplifier Enclosure",
    category: "car-audio",
    categoryLabel: "Car Audio",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop",
    alt: "Professional vehicle subwoofer enclosure with clean hidden amplifier wiring",
    description: "Kicker / Kenwood subwoofers mounted in precision-tuned box with soldered wiring, fuse blocks, and bass knob.",
    specs: "Custom Amp Wiring + 12-inch Sub Enclosure",
  },
];

