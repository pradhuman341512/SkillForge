// components/HeroSection.tsx
import React from "react";
import { Star, ArrowRight, Play } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Rated #1 Career Development Platform</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Start Your{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Internship
                </span>{" "}
                Journey
                <br />
                With Expert Training
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of students who have accelerated their careers
                through our intensive, hands-on internship programs led by
                industry experts.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Start Your Internship</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Browse Internship Domains</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">2.5k+</div>
                <div className="text-gray-600">Students Interned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Job Placement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.9★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/hero.jpg"
                alt="Professional team collaboration"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
