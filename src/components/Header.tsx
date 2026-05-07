'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, User, FileText, Phone, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getNavigationItems, getCompanyInfo } from '@/lib/api';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);

  // Get data from API
  const menuItems = getNavigationItems();
  const companyInfo = getCompanyInfo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileAccordionToggle = (itemName: string) => {
    setOpenMobileAccordion(openMobileAccordion === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileAccordion(null);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span className="text-font">{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span className="text-font">{companyInfo.contact.email}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <MapPin className="w-3 h-3" />
              <span className="text-font">{companyInfo.contact.hours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header 
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' 
            : 'bg-white/90 backdrop-blur-sm shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-xl">SR</span>
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="heading-font text-2xl font-bold text-gray-800">
                  {companyInfo.name.split('Route')[0]}
                  <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Route</span>
                </span>
                <span className="text-xs text-gray-500 text-font -mt-1">{companyInfo.tagline}</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <div
                      className="flex items-center space-x-1 cursor-pointer px-4 py-2 rounded-lg text-font text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      
                      {/* Mega Menu */}
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-white/20 py-3 overflow-hidden"
                          >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/80"></div>
                            {item.children.map((child, index) => (
                              <motion.div
                                key={child.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={child.href}
                                  className="block px-4 py-3 text-font text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 border-l-2 border-transparent hover:border-primary"
                                >
                                  {child.name}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      className="px-4 py-2 rounded-lg text-font text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 text-font text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
                <User className="w-4 h-4" />
                <span>Login</span>
              </button>
              <Link
                href="/apply"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 text-font font-medium"
              >
                <FileText className="w-4 h-4" />
                <span>Apply Now</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 max-h-96 overflow-y-auto"
            >
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleMobileAccordionToggle(item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-font text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openMobileAccordion === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openMobileAccordion === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-4 mt-2 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.name}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="block px-4 py-2 text-font text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        onClick={closeMobileMenu}
                        className="block px-4 py-3 text-font text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <button className="flex items-center space-x-2 w-full px-4 py-3 text-font text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200">
                    <User className="w-4 h-4" />
                    <span>Login</span>
                  </button>
                  <Link
                    href="/apply"
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-font font-medium"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Apply Now</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;