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
    <ul>
      {items.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}