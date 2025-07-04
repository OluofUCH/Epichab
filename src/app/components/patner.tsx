import React from 'react';

const PartnersSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Our Partners
        </h2>
        
        {/* Partners Grid */}
        <div className="flex  justify-center items-center gap-8 md:gap-12 lg:gap-16 overflow-hidden">
        
          {/* GFLAC Logo */}
          <div className="flex items-center justify-center h-20 w-40">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-2xl font-bold text-blue-500">GFLAC</span>
            </div>
          </div>
          
          {/* ISN HUBS Logo */}
          <div className="flex items-center justify-center h-20 w-40">
            <div className="flex items-center space-x-1">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mb-1"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              </div>
              <div className="ml-2">
                <div className="text-2xl font-bold text-gray-800">ISN</div>
                <div className="text-lg font-semibold text-gray-600">HUBS</div>
              </div>
            </div>
          </div>
          
          {/* Green Leaf Logo */}
          <div className="flex items-center justify-center h-20 w-40">
            <div className="relative">
              <div className="w-16 h-20 bg-green-600 transform rotate-12 rounded-full"></div>
              <div className="absolute top-3 left-3 w-6 h-6 bg-white rounded-full"></div>
              <div className="absolute bottom-2 right-2 text-white font-bold text-sm">f</div>
            </div>
          </div>
          
          {/* KEWA ACCELERATEUR Logo */}
          <div className="flex items-center justify-center h-20 w-48">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <span className="text-2xl font-bold text-green-500">A</span>
                <span className="text-2xl font-bold text-red-500">K</span>
                <span className="text-2xl font-bold text-yellow-500">E</span>
                <span className="text-2xl font-bold text-blue-500">W</span>
                <span className="text-2xl font-bold text-red-500">A</span>
              </div>
              <div className="text-sm font-semibold text-red-500">ACCELERATEUR</div>
              <div className="text-xs text-gray-600 italic">Parce que réussir est un projet.</div>
            </div>
          </div>
          
          {/* Lagos State Government Logo */}
          <div className="flex items-center justify-center h-20 w-20">
            <div className="relative w-16 h-16 bg-yellow-500 rounded-full border-4 border-yellow-600">
              <div className="absolute inset-2 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-yellow-700">
                LAGOS STATE GOVT
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;