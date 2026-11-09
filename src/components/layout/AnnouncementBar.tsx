import React from "react";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { businessInfo } from "@/data/business";

export function AnnouncementBar() {
  return (
    <div className="bg-[#050B16] text-white text-xs py-2 px-3 sm:py-2.5 sm:px-8 lg:px-12 xl:px-16 relative z-40 border-b border-white/10">
      <div className="max-w-[1536px] mx-auto">
        {/* Mobile Screen View (< 640px): Sleek, Single-Line, Never Awkwardly Wrapped */}
        <div className="flex sm:hidden items-center justify-between w-full gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#E10000] animate-pulse shrink-0" />
            <span className="text-[#E10000] font-black uppercase tracking-wider text-[10px] font-display shrink-0">
              Houston, TX:
            </span>
            <span className="text-white/90 truncate text-[11px] font-medium">
              Ceramic Tint & Audio
            </span>
          </div>

          <a
            href={businessInfo.phoneTel}
            className="inline-flex items-center gap-1 text-white hover:text-[#E10000] font-black shrink-0 font-display text-[11px] transition-colors bg-white/10 px-2 py-0.5 rounded border border-white/15"
            aria-label="Call FX Window Tint"
          >
            <Phone className="w-3 h-3 text-[#E10000]" />
            <span>(832) 768-6256</span>
          </a>
        </div>

        {/* Tablet & Desktop View (>= 640px): Full Executive Details */}
        <div className="hidden sm:flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2 font-medium tracking-wide">
            <span className="inline-flex items-center gap-1.5 text-[#E10000] font-bold uppercase tracking-wider font-display shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#E10000] animate-pulse" />
              Houston, TX:
            </span>
            <span className="text-white/90 text-xs truncate">
              Automotive Window Tinting, Ceramic IR Heat Shields & Car Audio
            </span>
          </div>

          <div className="flex items-center gap-5 lg:gap-6 text-xs shrink-0">
            <span className="hidden lg:inline-flex items-center gap-1.5 text-white/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E10000]" />
              285 Google Reviews
            </span>

            <a
              href={businessInfo.googleMaps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-1 text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#E10000]" />
              <span>11649 TX-249 #600</span>
            </a>

            <a
              href={businessInfo.phoneTel}
              className="text-white hover:text-[#E10000] font-bold inline-flex items-center gap-1 transition-colors font-display text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#E10000]" />
              <span>{businessInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
