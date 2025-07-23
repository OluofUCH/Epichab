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
             Epichab Solution LLC is a person-centered service provider committed to supporting individuals with developmental disabilities in living lives of dignity, independence, and purpose. We believe that individuals and their families should be the driving force behind the services they receive, empowered to make decisions, pursue meaningful goals, and enjoy full inclusion in community life.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Through a flexible and responsive approach rooted in the HCBS Final Rule, we provide residential support, behavioural and medical coordination, community engagement, and comprehensive rights protections. Every service is shaped around individual preferences, with emphasis on personal freedom, privacy, and continuous growth.
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
                <h3 className="text-2xl font-bold text-gray-800">Respect</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
              : We uphold each person’s dignity, voice, and right to be heard.
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
                <h3 className="text-2xl font-biold text-gray-800">Independence </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
               Our services are built around promoting autonomy and self-direction.
  </p>
            </div>

            {/* Trust and Loyalty */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Heart className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Integrity</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
               We follow transparent, ethical practices in everything we do.
  </p>
            </div>

            {/* Safety */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <Shield className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Safety & Protection</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We enforce zero tolerance for abuse, neglect, or exploitation and ensure safeguards are in place</p>
            </div>

            {/* Regional Integration */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <MapPin className="text-blue-500 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Compassion </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
               Every action is guided by empathy and the unique needs of each individual.
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
            To empower individuals by honouring their choices, protecting their rights, and providing compassionate, person-centered services that foster independence and self-determined living.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;