"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, CheckCircle, Clock, AlertCircle, Lock, ExternalLink } from "lucide-react";

const demoScenarios = [
  {
    id: "data-analysis",
    title: "Data Analysis Agent",
    description: "Analyze Q4 sales data and generate insights",
    steps: [
      "Load and validate dataset",
      "Perform statistical analysis",
      "Identify patterns and trends",
      "Generate insights (HITL checkpoint)",
      "Create summary report"
    ]
  },
  {
    id: "customer-support",
    title: "Customer Support Agent",
    description: "Handle customer billing inquiry",
    steps: [
      "Understand customer inquiry",
      "Gather customer context",
      "Search knowledge base",
      "Formulate response",
      "Escalation check (if needed)"
    ]
  },
  {
    id: "supply-chain",
    title: "Supply Chain Optimizer",
    description: "Monitor inventory and predict shortages",
    steps: [
      "Monitor current inventory levels",
      "Analyze historical patterns",
      "Forecast demand",
      "Calculate reorder points",
      "Submit recommendations (HITL)"
    ]
  }
];

export default function LiveDemo() {
  const [selectedScenario, setSelectedScenario] = useState(demoScenarios[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const runDemo = () => {
    setIsRunning(true);
    setCurrentStep(0);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= selectedScenario.steps.length - 1) {
          clearInterval(interval);
          setIsRunning(false);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const resetDemo = () => {
    setIsRunning(false);
    setCurrentStep(0);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full mb-4 border border-white/20">
            <Play className="w-4 h-4 text-primary-400" />
            <span className="text-primary-300 font-semibold text-sm">Interactive Demonstration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how autonomous agents execute complex workflows with human oversight
          </p>
        </motion.div>

        {/* Legal Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-4 bg-red-900/30 border-2 border-red-500/50 rounded-lg"
        >
          <div className="flex items-center space-x-2 text-red-300 text-sm">
            <Lock className="w-4 h-4 flex-shrink-0" />
            <span>
              <strong>Demo Only:</strong> This is a simulated demonstration. Actual system requires license from Sean McDonnell. 
              <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="underline ml-1 hover:text-red-200">
                Contact for acquisition
              </a>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scenario Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Select Scenario</h3>
            {demoScenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => {
                  setSelectedScenario(scenario);
                  resetDemo();
                }}
                className={`w-full p-4 rounded-lg text-left transition ${
                  selectedScenario.id === scenario.id
                    ? "bg-primary-600 shadow-lg"
                    : "bg-white/10 backdrop-blur-lg hover:bg-white/20"
                }`}
              >
                <div className="font-semibold mb-1">{scenario.title}</div>
                <div className="text-sm opacity-80">{scenario.description}</div>
              </button>
            ))}
          </motion.div>

          {/* Demo Execution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{selectedScenario.title}</h3>
              <button
                onClick={isRunning ? resetDemo : runDemo}
                disabled={isRunning && currentStep < selectedScenario.steps.length - 1}
                className={`px-6 py-3 rounded-lg font-semibold transition flex items-center space-x-2 ${
                  isRunning
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700"
                }`}
              >
                <Play className="w-5 h-5" />
                <span>{isRunning ? "Running..." : "Run Demo"}</span>
              </button>
            </div>

            <div className="space-y-4">
              {selectedScenario.steps.map((step, index) => {
                const isComplete = index < currentStep;
                const isCurrent = index === currentStep;
                const isPending = index > currentStep;

                return (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-2 transition ${
                      isComplete
                        ? "bg-green-500/20 border-green-500"
                        : isCurrent
                        ? "bg-blue-500/20 border-blue-500 animate-pulse"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {isComplete && <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />}
                      {isCurrent && <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 animate-spin" />}
                      {isPending && <div className="w-5 h-5 rounded-full border-2 border-white/20 flex-shrink-0" />}
                      <div className="flex-1">
                        <div className={`font-medium ${isComplete ? "text-green-300" : isCurrent ? "text-blue-300" : "text-gray-400"}`}>
                          Step {index + 1}: {step}
                        </div>
                        {step.includes("HITL") && (
                          <div className="text-xs text-yellow-400 mt-1 flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>Human approval required</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {currentStep >= selectedScenario.steps.length - 1 && !isRunning && currentStep > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-green-500/20 border-2 border-green-500 rounded-lg"
              >
                <div className="flex items-center space-x-2 text-green-300">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">Demo completed successfully!</span>
                </div>
              </motion.div>
            )}

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <div className="text-sm text-blue-300">
                <strong>Note:</strong> This is a simulated demonstration. The actual system includes full LLM integration, 
                real tool execution, memory persistence, and production deployment capabilities.
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://bizbot.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            <span>Get Full Access - Contact for Acquisition</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

