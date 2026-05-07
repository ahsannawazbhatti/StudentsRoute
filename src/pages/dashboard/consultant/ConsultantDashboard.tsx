'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  FileText,
  MessageSquare,
  Calendar,
  Clock,
  Search,
  Bell,
  Filter
} from 'lucide-react';

export default function ConsultantDashboard() {
  const [activeTab, setActiveTab] = useState('students');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: 'Total Students',
      value: '24',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Pending Documents',
      value: '8',
      icon: FileText,
      color: 'text-orange-500'
    },
    {
      title: 'Today\'s Appointments',
      value: '3',
      icon: Calendar,
      color: 'text-green-500'
    },
    {
      title: 'Unread Messages',
      value: '5',
      icon: MessageSquare,
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold heading-font">Consultant Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-primary">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-font">{stat.title}</p>
                <h3 className="text-2xl font-bold heading-font">{stat.value}</h3>
              </div>
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="border-b">
          <div className="flex">
            {['students', 'appointments', 'messages'].map((tab) => (
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
            <h3 className="text-xl font-semibold mb-4 heading-font">Consultant Tools</h3>
            <p className="text-gray-600 text-font">
              Manage your {activeTab} and track student progress here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}