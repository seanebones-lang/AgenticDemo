"use client";

import { Lock, Shield, AlertCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Legal Notice */}
        <div className="mb-8 p-6 bg-red-900/30 border-2 border-red-500/50 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-200 mb-2 flex items-center space-x-2">
                <Lock className="w-4 h-4" />
                <span>PROPRIETARY SOFTWARE LICENSE</span>
              </h3>
              <div className="text-sm text-red-100 space-y-2">
                <p>
                  <strong>Copyright © 2025 Sean McDonnell. All Rights Reserved.</strong>
                </p>
                <p>
                  This software and all associated materials are proprietary and confidential. 
                  <strong> NO LICENSE IS GRANTED</strong> for use, reproduction, modification, distribution, 
                  or evaluation without express written permission.
                </p>
                <div className="mt-3 pt-3 border-t border-red-500/30">
                  <p className="font-semibold text-red-200">PROHIBITED WITHOUT LICENSE:</p>
                  <ul className="mt-2 space-y-1 text-red-100">
                    <li>• Evaluation, testing, or trial use</li>
                    <li>• Copying, modification, or derivative works</li>
                    <li>• Distribution, sublicensing, or transfer</li>
                    <li>• Reverse engineering or decompilation</li>
                    <li>• Production, development, or any other use</li>
                  </ul>
                </div>
                <p className="mt-3 pt-3 border-t border-red-500/30 font-semibold">
                  <AlertCircle className="inline w-4 h-4 mr-1" />
                  Unauthorized use constitutes copyright infringement and may result in civil and criminal penalties.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Agentic AI</h3>
            <p className="text-gray-400 text-sm">
              Enterprise-grade autonomous AI platform for building production-ready intelligent agents.
            </p>
            <div className="mt-4 flex items-center space-x-2 text-sm text-red-400">
              <Lock className="w-4 h-4" />
              <span>Proprietary & Confidential</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Licensing</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Acquisition Inquiry
                </a>
              </li>
              <li>
                <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Licensing Terms
                </a>
              </li>
              <li>
                <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Contact Sales
                </a>
              </li>
              <li>
                <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Enterprise Inquiries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  License Agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Sean McDonnell. All Rights Reserved. Proprietary Software.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <Lock className="w-4 h-4" />
                <span>No Unauthorized Use</span>
              </span>
              <span>•</span>
              <a href="https://bizbot.store" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                bizbot.store
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

