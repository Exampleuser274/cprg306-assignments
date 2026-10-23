"use client";

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import initialItems from './items.json'; 

function Page() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-6 bg-green-800 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Shopping List</h1>
      <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}

export default Page;