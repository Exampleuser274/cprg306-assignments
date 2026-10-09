"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <div className="p-4 bg-white rounded max-w-lg">
      <h2 className="text-2xl font-bold mb-4 text-black text-center">
        Quantity
      </h2>

      <div className="flex justify-center">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>

        <p className="text-xl font-bold text-black px-4">
          {quantity}
        </p>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}