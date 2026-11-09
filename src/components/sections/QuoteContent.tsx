"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { QuoteForm } from "@/components/sections/QuoteForm";

export function QuoteContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || undefined;

  return <QuoteForm selectedServicePreset={serviceParam} />;
}

