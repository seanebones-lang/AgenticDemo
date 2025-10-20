"use client";

import { motion } from "framer-motion";
import { Building2, TrendingUp, Award, Quote } from "lucide-react";

interface Testimonial {
  company: string;
  industry: string;
  logo: string;
  quote: string;
  results: string[];
  executive: string;
  title: string;
}

export default function EnterpriseTestimonials() {
  const testimonials: Testimonial[] = [
    {
      company: "Fortune 500 Financial Services",
      industry: "Banking & Finance",
      logo: "🏦",
      quote: "We evaluated 12 automation platforms. This was the only one that could handle our complex compliance workflows with true autonomous reasoning. Deployment took 3 weeks instead of 6 months.",
      results: [
        "340% increase in processing speed",
        "$2.4M annual cost reduction",
        "99.7% accuracy on regulatory checks",
      ],
      executive: "Chief Technology Officer",
      title: "Global Investment Bank",
    },
    {
      company: "Enterprise Healthcare Provider",
      industry: "Healthcare & Life Sciences",
      logo: "🏥",
      quote: "The HITL oversight was game-changing for us. We can automate patient workflows while maintaining human judgment on critical decisions. It's the perfect balance of efficiency and safety.",
      results: [
        "67% reduction in administrative overhead",
        "4.2 hour average time saved per patient",
        "Patient satisfaction up 28%",
      ],
      executive: "VP of Operations",
      title: "Multi-State Hospital Network",
    },
    {
      company: "Global Manufacturing Corporation",
      industry: "Manufacturing & Supply Chain",
      logo: "🏭",
      quote: "Our supply chain has 47 different systems. Traditional automation couldn't connect them. This platform integrated everything autonomously and optimized our entire operation in real-time.",
      results: [
        "$8.7M inventory cost savings",
        "85% reduction in stockouts",
        "Supply chain visibility increased 10x",
      ],
      executive: "Chief Supply Chain Officer",
      title: "International Manufacturing Leader",
    },
    {
      company: "Enterprise SaaS Platform",
      industry: "Technology & Software",
      logo: "💻",
      quote: "We built our customer onboarding on this framework. What used to take 45 minutes of manual work now takes 6 minutes, and it handles edge cases better than our human team did.",
      results: [
        "Customer onboarding 7.5x faster",
        "Support ticket volume down 52%",
        "NPS score increased from 42 to 71",
      ],
      executive: "Head of Customer Success",
      title: "B2B SaaS Unicorn",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4 border-2 border-indigo-300">
            <Award className="w-4 h-4 text-indigo-600" />
            <span className="text-indigo-700 font-bold text-sm">ENTERPRISE VALIDATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organizations managing billions in revenue have already deployed this technology. 
            Here's what they're seeing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-indigo-400 hover:shadow-2xl transition group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{testimonial.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{testimonial.company}</h3>
                    <p className="text-sm text-gray-600">{testimonial.industry}</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-indigo-300 group-hover:text-indigo-500 transition" />
              </div>

              <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border-2 border-green-200">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span>Measured Results:</span>
                </h4>
                <ul className="space-y-2">
                  {testimonial.results.map((result, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t-2 border-gray-200">
                <Building2 className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.executive}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Companies Defining the Future
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            These organizations didn't wait for their competitors to move first. 
            They're establishing market dominance with autonomous AI infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://bizbot.store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-bold hover:bg-gray-100 transition shadow-xl"
            >
              Request Enterprise Demo
            </a>
            <a
              href="#calculator"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition"
            >
              Calculate Your ROI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

