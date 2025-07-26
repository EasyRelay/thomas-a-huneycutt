import React from 'react';
import { Truck, Target, Users, Shield } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Truck,
      title: 'Long Haul Trucking',
      description: 'Coast-to-coast freight delivery with experienced drivers and modern equipment for safe, timely transport.',
      features: ['48-state coverage', 'Real-time tracking', 'Temperature-controlled options']
    },
    {
      icon: Target,
      title: 'Logistics Solutions',
      description: 'Complete supply chain management and logistics coordination to streamline your operations.',
      features: ['Route optimization', 'Load planning', 'Warehouse coordination']
    },
    {
      icon: Users,
      title: 'Owner Operator Opportunities',
      description: 'Join our network as an independent contractor with competitive rates and steady freight.',
      features: ['High-paying loads', 'Flexible scheduling', 'Fuel card programs']
    },
    {
      icon: Shield,
      title: 'Freight Partnerships',
      description: 'Strategic partnerships with reliable carriers to expand capacity and service coverage.',
      features: ['Vetted carrier network', 'Capacity solutions', 'Quality assurance']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to meet your logistics needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100 group hover:border-red-200">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <IconComponent className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;