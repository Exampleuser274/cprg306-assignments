"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  // Keep shared state in Page so both the form and the list can use it.
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Add a new item without changing the original items array.
  const handleAddItem = (item) => {
    setItems((previousItems) => [...previousItems, item]);
  };

  // Clean the clicked item name before sending it to TheMealDB API.
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .replace(/[\p{Extended_Pictographic}\uFE0F]/gu, "")
      .trim()
      .toLowerCase();

    // Some shopping list names are plural, but the API uses singular names.
    const ingredientNames = {
      eggs: "egg",
      bananas: "banana",
      "chicken breasts": "chicken breast",
    };

    setSelectedItemName(ingredientNames[cleanedName] || cleanedName);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 text-blue-900">
          Shopping List
        </h1>
        <p className="text-gray-700 mb-6">
          Click a shopping list item to find meals you can make with it.
        </p>

        {/* Keep the shopping list on the left and meal ideas on the right. */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div className="w-full lg:w-1/2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
