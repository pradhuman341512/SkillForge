"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, BookOpen, Target, Star, ArrowRight, CheckCircle, Play, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Programs from './Programs';
import Process from './Process';

const SkillForge = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content: "SkillForge transformed my career. The hands-on training and mentorship were exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      content: "The practical approach to learning helped me land my dream job in just 6 months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      content: "Professional guidance and real-world projects made all the difference in my career growth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const programs = [
    {
      title: "Full-Stack Development",
      duration: "6 Month(s)",
      level: "Top Choice",
      students: "800+",
      image: "   /fullstack.jpg"
    },
    {
      title: "Data Science Bootcamp",
      duration: "4 Month(s)",
      level: "",
      students: "680+",
      image: "/datascience.jpg"
    },
    {
      title: "Digital Marketing",
      duration: "3 Month(s)",
      level: "",
      students: "550+",
      image: "/digital.png"
    },
    {
      title: "UI/UX Design",
      duration: "3 Month(s)",
      level: "",
      students: "255+",
      image: "/uiux.jpg"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery Call",
      description: "We understand your career goals and match you with the perfect program that aligns with your aspirations.",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Skill Assessment",
      description: "Our experts evaluate your current skills and create a personalized learning path for maximum growth.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Intensive Training",
      description: "Engage in hands-on projects with industry mentors who guide you through real-world scenarios.",
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Career Launch",
      description: "Receive certification, portfolio review, and job placement assistance to kickstart your new career.",
      icon: <Award className="w-8 h-8" />
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <HeroSection/>
      {/* Programs Section */}
    <Programs/>

      {/* Process Section */}
     <Process/>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from professionals who transformed their careers with SkillForge
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="flex justify-center">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-2xl font-medium text-gray-900 leading-relaxed">
                  `{testimonials[currentSlide].content}`
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentSlide].image} 
                    alt={testimonials[currentSlide].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonials[currentSlide].name}</div>
                    <div className="text-gray-600">{testimonials[currentSlide].role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <Button
                type='button'
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-indigo-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Transform Your Career?</h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of professionals who have already accelerated their careers. 
              Start your journey today with our expert-led training programs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-200">
                View All Programs
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-indigo-100 pt-8">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">SF</span>
                </div>
                <span className="text-2xl font-bold">SkillForge</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering professionals worldwide through expert-led training programs and career development solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Full-Stack Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">UI/UX Design</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillForge. All rights reserved. Built with passion for career transformation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillForge;