"use client"
import React, { useState } from 'react';
import { Phone, Clock, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-80 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-20 w-32 h-32 bg-cyan-400 rounded-full opacity-30 blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer Support */}
            <div className="bg-white rounded-lg shadow-md p-6">
                      <span className="text-blue-600 font-semibold">🇳🇬</span>
                      <span className="text-blue-700">+234</span><h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Support</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span className="text-blue-700">Phone: 040-1-234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-blue-700">Mon-Sun: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Email Support</h3>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-blue-700">General Inquiries: info@example.com</span>
              </div>
            </div>

            {/* Head Office */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Head Office</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-600 mt-1" />
                  <div className="text-blue-700">
                    <p>Phase 44 Headquarters</p>
                    <p>Abuja, Dutse International Airport</p>
                    <p>Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in touch with us</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border text-black border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                      <span className="text-green-600 font-semibold">🇳🇬</span>
                      <span className="text-gray-700">+234</span>
                    </div>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer inline-block"
                >
                  Send Your Message
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <div className="bg-gray-100 rounded-lg h-96 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">
                  {/* Map Header */}
                  <div className="bg-white p-3 m-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-800">Abuja Super International Airport</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-yellow-400">★</span>
                        <span className="text-gray-300">★</span>
                      </div>
                      <span className="text-sm text-gray-600">4.2 · 3 Google reviews</span>
                    </div>
                  </div>

                  {/* Map Content */}
                  <div className="relative h-full">
                    {/* Simulated map roads */}
                    <div className="absolute inset-0">
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 transform -translate-y-1/2"></div>
                      <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400 transform -translate-x-1/2"></div>
                      <div className="absolute top-1/3 left-1/4 w-1/2 h-1 bg-gray-400 transform rotate-45"></div>
                    </div>

                    {/* Location marker */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rotate-45"></div>
                      </div>
                    </div>

                    {/* Area labels */}
                    <div className="absolute bottom-8 left-4 text-xs text-gray-600">
                      <div className="bg-white px-2 py-1 rounded shadow">Gwagwalada</div>
                    </div>
                    <div className="absolute top-8 right-4 text-xs text-gray-600">
                      <div className="bg-white px-2 py-1 rounded shadow">Kuje</div>
                    </div>
                  </div>

                  {/* Google Maps attribution */}
                  <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                    <span className="bg-white px-2 py-1 rounded">Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;