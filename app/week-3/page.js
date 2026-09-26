import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">
          Shopping List
        </h1>

        <ItemList />
      </div>
    </main>
  );
}