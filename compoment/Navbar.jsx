import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";



const Navbar = () => {
    return (

 <nav className="w-full p-4 nav ">
    <div className="flex gap-3  ">
        <p className=""><FaShoppingCart className="mt-1 text-2xl"/></p>
        <h1 className="text-2xl">Shopping</h1>
         <div className="flex justify-center items-center w-full">
          <input type="text " placeholder="Search" className="border-none " />
          <button>Search</button>
              </div>
              <ul className="flex gap-8 cursor-pointer">
                <li>Home</li>
                 <li>About</li>
                  <li>Contact</li>
                   <li>Login</li>
              </ul>
          

        
    </div>
  

 </nav>

    );
};

export default Navbar;
