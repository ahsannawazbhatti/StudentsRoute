'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getUpdates } from '@/lib/api';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag, Share2 } from 'lucide-react';

export default function UpdateDetail({ params }: { params: { id: string } }) {
  const updates = getUpdates();
  const updateIndex = parseInt(params.id) - 1;
  const update = updates[updateIndex];

  if (!update) {
    notFound();
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${update.image})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <Link 
              href="/updates"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-font">Back to Updates</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-4">
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                <Calendar className="w-3 h-3" />
                <span>{update.date}</span>
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/80 rounded-full text-sm">
                <Tag className="w-3 h-3" />
                <span>{update.category}</span>
              </span>
            </div>
            
            <h1 className="text-5xl font-bold mb-4 heading-font">{update.title}</h1>
            <p className="text-xl text-font">{update.excerpt}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="prose max-w-none text-font">
              <p className="text-lg mb-6 font-medium">
                {update.excerpt}
              </p>
              
              {update.category === 'Scholarships' && (
                <>
                  <h2 className="text-2xl font-bold mb-4 heading-font">Available Scholarships</h2>
                  <p className="mb-6">
                    We're excited to announce several new scholarship opportunities for international students 
                    looking to pursue their education abroad. These scholarships cover various fields of study 
                    and are available for different academic levels.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">Merit-Based Scholarships</h3>
                  <p className="mb-6">
                    These scholarships are awarded based on academic excellence and are available for 
                    undergraduate and postgraduate programs across multiple universities.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">Need-Based Financial Aid</h3>
                  <p className="mb-6">
                    Financial assistance programs designed to help students from diverse economic backgrounds 
                    access quality international education.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">How to Apply</h3>
                  <p className="mb-6">
                    Contact our expert counselors to learn more about eligibility criteria and application 
                    procedures for these scholarship opportunities.
                  </p>
                </>
              )}
              
              {update.category === 'Visa News' && (
                <>
                  <h2 className="text-2xl font-bold mb-4 heading-font">Important Visa Updates</h2>
                  <p className="mb-6">
                    Recent changes to student visa requirements and processes have been announced. 
                    It's crucial for prospective students to stay informed about these updates to ensure 
                    a smooth application process.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">Key Changes</h3>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Updated financial requirements</li>
                    <li>New documentation procedures</li>
                    <li>Modified interview processes</li>
                    <li>Enhanced security measures</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">What This Means for Students</h3>
                  <p className="mb-6">
                    These changes are designed to streamline the visa application process while maintaining 
                    security standards. Our visa specialists are fully updated on all requirements and 
                    ready to assist you.
                  </p>
                </>
              )}
              
              {update.category === 'Admissions' && (
                <>
                  <h2 className="text-2xl font-bold mb-4 heading-font">University Application Deadlines</h2>
                  <p className="mb-6">
                    Don't miss out on your chance to apply to top universities worldwide. Here are the 
                    upcoming application deadlines you need to know about.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">Upcoming Deadlines</h3>
                  <p className="mb-6">
                    Several prestigious universities have announced their application deadlines for the 
                    upcoming academic year. Early preparation is key to submitting a strong application.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 heading-font">Application Tips</h3>
                  <ul className="list-disc pl-6 mb-6">
                    <li>Start your application process early</li>
                    <li>Gather all required documents</li>
                    <li>Prepare for standardized tests</li>
                    <li>Write compelling personal statements</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Share Section */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold heading-font">Share this update</h3>
              <button className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                <Share2 className="w-5 h-5" />
                <span className="text-font">Share</span>
              </button>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4 heading-font">Need More Information?</h3>
            <p className="text-lg mb-6 text-font">
              Our expert counselors are here to help you navigate your study abroad journey.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}