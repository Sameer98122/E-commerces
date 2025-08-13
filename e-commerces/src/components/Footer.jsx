import React from 'react';
import { Leaf, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="font-bold text-2xl">SoilBoy</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for premium quality soil, compost, and gardening supplies. 
              Growing healthy plants starts with healthy soil.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="/faqs" className="text-gray-300 hover:text-green-500 transition-colors">FAQs</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition-colors">Premium Soil</a></li>
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition-colors">Organic Compost</a></li>
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition-colors">Specialty Mixes</a></li>
              <li><a href="/" className="text-gray-300 hover:text-green-500 transition-colors">Garden Supplies</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Garden Street, Green Valley, SG 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">+65 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">info@soilboy.sg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SoilBoy Singapore. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;