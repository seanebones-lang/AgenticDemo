"use client";

import { useState } from "react";
import { Menu, X, Lock } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Agentic AI</h1>
              <div className="flex items-center space-x-1 text-xs text-red-600">
                <Lock className="w-3 h-3" />
                <span className="font-semibold">PROPRIETARY</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition">
              Features
            </a>
            <a href="#architecture" className="text-gray-700 hover:text-primary-600 transition">
              Architecture
            </a>
            <a href="#use-cases" className="text-gray-700 hover:text-primary-600 transition">
              Use Cases
            </a>
            <a href="#demo" className="text-gray-700 hover:text-primary-600 transition">
              Live Demo
            </a>
            <a href="#projections" className="text-gray-700 hover:text-primary-600 transition">
              Projections
            </a>
            <a 
              href="https://bizbot.store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              Acquisition Inquiry
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#features"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#architecture"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Architecture
            </a>
            <a
              href="#use-cases"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Use Cases
            </a>
            <a
              href="#demo"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Live Demo
            </a>
            <a
              href="#projections"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Projections
            </a>
            <a 
              href="https://bizbot.store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition text-center"
            >
              Acquisition Inquiry
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

