"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  item,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#E10000] text-white transition-all hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#E10000] text-white transition-all hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Container */}
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-white rounded-xl border border-white/20 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[55vh] sm:h-[65vh] bg-[#050B16]">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
        </div>

        <div className="p-5 sm:p-6 bg-white border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-[#FEF2F2] text-[#E10000] border border-[#FECACA] uppercase tracking-wider font-display">
                {item.categoryLabel}
              </span>
              <span className="text-xs text-[#64748B] flex items-center gap-1 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#E10000]" />
                {item.specs}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-[#050B16] uppercase font-display">
              {item.title}
            </h3>
            <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
              {item.description}
            </p>
          </div>

          <Link
            href={`/quote?service=${encodeURIComponent(item.categoryLabel === "Tesla & EV" ? "Tesla Ceramic Tinting" : item.categoryLabel === "Windshield Tint" ? "Windshield Ceramic Tint" : item.categoryLabel === "Car Audio" ? "Car Audio Upgrades" : "Ceramic Tint Heat Shield Protection")}`}
            onClick={onClose}
            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#E10000] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#C50000] transition-colors whitespace-nowrap shadow-md"
          >
            Get Quote for This
          </Link>
        </div>
      </div>
    </div>
  );
}
