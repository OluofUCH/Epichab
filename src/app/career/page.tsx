"use client";
import React, { useState } from 'react';
import { Phone, Clock, Mail, MapPin, Users, Heart, Star, Briefcase } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

const Careers: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    // Handle form submission here
  };

  const jobRoles = [
    {
      title: "Direct Support Professional (DSP)",
      icon: "❤️",
      description: "DSPs provide hands-on care and companionship to individuals. Responsibilities include personal care, medication administration, community outings, activity planning, and support with daily routines. DSPs are the heart of our mission and make a tangible impact every day."
    },
    {
      title: "Team Lead",
      icon: "🌟",
      description: "Team Leads supervise DSPs and manage the daily operations of supported homes. They ensure staffing coverage, oversee documentation, conduct drills and safety checks, and coordinate community integration activities and appointments."
    },
    {
      title: "Program Manager",
      icon: "📊",
      description: "Program Managers oversee service sites and ensure consistent care delivery. Duties include supervising staff, managing schedules, coordinating care plans, conducting internal investigations, and leading support team meetings."
    },
    {
      title: "Executive Director",
      icon: "🎯",
      description: "The Executive Director manages day-to-day operations of our Family Supports Program and Supported Living Services. They supervise Program Directors, ensure PCISP compliance, review incident reports, and lead organisational training and compliance activities."
    },
  ];

  const benefits = [
    { icon: "🤝", title: "Supportive Environment", desc: "A supportive, inclusive work environment" },
    { icon: "📚", title: "Professional Development", desc: "Ongoing professional development and training" },
    { icon: "📈", title: "Career Growth", desc: "Opportunities for advancement and leadership" },
    { icon: "💼", title: "Meaningful Work", desc: "Meaningful work that makes a lasting impact" }
  ];

  const requirements = [
    "Be at least 18 years of age",
    "Pass State and County criminal background checks",
    "Have a current negative TB test",
    "Hold CPR and First Aid certification from a recognised provider",
    "Maintain a valid driver's license and proof of vehicle insurance (if transporting individuals)",
    "Complete all mandatory training modules during onboarding and annually thereafter",
    "Show commitment to dignity, respect, and zero tolerance for abuse, neglect, or exploitation"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative min-h-[80dvh] bg-[url('https://bacp-web-live-endpoint.azureedge.net/cache/1/b/e/1/5/5/1be1557b7eedf235f7aed2fbe5fdc88b8ebca8f7.jpg')] bg-cover bg-center flex items-center justify-center text-white">
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
  <div className="relative z-10 text-center px-8">
    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
           Join our team
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
           Make a difference in the lives everyday. Explore our career opportunities and become part of a compassionate community dedicated to empowering others.
          </p>
  </div>
</section>

      {/* Why Work With Us */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Work with Us</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              At Epichab Solution LLC, we're more than a care provider, we're a community of professionals committed to changing lives through compassion, respect, and advocacy. When you join our team, you become part of a mission that empowers individuals with developmental disabilities to live independently and with dignity.
            </p>
          </div>

          

         
        </div>
      </div>

      {/* Current Openings */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Current Openings</h2>
            <p className="text-lg text-gray-700 mb-8">We are currently hiring for the following roles:</p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Direct Support Professionals (DSPs)
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Team Leads
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Program Managers
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
                Executive Director
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
                <Briefcase className="w-5 h-5" />
                <span>Apply Now</span>
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Email CV to careers@epichabsolution.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Job Descriptions */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">Job Descriptions</h2>
          
          <div className="grid md:grid-cols-2 sm:grid-cols-4 gap-6">
            {jobRoles.map((job, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{job.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">{job.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Employment Requirements */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Employment Requirements</h2>
          <p className="text-xl text-blue-100 text-center mb-12">
            To ensure the safety and well-being of those we serve, all employees must meet the following requirements:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <p className="text-blue-100">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Apply Today</h2>
              <p className="text-lg text-gray-700 mb-8">
                Ready to make a difference? Submit your application and join our mission to empower individuals with developmental disabilities.
              </p>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  />
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                  >
                    <option value="">Select Position</option>
                    <option value="dsp">Direct Support Professional (DSP)</option>
                    <option value="team-lead">Team Lead</option>
                    <option value="program-manager">Program Manager</option>
                    <option value="executive-director">Executive Director</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <input
                  type="text"
                  name="experience"
                  placeholder="Years of Experience in Healthcare/Social Services"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                />

                <textarea
                  name="message"
                  placeholder="Tell us why you want to join our team and any additional information..."
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-800"
                ></textarea>

                <div
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 cursor-pointer inline-flex items-center space-x-2"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Submit Application</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    HR Department
                  </h4>
                  <p className="text-blue-700 font-semibold">careers@epichabsolution.com</p>
                  <p className="text-gray-600 text-sm mt-2">For all career inquiries and applications</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    Phone Support
                  </h4>
                  <p className="text-blue-700 font-semibold">+44-040-1-234-5678</p>
                  <p className="text-gray-600 text-sm mt-2">Monday – Friday: 9:00 AM – 5:00 PM</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                    Head Office
                  </h4>
                  <div className="text-gray-700">
                    <p>266 Swan Rd Old Fort,</p>
                    <p>Tennessee(TN), 37362</p>
                    <p>US</p>
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

export default Careers;