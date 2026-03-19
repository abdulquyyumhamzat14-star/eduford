import Navlinks from "@/app/Components/Navlinks";
import React from "react";
import { MoveRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-40"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dbmtogyef/image/upload/v1773772778/hero-wMB5D_Q0_jswshs.png')",
        }}
      ></div>

      {/* Blue Overlay */}
      <div className=" absolute inset-0 bg-blue-900/40"></div>

      {/* Content */}
      <div className="relative min-h-screen text-white flex flex-col">
        {/* Navbar */}
        <div className="max-w-7xl w-full mx-auto px-6 py-6">
          <Navlinks />
        </div>

        {/* Hero Section */}
        <div className="flex flex-1 items-center justify-center text-center px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold animate-fadeUp leading-tight">
              We Ensure better education <br className="hidden md:block" />
              for a better world
            </h1>

            <p className="mt-6 text-sm md:text-lg lg:text-xl animate-fadeUp font-light">
              Our cutting-edge curriculum is designed to empower students with
              the knowledge, skills, and experiences needed to excel in the
              dynamic field of education
            </p>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button className="flex animate-fadeUp items-center gap-3 bg-white text-black rounded-full px-6 py-3 font-medium hover:bg-gray-200 transition">
                Explore More <MoveRight className="" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
