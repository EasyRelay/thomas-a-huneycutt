import React from 'react';
import { Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Thomas - A Huneycutt Trucking Inc</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Thomas - A Huneycutt Trucking Inc, we are dedicated to providing safe, reliable, and professional 
              freight services across the nation. With decades of experience in the trucking industry, we have built 
              our reputation on trust, excellence, and unwavering commitment to our clients and drivers.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our mission is to connect businesses with dependable transportation solutions while creating 
              opportunities for professional drivers to build successful careers. We believe in treating our 
              drivers as family and our clients as partners.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Excellence in Service</h4>
                <p className="text-gray-600">Committed to delivering exceptional results</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Professional truck driver" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-2xl font-bold">18+</div>
                <div className="text-sm">Year Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;