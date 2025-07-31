import React from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-19 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center">
                <img className="w-16 h-10 text-white" src='images/image.png' />
              </div>
              <div className="text-xl -mt-2 font-bold">
                <span className="text-red-500">Thomas</span>
                <span className="text-gray-300 text-sm block leading-none">A Huneycutt Trucking Inc</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional freight services with reliable drivers and cutting-edge fleet monitoring.
              Your trusted partner in transportation solutions.
              <br /><strong>MC:</strong> 606362
              <br /><strong>DOT:</strong> 1288693
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">(330) 474-3006</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-400">info@thomasohio.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-500 mt-1" />
                <span className="text-gray-400">2425 Medina Road STE <br />117 Medina, OH 44256</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <p>&copy; 2025 Thomas - A Huneycutt Trucking. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1">
              <FileText className="w-4 h-4" />
              <span>Privacy Policy</span>
            </Link>
            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1"
            >
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </Link>
            <Link
              to={"/cookie-policy"}
              className="text-gray-400 hover:text-red-500 transition-colors flex items-center space-x-1"
            >
              <FileText className="w-4 h-4" />
              <span>Cookie Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;