import React from 'react';

const ServicesSection = () => {
   const features = [
    {
      icon: "",
      title: "Habilitation",
      description:
        "Track every patient consultation — not just the ones who signed — so no opportunity is missed. No more post-it notes or forgotten follow-ups.",
      badge: null,
    }, 
    {
      icon: "",
      title: "Supportive Living",
      description:
        "Send pre-written, customizable texts and emails post-consultation on your timeline (Day 1, Day 3, etc.). Boost starts without lifting a finger.",
      badge: "Feature text",
      badgeColor: "bg-purple-500",
    },
    {
      icon: "",
      title: "Behavioral Support Plans",
      description:
        "Let patients see and choose between multiple plan options — like Pay in Full, Monthly, or No Down — in a clean, mobile-friendly format.",
      badge: null,
    },
    {
      icon: "",
      title: "Health & Safety Monitoring",
      description:
        "Track consults, follow-up responses, plan preferences, and signed starts — all in one place. Know what works, where patients drop off, and which TCs convert best.",
      badge: null,
    },
    {
      icon: "",
      title: "Community Participation Assistance",
      description:
        "Generate a ready-to-sign treatment contract based on the selected plan. Patients can sign instantly from their phone or in-office.",
      badge: null,
    },
    {
      icon: "",
      title: "24-hour Support (as needed)",
      description:
        "You're in control — Edit templates, Add/remove users, Customize branding & Scale across multiple locations.",
      badge: null,
    },
  ];
  return (
    <div className="bg-gray-50 text-white">
      <div className="max-w-6xl sm:max-w-full mx-auto">
        {/* Header */}
         <section className="relative min-h-[70dvh] w-full bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/70 flex items-center justify-center text-white">
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Join us in giving quality healthcare around the world, explore different cultures and lifestyles
          </p>
        </div>
      </section>
       

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl sm:max-w-full mx-auto  py-20 px-4">
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
      </div>
    </div>
  );
};

export default ServicesSection;

