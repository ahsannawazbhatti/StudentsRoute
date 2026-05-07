'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, GraduationCap, Globe, FileText, DollarSign, MessageSquare } from 'lucide-react';

interface AdmissionFormProps {
  title?: string;
  className?: string;
}

export default function AdmissionForm({ title = "Instant Admission Info", className = "" }: AdmissionFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    whatsapp: '',
    educationLevel: '',
    marks: '',
    degreeName: '',
    passOutYear: '',
    desiredCountry: '',
    englishTests: [] as string[],
    testScore: '',
    bankStatement: '',
    blockedAccount: '',
    otherInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (test: string) => {
    setFormData(prev => ({
      ...prev,
      englishTests: prev.englishTests.includes(test)
        ? prev.englishTests.filter(t => t !== test)
        : [...prev.englishTests, test]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}
    >
      <h3 className="text-2xl font-bold mb-6 heading-font text-center dual-color-text">
        <span className="text-black">{title.split(' ')[0]} </span>
        <span className="text-gradient">{title.split(' ').slice(1).join(' ')}</span>
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4 heading-font flex items-center">
            <User className="w-5 h-5 mr-2 text-primary" />
            Personal Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter your age"
                min="16"
                max="50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">WhatsApp No. *</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter WhatsApp number"
              />
            </div>
          </div>
        </div>

        {/* Educational Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4 heading-font flex items-center">
            <GraduationCap className="w-5 h-5 mr-2 text-primary" />
            Educational Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Education Level *</label>
              <select
                name="educationLevel"
                value={formData.educationLevel}
                onChange={handleInputChange}
                required
                className="form-field"
              >
                <option value="">Select Education Level</option>
                <option value="intermediate">Intermediate</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Marks/CGPA *</label>
              <input
                type="text"
                name="marks"
                value={formData.marks}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter marks or CGPA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Degree Name *</label>
              <input
                type="text"
                name="degreeName"
                value={formData.degreeName}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter degree name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Last Pass-Out Year *</label>
              <input
                type="number"
                name="passOutYear"
                value={formData.passOutYear}
                onChange={handleInputChange}
                required
                className="form-field"
                placeholder="Enter pass-out year"
                min="2000"
                max={new Date().getFullYear()}
              />
            </div>
          </div>
        </div>

        {/* Other Information */}
        <div>
          <h4 className="text-lg font-semibold mb-4 heading-font flex items-center">
            <FileText className="w-5 h-5 mr-2 text-primary" />
            Other Information
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Desired Country *</label>
              <select
                name="desiredCountry"
                value={formData.desiredCountry}
                onChange={handleInputChange}
                required
                className="form-field"
              >
                <option value="">Select Destination</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="sweden">Sweden</option>
                <option value="portugal">Portugal</option>
                <option value="germany">Germany</option>
                <option value="denmark">Denmark</option>
                <option value="ireland">Ireland</option>
                <option value="finland">Finland</option>
                <option value="belgium">Belgium</option>
                <option value="cyprus">Cyprus</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 text-font">
                Do you have IELTS, TOEFL, PTE, CAMBRIDGE or MOI?
              </label>
              <div className="flex flex-wrap gap-3">
                {['IELTS', 'TOEFL', 'PTE', 'CAMBRIDGE', 'MOI'].map((test) => (
                  <label key={test} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.englishTests.includes(test)}
                      onChange={() => handleCheckboxChange(test)}
                      className="rounded border-gray-300 text-primary focus:ring-primary mr-2"
                    />
                    <span className="text-sm text-font">{test}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.englishTests.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Enter Your Score</label>
                <input
                  type="text"
                  name="testScore"
                  value={formData.testScore}
                  onChange={handleInputChange}
                  className="form-field"
                  placeholder="Enter your test score"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">
                How much Bank Statement you can Manage?
              </label>
              <input
                type="text"
                name="bankStatement"
                value={formData.bankStatement}
                onChange={handleInputChange}
                className="form-field"
                placeholder="Enter amount (e.g., $20,000)"
              />
            </div>

            {formData.desiredCountry === 'germany' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 text-font">
                  For Germany: Can you manage Blocked Account?
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="blockedAccount"
                      value="yes"
                      checked={formData.blockedAccount === 'yes'}
                      onChange={handleInputChange}
                      className="text-primary focus:ring-primary mr-2"
                    />
                    <span className="text-sm text-font">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="blockedAccount"
                      value="no"
                      checked={formData.blockedAccount === 'no'}
                      onChange={handleInputChange}
                      className="text-primary focus:ring-primary mr-2"
                    />
                    <span className="text-sm text-font">No</span>
                  </label>
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 text-font">Any Other Information</label>
              <textarea
                name="otherInfo"
                value={formData.otherInfo}
                onChange={handleInputChange}
                rows={3}
                className="form-field"
                placeholder="Enter any additional information"
              />
            </div>
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary py-4 text-lg font-semibold"
        >
          Submit Application
        </motion.button>
      </form>
    </motion.div>
  );
}