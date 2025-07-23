import React from "react";
import Link from "next/link";

export default function Goals() {
  const features = [
    {
      icon: "",
      title: "Family Supports Program",
      description:
        "Our Family Supports Program is designed to work alongside families to enhance the lives of individuals with developmental disabilities while allowing them to remain in their home environments",
      badge: null,
    }, 
    {
      icon: "",
      title: "Supported Living Program",
      description:
        "In our Supported Living Program, individuals receive tailored care within homes that reflect their preferences, needs, and personal goals.",
      badge: "Feature text",
      badgeColor: "bg-purple-500",
    },
    {
      icon: "",
      title: "Individualized Support Planning (ISP/PCISP)",
      description:
        "At the heart of our approach is the Person-Centered Individualised Support Plan (PCISP), a dynamic, living document developed collaboratively with the individual, their family, legal representatives, and support team.",
      badge: null,
    }
  ];
  return (
  <section className='bg-[#FCFCFC] pt-6' id="Features">
      <div className="pb-[2.62rem] flex flex-col gap-[40px]">
      <div className="flex w-fit justify-start items-center px-4 py-[8px]  rounded-[8px] border border-[#E4E4E7] bg-[#F4FFFF] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)]">
            <h2 className="sm:text-sm text-[14px] font-medium text-gray-600 uppercase tracking-wide">
         OUR PROGRAMS
        </h2>
            </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl sm:max-w-full mx-auto  py-4 px-4">
          {/* Passenger Flights Card */}
          {features.map((feature, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 relative">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center" style={{
                  backgroundImage: 'linear-gradient(45deg, #10b981 0%, #3b82f6 100%)'
                }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
               {feature.description}
              </p>
            </div>
          </div>
          ))}
         
        </div>
         <div className="flex justify-between items-center space-x-4">
              <Link href="/services" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>→</span>
                <span>Read more</span>
              </Link>
              <div></div>
            </div>
      </div>
      
       
    </section>
  );
}
