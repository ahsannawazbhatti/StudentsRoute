'use client';

import React from 'react';
import { getUpdates } from '@/lib/api';
import Link from 'next/link';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Updates() {
  const updates = getUpdates();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 heading-font dual-color-text"
      >
        <span className="text-black">Latest </span>
        <span className="text-gradient">Updates</span>
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {updates.map((update, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            {/* Diamond-shaped Card */}
            <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:scale-105">
              {/* Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full text-sm font-medium">
                    <Tag className="w-3 h-3" />
                    <span>{update.category}</span>
                  </span>
                </div>
                
                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-black/70 text-white rounded-full text-sm">
                    <Calendar className="w-3 h-3" />
                    <span>{update.date}</span>
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 heading-font group-hover:text-primary transition-colors">
                  {update.title}
                </h3>
                <p className="text-gray-600 mb-4 text-font line-clamp-3">{update.excerpt}</p>
                
                {/* Read More Button */}
                <Link 
                  href={`/updates/${index + 1}`}
                  className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors group"
                >
                  <span className="text-font">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}