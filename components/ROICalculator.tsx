"use client";

import { motion } from "framer-motion";
import { Calculator, TrendingUp, DollarSign, Clock, Users } from "lucide-react";
import { useState } from "react";

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    employees: 50,
    avgSalary: 75000,
    hoursPerWeek: 20,
    currentToolCost: 50000,
  });

  const calculations = {
    laborCostPerYear: inputs.employees * inputs.avgSalary * (inputs.hoursPerWeek / 40),
    agenticAICost: 85000, // Annual platform cost
    timeSaved: inputs.hoursPerWeek * 0.85, // 85% time reduction
    costSavings: (inputs.employees * inputs.avgSalary * (inputs.hoursPerWeek / 40) * 0.67) - 85000,
    paybackMonths: (85000 / ((inputs.employees * inputs.avgSalary * (inputs.hoursPerWeek / 40) * 0.67) / 12)),
    threeYearROI: ((inputs.employees * inputs.avgSalary * (inputs.hoursPerWeek / 40) * 0.67 * 3) - (85000 * 3)) / (85000 * 3) * 100,
  };

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-4">
            <Calculator className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm">INTERACTIVE ROI CALCULATOR</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calculate Your Return on Investment
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See exactly how much this system will save your organization. Real numbers, real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Organization</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Employees Affected
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={inputs.employees}
                  onChange={(e) => setInputs({...inputs, employees: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-2xl font-bold text-indigo-600 mt-2">
                  {inputs.employees} employees
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Salary per Employee
                </label>
                <input
                  type="range"
                  min="40000"
                  max="150000"
                  step="5000"
                  value={inputs.avgSalary}
                  onChange={(e) => setInputs({...inputs, avgSalary: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-2xl font-bold text-indigo-600 mt-2">
                  ${inputs.avgSalary.toLocaleString()}/year
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Hours/Week on Manual Tasks
                </label>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="5"
                  value={inputs.hoursPerWeek}
                  onChange={(e) => setInputs({...inputs, hoursPerWeek: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-2xl font-bold text-indigo-600 mt-2">
                  {inputs.hoursPerWeek} hours/week
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Automation Tool Costs
                </label>
                <input
                  type="range"
                  min="0"
                  max="200000"
                  step="10000"
                  value={inputs.currentToolCost}
                  onChange={(e) => setInputs({...inputs, currentToolCost: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-right text-2xl font-bold text-indigo-600 mt-2">
                  ${inputs.currentToolCost.toLocaleString()}/year
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <DollarSign className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Annual Savings</h3>
              </div>
              <div className="text-5xl font-bold mb-2">
                ${calculations.costSavings > 0 ? calculations.costSavings.toLocaleString(undefined, {maximumFractionDigits: 0}) : '0'}
              </div>
              <div className="text-lg opacity-90">
                After platform costs of $85K/year
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Payback Period</h3>
              </div>
              <div className="text-5xl font-bold mb-2">
                {calculations.paybackMonths > 0 ? calculations.paybackMonths.toFixed(1) : '0'} months
              </div>
              <div className="text-lg opacity-90">
                Industry average: 12-18 months
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h3 className="text-2xl font-bold">3-Year ROI</h3>
              </div>
              <div className="text-5xl font-bold mb-2">
                {calculations.threeYearROI > 0 ? calculations.threeYearROI.toFixed(0) : '0'}%
              </div>
              <div className="text-lg opacity-90">
                Total return on investment
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Time Reclaimed</h3>
              </div>
              <div className="text-5xl font-bold mb-2">
                {(calculations.timeSaved * inputs.employees).toFixed(0)} hrs/week
              </div>
              <div className="text-lg opacity-90">
                Redirected to high-value work
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            These Numbers Are Conservative
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            This calculation only accounts for direct labor savings. It doesn't include reduced errors, 
            faster time-to-market, improved customer satisfaction, or competitive advantages.
          </p>
          <a
            href="https://bizbot.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold hover:from-indigo-700 hover:to-purple-700 transition shadow-xl"
          >
            Get Detailed ROI Analysis at bizbot.store
          </a>
        </motion.div>
      </div>
    </section>
  );
}

