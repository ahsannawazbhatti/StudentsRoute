'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { getCountryInfo, getDestinations } from '@/lib/api';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function CountryPage({ params }: { params: { country: string } }) {
  const country = getCountryInfo(params.country);
  const allDestinations = getDestinations();

  if (!country) {
    notFound();
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${country.image})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4 heading-font">Study in {country.name}</h1>
            <p className="text-xl text-font max-w-2xl">{country.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
              <h3 className="text-xl font-bold mb-4 heading-font dual-color-text">
                <span className="text-black">Other </span>
                <span className="text-gradient">Destinations</span>
              </h3>
              <div className="space-y-3">
                {allDestinations.map((dest) => (
                  <Link
                    key={dest.route}
                    href={`/destinations/${dest.route}`}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      dest.route === params.country
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="text-font font-medium">{dest.name}</span>
                    {dest.popular && (
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
          {country.description && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <p className="text-lg text-font leading-relaxed">{country.description}</p>
            </div>
          )}

          {country.universities && country.universities.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Top </span>
                <span className="text-gradient">Universities</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {country.universities.map((uni, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-6 flex items-center space-x-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <img
                      src={uni.logo}
                      alt={`${uni.name} logo`}
                      className="w-16 h-16 object-contain flex-shrink-0"
                    />
                    <span className="text-lg font-semibold text-font">{uni.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {country.requirements && country.requirements.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Entry </span>
                <span className="text-gradient">Requirements</span>
              </h2>
              <ul className="space-y-3">
                {country.requirements.map((req, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-font">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {country.benefits && country.benefits.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Key </span>
                <span className="text-gradient">Benefits</span>
              </h2>
              <ul className="space-y-3">
                {country.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-font">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {country.educationSystem && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Education </span>
                <span className="text-gradient">System</span>
              </h2>
              <p className="text-font leading-relaxed">{country.educationSystem}</p>
            </div>
          )}

          {country.applicationProcess && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Application </span>
                <span className="text-gradient">Process</span>
              </h2>
              <p className="text-font leading-relaxed">{country.applicationProcess}</p>
            </div>
          )}

          {country.scholarships && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Scholarships & </span>
                <span className="text-gradient">Funding</span>
              </h2>
              <p className="text-font leading-relaxed">{country.scholarships}</p>
            </div>
          )}

          {country.studentLife && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Student </span>
                <span className="text-gradient">Life</span>
              </h2>
              <p className="text-font leading-relaxed">{country.studentLife}</p>
            </div>
          )}

          {country.visaInfo && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Visa </span>
                <span className="text-gradient">Information</span>
              </h2>
              <p className="text-font leading-relaxed">{country.visaInfo}</p>
            </div>
          )}

            {/* Contact Form */}
            <div className="bg-primary/5 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 heading-font dual-color-text">
                <span className="text-black">Get More </span>
                <span className="text-gradient">Information</span>
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
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
                ></textarea>
                <button type="submit" className="btn-primary w-full py-3">
                  Request Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}