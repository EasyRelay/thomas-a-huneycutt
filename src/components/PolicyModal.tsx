// components/PolicyModal.tsx
import { Dialog, DialogContent } from "./ui/dialog";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import CookiesPolicy from "../pages/CookiesPolicy";

interface PolicyModalProps {
  open: boolean;
  onClose: () => void;
  type: "privacy" | "terms" | "cookies";
}

const PolicyModal: React.FC<PolicyModalProps> = ({ open, onClose, type }) => {
  const renderContent = () => {
    switch (type) {
      case "privacy":
        return <PrivacyPolicy setPage={() => {}} onBack={onClose} />;
      case "terms":
        return <TermsOfService setPage={() => {}} onBack={onClose} />;
      case "cookies":
        return <CookiesPolicy setPage={() => {}} onBack={onClose} />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[95vh] overflow-y-auto bg-white rounded-xl p-6 shadow-lg">
        {renderContent()}
      </DialogContent>
    </Dialog>
  );
};

export default PolicyModal;
