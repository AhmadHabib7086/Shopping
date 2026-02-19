import React from "react";
import image from "../assets/1bag.png";

const Hero = () => {
  return (
    <section className="w-full min-h-[90vh] flex items-center bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Fresh Groceries Delivered To Your Door
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Shop from a wide range of fresh products and get them delivered instantly.
          </p>

          <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition duration-300">
           <a href="/item"> Shop Now</a>
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={image}
            alt="Hero"
            className="w-72 sm:w-96 md:w-full max-w-md animate-float drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
