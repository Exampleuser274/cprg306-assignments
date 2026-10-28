"use client";

import { useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";


export default function Page() {
  // Page owns the items so the form and list share the same data.
  const [items, setItems] = useState(itemsData);

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
            Week 7
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Shopping List
          </h1>
          <p className="mt-3 text-slate-400">
            Add shopping items and sort your list by name or category.
          </p>
        </div>

        <div className="mb-8">
          <NewItem onAddItem={handleAddItem} />
        </div>
        <ItemList items={items} />
      </section>
    </main>
  );
}
