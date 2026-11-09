export interface AssetDefinition {
  id: string;
  slot: string;
  currentPath: string;
  alt: string;
  recommendedPhotoFromGoogle: string;
  dimensions: string;
  notes: string;
}

export const assetRegistry: Record<string, AssetDefinition> = {
  heroVehicle: {
    id: "heroVehicle",
    slot: "Homepage Hero Background",
    currentPath: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1920&auto=format&fit=crop",
    alt: "Luxury dark vehicle with ceramic tinted windows parked under dramatic Houston lighting",
    recommendedPhotoFromGoogle:
      "Select a customer car finished with ceramic tint parked in front of the 11649 TX-249 shop or a dramatic front-three-quarter vehicle photo from Google Business Profile.",
    dimensions: "1920x1080 (16:9)",
    notes: "Centralized in assets.ts - replace with client's preferred showcase photo",
  },
  ceramicDetail: {
    id: "ceramicDetail",
    slot: "Ceramic Feature Section Close-up",
    currentPath: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
    alt: "Precision squeegee installation of ceramic window film on vehicle door glass",
    recommendedPhotoFromGoogle:
      "A close-up photo of technician heat shrinking or squeegeeing window film on a vehicle window inside the FX workshop.",
    dimensions: "1200x800 (3:2)",
    notes: "Demonstrates meticulous installation craft",
  },
  shopFront: {
    id: "shopFront",
    slot: "Location & Shop Exterior",
    currentPath: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1200&auto=format&fit=crop",
    alt: "FX Window Tint shop location and installation bays on TX-249 Houston",
    recommendedPhotoFromGoogle:
      "Actual storefront exterior photo showing the 'FX Window Tint Stereo Alarms Car Audio' signage at 11649 TX-249 #600.",
    dimensions: "1200x800 (3:2)",
    notes: "Essential for local visual recognition when drivers arrive",
  },
};

