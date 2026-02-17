import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <nav className="w-full nav shadow-md fixed top-0 left-0   z-50 md:auto ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <FaShoppingCart className="text-2xl text-amber-600" />
          <h1 className="text-2xl font-semibold">Shopping</h1>
        </div>

        {/* Search */}
        <div className="flex w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-black-300 rounded-l-lg focus:outline-none"
          />
          <button className="bg-amber-600 text-white px-4 py-2 rounded-r-lg "> 
            <IoMdSearch />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col md:flex-row gap-3 md:gap-6 font-medium text-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/item">Items</Link>
        </ul>

        {/* Login Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full md:w-auto">
          Login
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
