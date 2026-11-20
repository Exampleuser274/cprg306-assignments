"use client";

import React, { useState } from 'react';
import Item from "./item";


function ItemList({ items = [], onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;

         });

    const groupedItems = () => {
        const groups = [...new Set(items.map(item => item.category))]
            .sort((a, b) => a.localeCompare(b));

        return groups.map((category) => {
            const groupItems = items
                .filter((item) => item.category === category)
                .sort((a, b) => a.name.localeCompare(b.name));

            return {
                category,
                items: groupItems,
            };
        });
    };

         
return (
        <div>
            
            <div className="flex items-center justify-center gap-2 mb-8 mt-8">
                <button 
                    onClick={() => setSortBy("name")}
                    className= {`flex flex-col rounded-xl p-4 ${sortBy === "name" ? "bg-active: bg-white" : "bg-inactive: bg-gray-400"}`}
                > 
                    <p className="text-green-800">Sort by <br /> Name</p>
                </button>
  
                <button 
                    onClick={() => setSortBy("category")}
                    className={`flex flex-col rounded-xl p-4 ${sortBy === "category" ? "bg-active: bg-white" : "bg-inactive: bg-gray-400"}`}
                >
                    <p className="text-green-800">Sort by <br /> Category</p>
                </button>

                <button
                    onClick={() => setSortBy("grouped")}
                    className={`flex flex-col rounded-xl p-4 ${sortBy === "grouped" ? "bg-active: bg-white" : "bg-inactive: bg-gray-400"}`}
                >
                    <p className="text-green-800">Grouped by <br /> Category</p>
                </button>
      

            </div>

            {sortBy === "grouped" ? (
                <div>
                    {groupedItems().map((group) => (
                        <div key={group.category} className="bg-white rounded-xl max-w-sm p-2 mb-6 mx-auto">
                            <h2 className="text-xl font-bold capitalize text-center text-green-800 my-2">
                                {group.category}
                            </h2>
                            <ul>
                                {group.items.map((item) => (
                                    <Item key={item.id} item={item} onSelect={() => onItemSelect(item)}/>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            
            ) : (
                <ul>
                    {sortedItems.map((item) => (
                        <Item 
                            key={item.id} 
                            item={item} 
                            onSelect={() => onItemSelect(item)} 
                        />
                    ))}
                </ul>
            )}
        
        </div>  
    );
} 

export default ItemList;