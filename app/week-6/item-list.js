"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  // Start by displaying the items in alphabetical order by name.
  const [sortBy, setSortBy] = useState("name");

  function sortByName() {
    setSortBy("name");
  }

  function sortByCategory() {
    setSortBy("category");
  }

  // Copy the array before sorting so the imported array stays unchanged.
  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort(function (firstItem, secondItem) {
      return firstItem.name.localeCompare(secondItem.name);
    });
  } else if (sortBy === "category") {
    sortedItems.sort(function (firstItem, secondItem) {
      return firstItem.category.localeCompare(secondItem.category);
    });
  }

  const buttonStyle = "rounded-lg px-4 py-2 font-semibold transition";

  const nameButtonStyle =
    sortBy === "name"
      ? "bg-emerald-400 text-slate-950"
      : "bg-slate-800 text-slate-100 hover:bg-slate-700";

  const categoryButtonStyle =
    sortBy === "category"
      ? "bg-emerald-400 text-slate-950"
      : "bg-slate-800 text-slate-100 hover:bg-slate-700";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="font-semibold text-slate-300">Sort by:</span>
        <button
          type="button"
          onClick={sortByName}
          aria-pressed={sortBy === "name"}
          className={`${buttonStyle} ${nameButtonStyle}`}
        >
          Name
        </button>
        <button
          type="button"
          onClick={sortByCategory}
          aria-pressed={sortBy === "category"}
          className={`${buttonStyle} ${categoryButtonStyle}`}
        >
          Category
        </button>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2">
        {sortedItems.map(function (item) {
          return (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          );
        })}
      </ul>
    </div>
  );
}
