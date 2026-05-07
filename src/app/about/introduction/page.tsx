import React from 'react';
import { getCompanyInfo } from '@/lib/api';

export default function CompanyIntroduction() {
  const companyInfo = getCompanyInfo();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">Company </span>
        <span className="text-gradient">Introduction</span>
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-6 text-font">
          {companyInfo.description}
        </p>
        <h2 className="text-2xl font-semibold mb-4 heading-font">Our Mission</h2>
        <p className="mb-6 text-font">
          {companyInfo.mission}
        </p>
        <h2 className="text-2xl font-semibold mb-4 heading-font">Our Vision</h2>
        <p className="mb-6 text-font">
          {companyInfo.vision}
        </p>
        <h2 className="text-2xl font-semibold mb-4 heading-font">Our Values</h2>
        <ul className="list-disc pl-6 mb-6">
          {companyInfo.values.map((value, index) => (
            <li key={index} className="mb-2 text-font">{value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}