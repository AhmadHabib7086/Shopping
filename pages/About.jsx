import React from "react";
import image from "../assets/1bag.png";

const About = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="About"
            className="w-72 sm:w-96 md:w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            About Our Store
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Welcome to FreshMart. We provide high-quality groceries and daily
            essentials delivered straight to your doorstep. Our mission is to
            make shopping easy, fast, and affordable for everyone.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We carefully select fresh products and ensure quick delivery with
            the best customer service experience. Your satisfaction is our top
            priority.
          </p>

          <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition duration-300">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
