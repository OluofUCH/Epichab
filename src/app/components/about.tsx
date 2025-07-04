import React from 'react';

export default function Aboutus() {
  return (
    <div className=" bg-gray-50 pt-[2rem]">
    
 <div className="flex mx-4 w-fit justify-start items-center px-4 py-[8px]  rounded-[8px] border border-[#E4E4E7] bg-[#F4FFFF] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)]">
            <h2 className="sm:text-sm px-4 sm:px-6 text-[14px] font-medium text-gray-600 uppercase tracking-wide">
        ABOUT US
        </h2>
            </div>
      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:pb-[5.62rem]">
        <div className=" rounded-lg  p-8 lg:p-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Home and Community-Based Services HCBS Growth in Africa
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
This business operates in the healthcare and social support sector, specifically providing non-medical support services for individuals with disabilities or special needs under Medicaid waiver programs or similar systems.
              </p>
              
              <p className="text-lg">
               Epichab Solution LLC provides individualized support to help clients live independently and with dignity in community settings. Epichab Solution LLC provides individualized support to help clients live independently and with dignity in community settings. 
          </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>→</span>
                <span>Read more</span>
              </button>
            </div>
        </div>
      </main>

   
    </div>
  );
}