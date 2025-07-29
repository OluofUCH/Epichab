import React from 'react';

const ServicesSection = () => {
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
    {
      icon: "",
      title: "Medical & Behavioral Support",
      description:
        "Our trained staff provide essential support in coordinating health services, medication administration, and behavioural care in alignment with each individual’s needs. ",
      badge: null,
      src: 'https://plus.unsplash.com/premium_photo-1683140698246-1d9d7097b64f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhhcHB5JTIwb2xkJTIwcGVvcGxlfGVufDB8fDB8fHww',
    },
    {
      icon: "",
      title: "Transportation Services",
      description:
        "To ensure individuals have full access to the community, we offer transportation services based on need and preference. This includes employee transportation, use of public transport, or coordination with family or support teams.",
      badge: null,
      src: 'https://plus.unsplash.com/premium_photo-1680291646250-ad53c6c4eb30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBvbGQlMjBwZW9wbGV8ZW58MHx8MHx8fDA%3D',
    },
    {
      icon: "",
      title: "Privacy and Independence Focus",
      description:
        "We honour the right of each individual to experience privacy and independence in every aspect of daily life. Individuals are supported to make their own decisions about meals, visitors, personal routines, and room access, including the ability to lock their bedrooms unless otherwise restricted by a support plan.",
      badge: null,
      src: 'https://thumbs.dreamstime.com/b/portrait-happy-old-man-smiling-looking-camera-36503172.jpg?w=992',
    },
  ];
  return (
    <div className="bg-gray-50 text-white">
      <div className="max-w-6xl sm:max-w-full mx-auto">
        {/* Header */}
         <section className="relative min-h-[80dvh] bg-[url('https://bacp-web-live-endpoint.azureedge.net/cache/1/b/e/1/5/5/1be1557b7eedf235f7aed2fbe5fdc88b8ebca8f7.jpg')] bg-cover bg-center flex items-center justify-center text-white">
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
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
      </div>
    </div>
  );
};

export default ServicesSection;

