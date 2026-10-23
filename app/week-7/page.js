'use client'
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from './items.json'
export default function Page(){
    const [items,setItems] = useState(itemsData);
    function handleAddItem(addItem) {
        setItems([...items,addItem])
    }
    return(
        <main className="flex min-w-screen flex-col items-center">
            <h1 className="text-3xl font-bold mt-2 mb-2 text-left">Shopping List</h1>
            <newItem onAddItem={handleAddItem()}/>
            <ItemList itemsState={items} />
        </main>
    );
}