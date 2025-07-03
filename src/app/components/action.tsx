import React from 'react';

export default function Action() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/80 to-green-600/70">
        {/* Organic pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-green-500/20 to-transparent"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-green-300/10 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Leaf patterns - decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large leaf shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-green-300/15 rounded-full blur-lg"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-md"></div>
        
        {/* Small organic shapes scattered */}
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-green-300/25 rounded-full"></div>
        <div className="absolute top-3/4 left-1/2 w-10 h-10 bg-green-500/15 rounded-full"></div>
      </div>

      {/* Globe/Earth element */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 opacity-60">
        <div className="w-full h-full bg-gradient-to-br from-green-200/30 to-green-600/20 rounded-full border border-green-300/20 backdrop-blur-sm">
          {/* Continental shapes */}
          <div className="absolute top-6 left-8 w-16 h-12 bg-green-800/40 rounded-lg transform rotate-12"></div>
          <div className="absolute top-16 right-6 w-12 h-20 bg-green-700/30 rounded-2xl transform -rotate-6"></div>
          <div className="absolute bottom-8 left-12 w-20 h-8 bg-green-800/35 rounded-full transform rotate-45"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/10 to-transparent rounded-full"></div>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col justify-center items-start min-h-screen px-8 md:px-16 lg:px-24">
        {/* Logo */}
        <div className="mb-8 flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
          <div className="text-green-200 font-bold text-lg tracking-wide">
            CAAF24
            <div className="text-xs text-green-300 font-normal tracking-wider">
              CLIMATE ACTION AFRICA FORUM
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="max-w-4xl">
          <h1 className="text-white font-bold leading-tight mb-6">
            <span className="text-6xl md:text-7xl lg:text-8xl block mb-2">
              #CAAF<span className="text-yellow-400">24</span>
            </span>
            <span className="text-5xl md:text-6xl lg:text-7xl block mb-2">
              GREEN
            </span>
            <span className="text-5xl md:text-6xl lg:text-7xl block mb-2">
              ECONOMIES
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl block">
              BRIGHTER FUTURES
            </span>
          </h1>
        </div>

        {/* Call to action or additional content area */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <button className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg">
            Learn More
          </button>
          <button className="border border-green-300 text-green-200 hover:bg-green-500/20 font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
            Join the Forum
          </button>
        </div>
      </div>

      {/* Decorative elements - floating leaves */}
      <div className="absolute bottom-8 right-8 opacity-40">
        <div className="animate-pulse">
          <div className="w-6 h-6 bg-green-400 rounded-full mb-2"></div>
          <div className="w-4 h-4 bg-green-300 rounded-full ml-4 mb-2"></div>
          <div className="w-5 h-5 bg-green-500 rounded-full ml-2"></div>
        </div>
      </div>

      {/* Notification icon (bottom left) */}
      <div className="absolute bottom-8 left-8">
        <div className="w-12 h-12 bg-green-600/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30">
          <div className="w-6 h-6 border-2 border-white rounded-full relative">
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}