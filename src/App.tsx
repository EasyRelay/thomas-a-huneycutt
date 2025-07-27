import { useState } from 'react';
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
          onClose={() => setPolicyModalType(null)}
        />
      )}
    </>
  );
}

export default App;