"use client";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function InternshipForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    college: "",
    state: "",
    domain: "",
    linkedin: "",
  });

  const domains = [
    "Web Development",
    "C++ Programming",
    "JAVA Programming",
    "Python Programming",
    "DSA C++ Programming",
    "Artificial intelligence/Machine Learning (AI/ML)",
    "UI/UX",
    "Digital Marketing",
    "HR Management",
    "Embedded Systems",
    "VLSI",
    "AUTOCAD",
    "CYBER SECURITY",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("✅ Form submitted successfully!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 py-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
          InternPe – Get Link Chance to Do Internship
        </h1>

        {/* Links Section */}
        <div className="flex flex-col gap-2 mb-6 text-sm text-blue-600 text-center">
          <Link href="https://internpe.in" target="_blank" className="hover:underline">
            🌐 Visit Our Website : Click Here
          </Link>
          <Link href="#" target="_blank" className="hover:underline">
            🔗 Linkedin page : Click Here
          </Link>
          <Link href="#" target="_blank" className="hover:underline">
            📸 Instagram page : Click Here
          </Link>
          <Link href="mailto:singhpradhuman077@gmail.com" className="hover:underline">
            📧 singhpradhuman077@gmail.com
          </Link>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name *</label>
            <Input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Email Id *</label>
            <Input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">Phone Number (Whatsapp Only) *</label>
            <Input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">DOB *</label>
            <Input
              type="date"
              name="dob"
              required
              value={formData.dob}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">College Name *</label>
            <Input
              type="text"
              name="college"
              required
              value={formData.college}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label className="block font-medium">State *</label>
            <Input
              type="text"
              name="state"
              required
              value={formData.state}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            />
          </div>

          <div>
            <label htmlFor="domain" className="block font-medium">Domain *</label>
            <select
              id="domain"
              name="domain"
              required
              value={formData.domain}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
            >
              <option value="">-- Select Domain --</option>
              {domains.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Your Linkedin Profile Link</label>
            <Input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="https://linkedin.com/in/your-profile"
            />
          </div>

          {/* WhatsApp Group Link */}
          <div className="text-center mt-6">
            <Link
              href="https://chat.whatsapp.com/example" 
              target="_blank"
              className="text-green-600 font-semibold hover:underline"
            >
              👉 JOIN WHATSAPP GROUP (FOR COMMUNICATION AND INFORMATION) – CLICK HERE
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-4"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
