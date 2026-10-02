"use client"

import { useState } from "react";

function NewItem() 
{
    const [quantity, setQuantity] = useState(1);

}
function increment()
{
    setQuantity((localQuantity) =>
        { 
            if(localQuantity < 20){return localQuantity + 1}
            else if (localQuantity = 20){return localQuantity}
            else {return localQuantity = 20}
        });
}
function decrement()
{
    setQuantity((localQuantity) =>
        { 
            if(localQuantity > 1){return localQuantity - 1}
            else if(localQuantity = 1){return localQuantity}
            else {return localQuantity = 1}
        });
}