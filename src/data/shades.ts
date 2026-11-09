export interface TintShade {
  percentage: number;
  label: string;
  darknessLevel: "Dark / Limo" | "Medium Dark" | "Medium" | "Moderate" | "Light" | "Virtually Clear";
  opacityValue: number; // for CSS representation 0.05 to 0.95
  texasLawNotice: string;
  description: string;
  bestFor: string;
  recommendedPosition: string;
}

export const tintShades: TintShade[] = [
  {
    percentage: 5,
    label: "5% (Limo Tint)",
    darknessLevel: "Dark / Limo",
    opacityValue: 0.92,
    texasLawNotice: "Legal on rear side & back windows only in Texas. Prohibited on front side windows.",
    description: "Maximum darkness and complete interior privacy. Almost impossible to see inside the car from the outside during the day.",
    bestFor: "VIP privacy, rear passenger shading, executive look, rear cargo security.",
    recommendedPosition: "Rear side windows & back glass",
  },
  {
    percentage: 15,
    label: "15% (Dark)",
    darknessLevel: "Medium Dark",
    opacityValue: 0.82,
    texasLawNotice: "Legal on rear side & back windows. Excellent privacy match for factory SUV rear glass.",
    description: "Deep dark appearance. Provides outstanding glare reduction and substantial interior privacy while retaining night vision.",
    bestFor: "Owners seeking aggressive dark styling and privacy matching on rear windows.",
    recommendedPosition: "Rear side windows & back glass",
  },
  {
    percentage: 20,
    label: "20% (Factory Match)",
    darknessLevel: "Medium Dark",
    opacityValue: 0.74,
    texasLawNotice: "Closest visual match to OEM factory dyed privacy glass found on modern trucks and SUVs.",
    description: "The classic factory-tinted SUV look. Offers a sleek balance between strong exterior privacy and comfortable interior vision.",
    bestFor: "Matching front truck/SUV windows to rear factory glass, or darkening sedans.",
    recommendedPosition: "Rear side & back glass, or off-road/custom use",
  },
  {
    percentage: 30,
    label: "30% (Texas Legal Front)",
    darknessLevel: "Medium",
    opacityValue: 0.62,
    texasLawNotice: "Meets Texas legal threshold for front side driver & passenger windows (25% net required).",
    description: "The ideal Houston legal front-window balance. Sharp tinted appearance with excellent night clarity and zero inspection issues.",
    bestFor: "Front side windows on all daily drivers, commuting, night highway driving.",
    recommendedPosition: "Front driver & passenger windows",
  },
  {
    percentage: 50,
    label: "50% (Moderate / Subtle)",
    darknessLevel: "Light",
    opacityValue: 0.40,
    texasLawNotice: "Fully compliant for front side windows. Retains near-OEM clear appearance.",
    description: "Subtle smoke tint that gives a clean, understated look without drawing unwanted attention. Allows easy two-way visibility.",
    bestFor: "Subtle appearance, conservative aesthetics, high night clarity.",
    recommendedPosition: "All side windows & rear glass",
  },
  {
    percentage: 70,
    label: "70% (Clear Ceramic Heat Shield)",
    darknessLevel: "Virtually Clear",
    opacityValue: 0.18,
    texasLawNotice: "Popular choice for front windshields and full-vehicle heat protection without dark appearance.",
    description: "Virtually transparent nano-ceramic film that stops brutal heat and UV without darkening windows. You feel the heat rejection immediately.",
    bestFor: "Full front windshields, luxury vehicles wanting to preserve factory clear look, maximum night clarity.",
    recommendedPosition: "Front windshield & driver glass",
  },
];

