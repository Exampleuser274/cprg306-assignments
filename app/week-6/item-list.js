"use client";
import Item from "./item";
import { useState } from "react";
import items from "./items.json";
export default function ItemList() {
const [sortBy, setSortBy] = useState("name");
function setSortName() 
{
  setSortBy("name");
}
function setSortCat() 
{
  setSortBy("category");
}
const sortedItems = [...items];

if (sortBy === "name") 
  {
    sortedItems.sort(function(item1, item2) 
    {
      return item1.name.localeCompare(item2.name);
    });
  } 
else
  {
    sortedItems.sort(function (item1, item2) 
    {
      return item1.category.localeCompare(item2.category);
    });
  }

  return (
    <div>
      <div className="flex flex-wrap gap-5 mb-4">
        <button type="button" onClick={setSortName} className={`px-4 py-2 rounded-lg font-bold ${sortBy === "name" ? "bg-red-950 text-gray"  : "bg-gray-200 text-black"}`}>
          Sort by Name
        </button>

        <button type="button" onClick={setSortCat} className={`px-4 py-2 rounded-lg font-bold ${sortBy === "category" ? "bg-red-950 text-gray" : "bg-gray-200 text-black"}`}>
          Sort by Category
        </button>
      </div>
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
  </div>
  );
}