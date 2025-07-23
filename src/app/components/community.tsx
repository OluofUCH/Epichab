export default function CommunitiesSection() {
  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <div className="relative w-full h-80 overflow-hidden">
        <div className="absolute inset-0 hero-gradient">
          {/* Simulated hands joining together image */}
          <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
            <div className="flex space-x-2">
              {/* Simulated hands - represented as overlapping circles */}
              <div className="w-16 h-16 bg-yellow-200 rounded-full opacity-80 transform rotate-12"></div>
              <div className="w-16 h-16 bg-orange-200 rounded-full opacity-80 transform -rotate-12 -ml-8"></div>
              <div className="w-16 h-16 bg-pink-200 rounded-full opacity-80 transform rotate-6 -ml-8"></div>
              <div className="w-16 h-16 bg-blue-200 rounded-full opacity-80 transform -rotate-6 -ml-8"></div>
              <div className="w-16 h-16 bg-purple-200 rounded-full opacity-80 transform rotate-12 -ml-8"></div>
            </div>
          </div>
        </div>
        
        
      </div>

      {/* Content Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-8">
            Communities
          </h2>
          
          {/* Description Text */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-5xl mx-auto">
           We believe in full community inclusion. Individuals are supported to participate in activities they enjoy, from shopping trips and movie nights to local events and social gatherings. Our staff assist with planning weekly outings based on personal preferences, and we make every effort to facilitate community engagement that is age-appropriate, respectful, and empowering. Individuals are never limited to childlike options or routines that do not reflect their interests or maturity.  </p>
        </div>
      </div>
    </div>
  );
}