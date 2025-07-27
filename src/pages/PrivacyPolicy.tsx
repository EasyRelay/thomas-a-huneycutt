import { ArrowLeft } from 'lucide-react';

interface PolicyPageProps {
  setPage: (page: string) => void;
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PolicyPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-inter">
      <main className="">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-10 border border-gray-200 shadow-md">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-10 tracking-tight">
              Privacy Policy
            </h1>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-8">
                At <strong className="text-gray-900">THOMAS A HUNEYCUTT</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services, including integrations with third-party communication platforms such as RingCentral.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">1. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Personal Identifiable Information (PII): your name, email address, phone number, and company name.</li>
                <li>Communication Data: data related to communication tools usage like RingCentral, such as call logs, messages (metadata), and user preferences.</li>
                <li>Technical Data: IP address, browser type, device info, OS, and activity logs.</li>
                <li>Usage Data: information on how you use our website or services.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Providing logistics services to you</li>
                <li>Facilitating communication using RingCentral</li>
                <li>Improving our website and customer experience</li>
                <li>Providing customer support</li>
                <li>Monitoring and analyzing usage trends</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">3. RingCentral Integration</h2>
              <p>Our service uses RingCentral’s APIs to facilitate communication. When you connect your RingCentral account, we may access and use data such as:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Your RingCentral account information</li>
                <li>Call and message metadata (not message content)</li>
                <li>Contact and directory information</li>
              </ul>
              <p>This data is not shared with third parties except as required to operate the service.</p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">4. Sharing of Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>With service providers under confidentiality agreements</li>
                <li>To comply with legal obligations or government requests</li>
                <li>In connection with a merger, acquisition, or asset sale</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">5. Data Retention</h2>
              <p>
                We retain personal data only as long as necessary to provide services and fulfill the purposes outlined in this policy.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">6. Your Data Protection Rights</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Access the personal data we hold about you</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to or restrict certain data processing</li>
                <li>Withdraw consent for data usage (where applicable)</li>
              </ul>
              <p>To exercise these rights, contact us at <strong>info@thomasohio.com</strong>.</p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">7. Security of Your Information</h2>
              <p>
                We implement industry-standard technical and organizational measures to protect your information, including encryption, secure data storage, and access controls.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of such sites.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">9. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with a revised effective date.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, contact us at:</p>

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
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
