"use client";

import React, { useState } from "react";
import {
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Car,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { businessInfo } from "@/data/business";

export function BookingInquiry() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    vehicle: "",
    service: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [quoteId, setQuoteId] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (!formData.vehicle.trim()) {
      errs.vehicle = "Please enter your vehicle (e.g. 2024 Tesla Model Y)";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          vehicle: formData.vehicle,
          service: formData.service.trim() || "Window Tint / Automotive Service Inquiry",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit. Please call (832) 768-6256.");
      }

      setQuoteId(data.quoteId || `FX-${Date.now().toString(36).toUpperCase()}`);
      setIsSuccess(true);
    } catch (err: any) {
      setSubmitError(err.message || "An error occurred. Call (832) 768-6256 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      phone: "",
      vehicle: "",
      service: "",
    });
    setErrors({});
  };

  return (
    <section id="book" className="py-16 lg:py-24 bg-[#F8FAFC] relative border-b border-[#E2E8F0]">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-2xl mx-auto">
          {/* Simple Header */}
          <div className="text-center mb-8">
            <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E10000]" />
              FAST 30-SECOND BOOKING
            </p>

            <h2 className="text-3xl sm:text-4xl font-black text-[#050B16] tracking-tight uppercase font-display">
              Book Your Service Appointment
            </h2>

            <div className="w-14 h-1 bg-[#E10000] mx-auto mt-3 mb-3" />

            <p className="text-sm sm:text-base text-[#64748B]">
              Enter your details below and our Houston shop will contact you right away to confirm your time. Walk-ins are also welcome!
            </p>
          </div>

          {/* Clean White Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] shadow-md">
            {isSuccess ? (
              /* Success State */
              <div className="text-center py-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-600 font-display">
                    REQUEST RECEIVED
                  </span>
                  <h3 className="text-2xl font-black text-[#050B16] uppercase font-display">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B]">
                    We received your booking request for your <strong>{formData.vehicle}</strong>
                    {formData.service ? ` (${formData.service})` : ""}. We will call you shortly at <strong>{formData.phone}</strong>.
                  </p>
                </div>

                <div className="p-3 bg-[#F8FAFC] rounded-lg border border-[#E2E8F0] text-xs text-[#334155] inline-block font-mono">
                  Booking Ref: <strong>{quoteId}</strong>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={businessInfo.phoneTel}
                    className="w-full sm:w-auto px-6 py-3 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-xs uppercase tracking-wider font-display transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Shop: {businessInfo.phoneDisplay}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto px-5 py-3 rounded-md border border-[#CBD5E1] text-[#334155] hover:bg-[#F1F5F9] font-black text-xs uppercase tracking-wider font-display transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Book Another</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Simple 4-Field Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* Name & Phone in 1 row on tablet/desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050B16] mb-1 font-display">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. John Miller"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#050B16] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#E10000] transition-all ${
                        errors.fullName ? "border-red-500 bg-red-50/30" : "border-[#CBD5E1] bg-white"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#050B16] mb-1 font-display">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(832) 768-6256"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#050B16] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#E10000] transition-all ${
                        errors.phone ? "border-red-500 bg-red-50/30" : "border-[#CBD5E1] bg-white"
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-600 mt-0.5 block">{errors.phone}</span>
                    )}
                  </div>
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050B16] mb-1 font-display">
                    Vehicle (Year, Make & Model) *
                  </label>
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="e.g. 2024 Tesla Model Y, Ford F-150, Honda Civic"
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#050B16] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#E10000] transition-all ${
                      errors.vehicle ? "border-red-500 bg-red-50/30" : "border-[#CBD5E1] bg-white"
                    }`}
                  />
                  {errors.vehicle && (
                    <span className="text-[11px] text-red-600 mt-0.5 block">{errors.vehicle}</span>
                  )}
                </div>

                {/* Service or Work Needed - Text Input Box */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#050B16] mb-1 font-display">
                    Service Needed
                  </label>
                  <input
                    type="text"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    placeholder="e.g. Ceramic Window Tint, Front Windshield, Car Audio, Remote Start"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#CBD5E1] bg-white text-sm text-[#050B16] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#E10000] transition-all"
                  />
                </div>

                {/* Big Direct Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.98] shadow-md font-display flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>BOOK APPOINTMENT / GET CALLBACK</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Phone Backup */}
                <p className="text-center text-xs text-[#64748B] pt-1">
                  Need same-day service right now? Call{" "}
                  <a href={businessInfo.phoneTel} className="font-bold text-[#E10000] hover:underline">
                    {businessInfo.phoneDisplay}
                  </a>
                  {" • "}Walk-ins welcome at 11649 TX-249 #600
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
