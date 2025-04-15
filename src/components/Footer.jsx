import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { 
  Heart, Gift, Truck, Clock, Mail, Phone, MapPin, 
  Instagram, Facebook, Twitter, ArrowRight 
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className=" border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 font-light md:grid-cols-4 gap-12 mb-16">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Gift className="w-6 h-6 text-rose-300" />
              <span className="text-xl font-light tracking-wide text-gray-400">Cleoville</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We craft perfect gifts for life's special moments. Each piece is thoughtfully designed to tell your unique story.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-rose-300 hover:text-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-500 hover:text-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-500 hover:text-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-light mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/track-order" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Truck className="w-4 h-4" />
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Clock className="w-4 h-4" />
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <Heart className="w-4 h-4" />
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-light mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-600">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                hello@giftcraft.com
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                +1 234 567 890
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                123 Gift Street, Creative City
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-light mb-6 pb-2 border-b border-gray-200 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Newsletter
            </h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              Subscribe for exclusive offers, gift ideas, and 10% off your first order.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <Button 
                type="submit" 
                className="bg-gray-800 hover:bg-gray-700 text-white rounded-sm py-3 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} GiftCraft. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};