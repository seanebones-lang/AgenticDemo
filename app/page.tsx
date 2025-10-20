"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import AIPlayground from "@/components/AIPlayground";
import Features from "@/components/Features";
import CodePreview from "@/components/CodePreview";
import Architecture from "@/components/Architecture";
import UseCases from "@/components/UseCases";
import LiveDemo from "@/components/LiveDemo";
import Projections from "@/components/Projections";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navigation />
      <Hero />
      <AIPlayground />
      <CodePreview />
      <Features />
      <Architecture />
      <UseCases />
      <LiveDemo />
      <Projections />
      <Footer />
    </main>
  );
}

