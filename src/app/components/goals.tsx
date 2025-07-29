import React from "react";
import Link from "next/link";

export default function Goals() {
  const features = [
   {
      icon: "",
      title: "Person-Centered Planning",
      description:
        "Every service we deliver is guided by a Person-Centered Individualised Support Plan (PCISP), tailored to the needs, preferences, and goals of the individual. We work collaboratively with individuals, their families, and legal representatives to ensure that services promote growth, self-determination, and a fulfilling quality of life. ",
      badge: null,
      src: 'https://compote.slate.com/images/66168178-3547-4917-8ea9-12938af61a04.jpg?crop=568%2C477%2Cx0%2Cy0&width=840',
    }, 
    {
      icon: "",
      title: "Community Integration Activities",
      description:
        "We believe in full community inclusion. Individuals are supported to participate in activities they enjoy, from shopping trips and movie nights to local events and social gatherings. Our staff assist with planning weekly outings based on personal preferences, and we make every effort to facilitate community engagement that is age-appropriate, respectful, and empowering.",
      badge: "Feature text",
      badgeColor: "bg-purple-500",
      src: 'https://seniorsrights.org.au/wp-content/uploads/2021/04/SRV-working-with-older-people-thumbnail.jpg',
    },
    {
      icon: "",
      title: "Financial and Rights Support",
      description:
        "Respecting and protecting individual rights is at the core of what we do. We provide assistance with budgeting, shopping, and money management only as needed and as outlined in each individual’s PCISP. Individuals maintain control over their funds and may choose to receive additional support through a Representative Payee if applicable.",
      badge: null,
      src: 'https://plus.unsplash.com/premium_photo-1683140583875-60f4c8f6290e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFwcHklMjBvbGQlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
    },
    
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
                  backgroundImage: `url(${feature.src})`,
                  backgroundSize: 'cover',
                }}>
                  <div className="absolute inset-0 bg-black/20 bg-opacity-40"></div>
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
