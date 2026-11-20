"use client";

import { useState } from "react";
import Item from "./item";

// sort() uses negative, positive, or zero to decide the order of two values.
function compareText(first, second) {
  first = first.toLowerCase();
  second = second.toLowerCase();
  if (first < second) return -1;
  if (first > second) return 1;
  return 0;
}

export default function ItemList({ items }) {
  // Start with the shopping list sorted alphabetically by item name.
  const [sortBy, setSortBy] = useState("name");

  // Copy the items prop first, since sort() changes the array being sorted.
  // Category sorting also sorts names within each category.
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return compareText(a.name, b.name);
    }

    const categoryOrder = compareText(a.category, b.category);
    if (categoryOrder !== 0) {
      return categoryOrder;
    }

    return compareText(a.name, b.name);
  });

  // Optional challenge: group the category-sorted items together using reduce().
  // Since items are already sorted, matching categories appear beside each other.
  const groupedItems = sortBy === "group"
    ? sortedItems.reduce((groups, item) => {
        const lastGroup = groups[groups.length - 1];

        if (lastGroup && lastGroup.category === item.category) {
          lastGroup.items.push(item);
        } else {
          groups.push({ category: item.category, items: [item] });
        }

        return groups;
      }, [])
    : [];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg font-bold ${
            sortBy === "name"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg font-bold ${
            sortBy === "category"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Category
        </button>

        <button
          type="button"
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded-lg font-bold ${
            sortBy === "group"
              ? "bg-blue-900 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (
        <div>
          {groupedItems.map((group) => (
            <section key={group.category} className="mb-6">
              <h2 className="text-xl font-bold text-blue-900 capitalize mb-3">
                {group.category}
              </h2>
              <ul>
                {group.items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
