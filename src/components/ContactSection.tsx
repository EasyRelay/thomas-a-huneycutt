import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // const fromBot = await fetch("https://api.telegram.org/bot8191814541:AAEMfQ4ZpKp7l0q4Mte6SS-vuWYiHPs52Es/getUpdates");
      // console.log(fromBot);

      let data;
      if (phone) {
        data = "Firstname: " + firstName + "\n" + "Lastname: " + lastName + "\n" + "Phone: " + phone + "\n" + "Email: " + email;
      } else {
        data = "Firstname: " + firstName + "\n" + "Lastname: " + lastName + "\n" + "Email: " + email;
      }

      const res = await fetch('https://eos7fwsf6cjznwg.m.pipedream.net', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      });

      if (!res.ok) throw new Error('Network response was not ok');
      setStatus('success');
      setFirstName('');
      setLastName('');
      setPhone('');
      setEmail('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Ready to partner with us or join our fleet? Contact us today!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Contact Info */}
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <a href="tel:(330)474-3006">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                </a>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">(330) 474-3006</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <a href="mailto:info@thomasohio.com">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                </a>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@thomasohio.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <a
                  href="https://www.google.com/maps/place/2425+Medina+Rd+%23117,+Medina,+OH+44256"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                </a>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">
                    2425 Medina Road STE <br />117 Medina, OH 44256
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Send message */}
          <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Us Your Details</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">First Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Last Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>
            </form>

            {(status === 'success' || status === 'error') && (
              <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">
                    {status === 'success' ? 'Thank You!' : 'Oops!'}
                  </h4>
                  <p className="text-gray-600 mb-6">
                    {status === 'success'
                      ? 'Your details have been sent successfully.'
                      : 'There was an error sending your details. Please try again.'}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-5 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
