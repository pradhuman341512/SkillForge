"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Users, Award, BookOpen, Target, Star, ArrowRight, CheckCircle, Play, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Programs from './Programs';
import Process from './Process';
import Testimonials from './Testimonials';
import CTASection from './CTASection';
import Footer from './Footer';

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
      <Testimonials/>

      {/* CTA Section */}
     <CTASection  />

      {/* Footer */}
     <Footer/>
    </div>
  );
};

export default SkillForge;