import React from "react";

const Program = () => {
  return (
    <div className="bg-white text-black relative items-center text-center  ">
      <div className=" justify-center items-center max-w-7xl mx-auto pt-8 w-auto">
        <h1 className="text-lg md:text-lg lg:text-sm text-blue-600 font-bold m-5 mb-2 ">
          OUR PROGRAM
        </h1>
        <b className="text-2xl md:text-3xl font-bold m-5">What We Offer </b>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto pb-5 ">
          <div className="relative group overflow-hidden  rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773925629/program-1-DA_EvTPy_t1cwte.png"
              className="w-full animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>

          <div  className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773925681/program-3-C0g4YULi_dfuy98.png"
              className="w-full animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>

          <div  className="relative group overflow-hidden rounded-2xl">
            <img
              src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773925702/program-2-DRqwF0EM_khniut.png"
              className="w-full animate-fadeIn delay-100 rounded-2xl hover:bg-blue-900/40"
              alt=""
            />
              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
