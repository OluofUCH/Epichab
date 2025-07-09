import React from 'react';
import { MapPin, Users, Shield, Award, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80dvh] bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-600/70 flex items-center justify-center text-white">
        <div className="absolute inset-0  bg-opacity-30"></div>
        <div className="relative z-10 text-center px-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
            Who we are
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            We are committed to providing exceptional healthcare services that connect people and places across Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About EpicHab Solutions
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Born from the visionary leadership, Epic Hab solutions is a dynamic private-owned healthcare service that represents the entrepreneurial spirit and ambitious vision of NGO.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our goal is simple yet ambitious: to become the leading private-owned healthcare solution in Africa through excellence in service, innovation, and dedication to our customers.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are committed to fostering the growth of our company through strategic partnerships, while working towards establishing ourselves as a premier destination for healthcare services in Nigeria and beyond. Our commitment to excellence, safety, and customer satisfaction drives us to redefine the healthcare experience.
            </p>
          </div>
          <div className="relative">
            <div className="bg-blue-500 rounded-lg p-8 shadow-xl">
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-6 text-white">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100+</div>
                    <div className="text-sm">Daily Procedures</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-sm">Professionals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">5M+</div>
                    <div className="text-sm">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">99%</div>
                    <div className="text-sm">Safety Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto p-2 sm:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Excellence */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Award className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Excellence</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are committed to delivering exceptional service and experiences to our customers. Every interaction is an opportunity to exceed expectations.
              </p>
            </div>

            {/* Reliability */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Shield className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Reliability</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Consistency and dependability are our core strengths. We deliver on time, every time, ensuring our patisnts can rely on us for their journey.
              </p>
            </div>

            {/* Leadership */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Users className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-biold text-gray-800">Leadership</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We strive to be leaders in innovation, safety, and service in the healthcare industry. Our commitment to excellence drives us forward.
              </p>
            </div>

            {/* Trust and Loyalty */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Heart className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Trust and Loyalty</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Building lasting relationships with our customers through trust, transparency, and consistently delivering on our promises.
              </p>
            </div>

            {/* Safety */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Shield className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Safety</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Safety is our top priority. We maintain the highest safety standards and continuously invest in training and technology.
              </p>
            </div>

            {/* Regional Integration */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <MapPin className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Regional Integration</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connecting communities and regions through reliable healthcare, fostering economic growth and cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Mission Statement</h2>
          <p className="text-xl leading-relaxed">
            To connect people and places through safe, reliable, and affordable healthcare, while promoting 
            economic growth, cultural exchange, and regional integration. We are committed to being the 
            bridge that brings communities together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;