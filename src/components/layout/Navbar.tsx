"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { businessInfo } from "@/data/business";
import { Button } from "@/components/ui/Button";
import { BrandLogo } from "@/components/ui/BrandLogo";

// Clean, high-impact navigation links matching xmhouston structure
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Window Tint", href: "/window-tint" },
  { name: "Services & Prices", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm py-3.5"
          : "bg-white border-b border-[#E2E8F0] py-4"
      }`}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between">
          {/* Executive Brand Logo with Bespoke Automotive Icon */}
          <Link href="/" aria-label="FX Window Tint Home">
            <BrandLogo size="md" theme="dark" />
          </Link>

          {/* Clean, Spacious Navigation Links (Visible on Tablets & Desktops) */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-bold uppercase tracking-wider transition-colors relative py-1 font-display whitespace-nowrap ${
                    isActive
                      ? "text-[#E10000] after:w-full after:h-0.5 after:bg-[#E10000] after:absolute after:bottom-0 after:left-0"
                      : "text-[#1E293B] hover:text-[#E10000] hover:after:w-full after:w-0 after:h-0.5 after:bg-[#E10000] after:absolute after:bottom-0 after:left-0 after:transition-all"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 shrink-0">
            <a
              href={businessInfo.phoneTel}
              className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#050B16] hover:text-[#E10000] transition-colors py-1.5 px-2 rounded group font-display"
            >
              <div className="w-8 h-8 rounded-full bg-[#F1F5F9] group-hover:bg-[#FEF2F2] flex items-center justify-center text-[#E10000] transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <span className="block text-[9px] text-[#64748B] font-semibold">Call Shop</span>
                <span className="text-sm font-black text-[#050B16] group-hover:text-[#E10000] font-display">
                  {businessInfo.phoneDisplay}
                </span>
              </div>
            </a>

            <Link href="/quote">
              <Button size="md" variant="primary" className="px-5 lg:px-6 py-3 font-display">
                Get a Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (Only for screens < 768px) */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={businessInfo.phoneTel}
              className="p-2.5 rounded-lg bg-[#F1F5F9] text-[#E10000]"
              aria-label="Call FX Window Tint"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-[#F1F5F9] text-[#050B16] hover:text-[#E10000] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Only for screens < 768px) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider font-display transition-colors ${
                    isActive
                      ? "bg-[#FEF2F2] text-[#E10000]"
                      : "text-[#050B16] hover:bg-[#F8FAFC] hover:text-[#E10000]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
            <a
              href={businessInfo.phoneTel}
              className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-lg bg-[#F8FAFC] text-sm font-black text-[#050B16] hover:bg-[#F1F5F9] transition-colors font-display uppercase"
            >
              <Phone className="w-4 h-4 text-[#E10000]" />
              Call {businessInfo.phoneDisplay}
            </a>

            <Link href="/quote" className="block w-full">
              <Button size="lg" variant="primary" className="w-full font-display">
                Get a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
