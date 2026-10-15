
import Item from "./item";
import { useState } from "react";
import ItemJson from  './items.json'
export default function ItemList() {
const [sortBy,setSortBy] = useState("name");
const [itemList,setItemList] = useState(ItemJson);

const sortedItems = [...itemList].sort((a,b)=>{
  if (sortBy==='name') return a.name.localeCompare(b.name)
  if (sortBy==='category') return a.category.localeCompare(b.name)
})


return (<div>
  <div>
    <button onClick={() =>setSortBy("name")} className= {sortBy=='name' ? "bg-green-600 p-1 rounded-sm" : "bg-red-600 p-1 rounded-sm"} >Name</button>
    <button onClick={() =>setSortBy("category")} className= {sortBy=='category' ? "bg-green-600 p-1 rounded-sm" : "bg-red-600 p-1 rounded-sm"}>Category</button>
    </div>
    <ul >
  {sortedItems.map((item) => (
    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>
  ))}
  
  
</ul>
</div>);
};
