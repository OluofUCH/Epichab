import React from 'react';
import Link from "next/link";

export default function RightsSafeguards() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100  min-h-screen pt-[2rem]">
    
       <section className="relative min-h-[80dvh] bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/70 flex items-center justify-center text-white">
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
            Our Policy
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
           INDIVIDUAL RIGHTS & SAFEGUARDS</p>
        </div>
      </section>
      
      {/* Main Content */}
      <main className="max-w-full mx-auto px-4 flex justify-center items-center sm:px-0 lg:px-0 py-0 sm:pb-[1.62rem]">
        <div className="rounded-2xl p-8 lg:p-12">
          <div className="max-w-full">
            
            
            <div className="space-y-8">
             

              {/* Rights and Freedom Policy */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-white w-full p-8 shadow-xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-blue-50 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">⚖️</span>
                      </div>
                      <h2 className="text-3xl font-bold text-blue-900">
                        Rights and Freedom Policy Summary
                      </h2>
                    </div>
                    
                    <p className="text-lg mb-6 text-gray-700">Every individual has the right to:</p>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">🏠</span>
                          <span className="font-semibold text-gray-800">Make decisions about their daily life, meals, and routines</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">🏡</span>
                          <span className="font-semibold text-gray-800">Choose their home and housemates</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">🌍</span>
                          <span className="font-semibold text-gray-800">Participate in meaningful community activities</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">💬</span>
                          <span className="font-semibold text-gray-800">Communicate freely and privately with others</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">💰</span>
                          <span className="font-semibold text-gray-800">Manage their own finances with support, when needed</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <div className="flex items-center mb-2">
                          <span className="text-lg mr-2">🔓</span>
                          <span className="font-semibold text-gray-800">Be free from unnecessary restrictions or restraints</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700">
                      We educate individuals in their preferred mode of communication and provide written and verbal reminders of their rights. No rights are ever restricted unless formally justified in the Person-Centered Individualised Support Plan (PCISP) and approved by a Human Rights Committee.
                    </p>
                  </div>
                </div>
              </div>

              {/* Protection Against Abuse */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">🚫</span>
                      </div>
                      <h2 className="text-3xl font-bold">
                        Protection Against Abuse and Neglect
                      </h2>
                    </div>
                    
                    <p className="text-lg mb-6 opacity-90">
                      We enforce a strict zero-tolerance policy for abuse, neglect, or exploitation. All employees are trained during orientation and annually thereafter to recognise, report, and prevent:
                    </p>
                    
                    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <span className="text-red-300 mr-2">⚠️</span>
                          <span>Physical, emotional, or verbal abuse</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-300 mr-2">💸</span>
                          <span>Financial exploitation</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-300 mr-2">⛓️</span>
                          <span>Inappropriate restraint or punishment</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-300 mr-2">🏥</span>
                          <span>Denial of basic needs</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-red-300 mr-2">🚷</span>
                          <span>Sexual misconduct or harassment</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg opacity-90">
                      All suspected incidents are investigated immediately, and if substantiated, result in the immediate suspension and potential termination of the staff involved. Reports are filed with all relevant authorities, including Adult or Child Protective Services, BDDS, and law enforcement when required.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy & Dignity */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-50 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">🔒</span>
                      </div>
                      <h2 className="text-3xl font-bold text-blue-900">
                        Privacy & Dignity Policy
                      </h2>
                    </div>
                    
                    <p className="text-lg mb-6 text-gray-700">
                      Respect for privacy is a cornerstone of our care model. Each individual has the right to:
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-center">
                        <span className="text-lg mr-3">🏠</span>
                        <span className="text-gray-800">Private space and secure personal belongings</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-center">
                        <span className="text-lg mr-3">🔐</span>
                        <span className="text-gray-800">Lock their bedroom doors (unless otherwise specified in the PCISP)</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-center">
                        <span className="text-lg mr-3">🚿</span>
                        <span className="text-gray-800">Use bathroom facilities in private</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-center">
                        <span className="text-lg mr-3">📞</span>
                        <span className="text-gray-800">Make private phone calls and host private visits</span>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 flex items-center">
                        <span className="text-lg mr-3">✋</span>
                        <span className="text-gray-800">Say no to visitors or interactions that make them uncomfortable</span>
                      </div>
                    </div>
                    
                    <div className="bg-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                      <p className="text-lg text-blue-900 font-semibold">
                        Dignity is not a benefit, it's a right. Individuals set their own boundaries within shared homes, and we support housemates in creating mutually respectful agreements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* HCBS Compliance */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-700 to-blue-800 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">✅</span>
                      </div>
                      <h2 className="text-3xl font-bold">
                        HCBS Final Rule Compliance
                      </h2>
                    </div>
                    
                    <p className="text-lg mb-6 opacity-90">
                      As a certified Home and Community-Based Services (HCBS) provider, Epichab Solution LLC strictly complies with all Final Rule requirements. This includes:
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-start">
                          <span className="text-lg mr-3 mt-1">🏘️</span>
                          <span>Ensuring individuals live in settings that are integrated in the community</span>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-start">
                          <span className="text-lg mr-3 mt-1">🎯</span>
                          <span>Supporting informed choice in housing, employment, and services</span>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-start">
                          <span className="text-lg mr-3 mt-1">🚀</span>
                          <span>Promoting independence, inclusion, and self-direction</span>
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-start">
                          <span className="text-lg mr-3 mt-1">🌐</span>
                          <span>Protecting privacy, rights, and access to the broader community</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complaint & Grievance */}
              <div className="group hover:scale-[1.01] transition-all duration-300">
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-36 h-36 bg-blue-50 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <span className="text-3xl">📝</span>
                      </div>
                      <h2 className="text-3xl font-bold text-blue-900">
                        Complaint & Grievance Procedure
                      </h2>
                    </div>
                    
                    <p className="text-lg mb-6 text-gray-700">
                      We believe in transparent, respectful feedback. Every individual, and their legal representative, has the right to file a complaint or appeal any decision.
                    </p>
                    
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-xl font-bold mb-4 text-blue-900">How It Works:</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">1</div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Report a Complaint</h4>
                            <p className="text-gray-700">Any concern may be reported to any Epichab employee at any time.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">2</div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Initial Review</h4>
                            <p className="text-gray-700">The CEO or designee investigates within <strong className="text-blue-700">5 calendar days</strong>, with a written response provided within <strong className="text-blue-700">14 calendar days</strong>.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">3</div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Appeals Process</h4>
                            <p className="text-gray-700">If dissatisfied, individuals can request a <strong className="text-blue-700">CEO Review</strong> within 10 days. A meeting is held, and a written report is issued within 5 days.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 mt-1 font-bold text-sm">4</div>
                          <div>
                            <h4 className="font-bold text-lg text-gray-800">Final Appeal</h4>
                            <p className="text-gray-700">An appeal hearing with the President and full support team is scheduled within 15 days of the appeal request. A final written outcome is issued within 5 days of the hearing.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-100 rounded-xl p-6 border-l-4 border-blue-600 mt-6">
                      <p className="text-lg text-blue-900 font-semibold">
                        We honour all concerns and never retaliate. Support in communication, documentation, or advocacy is available upon request.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mt-12">
            <Link href="/contact" className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">📞</span>
              <span>Report a Concern</span>
            </Link>
            <Link href="/services" className="group bg-white hover:bg-gray-50 text-blue-700 border-2 border-blue-200 hover:border-blue-300 px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">🏠</span>
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}