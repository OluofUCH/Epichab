import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Send 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/70 text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Logo and Social Media Section */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white opacity-20"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold">Epichub</div>
                <div className="text-lg font-semibold">
                  <span className="text-orange-400">solutions</span>
                  <span className="text-xs ml-1">africa</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 hover:bg-gray-100 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 hover:bg-gray-100 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 hover:bg-gray-100 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 hover:bg-gray-100 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 hover:bg-gray-100 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 hover:bg-gray-100 transition-colors">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <nav className="space-y-4">
              <a href="/about" className="flex items-center text-white hover:text-orange-400 transition-colors">
                About Us
                <span className="ml-2 text-orange-400">▶</span>
              </a>
              <a href="services" className="flex items-center text-white hover:text-orange-400 transition-colors">
                Services
                <span className="ml-2 text-orange-400">▶</span>
              </a>
              <a href="#" className="block text-white hover:text-orange-400 transition-colors">
                Partners
              </a>
              <a href="#" className="flex items-center text-white hover:text-orange-400 transition-colors">
                Resources
                <span className="ml-2 text-orange-400">▶</span>
              </a>
              <a href="#" className="block text-white hover:text-orange-400 transition-colors">
                Insights
              </a>
              <a href="/contact" className="block text-white hover:text-orange-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Subscribe Section */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-6">Subscribe Now</h3>
            <p className="text-white mb-6">
              Don't miss our future updates! Get Subscribed Today!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your mail here"
                className="flex-1 px-4 py-3 rounded-l-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-teal-400 hover:bg-teal-500 px-6 py-3 rounded-r-full transition-colors">
                <Send size={20} className="text-white" />
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
}