"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

interface Era {
  year: string;
  title: string;
  description: string;
  limitations: string;
  color: string;
  icon: string;
}

export default function TechnologyTimeline() {
  const eras: Era[] = [
    {
      year: "2010-2015",
      title: "Robotic Process Automation (RPA)",
      description: "Screen scraping and macro recording. Automated repetitive clicks.",
      limitations: "Broke with any UI change. Zero reasoning ability. Required constant maintenance.",
      color: "from-gray-400 to-gray-500",
      icon: "🤖",
    },
    {
      year: "2016-2020",
      title: "Workflow Automation",
      description: "If-then logic trees. API integrations. Pre-defined decision paths.",
      limitations: "Couldn't handle exceptions. Required developers for every change. Linear thinking only.",
      color: "from-blue-400 to-blue-500",
      icon: "⚙️",
    },
    {
      year: "2021-2023",
      title: "AI-Assisted Automation",
      description: "ML models for classification. NLP for parsing. Still human-driven.",
      limitations: "Humans made all decisions. AI was just a helper tool. No autonomous reasoning.",
      color: "from-purple-400 to-purple-500",
      icon: "🧠",
    },
    {
      year: "2024-2025",
      title: "Agentic AI (This System)",
      description: "Autonomous reasoning chains. Self-correcting. Multi-step problem solving. Human oversight when needed.",
      limitations: "None of the above limitations apply. This is the paradigm shift.",
      color: "from-green-400 to-emerald-500",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-4">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm">TECHNOLOGY EVOLUTION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Journey to Autonomous AI
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every decade brings a new automation paradigm. We're at the inflection point.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-500 via-purple-500 to-green-500 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {eras.map((era, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12 mb-4 lg:mb-0">
                  <div className={`bg-white rounded-2xl p-8 shadow-2xl border-4 ${
                    index === eras.length - 1 ? "border-green-400" : "border-gray-300"
                  } hover:scale-105 transition-transform`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-5xl">{era.icon}</div>
                      <div>
                        <div className="text-sm font-bold text-gray-500">{era.year}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{era.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 text-lg">
                      {era.description}
                    </p>
                    
                    <div className={`bg-gradient-to-r ${
                      index === eras.length - 1 ? "from-green-50 to-emerald-50 border-green-300" : "from-red-50 to-orange-50 border-red-300"
                    } rounded-lg p-4 border-2`}>
                      <p className={`text-sm font-semibold ${
                        index === eras.length - 1 ? "text-green-900" : "text-red-900"
                      }`}>
                        {index === eras.length - 1 ? "✓ Breakthrough:" : "✗ Limitations:"} {era.limitations}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${era.color} flex items-center justify-center shadow-2xl border-4 border-white ${
                    index === eras.length - 1 ? "animate-pulse" : ""
                  }`}>
                    <span className="text-2xl">{era.icon}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">
              This Is The Inflection Point
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Companies that deployed RPA in 2010 dominated their markets for a decade. 
              Agentic AI is a bigger leap than RPA was from manual processes.
            </p>
            <a
              href="https://bizbot.store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
            >
              <span>Be an Early Adopter</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
