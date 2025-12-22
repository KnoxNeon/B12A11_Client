import { Send } from 'lucide-react';
import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    e.target.reset();
  };

  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Connect with Us
          </h2>
          <p className="text-xl text-red-500 max-w-3xl mx-auto">
            Have questions or need help? We're here for you. Reach out anytime — every message matters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-linear-to-b from-sky-900 to-black border-4 border-black rounded-2xl shadow-xl p-8 lg:p-10">
        
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="First name & Last Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="user@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-white hover:text-black transform hover:scale-105 transition shadow-lg"
              >
                <Send />Send Message
              </button>
            </form>
          </div>

          
          <div className="flex flex-col justify-center space-y-10 lg:pl-10">
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-red-700 mb-3">
                Emergency Hotline
              </h3>
              <p className="text-3xl font-extrabold text-red-800">
                +880 123 456 789
              </p>
              <p className="text-gray-600 mt-3">
                Available 24/7 for urgent blood requests
              </p>
            </div>

            {/* Additional Info */}
            <div className="space-y-6 text-gray-700">
              <div className="flex items-center space-x-4">
                <div className="text-3xl">✉️</div>
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p>support@hemio.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="font-semibold">Office Location</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <p className="font-semibold">Support Hours</p>
                  <p>9:00 AM – 8:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;