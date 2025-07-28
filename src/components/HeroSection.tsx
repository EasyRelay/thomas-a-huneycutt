import React from 'react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(images/types-of-trucks.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Driven by <span className="text-red-500">Excellence</span>.
          <br />
          Powered by <span className="text-red-500">Trust</span>.
        </h1>
        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Professional freight services with reliable drivers and cutting-edge fleet monitoring. 
          Your cargo, our commitment.
          <p className="text-lg text-gray-300">
                        <strong>MC:</strong> 606362 &nbsp; | &nbsp; <strong>DOT:</strong> 1288693
                    </p>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors transform hover:scale-105 shadow-lg"
          >
            Join Our Fleet
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg transition-colors"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;