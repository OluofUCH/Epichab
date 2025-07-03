"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Wifi } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images that will rotate
  const backgroundImages = [
  "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces",
   "/images/cac.jpg"
  ];

  // Rotate images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Transition */}
      <div 
        className="absolute hero-gradient inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          // backgroundImage: `url("https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces")`,
          // backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0,0,0,0.4)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute  inset-0 " /> 
      
      {/* Mobile phone mockup overlay */}
      <div className="hidden absolute right-8 top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-48 h-96 bg-black rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-gray-900 rounded-2xl relative overflow-hidden">
            {/* Phone screen content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-gray-800 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-600 rounded w-20 mx-auto"></div>
                    <div className="h-2 bg-gray-600 rounded w-16 mx-auto"></div>
                    <div className="h-2 bg-gray-600 rounded w-24 mx-auto"></div>
                  </div>
                  <div className="mt-4 flex justify-center space-x-1">
                    <div className="w-8 h-6 bg-gray-600 rounded"></div>
                    <div className="w-8 h-6 bg-gray-600 rounded"></div>
                    <div className="w-8 h-6 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20">
      

        {/* Hero Section */}
        <div className="px-8 py-16 sm:py-32 max-w-4xl">
          <h1 className="text-white text-6xl font-bold leading-tight p-6 mb-6">
            Epic Hub Solutions 
          </h1>
          <p className="text-white text-xl leading-relaxed max-w-2xl">
            Discover how Climate Action Africa is making a difference through innovative projects, 
            all aimed at building a more resilient and sustainable Africa.
          </p>
        </div>
      </div>

      {/* Mobile Navigation Menu (hidden by default) */}
     
    </div>
  );
};

export default HeroSection;