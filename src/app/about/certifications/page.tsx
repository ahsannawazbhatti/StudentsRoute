import React from 'react';
import { Award } from 'lucide-react';
import { getCertifications } from '@/lib/api';

export default function Certifications() {
  const certifications = getCertifications();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">Certifications & </span>
        <span className="text-gradient">Registrations</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
            <Award className="w-12 h-12 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2 heading-font">{cert.name}</h3>
              <p className="text-gray-600 mb-2 text-font">{cert.description}</p>
              <p className="text-sm text-gray-500 text-font">Valid until: December {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}