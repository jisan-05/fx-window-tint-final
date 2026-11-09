export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "ceramic" | "legal" | "audio" | "general";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why is Ceramic Tint essential for Houston drivers?",
    answer:
      "Houston regularly experiences 95°F–105°F summer heat with intense ultraviolet and infrared radiation. Standard dyed tint only darkens the glass without blocking infrared heat. Nano-ceramic film actively rejects up to 90%+ of infrared (IR) energy, meaning your car’s interior stays dramatically cooler, steering wheels don't burn your hands, and your A/C cools the vehicle in minutes instead of miles.",
    category: "ceramic",
  },
  {
    id: "faq-2",
    question: "What is the legal tint darkness in Texas?",
    answer:
      "Under Texas state law, front side windows (driver and front passenger) must allow at least 25% Visible Light Transmission (25% net VLT). Rear side windows and the back windshield can be tinted to any darkness, including 5% limo tint (on passenger cars, trucks, and SUVs equipped with dual side mirrors). A windshield visor strip is permitted along the AS-1 line (top 5 inches), or you can install a virtually clear 70% nano-ceramic film across the entire windshield to block heat without violating visibility laws.",
    category: "legal",
  },
  {
    id: "faq-3",
    question: "Will ceramic tint interfere with my phone, GPS, or Texas EZ TAG?",
    answer:
      "No. Our nano-ceramic films are 100% non-metallic and non-conductive. Unlike older metallic films that caused dropped calls and GPS lag, ceramic film has zero interference with 5G cell signals, Bluetooth, GPS navigation, keyless fobs, satellite radio, or toll transponders like EZ TAG and TxTag.",
    category: "ceramic",
  },
  {
    id: "faq-4",
    question: "How long after installation before I can roll my windows down?",
    answer:
      "We recommend keeping your windows rolled up for 3 to 5 days after installation. This allows the specialized mounting adhesive to fully cure and evaporate any residual moisture, ensuring a permanent, bubble-free bond with your vehicle’s glass.",
    category: "general",
  },
  {
    id: "faq-5",
    question: "Do you tint Tesla rear windows in a single seamless sheet?",
    answer:
      "Yes! Many lower-experience shops cut Tesla Model 3 or Model Y rear glass into two pieces, leaving an unsightly visible seam across the defroster lines. At FX Window Tint, our technicians specialize in full one-piece seamless shrinking and installation on large curved Tesla glass roofs and rear windshields.",
    category: "ceramic",
  },
  {
    id: "faq-6",
    question: "How long does a full window tint installation take?",
    answer:
      "A typical full vehicle tint (sides and rear) takes approximately 1.5 to 2.5 hours depending on vehicle size and whether old tint removal is needed. Windshield tinting or full Tesla glass packages generally take 2 to 3 hours. We recommend calling ahead at (832) 768-6256 to reserve your bay time for the fastest turnaround.",
    category: "general",
  },
  {
    id: "faq-7",
    question: "Can you install 10-inch touchscreen radios with Apple CarPlay & Android Auto in older vehicles?",
    answer:
      "Absolutely. We install custom 10-inch Tesla-style tablet radios and double-DIN stereos in most cars, trucks, and SUVs. We integrate factory steering wheel audio controls, backup cameras, and USB ports so your older vehicle gets modern touchscreen navigation, wireless CarPlay, Android Auto, and crisp sound.",
    category: "audio",
  },
  {
    id: "faq-8",
    question: "What is the difference between starting prices and a final quote?",
    answer:
      "Our advertised prices (e.g. $250 for Ceramic Heat Shield, $399 for Tesla, $180 for Windshield) reflect typical vehicles in those categories. Factors that may adjust the final price include very large vehicle glass areas (e.g. extended 15-passenger vans), existing old bubbled tint that requires safe defroster removal, or specialty audio dash bezel requirements. We always provide a transparent, upfront quote before starting any work.",
    category: "general",
  },
];

