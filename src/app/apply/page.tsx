'use client';

import React from 'react';
import AdmissionForm from '@/components/AdmissionForm';

export default function Apply() {
  return (
    <div className="container mx-auto px-4 py-12 pt-32">
      <div className="max-w-2xl mx-auto">
        <AdmissionForm title="Apply Online" />
      </div>
    </div>
  );
}