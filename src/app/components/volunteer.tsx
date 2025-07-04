import React from 'react';

export default function Volunteer() {
  return (
    <div className="py-8 bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
          Join the{' '}
          <span className="text-green-500">Climate Action Movement</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Stay updated with our latest campaigns and initiatives to combat climate change.
        </p>
        
        {/* Primary CTA Button */}
        <div className="mb-20">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
            Become a Volunteer!
          </button>
        </div>
        
        {/* Secondary CTA with Telegram Icon */}
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-6 rounded-full text-sm transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
            <svg 
              className="w-4 h-4" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Join ClimateAction on Telegram
          </button>
        </div>
      </div>
    </div>
  );
}