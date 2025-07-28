import { useEffect, useLayoutEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import PolicyModal from './components/PolicyModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [policyModalType, setPolicyModalType] = useState<"privacy" | "terms" | "cookies" | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (policyModalType) {
      window.location.hash = policyModalType;
    } else if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [policyModalType]);

  useLayoutEffect(() => {
    const hash = window.location.hash.replace('#', '') as "privacy" | "terms" | "cookies";
    if (['privacy', 'terms', 'cookies'].includes(hash)) {
      setPolicyModalType(hash);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as "privacy" | "terms" | "cookies";
      if (['privacy', 'terms', 'cookies'].includes(hash)) {
        setPolicyModalType(hash);
      } else {
        setPolicyModalType(null);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <HomePage
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        setCurrentPage={(page) => setPolicyModalType(page as any)}
      />
      {policyModalType && (
        <PolicyModal
          open={!!policyModalType}
          type={policyModalType}
          onClose={() => {
            setPolicyModalType(null);
            window.history.pushState(null, '', window.location.pathname); // hash ni tozalash
          }}
        />
      )}
    </>
  );
}

export default App;
