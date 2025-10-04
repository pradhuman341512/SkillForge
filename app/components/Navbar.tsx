"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react" // using lucide-react icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SF</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SkillForge
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Home
            </a>
            <a href="#programs" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Programs
            </a>
            <a href="#process" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Process
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
              Reviews
            </a>
            <button className="gbutton">
              Get Support
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Home
              </a>
              <a href="#programs" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Programs
              </a>
              <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Process
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
                Reviews
              </a>
              <button className="gbutton">
                Get Support
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
