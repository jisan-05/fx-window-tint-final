import React from "react";
import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { businessInfo } from "@/data/business";

export function MobileFloatingCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-[#E2E8F0] px-3 py-2.5 shadow-lg">
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={businessInfo.phoneTel}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#050B16] text-white font-black text-xs uppercase tracking-wider active:scale-95 transition-all text-center font-display"
        >
          <Phone className="w-4 h-4 text-[#E10000]" />
          <span>Call Shop</span>
        </a>

        <Link
          href="/quote"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#E10000] text-white font-black text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all text-center font-display"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Free Quote</span>
        </Link>
      </div>
    </div>
  );
}
