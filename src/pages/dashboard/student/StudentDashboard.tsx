'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  FileText, 
  MessageSquare, 
  Clock, 
  CreditCard,
  BookOpen,
  FileCheck,
  Bell
} from 'lucide-react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('profile');

  const applicationStatus = {
    currentStage: 'Document Verification',
    progress: 60,
    nextAction: 'Upload passport copy',
    deadline: '2024-04-01'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold heading-font">Student Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-primary">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Application Progress */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h2 className="text-lg font-semibold mb-4 heading-font">Application Progress</h2>
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-font">
            <span>Current Stage: {applicationStatus.currentStage}</span>
            <span>{applicationStatus.progress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${applicationStatus.progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600 text-font">
            <p>Next Action: {applicationStatus.nextAction}</p>
            <p>Deadline: {applicationStatus.deadline}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="border-b">
          <div className="flex">
            {['profile', 'documents', 'messages', 'appointments'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium text-font ${
                  activeTab === tab
                    ? 'border-b-2 border-primary text-primary'
                    : 'text-gray-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-4 heading-font">Student Information</h3>
            <p className="text-gray-600 text-font">
              View and manage your {activeTab} information here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}