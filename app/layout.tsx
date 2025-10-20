import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agentic AI - Autonomous Intelligence Platform",
  description: "Production-ready framework for building autonomous AI agents with reasoning chains, HITL oversight, and enterprise deployment",
  keywords: "AI, Agents, Autonomous AI, LangGraph, HITL, Enterprise AI, Agent Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

