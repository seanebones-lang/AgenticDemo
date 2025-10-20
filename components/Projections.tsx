"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Zap,
  Target,
  Globe,
  Lock
} from "lucide-react";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const marketData = [
  { year: "2024", value: 2.5 },
  { year: "2025", value: 5.2 },
  { year: "2026", value: 12.8 },
  { year: "2027", value: 28.5 },
  { year: "2028", value: 52.3 },
  { year: "2029", value: 89.7 },
  { year: "2030", value: 142.0 }
];

const adoptionData = [
  { year: "2024", enterprises: 15, smb: 8 },
  { year: "2025", enterprises: 32, smb: 22 },
  { year: "2026", enterprises: 58, smb: 45 },
  { year: "2027", enterprises: 78, smb: 68 },
  { year: "2028", enterprises: 89, smb: 82 },
];

const projections = [
  {
    icon: DollarSign,
    title: "Market Size",
    value: "$142B",
    timeframe: "by 2030",
    growth: "+5,580% from 2024",
    description: "Agentic AI market projected to reach $142 billion by 2030, driven by enterprise adoption and automation demands.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Enterprise Adoption",
    value: "89%",
    timeframe: "by 2028",
    growth: "From 15% in 2024",
    description: "Large enterprises expected to deploy autonomous AI agents across operations, with 89% adoption by 2028.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Productivity Gains",
    value: "40-60%",
    timeframe: "Average increase",
    growth: "Across industries",
    description: "Organizations implementing agentic AI report 40-60% productivity improvements in automated workflows.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Target,
    title: "ROI Timeline",
    value: "6-12",
    timeframe: "Months",
    growth: "To positive ROI",
    description: "Most enterprises achieve positive ROI within 6-12 months of deploying autonomous agent systems.",
    color: "from-orange-500 to-red-500"
  }
];

const trends = [
  {
    title: "Multi-Agent Collaboration",
    description: "Teams of specialized agents working together on complex tasks",
    impact: "High"
  },
  {
    title: "Edge Deployment",
    description: "Agents running on edge devices for real-time decision making",
    impact: "Medium"
  },
  {
    title: "Regulatory Frameworks",
    description: "Emerging standards for AI agent governance and accountability",
    impact: "Critical"
  },
  {
    title: "Industry Specialization",
    description: "Vertical-specific agents for healthcare, finance, manufacturing",
    impact: "High"
  }
];

export default function Projections() {
  return (
    <section id="projections" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-semibold text-sm">Market Analysis</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Market Opportunity & ROI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Why this technology is valuable: Market data shows explosive growth in agentic AI adoption
          </p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto bg-green-50 p-3 rounded-lg border-2 border-green-200">
            <strong>For Buyers:</strong> Early movers in this space are seeing 6-12 month ROI with 40-60% productivity gains. 
            This is a $142B market by 2030.
          </p>
        </motion.div>

        {/* Key Projections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projections.map((projection, index) => (
            <motion.div
              key={projection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${projection.color} flex items-center justify-center mb-4`}>
                <projection.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{projection.value}</div>
              <div className="text-sm text-gray-600 mb-2">{projection.timeframe}</div>
              <div className="text-xs text-primary-600 font-semibold mb-3">{projection.growth}</div>
              <p className="text-sm text-gray-600">{projection.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Market Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Agentic AI Market Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={marketData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Market Size ($B)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#0ea5e9" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Source: Industry analysis and market research projections (2024-2030)
          </p>
        </motion.div>

        {/* Adoption Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Adoption Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={adoptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Line type="monotone" dataKey="enterprises" stroke="#0ea5e9" strokeWidth={3} name="Large Enterprises" />
                <Line type="monotone" dataKey="smb" stroke="#8b5cf6" strokeWidth={3} name="SMB" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-8 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary-600 rounded"></div>
              <span className="text-sm text-gray-600">Large Enterprises</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-purple-600 rounded"></div>
              <span className="text-sm text-gray-600">Small & Medium Business</span>
            </div>
          </div>
        </motion.div>

        {/* Emerging Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Emerging Trends</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((trend) => (
              <div key={trend.title} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-gray-900">{trend.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    trend.impact === "Critical" ? "bg-red-100 text-red-700" :
                    trend.impact === "High" ? "bg-orange-100 text-orange-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {trend.impact} Impact
                  </span>
                </div>
                <p className="text-sm text-gray-600">{trend.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white text-center"
        >
          <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
          <h3 className="text-3xl font-bold mb-4">Strategic Opportunity</h3>
          <p className="text-lg mb-6 opacity-90 max-w-3xl mx-auto">
            Position your organization at the forefront of the agentic AI revolution. 
            Early adopters are seeing significant competitive advantages and operational efficiencies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://bizbot.store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg inline-flex items-center space-x-2"
            >
              <span>Acquisition Inquiry</span>
              <Lock className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-6 text-sm opacity-75">
            Proprietary technology • Contact for licensing • bizbot.store
          </p>
        </motion.div>
      </div>
    </section>
  );
}

