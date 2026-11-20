"use client";

import { useState } from "react";

function NewItem () {
    const [quantity, setQuantity] = useState(1);
    
    const increment = () => {
      if (quantity < 20) {
        setQuantity(quantity + 1);
      };
    };

    const decrement = () => {
      if(quantity > 1) {
        setQuantity(quantity - 1);
      }
      else setQuantity(quantity);
    };
    

  return (
    
    <div className="flex items-center justify-center space-x-3 m-4 bg-white p-2 rounded-lg w-fit mx-auto ">
        
      <p className=" flex items-center justify-center w-10 h-10 text-xl font-bold text-gray-800 border border-gray-800 rounded-xl ">
      {quantity}
      </p>
        
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="w-10 h-10 bg-green-800 text-gray-200 font-semibold rounded-md transition-colors duration-200 hover:bg-green-800 focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
        -
      </button>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="w-10 h-10 bg-green-800 text-gray-200 font-semibold rounded-md transition-colors duration-200 hover:bg-green-800 focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        >
        +
      </button>

    </div> 
  );
};


export default NewItem