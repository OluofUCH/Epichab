"use client";

import { useState } from "react";
const Section2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const packages = [
    {
      id: 1,
      title: "Family Supports Program",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces",
      bgColor: "bg-gray-700"
    },
    {
      id: 2,
      title: "Supported Living Program",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces",
      bgColor: "bg-gray-800"
    },
    {
      id: 3,
      title: "Individualized Support Planning (ISP/PCISP)",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces",
      bgColor: "bg-gray-700"
    },
    {
      id: 4,
      title: "Employment and Career Support",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop&crop=faces",
      bgColor: "bg-gray-800"
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white min-h-[70dvh] py-16 px-4">
      <div className="max-w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="bg-amber-600 text-black px-6 py-2 rounded-full text-sm font-medium">
                What we offer
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl text-White md:text-5xl lg:text-6xl font-light leading-tight">
                Healthcare Programs
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                Take a glimpse of the erinum of our healthcare Programs
              </p>
            </div>

            {/* Learn More Button */}
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
              Learn More
            </button>
          </div>

          {/* Right Cards Section */}
          <div className="relative w-full  overflow-x-scroll">
            {/* Cards Container */}
            <div className="flex gap-4 w-[200dvh]">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.id}
                  className="relative rounded-2xl overflow-hidden  transition-all w-[80dvw] min-h-[50dvh] sm:w-1/2 duration-300"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:  `url(${pkg.image})`
                    }}
                  >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 bg-opacity-40"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                        <h3 className="text-black font-medium text-lg">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;