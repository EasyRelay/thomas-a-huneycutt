import { ArrowLeft } from 'lucide-react';

interface PolicyPageProps {
  setPage: (page: string) => void;
  onBack: () => void;
}

const CookiesPolicy: React.FC<PolicyPageProps> = ({ onBack }) => {
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
              Cookie Policy
            </h1>

            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg mb-8">
                This Cookie Policy explains how <strong className="text-gray-900">THOMAS A HUNEYCUTT</strong> (“we,” “our,” or “us”) uses cookies and similar technologies when you visit our website or use our services, including tools integrated with third-party platforms such as RingCentral.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a website. They help improve your experience by remembering preferences, enabling functionality, and providing analytical insights.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">2. Types of Cookies We Use</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li><strong>Essential Cookies:</strong> Necessary for core functionality like authentication and security.</li>
                <li><strong>Functional Cookies:</strong> Save your preferences such as region or language.</li>
                <li><strong>Analytics Cookies:</strong> Track anonymous usage data for optimization.</li>
                <li><strong>RingCentral Integration:</strong> Used by RingCentral for communication features.</li>
                <li><strong>Third-Party Cookies:</strong> Set by services like Google Maps or reCAPTCHA.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">3. Why We Use Cookies</h2>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Ensure the website works properly</li>
                <li>Customize the user experience</li>
                <li>Track and improve performance</li>
                <li>Support integrations like RingCentral</li>
                <li>Enhance security and detect fraud</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">4. How to Manage Cookies</h2>
              <p>
                Most browsers allow you to manage cookies. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>View saved cookies</li>
                <li>Delete selected or all cookies</li>
                <li>Block cookies from specific websites</li>
              </ul>
              <p>Popular browser guides:</p>
              <ul className="list-disc pl-6 space-y-2 marker:text-blue-600">
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Edge</li>
              </ul>
              <p>Note: Disabling essential cookies may impact key features of the site.</p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">5. Updates to This Policy</h2>
              <p>
                We may revise this Cookie Policy periodically. Updates will be posted here with the latest date. Continued use implies acceptance.
              </p>

              <h2 className="text-2xl font-semibold text-blue-800 mt-12 mb-4">6. Contact Us</h2>
              <p>If you have any questions or concerns, please reach out:</p>

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

export default CookiesPolicy;
