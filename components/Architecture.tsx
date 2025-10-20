"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, Lock, Cpu, Network } from "lucide-react";

const architectureLayers = [
  {
    title: "API Layer",
    icon: Server,
    components: [
      "FastAPI with async support",
      "API key authentication",
      "Rate limiting (60 req/min)",
      "CORS & middleware",
      "Request correlation IDs"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Agent Framework",
    icon: Cpu,
    components: [
      "LangGraph state management",
      "Multiple reasoning patterns",
      "Tool registry & execution",
      "HITL checkpoint system",
      "Error recovery & retries"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Memory & State",
    icon: Database,
    components: [
      "Redis (short-term memory)",
      "Vector DB (long-term)",
      "Conversation history",
      "Context window management",
      "Session state tracking"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AWS Infrastructure",
    icon: Cloud,
    components: [
      "ECS Fargate containers",
      "Application Load Balancer",
      "DynamoDB state storage",
      "S3 artifact storage",
      "CloudWatch monitoring"
    ],
    color: "from-orange-500 to-red-500"
  }
];

const techStack = [
  { name: "LangGraph", version: "0.2.15+", category: "Agent Framework" },
  { name: "FastAPI", version: "0.115.0+", category: "API" },
  { name: "Pydantic", version: "2.9.0+", category: "Validation" },
  { name: "Redis", version: "7+", category: "Memory" },
  { name: "ChromaDB", version: "Latest", category: "Vector DB" },
  { name: "AWS ECS", version: "Fargate", category: "Deployment" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Network className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm">System Architecture</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works: System Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Modular, scalable, cloud-native architecture. Every layer is production-tested and documented.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://github.com/seanebones-lang/Agentic-AI/tree/main/agents" target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
              View Agent Code →
            </a>
            <a href="https://github.com/seanebones-lang/Agentic-AI/tree/main/api" target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              View API Code →
            </a>
            <a href="https://github.com/seanebones-lang/Agentic-AI/tree/main/deployment" target="_blank" rel="noopener noreferrer"
               className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              View AWS Templates →
            </a>
          </div>
        </motion.div>

        {/* Architecture Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {architectureLayers.map((layer, index) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center mb-4`}>
                <layer.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{layer.title}</h3>
              <ul className="space-y-2">
                {layer.components.map((component) => (
                  <li key={component} className="text-sm text-gray-600 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>{component}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">System Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 text-center p-6 bg-blue-50 rounded-lg">
              <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Client Request</div>
              <div className="text-sm text-gray-600">API Gateway</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex-1 text-center p-6 bg-purple-50 rounded-lg">
              <Cpu className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Agent Processing</div>
              <div className="text-sm text-gray-600">LangGraph</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex-1 text-center p-6 bg-green-50 rounded-lg">
              <Database className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Memory Layer</div>
              <div className="text-sm text-gray-600">Redis + Vector DB</div>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex-1 text-center p-6 bg-orange-50 rounded-lg">
              <Cloud className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-semibold text-gray-900">Response</div>
              <div className="text-sm text-gray-600">JSON API</div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-gray-900">{tech.name}</div>
                  <div className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded">
                    {tech.category}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{tech.version}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

