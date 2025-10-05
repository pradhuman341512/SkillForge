"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface Program {
  title: string;
  image: string;
  duration: string;
  students: string;
  level: string;
  link: string;
}

const programs: Program[] = [
  {
    title: "Full-Stack Development",
    image: "/fullstack.jpg",
    duration: "6 Months",
    students: "1200+",
    level: "Top Choice",
    link: "/programs/fullstack",
  },
  {
    title: "Data Science & AI",
    image: "/datascience.jpg",
    duration: "8 Months",
    students: "950+",
    level: "",
    link: "/programs/datascience",
  },
  {
    title: "Digital Marketing",
    image: "/digital.png",
    duration: "3 Months",
    students: "800+",
    level: "",
    link: "/programs/marketing",
  },
  {
    title: "UI/UX Design",
    image: "/uiux.jpg",
    duration: "4 Months",
    students: "600+",
    level: "",
    link: "/programs/uiux",
  },
  {
    title: "Cloud Computing",
    image: "/datascience.jpg",
    duration: "5 Months",
    students: "700+",
    level: "",
    link: "/programs/cloud",
  },
  {
    title: "Cyber Security",
    image: "/uiux.jpg",
    duration: "6 Months",
    students: "500+",
    level: "",
    link: "/programs/cyber",
  },
  {
    title: "AI ML ",
    image: "/digital.png",
    duration: "4 Months",
    students: "250+",
    level: "",
    link: "/programs/mobile",
  },
  {
    title: "DevOps Engineering",
    image: "/fullstack.jpg",
    duration: "6 Months",
    students: "430+",
    level: "",
    link: "/programs/devops",
  },
];

export default function Programs() {
  const router = useRouter();

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Internship Programs</h2>
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 relative"
            >
              {/* Image with hover blur + Learn More */}
              <div className="relative overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition duration-500 group-hover:blur-sm"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                  <button
                    onClick={() => router.push(program.link)}
                    className="bg-white text-indigo-600 px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    Learn More
                  </button>
                </div>
                <div className="absolute top-4 right-4">
                  <span className=" text-white  text-sm font-medium">
                    {program.level}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>⏱️ {program.duration}</span>
                  <span>👥 {program.students} Interned</span>
                </div>
                <button className="w-full gbutton" onClick={() => router.push(program.link)}>
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
