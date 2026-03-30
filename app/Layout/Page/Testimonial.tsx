"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "William Jackson",
    location: "Edusity, USA",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Choosing Edusity was one of the best decisions I've ever made.",
  },
  {
    name: "Sarah Johnson",
    location: "Edusity, UK",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Amazing learning experience and supportive mentors.",
  },
  {
    name: "David Smith",
    location: "Edusity, Canada",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "I gained real-world skills and confidence.",
  },
  {
    name: "Emily Brown",
    location: "Edusity, Australia",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "A truly life-changing educational journey.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);

  // show 2 cards at a time
  const visibleCards = testimonials.slice(index, index + 2);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 2 : prev - 2
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev >= testimonials.length - 2 ? 0 : prev + 2
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">

        {visibleCards.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Top */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt=""
                className="w-14 h-14 rounded-full border-4 border-blue-600"
              />
              <div>
                <h2 className="text-blue-700 font-bold">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm">
                  {item.location}
                </p>
              </div>
            </div>

            {/* Text */}
            <p className="mt-4 text-gray-600 text-sm">
              {item.text}
            </p>
          </div>
        ))}

      </div>

      {/* Arrows */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevSlide}
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
        >
          <ChevronRight />
        </button>
      </div>

    </div>
  );
}