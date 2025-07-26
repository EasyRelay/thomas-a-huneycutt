import React from 'react';
import { Zap, Shield, MapPin, Headphones } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Efficient routing and experienced drivers ensure your cargo arrives on time, every time.'
    },
    {
      icon: Shield,
      title: 'Reliable Drivers',
      description: 'Professional, safety-focused drivers with clean records and years of experience.'
    },
    {
      icon: MapPin,
      title: 'Fleet Monitoring',
      description: 'Advanced GPS tracking and monitoring systems for complete visibility and security.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and driver assistance for peace of mind.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Thomas - A Huneycutt Trucking?</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;