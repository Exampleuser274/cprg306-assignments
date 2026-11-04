'use client'
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json'
import MealIdeas from "./meal-ideas";
import { useState } from "react";
export default function Page(){
    const [items,setItems] = useState(itemsData);
    const [selectedItemName,setSelectedItemName] = useState("");
    function handleAddItem(addItem) {
        setItems([...items,addItem])
    }
    function handleItemSelect(item) {
        const cleanedName = item.name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/[0-9]/g, "").replace("kg","").trim()
        setSelectedItemName(cleanedName)
    }
    return(
        <main className="flex min-w-screen flex-col items-center">
            <div>
                <h1 className="text-3xl font-bold mt-2 mb-2 text-left">Shopping List</h1>
                <newItem onAddItem={handleAddItem()}/>
                <ItemList itemsState={items} onItemSelect={handleItemSelect}/>
            </div>
            <div>
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    );
}