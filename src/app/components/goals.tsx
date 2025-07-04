import React from "react";

export default function Goals() {
  const features = [
    {
      icon: "",
      title: "Consult Tracker Dashboard",
      description:
        "Track every patient consultation — not just the ones who signed — so no opportunity is missed. No more post-it notes or forgotten follow-ups.",
      badge: null,
    }, 
    {
      icon: "",
      title: "Automated Follow-Up Engine",
      description:
        "Send pre-written, customizable texts and emails post-consultation on your timeline (Day 1, Day 3, etc.). Boost starts without lifting a finger.",
      badge: "Feature text",
      badgeColor: "bg-purple-500",
    },
    {
      icon: "",
      title: "Financial Plan Presentation Tool",
      description:
        "Let patients see and choose between multiple plan options — like Pay in Full, Monthly, or No Down — in a clean, mobile-friendly format.",
      badge: null,
    },
    {
      icon: "",
      title: "Conversion Analytics",
      description:
        "Track consults, follow-up responses, plan preferences, and signed starts — all in one place. Know what works, where patients drop off, and which TCs convert best.",
      badge: null,
    },
    {
      icon: "",
      title: "Digital Contracts + E-Signatures",
      description:
        "Generate a ready-to-sign treatment contract based on the selected plan. Patients can sign instantly from their phone or in-office.",
      badge: null,
    },
    {
      icon: "",
      title: "Admin Panel",
      description:
        "You're in control — Edit templates, Add/remove users, Customize branding & Scale across multiple locations.",
      badge: null,
    },
  ];

  return (
  <section className='bg-[#FCFCFC]' id="Features">
      <div className="pb-[5.62rem] flex flex-col gap-[40px]">
      <div className="flex w-fit justify-start items-center px-4 py-[8px]  rounded-[8px] border border-[#E4E4E7] bg-[#F4FFFF] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)]">
            <h2 className="sm:text-sm text-[14px] font-medium text-gray-600 uppercase tracking-wide">
         OUR FEATURES
        </h2>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Feature Card */}
              <div className="rounded-[16px] px-[20px] py-[32px] hover:bg-[#E6FEFF] hover:outline-[#25CBCF] hover:outline-[0.4px] transition-all duration-200 h-full">
                <div className="flex flex-col gap-[20px] h-full">
                  <div className="h-10 bg-[#F4FFFF] p-2 border border-[#ECFEFF] border-8px relative w-[1.5rem] aspect-[5.61381/1.1875] rounded-[28px] flex items-center justify-center">
                    O
                  </div>

                  <div>
                    <h3 className="leading-[30px] font-500 text-[20px] font-normal text-[#18181B] mb-3">
                      {feature.title}
                    </h3>
                    <p className="leading-[24px] font-400 text-[16px] font-normal text-[#70707B]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
