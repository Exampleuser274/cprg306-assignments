"use client";

import { useState } from "react";



function NewItem () {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    
    const increment = () => {
      if (quantity < 20) {
        setQuantity(quantity + 1);
      };
    };

    const decrement = () => {
      if(quantity > 1) {
        setQuantity(quantity - 1);
      }
      else setQuantity(quantity);
    };

    function handleSubmit(event) {
        event.preventDefault(); 
        const item = ({name, quantity, category});
        console.log(item);
        alert(`\nItem Added: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

   return (
    
    <div className="flex flex-col items-center justify-center space-y-4 m-4 bg-white p-4 rounded-lg max-w-md mx-auto ">
        
        <form className="w-full">
            <label className="block w-full"> 
                <input 
                    className="w-full border border-gray-800 p-3 rounded-md "
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Item Name" 
                    required 
                />
            </label>
        </form>

        <div className="flex items-center justify-between w-full">

            <div className="flex items-center space-x-3">
                <p className=" flex items-center justify-center w-10 h-10 text-xl font-bold text-gray-800 border border-gray-800 rounded-xl ">
                {quantity}
                </p>
        
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    className="w-10 h-10 bg-green-800 text-gray-200 font-semibold rounded-md transition-colors duration-200 hover:bg-green-800 focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                    -
                </button>

                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    className="w-10 h-10 bg-green-800 text-gray-200 font-semibold rounded-md transition-colors duration-200 hover:bg-green-800 focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">
                    +
                </button>
            </div>

            <select 
                className="border border-gray-800 rounded-md p-3"
                id="category-select"
                value={category} 
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
            </select> 

        </div>


        <div className="w-full text-center">
            <button 
                onClick={handleSubmit}
                className="w-full bg-green-800 text-gray-200 py-2 rounded" 
                type="submit">
                Add Item
            </button>
        </div>

    </div> 
 
  );
}


export default NewItem