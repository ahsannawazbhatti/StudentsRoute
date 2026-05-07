'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { getCompanyInfo } from '@/lib/api';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const companyInfo = getCompanyInfo();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 heading-font">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-font">{companyInfo.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-font">{companyInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-font">{companyInfo.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 heading-font">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about/introduction" className="hover:text-primary text-font">About Us</Link></li>
              <li><Link href="/about/services" className="hover:text-primary text-font">Services</Link></li>
              <li><Link href="/success-stories" className="hover:text-primary text-font">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-primary text-font">Contact</Link></li>
            </ul>
          </div>

          {/* Admission Form */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 heading-font">Instant Admission Info</h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="px-4 py-2 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-font placeholder-white/70"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="px-4 py-2 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-font placeholder-white/70"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="px-4 py-2 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-font placeholder-white/70"
                />
                <select
                  required
                  className="px-4 py-2 rounded bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary text-font"
                >
                  <option value="">Select Destination</option>
                  <option value="uk">UK</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="sweden">Sweden</option>
                  <option value="portugal">Portugal</option>
                </select>
                <button type="submit" className="md:col-span-2 btn-primary">
                  Get Info
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-font">© {currentYear} {companyInfo.name}. All Rights Reserved.</p>
          <div className="mt-2 text-sm flex items-center justify-center space-x-4">
            <span className="text-font">Language: English</span>
            <span>|</span>
            <span className="text-font">Powered by: {companyInfo.name}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;