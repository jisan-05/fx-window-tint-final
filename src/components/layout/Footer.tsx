import React from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B16] text-[#94A3B8] pt-16 pb-24 lg:pb-16 border-t border-white/10">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <Link href="/" aria-label="FX Window Tint Home">
              <BrandLogo size="md" theme="light" />
            </Link>

            <p className="text-sm leading-relaxed text-[#94A3B8]">
              {businessInfo.tagline} Houston’s trusted shop for nano-ceramic window tinting, Tesla glass heat shields, touchscreen stereo systems, and automotive security.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-white">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold">{businessInfo.reviews.count} Google Reviews</span>
            </div>

            <a
              href={businessInfo.googleMaps.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#E10000] hover:underline font-bold uppercase tracking-wider font-display"
            >
              Verify on Google Business Profile
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Col 2: Navigation & Services */}
          <div>
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4 border-l-2 border-[#E10000] pl-2.5 font-display">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/window-tint"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#E10000]" />
                  Ceramic Window Tinting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#E10000]" />
                  All 10 Services & Starting Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#E10000]" />
                  Installation Showcase Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#E10000]" />
                  Houston Shop & Directions
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[#E10000] font-bold"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#E10000]" />
                  Request a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Client Services & Prices */}
          <div>
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4 border-l-2 border-[#E10000] pl-2.5 font-display">
              Advertised Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span>Ceramic Tint Heat Shield</span>
                <span className="text-white font-bold font-display">$250+</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span>Tesla Ceramic Tinting</span>
                <span className="text-white font-bold font-display">$399+</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span>Windshield Ceramic Tint</span>
                <span className="text-white font-bold font-display">$180+</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span>Car Audio Upgrades</span>
                <span className="text-white font-bold font-display">$199+</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-white/5">
                <span>Viper Remote Start</span>
                <span className="text-white font-bold font-display">$159+</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span>Defroster-Safe Tint Removal</span>
                <span className="text-white font-bold font-display">$20+</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Shop Location & Direct Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-black text-xs tracking-widest uppercase mb-4 border-l-2 border-[#E10000] pl-2.5 font-display">
              Shop Location
            </h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-[#E10000] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold font-display">{businessInfo.address.street}</p>
                <p className="text-xs text-[#94A3B8]">
                  {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                </p>
                <p className="text-[11px] text-[#64748B] mt-0.5">Off TX-249 & FM 1960 area</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-[#E10000] shrink-0" />
              <div>
                <a
                  href={businessInfo.phoneTel}
                  className="text-white font-bold hover:text-[#E10000] transition-colors font-display"
                >
                  {businessInfo.phoneDisplay}
                </a>
                <span className="text-[11px] text-[#64748B] block">Direct Line / Walk-ins Welcome</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm">
              <Clock className="w-5 h-5 text-[#E10000] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                {businessInfo.hours.map((h, i) => (
                  <p key={i} className={i === 0 ? "text-white font-medium" : "text-amber-400 font-medium"}>
                    <span className="text-[#94A3B8]">{h.days}:</span> {h.time}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs text-white bg-[#1E293B] hover:bg-[#E10000] px-4 py-2 rounded font-bold uppercase tracking-wider font-display transition-colors"
              >
                View Map & Directions
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#64748B] gap-4">
          <p>© {currentYear} FX Window Tint Stereo Alarms Car Audio. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[11px]">
              *Advertised starting prices subject to vehicle year, model, and film selection. Texas tint regulations apply.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
