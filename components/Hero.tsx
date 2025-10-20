"use client";

import { motion } from "framer-motion";
import { Brain, Lock, Shield, AlertTriangle } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Legal Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 p-4 bg-red-50 border-2 border-red-200 rounded-lg"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-1">PROPRIETARY SOFTWARE - ALL RIGHTS RESERVED</h3>
              <p className="text-sm text-red-800">
                This software is proprietary and confidential. <strong>No evaluation, testing, or use of any kind is permitted without an express written license</strong> from Sean McDonnell. 
                Unauthorized use constitutes copyright infringement and may result in civil and criminal penalties. 
                <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="underline font-semibold hover:text-red-900"> Contact for acquisition at bizbot.store</a>
              </p>
              <div className="mt-2 flex items-center space-x-2 text-xs text-red-700">
                <Lock className="w-4 h-4" />
                <span>Copyright © 2025 Sean McDonnell. All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-6"
          >
            <Brain className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-semibold">
              Enterprise-Grade Autonomous AI Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Agentic AI
            <span className="block gradient-text mt-2">
              Autonomous Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto"
          >
            Production-ready framework for building autonomous AI agents with advanced reasoning chains, 
            human-in-the-loop oversight, and enterprise-grade deployment infrastructure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto bg-blue-50 p-4 rounded-lg border-2 border-blue-200"
          >
            <strong>What This Is:</strong> A complete, production-ready codebase (6,900+ lines) for building AI agents that can autonomously execute complex tasks, 
            integrate with your systems, and escalate to humans when needed. Includes FastAPI backend, AWS deployment templates, and full documentation.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
          >
            <a 
              href="https://bizbot.store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg hover:shadow-xl inline-block"
            >
              Acquisition Inquiry at bizbot.store
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-gray-200"
            >
              Try Interactive Demo
            </a>
            <a
              href="https://github.com/seanebones-lang/Agentic-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              View Source Code
            </a>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-gray-600">Production Ready</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">6,900+</div>
              <div className="text-sm text-gray-600">Lines of Code</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">12</div>
              <div className="text-sm text-gray-600">Core Components</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-primary-600 mb-2">AWS</div>
              <div className="text-sm text-gray-600">Cloud Native</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

