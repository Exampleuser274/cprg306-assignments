'use client';
import { useState

 } from "react";


 export default function NewItem () {
    const [quantity, setQuantity] = useState(1);

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
        <div>
        <h1 className="text-4xl font-bold bg-amber-900 p-10">{quantity}</h1>
        <button onClick={increment} className="text-3xl font-bold px-5 bg-emerald-700">+</button> <button onClick={decrement}className="text-3xl font-bold px-5.5 bg-red-700">-</button>
        </div>
    );
 }