"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { faqsData } from "@/data/faq";
import { businessInfo } from "@/data/business";

export function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1", "faq-2"]);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            COMMON QUESTIONS & EXPERT ADVICE
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Frequently Asked Questions
          </h2>

          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />

          <p className="text-base sm:text-lg text-[#64748B]">
            Everything you need to know about ceramic heat rejection, Texas tint regulations, drying times, and audio upgrades.
          </p>
        </div>

        {/* FAQ Accordion List - Widescreen grid/container */}
        <div className="max-w-5xl mx-auto space-y-4">
          {faqsData.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-black text-base sm:text-lg text-[#050B16] leading-snug uppercase font-display">
                    {item.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#E10000] transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#E10000] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#475569] leading-relaxed border-t border-[#E2E8F0] animate-in fade-in-50 duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Callout */}
        <div className="max-w-5xl mx-auto mt-12 bg-[#050B16] text-white rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-black text-white uppercase font-display">
              Have a Question About Your Specific Vehicle?
            </h4>
            <p className="text-sm text-[#94A3B8]">
              Call our Houston shop directly for fast, friendly recommendations and exact pricing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
            <a
              href={businessInfo.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#E10000] text-white font-black text-xs uppercase tracking-wider hover:bg-[#C50000] transition-all shadow-md font-display"
            >
              <Phone className="w-4 h-4" />
              Call {businessInfo.phoneDisplay}
            </a>

            <Link
              href="/quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050B16] hover:bg-[#F8FAFC] text-xs font-black uppercase tracking-wider transition-colors font-display"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
