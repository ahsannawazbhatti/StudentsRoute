'use client';

import React from 'react';
import { getTeamMembers } from '@/lib/api';

export default function Team() {
  const team = getTeamMembers();

  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 heading-font dual-color-text">
        <span className="text-black">Our </span>
        <span className="text-gradient">Team</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1 heading-font">{member.name}</h3>
              <p className="text-primary font-medium mb-2 text-font">{member.position}</p>
              <p className="text-gray-600 text-sm text-font">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}