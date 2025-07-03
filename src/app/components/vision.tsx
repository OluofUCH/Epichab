import React from 'react';

const Vision = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:pt-0">
      <div className="max-w-7xl mx-auto">
        {/* Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Section - Our Work */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:col-span-1">
            <div className="border-l-4 border-teal-500 pl-4 mb-6">
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
            
            <h2 className="text-3xl font-bold text-teal-600 mb-6">●	Residential support</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              We are passionate advocates and educators committed to educating and empowering Africans on climate change and innovative solutions.
            </p>
            
            <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
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
            
            <h2 className="text-3xl font-bold text-teal-600 mb-6">●	Residential support</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              We are passionate advocates and educators committed to educating and empowering Africans on climate change and innovative solutions.
            </p>
            
            <button className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6">
        <button className="bg-teal-600 hover:bg-teal-700 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Vision;