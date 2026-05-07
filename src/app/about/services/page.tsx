'use client';

import React from 'react';
import Link from 'next/link';
import { getExtendedServices }from '@/lib/api';
import {
  GraduationCap,
  FileCheck,
  Plane,
  BookOpen,
  Users,
  Globe
} from 'lucide-react';

// Icon mapping for services
const iconMap = {
  GraduationCap,
  FileCheck,
  Plane,
  BookOpen,
  Users,
  Globe
};

export default function ServicesPage() {
  const services = getExtendedServices();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">Our </span>
        <span className="text-gradient">Services</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];
          const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
          return (
            <Link 
              key={index} 
              href={`/services/${serviceSlug}`}
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-3 heading-font group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-font mb-4">{service.description}</p>
              <div className="text-primary font-semibold text-font opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More →
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text text-center">
          <span className="text-black">Why Choose </span>
          <span className="text-gradient">StudentsRoute?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-font">Expert Guidance</h3>
            <p className="text-gray-600 text-font">
              Our experienced consultants provide personalized advice based on your academic background and career goals.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-font">High Success Rate</h3>
            <p className="text-gray-600 text-font">
              We maintain a 95% success rate in university admissions and visa approvals through our proven processes.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-font">End-to-End Support</h3>
            <p className="text-gray-600 text-font">
              From initial counseling to post-arrival support, we're with you throughout your educational journey.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 heading-font">Global Network</h3>
            <p className="text-gray-600 text-font">
              Our partnerships with universities worldwide ensure you get access to the best educational opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}