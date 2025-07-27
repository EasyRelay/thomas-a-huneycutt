import { ArrowLeft } from 'lucide-react';

interface PolicyPageProps {
  setPage: (page: string) => void;
  onBack: () => void;
}

const TermsOfService: React.FC<PolicyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          {/* <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 border border-gray-200 shadow-md"> */}
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-10 tracking-tight">
              Terms of Service
            </h1>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-8">
                Welcome to <strong>THOMAS A HUNEYCUTT</strong>. By accessing our website or using our logistics and communication services—including integrations with platforms like RingCentral—you agree to the following Terms of Service. If you do not agree to these terms, please discontinue use of our services immediately.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">1. Acceptance of Terms</h2>
              <p>
                These Terms form a binding agreement between you (the user) and THOMAS A HUNEYCUTT. Use of our website or services constitutes your acceptance of these Terms and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">2. Services Overview</h2>
              <p>
                We provide logistics, freight coordination, shipment tracking, and digital communication tools. Certain services may be integrated with third-party platforms such as RingCentral. We reserve the right to modify, suspend, or discontinue any feature at any time without notice.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">3. Eligibility</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Be at least 18 years old</li>
                <li>Be legally capable of entering binding agreements</li>
                <li>Provide accurate, complete, and up-to-date information</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">4. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Do not violate laws or regulations</li>
                <li>Do not interfere with or disrupt service functionality or security</li>
                <li>Do not misuse communication features (e.g., RingCentral integration)</li>
                <li>Do not impersonate any person or submit false information</li>
              </ul>
              <p>You are responsible for maintaining the confidentiality of your account credentials.</p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">5. RingCentral Integration</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>We may access call metadata and account details (not message content)</li>
                <li>You agree to use RingCentral in compliance with their Terms of Use</li>
                <li>We use the API for voice, messaging, and routing functionalities</li>
                <li>We do not share your RingCentral data with unauthorized third parties</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">6. Intellectual Property</h2>
              <p>
                All content, branding, software, and materials on this site are the exclusive property of THOMAS A HUNEYCUTT or our partners. Reproduction without permission is prohibited.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">7. Account Suspension and Termination</h2>
              <p>
                We reserve the right to suspend or terminate accounts violating these Terms or engaging in abuse. Notifications will be sent via email or in-platform.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                Our services are provided “as is” without any warranties. We do not guarantee uninterrupted, secure, or error-free access.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">9. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>No liability for indirect or consequential damages</li>
                <li>No liability for loss of data, revenue, or third-party service failure</li>
                <li>Total liability is limited to amounts paid by you (if any)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">10. Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless THOMAS A HUNEYCUTT and its affiliates from any claims resulting from your use of our services or breach of these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of Delaware, USA. Any disputes shall be handled in the courts of the State of Ohio, USA.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">12. Modifications to These Terms</h2>
              <p>
                We may revise these Terms at any time. The latest version will be posted on our website. Continued use of our services implies acceptance.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">13. Contact Information</h2>
              <p>For any questions about these Terms of Service, please contact us at:</p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6 shadow-sm">
                <p className="mb-2 font-bold text-gray-900">THOMAS A HUNEYCUTT</p>
                <p className="mb-2">Email: info@thomasohio.com</p>
                <p className="mb-2">Phone: 330-474-3006</p>
                <p className="mb-2">Address: 2425 MEDINA ROAD STE 117, Medina, OH 44256</p>
                <p className="mb-2">Website: https://thomasohio.com</p>
              </div>

              <p className="text-sm text-gray-500 mt-12 text-center italic">
                Last Updated: 27.07.2025
              </p>
            </div>
          {/* </div> */}
        </div>
    </div>
  );
};

export default TermsOfService;
