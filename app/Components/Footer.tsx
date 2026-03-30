import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-black pt-10">

      {/* Divider */}
      <div className="border-t border-gray-300 max-w-6xl mx-auto mb-6"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-6 
      flex flex-col md:flex-row items-center justify-between gap-4 
      text-center md:text-left animate-fadeUp">

        {/* Left */}
        <p className="text-sm">
          &copy; 2026 Edusity. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          <a href="#" className="text-sm hover:text-blue-600 transition">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-blue-600 transition">
            Terms of Service
          </a>
        </div>

      </div>
    </div>
  );
};

export default Footer;