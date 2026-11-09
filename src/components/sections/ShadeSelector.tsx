"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Thermometer,
  Sun,
  Eye,
  AlertTriangle,
  HelpCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { tintShades, TintShade } from "@/data/shades";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";

export function ShadeSelector() {
  const [activeShade, setActiveShade] = useState<TintShade>(tintShades[3]); // 30% Texas Legal Front

  return (
    <section id="shades" className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header - exactly styled like xmhouston */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            INTERACTIVE EXPERIENCE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Choose Your <span className="text-[#E10000]">Shade.</span>
          </h2>
          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-[#050B16] font-bold uppercase font-display">
            Shade controls darkness. Film technology controls heat.
          </p>
          <p className="text-sm text-[#64748B] mt-1 max-w-xl mx-auto">
            Click any tint darkness below to preview the exterior visibility and understand Texas legal compliance.
          </p>
        </div>

        {/* 3 Core Benefit Icon Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#FEF2F2] flex items-center justify-center mx-auto mb-4 text-[#E10000]">
              <Thermometer className="w-7 h-7" />
            </div>
            <h4 className="text-base font-black text-[#050B16] uppercase font-display mb-1.5">
              Maximum Heat Rejection
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Up to 90%+ infrared heat blocked with premium nano-ceramic film.
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#FEF2F2] flex items-center justify-center mx-auto mb-4 text-[#E10000]">
              <Sun className="w-7 h-7" />
            </div>
            <h4 className="text-base font-black text-[#050B16] uppercase font-display mb-1.5">
              99% UV Ray Protection
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Shields skin and prevents vehicle leather cracking and dash fading.
            </p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-7 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 rounded-full bg-[#FEF2F2] flex items-center justify-center mx-auto mb-4 text-[#E10000]">
              <Eye className="w-7 h-7" />
            </div>
            <h4 className="text-base font-black text-[#050B16] uppercase font-display mb-1.5">
              Clarity & Glare Reduction
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Maintains crystal optical clarity at night while cutting blinding sun glare.
            </p>
          </div>
        </div>

        {/* Main Simulator Card - Widescreen */}
        <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* Shade Percentage Selector Buttons */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#050B16] font-display">
                Select Tint Darkness (Visible Light Transmission):
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#E10000] uppercase font-display">
                Selected: {activeShade.percentage}% VLT
              </span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 lg:gap-4">
              {tintShades.map((shade) => {
                const isSelected = activeShade.percentage === shade.percentage;
                return (
                  <button
                    key={shade.percentage}
                    onClick={() => setActiveShade(shade)}
                    className={`py-4 lg:py-5 px-3 rounded-xl border text-center transition-all duration-200 ${
                      isSelected
                        ? "bg-[#E10000] border-[#E10000] text-white shadow-md scale-105"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#050B16] hover:border-[#CBD5E1] hover:bg-white"
                    }`}
                  >
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-black font-display">
                      {shade.percentage}%
                    </span>
                    <span
                      className={`block text-[11px] uppercase font-bold tracking-wider mt-1.5 ${
                        isSelected ? "text-white/90" : "text-[#64748B]"
                      }`}
                    >
                      {shade.percentage <= 5
                        ? "Limo 5%"
                        : shade.percentage <= 15
                        ? "Dark 15%"
                        : shade.percentage <= 20
                        ? "Dark 20%"
                        : shade.percentage === 30
                        ? "TX Legal 30%"
                        : shade.percentage <= 50
                        ? "Light 50%"
                        : "Clear IR 70%"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Window Visualizer Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 lg:p-10">
            {/* Visual Glass Display */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full aspect-[16/9] rounded-2xl bg-[#0B1320] p-4 sm:p-5 flex flex-col justify-between border border-[#1E293B] overflow-hidden shadow-inner">
                {/* Real Vehicle Interior Cabin Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop"
                    alt="Realistic vehicle cabin interior visibility preview"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 700px"
                  />
                  {/* Dynamic Opacity Tint Layer */}
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      backgroundColor: "#050709",
                      opacity: activeShade.opacityValue,
                    }}
                  />
                  {/* Optical Glass Sheen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
                </div>

                {/* Glass Top Badge */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded bg-black/80 border border-white/20 text-white backdrop-blur-sm">
                    {activeShade.percentage}% VLT SIMULATION
                  </span>
                  <span className="text-xs sm:text-sm font-bold px-2.5 py-1 rounded bg-[#E10000] text-white uppercase font-display shadow-sm">
                    {activeShade.darknessLevel}
                  </span>
                </div>

                {/* Glass Bottom Visibility Bar */}
                <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm text-white bg-black/85 p-3 sm:p-3.5 rounded-xl border border-white/20 backdrop-blur-md">
                  <span className="flex items-center gap-2 font-medium">
                    <Eye className="w-4 h-4 text-[#E10000]" />
                    Interior Cabin Visibility:
                  </span>
                  <span className="font-bold text-[#E10000]">
                    {activeShade.percentage <= 5
                      ? "Almost 0% (Total Privacy)"
                      : activeShade.percentage <= 15
                      ? "Low (~15% Visible)"
                      : activeShade.percentage <= 20
                      ? "Moderate (~20% Visible)"
                      : activeShade.percentage <= 30
                      ? "Good (~30% Visible)"
                      : activeShade.percentage <= 50
                      ? "High (~50% Clear)"
                      : "Crystal Clear (~70% Visible)"}
                  </span>
                </div>
              </div>

              <span className="text-xs text-[#64748B] mt-3 text-center">
                Visual representation for comparative purposes. Physical tint appearance may slightly vary based on interior upholstery and ambient light.
              </span>
            </div>

            {/* Right: Selected Shade Details */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#E10000] block font-display">
                  Active Shade Selection
                </span>
                <h3 className="text-2xl lg:text-3xl font-black text-[#050B16] uppercase font-display">
                  {activeShade.label}
                </h3>
              </div>

              <p className="text-sm lg:text-base text-[#475569] leading-relaxed">
                {activeShade.description}
              </p>

              {/* Texas Tint Law Box */}
              <div className="p-5 rounded-xl bg-white border border-amber-300 text-xs text-[#334155] space-y-1.5 shadow-sm">
                <div className="flex items-center gap-1.5 font-black text-amber-800 uppercase font-display text-sm">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
                  <span>Texas Tint Law Guide:</span>
                </div>
                <p className="text-xs lg:text-sm text-[#64748B] leading-relaxed">
                  {activeShade.texasLawNotice}
                </p>
                <p className="text-[11px] text-[#64748B] italic pt-1.5 border-t border-[#E2E8F0]">
                  *Texas law requires at least 25% light transmission on front side windows. Always confirm with our technicians before installation.
                </p>
              </div>

              <div className="text-xs lg:text-sm text-[#334155]">
                <strong className="text-[#050B16] block mb-0.5 uppercase font-bold font-display">
                  Recommended Window Positions:
                </strong>
                <span className="text-[#64748B]">{activeShade.recommendedPosition}</span>
              </div>

              <div className="pt-2">
                <Link
                  href="/quote?service=Ceramic%20Tint%20Heat%20Shield%20Protection"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-md bg-[#E10000] text-white font-black text-xs uppercase tracking-wider hover:bg-[#C50000] transition-all shadow-md font-display"
                >
                  <span>Request Quote with {activeShade.percentage}% Tint</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* 3 Position Breakdown Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#E2E8F0]">
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-sm font-black uppercase text-[#050B16] block mb-1.5 font-display">
                70% Clear Ceramic Shield
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Helps reduce UV exposure and massive heat entering windshields while maintaining a crystal-clear factory appearance.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-sm font-black uppercase text-[#050B16] block mb-1.5 font-display">
                30% – 50% Texas Legal Front
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                A clean, lighter appearance for front driver and passenger windows fully compliant with Texas state inspection regulations.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="text-sm font-black uppercase text-[#050B16] block mb-1.5 font-display">
                5% – 20% Rear Cabin Privacy
              </span>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Added privacy, anti-glare, and a darker executive appearance for the rear passengers and cargo area.
              </p>
            </div>
          </div>

          {/* Unsure Contact Box */}
          <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base lg:text-lg font-black text-[#050B16] uppercase font-display flex items-center justify-center sm:justify-start gap-2">
                <HelpCircle className="w-5 h-5 text-[#E10000]" />
                Not sure which shade to choose? Ask our Houston team.
              </h4>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                Drop by our 11649 TX-249 shop to view real film samples on glass or call for friendly advice.
              </p>
            </div>

            <a
              href={businessInfo.phoneTel}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#050B16] text-white hover:bg-[#1E293B] font-bold text-xs uppercase tracking-wider whitespace-nowrap font-display"
            >
              <Phone className="w-4 h-4 text-[#E10000]" />
              Call {businessInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
