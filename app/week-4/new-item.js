"use client";

import { useState } from "react";

export default function NewItem() {
  // React remembers this value between renders. The starting quantity is 1.
  const [quantity, setQuantity] = useState(1);

  function increment() {
    // Calculate the next state from the latest quantity and enforce the limit.
    setQuantity((currentQuantity) => {
      if (currentQuantity < 20) {
        return currentQuantity + 1;
      }
      return currentQuantity;
    });
  }

  function decrement() {
    setQuantity((currentQuantity) => {
      if (currentQuantity > 1) {
        return currentQuantity - 1;
      }
      return currentQuantity;
    });
  }

  return (
    <section aria-labelledby="quantity-heading" className="max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="quantity-heading" className="text-xl font-bold">Quantity</h2>
        <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">1 to 20 items</span>
      </div>
      <p id="quantity-help" className="mt-2 text-sm text-slate-500">Use the buttons to adjust the amount.</p>

      <div className="mt-8 flex items-center justify-between gap-4" aria-describedby="quantity-help">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-700 text-2xl font-bold text-white transition enabled:cursor-pointer enabled:hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
        >
          &minus;
        </button>

        <output aria-label="Current quantity" aria-live="polite" className="min-w-16 text-center text-5xl font-bold tabular-nums">
          {quantity}
        </output>

        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          aria-label="Increase quantity"
          className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-700 text-2xl font-bold text-white transition enabled:cursor-pointer enabled:hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
        >
          +
        </button>
      </div>

      <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">Minimum 1 &middot; Maximum 20</p>
    </section>
  );
}