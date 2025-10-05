// components/Process.tsx
import React from "react";
import Image from "next/image";
import { CheckCircle, Award, BookOpen, Users, Briefcase, Rocket } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    step: "Step 1",
    title: "Learn from Experts",
    description: "Get hands-on training from experienced industry professionals who guide you every step of the way.",
    icon: <BookOpen className="w-8 h-8" />,
  },
  {
    step: "Step 2",
    title: "Collaborative Projects",
    description: "Work on real-world projects with peers to gain practical experience and problem-solving skills.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    step: "Step 3",
    title: "Career Guidance",
    description: "Receive mentorship, resume building, and mock interview preparation to boost your confidence.",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    step: "Step 4",
    title: "Land Your Dream Job",
    description: "With practical experience and certifications, secure high-paying jobs in your dream companies.",
    icon: <Rocket className="w-8 h-8" />,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Internship Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure every student achieves their career goals
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-bold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image with floating cards */}
          <div className="relative">
            <img
              src="/cf.png" // ✅ Public folder
              alt="Team working on project"
              width={500}
              height={350}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-2xl"></div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">95% Success Rate</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <span className="text-sm font-semibold text-gray-700">Industry Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
