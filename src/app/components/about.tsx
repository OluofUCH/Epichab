import React from 'react';

export default function Aboutus() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-1 text-3xl text-black">About us</div>
            <div className="flex items-center space-x-4">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>→</span>
                <span>Read more</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
        </div>
      </main>

   
    </div>
  );
}