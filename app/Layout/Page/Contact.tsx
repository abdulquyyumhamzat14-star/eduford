"use client";
import React from "react";
import { useState } from "react";

const initValues = {
  username: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [values, setValues] = useState(initValues);

  const handleChange = ({ target }: any) => {
    setValues((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    }).then((res) => {
      if (!res.ok) throw new Error("failed to send message");
      return res.json();
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl text-blue-600 font-light mb-4 text-center">
        Contact Us
      </h2>
   

      <div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          {/* Username */}
          <input
            onChange={handleChange}
            id="username"
            name="username"
            type="text"
            placeholder="janesmith"
            className="border p-3 rounded-lg"
          />

          {/* Email */}
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="you@gmail.com"
            className="border p-3 rounded-lg"
          />

          {/* Message */}
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            placeholder="Write your message..."
            className="border p-3 rounded-lg h-32"
          ></textarea>

          {/* Button */}
          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
