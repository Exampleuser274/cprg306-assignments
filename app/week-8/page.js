"use client";

import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";


export default function Page() {
  // Page owns the items so the form and list share the same data.
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(item) {
    // Keep the part before the comma, then remove emoji and extra spaces.
    const cleanName = item.name.split(",")[0]
      .replace(/[^\p{L}\p{N}\s'-]/gu, "")
      .trim()
      .toLowerCase();

    // The API uses ingredient names that can differ from shopping labels.
    const ingredientNames = {
      "chicken breasts": "chicken breast",
      "eggs": "egg",
      "bananas": "banana",
    };
    setSelectedItemName(ingredientNames[cleanName] || cleanName);
  }

  function handleAddItem(newItem) {
    // Build a new array instead of changing the existing state array.
    setItems(function (currentItems) {
      return [...currentItems, newItem];
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-12 text-slate-100 sm:px-8">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="inline-flex text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
        >
          ← Back to assignments
        </Link>

        <div className="mb-8 mt-6 border-b border-slate-800 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            Week 8
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Shopping List
          </h1>
          <p className="mt-3 text-slate-400">
            Add items, sort your list, and click an item to find meal ideas.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1">
            <div className="mb-8">
              <NewItem onAddItem={handleAddItem} />
            </div>
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <aside className="w-full lg:w-80 lg:shrink-0">
            <MealIdeas ingredient={selectedItemName} />
          </aside>
        </div>
      </section>
    </main>
  );
}
