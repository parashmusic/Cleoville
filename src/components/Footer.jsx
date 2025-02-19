import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button'; // Adjust the path as needed

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              Crafting perfect gifts for your special moments. Customize and create unique presents that tell your story.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/track-order">Track Order</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns">Returns</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: hello@giftcraft.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Gift Street</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-4">Subscribe to get special offers and gift ideas.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border rounded-md text-sm"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};