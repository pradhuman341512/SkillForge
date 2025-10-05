"use client";

import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of professionals who have already accelerated their
            careers. Start your journey today with our expert-led training
            programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              Start Free Consultation
            </Button>
            <Button
              variant="outline"
                         className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"

            >
              View All Programs
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-indigo-100 pt-8">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No upfront payment</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Job guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Lifetime support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
