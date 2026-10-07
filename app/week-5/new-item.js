"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 m-4 text-center">
      <div className="m-4">
        <label>Item Name:</label>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="p-2 m-2 bg-white text-black border border-gray-400 rounded"
        />
      </div>

      <div className="m-4">
        <p>Quantity: {quantity}</p>

        <div className="flex justify-center gap-2 mt-2">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`text-white font-bold py-2 px-4 rounded ${
              quantity === 1
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            -
          </button>

          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`text-white font-bold py-2 px-4 rounded ${
              quantity === 20
                ? "bg-gray-400"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <div className="m-4">
        <label>Category:</label>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="p-2 m-2 bg-white text-black border border-gray-400 rounded"
        >
          <option className="bg-white text-black" value="produce">
            Produce
          </option>

          <option className="bg-white text-black" value="dairy">
            Dairy
          </option>

          <option className="bg-white text-black" value="bakery">
            Bakery
          </option>

          <option className="bg-white text-black" value="meat">
            Meat
          </option>

          <option className="bg-white text-black" value="frozen foods">
            Frozen Foods
          </option>

          <option className="bg-white text-black" value="canned goods">
            Canned Goods
          </option>

          <option className="bg-white text-black" value="dry goods">
            Dry Goods
          </option>

          <option className="bg-white text-black" value="beverages">
            Beverages
          </option>

          <option className="bg-white text-black" value="snacks">
            Snacks
          </option>

          <option className="bg-white text-black" value="household">
            Household
          </option>

          <option className="bg-white text-black" value="other">
            Other
          </option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Item
      </button>
    </form>
  );
}