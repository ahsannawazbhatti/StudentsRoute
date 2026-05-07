'use client';

import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { getCompanyInfo } from '@/lib/api';

export default function Contact() {
  const companyInfo = getCompanyInfo();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">Contact </span>
        <span className="text-gradient">Us</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-6 heading-font">Get in Touch</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-font">{companyInfo.contact.address}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-font">{companyInfo.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-font">{companyInfo.contact.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-font">{companyInfo.contact.hours}</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6 heading-font">Office Location</h2>
          <div className="aspect-video rounded-lg overflow-hidden">
            {/* Replace with actual map component */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-font">Map placeholder</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 heading-font">Send us a Message</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-font">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-font">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1 text-font">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-font">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}