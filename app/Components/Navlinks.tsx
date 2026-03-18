import React from "react";
import Link from "next/link";

const Navlinks = () => {
  return (
    <div>
      <div>
        <nav className="flex items-center justify-between p-4">
          {/* Nav Links - hidden on mobile, visible from medium screens (md) and up */}
          <div>
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773770894/logo-DUdXW4nF_tb0ryk.png"
              width={200}
              alt=""
            />
          </div>

          <ul className="hidden md:flex  items-center space-x-6 gap-3 ">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>

            <li>
              <Link href="/program" className="hover:text-blue-500">
                Program
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/campus" className="hover:text-blue-500">
                Campus
              </Link>
            </li>
            <li>
              <Link href="/testiminial" className="hover:text-blue-500">
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="px-4 py-2 bg-white text-black p-6 rounded-2xl hover:bg-blue-600/75 hover:text-white transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navlinks;
