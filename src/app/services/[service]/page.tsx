'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Users, Clock, Award } from 'lucide-react';
import { getServiceDetails, getExtendedServices } from '@/lib/api';
import { 
  GraduationCap, 
  FileCheck, 
  Plane, 
  BookOpen, 
  Users as UsersIcon, 
  Globe 
} from 'lucide-react';

// Icon mapping for services
const iconMap = {
  GraduationCap,
  FileCheck,
  Plane,
  BookOpen,
  Users: UsersIcon,
  Globe
};

export default function ServicePage({ params }: { params: { service: string } }) {
  const service = getServiceDetails(params.service);
  const allServices = getExtendedServices();

  if (!service) {
    notFound();
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.hero})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-4xl">
            <Link 
              href="/about/services"
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-font">Back to Services</span>
            </Link>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-bold heading-font">{service.title}</h1>
                <p className="text-xl text-font mt-2">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-bold mb-4 heading-font dual-color-text">
                <span className="text-black">Our </span>
                <span className="text-gradient">Services</span>
              </h3>
              <div className="space-y-3">
                {allServices.map((s, index) => {
                  const serviceSlug = s.title.toLowerCase().replace(/\s+/g, '-');
                  const ServiceIcon = iconMap[s.icon as keyof typeof iconMap];
                  return (
                    <Link
                      key={index}
                      href={`/services/${serviceSlug}`}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        serviceSlug === params.service
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <ServiceIcon className="w-5 h-5" />
                      <span className="text-font font-medium">{s.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Service </span>
                <span className="text-gradient">Overview</span>
              </h2>
              <p className="text-lg text-font leading-relaxed">{service.overview}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Key </span>
                <span className="text-gradient">Features</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-font">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Our </span>
                <span className="text-gradient">Process</span>
              </h2>
              <div className="space-y-4">
                {service.process.map((step: string, index: number) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-font">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Why Choose </span>
                <span className="text-gradient">This Service</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-font">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 text-white mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold heading-font">2,500+</div>
                  <div className="text-font">Students Helped</div>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold heading-font">10+</div>
                  <div className="text-font">Years Experience</div>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-3xl font-bold heading-font">95%</div>
                  <div className="text-font">Success Rate</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-primary/5 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Get Started </span>
                <span className="text-gradient">Today</span>
              </h2>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                />
                <textarea
                  placeholder="Tell us about your requirements"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                ></textarea>
                <button type="submit" className="btn-primary w-full py-3">
                  Request Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}