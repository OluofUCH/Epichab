import React from 'react';

export default function Goals() {
  const sections = [
    {
      title: "Supportive Living: Incubating Eco-Friendly Innovations for Africa's Prosperity",
      content: "We, as Trusted Climate Action In Africa, support budding entrepreneurs with environmentally conscious business ideas. Through mentoring and financial assistance, we catalyze sustainable innovations that address Africa's challenges while boosting its economic potential."
    },
    {
      title: "Behavioral Support Plans: Empowering Minds for a Sustainable Future",
      content: "We believe in the power of education. Our online climate literacy programs equip individuals with knowledge and awareness, empowering them to become eco-conscious leaders and drive climate action forward."
    },
    {
      title: "Community Participation Assistance: Empowering Nations to Combat Climate Change",
      content: "Climate Action Africa works with governments and businesses to implement carbon tax strategies effectively. Through education and policy support, we promote responsible carbon pricing and emission reduction."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 h-full">
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900 leading-tight">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}