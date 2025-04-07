import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Car Hunt</h2>
            <p className="text-gray-400 mt-2">
              Get ready to hit the road with our premium car rental service. We offer a wide range of vehicles to suit your needs, from compact cars to luxury SUVs. Experience the freedom of the open road with us! Whether you're planning a weekend getaway or a long road trip, we've got you covered. Rent your perfect car today and start your adventure!
            </p>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="text-center">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl text-balance font-semibold ">Follow Us On</h3>
            <div
              className="flex justify-center md:justify-end mt-4 space-x-6"
              aria-label="Social Media Links"
            >
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-gray-400"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-6" />

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Car Hunt. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
