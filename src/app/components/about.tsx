import React from 'react';
import Link from "next/link";

export default function Aboutus() {
  return (
    <div className=" bg-gray-50 pt-[2rem]">
    
 <div className="flex mx-4 w-fit justify-start items-center px-4 py-[8px]  rounded-[8px] border border-[#E4E4E7] bg-[#F4FFFF] shadow-[0px_1px_3px_0px_rgba(25,33,61,0.10)]">
            <h2 className="sm:text-sm px-4 sm:px-6 text-[14px] font-medium text-gray-600 uppercase tracking-wide">
        ABOUT US
        </h2>
            </div>
      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-0 sm:pb-[1.62rem]">
        <div className=" rounded-lg  p-8 lg:p-12">
          <div className="max-w-4xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Welcome Message
            </h1>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
Welcome to Epichab Solution LLC, where we believe every individual has the right to lead a self-directed life with choice, respect, and independence.

              </p>
              
              <p className="text-lg">
        Our approach is rooted in person-centered values, ensuring that individuals, together with their families, shape their daily experiences, community involvement, and long-term goals. Through compassionate care, meaningful activities, and rigorous safeguards, we deliver services that foster growth, dignity, and true independence.
  </p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
              <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2">
                <span>→</span>
                <span>Read more</span>
              </Link>
            </div>
        </div>
      </main>

   
    </div>
  );
}