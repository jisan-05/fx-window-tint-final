import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Flame, MapPin } from "lucide-react";
import { businessInfo } from "@/data/business";
import { assetRegistry } from "@/data/assets";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] xl:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050B16]">
      {/* Background Cinematic Vehicle Image with Reduced Overlay for Maximum Vehicle Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src={assetRegistry.heroVehicle.currentPath}
          alt={assetRegistry.heroVehicle.alt}
          fill
          priority
          className="object-cover object-center scale-105 opacity-90"
          sizes="100vw"
        />
        {/* Soft, targeted gradient: dark on left for text legibility, clear on right so the vehicle shines */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B16]/90 via-[#050B16]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B16] via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-24 lg:py-32 xl:py-36 w-full">
        <div className="max-w-4xl">
          {/* Top Label & Walk-in Badges (xmhouston style) */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-black/60 border border-white/20 text-[#E10000] text-xs font-black tracking-widest uppercase backdrop-blur-md font-display">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E10000] animate-pulse" />
              <span>HOUSTON AUTOMOTIVE TINT & ACCESSORIES</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md font-display">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Walk-ins Welcome • Same-Day Service</span>
            </div>
          </div>

          {/* Main Heading with Termina/Montserrat bold uppercase styling */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6 uppercase font-display">
            Beat the Houston Heat.{" "}
            <span className="text-[#E10000] block mt-1">
              Drive in Comfort.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#CBD5E1] font-normal leading-relaxed mb-10 max-w-3xl">
            Experience premium ceramic window tinting and professional automotive upgrades at FX Window Tint. Better comfort, cleaner style, and quality installation.
          </p>

          {/* Conversion Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-sm sm:text-base tracking-wider uppercase shadow-red transition-all duration-200 active:scale-[0.98] text-center font-display"
            >
              <span>GET A FREE QUOTE</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={businessInfo.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-md bg-white hover:bg-[#F8FAFC] text-[#050B16] font-black text-sm sm:text-base tracking-wider uppercase border border-white transition-all duration-200 active:scale-[0.98] text-center shadow-lg font-display"
            >
              <Phone className="w-5 h-5 text-[#E10000]" />
              <span>CALL {businessInfo.phoneDisplay}</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-bold uppercase tracking-wider text-white max-w-3xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#E10000]" />
              </div>
              <div>
                <span className="block text-white font-black font-display text-sm">{businessInfo.reviews.count} Google Reviews</span>
                <span className="text-[#94A3B8] text-[11px] normal-case font-medium">Verified Local Clients</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5 text-[#E10000]" />
              </div>
              <div>
                <span className="block text-white font-black font-display text-sm">Ceramic Specialists</span>
                <span className="text-[#94A3B8] text-[11px] normal-case font-medium">90%+ IR Heat Protection</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#E10000]" />
              </div>
              <div>
                <span className="block text-white font-black font-display text-sm">Houston Shop</span>
                <span className="text-[#94A3B8] text-[11px] normal-case font-medium">11649 TX-249 #600</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
