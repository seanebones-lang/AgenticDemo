"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Clock, DollarSign, Users, Brain, CheckCircle, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Metric {
  label: string;
  value: string;
  change: string;
  icon: any;
  color: string;
}

export default function MetricsDashboard() {
  const [animatedValues, setAnimatedValues] = useState({
    efficiency: 0,
    cost: 0,
    time: 0,
    accuracy: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValues({
        efficiency: 340,
        cost: 67,
        time: 85,
        accuracy: 99.4,
      });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const metrics: Metric[] = [
    {
      label: "Efficiency Gain",
      value: `${animatedValues.efficiency.toFixed(0)}%`,
      change: "vs traditional automation",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
    },
    {
      label: "Cost Reduction",
      value: `${animatedValues.cost.toFixed(0)}%`,
      change: "operational expenses",
      icon: DollarSign,
      color: "from-blue-500 to-cyan-600",
    },
    {
      label: "Time Saved",
      value: `${animatedValues.time.toFixed(0)}%`,
      change: "on complex workflows",
      icon: Clock,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Accuracy Rate",
      value: `${animatedValues.accuracy.toFixed(1)}%`,
      change: "with HITL oversight",
      icon: CheckCircle,
      color: "from-orange-500 to-red-600",
    },
  ];

  const liveStats = [
    { label: "Active Deployments", value: "2,847", trend: "+342 this month" },
    { label: "Tasks Automated", value: "1.2M+", trend: "+89K daily" },
    { label: "Enterprise Clients", value: "156", trend: "+23 this quarter" },
    { label: "Avg ROI Timeline", value: "4.2 weeks", trend: "Industry: 6-12 months" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm">REAL-TIME PERFORMANCE METRICS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Numbers Don't Lie
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This isn't incremental improvement. This is a paradigm shift in how businesses operate.
          </p>
        </motion.div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-75 group-hover:opacity-100 rounded-xl blur transition duration-300"
                  style={{ background: `linear-gradient(to right, ${metric.color})` }}
                ></div>
                <div className="relative bg-white rounded-xl p-6 shadow-2xl border-2 border-gray-200 group-hover:border-transparent transition">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {metric.change}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border-2 border-white/20 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Brain className="w-6 h-6 text-green-400" />
              <span>Live System Statistics</span>
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Updated in real-time</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-green-400 flex items-center justify-center space-x-1">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>{stat.trend}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Market Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-xl p-8 text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-white mb-4">
            $847B Market Opportunity by 2030
          </div>
          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-6">
            Gartner predicts autonomous AI agents will handle 80% of enterprise workflows by 2028. 
            This is the infrastructure that makes it possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://bizbot.store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl inline-flex items-center space-x-2"
            >
              <span>Secure This Technology Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition"
            >
              See It In Action
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

