import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";
import { businessInfo } from "@/data/business";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description: "Guaranteed against bubbling & peeling.",
    href: "/window-tint",
  },
  {
    icon: CheckCircle2,
    title: "Master Installers",
    description: "Highly trained. Factory-clean edge cuts.",
    href: "/services",
  },
  {
    icon: Layers,
    title: "Premium Ceramic Films",
    description: "90%+ infrared heat rejection.",
    href: "/window-tint",
  },
  {
    icon: Award,
    title: "Top-Rated Houston Shop",
    description: `${businessInfo.reviews.count} Verified Google Reviews.`,
    href: businessInfo.googleMaps.profileUrl,
    isExternal: true,
  },
  {
    icon: Sparkles,
    title: "Defroster-Safe Guarantee",
    description: "Safe extraction on rear heating grids.",
    href: "/services",
  },
];

export function TrustCredibility() {
  return (
    <section className="bg-white py-14 lg:py-16 border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            const CardContent = (
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 lg:p-7 text-center transition-all duration-200 hover:shadow-md hover:border-[#CBD5E1] group h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center mx-auto mb-4 text-[#E10000] shadow-sm group-hover:bg-[#E10000] group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-sm lg:text-base font-black text-[#050B16] uppercase font-display mb-1.5 group-hover:text-[#E10000] transition-colors leading-snug">
                    {badge.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-[#64748B] leading-tight">
                    {badge.description}
                  </p>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#E10000] font-display mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More &rarr;
                </span>
              </div>
            );

            if (badge.isExternal) {
              return (
                <a
                  key={index}
                  href={badge.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  {CardContent}
                </a>
              );
            }

            return (
              <Link key={index} href={badge.href} className="block h-full">
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
