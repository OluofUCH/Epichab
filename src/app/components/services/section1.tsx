import React from 'react';

const ServicesSection = () => {
   const features = [
    {
      icon: "",
      title: "Person-Centered Planning",
      description:
        "Every service we deliver is guided by a Person-Centered Individualised Support Plan (PCISP), tailored to the needs, preferences, and goals of the individual. We work collaboratively with individuals, their families, and legal representatives to ensure that services promote growth, self-determination, and a fulfilling quality of life. ",
      badge: null,
    }, 
    {
      icon: "",
      title: "Community Integration Activities",
      description:
        "We believe in full community inclusion. Individuals are supported to participate in activities they enjoy, from shopping trips and movie nights to local events and social gatherings. Our staff assist with planning weekly outings based on personal preferences, and we make every effort to facilitate community engagement that is age-appropriate, respectful, and empowering.",
      badge: "Feature text",
      badgeColor: "bg-purple-500",
    },
    {
      icon: "",
      title: "Financial and Rights Support",
      description:
        "Respecting and protecting individual rights is at the core of what we do. We provide assistance with budgeting, shopping, and money management only as needed and as outlined in each individual’s PCISP. Individuals maintain control over their funds and may choose to receive additional support through a Representative Payee if applicable.",
      badge: null,
    },
    {
      icon: "",
      title: "Medical & Behavioral Support",
      description:
        "Our trained staff provide essential support in coordinating health services, medication administration, and behavioural care in alignment with each individual’s needs. ",
      badge: null,
    },
    {
      icon: "",
      title: "Transportation Services",
      description:
        "To ensure individuals have full access to the community, we offer transportation services based on need and preference. This includes employee transportation, use of public transport, or coordination with family or support teams.",
      badge: null,
    },
    {
      icon: "",
      title: "Privacy and Independence Focus",
      description:
        "We honour the right of each individual to experience privacy and independence in every aspect of daily life. Individuals are supported to make their own decisions about meals, visitors, personal routines, and room access, including the ability to lock their bedrooms unless otherwise restricted by a support plan.",
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

