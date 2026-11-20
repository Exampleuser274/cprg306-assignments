"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useUserAuth } from '../_utils/auth-context';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import initialItems from './items.json'; 

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(initialItems);
  const [selectedItemName, setSelectedItemName] = useState("");

  // If the user is not logged in, do not render the shopping list
  if (!user) {
    return (
      <main className="p-6 bg-green-800 min-h-screen flex flex-col items-center justify-center text-white">
        <p className="text-xl mb-4">You must be signed in to view your shopping list.</p>
        <Link 
          href="/week-9" 
          className="px-4 py-2 bg-gray-400 text-green-800 rounded hover:bg-white transition font-medium"
        >
          Go to Sign In Page
        </Link>
      </main>
    );
  }

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    let cleanedName = item.name.split(',')[0];
    cleanedName = cleanedName.replace(/\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu, '');
    cleanedName = cleanedName.trim();
    
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6 bg-green-800 min-h-screen">
      <div className="max-w-6xl mx-auto mb-4">
        <Link 
          href="/week-9" 
          className="text-white hover:underline font-medium inline-flex items-center"
        >
          &larr; Back to Home
        </Link>
      </div>

      <div className="flex max-w-6xl gap-30 mx-auto">
        <div className="flex-1 mr-10">
          <h1 className="text-4xl font-bold text-center mt-4 mb-6 text-white">Shopping List</h1>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect}/>
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}