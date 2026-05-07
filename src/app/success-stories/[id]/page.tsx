'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getSuccessStories } from '@/lib/api';
import Link from 'next/link';
import { ArrowLeft, MapPin, GraduationCap, Quote } from 'lucide-react';

export default function SuccessStoryDetail({ params }: { params: { id: string } }) {
  const stories = getSuccessStories();
  const storyIndex = parseInt(params.id) - 1;
  const story = stories[storyIndex];

  if (!story) {
    notFound();
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${story.image})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <Link 
              href="/success-stories"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-font">Back to Success Stories</span>
            </Link>
            <h1 className="text-5xl font-bold mb-4 heading-font">{story.name}</h1>
            <div className="flex items-center space-x-6 text-lg">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-5 h-5" />
                <span className="text-font">{story.university}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-font">{story.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Quote Section */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-8 relative">
            <Quote className="w-12 h-12 text-primary/20 absolute top-4 left-4" />
            <blockquote className="text-2xl font-medium text-gray-800 text-font italic pl-8">
              "{story.quote}"
            </blockquote>
            <cite className="block mt-4 text-right text-primary font-semibold text-font">
              - {story.name}
            </cite>
          </div>

          {/* Story Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
              <span className="text-black">Success </span>
              <span className="text-gradient">Journey</span>
            </h2>
            
            <div className="prose max-w-none text-font">
              <p className="text-lg mb-6">
                {story.name}'s journey to {story.university} in {story.country} is an inspiring tale of determination, 
                hard work, and the right guidance from StudentsRoute.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 heading-font">The Beginning</h3>
              <p className="mb-6">
                Like many students, {story.name} had dreams of studying abroad but wasn't sure where to start. 
                The process seemed overwhelming with so many universities, requirements, and procedures to navigate.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 heading-font">Finding StudentsRoute</h3>
              <p className="mb-6">
                After researching various consultancy services, {story.name} chose StudentsRoute for their 
                reputation, expertise, and personalized approach to student counseling.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 heading-font">The Application Process</h3>
              <p className="mb-6">
                With guidance from our expert counselors, {story.name} prepared a strong application that 
                highlighted their academic achievements, extracurricular activities, and career aspirations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 heading-font">Success and Beyond</h3>
              <p className="mb-6">
                Today, {story.name} is thriving at {story.university}, making the most of the world-class 
                education and opportunities available in {story.country}.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 heading-font">Start Your Success Story</h3>
            <p className="text-lg mb-6 text-font">
              Ready to begin your journey to studying abroad? Let StudentsRoute guide you to success.
            </p>
            <Link 
              href="/apply"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}