'use client';

import { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  FileText,
  Mail,
  Calendar,
  Settings,
  Menu,
  X,
  BarChart
} from 'lucide-react';
import Link from 'next/link';

const sidebarItems = [
  {
    title: 'Overview',
    icon: BarChart,
    href: '/dashboard'
  },
  {
    title: 'Students',
    icon: Users,
    href: '/dashboard/students'
  },
  {
    title: 'Applications',
    icon: FileText,
    href: '/dashboard/applications'
  },
  {
    title: 'Communications',
    icon: Mail,
    href: '/dashboard/communications'
  },
  {
    title: 'Calendar',
    icon: Calendar,
    href: '/dashboard/calendar'
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/dashboard/settings'
  }
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-white border-r">
          <div className="flex items-center justify-between mb-6 px-2">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <span className="text-xl font-semibold heading-font">StudentsRoute</span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-font"
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`p-4 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <div className="mb-4 flex items-center">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 mr-4 rounded-lg hover:bg-gray-100"
          >
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search..."
              className="w-full max-w-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary text-font"
            />
          </div>
        </div>

        <main className="p-4 bg-white rounded-lg shadow">
          {children}
        </main>
      </div>
    </div>
  );
}