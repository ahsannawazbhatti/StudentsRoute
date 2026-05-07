'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Users, 
  Mail, 
  Calendar,
  Settings,
  Database,
  BarChart,
  DollarSign,
  Edit,
  Search,
  Bell,
  Filter,
  MessageSquare,
  Globe,
  PieChart,
  CheckSquare,
  Plus,
  X
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: 'Total Students',
      value: '2,345',
      change: '+12%',
      icon: Users,
      color: 'bg-blue-500'
    },
    {
      title: 'Applications',
      value: '1,234',
      change: '+23%',
      icon: FileText,
      color: 'bg-green-500'
    },
    {
      title: 'Success Rate',
      value: '89%',
      change: '+5%',
      icon: CheckSquare,
      color: 'bg-purple-500'
    },
    {
      title: 'Revenue',
      value: '$123.4k',
      change: '+18%',
      icon: DollarSign,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold heading-font">Administrator Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-primary">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-font">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1 heading-font">{stat.value}</h3>
                <span className="text-sm text-green-600 text-font">{stat.change}</span>
              </div>
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-6 h-6 ${stat.color} text-opacity-100`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="border-b">
          <div className="flex">
            {['overview', 'students', 'consultants', 'universities', 'analytics'].map((tab) => (
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
            <h3 className="text-xl font-semibold mb-4 heading-font">Admin Dashboard</h3>
            <p className="text-gray-600 text-font">
              Select a tab above to view detailed information about {activeTab}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}