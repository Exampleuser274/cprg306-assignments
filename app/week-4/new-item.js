"use client";

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    function increment(){
        setQuantity((currentQuantity) => {
            if(currentQuantity < 20){
                return currentQuantity + 1;
            }
            return currentQuantity;
        });
    }

    function decrement(){
        setQuantity((currentQuantity) => {
            if (currentQuantity > 1){
                return currentQuantity - 1;
            }
            return currentQuantity;
        });
    }


    // Delete this hello world when done
    return(
        <p>Hello World from new item js week 4!</p>
    );
}