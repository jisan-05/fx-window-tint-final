import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Flame, Sparkles, MapPin } from "lucide-react";
import { businessInfo } from "@/data/business";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#050B16] text-white relative overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/50 border border-white/20 text-[#E10000] text-xs font-black uppercase tracking-widest font-display">
            <Flame className="w-3.5 h-3.5" />
            <span>HOUSTON HEAT PROTECTION STARTS HERE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight uppercase font-display">
            Your Car Deserves Better Protection.
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto" />

          <p className="text-base sm:text-xl lg:text-2xl text-[#CBD5E1] leading-relaxed max-w-3xl mx-auto">
            Get premium ceramic window tinting and automotive upgrades from FX Window Tint in Houston. Stop enduring a scorching cabin and start enjoying every drive.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-3">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-red transition-all duration-200 active:scale-[0.98] text-center font-display"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={businessInfo.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-white hover:bg-[#F8FAFC] text-[#050B16] font-black text-sm sm:text-base uppercase tracking-wider transition-all duration-200 active:scale-[0.98] text-center font-display"
            >
              <Phone className="w-5 h-5 text-[#E10000]" />
              <span>CALL NOW: {businessInfo.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#94A3B8] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-2 text-white">
              <ShieldCheck className="w-4 h-4 text-[#E10000]" />
              285 Google Reviews
            </span>
            <span className="flex items-center gap-2 text-white">
              <Sparkles className="w-4 h-4 text-[#E10000]" />
              Walk-ins Welcome
            </span>
            <span className="flex items-center gap-2 text-white">
              <MapPin className="w-4 h-4 text-[#E10000]" />
              <span>11649 TX-249 #600, Houston</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
