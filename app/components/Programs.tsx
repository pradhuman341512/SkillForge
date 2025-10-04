// components/Programs.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface Program {
  image: string;
  title: string;
  level: string;
  duration: string;
  students: string;
}

const programs: Program[] = [
  {
    image: "/programs/webdev.jpg",
    title: "Web Development",
    level: "Beginner",
    duration: "3 Months",
    students: "1.2k+",
  },
  {
    image: "/programs/datasci.jpg",
    title: "Data Science",
    level: "Intermediate",
    duration: "4 Months",
    students: "800+",
  },
  {
    image: "/programs/uiux.jpg",
    title: "UI/UX Design",
    level: "Beginner",
    duration: "2 Months",
    students: "500+",
  },
  {
    image: "/programs/cybersec.jpg",
    title: "Cyber Security",
    level: "Advanced",
    duration: "6 Months",
    students: "300+",
  },
];

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Internship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of industry-focused Internship
            programs designed to fast-track your career growth
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {program.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>⏱️ {program.duration}</span>
                  <span>👥 {program.students} Interned</span>
                </div>
                <button className="w-full bg-gray-50 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
