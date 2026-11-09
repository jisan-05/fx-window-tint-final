import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TierFeature {
  name: string;
  standard: string;
  carbon: string;
  ceramic: string;
}

const comparisonData: TierFeature[] = [
  {
    name: "Infrared (IR) Heat Rejection",
    standard: "Minimal / Basic (~15%)",
    carbon: "Moderate (40% - 60%)",
    ceramic: "Maximum (90%+ IR Block)",
  },
  {
    name: "Total Cabin Heat Reduction",
    standard: "Low (blocks visible light only)",
    carbon: "Good everyday relief",
    ceramic: "Superior full-cabin cooling",
  },
  {
    name: "Harmful UV Ray Protection",
    standard: "Basic UV filtration",
    carbon: "Up to 99% UV block",
    ceramic: "99% High-level UV defense",
  },
  {
    name: "Optical Night Clarity",
    standard: "Can appear hazy or dark",
    carbon: "Good clear optical view",
    ceramic: "Exceptional ultra-clear HD",
  },
  {
    name: "Color Stability & Longevity",
    standard: "Risk of fading / purpling",
    carbon: "Color stable, zero purple",
    ceramic: "Permanent nano-ceramic stability",
  },
  {
    name: "Cell, GPS & Radio Signals",
    standard: "Non-metallic",
    carbon: "Signal friendly",
    ceramic: "100% Non-conductive & zero interference",
  },
  {
    name: "Best For Texas Climate",
    standard: "Budget privacy only",
    carbon: "Moderate daily commutes",
    ceramic: "Houston heat waves & high driving comfort",
  },
];

export function TintComparison() {
  return (
    <section id="comparison" className="py-20 lg:py-28 bg-white border-b border-[#E2E8F0] relative">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E10000] block mb-2 font-display">
            FILM TECHNOLOGY COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Ceramic vs Carbon vs Standard Tint
          </h2>
          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#64748B]">
            Understand how film construction directly impacts interior comfort, infrared heat rejection, and longevity.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto pb-4">
          <div className="min-w-[800px] bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-12 bg-[#050B16] text-white text-center items-center py-5 px-8">
              <div className="col-span-4 text-left font-black text-sm uppercase tracking-wider font-display">
                Performance Metric
              </div>
              <div className="col-span-2 text-center">
                <span className="text-sm font-black text-white block uppercase font-display">Standard Dyed</span>
                <span className="text-[11px] text-[#94A3B8]">Basic Privacy</span>
              </div>
              <div className="col-span-3 text-center">
                <span className="text-sm font-black text-white block uppercase font-display">Carbon Tint</span>
                <span className="text-[11px] text-[#94A3B8]">Enhanced Heat Control</span>
              </div>
              <div className="col-span-3 text-center relative">
                <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded bg-[#E10000] text-white text-[10px] font-extrabold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3 h-3" /> Recommended
                </div>
                <span className="text-base font-black text-white block uppercase font-display">Nano-Ceramic</span>
                <span className="text-[11px] text-white/80 font-medium">Maximum IR Protection</span>
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-[#E2E8F0]">
              {comparisonData.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 items-center py-4.5 px-8 text-sm ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
                  }`}
                >
                  <div className="col-span-4 font-bold text-[#050B16] text-base">
                    {row.name}
                  </div>
                  <div className="col-span-2 text-center text-[#64748B] text-sm">
                    {row.standard}
                  </div>
                  <div className="col-span-3 text-center text-[#334155] text-sm font-semibold">
                    {row.carbon}
                  </div>
                  <div className="col-span-3 text-center text-[#E10000] text-sm font-black bg-[#FEF2F2] py-2.5 rounded-lg border border-[#FECACA]">
                    {row.ceramic}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer with Summary & CTA */}
            <div className="grid grid-cols-12 bg-[#F8FAFC] border-t border-[#E2E8F0] items-center p-8 gap-6">
              <div className="col-span-12 lg:col-span-8 text-sm text-[#64748B] leading-relaxed">
                <p>
                  <strong className="text-[#050B16]">Why Ceramic Wins:</strong> Standard dyed films only darken windows without stopping the infrared radiation responsible for searing Houston vehicle heat. Nano-ceramic film actively rejects high-wavelength infrared energy while keeping total glass optical clarity.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 text-center lg:text-right">
                <Link href="/quote?service=Ceramic%20Tint%20Heat%20Shield%20Protection">
                  <Button variant="primary" size="md" className="w-full sm:w-auto px-7 py-3.5 font-display">
                    Choose Ceramic Tint
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
