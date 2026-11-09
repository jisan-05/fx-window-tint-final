"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, AlertTriangle, ShieldCheck, Check } from "lucide-react";

interface ComparisonItem {
  id: string;
  title: string;
  vehicle: string;
  service: string;
  before: {
    title: string;
    description: string;
    issues: string[];
    image: string;
  };
  after: {
    title: string;
    description: string;
    benefits: string[];
    image: string;
    specs: string;
  };
}

const comparisons: ComparisonItem[] = [
  {
    id: "comp-1",
    title: "Full SUV Nano-Ceramic Heat Shield",
    vehicle: "Chevy Tahoe / GMC Yukon",
    service: "Ceramic Tint Heat Shield Protection",
    before: {
      title: "Untinted Factory Clear Glass",
      description: "Severe greenhouse cabin heating during 100°F+ Houston heatwaves. Extreme glare on navigation screens and zero infrared protection.",
      issues: [
        "125°F+ Interior Cabin Temperature",
        "0% Infrared Heat Blockage",
        "Excessive A/C & Fuel Consumption",
      ],
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
    },
    after: {
      title: "15% Full Nano-Ceramic Heat Shield",
      description: "Immediate cabin temperature drop. Blocks 90%+ infrared thermal energy while maintaining razor-sharp night visibility.",
      benefits: [
        "Up to 90%+ Infrared Heat Rejection",
        "99% UV Ray Protection (SPF 1000+)",
        "Deep Charcoal Executive Aesthetics",
      ],
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
      specs: "Front 30% TX Legal / Rear 15% Deep Ceramic",
    },
  },
  {
    id: "comp-2",
    title: "Old Purpled Tint Removal & Fresh Ceramic",
    vehicle: "Ford F-150 Crew Cab",
    service: "Professional Tint Removal",
    before: {
      title: "Old Bubbling Dyed Tint",
      description: "Deteriorated low-grade dyed film turned purple, forming dangerous bubbles that obscure rear visibility and hazard defroster lines.",
      issues: [
        "Severely Distorted Rear Window Optics",
        "Embarrassing Peeling & Bubbled Surface",
        "Risk of Damaging Defroster Grids",
      ],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    },
    after: {
      title: "Steam Stripped & Re-Tinted in Ceramic",
      description: "Carefully extracted using steam without harming rear defroster heating elements, followed by color-stable ceramic film.",
      benefits: [
        "100% Intact Rear Window Defroster Lines",
        "Guaranteed Zero Bubbling or Purpling",
        "Crystal Optical Clarity Day & Night",
      ],
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
      specs: "Defroster-Safe Steam Strip + 20% Color-Stable Ceramic",
    },
  },
  {
    id: "comp-3",
    title: "Tesla Panoramic Roof & Windshield Shield",
    vehicle: "Tesla Model 3 / Model Y",
    service: "Tesla Ceramic Tinting",
    before: {
      title: "Exposed Panoramic Glass Greenhouse",
      description: "Direct overhead Texas solar radiation penetrating through the expansive Tesla roof and front windshield, forcing the A/C into overdrive.",
      issues: [
        "Severe Overhead Heat Radiating on Heads",
        "High Cabin Overheat Battery Drain",
        "Blinding Sun Glare Through Front Glass",
      ],
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
    },
    after: {
      title: "High-IR Ceramic Overhead & Windshield Shield",
      description: "Single-sheet seamless installation rejects overhead thermal heat before it enters the glass, extending electric range and A/C efficiency.",
      benefits: [
        "Noticeably Cooler Overhead Temperatures",
        "Preserves Driving Range & EV Battery",
        "Non-Metallic — Zero 5G/GPS Interference",
      ],
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
      specs: "70% Clear Windshield Ceramic + High-IR Roof Barrier",
    },
  },
];

export function BeforeAfterShowcase() {
  const [activeTab, setActiveTab] = useState<string>("comp-1");
  const [viewMode, setViewMode] = useState<"after" | "before">("after");

  const activeItem = comparisons.find((c) => c.id === activeTab) || comparisons[0];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            REAL INSTALLATION COMPARISONS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            See the Ceramic Tint Difference
          </h2>
          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#64748B]">
            Compare factory untinted or deteriorating dyed film against precision nano-ceramic heat shields installed at our Houston shop.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {comparisons.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-5 py-3 rounded-lg text-xs font-black uppercase tracking-wider transition-all font-display ${
                activeTab === item.id
                  ? "bg-[#050B16] text-white shadow-md scale-105"
                  : "bg-white text-[#334155] hover:text-[#050B16] border border-[#E2E8F0]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Comparison Presentation Card */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm max-w-6xl mx-auto">
          {/* Subheader with View Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0] mb-8">
            <div>
              <span className="text-xs font-black text-[#E10000] uppercase tracking-wider font-display block">
                {activeItem.vehicle}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#050B16] uppercase font-display">
                {activeItem.title}
              </h3>
            </div>

            {/* Before vs After Switcher Toggle */}
            <div className="inline-flex items-center p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0]">
              <button
                onClick={() => setViewMode("before")}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase font-display transition-all ${
                  viewMode === "before"
                    ? "bg-[#050B16] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#050B16]"
                }`}
              >
                Before / Untinted
              </button>
              <button
                onClick={() => setViewMode("after")}
                className={`px-4 py-2 rounded-lg text-xs font-black uppercase font-display transition-all ${
                  viewMode === "after"
                    ? "bg-[#E10000] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#050B16]"
                }`}
              >
                After / Ceramic Tint
              </button>
            </div>
          </div>

          {/* Visual Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Display */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#050B16] shadow-md group">
                <Image
                  src={viewMode === "after" ? activeItem.after.image : activeItem.before.image}
                  alt={viewMode === "after" ? activeItem.after.title : activeItem.before.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* State Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider font-display shadow-md ${
                      viewMode === "after"
                        ? "bg-[#E10000] text-white"
                        : "bg-black/85 text-amber-300 border border-amber-300/30"
                    }`}
                  >
                    {viewMode === "after" ? "AFTER • CERAMIC TINT APPLIED" : "BEFORE • PROBLEM STATE"}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <span className="text-sm font-bold uppercase font-display">
                    {viewMode === "after" ? activeItem.after.title : activeItem.before.title}
                  </span>
                  {viewMode === "after" && (
                    <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-0.5 rounded font-bold font-display uppercase">
                      Finished Result
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description & Impact Points */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B] block font-display mb-1">
                  {viewMode === "after" ? "Finished Upgrade Result:" : "Original Problem State:"}
                </span>
                <h4 className="text-xl font-black text-[#050B16] uppercase font-display">
                  {viewMode === "after" ? activeItem.after.title : activeItem.before.title}
                </h4>
                <p className="text-sm text-[#475569] leading-relaxed mt-2">
                  {viewMode === "after" ? activeItem.after.description : activeItem.before.description}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#050B16] block font-display mb-1">
                  {viewMode === "after" ? "Key Performance Benefits:" : "Identified Driving Disadvantages:"}
                </span>
                {(viewMode === "after" ? activeItem.after.benefits : activeItem.before.issues).map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    {viewMode === "after" ? (
                      <Check className="w-4 h-4 text-[#E10000] shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    )}
                    <span className="font-medium">{point}</span>
                  </div>
                ))}
              </div>

              {viewMode === "after" && (
                <div className="text-xs text-[#64748B]">
                  <strong className="text-[#050B16] font-display uppercase block">Installed Film Specification:</strong>
                  <span>{activeItem.after.specs}</span>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href={`/quote?service=${encodeURIComponent(activeItem.service)}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md font-display"
                >
                  <span>Request Quote for This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

