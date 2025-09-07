"use client";
import React, { useState } from 'react';
import { Phone, Clock, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
       <section className="relative min-h-[80dvh] bg-[url('https://www.ashleycourtcare.co.uk/wp-content/uploads/2018/10/Senior-and-Elderly-Care-Living-Options.jpg')] bg-cover bg-center flex items-center justify-center text-white">
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
  <div className="relative z-10 text-center px-8">
    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
           Contact Us
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
           Reach out to us for any inquiries, support, or feedback. We are here to assist you with all your needs.
          </p>
  </div>
</section>

      {/* Contact Info Cards */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <span className="text-blue-600 font-semibold">US</span>
              <span className="text-blue-700">+44</span>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Support</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-600" />
                  <span className="text-blue-700">Phone: 040-1-234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-blue-700">Monday – Friday: 9:00 AM – 5:00 PM
Saturday & Sunday: Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Email Support</h3>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-600" />
                <span className="text-blue-700">General Inquiries: info@epichabsolution.com</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Head Office</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-600 mt-1" />
                  <div className="text-blue-700">
                    <p>266 Swan Rd Old Fort, </p>
                    <p>Tennessee(TN), 37362</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-6">Please complete the form below and a member of our team will respond within 1–2 business days.</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                    <span className="text-green-600 font-semibold">US</span>
                    <span className="text-gray-700">+44</span>
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                ></textarea>

                <div
                  onClick={handleSubmit}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 cursor-pointer inline-block"
                >
                  Send Your Message
                </div>
              </div>
            </div>

            {/* Fake Map */}
            <div className="bg-gray-100 rounded-lg h-96 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200">
                <div className="bg-white p-3 m-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800">266 Swan Rd Old Fort,Tennessee(TN), 37362</h3>
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

                <div className="relative h-full">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-400 transform -translate-y-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-1 h-full bg-gray-400 transform -translate-x-1/2"></div>
                    <div className="absolute top-1/3 left-1/4 w-1/2 h-1 bg-gray-400 transform rotate-45"></div>
                  </div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rotate-45"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-4 text-xs text-gray-600">
                    <div className="bg-white px-2 py-1 rounded shadow">New York</div>
                  </div>
                  <div className="absolute top-8 right-4 text-xs text-gray-600">
                    <div className="bg-white px-2 py-1 rounded shadow">Tennesse</div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                  <span className="bg-white px-2 py-1 rounded">Google</span>
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
