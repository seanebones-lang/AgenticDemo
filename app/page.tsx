"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import MetricsDashboard from "@/components/MetricsDashboard";
import AIPlayground from "@/components/AIPlayground";
import ComparisonMatrix from "@/components/ComparisonMatrix";
import TechnologyTimeline from "@/components/TechnologyTimeline";
import Features from "@/components/Features";
import CodePreview from "@/components/CodePreview";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import EnterpriseTestimonials from "@/components/EnterpriseTestimonials";
import ROICalculator from "@/components/ROICalculator";
import LiveDemo from "@/components/LiveDemo";
import Projections from "@/components/Projections";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <MetricsDashboard />
      <AIPlayground />
      <ComparisonMatrix />
      <TechnologyTimeline />
      <Features />
      <CodePreview />
      <Architecture />
      <UseCases />
      <EnterpriseTestimonials />
      <ROICalculator />
      <LiveDemo />
      <Projections />
      <Footer />
    </main>
  );
}

