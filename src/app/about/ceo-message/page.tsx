import React from 'react';
import { getCEOInfo } from '@/lib/api';

export default function CEOMessage() {
  const ceoInfo = getCEOInfo();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">CEO's </span>
        <span className="text-gradient">Message</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img
            src={ceoInfo.image}
            alt="CEO"
            className="rounded-lg shadow-lg w-full"
          />
          <p className="mt-4 text-center font-semibold heading-font">{ceoInfo.name}</p>
          <p className="text-center text-gray-600 text-font">{ceoInfo.position}</p>
        </div>
        <div className="md:col-span-2 prose max-w-none">
          <p className="text-lg mb-6 text-font">
            {ceoInfo.message.greeting}
          </p>
          {ceoInfo.message.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-font">
              {paragraph}
            </p>
          ))}
          <p className="font-semibold text-font whitespace-pre-line">
            {ceoInfo.message.closing}
          </p>
        </div>
      </div>
    </div>
  );
}