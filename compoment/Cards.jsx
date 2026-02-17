import React, { useState } from "react";


const Cards = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-2xl p-3 font-semibold">
          Latest Collections
        </h1>
      </div>

      <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 bg-red-100">
        
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <img src="../assets/1bag.png" alt="Card" className="w-40 h-48 object-container rounded-lg" />

          <div className="text-sm flex justify-between mt-3">
            <p>Name: Bag</p>
            <p>Price: $21</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg">
              Buy
            </button>

            <div className="flex items-center gap-3 text-lg">
              <button
                onClick={() => setCount(c => (c > 0 ? c - 1 : 0))}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{count}</span>

              <button
                onClick={() => setCount(c => c + 1)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>



         <div className="bg-white rounded-2xl shadow-md p-4">
          <img src="../assets/1bag.png" alt="Card" className="w-40 h-48 object-container rounded-lg" />

          <div className="text-sm flex justify-between mt-3">
            <p>Name: Bag</p>
            <p>Price: $21</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg">
              Buy
            </button>

            <div className="flex items-center gap-3 text-lg">
              <button
                onClick={() => setCount(c => (c > 0 ? c - 1 : 0))}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{count}</span>

              <button
                onClick={() => setCount(c => c + 1)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>





         <div className="bg-white rounded-2xl shadow-md p-4">
          <img src="../assets/1bag.png" alt="Card" className="w-40 h-48 object-container rounded-lg" />

          <div className="text-sm flex justify-between mt-3">
            <p>Name: Bag</p>
            <p>Price: $21</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg">
              Buy
            </button>

            <div className="flex items-center gap-3 text-lg">
              <button
                onClick={() => setCount(c => (c > 0 ? c - 1 : 0))}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{count}</span>

              <button
                onClick={() => setCount(c => c + 1)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>





         <div className="bg-white rounded-2xl shadow-md p-4">
          <img src="../assets/1bag.png" alt="Card" className="w-40 h-48 object-container rounded-lg" />

          <div className="text-sm flex justify-between mt-3">
            <p>Name: Bag</p>
            <p>Price: $21</p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <button className="bg-amber-600 text-white px-4 py-2 rounded-lg">
              Buy
            </button>

            <div className="flex items-center gap-3 text-lg">
              <button
                onClick={() => setCount(c => (c > 0 ? c - 1 : 0))}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{count}</span>

              <button
                onClick={() => setCount(c => c + 1)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
          </div>
        </div>

      </div>


    </>
  );
};

export default Cards;
