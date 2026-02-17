import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-6 mt-5">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        
        {/* Column 1 - About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Grocery App</h2>
          <p className="text-sm">
            Fresh groceries delivered to your doorstep. Quality products,
            affordable prices and fast delivery.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-amber-500 cursor-pointer">Home</li>
            <li className="hover:text-amber-500 cursor-pointer">About</li>
            <li className="hover:text-amber-500 cursor-pointer">Products</li>
            <li className="hover:text-amber-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 - Contact */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: support@grocery.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: India</li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-amber-500 transition duration-300" />
            <FaInstagram className="cursor-pointer hover:text-amber-500 transition duration-300" />
            <FaTwitter className="cursor-pointer hover:text-amber-500 transition duration-300" />
            <FaGithub className="cursor-pointer hover:text-amber-500 transition duration-300" />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Grocery App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
