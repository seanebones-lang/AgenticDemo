"use client";

import { motion } from "framer-motion";
import { X, Check, Zap, AlertTriangle } from "lucide-react";

interface ComparisonRow {
  feature: string;
  traditional: boolean | string;
  agenticAI: boolean | string;
  impact: string;
}

export default function ComparisonMatrix() {
  const comparisons: ComparisonRow[] = [
    {
      feature: "Handles Unexpected Scenarios",
      traditional: false,
      agenticAI: true,
      impact: "Adapts to edge cases without reprogramming",
    },
    {
      feature: "Multi-Step Reasoning",
      traditional: "Linear only",
      agenticAI: "Complex chains",
      impact: "Solves problems requiring 10+ decision points",
    },
    {
      feature: "Human Oversight Integration",
      traditional: false,
      agenticAI: true,
      impact: "HITL checkpoints prevent costly errors",
    },
    {
      feature: "Learning from Context",
      traditional: false,
      agenticAI: true,
      impact: "Improves with every interaction",
    },
    {
      feature: "Natural Language Interface",
      traditional: "Rigid scripts",
      agenticAI: "Conversational",
      impact: "No technical training required",
    },
    {
      feature: "Cross-System Integration",
      traditional: "Manual APIs",
      agenticAI: "Autonomous",
      impact: "Connects tools without custom code",
    },
    {
      feature: "Error Recovery",
      traditional: "Fails & stops",
      agenticAI: "Self-corrects",
      impact: "99.4% completion rate vs 73%",
    },
    {
      feature: "Deployment Time",
      traditional: "3-6 months",
      agenticAI: "1-2 weeks",
      impact: "10x faster time-to-value",
    },
    {
      feature: "Cost per Workflow",
      traditional: "$12K-50K",
      agenticAI: "$2K-8K",
      impact: "67% cost reduction",
    },
    {
      feature: "Maintenance Required",
      traditional: "High",
      agenticAI: "Minimal",
      impact: "85% less developer time",
    },
  ];

  const renderCell = (value: boolean | string, isAgenticAI: boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <div className={`flex items-center justify-center space-x-2 ${isAgenticAI ? "text-green-600" : "text-red-500"}`}>
          {isAgenticAI ? (
            <>
              <Check className="w-6 h-6" />
              <span className="font-bold">YES</span>
            </>
          ) : (
            <>
              <X className="w-6 h-6" />
              <span className="font-bold">NO</span>
            </>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-2 text-red-500">
          <X className="w-6 h-6" />
          <span className="font-bold">NO</span>
        </div>
      );
    }
    return (
      <div className={`text-center font-semibold ${isAgenticAI ? "text-green-600" : "text-gray-600"}`}>
        {value}
      </div>
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-100 to-green-100 rounded-full mb-4 border-2 border-gray-300">
            <AlertTriangle className="w-4 h-4 text-red-600" />
            <span className="text-gray-700 font-bold text-sm">THE DIFFERENCE IS DRAMATIC</span>
            <Zap className="w-4 h-4 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Traditional Automation vs Agentic AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This isn't an upgrade. It's a complete reimagining of what automation can do.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200"
        >
          {/* Header */}
          <div className="grid grid-cols-4 bg-gradient-to-r from-gray-900 to-indigo-900 text-white p-6">
            <div className="col-span-1 font-bold text-lg">Capability</div>
            <div className="col-span-1 text-center font-bold text-lg">Traditional RPA/Automation</div>
            <div className="col-span-1 text-center font-bold text-lg bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg py-2">
              Agentic AI (This System)
            </div>
            <div className="col-span-1 text-center font-bold text-lg">Business Impact</div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`grid grid-cols-4 p-6 border-b border-gray-200 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-blue-50 transition`}
            >
              <div className="col-span-1 font-semibold text-gray-900 flex items-center">
                {row.feature}
              </div>
              <div className="col-span-1 flex items-center justify-center">
                {renderCell(row.traditional, false)}
              </div>
              <div className="col-span-1 flex items-center justify-center bg-green-50 rounded-lg">
                {renderCell(row.agenticAI, true)}
              </div>
              <div className="col-span-1 text-sm text-gray-600 flex items-center justify-center text-center px-4">
                {row.impact}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Your Competition Is Already Looking At This
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              First-mover advantage in agentic AI adoption is measured in years, not months. 
              Companies deploying this technology now are establishing market dominance.
            </p>
            <a
              href="https://bizbot.store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
            >
              Schedule Acquisition Discussion
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

