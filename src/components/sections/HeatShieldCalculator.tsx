"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Flame,
  Sun,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

export function HeatShieldCalculator() {
  const [ambientTemp, setAmbientTemp] = useState<number>(98);

  const noTintInterior = Math.round(ambientTemp * 1.48);
  const standardTintInterior = Math.round(ambientTemp * 1.25);
  const ceramicTintInterior = Math.round(ambientTemp * 1.04);

  const noTintWheel = Math.round(ambientTemp * 1.62);
  const standardTintWheel = Math.round(ambientTemp * 1.34);
  const ceramicTintWheel = Math.round(ambientTemp * 1.08);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            HOUSTON CLIMATE IMPACT TEST
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            See the Ceramic Temperature Difference
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B]">
            Drag the outside Houston temperature slider below to see how standard film compares against advanced Nano-Ceramic Infrared heat rejection.
          </p>
        </div>

        {/* Interactive Temperature Control Card */}
        <div className="max-w-5xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl p-7 sm:p-10 shadow-sm mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs uppercase font-extrabold text-[#64748B] tracking-wider block font-display">
                Adjust Outside Houston Ambient Temperature:
              </span>
              <span className="text-3xl lg:text-4xl font-black text-[#050B16] flex items-center gap-2 mt-1 font-display">
                <Sun className="w-8 h-8 text-amber-500" />
                {ambientTemp}°F{" "}
                <span className="text-xs font-bold text-[#E10000] uppercase font-display">
                  {ambientTemp >= 100
                    ? "(Extreme Houston Heat Wave)"
                    : ambientTemp >= 95
                    ? "(Typical Summer Afternoon)"
                    : "(Warm Spring/Summer Day)"}
                </span>
              </span>
            </div>

            {/* Quick preset buttons */}
            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setAmbientTemp(90)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all font-display ${
                  ambientTemp === 90
                    ? "bg-[#E10000] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1]"
                }`}
              >
                90°F
              </button>
              <button
                onClick={() => setAmbientTemp(98)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all font-display ${
                  ambientTemp === 98
                    ? "bg-[#E10000] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1]"
                }`}
              >
                98°F (Avg)
              </button>
              <button
                onClick={() => setAmbientTemp(104)}
                className={`px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-all font-display ${
                  ambientTemp === 104
                    ? "bg-[#E10000] text-white shadow-sm"
                    : "bg-[#F8FAFC] text-[#334155] border border-[#CBD5E1]"
                }`}
              >
                104°F (Peak)
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="pt-7">
            <input
              type="range"
              min={85}
              max={110}
              value={ambientTemp}
              onChange={(e) => setAmbientTemp(Number(e.target.value))}
              className="w-full h-3 bg-[#E2E8F0] rounded-lg appearance-none cursor-pointer accent-[#E10000]"
            />
            <div className="flex justify-between text-xs text-[#64748B] mt-2 font-mono font-bold">
              <span>85°F</span>
              <span>95°F</span>
              <span>100°F</span>
              <span>105°F</span>
              <span>110°F</span>
            </div>
          </div>
        </div>

        {/* 3-Column Comparative Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Card 1: Factory Clear Glass (No Tint) */}
          <div className="bg-white border border-rose-200 rounded-2xl p-7 lg:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
                <span className="text-xs font-black uppercase tracking-wider text-rose-700 font-display">
                  Factory Glass (No Tint)
                </span>
                <span className="text-xs text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded font-mono font-bold">
                  0% IR Rejection
                </span>
              </div>

              <div className="py-7 space-y-5">
                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Peak Interior Cabin Temp:</span>
                  <span className="text-4xl lg:text-5xl font-black text-rose-600 font-display">
                    {noTintInterior}°F
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Steering Wheel Surface Temp:</span>
                  <span className="text-2xl lg:text-3xl font-black text-[#050B16] font-display">
                    {noTintWheel}°F <span className="text-xs text-rose-600">(Scorching)</span>
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-[#64748B] pt-3 border-t border-[#E2E8F0] space-y-1.5 font-medium leading-relaxed">
                  <p>• A/C Cool-down: <strong>15–20 minutes</strong></p>
                  <p>• UV Protection: Minimal factory glass</p>
                  <p>• Severe dashboard leather UV drying</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] text-center">
              <span className="text-xs text-rose-600 font-black uppercase tracking-wider font-display">
                Unprotected Greenhouse
              </span>
            </div>
          </div>

          {/* Card 2: Standard Dyed Film */}
          <div className="bg-white border border-amber-200 rounded-2xl p-7 lg:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0]">
                <span className="text-xs font-black uppercase tracking-wider text-amber-700 font-display">
                  Standard Dyed Tint
                </span>
                <span className="text-xs text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded font-mono font-bold">
                  ~15% IR Rejection
                </span>
              </div>

              <div className="py-7 space-y-5">
                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Peak Interior Cabin Temp:</span>
                  <span className="text-4xl lg:text-5xl font-black text-amber-600 font-display">
                    {standardTintInterior}°F
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Steering Wheel Surface Temp:</span>
                  <span className="text-2xl lg:text-3xl font-black text-[#050B16] font-display">
                    {standardTintWheel}°F <span className="text-xs text-amber-600">(Very Hot)</span>
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-[#64748B] pt-3 border-t border-[#E2E8F0] space-y-1.5 font-medium leading-relaxed">
                  <p>• A/C Cool-down: <strong>8–12 minutes</strong></p>
                  <p>• Dims visible light only</p>
                  <p>• Traps heat over prolonged parking</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] text-center">
              <span className="text-xs text-amber-700 font-black uppercase tracking-wider font-display">
                Basic Privacy with Low Heat Relief
              </span>
            </div>
          </div>

          {/* Card 3: Nano-Ceramic Tint (FX Window Tint Flagship) */}
          <div className="bg-white border-2 border-[#E10000] rounded-2xl p-7 lg:p-8 flex flex-col justify-between shadow-md relative scale-105">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#E10000] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded shadow-sm font-display">
              ★ FX CERAMIC HEAT SHIELD
            </div>

            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-[#E2E8F0] pt-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#E10000] font-display">
                  Nano-Ceramic IR Film
                </span>
                <span className="text-xs text-[#E10000] bg-[#FEF2F2] px-2.5 py-0.5 rounded font-mono font-black border border-[#FECACA]">
                  90%+ IR Rejection
                </span>
              </div>

              <div className="py-7 space-y-5">
                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Peak Interior Cabin Temp:</span>
                  <span className="text-4xl lg:text-5xl font-black text-[#E10000] font-display">
                    {ceramicTintInterior}°F
                  </span>
                  <span className="text-xs text-emerald-700 font-black ml-2 uppercase font-display">
                    (-{noTintInterior - ceramicTintInterior}°F Cooler!)
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Steering Wheel Surface Temp:</span>
                  <span className="text-2xl lg:text-3xl font-black text-[#050B16] font-display">
                    {ceramicTintWheel}°F <span className="text-xs text-emerald-700 font-bold">(Safe to Touch)</span>
                  </span>
                </div>

                <div className="text-xs sm:text-sm text-[#334155] pt-3 border-t border-[#E2E8F0] space-y-1.5 font-medium leading-relaxed">
                  <p className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Zap className="w-4 h-4" />
                    A/C Cool-down: <strong>Under 3 minutes</strong>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#E10000]" />
                    99% UV Ray Rejection (SPF 1000+)
                  </p>
                  <p className="text-[#64748B]">• Zero radio or GPS signal interference</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E2E8F0] text-center">
              <Link
                href="/quote?service=Ceramic%20Tint%20Heat%20Shield%20Protection"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-xs uppercase tracking-wider transition-all shadow-sm font-display"
              >
                <span>Get Ceramic Heat Shield ($250+)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
