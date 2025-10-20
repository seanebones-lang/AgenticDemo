"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  MessageSquare, 
  Package, 
  FileText, 
  Users,
  Briefcase,
  Lock
} from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Data Analysis & Insights",
    description: "Autonomous agents that analyze complex datasets, identify patterns, and generate actionable insights with human oversight for critical decisions.",
    features: [
      "Statistical analysis automation",
      "Pattern recognition",
      "Trend forecasting",
      "Report generation"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Customer Support Automation",
    description: "Intelligent agents that handle customer inquiries, search knowledge bases, and escalate complex issues to human agents when needed.",
    features: [
      "24/7 availability",
      "Context-aware responses",
      "Knowledge base integration",
      "Smart escalation"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Package,
    title: "Supply Chain Optimization",
    description: "Monitor inventory, predict shortages, optimize reorder points, and coordinate logistics with automatic anomaly detection.",
    features: [
      "Inventory monitoring",
      "Demand forecasting",
      "Route optimization",
      "Anomaly detection"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Extract, analyze, and process documents with intelligent classification, data extraction, and validation workflows.",
    features: [
      "OCR integration",
      "Data extraction",
      "Classification",
      "Validation workflows"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Users,
    title: "Customer Onboarding",
    description: "Streamline customer onboarding with automated form validation, personalization, and CRM integration with approval gates.",
    features: [
      "Form automation",
      "CRM integration",
      "Personalization",
      "Compliance checks"
    ],
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Briefcase,
    title: "Business Process Automation",
    description: "Automate complex multi-step business processes with decision points, approvals, and integration with existing systems.",
    features: [
      "Workflow orchestration",
      "System integration",
      "Decision automation",
      "Audit trails"
    ],
    color: "from-yellow-500 to-orange-500"
  }
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Briefcase className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm">Real-World Applications</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real-World Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            These aren't hypothetical - buyers can deploy these exact use cases immediately
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto bg-yellow-50 p-3 rounded-lg border-2 border-yellow-200">
            <strong>Each use case includes:</strong> Pre-built agent templates, tool integrations, HITL checkpoints, and deployment configs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition p-8 border border-gray-100 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.color} flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                <useCase.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {useCase.description}
              </p>
              
              <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-xs font-semibold text-blue-900 mb-1">INCLUDED IN CODEBASE:</div>
                <div className="text-xs text-blue-700">Agent template + Tools + Examples</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-700 mb-3">Capabilities:</div>
                {useCase.features.map((feature) => (
                  <div key={feature} className="flex items-start text-sm text-gray-600">
                    <span className="text-primary-500 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a href="https://github.com/seanebones-lang/Agentic-AI/tree/main/examples" target="_blank" rel="noopener noreferrer"
                   className="text-sm text-primary-600 hover:text-primary-700 font-semibold group-hover:underline">
                  View Example Code →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl shadow-xl text-center text-white"
        >
          <Lock className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Contact us for acquisition and licensing to deploy autonomous AI agents in your organization.
          </p>
          <a
            href="https://bizbot.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Acquisition Inquiry at bizbot.store
          </a>
        </motion.div>
      </div>
    </section>
  );
}

