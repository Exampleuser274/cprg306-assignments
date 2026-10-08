'use client';
import { useState

 } from "react";


 export default function NewItem () {
    const items = [
        {value: 'produce', label: 'Produce'},
        {value: 'bakery', label: 'Bakery'},
        {value: 'Meat', label: 'Meat'},
        {value: 'dairy', label: 'Dairy'},
        {value: 'canned', label: 'Canned Goods'},
        {value: 'dry', label: 'Dry Goods'},
        {value: 'household', label: 'Household'},
    ]
     const [selectedValue, setSelectedValue] = useState('produce');
    const [quantity, setQuantity] = useState(1);
    const [name,setName] = useState('');
    
    const handleChange = (event) => {
        setName(event.target.value);
    }
    const handleSelect = (event) => {
    setSelectedValue(event.target.value);
  };
    const handleSubmit = (event) => {
    if (name == ""){
        e.preventDefault();
        alert("Name cannot be empty");
    }
    const item = {name: `${name}`, quantity: `${quantity}`, area:`${selectedValue}` }
    console.log(item)
    alert(`Added Item(s): ${item.quantity} ${item.name} in ${item.area}`);
  };
    const increment = () => {
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    };
    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    };
    return(
        <form onSubmit={handleSubmit}>
        <div className="flex justify-center">
        <h1 className="text-4xl font-bold bg-amber-900 p-10 max-w-29">{quantity}</h1>
        <button  type='button' onClick={increment} className="text-3xl font-bold px-5 bg-emerald-700">+</button> <button type='button' onClick={decrement}className="text-3xl font-bold px-5.5 bg-red-700">-</button>
        </div>
        <div className="flex justify-center">
        <label>
            <input
        type="text"
                  // Native HTML form name identifier
        value={name}             // Binds the input value to our state
        onChange={handleChange}  // Updates state when the user types
        className="flex justify-center  bg-stone-400 "
      />
        </label>
        </div>
        <div className="flex justify-center  bg-cyan-900 ">
            <label >
        Category: 
        <select value={selectedValue} onChange={handleSelect}>
          {items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
        </div>
          <div>
            <button className="flex justify-center  bg-gray-500 p-2">Submit</button>
          </div>
        </form>

    );
 }