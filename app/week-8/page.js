"use client";

import React, { useState } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import initialItems from './items.json'; 

function Page() {
  const [items, setItems] = useState(initialItems);
  const [selectedItemName, setSelectedItemName] = useState("");

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

export default Page;