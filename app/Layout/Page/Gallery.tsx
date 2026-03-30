import React from "react";
import { MoveRight } from "lucide-react";
const Gallery = () => {
  return (
    <div className="bg-white text-black relative items-center text-center">
      <div className="  mx-auto p-6">
        <h1 className="text-lg md:text-lg lg:text-sm text-blue-600 font-bold m-5 mb-2">
          Gallery
        </h1>
        <b className="font-bold text-2xl md:text-3xl">Campus Photos</b>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-6 max-w-7xl mx-auto pb-5">
          {/* 1st image */}
          <div className="relative group overflow-hidden  rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1774024646/gallery-1-HP2uKW94_oxvupu.png"
              className="w-[400] h-[370] animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          {/* 2nd image */}
          <div className="relative group overflow-hidden  rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1774024662/gallery-2-DYatBGZh_xnyvjf.png"
              className="w-[400] h-[370] animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          {/* 3rd image */}
          <div className="relative group overflow-hidden  rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1774024689/gallery-3-C4KpO1U2_pdriki.png"
              className="w-[400] h-[370] animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          {/* 4th image */}
          <div className="relative group overflow-hidden  rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1774024702/gallery-4-LJEJ329C_uqn7gk.png"
              className="w-[400] h-[370] animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
          {/* Button */}
          <div className="flex justify-center mt-8">
  <button className="group flex items-center gap-3 bg-blue-600 text-white rounded-full px-6 py-3 font-medium transition duration-300 hover:bg-blue-700">
    
    Explore More
    
    <MoveRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-2"
    />
    
  </button>
</div>
      </div>
    </div>
  );
};

export default Gallery;
