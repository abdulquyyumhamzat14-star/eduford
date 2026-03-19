import React from "react";

const About = () => {
  return (
    <div className="relative  mx-auto text-white m-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-6xl mx-auto pb-5 p-6">
        {/* left side */}
        <div className="relative group overflow-hidden  rounded-2xl">
          <img
            src="https://res.cloudinary.com/dbmtogyef/image/upload/v1773942107/about-Bupj5-5F_bjf7dr.png"
            className="w-full animate-fadeIn delay-100  rounded-2xl hover:bg-blue-900/40"
            alt=""
          />
          {/* Blue Overlay */}
          <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </div>
        {/* right side */}
        <div className=" md:text-left text-center animate-fadeInUp delay-100 text-black p-7 m-3 ">
          <h1 className="text-blue-400/90 text-lg md:text-xl font-bold">
            ABOUT UNIVERSITY
          </h1>
          <b className="text-2xl md:text-xl font-bold pb-3">
            Nurturing Tomorrow's <br className="hidden md:block" /> Leaders
            Today
          </b>
          <p className="font-light text-sm pt-5">
            Embark on a transformative educational journey with our university's
            comprehensive education programs. Our cutting-edge curriculum is
            designed to empower students with the knowledge, skills, and
            experiences needed to excel in the dynamic field of education.
          </p>{" "}
          <br />
          <p className="font-light text-sm">
            With a focus on innovation, hands-on learning, and personalized
            mentorship, our programs prepare aspiring educators to make a
            meaningful impact in classrooms, schools, and communities.
          </p>{" "}
          <br />
          <p className="font-light text-sm">
            Whether you aspire to become a teacher, administrator, counselor, or
            educational leader, our diverse range of programs offers the perfect
            pathway to achieve your goals and unlock your full potential in
            shaping the future of education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
