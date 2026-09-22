import ItemList from "./item-list";
export default function Page(){
    return(
        <main className="flex min-w-screen flex-col items-center">
            <h1 className="text-3xl font-bold mt-2 mb-2 text-left">Shopping List</h1>
            <ItemList />
        </main>
    );
}