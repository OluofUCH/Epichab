import React from 'react';

const Vision = () => {
  return (
    <div className=" bg-gray-50 p-8 sm:pb-[5.62rem]">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section - Our Work */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-1">
            <div className="border-l-4 border-green-600 pl-4 mb-6">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">What we do</h1>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Climate Action Africa's work is built on three pillars: <span className="font-semibold text-gray-800"> literacy</span>, <span className="font-semibold text-gray-800">advocacy</span>, and <span className="font-semibold text-gray-800">innovation</span> (executed through our <span className="font-semibold text-gray-800">CAALabs</span>) and communities. Our work seeks to educate, inspire change, and nurture innovation to safeguard and enhance the well-being and economic conditions of Africans and their communities.
              </p>
            </div>
          </div>

       
   {/* Right Section - Climate Literacy and Advocacy */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-1">
            {/* Image placeholder */}
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces"
                alt="Students in classroom"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-green-600 mb-6">●	Residential support</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              We are passionate advocates and educators committed to educating and empowering Africans on climate change and innovative solutions.
            </p>
            
            <button className="bg-green-600 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>

          {/* Right Section - Climate Literacy and Advocacy */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-1">
            {/* Image placeholder */}
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces"
                alt="Students in classroom"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-green-600 mb-6">●	Residential support</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              We are passionate advocates and educators committed to educating and empowering Africans on climate change and innovative solutions.
            </p>
            
            <button className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default Vision;