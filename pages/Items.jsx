import React from "react";
import image from "../assets/1bag.png";

const products = [
  { id: 1, name: "Fresh Bag", price: 21 },
  { id: 2, name: "Organic Rice", price: 15 },
  { id: 3, name: "Fresh Fruits", price: 18 },
  { id: 4, name: "Vegetable Pack", price: 12 },
  { id: 5, name: "Dairy Milk", price: 10 },
  { id: 6, name: "Healthy Snacks", price: 9 },
];

const Items = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center">
          Our Products
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={image}
                alt={item.name}
                className="w-full h-40 object-contain"
              />

              <div className="mt-3">
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-amber-600 font-bold mt-1">
                  ${item.price}
                </p>
              </div>

              <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition duration-300 text-sm">
                Add to Cart
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Items;
