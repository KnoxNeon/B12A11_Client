import React from 'react';
import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-sky-900 to-black text-white">
     

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src='../logo.png'className='h-16 w-16' alt="" />
              <h3 className="text-3xl font-bold">Hemio</h3>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-xs">
              Connecting donors with those in need. Together, we save lives — one drop at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-red-700 rounded-full hover:bg-red-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-3 bg-red-700 rounded-full hover:bg-red-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 bg-red-700 rounded-full hover:bg-red-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-red-700 rounded-full hover:bg-red-600 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-300">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-red-300 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-red-300 transition">
                  Search Donors
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-red-300 transition">
                  Become a Donor
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-300 transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-300">Resources</h4>
            <ul className="space-y-4">
              <li>
                <Link to="https://www.redcrossblood.org/donate-blood/blood-types.html" className="hover:text-red-300 transition">
                  Blood Types Guide
                </Link>
              </li>
              <li>
                <Link to="https://www.redcrossblood.org/donate-blood/blood-donation-process/donation-process-overview.html" className="hover:text-red-300 transition">
                  Donation Process
                </Link>
              </li>
              <li>
                <Link to="https://www.healthline.com/health/benefits-of-donating-blood" className="hover:text-red-300 transition">
                  Health Benefits
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
            <h4 className="text-xl font-semibold mb-6 text-red-300">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-red-300" />
                <div>
                  <p className="font-medium">Emergency Hotline</p>
                  <p className="text-lg">+880 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={20} className="text-red-300" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>support@hemio.org</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={20} className="text-red-300" />
                <div>
                  <p className="font-medium">Location</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-t border-red-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Hemio. All rights reserved. Saving lives together.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
