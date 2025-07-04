import React from 'react';

export default function Move() {
  return (
    <div className="relative w-full h-2/3 sm-1/2 overflow-hidden">
      {/* Background collage grid */}
      <div className="absolute inset-0 grid grid-cols-4 gap-0">
        {/* Left column - Woman with red braids */}
        <div className="relative col-span-1 h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjNjZCQjZBIi8+CjxyZWN0IHg9IjEwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzM0NDEzQiIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjUwIiBmaWxsPSIjRkVEQ0JBIi8+CjxyZWN0IHg9IjE1MCIgeT0iMTMwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjREM0NDQ0Ii8+CjxyZWN0IHg9IjEyMCIgeT0iMzAwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzNEQUNGOCIvPgo8L3N2Zz4K')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-800 rounded-full"></div>
                </div>
                <div className="w-20 h-8 bg-red-500 mx-auto mb-8 rounded"></div>
                <div className="w-24 h-16 bg-white mx-auto mb-4 rounded"></div>
                <div className="w-32 h-20 bg-blue-400 mx-auto rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second column - Woman with natural hair */}
        <div className="relative col-span-1 h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjNjZCQjZBIi8+CjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIxNTAiIHJ4PSI4MCIgcnk9IjEwMCIgZmlsbD0iIzNEMkMxQyIvPgo8Y2lyY2xlIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjQwIiBmaWxsPSIjRkVEQ0JBIi8+CjxyZWN0IHg9IjEzMCIgeT0iMjQwIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzk5RjNGNCIvPgo8L3N2Zz4K')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-24 bg-amber-900 rounded-full mx-auto mb-4 relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-amber-800 rounded-full transform scale-90"></div>
                </div>
                <div className="w-12 h-12 bg-amber-200 rounded-full mx-auto mb-6"></div>
                <div className="w-28 h-40 bg-cyan-200 mx-auto rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Third column - Hands and main content */}
        <div className="relative col-span-1 h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjREQ5Q0UyIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiNGRURDQkEiLz4KPC9zdmc+')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 p-8">
                {[...Array(15)].map((_, i) => (
                  <div key={i} className="w-8 h-12 bg-amber-600 rounded-full transform rotate-12 shadow-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fourth column - Aerial view */}
        <div className="relative col-span-1 h-full">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDQwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjNDVBNEEzIi8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiM2NkJCNkEiLz4KPHJlY3QgeD0iMTAwIiB5PSIxMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRkVEQ0JBIi8+CjxyZWN0IHg9IjEyMCIgeT0iMTUwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI0VGNDQ0NCIvPgo8L3N2Zz4K')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-green-400 to-green-600 opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="w-16 h-16 bg-amber-200 rounded"></div>
                <div className="w-16 h-16 bg-green-600 rounded"></div>
                <div className="w-16 h-16 bg-red-500 rounded"></div>
                <div className="w-16 h-16 bg-blue-400 rounded"></div>
                <div className="w-16 h-16 bg-yellow-400 rounded"></div>
                <div className="w-16 h-16 bg-purple-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>

      {/* Main content overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center max-w-2xl px-8">
          {/* Logo/Brand section */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <div className="text-left">
                <div className="text-teal-500 font-bold text-xl">We believe</div>
                <div className="text-gray-400 font-light text-lg">in Action</div>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-white text-5xl font-bold mb-8 leading-tight">
            Epic Hab Solutions (F4CA)
          </h1>

          {/* CTA Button */}
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
            Discover More
          </button>
        </div>
      </div>

      {/* Bottom navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
          <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}