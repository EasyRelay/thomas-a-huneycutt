import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

interface HomePageProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  setCurrentPage: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  scrollToSection, 
  setCurrentPage 
}) => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer 
        scrollToSection={scrollToSection}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default HomePage;