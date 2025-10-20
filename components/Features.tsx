"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Users, 
  Wrench, 
  Database, 
  Shield, 
  BarChart3,
  Zap,
  GitBranch,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Autonomous Reasoning",
    description: "LangGraph-based state management with multiple reasoning patterns including chain-of-thought, ReAct, and reflection loops.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Human-in-the-Loop",
    description: "Built-in approval gates and escalation logic for critical decisions with configurable uncertainty thresholds.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Wrench,
    title: "Tool Integration",
    description: "Extensible tool system with semantic search, automatic retry logic, and comprehensive error handling.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Database,
    title: "Memory Management",
    description: "Hybrid storage with Redis for short-term memory and vector databases for long-term semantic search.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "OWASP-compliant with PII detection, input sanitization, API key authentication, and secrets management.",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: BarChart3,
    title: "Full Observability",
    description: "Structured logging, CloudWatch metrics, LangSmith tracing, and request correlation for complete visibility.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: Zap,
    title: "Production Ready",
    description: "FastAPI backend with async support, rate limiting, CORS, and comprehensive error handling.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: GitBranch,
    title: "AWS Cloud Native",
    description: "CloudFormation templates for ECS Fargate, DynamoDB, S3, and complete infrastructure as code.",
    color: "from-teal-500 to-cyan-500"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <Lock className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm">Proprietary Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Production-ready components built for autonomous AI systems with enterprise requirements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technical Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-3xl font-bold text-primary-600 mb-2">38</div>
            <div className="text-sm text-gray-600">Python Modules</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">6,904</div>
            <div className="text-sm text-gray-600">Lines of Code</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">12</div>
            <div className="text-sm text-gray-600">Core Components</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Type Safe</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

