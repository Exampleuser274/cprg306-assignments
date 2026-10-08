"use client";

import { useState } from "react";

export default function NewItem() {
  // React remembers these values between renders.
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

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

  function handleSubmit(event) {
    // Keep the browser from navigating away when the form submits.
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);
    alert(`Item: ${item.name}\nQuantity: ${item.quantity}\nCategory: ${item.category}`);

    // Updating state also resets the values displayed by the form.
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-6 rounded-xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
    >
      <div>
        <label htmlFor="name" className="mb-2 block font-semibold">
          Item name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
          placeholder="Enter an item name"
          className="w-full rounded border border-slate-400 p-2"
        />
      </div>

      <div>
        <h2 className="mb-2 font-semibold">Quantity</h2>
        <div className="flex items-center gap-6">
          {/* These buttons adjust quantity without submitting the form. */}
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="h-10 w-10 rounded bg-teal-700 text-xl text-white hover:bg-teal-800 disabled:bg-slate-300 disabled:text-slate-600"
          >
            -
          </button>
          <output aria-label="Current quantity" aria-live="polite" className="min-w-8 text-center text-2xl font-bold">
            {quantity}
          </output>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            aria-label="Increase quantity"
            className="h-10 w-10 rounded bg-teal-700 text-xl text-white hover:bg-teal-800 disabled:bg-slate-300 disabled:text-slate-600"
          >
            +
          </button>
        </div>
        <p className="mt-2 text-sm text-slate-600">Choose 1 to 20 items.</p>
      </div>

      <div>
        <label htmlFor="category" className="mb-2 block font-semibold">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="w-full rounded border border-slate-400 bg-white p-2"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded bg-teal-700 p-3 font-semibold text-white hover:bg-teal-800"
      >
        Add item
      </button>
    </form>
  );
}
