"use client";

import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Phone,
  ShieldCheck,
  Sparkles,
  Car,
  RotateCcw,
  Check,
  Calendar,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { businessInfo } from "@/data/business";
import { servicesData } from "@/data/services";

interface QuoteFormProps {
  selectedServicePreset?: string;
}

export function QuoteForm({ selectedServicePreset }: QuoteFormProps) {
  const [step, setStep] = useState<number>(1);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    vehicleYear: "",
    vehicleMake: "",
    vehicleModel: "",
    service: "Ceramic Tint Heat Shield Protection",
    startingPrice: 250,
    preferredDate: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [quoteReferenceId, setQuoteReferenceId] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Sync when user clicks any "Get a Quote for this service" button from services section
  useEffect(() => {
    if (selectedServicePreset) {
      const matched = servicesData.find(
        (s) => s.name.toLowerCase() === selectedServicePreset.toLowerCase()
      );
      if (matched) {
        setFormData((prev) => ({
          ...prev,
          service: matched.name,
          startingPrice: matched.startingPrice,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          service: selectedServicePreset,
        }));
      }
      // Jump to step 2 directly to make UX effortless
      setStep(2);
    }
  }, [selectedServicePreset]);

  const selectServiceItem = (name: string, price: number) => {
    setFormData((prev) => ({ ...prev, service: name, startingPrice: price }));
    setStep(2);
  };

  const handleNextFromStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.vehicleYear.trim()) errs.vehicleYear = "Enter vehicle year";
    if (!formData.vehicleMake.trim()) errs.vehicleMake = "Enter vehicle make";
    if (!formData.vehicleModel.trim()) errs.vehicleModel = "Enter vehicle model";

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep(3);
  };

  const validateFinal = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your name";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateFinal()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit quote inquiry.");
      }

      setQuoteReferenceId(data.quoteId || `FX-${Date.now().toString(36).toUpperCase()}`);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    } catch (err: any) {
      console.error("Quote submission error:", err);
      setSubmitError(err.message || "Failed to connect to shop server. Please call (832) 768-6256 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmitError(null);
    setQuoteReferenceId(null);
    setSubmittedData(null);
    setStep(1);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      vehicleYear: "",
      vehicleMake: "",
      vehicleModel: "",
      service: "Ceramic Tint Heat Shield Protection",
      startingPrice: 250,
      preferredDate: "",
      notes: "",
    });
    setErrors({});
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-white relative border-b border-[#E2E8F0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Styled like xmhouston online booking */}
        <div className="text-center mb-12">
          <p className="text-xs font-black uppercase tracking-widest text-[#E10000] mb-2 font-display">
            EASY 3-STEP ONLINE ESTIMATE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#050B16] tracking-tight uppercase font-display">
            Book Your Appointment & Quote
          </h2>
          <div className="w-16 h-1 bg-[#E10000] mx-auto mt-4 mb-4" />
          <p className="text-base text-[#64748B] max-w-xl mx-auto">
            Select your service, tell us your vehicle, and get a fast quote estimate from our Houston shop in under 60 seconds.
          </p>
        </div>

        {/* 3-Step Progress Header */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto mb-10 text-center">
          <button
            onClick={() => setStep(1)}
            className={`py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-bold uppercase transition-all ${
              step === 1
                ? "bg-[#050B16] text-white border-[#050B16] shadow-sm font-display"
                : step > 1
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-[#F8FAFC] text-[#94A3B8] border-[#E2E8F0]"
            }`}
          >
            <span className="block text-[10px] tracking-wider font-mono">STEP 1</span>
            <span className="truncate block">1. Select Service</span>
          </button>

          <button
            onClick={() => {
              if (formData.service) setStep(2);
            }}
            className={`py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-bold uppercase transition-all ${
              step === 2
                ? "bg-[#050B16] text-white border-[#050B16] shadow-sm font-display"
                : step > 2
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : "bg-[#F8FAFC] text-[#94A3B8] border-[#E2E8F0]"
            }`}
          >
            <span className="block text-[10px] tracking-wider font-mono">STEP 2</span>
            <span className="truncate block">2. Vehicle Info</span>
          </button>

          <button
            onClick={() => {
              if (formData.vehicleMake) setStep(3);
            }}
            className={`py-3 px-2 sm:px-4 rounded-xl border text-xs sm:text-sm font-bold uppercase transition-all ${
              step === 3
                ? "bg-[#050B16] text-white border-[#050B16] shadow-sm font-display"
                : "bg-[#F8FAFC] text-[#94A3B8] border-[#E2E8F0]"
            }`}
          >
            <span className="block text-[10px] tracking-wider font-mono">STEP 3</span>
            <span className="truncate block">3. Contact & Date</span>
          </button>
        </div>

        {/* Main Step Container */}
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 sm:p-10 shadow-sm">
          {isSuccess && submittedData ? (
            /* Success State */
            <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="max-w-lg mx-auto">
                <h3 className="text-2xl font-black text-[#050B16] uppercase font-display">
                  Quote Request Received!
                </h3>
                <p className="text-[#64748B] text-sm mt-2">
                  Thank you, <strong className="text-[#050B16]">{submittedData.fullName}</strong>. We have logged your inquiry for your{" "}
                  <strong className="text-[#050B16]">
                    {submittedData.vehicleYear} {submittedData.vehicleMake} {submittedData.vehicleModel}
                  </strong>{" "}
                  ({submittedData.service}).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-[#E2E8F0] max-w-md mx-auto text-left text-xs space-y-2 text-[#64748B] shadow-sm">
                {quoteReferenceId && (
                  <div className="flex justify-between border-b border-[#E2E8F0] pb-2 bg-[#FEF2F2] -mx-5 -mt-5 px-5 pt-3 pb-3 rounded-t-xl">
                    <span className="text-[#050B16] font-bold font-display uppercase">Quote Reference:</span>
                    <span className="text-[#E10000] font-black font-mono tracking-wider">{quoteReferenceId}</span>
                  </div>
                )}
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#050B16] font-bold">Selected Service:</span>
                  <span className="text-[#E10000] font-black">{submittedData.service}</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#050B16] font-bold">Advertised Price:</span>
                  <span className="text-[#050B16] font-black">${submittedData.startingPrice} starting</span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#050B16] font-bold">Vehicle:</span>
                  <span className="text-[#050B16] font-semibold">
                    {submittedData.vehicleYear} {submittedData.vehicleMake} {submittedData.vehicleModel}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                  <span className="text-[#050B16] font-bold">Contact Phone:</span>
                  <span className="text-[#050B16] font-mono font-bold">{submittedData.phone}</span>
                </div>
                {submittedData.email && (
                  <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                    <span className="text-[#050B16] font-bold">Email:</span>
                    <span className="text-[#050B16] font-mono">{submittedData.email}</span>
                  </div>
                )}
                {submittedData.preferredDate && (
                  <div className="flex justify-between border-b border-[#E2E8F0] pb-2">
                    <span className="text-[#050B16] font-bold">Preferred Date:</span>
                    <span className="text-[#050B16]">{submittedData.preferredDate}</span>
                  </div>
                )}
                <div className="pt-1 text-[11px] text-[#050B16] font-medium">
                  Status: <span className="text-emerald-700 font-bold">Sent to Houston shop dispatch.</span> We will call you back shortly.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={businessInfo.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#E10000] text-white font-black text-xs uppercase tracking-wider shadow-md hover:bg-[#C50000] font-display"
                >
                  <Phone className="w-4 h-4" />
                  Call Directly: {businessInfo.phoneDisplay}
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white text-[#050B16] border border-[#CBD5E1] hover:bg-[#F1F5F9] text-xs font-bold uppercase tracking-wider"
                >
                  <RotateCcw className="w-4 h-4 text-[#64748B]" />
                  Submit Another Vehicle
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: Select Service (Clean Visual Grid) */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#050B16] uppercase font-display">
                    Step 1: Choose Your Desired Service
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Click any service below to proceed to vehicle details.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#E10000] uppercase font-display hidden sm:block">
                  10 Services Available
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {servicesData.map((s) => {
                  const isSelected = formData.service === s.name;
                  return (
                    <div
                      key={s.id}
                      onClick={() => selectServiceItem(s.name, s.startingPrice)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-white border-[#E10000] shadow-md ring-2 ring-[#E10000]/20"
                          : "bg-white border-[#E2E8F0] hover:border-[#CBD5E1] hover:shadow-sm"
                      }`}
                    >
                      <div className="space-y-1 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-black text-[#050B16] uppercase font-display leading-tight">
                            {s.name}
                          </span>
                          {s.isPrimary && (
                            <span className="bg-[#E10000] text-white text-[9px] font-black uppercase px-1.5 py-0.2 rounded">
                              HOT
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#64748B] line-clamp-1">
                          {s.shortDescription}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs text-[#64748B] block font-semibold">Starts</span>
                        <span className="text-lg font-black text-[#E10000] font-display">
                          ${s.startingPrice}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#050B16] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1E293B] font-display"
                >
                  <span>Continue to Vehicle Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : step === 2 ? (
            /* STEP 2: Vehicle Details */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-lg font-black text-[#050B16] uppercase font-display">
                    Step 2: Tell Us What Vehicle You Drive
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Selected: <strong className="text-[#E10000]">{formData.service}</strong> (${formData.startingPrice} starting)
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-[#E10000] hover:underline uppercase font-display"
                >
                  Change Service
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                    Vehicle Year <span className="text-[#E10000]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 2023"
                    value={formData.vehicleYear}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleYear: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#050B16] focus:outline-none ${
                      errors.vehicleYear ? "border-rose-500" : "border-[#CBD5E1] focus:border-[#E10000]"
                    }`}
                  />
                  {errors.vehicleYear && (
                    <p className="text-rose-600 text-xs mt-1 font-semibold">{errors.vehicleYear}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                    Vehicle Make <span className="text-[#E10000]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ford / Tesla / Chevy"
                    value={formData.vehicleMake}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleMake: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#050B16] focus:outline-none ${
                      errors.vehicleMake ? "border-rose-500" : "border-[#CBD5E1] focus:border-[#E10000]"
                    }`}
                  />
                  {errors.vehicleMake && (
                    <p className="text-rose-600 text-xs mt-1 font-semibold">{errors.vehicleMake}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                    Vehicle Model <span className="text-[#E10000]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. F-150 / Model Y / Tahoe"
                    value={formData.vehicleModel}
                    onChange={(e) =>
                      setFormData({ ...formData, vehicleModel: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#050B16] focus:outline-none ${
                      errors.vehicleModel ? "border-rose-500" : "border-[#CBD5E1] focus:border-[#E10000]"
                    }`}
                  />
                  {errors.vehicleModel && (
                    <p className="text-rose-600 text-xs mt-1 font-semibold">{errors.vehicleModel}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                  Any specific shade or details? (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Prefer 15% rear and 30% front, or need old tint removed"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-white border border-[#CBD5E1] text-sm text-[#050B16] focus:outline-none focus:border-[#E10000]"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-xs font-bold uppercase tracking-wider text-[#475569] hover:bg-[#F1F5F9]"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back to Services</span>
                </button>

                <button
                  type="button"
                  onClick={handleNextFromStep2}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#050B16] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#1E293B] font-display"
                >
                  <span>Continue to Final Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* STEP 3: Contact & Preferred Appointment Date */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                <div>
                  <h3 className="text-lg font-black text-[#050B16] uppercase font-display">
                    Step 3: Where Should We Send Your Quote?
                  </h3>
                  <p className="text-xs text-[#64748B] mt-0.5">
                    Vehicle: <strong className="text-[#050B16]">{formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</strong> • Service: <strong className="text-[#E10000]">{formData.service}</strong>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs font-bold text-[#E10000] hover:underline uppercase font-display"
                >
                  Edit Vehicle
                </button>
              </div>

              {submitError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-600" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                    Your Full Name <span className="text-[#E10000]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. David Martinez"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#050B16] focus:outline-none ${
                      errors.fullName ? "border-rose-500" : "border-[#CBD5E1] focus:border-[#E10000]"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-rose-600 text-xs mt-1 font-semibold">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                    Phone Number <span className="text-[#E10000]">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. (832) 555-0199"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-sm text-[#050B16] focus:outline-none ${
                      errors.phone ? "border-rose-500" : "border-[#CBD5E1] focus:border-[#E10000]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-rose-600 text-xs mt-1 font-semibold">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 font-display">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. david@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#CBD5E1] text-sm text-[#050B16] focus:outline-none focus:border-[#E10000]"
                  />
                  <p className="text-[11px] text-[#64748B] mt-1">Receive written quote confirmation by email</p>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-[#050B16] mb-2 flex items-center justify-between font-display">
                    <span>Preferred Appointment Date (Optional)</span>
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredDate: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg bg-white border border-[#CBD5E1] text-sm text-[#050B16] focus:outline-none focus:border-[#E10000]"
                  />
                  <p className="text-[11px] text-[#64748B] mt-1">We will confirm exact shop bay availability</p>
                </div>
              </div>

              {/* Estimate Summary Pill */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#64748B] block font-semibold">Estimated Base Rate</span>
                  <span className="text-2xl font-black text-[#E10000] font-display">
                    ${formData.startingPrice} Starting
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#64748B] block font-medium">Houston Bay Location:</span>
                  <span className="text-xs font-bold text-[#050B16]">11649 TX-249 #600</span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md bg-white border border-[#CBD5E1] text-xs font-bold uppercase tracking-wider text-[#475569] hover:bg-[#F1F5F9]"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-6 rounded-md bg-[#E10000] hover:bg-[#C50000] text-white font-black text-sm uppercase tracking-wider transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2 font-display"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Confirming Your Details...</span>
                    </>
                  ) : (
                    <>
                      <span>CONFIRM MY APPOINTMENT & QUOTE</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Security notice */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#64748B] pt-2 text-center font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#E10000]" />
                  100% confidential. No spam.
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#E10000]" />
                  Fast same-day response
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-[#E10000]" />
                  Or call directly: (832) 768-6256
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
