import React from 'react';
import Link from "next/link";

export default function Team() {
  return (
    <div className="bg-gray-50 pt-[0rem]">
      <section className="relative min-h-[80dvh] bg-[url('https://www.ashleycourtcare.co.uk/wp-content/uploads/2018/10/Senior-and-Elderly-Care-Living-Options.jpg')] bg-cover bg-center flex items-center justify-center text-white">
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
  <div className="relative z-10 text-center px-8">
    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
      Our team
    </h1>
    <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
    
            Meet the People Behind the Mission
            </p>
  </div>
</section>

     
      
      {/* Main Content */}
      <main className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:pb-[1.62rem]">
        <div className="rounded-lg p-8 lg:p-12">
          <div className="max-w-full">
            
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              
              
              {/* Team Members */}
              <div className="grid md:grid-cols-2 gap-12 mt-12">
                
                {/* CEO Section */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Shakirah Raji – Chief Executive Officer (CEO)
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As Founder and CEO of Epichab Solution LLC, Shakirah Raji brings visionary leadership rooted in compassion and accountability. With years of experience in disability services, she is responsible for overseeing all operations and ensuring that our programs align with our mission, uphold best practices, and protect individual rights.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    Her role includes providing strategic direction, supervising the Executive Director and Team Coordinators, ensuring compliance with state and federal standards, and cultivating a culture of respect and excellence. She remains actively engaged in policy development, quality assurance, and community outreach.
                  </p>
                </div>

                {/* Executive Director Section */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Executive Director
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The Executive Director manages the day-to-day operations of our Family Supports Program, ensuring that every aspect of service delivery reflects our vision and core values. This role includes direct supervision of Program Directors, monitoring service quality, coordinating admissions and transitions, and overseeing regulatory compliance.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    The Executive Director also leads staff development, responds to incidents and concerns, and acts as a liaison with families, case managers, and community partners to maintain transparency and trust in everything we do.
                  </p>
                </div>

                {/* Program Managers Section */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Program Managers
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Program Managers are at the centre of daily service coordination. They supervise staff, monitor residential and community-based sites, and ensure full compliance with each individual's PCISP. Their responsibilities include scheduling, documentation, incident investigation, behaviour support, and internal audits.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    They are also responsible for fostering a positive work environment for staff, maintaining strong communication with families and case managers, and ensuring that each individual receives meaningful, rights-respecting care.
                  </p>
                </div>

                {/* Team Leads Section */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Team Leads
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our Team Leads serve as on-site supervisors within residential programs or community service settings. They are responsible for managing staff schedules, supporting daily operations, and providing hands-on care when needed.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    In addition to administrative tasks such as reporting, budgeting, and grocery coordination, Team Leads ensure the safety, comfort, and dignity of the individuals we serve. They act as key connectors between Program Managers and Direct Support Professionals and help translate care plans into compassionate action.
                  </p>
                </div>

                {/* DSPs Section */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">
                    Direct Support Professionals (DSPs)
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    DSPs are the heart of Epichab's service model. These dedicated caregivers provide direct support to individuals in their homes and communities, helping with personal care, medication administration, meals, transport, and skill-building activities.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    More than just caregivers, DSPs are mentors, advocates, and everyday companions who build lasting relationships with the individuals they support. Each DSP is trained in Epichab's rights-focused approach and is committed to promoting autonomy, respect, and quality of life for every individual they serve.
                  </p>
                </div>

              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 mt-12">
            <Link href="/career" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
              <span>→</span>
              <span>Join Our Team</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}