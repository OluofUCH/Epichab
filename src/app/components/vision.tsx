import React from 'react';
import Link from "next/link";
const Vision = () => {
  return (
    <div className=" bg-gradient-to-r from-gray-800 to-gray-900  p-8 sm:pt-0  sm:pb-[5.62rem]">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:pt-6">
          
          {/* Left Section - Our Work */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-1">
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">What we do</h1>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
               At Epichab Solution LLC, we provide supported living services that prioritise the individual’s autonomy, comfort, and dignity. Our goal is to help each person create a home that feels safe, welcoming, and entirely their own. Whether the residence is owned by the individual, their family, or Epichab, we ensure that all housing arrangements uphold the Home and Community-Based Services (HCBS) Final Rule, respecting personal privacy and choice in housemates, activities, and routines. </p>
            </div>
          </div>

       
   {/* Right Section - Climate Literacy and Advocacy */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-1">
            {/* Image placeholder */}
            <div className="mb-6">
              <img 
                src="https://www.ashleycourtcare.co.uk/wp-content/uploads/2018/10/Senior-and-Elderly-Care-Living-Options.jpg"
                alt="Students in classroom"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-6">Person-Centered Planning</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
            Every service we deliver is guided by a Person-Centered Individualised Support Plan (PCISP), tailored to the needs, preferences, and goals of the individual. </p>
            
             <Link href="/services" className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Read More
            </Link>
          </div>

          {/* Right Section - Climate Literacy and Advocacy */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:col-span-1">
            {/* Image placeholder */}
            <div className="mb-6">
              <img 
                src="https://img.freepik.com/premium-photo/happy-elderly-people-laughing-together-outdoors-joyful-moment-elderly-individuals-laughing_1143726-43499.jpg?w=826"
                alt="Students in classroom"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <h2 className="text-xl font-bold text-gray-900 mb-6">Financial and Rights Support</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              Respecting and protecting individual rights is at the core of what we do. We provide assistance with budgeting, shopping, and money management only as needed and as outlined in each individual’s PCISP. 
            </p>
            
            <Link href="/services" className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Read More
            </Link>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default Vision;