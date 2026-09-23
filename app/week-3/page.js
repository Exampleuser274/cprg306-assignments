import React from "react";
import ItemList from "./item-list";

function Page() {
  return (
    <main className="p-6 bg-green-800 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;