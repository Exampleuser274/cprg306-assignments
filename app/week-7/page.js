"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // Keep the shopping list state here so both child components can use it.
  const [items, setItems] = useState(itemsData);

  // Add the new item by making a new array instead of changing the old state.
  const handleAddItem = (item) => {
    setItems((previousItems) => [...previousItems, item]);
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">
          Shopping List
        </h1>

        {/* The form sends new items up to Page through onAddItem. */}
        <NewItem onAddItem={handleAddItem} />

        {/* The list receives the current items through props. */}
        <ItemList items={items} />
      </div>
    </main>
  );
}
