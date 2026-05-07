'use client';

import React from 'react';
import { getSuccessStories } from '@/lib/api';
import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';

export default function SuccessStories() {
  const stories = getSuccessStories();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">Success </span>
        <span className="text-gradient">Stories</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="group relative">
            {/* Hexagonal Card */}
            <div className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-2">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              {/* Profile Image */}
              <div className="relative p-6 pb-0">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold mb-1 heading-font text-center">{story.name}</h3>
                <p className="text-primary font-semibold mb-2 text-font text-center">{story.university}</p>
                <div className="flex justify-center mb-4">
                  <span className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm font-medium">
                    {story.country}
                  </span>
                </div>
                <p className="text-gray-600 text-sm text-font text-center mb-4 line-clamp-3">{story.quote}</p>
                
                {/* Read More Button */}
                <Link 
                  href={`/success-stories/${index + 1}`}
                  className="flex items-center justify-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors group"
                >
                  <span className="text-font">Read Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}