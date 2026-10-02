"use client"

import { useState } from "react";

function NewItem() 
{
    const [quantity, setQuantity] = useState(1);
    const increment = () => 
    {
        setQuantity(quantity => 
            { 
                if(quantity < 20) {return quantity + 1;}
                else {return quantity;}
                // else if(quantity >= 20) {return quantity}
                // else {return <p>Error</p>}
                //testing to figure out how to display error messages
            })
    }
}
