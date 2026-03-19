"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navlinks = () => {
  const [open, setOpen] = useState(false);

  // close menu when screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">

      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-between p-4 max-w-7xl mx-auto">

        {/* Logo */}
        <img
          src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773770894/logo-DUdXW4nF_tb0ryk.png"
          width={200}
          alt="logo"
        />

        {/* Links */}
        <ul className="flex items-center gap-8">
          <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link href="/program" className="hover:text-blue-500">Program</Link></li>
          <li><Link href="/about" className="hover:text-blue-500">About Us</Link></li>
          <li><Link href="/campus" className="hover:text-blue-500">Campus</Link></li>
          <li><Link href="/testimonial" className="hover:text-blue-500">Testimonials</Link></li>

          <li>
            <Link
              href="/signup"
              className="px-5 py-2 bg-white text-black rounded-2xl hover:bg-blue-600 hover:text-white transition"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center justify-between p-4">

        <img
          src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773770894/logo-DUdXW4nF_tb0ryk.png"
          width={150}
          alt="logo"
        />

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${open ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >

        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-6 p-6 text-lg font-medium">
          <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link href="/program" onClick={() => setOpen(false)}>Program</Link></li>
          <li><Link href="/about" onClick={() => setOpen(false)}>About Us</Link></li>
          <li><Link href="/campus" onClick={() => setOpen(false)}>Campus</Link></li>
          <li><Link href="/testimonial" onClick={() => setOpen(false)}>Testimonials</Link></li>

          <li>
            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-center"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navlinks;