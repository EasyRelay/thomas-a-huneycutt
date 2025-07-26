import { useState } from 'react';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'privacy') {
    return (
      <div>
        <ScrollToTop />
        <PrivacyPolicy
          setPage={setCurrentPage}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div>
        <ScrollToTop />
        <TermsOfService
          setPage={setCurrentPage}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  if (currentPage === 'cookies') {
    return (
      <div>
        <ScrollToTop />
        <CookiesPolicy
          setPage={setCurrentPage}
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  return (
    <HomePage
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      scrollToSection={scrollToSection}
      setCurrentPage={setCurrentPage}
    />
  );
}

export default App;