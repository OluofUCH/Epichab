import React from 'react';
import Link from "next/link";
import { Shield, Eye, Lock, Phone, Mail, FileText } from 'lucide-react';

export default function AccessibilityPrivacy() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 min-h-screen pt-[0rem]">
    
    
        <section className="relative min-h-[80dvh] bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/70 flex items-center justify-center text-white">
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
           Accessibility and Privacy
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
           Transparency, Inclusiveness & Compliance
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="max-w-full flex-center justify-center mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:pb-[1.62rem]">
        <div className="rounded-2xl p-8 lg:p-12">
          <div className="max-w-full">
            
            <div className="flex flex-col gap-6">
             

              {/* Accessibility Statement */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Eye className="w-7 h-7 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-blue-900">
                        Accessibility Statement
                      </h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Epichab Solution LLC is committed to ensuring digital accessibility for all individuals, including those with disabilities. We strive to comply with <strong className="text-blue-700">WCAG 2.1 Level AA standards</strong> and continually work to improve the user experience for everyone.
                      </p>
                      
                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                        <h3 className="text-xl font-bold text-blue-900 mb-4">Need Assistance?</h3>
                        <p className="text-gray-700 mb-4">
                          If you encounter any barriers while using this website or require content in alternative formats, please contact us:
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-blue-100">
                            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-gray-800">Email Support</p>
                              <p className="text-blue-700 font-medium">accessibility@epichabsolution.com</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 bg-white rounded-lg p-4 border border-blue-100">
                            <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-gray-800">Phone Support</p>
                              <p className="text-blue-700 font-medium">(123) 456-7890</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* HIPAA & Privacy Compliance */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mr-4">
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold">
                        HIPAA & Privacy Compliance
                      </h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg opacity-90 leading-relaxed">
                        As a Medicaid waiver provider, we strictly adhere to the <strong className="text-blue-300">Health Insurance Portability and Accountability Act (HIPAA)</strong> and all applicable state and federal privacy regulations.
                      </p>
                      
                      <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-4 text-blue-200">We ensure:</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-bold">✓</span>
                            </div>
                            <span className="opacity-90">Secure handling of personal health information (PHI)</span>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-bold">✓</span>
                            </div>
                            <span className="opacity-90">Limited access to sensitive data on a need-to-know basis</span>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-bold">✓</span>
                            </div>
                            <span className="opacity-90">Staff training on confidentiality, consent, and data protection</span>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-bold">✓</span>
                            </div>
                            <span className="opacity-90">Written and digital communications are protected and compliant</span>
                          </div>
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-50 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <FileText className="w-7 h-7 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-blue-900">
                        Terms & Conditions
                      </h2>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        By using this website, you agree to the following terms and conditions:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-2">Educational Purpose</h4>
                              <p className="text-gray-700">Information provided is for general educational purposes only and not a substitute for professional advice.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-2">Website Access</h4>
                              <p className="text-gray-700">We do not guarantee uninterrupted or error-free website access.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                            <div>
                              <h4 className="font-bold text-gray-800 mb-2">Content Usage</h4>
                              <p className="text-gray-700">You may not reproduce, redistribute, or alter any content without written permission from Epichab Solution LLC.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                        <p className="text-lg text-blue-900 font-semibold">
                          Full terms and service use policies are available upon request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
          
        
        </div>
      </main>
    </div>
  );
}